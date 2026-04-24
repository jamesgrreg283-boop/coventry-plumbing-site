import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { SERVICE_LANDINGS, EMERGENCY_PLUMBER_FAQ } from "./serviceLandingContent.js";

const PHONE = "024 7590 5456";
const PHONE_TEL = "+442475905456";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqodvqk";
const SITE_URL = "https://coventryplumbing247.co.uk";
const OPERATOR_NAME = "coventryplumbing247 Lead Services";
const OPERATOR_EMAIL = "support@coventryplumbing247.co.uk";

const ISSUES = [
  { id: "burst-pipe-water-leak", label: "Burst Pipe/Water Leak", icon: "💧", desc: "Urgent water leak support" },
  { id: "boiler-breakdown", label: "Boiler Breakdown", icon: "🔥", desc: "Heating or boiler faults" },
  { id: "blocked-drain-toilet", label: "Blocked Drain/Toilet", icon: "🚿", desc: "Drains, toilets, sink blockages" },
  { id: "no-hot-water", label: "No Hot Water", icon: "🚨", desc: "No hot water or heating issues" },
  { id: "other-emergency", label: "Other Emergency", icon: "🔧", desc: "Any other urgent plumbing issue" },
];

const URGENCY_OPTIONS = [
  { id: "right-now", label: "Right Now", icon: "🚨", desc: "Emergency — need help immediately", color: "#ef4444" },
  { id: "today", label: "Today", icon: "⚡", desc: "Urgent — needs fixing today", color: "#f59e0b" },
  { id: "this-week", label: "This Week", icon: "📅", desc: "Soon — can wait a day or two", color: "#10b981" },
];

const CALLBACK_TIMES = [
  { id: "asap", label: "As soon as possible" },
  { id: "morning", label: "Morning (8am–12pm)" },
  { id: "afternoon", label: "Afternoon (12pm–5pm)" },
  { id: "evening", label: "Evening (5pm–8pm)" },
];

const PROPERTY_TYPES = [
  { id: "house", label: "🏠 House" },
  { id: "flat", label: "🏢 Flat" },
  { id: "rented", label: "🔑 Rented" },
  { id: "commercial", label: "🏪 Commercial" },
];

const TRUST_STATS = [
  { value: "47+", label: "Coventry homeowners helped this month" },
  { value: "< 60 min", label: "Average engineer response time" },
  { value: "4.9 ★", label: "Average customer satisfaction" },
  { value: "24/7", label: "Always available, no exceptions" },
];

const TESTIMONIALS = [
  { name: "Sarah M.", location: "Coventry, CV1", text: "Burst pipe at 11pm on a Sunday — they had someone at my door within 40 minutes. Absolute lifesavers. Couldn't recommend more.", stars: 5 },
  { name: "James T.", location: "Coventry, CV2", text: "Boiler packed in during January. Got connected to a local engineer same evening. Fair price, no nonsense. Will definitely use again.", stars: 5 },
  { name: "Priya K.", location: "Coventry, CV6", text: "Really impressed — the form was simple, they called me back within minutes and the plumber fixed our blocked drain quickly.", stars: 5 },
];

/** Stock photos of plumbers at work (Unsplash) — illustrative only; engineers are independent contractors. */
const EMERGENCY_SERVICES = [
  {
    src: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80",
    alt: "Plumber working under a kitchen sink",
    icon: "🔧",
    title: "Pipe repair & replacement",
    desc: "Fast local help for damaged, leaking, or frozen pipes. We dispatch local vetted plumbers to limit water damage and get your plumbing back in order.",
    path: "/leak-repair-coventry",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    alt: "Engineer inspecting a boiler",
    icon: "🔥",
    title: "Boiler repairs & servicing",
    desc: "Urgent heating and hot water faults. We dispatch Gas Safe registered plumbers where required.",
    path: "/boiler-repair-coventry",
  },
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    alt: "Plumber working on pipework and tools",
    icon: "🚿",
    title: "Drain & blockage clearance",
    desc: "Blocked drains, toilets, and sinks. We dispatch local vetted plumbers for high-pressure jetting and clearance with as little disruption as possible.",
    path: "/blocked-drain-coventry",
  },
  {
    src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80",
    alt: "Plumber repairing copper pipework",
    icon: "💧",
    title: "Leak detection & repair",
    desc: "Visible leaks and urgent damp or water damage. We dispatch local vetted plumbers who can locate and repair leaks before bills and damage mount.",
    path: "/leak-repair-coventry",
  },
];

const COVENTRY_AREAS = [
  { title: "Coventry City Centre", places: "Cathedral Quarter, Spon End, Hillfields" },
  { title: "North Coventry", places: "Radford, Holbrooks, Foleshill" },
  { title: "South Coventry", places: "Cheylesmore, Earlsdon, Stivichall" },
  { title: "Warwickshire surrounds", places: "Kenilworth, Leamington Spa, Nuneaton" },
];

const WHY_US = [
  { icon: "⚡", title: "Fast Response", desc: "Local engineers dispatched fast — often within the hour for emergencies." },
  { icon: "📍", title: "Local & Verified", desc: "We connect you with Gas Safe registered engineers where required." },
  { icon: "🕐", title: "24/7 Cover", desc: "Day or night, weekends or bank holidays — we're always available." },
  { icon: "💷", title: "Clear pricing", desc: "What you pay depends on the engineer and the job — always confirm costs before work starts." },
];

const STEPS = [
  { num: "01", title: "Tell us your issue", desc: "Use the quick selector or fill in the form — takes under 60 seconds." },
  { num: "02", title: "We connect you", desc: "We connect you with local, vetted engineers in Coventry." },
  { num: "03", title: "Get it fixed fast", desc: "Your engineer arrives and sorts the problem — job done." },
];

const FAQS = [
  { q: "How quickly can a plumber get to me?", a: "For emergencies, we aim to dispatch a local vetted plumber within minutes. Response times vary, but many urgent call-outs are attended within 30–60 minutes depending on your location, time of day, and live plumber availability." },
  { q: "Do you cover my area?", a: "We cover all Coventry postcodes including CV1, CV2, CV3, CV4, CV5, CV6, CV7, CV8 and surrounding areas. If you're unsure, submit your postcode in the form and we'll confirm whether we can help." },
  { q: "Is there a call-out fee?", a: "Call-out fees and minimum charges depend on the engineer and the type of job. Your engineer will explain any costs before work begins — always confirm pricing on the phone or on site." },
  { q: "Do you dispatch Gas Safe plumbers?", a: "Yes. We dispatch Gas Safe registered plumbers where required, and all plumbers in our local network are vetted and insured." },
  { q: "Can I use this service if I'm a tenant?", a: "Absolutely. We work with homeowners, tenants, and landlords. If you're renting, we'd recommend notifying your landlord at the same time — but for emergencies, just contact us first." },
  { q: "What if my issue isn't listed?", a: "No problem — just select 'Other plumbing issue' in the form and describe your problem. We handle all plumbing and heating issues, big or small." },
];

const SERVICE_PAGES = {
  "/": {
    title: "Reliable Plumbing Services in Coventry | Emergency & General | coventryplumbing247",
    description: "Local plumbing support across Coventry and nearby areas — introductions to vetted engineers for everyday jobs, heating, drains and leaks. For urgent issues, call now for fast local help.",
    h1Prefix: "Reliable plumbing services",
    h1Highlight: "in Coventry",
    h1Suffix: "Emergency & general help",
    intro: "We connect you with local, vetted engineers for repairs, maintenance and urgent call-outs. Based around Coventry and surrounding towns — use the form for any job, or call now for immediate help with any plumbing issue.",
  },
  "/emergency-plumber-coventry": {
    title: "Emergency Plumber Coventry | 24 Hour Urgent Plumbing Help | coventryplumbing247",
    description: "Need an emergency plumber Coventry homeowners can call 24/7? We dispatch local vetted plumbers for burst pipes, leaks, blocked drains, boiler breakdowns and no hot water across Coventry.",
    h1Prefix: "24 Hour Emergency",
    h1Highlight: "Plumber Coventry",
    h1Suffix: "Rapid Local Callouts",
    intro: "Need emergency plumbing Coventry support right now? We dispatch local vetted plumbers for burst pipes, major leaks, drainage failures, no hot water and boiler breakdowns — day or night across Coventry neighbourhoods.",
  },
  "/boiler-repair-coventry": {
    title: "Boiler Repair Coventry | No Heat or Hot Water | coventryplumbing247",
    description: "Need boiler repair in Coventry? Fast local engineer connections for no heat, no hot water, pressure issues and faults.",
    h1Prefix: "Boiler Repair",
    h1Highlight: "in Coventry",
    h1Suffix: "Fast Local Engineers",
    intro: "No heating or hot water? Get connected with a vetted local Coventry engineer in minutes.",
  },
  "/blocked-drain-coventry": {
    title: "Blocked Drain Coventry | Fast Drain Unblocking | coventryplumbing247",
    description: "Blocked drain in Coventry? Get rapid local help for blocked sinks, toilets, shower drains and outside pipes.",
    h1Prefix: "Blocked Drain",
    h1Highlight: "Help in Coventry",
    h1Suffix: "Quick Unblocking Service",
    intro: "From blocked sinks to overflowing toilets, we connect you with local, vetted engineers quickly.",
  },
  "/leak-repair-coventry": {
    title: "Leak Repair Coventry | Leak Detection & Fixes | coventryplumbing247",
    description: "Leak repair Coventry for burst pipes, hidden leaks and damp issues. Fast local callouts and transparent pricing.",
    h1Prefix: "Leak Repair",
    h1Highlight: "in Coventry",
    h1Suffix: "Fast Detection & Fix",
    intro: "Spotted a leak or damp patch? We help you get local leak repair support quickly and safely.",
  },
};

