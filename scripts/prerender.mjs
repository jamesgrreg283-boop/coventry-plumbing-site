/**
 * Post-build prerender: writes per-route HTML with unique head tags + crawlable body copy
 * so Googlebot receives meaningful content without executing JavaScript.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  ALL_PRERENDER_ROUTES,
  SITE_URL,
  PHONE,
  PHONE_TEL,
  OPERATOR_EMAIL,
  canonicalFor,
  organizationSchema,
  websiteSchema,
} from "../src/seoConfig.js";
import { SERVICE_LANDINGS } from "../src/serviceLandingContent.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const templatePath = path.join(dist, "index.html");

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function breadcrumbSchema(route) {
  if (route.path === "/") return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: route.h1, item: canonicalFor(route.path) },
    ],
  };
}

function serviceSchema(route) {
  if (route.path === "/" || route.path.startsWith("/privacy") || route.path.startsWith("/terms") || route.path.startsWith("/cookies")) {
    return null;
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: route.h1,
    serviceType: route.primaryQuery || route.h1,
    description: route.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Coventry and Warwickshire, United Kingdom",
    url: canonicalFor(route.path),
  };
}

function faqSchema(pathKey) {
  const landing = SERVICE_LANDINGS[pathKey];
  const items = landing?.extraFaqItems;
  if (!items?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function buildSeoBody(route) {
  const landing = SERVICE_LANDINGS[route.path];
  const paragraphs = landing?.paragraphs || [];
  const intro =
    paragraphs[0] ||
    "coventryplumbing247 is a lead generation and introduction service. We connect customers with independent local plumbing engineers. We do not carry out plumbing work ourselves.";

  const more = paragraphs.slice(1, 4).map((p) => `<p>${escapeHtml(p)}</p>`).join("\n");
  const services = (landing?.serviceListItems || [])
    .slice(0, 6)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  return `
<main id="seo-prerender" data-seo-route="${escapeHtml(route.path)}">
  <p><strong>Important:</strong> coventryplumbing247 is a lead generation and customer introduction platform. Independent third-party engineers assess, quote and carry out any work. Confirm charges directly with the attending engineer.</p>
  <h1>${escapeHtml(route.h1)}</h1>
  <p>${escapeHtml(intro)}</p>
  ${more}
  ${services ? `<h2>How we can help</h2><ul>${services}</ul>` : ""}
  <p>Call <a href="tel:${PHONE_TEL}">${escapeHtml(PHONE)}</a> or email <a href="mailto:${OPERATOR_EMAIL}">${escapeHtml(OPERATOR_EMAIL)}</a>.</p>
  <nav aria-label="Popular pages">
    <a href="/">Home</a> ·
    <a href="/emergency-plumber-coventry">Emergency Plumber Coventry</a> ·
    <a href="/boiler-repair-coventry">Boiler Repair</a> ·
    <a href="/blocked-drain-coventry">Blocked Drain</a> ·
    <a href="/leak-repair-coventry">Leak Repair</a>
  </nav>
</main>`.trim();
}

function injectHead(html, route) {
  const canon = canonicalFor(route.path);
  const robots = route.robots || "index,follow";
  const schemas = [
    organizationSchema(),
    websiteSchema(),
    breadcrumbSchema(route),
    serviceSchema(route),
    faqSchema(route.path),
  ].filter(Boolean);

  const headBits = [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(canon)}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escapeHtml(canon)}" />`,
    `<meta property="og:locale" content="en_GB" />`,
    ...schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`),
  ].join("\n    ");

  let out = html
    .replace(/<title>[^<]*<\/title>/i, "")
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, "")
    .replace(/<meta\s+name="robots"[^>]*>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "")
    .replace(/<meta\s+property="og:[^"]+"[^>]*>\s*/gi, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, "");
  if (!out.includes("</head>")) throw new Error("No </head> in template");
  out = out.replace("</head>", `    ${headBits}\n  </head>`);
  return out;
}

function injectBody(html, route) {
  const body = buildSeoBody(route);
  // Place crawlable content inside #root; React replaces it on hydrate/mount.
  if (html.includes('<div id="root"></div>')) {
    return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  }
  if (html.includes('<div id="root">')) {
    return html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${body}</div>`);
  }
  throw new Error("Could not find #root in template");
}

function writeRoute(route, template) {
  let html = injectHead(template, route);
  html = injectBody(html, route);

  if (route.path === "/") {
    fs.writeFileSync(path.join(dist, "index.html"), html);
    console.log("prerender /");
    return;
  }

  const dir = path.join(dist, route.path.replace(/^\//, ""));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`prerender ${route.path}`);
}

function write404(template) {
  const route = {
    path: "/404",
    title: "Page not found | coventryplumbing247",
    description: "That page does not exist. Call 024 7590 5456 for urgent plumbing help in Coventry, or return home.",
    h1: "Page not found",
    robots: "noindex,follow",
  };
  let html = injectHead(template, route);
  const body = `
<main id="seo-prerender">
  <h1>Page not found</h1>
  <p>Sorry — this URL is not a published page on coventryplumbing247.</p>
  <p>For urgent plumbing help in Coventry and nearby areas, call <a href="tel:${PHONE_TEL}">${PHONE}</a>.</p>
  <p><a href="/">Return to homepage</a> · <a href="/emergency-plumber-coventry">Emergency plumber Coventry</a></p>
</main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  fs.writeFileSync(path.join(dist, "404.html"), html);
  console.log("prerender /404.html");
}

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html missing — run vite build first");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf8");
for (const route of ALL_PRERENDER_ROUTES) {
  writeRoute(route, template);
}
write404(template);
console.log(`Done — ${ALL_PRERENDER_ROUTES.length} routes + 404`);
