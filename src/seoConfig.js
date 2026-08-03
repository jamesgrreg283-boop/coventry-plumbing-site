/**
 * Single source of truth for indexable routes, metadata and prerender shells.
 * Keep in sync with SERVICE_PAGES / LEGAL_PAGES in App.jsx and SERVICE_LANDINGS.
 */

export const SITE_URL = "https://coventryplumbing247.co.uk";
export const PHONE = "024 7590 5456";
export const PHONE_TEL = "+442475905456";
export const OPERATOR_NAME = "coventryplumbing247 Lead Services";
export const OPERATOR_EMAIL = "support@coventryplumbing247.co.uk";

/** Canonical commercial + location + home routes (no trailing slash). */
export const INDEXABLE_ROUTES = [
  {
    path: "/",
    title: "Plumbing Help Coventry | Emergency & Everyday Introductions",
    description:
      "Need a plumber in Coventry? We introduce you to independent local engineers for emergencies, leaks, drains and boiler faults. Call 024 7590 5456.",
    h1: "Reliable plumbing help in Coventry",
    primaryQuery: "plumber Coventry",
  },
  {
    path: "/emergency-plumber-coventry",
    title: "Emergency Plumber Coventry | 24/7 Call-Out Help",
    description:
      "Emergency plumber Coventry introductions for burst pipes, leaks, blocked drains and boiler failures. Call 024 7590 5456 — independent engineers, pricing confirmed on attendance.",
    h1: "Emergency Plumber Coventry – 24/7 Callouts",
    primaryQuery: "emergency plumber Coventry",
  },
  {
    path: "/boiler-repair-coventry",
    title: "Boiler Repair Coventry | No Heat or Hot Water Help",
    description:
      "Boiler repair Coventry: connect with vetted local engineers for no heat, no hot water and pressure faults. Gas work routed to appropriately registered engineers.",
    h1: "Boiler Repair Coventry",
    primaryQuery: "boiler repair Coventry",
  },
  {
    path: "/blocked-drain-coventry",
    title: "Blocked Drain Coventry | Local Drain Unblocking Help",
    description:
      "Blocked drain Coventry support for sinks, toilets and outside drains. We introduce independent engineers; confirm costs before work starts.",
    h1: "Blocked Drain Help in Coventry",
    primaryQuery: "blocked drain Coventry",
  },
  {
    path: "/leak-repair-coventry",
    title: "Leak Repair Coventry | Pipe & Water Leak Help",
    description:
      "Leak repair Coventry for burst pipes, under-sink leaks and damp from plumbing. Fast introductions to local engineers — isolate water if safe, then call.",
    h1: "Leak Repair in Coventry",
    primaryQuery: "leak repair Coventry",
  },
  {
    path: "/emergency-plumber-nuneaton",
    title: "Emergency Plumber Nuneaton | 24/7 Urgent Call-Out Help",
    description:
      "Emergency plumber Nuneaton for CV10–CV11: burst pipes, leaks, drains and boiler faults. Introduction service to independent engineers. Call 024 7590 5456.",
    h1: "Emergency Plumber Nuneaton – 24/7 Callouts",
    primaryQuery: "emergency plumber Nuneaton",
  },
  {
    path: "/emergency-plumber-bedworth",
    title: "Emergency Plumber Bedworth | 24/7 Urgent Call-Out Help",
    description:
      "Emergency plumber Bedworth for CV12 and nearby villages. Independent engineer introductions for urgent leaks, drains and heating faults.",
    h1: "Emergency Plumber Bedworth – 24/7 Callouts",
    primaryQuery: "emergency plumber Bedworth",
  },
  {
    path: "/emergency-plumber-rugby",
    title: "Emergency Plumber Rugby | 24/7 Urgent Call-Out Help",
    description:
      "Emergency plumber Rugby across CV21–CV23. We introduce independent local engineers for burst pipes, leaks, drains and boiler emergencies.",
    h1: "Emergency Plumber Rugby – 24/7 Callouts",
    primaryQuery: "emergency plumber Rugby",
  },
  {
    path: "/emergency-plumber-warwick",
    title: "Emergency Plumber Warwick | 24/7 Urgent Call-Out Help",
    description:
      "Emergency plumber Warwick for CV34–CV35. Introduction service connecting you with independent engineers for urgent plumbing faults.",
    h1: "Emergency Plumber Warwick – 24/7 Callouts",
    primaryQuery: "emergency plumber Warwick",
  },
  {
    path: "/emergency-plumber-leamington-spa",
    title: "Emergency Plumber Leamington Spa | 24/7 Call-Out Help",
    description:
      "Emergency plumber Leamington Spa for CV31–CV32. Independent engineer introductions for leaks, drains, burst pipes and boiler faults.",
    h1: "Emergency Plumber Leamington Spa – 24/7 Callouts",
    primaryQuery: "emergency plumber Leamington Spa",
  },
  {
    path: "/emergency-plumber-kenilworth",
    title: "Emergency Plumber Kenilworth | 24/7 Urgent Call-Out Help",
    description:
      "Emergency plumber Kenilworth for CV8. We introduce independent engineers for urgent leaks, drains and heating faults — pricing confirmed before work.",
    h1: "Emergency Plumber Kenilworth – 24/7 Callouts",
    primaryQuery: "emergency plumber Kenilworth",
  },
];

export const LEGAL_ROUTES = [
  {
    path: "/privacy",
    title: "Privacy Policy | coventryplumbing247",
    description: "How coventryplumbing247 collects and shares enquiry data with independent engineers.",
    h1: "Privacy Policy",
    robots: "index,follow",
  },
  {
    path: "/terms",
    title: "Terms of Use | coventryplumbing247",
    description: "Terms for using coventryplumbing247, a lead generation and introduction platform.",
    h1: "Terms & Conditions",
    robots: "index,follow",
  },
  {
    path: "/cookies",
    title: "Cookie Policy | coventryplumbing247",
    description: "Cookie use on coventryplumbing247.co.uk for essential function and measurement.",
    h1: "Cookie Policy",
    robots: "index,follow",
  },
];

export const ALL_PRERENDER_ROUTES = [...INDEXABLE_ROUTES, ...LEGAL_ROUTES];

export const KNOWN_PATHS = new Set(ALL_PRERENDER_ROUTES.map((r) => r.path));

export function canonicalFor(path) {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "coventryplumbing247",
    alternateName: "Coventry Plumbing 24/7",
    url: SITE_URL,
    telephone: PHONE_TEL,
    email: OPERATOR_EMAIL,
    description:
      "Lead generation and customer introduction platform connecting people with independent local plumbing engineers across Coventry and nearby Warwickshire.",
    areaServed: [
      { "@type": "City", name: "Coventry" },
      { "@type": "AdministrativeArea", name: "Warwickshire" },
      { "@type": "AdministrativeArea", name: "West Midlands" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_TEL,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: ["English"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "coventryplumbing247",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