const LEGAL_BUSINESS_MODEL = "coventryplumbing247 is a lead generation and customer introduction service. We connect customers with independent local plumbing engineers. We do not carry out plumbing work ourselves and are not a plumbing contractor.";

const LEGAL_PAGES = {
  "/privacy": {
    title: "Privacy Policy | coventryplumbing247",
    heading: "Privacy Policy",
    body: [
      "We collect and process your personal data (such as name, phone number, postcode, and job details) solely for the purpose of connecting you with relevant local engineers and facilitating your enquiry.",
      "Your details may be shared with one or more trusted third-party engineers in your area so they can contact you regarding your request.",
      "We process your data based on legitimate interest to provide our service and respond to your enquiry.",
      "We retain your data only for as long as necessary to fulfil your enquiry and for a reasonable period thereafter for service improvement and record-keeping.",
      "You can contact us at any time to ask about your personal data, including requests for access, correction, or deletion where applicable.",
    ],
  },
  "/terms": {
    title: "Terms & Conditions | coventryplumbing247",
    heading: "Terms & Conditions",
    body: [
      "When you submit an enquiry through this website, we pass your request to independent engineers who may contact you directly to discuss availability, pricing, and next steps.",
      "We are not responsible for the quality, safety, pricing, or outcome of any work carried out by third-party engineers. Any agreement for work is made directly between you and the engineer.",
      "Any guarantees or warranties are provided solely by the engineer carrying out the work, where applicable.",
      "Please confirm scope, cost, response time, and terms directly with the engineer before agreeing to any work.",
    ],
  },
  "/cookies": {
    title: "Cookie Policy | coventryplumbing247",
    heading: "Cookie Policy",
    body: [
      "We may use cookies and similar technologies to improve website performance, understand user behaviour, and enhance your experience.",
      "This may include essential cookies needed for basic site functionality and analytics cookies that help us understand how visitors use the website.",
      "By continuing to use this site, you agree to the use of cookies as described in this policy. You can manage cookies through your browser settings at any time.",
    ],
  },
};

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: "white", borderRadius: 16, overflow: "hidden", border: open ? "2px solid #6366f1" : "2px solid #f1f5f9", transition: "border-color 0.2s", boxShadow: open ? "0 4px 24px rgba(99,102,241,0.1)" : "0 1px 4px rgba(0,0,0,0.04)" }}>
      <button type="button" onClick={() => setOpen((o) => !o)} style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left", gap: 16 }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 16, color: "#0f172a", lineHeight: 1.4 }}>{q}</span>
        <span style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: open ? "linear-gradient(135deg, #0ea5e9, #6366f1)" : "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: open ? "white" : "#64748b", transition: "all 0.2s", transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      {open && <div style={{ padding: "0 24px 20px", color: "#475569", fontSize: 15, lineHeight: 1.7 }}>{a}</div>}
    </div>
  );
}

function ServiceLandingContent({ landing, pagePath, scrollToForm }) {
  if (!landing) return null;
  const isEmergencyPage = pagePath === "/emergency-plumber-coventry";
  const sectionHeading = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.5vw, 28px)", color: "#0f172a", marginBottom: 16 };
  const ctaBox = { maxWidth: 720, margin: "24px auto 0", textAlign: "center", padding: "24px 20px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16 };
  const [storyPrimary, storySupportA, storySupportB, storyWide, storyProcess, ...storyExtras] = landing.paragraphs;
  const contentMaxWidth = isEmergencyPage ? 1160 : 720;
  const emergencyPanelStyle = isEmergencyPage
    ? {
        background: "#ffffff",
        border: "1px solid #dbe3f0",
        borderRadius: 16,
        padding: "22px 24px",
        boxShadow: "0 10px 28px rgba(15, 23, 42, 0.06)",
      }
    : {};
  const emergencyBulletListStyle = isEmergencyPage
    ? {
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "12px 18px",
      }
    : {
        margin: 0,
        paddingLeft: 22,
      };
  return (
    <section style={{ padding: "56px clamp(16px, 4vw, 48px) 80px", background: isEmergencyPage ? "linear-gradient(180deg, #f8fbff 0%, #eef5ff 52%, #ffffff 100%)" : "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
      {isEmergencyPage ? (
        <div className="emergency-story-wrap">
          <div className="emergency-story-header">
            <p className="emergency-story-kicker">Local emergency context</p>
            <h2 className="syne-heading emergency-story-title">Emergency plumber Coventry: quick local guidance</h2>
            <p className="emergency-story-subtitle">A clear local breakdown of urgent plumbing issues, neighbourhood coverage, and what happens next.</p>
          </div>
          <div className="emergency-story-grid">
            {storyPrimary ? (
              <article className="emergency-story-card primary">
                <p className="emergency-story-chip">📍 Local context</p>
                <p>{storyPrimary}</p>
              </article>
            ) : null}
            {storySupportA ? (
              <article className="emergency-story-card side side-a">
                <p className="emergency-story-chip">💧 Common emergencies</p>
                <p>{storySupportA}</p>
              </article>
            ) : null}
            {storySupportB ? (
              <article className="emergency-story-card side side-b">
                <p className="emergency-story-chip">⚡ Urgency guidance</p>
                <p>{storySupportB}</p>
              </article>
            ) : null}
            {storyWide ? (
              <article className="emergency-story-card wide">
                <p className="emergency-story-chip">🗺️ Areas we cover</p>
                <p>{storyWide}</p>
              </article>
            ) : null}
            {storyProcess ? (
              <article className="emergency-story-card process">
                <p className="emergency-story-chip">🛠️ What happens after you contact us</p>
                <p>{storyProcess}</p>
              </article>
            ) : null}
            {storyExtras.map((text, i) => (
              <article key={i} className="emergency-story-card extra">
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <article style={{ maxWidth: 720, margin: "0 auto" }}>
          {landing.paragraphs.map((text, i) => (
            <p key={i} style={{ color: "#475569", fontSize: 16, lineHeight: 1.78, marginBottom: i === landing.paragraphs.length - 1 ? 0 : 20 }}>{text}</p>
          ))}
        </article>
      )}
      {landing.whenNeedBullets?.length ? (
        <div style={{ maxWidth: contentMaxWidth, margin: "40px auto 0" }}>
          <h2 className="syne-heading" style={sectionHeading}>{isEmergencyPage ? "Emergency plumber Coventry: when to call immediately" : "When You Need an Emergency Plumber"}</h2>
          <ul style={{ ...emergencyBulletListStyle, color: "#475569", fontSize: isEmergencyPage ? 16 : 15, lineHeight: isEmergencyPage ? 1.75 : 1.85, ...emergencyPanelStyle }}>
            {landing.whenNeedBullets.map((item) => (
              <li key={item} style={{ marginBottom: isEmergencyPage ? 0 : 8, display: "flex", alignItems: "flex-start", gap: isEmergencyPage ? 10 : 0 }}>
                {isEmergencyPage ? <span aria-hidden style={{ color: "#4f46e5", fontWeight: 800, lineHeight: 1.2 }}>•</span> : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {landing.fastResponseBody ? (
        <div style={{ maxWidth: contentMaxWidth, margin: "40px auto 0" }}>
          <h2 className="syne-heading" style={sectionHeading}>{isEmergencyPage ? "24 hour plumber Coventry coverage" : "Fast Response Across Coventry"}</h2>
          <p style={{ color: "#475569", fontSize: isEmergencyPage ? 17 : 16, lineHeight: 1.78, margin: 0, ...emergencyPanelStyle }}>{landing.fastResponseBody}</p>
        </div>
      ) : null}
      {landing.whyChooseBullets?.length ? (
        <div style={{ maxWidth: contentMaxWidth, margin: "40px auto 0" }}>
          <h2 className="syne-heading" style={sectionHeading}>{isEmergencyPage ? "Urgent plumbing services Coventry: why call us" : "Why Choose Us"}</h2>
          <ul style={{ ...emergencyBulletListStyle, color: "#475569", fontSize: isEmergencyPage ? 16 : 15, lineHeight: isEmergencyPage ? 1.72 : 1.85, ...emergencyPanelStyle }}>
            {landing.whyChooseBullets.map((item) => (
              <li key={item} style={{ marginBottom: isEmergencyPage ? 0 : 8, display: "flex", alignItems: "flex-start", gap: isEmergencyPage ? 10 : 0 }}>
                {isEmergencyPage ? <span aria-hidden style={{ color: "#0ea5e9", fontWeight: 800, lineHeight: 1.2 }}>•</span> : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {landing.emergencyCtas && landing.emergencyCtas.length ? (
        <div style={{ maxWidth: 720, margin: "32px auto 0", display: "flex", flexDirection: "column", gap: 16 }}>
          {landing.emergencyCtas.map((cta, idx) => (
            <div key={idx} style={ctaBox}>
              <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: 18, color: "#0f172a", margin: "0 0 12px" }}>{cta.headline}</p>
              <a href={`tel:${PHONE_TEL}`} onClick={() => { trackPhoneCallConversion(); trackEvent("emergency_landing_tel_cta", { page: pagePath, slot: idx }); }} className="btn-primary pulse" style={{ fontSize: 16, padding: "14px 24px", borderRadius: 14, display: "inline-flex", textDecoration: "none", marginBottom: 8 }}>Call now for immediate help</a>
              <p className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 28px)", color: "#1e40af", margin: "8px 0 0", letterSpacing: "-0.02em" }}>{PHONE}</p>
              {cta.subline ? <p style={{ color: "#64748b", fontSize: 14, margin: "12px 0 0" }}>{cta.subline}</p> : null}
              {scrollToForm ? (
                <button type="button" style={{ marginTop: 14, background: "white", border: "2px solid #6366f1", color: "#6366f1", borderRadius: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, padding: "10px 18px", cursor: "pointer" }} onClick={() => { trackEvent("emergency_landing_form_cta", { page: pagePath, slot: idx }); scrollToForm(); }}>Or send your details</button>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
      <div style={{ maxWidth: contentMaxWidth, margin: "40px auto 0" }}>
        <h2 className="syne-heading" style={{ ...sectionHeading, marginBottom: 16 }}>Services we can help with</h2>
        <ul style={{ ...emergencyBulletListStyle, color: "#475569", fontSize: isEmergencyPage ? 16 : 15, lineHeight: isEmergencyPage ? 1.72 : 1.85, ...emergencyPanelStyle }}>
          {landing.serviceListItems.map((item) => (
            <li key={item} style={{ marginBottom: isEmergencyPage ? 0 : 8, display: "flex", alignItems: "flex-start", gap: isEmergencyPage ? 10 : 0 }}>
              {isEmergencyPage ? <span aria-hidden style={{ color: "#6366f1", fontWeight: 800, lineHeight: 1.2 }}>•</span> : null}
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {isEmergencyPage ? (
          <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, marginTop: 16, ...emergencyPanelStyle }}>
            Related urgent pages:{" "}
            <Link to="/boiler-repair-coventry" style={{ color: "#4f46e5", fontWeight: 700, textDecoration: "none" }}>boiler repair Coventry</Link>
            {" "}|{" "}
            <Link to="/blocked-drain-coventry" style={{ color: "#4f46e5", fontWeight: 700, textDecoration: "none" }}>blocked drain Coventry</Link>
            {" "}|{" "}
            <Link to="/leak-repair-coventry" style={{ color: "#4f46e5", fontWeight: 700, textDecoration: "none" }}>leak repair Coventry</Link>
          </p>
        ) : null}
      </div>
      <div style={{ maxWidth: contentMaxWidth, margin: "40px auto 0" }}>
        <h2 className="syne-heading" style={{ ...sectionHeading, marginBottom: 18 }}>Why homeowners in Coventry use this service</h2>
        <div style={{ display: "grid", gridTemplateColumns: isEmergencyPage ? "repeat(auto-fit, minmax(280px, 1fr))" : "repeat(auto-fit, minmax(240px, 1fr))", gap: isEmergencyPage ? 20 : 18 }}>
          {landing.trustPoints.map((t) => (
            <div key={t.title} style={{ background: "#ffffff", border: "1px solid #dbe3f0", borderRadius: 16, padding: isEmergencyPage ? "24px 22px" : "22px 20px", boxShadow: isEmergencyPage ? "0 10px 26px rgba(15, 23, 42, 0.06)" : "none" }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: isEmergencyPage ? 20 : 17, color: "#1e40af", marginBottom: 10 }}>{t.title}</h3>
              <p style={{ color: "#64748b", fontSize: isEmergencyPage ? 16 : 14, lineHeight: 1.68, margin: 0 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {landing.extraFaqItems?.length ? (
        <div style={{ maxWidth: contentMaxWidth, margin: "48px auto 0" }}>
          <p style={{ color: "#6366f1", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>FAQ</p>
          <h2 className="syne-heading" style={{ ...sectionHeading, marginBottom: 20 }}>Emergency plumber questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {landing.extraFaqItems.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: 16 }}>★</span>
      ))}
    </div>
  );
}

function trackEvent(name, params = {}) {
  if (window.gtag) window.gtag("event", name, params);
  if (window.dataLayer?.push) window.dataLayer.push({ event: name, ...params });
}

function trackPhoneCallConversion() {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18098618469/99svCK61hK1cEOWAjLZD",
    });
  }
}

function upsertMetaTag(attr, key, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function LegalPage({ heading, body = [] }) {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#f8fafc", color: "#0f172a", padding: "40px 24px" }}>
      <div style={{ maxWidth: 840, margin: "0 auto", background: "white", border: "1px solid #e2e8f0", borderRadius: 18, padding: "32px clamp(20px, 4vw, 40px)" }}>
        <h1 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 14 }}>{heading}</h1>
        <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: 14 }}><strong>Important:</strong> {LEGAL_BUSINESS_MODEL}</p>
        {body.map((paragraph) => (
          <p key={paragraph} style={{ color: "#475569", lineHeight: 1.7, marginBottom: 14 }}>{paragraph}</p>
        ))}
        <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: 14 }}>Operator: <strong>{OPERATOR_NAME}</strong><br />Email: <a href={`mailto:${OPERATOR_EMAIL}`} style={{ color: "#4f46e5", textDecoration: "none" }}>{OPERATOR_EMAIL}</a><br />Phone: <a href={`tel:${PHONE_TEL}`} onClick={() => trackPhoneCallConversion()} style={{ color: "#4f46e5", textDecoration: "none" }}>{PHONE}</a></p>
        <p style={{ color: "#475569", lineHeight: 1.7 }}>For data requests or policy questions, contact us by email and include your full name, postcode, and request type.</p>
        <Link to="/" style={{ display: "inline-block", marginTop: 24, color: "#4f46e5", fontWeight: 700, textDecoration: "none" }}>← Back to home</Link>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();
  const isEmergencyPage = pathname === "/emergency-plumber-coventry";
  const phoneCtaHiddenStyle = {};
  const pageConfig = useMemo(() => {
    const base = SERVICE_PAGES[pathname] || SERVICE_PAGES["/"];
    return SERVICE_LANDINGS[pathname] ? { ...base, landing: SERVICE_LANDINGS[pathname] } : base;
  }, [pathname]);
  const legalPage = LEGAL_PAGES[pathname];
  const [selectedIssue, setSelectedIssue] = useState("");
  const leadSource = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return {
      utmSource: params.get("utm_source") || "direct",
      utmMedium: params.get("utm_medium") || "none",
      utmCampaign: params.get("utm_campaign") || "none",
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || "",
      referrer: typeof document !== "undefined" ? (document.referrer || "direct") : "direct",
      landingPath: location.pathname,
    };
  }, [location.pathname, location.search]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    address: "",
    issue: "",
    urgency: "",
    callbackTime: "",
    propertyType: "",
    decisionMaker: "",
    contactPreference: "phone",
    problemDetails: "",
    accessNotes: "",
    extremelyUrgent: false,
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (legalPage) {
      document.title = legalPage.title;
      upsertMetaTag("name", "description", `${legalPage.heading} for coventryplumbing247.`);
      upsertCanonical(`${SITE_URL}${pathname}`);
      return;
    }

    document.title = pageConfig.title;
    upsertMetaTag("name", "description", pageConfig.description);
    upsertMetaTag("property", "og:title", pageConfig.title);
    upsertMetaTag("property", "og:description", pageConfig.description);
    upsertMetaTag("property", "og:type", "website");
    upsertMetaTag("property", "og:url", `${SITE_URL}${pathname === "/" ? "" : pathname}`);
    upsertCanonical(`${SITE_URL}${pathname === "/" ? "" : pathname}`);
  }, [legalPage, pageConfig, pathname]);

  const scrollToForm = (issueId) => {
    if (issueId) {
      setSelectedIssue(issueId);
      setFormData((p) => ({
        ...p,
        issue: issueId,
        problemDetails: issueId === "other" || issueId === "other-emergency" ? p.problemDetails : "",
      }));
    }
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const needsOtherIssueDescription = (issue) => issue === "other" || issue === "other-emergency";

  const isValidEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please enter your name";
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[\d\s()+-]{7,}$/.test(formData.phone)) e.phone = "Enter a valid phone number";
    if (!formData.postcode.trim()) e.postcode = "Please enter your postcode";
    if (!formData.issue) e.issue = "Please select an issue";
    if (needsOtherIssueDescription(formData.issue) && !formData.problemDetails.trim()) {
      e.problemDetails = "Please describe your issue";
    }
    if (!formData.consent) e.consent = "Please confirm consent";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    try {
      const urgencyLabel = formData.extremelyUrgent ? "Right Now (extremely urgent)" : (URGENCY_OPTIONS.find(u => u.id === formData.urgency)?.label || "Not specified");
      const callbackLabel = CALLBACK_TIMES.find(c => c.id === formData.callbackTime)?.label || "Not specified";
      const propertyLabel = PROPERTY_TYPES.find(p => p.id === formData.propertyType)?.label?.replace(/[^\w\s]/gi, "") || "Not specified";
      const issueLabel = ISSUES.find(i => i.id === formData.issue)?.label || (formData.issue === "other" ? "Other plumbing issue" : formData.issue || "Not specified");
      /** Softer wording in the notification email avoids spam triggers (e.g. "urgent", "lead"); analytics keep `urgencyLabel`. */
      const emailUrgency = formData.extremelyUrgent
        ? "Yes — please return the call as soon as you can"
        : (URGENCY_OPTIONS.find((u) => u.id === formData.urgency)?.label || "Standard enquiry");
      const dash = (s) => (String(s).trim() ? String(s).trim() : "—");
      /** Formspree validates `email` as a real address — never send placeholders like "Not provided". */
      const payload = {
        _gotcha: "",
        _subject: `[coventryplumbing247] Website enquiry - ${issueLabel}`,
        "Customer Name": formData.name,
        Phone: formData.phone,
        Postcode: formData.postcode,
        Address: dash(formData.address),
        Issue: issueLabel,
        "When needed": emailUrgency,
        "Priority callback requested": formData.extremelyUrgent ? "Yes" : "No",
        "Callback preference": callbackLabel,
        "Property type": propertyLabel,
        "Decision maker": dash(formData.decisionMaker),
        "Preferred contact": formData.contactPreference,
        "Problem details": dash(formData.problemDetails),
        "Access notes": dash(formData.accessNotes),
        "Consent to contact": formData.consent ? "Yes" : "No",
        "Page submitted from": leadSource.landingPath || window.location.pathname,
        Referrer: dash(leadSource.referrer === "direct" ? "" : leadSource.referrer),
        "UTM source": leadSource.utmSource || "direct",
        "UTM medium": leadSource.utmMedium || "none",
        "UTM campaign": leadSource.utmCampaign || "none",
      };
      if (leadSource.gclid) payload.GCLID = leadSource.gclid;
      if (leadSource.fbclid) payload.FBCLID = leadSource.fbclid;
      if (isValidEmail(formData.email)) {
        const em = formData.email.trim();
        payload.email = em;
        payload._replyto = em;
      }
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        trackEvent("lead_submit_success", { issue: issueLabel, urgency: urgencyLabel, page: pathname });
        setSubmitted(true);
      } else {
        let msg = "Something went wrong. Please try again or call us.";
        try {
          const data = await res.json();
          if (data?.error && typeof data.error === "string") msg = data.error;
          if (Array.isArray(data?.errors) && data.errors[0]?.message) {
            msg = data.errors.map((x) => x.message).filter(Boolean).join(" ");
          }
        } catch { /* ignore */ }
        alert(msg);
      }
    } catch {
      alert("Network error — check your connection or call us directly.");
    }
    setLoading(false);
  };

  const handleChange = (field, val) => {
    setFormData((p) => {
      const next = { ...p, [field]: val };
      if (field === "issue" && !needsOtherIssueDescription(val)) next.problemDetails = "";
      return next;
    });
    if (errors[field]) setErrors((p) => { const n = { ...p }; delete n[field]; return n; });
    if (field === "issue" && errors.problemDetails) {
      setErrors((p) => { const n = { ...p }; delete n.problemDetails; return n; });
    }
  };

  const borderColor = (field) => errors[field] ? "#ef4444" : "#e2e8f0";

  if (legalPage) {
    return <LegalPage heading={legalPage.heading} body={legalPage.body} />;
  }

  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: isEmergencyPage ? "Coventry Plumbing 24/7" : "coventryplumbing247",
    url: canonicalUrl,
    telephone: PHONE_TEL,
    areaServed: ["Coventry", "CV1", "CV2", "CV3", "CV4", "CV5", "CV6", "CV7", "CV8"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coventry",
      addressRegion: "West Midlands",
      addressCountry: "GB",
    },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" }],
    sameAs: ["https://www.gassaferegister.co.uk/", "https://www.google.com/maps"],
  };
  const faqSchemaMainEntity = [
    ...(pathname === "/emergency-plumber-coventry"
      ? EMERGENCY_PLUMBER_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      : []),
    ...FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaMainEntity,
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isEmergencyPage ? "Emergency plumbing" : pageConfig.h1Prefix,
    provider: { "@type": "LocalBusiness", name: isEmergencyPage ? "Coventry Plumbing 24/7" : "coventryplumbing247" },
    areaServed: "Coventry",
    description: pageConfig.description,
  };

  const renderLeadForm = () => (
    <div className="hero-lead-card" style={{ width: "100%", maxWidth: "none", margin: 0, background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "1rem", boxShadow: "0 12px 40px rgba(15, 23, 42, 0.12), 0 4px 12px rgba(15, 23, 42, 0.06)", padding: "clamp(18px, 2.5vw, 26px)" }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <p style={{ color: "#6366f1", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Free quote</p>
        <h2 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2vw, 26px)", marginBottom: 6, color: "#0f172a", lineHeight: 1.2 }}>Get help right now</h2>
        <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.55 }}>Quick details — we will call you back and dispatch a local vetted plumber.</p>
        <p style={{ color: "#4338ca", fontSize: 12, fontWeight: 700, marginTop: 8 }}>Emergency slots are limited — urgent requests are prioritised</p>
      </div>

      {submitted ? (
        <div style={{ background: "linear-gradient(135deg, #f0fdf4, #eff6ff)", border: "2px solid #86efac", borderRadius: 14, padding: "28px 18px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 8, color: "#0f172a" }}>We have your request!</h3>
          <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.6 }}>A local Coventry engineer will be in touch shortly.</p>
        </div>
      ) : (
        <>
          <a href={`tel:${PHONE_TEL}`} onClick={() => { trackPhoneCallConversion(); trackEvent("click_to_call_form_fastest_response", { page: pathname }); }} className="btn-primary" style={{ width: "100%", marginBottom: 14, fontSize: 15, padding: "12px 14px", borderRadius: 12, textDecoration: "none" }}>📞 Call now for fastest response</a>
          <div className="hero-form-simple">
            <div>
              <label className="hero-field-label" htmlFor="lead-name">Your name *</label>
              <input id="lead-name" className="finput" autoComplete="name" style={{ borderColor: borderColor("name") }} placeholder="e.g. Sarah Johnson" value={formData.name} onChange={e => handleChange("name", e.target.value)} />
              {errors.name && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.name}</p>}
            </div>
            <div>
              <label className="hero-field-label" htmlFor="lead-phone">Phone number *</label>
              <input id="lead-phone" className="finput" autoComplete="tel" type="tel" style={{ borderColor: borderColor("phone") }} placeholder="07700 900123" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} />
              {errors.phone && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.phone}</p>}
            </div>
            <div>
              <label className="hero-field-label" htmlFor="lead-postcode">Postcode *</label>
              <input id="lead-postcode" className="finput" autoComplete="postal-code" style={{ borderColor: borderColor("postcode") }} placeholder="CV1 2WT" value={formData.postcode} onChange={e => handleChange("postcode", e.target.value)} />
              {errors.postcode && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.postcode}</p>}
            </div>
            <div>
              <label className="hero-field-label" htmlFor="lead-issue">Plumbing issue *</label>
              <div className="hero-select-wrap">
                <select id="lead-issue" className="finput hero-select" value={formData.issue} onChange={e => handleChange("issue", e.target.value)} style={{ borderColor: borderColor("issue"), color: formData.issue ? "#0f172a" : "#64748b", fontWeight: formData.issue ? 600 : 500 }}>
                  <option value="">Select your issue…</option>
                  {ISSUES.map(i => <option key={i.id} value={i.id}>{i.icon} {i.label}</option>)}
                  <option value="other">🔧 Other plumbing issue</option>
                </select>
                <span className="hero-select-chevron" aria-hidden>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
              {errors.issue && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.issue}</p>}
            </div>
            {needsOtherIssueDescription(formData.issue) && (
              <div>
                <label className="hero-field-label" htmlFor="lead-other-issue">Describe your issue *</label>
                <textarea
                  id="lead-other-issue"
                  className="finput"
                  rows={4}
                  style={{ borderColor: borderColor("problemDetails") }}
                  placeholder="e.g. Water coming through the ceiling from the flat above, since this morning…"
                  value={formData.problemDetails}
                  onChange={(e) => handleChange("problemDetails", e.target.value)}
                  aria-required="true"
                />
                {errors.problemDetails && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.problemDetails}</p>}
              </div>
            )}
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 14, color: "#475569", userSelect: "none" }}>
              <input type="checkbox" checked={formData.extremelyUrgent} onChange={e => handleChange("extremelyUrgent", e.target.checked)} style={{ width: 18, height: 18, accentColor: "#6366f1", flexShrink: 0 }} />
              <span>This is <strong style={{ color: "#0f172a" }}>extremely urgent</strong></span>
            </label>
            <label style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#475569", lineHeight: 1.5 }}>
              <input type="checkbox" checked={formData.consent} onChange={e => handleChange("consent", e.target.checked)} style={{ marginTop: 3, width: 16, height: 16, accentColor: "#6366f1", flexShrink: 0 }} />
              <span>I consent to coventryplumbing247 contacting me and understand my details may be shared with local engineers.</span>
            </label>
            {errors.consent && <p style={{ color: "#ef4444", fontSize: 12 }}>{errors.consent}</p>}
            <button type="button" className="btn-primary" onClick={handleSubmit} disabled={loading} style={{ fontSize: 16, padding: "15px 16px", borderRadius: 12, width: "100%", marginTop: 2, opacity: loading ? 0.85 : 1 }}>
              {loading ? "Sending…" : "Submit"}
            </button>
            <p style={{ textAlign: "center", fontSize: 12, color: "#64748b", lineHeight: 1.55 }}>✔ No obligation &nbsp; ✔ Speak to a real person &nbsp; ✔ Fast local dispatch</p>
            <p style={{ textAlign: "center", fontSize: 11, color: "#94a3b8", lineHeight: 1.45 }}>We use your number to call you about this enquiry.</p>
            <p style={{ textAlign: "center", color: "#64748b", fontSize: 11, lineHeight: 1.55 }}>Introducer service only — your contract is with the engineer you choose.</p>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8fafc", color: "#0f172a", overflowX: "hidden", width: "100%", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,600;0,700;0,800;1,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; margin: 0; padding: 0; background: #0f172a; }
        .grad-text { background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 60%, #a855f7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .btn-primary { background: linear-gradient(135deg, #0ea5e9, #6366f1); color: white; border: none; border-radius: 14px; font-family: 'DM Sans', sans-serif; font-weight: 700; cursor: pointer; transition: all 0.25s ease; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 24px rgba(99,102,241,0.35); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(99,102,241,0.5); filter: brightness(1.08); }
        .btn-hero-primary { box-shadow: 0 6px 28px rgba(99,102,241,0.45), 0 2px 8px rgba(14,165,233,0.25) !important; }
        .btn-hero-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(99,102,241,0.55), 0 4px 14px rgba(14,165,233,0.3) !important; filter: brightness(1.1); }
        .btn-outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.45); border-radius: 14px; font-family: 'DM Sans', sans-serif; font-weight: 600; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: white; }
        .issue-card { background: white; border: 2px solid #e2e8f0; border-radius: 18px; padding: 28px 20px; cursor: pointer; transition: all 0.22s ease; text-align: center; box-shadow: 0 1px 8px rgba(0,0,0,0.05); }
        .issue-card:hover { border-color: #6366f1; box-shadow: 0 8px 32px rgba(99,102,241,0.18); transform: translateY(-3px); }
        .issue-card.sel { border-color: #6366f1; background: linear-gradient(135deg, #eff6ff, #f5f3ff); }
        .why-card { background: white; border-radius: 20px; padding: 32px 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.06); border: 1px solid #f1f5f9; transition: all 0.22s ease; }
        .why-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(99,102,241,0.14); }
        .testi-card { background: white; border-radius: 20px; padding: 32px; box-shadow: 0 2px 20px rgba(0,0,0,0.07); border: 1px solid #f1f5f9; position: relative; }
        .testi-card::before { content: '"'; position: absolute; top: 16px; left: 24px; font-size: 72px; color: #ede9fe; font-family: Georgia, serif; line-height: 1; }
        .badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.25); border-radius: 100px; padding: 8px 16px; font-size: 13px; font-weight: 600; color: white; }
        .pill { border: 2px solid #e2e8f0; border-radius: 100px; padding: 9px 16px; background: white; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: #475569; cursor: pointer; transition: all 0.18s; white-space: nowrap; }
        .pill:hover { border-color: #6366f1; color: #6366f1; }
        .pill.sel { border-color: #6366f1; background: linear-gradient(135deg, #eff6ff, #f5f3ff); color: #6366f1; }
        .urgency-card { background: white; border: 2px solid #e2e8f0; border-radius: 16px; padding: 18px 14px; cursor: pointer; transition: all 0.2s; text-align: center; flex: 1; min-width: 120px; }
        .urgency-card:hover { transform: translateY(-2px); }
        .finput { width: 100%; padding: 14px 18px; border: 2px solid #e2e8f0; border-radius: 12px; font-family: 'DM Sans', sans-serif; font-size: 15px; color: #0f172a; background: #ffffff; outline: none; transition: border-color 0.2s; }
        .finput:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }
        textarea.finput { min-height: 92px; resize: vertical; }
        .hero-lead-card { color-scheme: light; }
        .hero-lead-card .finput,
        .hero-lead-card select.finput {
          background-color: #ffffff !important;
          color: #0f172a !important;
          -webkit-text-fill-color: #0f172a !important;
          caret-color: #6366f1;
        }
        .hero-lead-card input.finput::placeholder { color: #64748b !important; opacity: 1; }
        .hero-lead-card input.finput:-webkit-autofill,
        .hero-lead-card input.finput:-webkit-autofill:hover,
        .hero-lead-card input.finput:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
          box-shadow: 0 0 0 1000px #ffffff inset !important;
          -webkit-text-fill-color: #0f172a !important;
          border: 2px solid #e2e8f0;
        }
        .hero-lead-card select.finput option { background: #ffffff; color: #0f172a; }
        .hero-field-label { display: block; font-weight: 600; margin-bottom: 6px; font-size: 13px; color: #374151; }
        .hero-form-simple { display: flex; flex-direction: column; gap: 14px; }
        .hero-select-wrap { position: relative; width: 100%; }
        .hero-lead-card .hero-select {
          appearance: none !important;
          -webkit-appearance: none !important;
          padding-right: 48px !important;
          cursor: pointer;
          font-weight: 500;
          background-image: none !important;
        }
        .hero-select-chevron {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          width: 28px; height: 28px; border-radius: 8px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          display: flex; align-items: center; justify-content: center;
          pointer-events: none;
        }
        @keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(99,102,241,0.5); } 70% { box-shadow: 0 0 0 14px rgba(99,102,241,0); } 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); } }
        .pulse { animation: pulse-ring 2s infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fu1 { animation: fadeUp 0.6s ease both; }
        .fu2 { animation: fadeUp 0.6s 0.15s ease both; }
        .fu3 { animation: fadeUp 0.6s 0.3s ease both; }
        @keyframes trust-marquee { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-50%, 0, 0); } }
        .trust-marquee-wrap { overflow: hidden; width: 100%; position: relative; }
        .mtrack {
          display: flex;
          width: max-content;
          flex-shrink: 0;
          will-change: transform;
          backface-visibility: hidden;
          animation: trust-marquee 40s linear infinite;
        }
        .mtrack:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .mtrack { animation: none; transform: translate3d(0, 0, 0); }
        }
        .syne-heading {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif !important;
          letter-spacing: -0.03em !important;
          font-kerning: normal;
          font-optical-sizing: none;
          font-stretch: 100%;
          font-synthesis: none;
        }
        .syne-heading-hero { line-height: 1.12 !important; max-width: none !important; margin-left: 0 !important; margin-right: 0 !important; }
        .trust-link { color: rgba(255,255,255,0.92); text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.35); }
        .trust-link:hover { border-bottom-color: rgba(255,255,255,0.8); }
        .service-link { text-decoration: none; color: #312e81; font-weight: 700; font-size: 13px; padding: 10px 14px; border-radius: 999px; border: 1px solid #c7d2fe; background: linear-gradient(135deg, #eef2ff, #e0e7ff); transition: all 0.2s ease; box-shadow: 0 2px 10px rgba(79,70,229,0.08); }
        .service-link:hover { transform: translateY(-1px); border-color: #818cf8; box-shadow: 0 6px 18px rgba(79,70,229,0.2); }
        .emergency-story-wrap {
          max-width: 1160px;
          margin: 0 auto;
        }
        .emergency-story-header {
          margin-bottom: 20px;
          max-width: 760px;
        }
        .emergency-story-kicker {
          color: #4f46e5;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .emergency-story-title {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-weight: 800;
          font-size: clamp(30px, 3.6vw, 44px);
          color: #0f172a;
          line-height: 1.16;
          margin-bottom: 10px;
        }
        .emergency-story-subtitle {
          color: #64748b;
          font-size: 17px;
          line-height: 1.68;
          margin: 0;
        }
        .emergency-story-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }
        .emergency-story-card {
          border: 1px solid #dbe3f0;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
          background: #ffffff;
        }
        .emergency-story-card p {
          color: #475569;
          font-size: 18px;
          line-height: 1.82;
          margin: 0;
        }
        .emergency-story-chip {
          margin: 0 0 10px !important;
          font-size: 17px !important;
          font-weight: 800;
          line-height: 1.45 !important;
          color: #3730a3 !important;
        }
        .emergency-story-card.side { background: #ffffff; }
        .emergency-story-card.wide { background: #ffffff; }
        .emergency-story-card.process { background: #ffffff; }
        @media (min-width: 1024px) {
          .emergency-story-grid {
            grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
            grid-template-areas:
              "primary sideA"
              "primary sideB"
              "wide sideB"
              "process process";
            gap: 18px;
          }
          .emergency-story-card.primary { grid-area: primary; padding: 28px 28px; }
          .emergency-story-card.side-a { grid-area: sideA; }
          .emergency-story-card.side-b { grid-area: sideB; }
          .emergency-story-card.wide { grid-area: wide; }
          .emergency-story-card.process { grid-area: process; }
        }
        @media (max-width: 680px) {
          .emergency-story-card { padding: 18px; }
          .emergency-story-card p { font-size: 16px; line-height: 1.72; }
          .emergency-story-chip { font-size: 16px !important; }
          .emergency-story-subtitle { font-size: 16px; }
          .emergency-story-header { margin-bottom: 14px; }
        }
        .hero-layout { display: grid; grid-template-columns: 1fr; gap: 24px; align-items: start; width: 100%; }
        .hero-left-stack { display: flex; flex-direction: column; align-items: flex-start; text-align: left; min-width: 0; width: 100%; max-width: none; }
        .hero-left-foot {
          display: none;
          width: 100%;
          padding: 20px 20px 22px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(10px);
        }
        @media (min-width: 900px) {
          .hero-left-foot { display: block; margin-top: auto; }
        }
        .hero-left-foot-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 16px; margin-top: 16px; }
        @media (max-width: 899px) {
          .hero-left-foot-stats { grid-template-columns: 1fr; }
        }
        .hero-cta-row { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
        .hero-trust-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
        .hero-form-col { width: 100%; min-width: 0; }
        @media (min-width: 900px) {
          .hero-layout {
            align-items: stretch;
            grid-template-columns: minmax(280px, 0.4fr) minmax(0, 0.6fr);
            column-gap: min(7vw, 88px);
            row-gap: 32px;
          }
          .hero-left-stack { align-self: stretch; }
          .hero-form-col { justify-self: stretch; align-self: start; }
        }
        .hero-form-anchor { scroll-margin-top: 96px; }
        .syne-heading-hero-left { margin-left: 0 !important; margin-right: 0 !important; text-align: left; max-width: none !important; }
        @media (max-width: 640px) { .hide-mob { display: none !important; } }
        @media (min-width: 641px) { .mob-only { display: none !important; } }
        @media (max-width: 720px) {
          .emergency-story-wrap { max-width: 100%; }
          .emergency-story-title { font-size: clamp(28px, 8vw, 38px); }
        }
        @media (max-width: 560px) { .two-col { grid-template-columns: 1fr !important; } }
        .service-showcase-grid { display: grid; grid-template-columns: 1fr; gap: 22px; width: 100%; }
        @media (min-width: 720px) { .service-showcase-grid { grid-template-columns: repeat(2, 1fr); gap: 26px; } }
        .service-showcase-card {
          background: #fff; border-radius: 16px; overflow: hidden;
          border: 1px solid #e2e8f0; box-shadow: 0 10px 40px rgba(15, 23, 42, 0.07);
          display: flex; flex-direction: column; text-align: left;
        }
        .service-showcase-card img { width: 100%; height: 200px; object-fit: cover; display: block; }
        @media (min-width: 900px) { .service-showcase-card img { height: 220px; } }
        .service-showcase-card-body { padding: 20px 20px 18px; flex: 1; display: flex; flex-direction: column; }
        .service-showcase-card h3 { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-weight: 800; font-size: 1.125rem; color: #1e3a8a; margin: 0 0 10px; line-height: 1.25; }
        .service-showcase-card p.desc { color: #64748b; font-size: 14px; line-height: 1.65; margin: 0 0 auto; flex: 1; }
        .service-showcase-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 18px; padding-top: 16px; border-top: 1px solid #f1f5f9; flex-wrap: wrap; }
        .service-showcase-daily { font-size: 13px; color: #64748b; }
        .service-showcase-daily strong { color: #16a34a; font-weight: 700; }
        .service-quote-btn {
          font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 13px; color: #4f46e5;
          background: #fff; border: 2px solid #c7d2fe; border-radius: 10px; padding: 10px 16px; cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .service-quote-btn:hover { border-color: #6366f1; background: #eef2ff; }
        .areas-section-title-wrap { position: relative; display: inline-block; margin: 0 auto; }
        .areas-section-title-wrap::after {
          content: ""; display: block; width: 40px; height: 3px; background: linear-gradient(90deg, #f43f5e, #fb7185);
          border-radius: 2px; margin: 12px auto 0;
        }
        .areas-grid { display: grid; grid-template-columns: 1fr; gap: 18px; width: 100%; }
        @media (min-width: 640px) { .areas-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .areas-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; } }
        .area-cover-card {
          background: #fff; border-radius: 14px; padding: 22px 20px;
          border: 1px solid #e2e8f0; box-shadow: 0 6px 24px rgba(15, 23, 42, 0.06);
          text-align: left;
        }
        .area-cover-card h3 { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-weight: 800; font-size: 1.05rem; color: #1e40af; margin: 0 0 10px; }
        .area-cover-card p { margin: 0; font-size: 14px; color: #64748b; line-height: 1.55; }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HEADER */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(255,255,255,0.96)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid #e2e8f0" : "none", transition: "all 0.3s", padding: "0 clamp(16px, 4vw, 48px)" }}>
        <div style={{ maxWidth: 1580, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link to="/" className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: 18, color: scrolled ? "#0f172a" : "white", textDecoration: "none" }}>coventryplumbing247</Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, ...phoneCtaHiddenStyle }}>
            <span className="hide-mob" style={{ fontSize: 13, fontWeight: 500, color: scrolled ? "#64748b" : "rgba(255,255,255,0.75)" }}>24/7 Emergency Line</span>
            <a href={`tel:${PHONE_TEL}`} onClick={() => { trackPhoneCallConversion(); trackEvent("click_to_call_header", { page: pathname }); }} className="btn-primary pulse" style={{ fontSize: 14, padding: "10px 20px" }}>Call Now</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(150deg, #0f172a 0%, #1e1b4b 45%, #0c2340 100%)", minHeight: "100vh", display: "flex", alignItems: "flex-start", padding: "100px clamp(16px, 4vw, 48px) 88px", position: "relative", overflow: "visible" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-8%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1580, margin: "0 auto", width: "100%", position: "relative", alignSelf: "stretch" }} className="hero-layout">
          <div className="hero-left-stack">
            <div className="fu1" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 0 3px rgba(34,197,94,0.3)" }} />
              <span style={{ color: "#86efac", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>Engineers available now in Coventry</span>
            </div>
            <h1 className="fu2 syne-heading syne-heading-hero syne-heading-hero-left" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(34px, 5.5vw, 62px)", color: "white", lineHeight: 1.08, marginBottom: 14 }}>
              {pageConfig.landing ? (
                <>{pageConfig.landing.h1Before}<span className="grad-text">{pageConfig.landing.h1Accent}</span>{pageConfig.landing.h1After ?? ""}</>
              ) : (
                <>{pageConfig.h1Prefix}<br /><span className="grad-text">{pageConfig.h1Highlight}</span><br />{pageConfig.h1Suffix}</>
              )}
            </h1>
            {isEmergencyPage ? (
              <div className="fu3" style={{ marginBottom: 12, padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.07)", display: "inline-flex", flexDirection: "column", gap: 4 }}>
                <span style={{ color: "rgba(255,255,255,0.94)", fontSize: 13, fontWeight: 700 }}>Plumbers available near you now</span>
                <span style={{ color: "rgba(255,255,255,0.72)", fontSize: 12, fontWeight: 600 }}>Average arrival: 30-60 minutes</span>
              </div>
            ) : null}
            <p className="fu3" style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "rgba(255,255,255,0.78)", lineHeight: 1.65, marginBottom: 14, maxWidth: "min(40rem, 100%)" }}>
              {pageConfig.intro}
            </p>
            <div className="hero-cta-row fu3" style={{ marginBottom: 12, alignItems: "center" }}>
              <a href={`tel:${PHONE_TEL}`} onClick={() => { trackPhoneCallConversion(); trackEvent("click_to_call_hero", { page: pathname }); }} className="btn-primary pulse btn-hero-primary" style={{ fontSize: "clamp(14px, 2vw, 17px)", padding: "15px 28px", borderRadius: 14, ...phoneCtaHiddenStyle }}>Call now</a>
              <button type="button" onClick={() => { trackEvent("scroll_to_form_hero", { page: pathname }); scrollToForm(); }} className="btn-outline" style={{ fontSize: 15, padding: "14px 20px" }}>Get a free quote →</button>
            </div>
            <div className="fu3" style={{ width: "100%" }}>
              <div className="hero-trust-badges">
                {["24/7 Service", "Local Coventry Plumbers", "⚡ Fast Response", "Gas Safe where required"].map(b => <span key={b} className="badge">{b}</span>)}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, color: "rgba(255,255,255,0.85)", fontSize: 13 }}>
                <a className="trust-link" href="https://www.gassaferegister.co.uk/" target="_blank" rel="noreferrer">Gas Safe Register</a>
                <span>Transparent pricing from each engineer</span>
              </div>
            </div>
            <div className="hero-left-foot fu3">
              <div style={phoneCtaHiddenStyle}>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Prefer to talk?</p>
                <a href={`tel:${PHONE_TEL}`} onClick={() => { trackPhoneCallConversion(); trackEvent("click_to_call_hero_foot", { page: pathname }); }} className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3vw, 34px)", color: "white", textDecoration: "none", letterSpacing: "-0.02em", display: "inline-block", lineHeight: 1.1 }}>{PHONE}</a>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>
                  {isEmergencyPage
                    ? "Speak to a real person now. We dispatch local vetted plumbers across Coventry for urgent plumbing issues."
                    : "Speak to a local engineer quickly. We connect you with trusted plumbers across Coventry for urgent and general plumbing issues."}
                </p>
              </div>
              <div className="hero-left-foot-stats">
                {TRUST_STATS.slice(0, 4).map(stat => (
                  <div key={stat.label} style={{ minWidth: 0 }}>
                    <div className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: 17, background: "linear-gradient(135deg, #0ea5e9, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.2, marginBottom: 4 }}>{stat.value}</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.4 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div ref={formRef} className="hero-form-col hero-form-anchor" style={{ minWidth: 0 }}>
            {renderLeadForm()}
          </div>
        </div>
        <div className="mob-only" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200, background: "linear-gradient(135deg, #0ea5e9, #6366f1)", padding: "15px 20px", textAlign: "center", boxShadow: "0 -4px 24px rgba(99,102,241,0.4)" }}>
          <button type="button" onClick={() => scrollToForm()} style={{ color: "white", background: "none", border: "none", fontWeight: 800, fontSize: 17, cursor: "pointer" }}>Request a callback</button>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: "#0f172a", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="trust-marquee-wrap">
          <div className="mtrack" style={{ padding: "18px 0" }}>
            {[...TRUST_STATS, ...TRUST_STATS].map((stat, i) => (
              <div key={`${stat.label}-${i}`} style={{ display: "flex", alignItems: "center", gap: 28, padding: "0 44px", borderRight: "1px solid rgba(255,255,255,0.08)", whiteSpace: "nowrap", flexShrink: 0 }}>
                <span className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: 20, background: "linear-gradient(135deg, #0ea5e9, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {pageConfig.landing && <ServiceLandingContent landing={pageConfig.landing} pagePath={pathname} scrollToForm={scrollToForm} />}

      {/* PROBLEM SELECTOR */}
      <section style={{ padding: "80px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1580, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 44px" }}>
            <p style={{ color: "#6366f1", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Quick Help</p>
            <h2 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 38px)", color: "#0f172a", marginBottom: 10 }}>What do you need help with?</h2>
            <p style={{ color: "#475569", fontSize: 15 }}>Select your issue and we'll scroll you straight to the form</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18 }}>
            {ISSUES.map(issue => (
              <button key={issue.id} className={`issue-card ${selectedIssue === issue.id ? "sel" : ""}`} onClick={() => scrollToForm(issue.id)} style={{ border: "none", width: "100%" }}>
                <div style={{ fontSize: 42, marginBottom: 12 }}>{issue.icon}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 5, color: "#0f172a" }}>{issue.label}</div>
                <div style={{ color: "#64748b", fontSize: 13 }}>{issue.desc}</div>
                {selectedIssue === issue.id && <div style={{ marginTop: 12, display: "inline-block", background: "linear-gradient(135deg, #0ea5e9, #6366f1)", color: "white", borderRadius: 100, padding: "3px 12px", fontSize: 11, fontWeight: 700 }}>Selected ✓</div>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1580, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto 48px" }}>
            <p style={{ color: "#6366f1", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Why Us</p>
            <h2 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 38px)", color: "#0f172a" }}>{pathname === "/" ? "Trusted plumbing support across Coventry" : "Coventry's trusted emergency plumbing service"}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 22 }}>
            {WHY_US.map(item => (
              <div key={item.title} className="why-card">
                <div style={{ fontSize: 34, marginBottom: 14 }}>{item.icon}</div>
                <h3 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 19, marginBottom: 8, color: "#0f172a" }}>{item.title}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.65, fontSize: 14 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px", background: "white" }}>
        <div style={{ maxWidth: 1580, margin: "0 auto", background: "#0f172a", borderRadius: 20, padding: "24px clamp(18px, 4vw, 34px)", color: "white", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          <div>
            <p style={{ color: "#a5b4fc", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Verified Trust</p>
            <a className="trust-link" href="https://www.gassaferegister.co.uk/" target="_blank" rel="noreferrer">Check Gas Safe register</a>
          </div>
          <div>
            <p style={{ color: "#a5b4fc", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Pricing Clarity</p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>Pricing is set by the engineer you choose. Ask for confirmation before work starts.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px, 4vw, 48px) 72px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1580, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
            <p style={{ color: "#6366f1", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Services</p>
            <h2 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 40px)", color: "#1e3a8a", marginBottom: 14, lineHeight: 1.15 }}>
              {pathname === "/" ? "Our plumbing services" : "Our emergency plumbing services"}
            </h2>
            <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.65 }}>
              {pathname === "/" ? (
                <>
                  From routine jobs to same-day support, we connect you with local engineers for real work across Coventry and nearby areas. For burst pipes, major leaks and time-critical faults, use our{" "}
                  <Link to="/emergency-plumber-coventry" style={{ color: "#4f46e5", fontWeight: 700, textDecoration: "none" }} onClick={() => trackEvent("inline_link_emergency_service_home", { page: pathname })}>dedicated emergency plumber Coventry</Link>
                  {" "}page. Photos are for illustration — your engineer is assigned when you enquire.
                </>
              ) : (
                "From urgent repairs to same-day support, we dispatch local vetted plumbers for real jobs across Coventry. Photos are for illustration and may vary by attending plumber."
              )}
            </p>
          </div>
          <div className="service-showcase-grid">
            {EMERGENCY_SERVICES.map((svc) => (
              <article key={svc.title} className="service-showcase-card">
                <img src={svc.src} alt={svc.alt} loading="lazy" width={900} height={600} />
                <div className="service-showcase-card-body">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 26, lineHeight: 1 }} aria-hidden>{svc.icon}</span>
                    <h3>{svc.title}</h3>
                  </div>
                  <p className="desc">{svc.desc}</p>
                  <div className="service-showcase-footer">
                    <span className="service-showcase-daily">Available <strong>Daily</strong></span>
                    <button type="button" className="service-quote-btn" onClick={() => { trackEvent("service_card_quote", { service: svc.title, page: pathname }); scrollToForm(); }}>Get free quote</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28, fontSize: 12, color: "#94a3b8", maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
            Images show typical plumbing work for context only. coventryplumbing247 is an introducer; the engineer who attends is responsible for the job.
          </p>
        </div>
      </section>

      <section style={{ padding: "72px clamp(16px, 4vw, 48px) 80px", background: "#f1f5f9" }}>
        <div style={{ maxWidth: 1580, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="areas-section-title-wrap">
              <h2 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#1e3a8a", lineHeight: 1.2 }}>
                Areas we cover in Coventry
              </h2>
            </div>
            <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.65, maxWidth: 640, margin: "20px auto 0" }}>
              We aim for fast introductions across Coventry and nearby areas — tell us your postcode in the form and we will confirm coverage.
            </p>
          </div>
          <div className="areas-grid">
            {COVENTRY_AREAS.map((a) => (
              <div key={a.title} className="area-cover-card">
                <h3>{a.title}</h3>
                <p>{a.places}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(150deg, #0f172a 0%, #1e1b4b 100%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto 52px" }}>
            <p style={{ color: "#a5b4fc", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Simple Process</p>
            <h2 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 38px)", color: "white" }}>Fixed in 3 simple steps</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
            {STEPS.map(step => (
              <div key={step.num} style={{ textAlign: "center", padding: "0 12px" }}>
                <div style={{ width: 68, height: 68, borderRadius: "50%", background: "linear-gradient(135deg, #0ea5e9, #6366f1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: 20, color: "white", boxShadow: "0 8px 28px rgba(99,102,241,0.4)" }}>{step.num}</div>
                <h3 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 19, color: "white", marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.65, fontSize: 14 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 50 }}>
            <button type="button" onClick={() => scrollToForm()} className="btn-primary" style={{ fontSize: 16, padding: "15px 34px" }}>Request a callback</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1580, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto 48px" }}>
            <p style={{ color: "#6366f1", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Reviews</p>
            <h2 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 38px)", color: "#0f172a" }}>What Coventry residents say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testi-card">
                <StarRating count={t.stars} />
                <p style={{ margin: "18px 0 22px", color: "#334155", lineHeight: 1.7, fontSize: 15, paddingTop: 6 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #0ea5e9, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 15 }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8" }}>📍 {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ color: "#6366f1", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>FAQ</p>
            <h2 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#0f172a" }}>Common questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button onClick={() => scrollToForm()} className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>Still have questions? Get in touch ⚡</button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 660, margin: "0 auto" }}>
          <h2 className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4.5vw, 44px)", color: "white", marginBottom: 14 }}>Need a plumber right now?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, marginBottom: pathname === "/" ? 12 : 32 }}>Don't wait — submit your details and we'll get someone to you fast.</p>
          {pathname === "/" && (
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, marginBottom: 32 }}>
              Urgent emergency?{" "}
              <Link to="/emergency-plumber-coventry" style={{ color: "white", fontWeight: 700, textDecoration: "underline" }} onClick={() => trackEvent("final_cta_emergency_link_home", { page: pathname })}>Go to our emergency plumber Coventry service</Link>
              .
            </p>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
            <a href={`tel:${PHONE_TEL}`} onClick={() => { trackPhoneCallConversion(); trackEvent("click_to_call_footer_cta", { page: pathname }); }} style={{ background: "white", color: "#6366f1", fontSize: "clamp(16px, 2.5vw, 20px)", padding: "17px 36px", borderRadius: 16, border: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, cursor: "pointer", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", textDecoration: "none", display: "inline-flex", alignItems: "center", ...phoneCtaHiddenStyle }}>Call now</a>
            <button type="button" onClick={() => scrollToForm()} style={{ background: "rgba(255,255,255,0.2)", color: "white", fontSize: "clamp(15px, 2vw, 18px)", padding: "15px 28px", borderRadius: 16, border: "2px solid rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, cursor: "pointer" }}>
              Send your details
            </button>
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 16, fontSize: 13 }}>Available 24 hours a day, 7 days a week</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060c17", padding: "36px 24px 80px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1580, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 18 }}>🔧</span>
              <span className="syne-heading" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, color: "white", fontSize: 15 }}>coventryplumbing247</span>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.7, maxWidth: 260, color: "rgba(255,255,255,0.4)" }}>Covering CV1–CV8 and surrounding Coventry areas.</p>
          </div>
          <div style={{ fontSize: 13, lineHeight: 2, color: "rgba(255,255,255,0.4)" }}>
            <span style={{ display: "block" }}>24/7 Emergency Plumbing — Coventry</span>
            <Link to="/emergency-plumber-coventry" style={{ color: "#60a5fa", textDecoration: "none", display: "block" }}>Emergency Plumber Coventry</Link>
            <Link to="/boiler-repair-coventry" style={{ color: "#60a5fa", textDecoration: "none", display: "block" }}>Boiler Repair Coventry</Link>
            <Link to="/blocked-drain-coventry" style={{ color: "#60a5fa", textDecoration: "none", display: "block" }}>Blocked Drain Coventry</Link>
            <Link to="/leak-repair-coventry" style={{ color: "#60a5fa", textDecoration: "none", display: "block" }}>Leak Repair Coventry</Link>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", maxWidth: 260, lineHeight: 1.7 }}>
            <p>We connect you with local, vetted engineers across Coventry and the West Midlands.</p>
            <div style={{ marginTop: 10, display: "flex", gap: 14 }}>
              <Link to="/privacy" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Privacy Policy</Link>
              <Link to="/terms" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Terms</Link>
              <Link to="/cookies" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Cookies</Link>
            </div>
            <p style={{ marginTop: 10 }}>Operated by {OPERATOR_NAME}. Contact: <a href={`mailto:${OPERATOR_EMAIL}`} style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{OPERATOR_EMAIL}</a></p>
          </div>
        </div>
        <div style={{ maxWidth: 1580, margin: "14px auto 0", fontSize: 11, color: "rgba(255,255,255,0.32)", lineHeight: 1.6 }}>
          coventryplumbing247 is a lead generation and introduction platform. We do not directly provide plumbing services. Any repair or installation contract is between the customer and the selected third-party engineer.
        </div>
        <div style={{ maxWidth: 1580, margin: "20px auto 0", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 18, fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
          © 2025 coventryplumbing247. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
