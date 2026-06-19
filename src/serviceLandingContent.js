/**
 * SEO body copy and structured blocks for dedicated service URLs.
 * Coordinates with SERVICE_PAGES in App.jsx (titles / meta / hero intro).
 */

export const EMERGENCY_PLUMBER_FAQ = [
  {
    q: "How quickly can a plumber get to me in Coventry?",
    a: "We aim to dispatch a local vetted plumber as quickly as possible. Many urgent Coventry call-outs are attended within 30–60 minutes, but timings depend on your postcode, time of day, traffic, and live availability.",
  },
  {
    q: "Do you cover my postcode?",
    a: "We regularly cover Coventry postcodes including CV1, CV2, CV3, CV4, CV5 and CV6, plus nearby areas when engineer capacity allows. Share your postcode on the form or call us and we will confirm local availability.",
  },
  {
    q: "Is there a call-out fee?",
    a: "Call-out fees and minimum charges depend on the independent engineer and the type of job. The attending engineer confirms pricing before work starts, so you can decide how you want to proceed.",
  },
  {
    q: "Can you help with burst pipes or boiler issues?",
    a: "Yes. Emergency plumbing Coventry requests include burst pipes, heavy leaks, blocked drains, overflowing toilets, no hot water, and boiler breakdowns. Where gas work is needed, we dispatch appropriately qualified plumbers.",
  },
  {
    q: "What if I need urgent help at night?",
    a: "You can contact us 24/7. Nights, weekends, and bank holidays are common times for urgent plumber Coventry requests, and we dispatch based on who is available locally.",
  },
  {
    q: "How does the process work after I contact you?",
    a: "You call or submit details, we review the issue and postcode, then dispatch a local vetted plumber. The plumber confirms availability, expected arrival time, and pricing before any work begins.",
  },
];

/**
 * Catalogue of emergency town landing pages.
 * The Coventry page is the original and is intentionally not in this list — it is
 * cross-linked separately. The order here drives the "Other emergency areas" grid.
 */
export const EMERGENCY_TOWNS = [
  {
    slug: "/emergency-plumber-nuneaton",
    name: "Nuneaton",
    postcodes: "CV10 & CV11",
    blurb: "North-Warwickshire dispatch covering Attleborough, Stockingford, Weddington and Chilvers Coton.",
  },
  {
    slug: "/emergency-plumber-bedworth",
    name: "Bedworth",
    postcodes: "CV12",
    blurb: "Routing across Bulkington, Exhall, Ash Green, Keresley and Longford, plus the Nuneaton–Coventry corridor.",
  },
  {
    slug: "/emergency-plumber-rugby",
    name: "Rugby",
    postcodes: "CV21–CV23",
    blurb: "Bilton, Hillmorton, Brownsover, Cawston, Newbold, Dunchurch and Clifton upon Dunsmore covered.",
  },
  {
    slug: "/emergency-plumber-warwick",
    name: "Warwick",
    postcodes: "CV34 & CV35",
    blurb: "Historic-centre and modern-estate cover including Chase Meadow, Woodloes, Myton and Hatton.",
  },
  {
    slug: "/emergency-plumber-leamington-spa",
    name: "Leamington Spa",
    postcodes: "CV31 & CV32",
    blurb: "Centre, Whitnash, Sydenham, Lillington, Milverton and Cubbington — shared-riser flats included.",
  },
  {
    slug: "/emergency-plumber-kenilworth",
    name: "Kenilworth",
    postcodes: "CV8",
    blurb: "Abbey Fields, St John's, Crackley, Burton Green and Leek Wootton with unvented-system cover.",
  },
];

/** Fast lookup used by App.jsx to decide if a route should render the emergency layout. */
export const EMERGENCY_TOWN_PATHS = new Set([
  "/emergency-plumber-coventry",
  ...EMERGENCY_TOWNS.map((t) => t.slug),
]);

const NUNEATON_FAQ = [
  {
    q: "Do you cover emergency plumbing across Nuneaton?",
    a: "Yes — we cover CV10, CV11 and the wider Nuneaton area including Attleborough, Stockingford, Weddington, Whitestone, Horeston Grange and Chilvers Coton, with regular dispatch into nearby Bedworth.",
  },
  {
    q: "Can I call at night or on weekends?",
    a: "Yes — the line is answered 24/7 including weekends and bank holidays. Realistic arrival windows widen overnight because fewer engineers are on the road, but the call is always taken.",
  },
  {
    q: "Can you help with a burst pipe?",
    a: "Yes — burst pipes are one of the most common urgent jobs we route in Nuneaton. If safe, isolate the supply at the stopcock first, then call. The engineer will confirm an arrival window and isolate, contain or repair on attendance.",
  },
  {
    q: "Can tenants use this service or should the landlord call?",
    a: "Tenants are welcome to contact us in an emergency. We recommend telling your landlord or letting agent in parallel because any work agreement and cost normally sits with them, but for an active leak getting an engineer en route is the priority.",
  },
  {
    q: "Do you handle blocked drains and overflowing toilets?",
    a: "Yes — engineers we route in north Warwickshire deal with blocked sinks, toilets, baths and shared waste runs. Older terraces in Chilvers Coton and Attleborough can present shared-drain issues, which the engineer assesses on site.",
  },
  {
    q: "What happens after I request help?",
    a: "We log your details, match the issue and postcode to the nearest available vetted engineer, and the engineer phones you back to confirm timing and pricing. You only commit to work once you have spoken to the engineer attending.",
  },
];

const BEDWORTH_FAQ = [
  {
    q: "Do you cover emergency plumbing in Bedworth?",
    a: "Yes — CV12 and the surrounding villages of Bulkington, Exhall, Ash Green, Keresley and Longford, plus the corridor into Nuneaton and the northern edge of Coventry.",
  },
  {
    q: "Can I call at night or on weekends?",
    a: "Yes — the line is answered 24/7 including Sundays and bank holidays. Realistic arrival windows widen overnight because fewer engineers are out, but we will quote a slot honestly.",
  },
  {
    q: "Can you help with a burst pipe in CV12?",
    a: "Yes. If safe, isolate the supply at the stopcock and call the line. Engineers prioritise active escapes that risk ceilings, floors or electrics.",
  },
  {
    q: "Do you handle blocked drains and toilets?",
    a: "Yes. Older central Bedworth properties sometimes share waste runs, so the engineer assesses on site rather than guessing the cause.",
  },
  {
    q: "Can tenants use this service?",
    a: "Tenants are welcome to call in an emergency. Telling your landlord or agent in parallel is sensible because any work and cost agreement usually sits with them.",
  },
  {
    q: "What if my issue isn't strictly an emergency?",
    a: "Tell us anyway. If it can sensibly wait, we will say so and a daytime slot can be discussed with the engineer instead of paying for an out-of-hours visit.",
  },
  {
    q: "What happens after I make contact?",
    a: "We route the job to the nearest available engineer, and they phone you back to confirm timing and pricing before any work starts.",
  },
];

const RUGBY_FAQ = [
  {
    q: "Do you cover emergency plumbing in Rugby?",
    a: "Yes — CV21, CV22 and CV23 across Bilton, Hillmorton, Brownsover, Cawston, Newbold-on-Avon, Dunchurch and Clifton upon Dunsmore.",
  },
  {
    q: "Can I call out of hours or on weekends?",
    a: "Yes — the line is answered 24/7. Overnight and Sunday arrival windows widen with fewer engineers on the road, but the call is always taken.",
  },
  {
    q: "Can you help with a burst pipe in Rugby?",
    a: "Yes. Where safe, isolate the supply at the stopcock first, then call — engineers prioritise active escapes that risk ceilings, floors and electrics.",
  },
  {
    q: "My hot water has gone — is that urgent?",
    a: "In summer it is usually not strictly an emergency; in winter, in a household with young children, elderly or disabled occupants, it is. Tell us the household, and we will route accordingly.",
  },
  {
    q: "Do you handle hard-water and scale issues?",
    a: "Yes — the chalk geology around Rugby is well known to local engineers. Scale-related faults (slow flow, hot-water blocks, immersion failures) are routed to engineers who handle them regularly.",
  },
  {
    q: "Can tenants and landlords both use this service?",
    a: "Yes. Tenants should let the landlord or letting agent know in parallel because the work agreement usually sits with them, but for active emergencies the engineer dispatch is the priority.",
  },
  {
    q: "What happens after I request help?",
    a: "We log the issue, route to the nearest available engineer, and the engineer phones back to confirm timing and pricing before attendance.",
  },
];

const WARWICK_FAQ = [
  {
    q: "Do you cover emergency plumbing in Warwick?",
    a: "Yes — CV34 and CV35 including Warwick town centre, Chase Meadow, Woodloes, Myton, Leek Wootton and Hatton, plus the corridor into Leamington Spa.",
  },
  {
    q: "My property is listed or in a conservation area — can engineers handle that?",
    a: "Yes. Engineers used to working in Warwick's historic centre know that chasing or cutting in listed fabric is not always the right first move and will discuss alternatives before any work starts.",
  },
  {
    q: "Can I call at night or weekends?",
    a: "Yes — the line is answered 24/7 including bank holidays. Realistic arrival windows widen out of hours, but the call is always taken.",
  },
  {
    q: "Can you help with a burst pipe?",
    a: "Yes. Where safe, isolate the supply at the stopcock and call — engineers prioritise active escapes that risk fabric, electrics or ceilings.",
  },
  {
    q: "Do you cover blocked drains and toilets?",
    a: "Yes, including soil-stack issues common in older Warwick properties. Engineers investigate before assuming a single trap is the problem.",
  },
  {
    q: "Can tenants and landlords both use this service?",
    a: "Yes. Tenants are welcome to call in an emergency; telling the landlord or agent in parallel is sensible because the work agreement usually sits with them.",
  },
  {
    q: "What happens after I request help?",
    a: "We match the postcode and symptom to the nearest available engineer; the engineer rings back to confirm timing and pricing before attending.",
  },
];

const LEAMINGTON_SPA_FAQ = [
  {
    q: "Do you cover emergency plumbing in Leamington Spa?",
    a: "Yes — CV31 and CV32 across the centre, Whitnash, Sydenham, Lillington, Milverton and Cubbington, plus the Warwick and Kenilworth corridors.",
  },
  {
    q: "My property is a converted flat — can you help?",
    a: "Yes. Engineers routinely handle converted period stock around the Parade and Lansdowne, including shared-riser arrangements; the call-back covers what access is needed.",
  },
  {
    q: "Can I call at night or on weekends?",
    a: "Yes — the line is answered 24/7. Overnight and Sunday windows widen but the call is always taken.",
  },
  {
    q: "Can you help with a burst pipe?",
    a: "Yes. Where safe, isolate at the flat or building stop-tap and call — engineers prioritise active escapes that risk electrics or neighbouring properties.",
  },
  {
    q: "Do you cover blocked drains and shared soil stacks?",
    a: "Yes. Older centre-of-town conversions sometimes share stacks, so the engineer investigates before assuming a single trap is the cause.",
  },
  {
    q: "Can students and tenants use this service?",
    a: "Yes. Tenants and student-let residents are welcome to call; we recommend telling the landlord or letting agent in parallel because the work agreement usually sits with them.",
  },
  {
    q: "What happens after I get in touch?",
    a: "We route the symptom and postcode to the nearest engineer with availability; the engineer phones back to confirm timing and pricing before attending.",
  },
];

const KENILWORTH_FAQ = [
  {
    q: "Do you cover emergency plumbing in Kenilworth?",
    a: "Yes — CV8 including the town centre, Abbey Fields, St John's, Crackley, Burton Green and the Leek Wootton edge, plus the Warwick and Coventry corridors.",
  },
  {
    q: "Do you handle unvented hot-water cylinder failures?",
    a: "Yes. Larger Crackley and Burton Green homes commonly run unvented systems, and engineers we route are familiar with PRV, expansion-vessel and immersion failures.",
  },
  {
    q: "Can I call at night or on weekends?",
    a: "Yes — the line is answered 24/7. Realistic arrival windows widen overnight but the call is always taken.",
  },
  {
    q: "Can you help with a burst pipe?",
    a: "Yes. Where safe, isolate the supply at the stopcock and call — engineers prioritise active escapes that risk fabric, electrics or downstairs rooms.",
  },
  {
    q: "Do you cover blocked drains and shared soil stacks?",
    a: "Yes. Older terraces near Abbey Fields sometimes share stacks, so the engineer investigates before assuming a single trap is the cause.",
  },
  {
    q: "Can tenants and landlords use this service?",
    a: "Yes. Tenants are welcome to call; informing the landlord or letting agent in parallel is sensible because the work agreement usually sits with them.",
  },
  {
    q: "What happens after I make contact?",
    a: "We route the postcode and symptom to the nearest available engineer, who phones back to confirm timing and pricing before attending.",
  },
];

/** Quick lookup so App.jsx can inject the right FAQ schema for each town page. */
export const TOWN_FAQS = {
  "/emergency-plumber-nuneaton": NUNEATON_FAQ,
  "/emergency-plumber-bedworth": BEDWORTH_FAQ,
  "/emergency-plumber-rugby": RUGBY_FAQ,
  "/emergency-plumber-warwick": WARWICK_FAQ,
  "/emergency-plumber-leamington-spa": LEAMINGTON_SPA_FAQ,
  "/emergency-plumber-kenilworth": KENILWORTH_FAQ,
};

export const SERVICE_LANDINGS = {
  "/emergency-plumber-coventry": {
    townName: "Coventry",
    h1Before: "Emergency Plumber Coventry – 24/7 Callouts in Under ",
    h1Accent: "60 Minutes",
    h1After: "",
    whenNeedBullets: [
      "Burst pipes and sudden water loss",
      "Major leaks and urgent water damage",
      "Blocked drains and overflowing toilets",
      "No hot water or no heating",
      "Boiler breakdowns and pressure failures",
    ],
    fastResponseBody: "If you need an emergency plumber Coventry residents can call day or night, this page is built for urgent situations only. We dispatch local vetted plumbers across City Centre, Earlsdon, Stoke, Binley, Walsgrave, Canley, Tile Hill, Allesley, Holbrooks and Cheylesmore, with regular coverage across CV1, CV2, CV3, CV4, CV5 and CV6. For urgent plumber Coventry jobs, we focus on quick triage, clear communication, and fast local dispatch.",
    whyChooseBullets: [
      "Emergency plumbing Coventry focus — this page is for urgent faults, not routine maintenance",
      "24 hour plumber Coventry enquiry handling with local postcode routing",
      "Local vetted plumbers dispatched quickly based on issue type and location",
      "Average arrival target: 30–60 minutes when local capacity allows",
      "Transparent pricing — the attending plumber confirms costs before work starts",
    ],
    emergencyCtas: [
      { headline: "Call now for immediate help", subline: "Speak directly about your Coventry emergency — available 24/7." },
    ],
    extraFaqItems: EMERGENCY_PLUMBER_FAQ,
    paragraphs: [
      "When you search for an emergency plumber Coventry households can rely on, speed and clarity matter. Urgent faults in CV1, CV2, CV3, CV4, CV5 and CV6 can escalate quickly, especially in older terraces, flats with shared pipe routes, and family homes where one failure affects multiple rooms. This page is dedicated to emergency plumbing Coventry support so you can act quickly without guessing what to do next.",
      "Common urgent jobs include burst pipes, major leaks, blocked drains, overflowing toilets, no hot water, and boiler breakdowns. These issues can lead to fast water damage, hygiene problems, and loss of heating if left too long. If water is actively escaping, ceilings are staining, or drainage is backing up through fixtures, it is usually best to call immediately and isolate water if safe to do so.",
      "Not every job has the same urgency. A small drip under a sink may be less urgent than a burst feed pipe, an overflowing toilet with no second WC, or a complete loss of hot water in winter. If you are unsure, treat the problem as urgent and explain the symptoms clearly. We then dispatch a local vetted plumber with the right availability.",
      "Coverage is local and practical across Coventry neighbourhoods including City Centre, Earlsdon, Stoke, Binley, Walsgrave, Canley, Tile Hill, Allesley, Holbrooks and Cheylesmore, plus surrounding areas when engineer schedules allow. If your issue is linked to heating, drains, or leaks, you can also view related local pages for boiler repair, blocked drain support, and leak repair while still using this emergency route for immediate help.",
      "What happens after you contact us is straightforward: first, you call or submit details; second, the issue and postcode are reviewed; third, a relevant local plumber is dispatched; and fourth, the attending plumber confirms availability, arrival expectations, and pricing before work begins.",
    ],
    serviceListItems: [
      "Burst pipe emergencies and urgent isolation support",
      "Leak containment and water-damage-first response jobs",
      "Blocked drains, backed-up waste, and overflowing toilets",
      "No hot water, no heating, and boiler fault escalation",
      "Out-of-hours emergency plumbing across Coventry postcodes",
      "Routing to Gas Safe registered plumbers where required",
    ],
    relatedServices: [
      { label: "Boiler repair Coventry", path: "/boiler-repair-coventry" },
      { label: "Blocked drain Coventry", path: "/blocked-drain-coventry" },
      { label: "Leak repair Coventry", path: "/leak-repair-coventry" },
    ],
    trustPoints: [
      { title: "Emergency-only intent", desc: "This page is written for urgent plumbing faults in Coventry, with practical guidance for immediate action." },
      { title: "Local Coventry coverage", desc: "Area references include key neighbourhoods and CV postcodes to reflect real local routing patterns." },
      { title: "Clear next steps", desc: "You get a simple process from enquiry to plumber callback, with pricing confirmed before work starts." },
    ],
  },

  "/emergency-plumber-nuneaton": {
    townName: "Nuneaton",
    h1Before: "Emergency Plumber Nuneaton – ",
    h1Accent: "24/7 Callouts",
    h1After: "",
    whenNeedBullets: [
      "Burst pipes or sudden water loss across Nuneaton or CV10/CV11",
      "Major leaks reaching ceilings, walls or electrical fittings",
      "Overflowing toilets with no usable second WC",
      "No hot water or no heating in cold weather",
      "Combi boiler lockouts and pressure-loss failures",
    ],
    fastResponseBody:
      "If you need an emergency plumber Nuneaton residents can call day or night, this page exists for urgent situations only. We route local vetted plumbers across Attleborough, Stockingford, Weddington, Whitestone, Horeston Grange and Chilvers Coton, plus Bedworth and the northern edge of Coventry. Triage, clear communication and honest arrival windows matter more than headline promises — the engineer who calls you back is the person actually attending.",
    whyChooseBullets: [
      "Emergency plumber Nuneaton focus — this page is built for urgent faults, not routine maintenance",
      "24 hour Nuneaton enquiry handling with postcode-led routing",
      "Local vetted plumbers dispatched based on issue type and live availability",
      "Honest arrival windows — we quote a realistic slot rather than a fixed time",
      "Pricing confirmed by the attending engineer before any work starts",
    ],
    emergencyCtas: [
      { headline: "Call now for immediate help in Nuneaton", subline: "Speak directly about your Nuneaton emergency — line answered 24/7." },
    ],
    extraFaqItems: NUNEATON_FAQ,
    paragraphs: [
      "Nuneaton is the largest town in Warwickshire, and the housing mix shapes how plumbing problems show up. Victorian terraces around Chilvers Coton and Attleborough often share waste runs that route one fault through several rooms at once. Inter-war semis around Stockingford typically have ageing galvanised cold-feed pipes that pit and weep without warning. Newer estates at Weddington, Whitestone and Horeston Grange tend to rely on sealed-system combi boilers that simply lock out the moment pressure drops past the threshold. When residents look for an emergency plumber Nuneaton can rely on, the practical local answer is matching the engineer to the property type as well as the fault.",
      "The urgent calls we route most often across CV10 and CV11 are burst pipes after a cold snap, sudden no-hot-water failures, mains-cold leaks behind kitchen units, overflowing toilets in mid-terraces, and combi boilers that no longer respond to a reset. Mid-terrace properties in Chilvers Coton occasionally see drainage backups that affect more than one home at once, which usually points to a shared waste run rather than an individual trap. If water is actively escaping, isolating the supply at the stopcock first — when it is reachable and safe — buys real time before an engineer arrives.",
      "Not every plumbing fault in Nuneaton needs an out-of-hours visit, and we will say so honestly when something can sensibly wait. A slow drip at a tap washer can usually be contained overnight; a burst feed pipe over a downstairs ceiling cannot. Signs to treat as a genuine emergency include water hitting an electrical fitting, sewage backing up through a fixture, a complete loss of heating in cold weather where vulnerable occupants are present, or a noticeable gas smell — for any gas concern the National Gas Emergency Service on 0800 111 999 is always the first call, not us.",
      "Local routing covers central Nuneaton plus Attleborough, Stockingford, Weddington, Whitestone, Horeston Grange and Chilvers Coton, with regular dispatch into Bedworth and the northern edges of Coventry. Because most partner engineers work north Warwickshire daily, response windows tend to be shortest during weekday daytime and evenings. Late-night and bank-holiday calls are still answered, but realistic arrival windows widen — we always quote the expected slot rather than promise a fixed arrival time.",
      "The process after you contact us is deliberately simple. You either call the line or submit the short form with your postcode and a brief description of the symptom. We review the issue, route it to the nearest available vetted engineer, and the engineer phones you back to confirm whether they can attend, when, and what their call-out or initial-hour rate looks like for that specific job. Pricing is set by the engineer on site — we are an introducer rather than a contractor — so you stay fully in control of the decision before any work begins.",
    ],
    serviceListItems: [
      "Burst pipe emergencies and urgent isolation support across CV10 and CV11",
      "Leak containment and water-damage-first response jobs",
      "Blocked drains, backed-up waste pipes and overflowing toilets",
      "No hot water, no heating and boiler fault escalation",
      "Out-of-hours emergency plumbing across Nuneaton neighbourhoods",
      "Routing to Gas Safe registered plumbers where gas work is involved",
    ],
    relatedServices: [
      { label: "Emergency plumber Coventry", path: "/emergency-plumber-coventry" },
      { label: "Emergency plumber Bedworth", path: "/emergency-plumber-bedworth" },
      { label: "Boiler repair Coventry", path: "/boiler-repair-coventry" },
      { label: "Blocked drain Coventry", path: "/blocked-drain-coventry" },
      { label: "Leak repair Coventry", path: "/leak-repair-coventry" },
    ],
    trustPoints: [
      { title: "Emergency-only intent", desc: "Written for urgent plumbing faults in Nuneaton, with practical guidance for immediate steps before an engineer arrives." },
      { title: "Local north-Warwickshire coverage", desc: "References real Nuneaton neighbourhoods and CV postcodes because routing is built around how engineers actually work." },
      { title: "Honest expectations", desc: "We are an introducer — pricing, scope and arrival windows are confirmed by the engineer attending." },
    ],
  },

  "/emergency-plumber-bedworth": {
    townName: "Bedworth",
    h1Before: "Emergency Plumber Bedworth – ",
    h1Accent: "24/7 Callouts",
    h1After: "",
    whenNeedBullets: [
      "Burst or split pipework across central Bedworth or CV12",
      "Mains-incoming leaks at the meter or under driveways",
      "Sudden no-hot-water or boiler pressure-loss failures",
      "Blocked toilets, sinks and overflowing waste pipes",
      "Leaks from radiator valves or visible joints in heating pipework",
    ],
    fastResponseBody:
      "If you need an emergency plumber Bedworth households can call out of hours, this page is for urgent jobs only — not booked installations or planned upgrades. We route local engineers across Bulkington, Exhall, Ash Green, Keresley, Longford and central Bedworth, and we work the Nuneaton and north-Coventry corridor regularly. Honest arrival slots and on-site pricing matter more here than headline promises.",
    whyChooseBullets: [
      "Emergency-only routing for Bedworth and CV12 — not a general bookings page",
      "24 hour line answered for urgent enquiries including weekends",
      "Local engineers familiar with both older ex-pit cottages and modern estates",
      "Realistic arrival windows quoted up front, not a fixed time",
      "Engineer-led pricing, with call-out and rate confirmed before attendance",
    ],
    emergencyCtas: [
      { headline: "Call for urgent help in Bedworth", subline: "Speak to the line directly — answered around the clock, every day." },
    ],
    extraFaqItems: BEDWORTH_FAQ,
    paragraphs: [
      "Bedworth sits between Coventry and Nuneaton on the A444 corridor, and the housing tells the story of a former mining town that has steadily filled in since the 1960s. Older ex-pit cottages around the centre, large post-war council and former-council stock around Exhall and Ash Green, and modern infill estates near Keresley and Longford all behave differently when a plumbing fault appears. An emergency plumber Bedworth households can rely on needs to know the difference between a 1950s lead-and-copper hybrid behind a kitchen wall and a sealed mains-pressure system on a 2010s estate, because the safe first step is rarely the same.",
      "Across CV12 the urgent calls we route most often are leaks from old soldered joints behind boxed-in pipework, no-hot-water from a tripped or scaled-up combi, mains incoming leaks under driveways or front-garden meters, blocked toilets where the soil pipe has partially collapsed, and radiator valves that have started weeping under heating pressure. Properties around Exhall and Longford that share boundary walls with neighbours can also see damp issues that look like a leak but are actually next-door's mains seeping through — engineers are used to investigating before chasing into plaster.",
      "Not every problem in Bedworth is genuinely an emergency. A slow drip at an isolated tap can usually be contained with a bucket overnight; a steady drip from a ceiling rose underneath a bathroom cannot. If you can hear water running with every outlet closed, the meter is spinning, or you have lost hot water in a household with young children, elderly or disabled occupants in cold weather, treat the problem as urgent and call. For any gas smell or carbon-monoxide concern, ring the National Gas Emergency Service on 0800 111 999 first — not us.",
      "Routing covers central Bedworth plus Bulkington, Exhall, Ash Green, Keresley and Longford, and we frequently dispatch on jobs that cross the boundary into Nuneaton and northern Coventry — particularly along the A444 and into Holbrooks and Foleshill. Because so many engineers we work with live within ten minutes of the town, weekday daytime and evening response is generally tight; overnight and Sunday slots widen with availability, and we will always tell you the realistic arrival window before you commit to a visit.",
      "After you call or submit the form, we read the symptom and postcode, and forward to the nearest engineer who can take a job that night or day. The engineer rings you back, confirms whether they can attend, and walks through pricing — call-out, first-hour rate, and likely parts where it can be predicted. You make the decision before anyone is dispatched. We do not invoice for the engineer's work because we are the introducer, not the contractor; any agreement to start work sits between you and the engineer on site.",
    ],
    serviceListItems: [
      "Burst-pipe isolation and emergency containment across CV12",
      "Mains-incoming leak investigation and stopcock isolation",
      "Blocked drains, overflowing toilets and waste-pipe issues",
      "No-hot-water and combi-boiler pressure-loss callouts",
      "Radiator and heating-circuit leak repairs",
      "Routing to Gas Safe registered engineers where gas is involved",
    ],
    relatedServices: [
      { label: "Emergency plumber Coventry", path: "/emergency-plumber-coventry" },
      { label: "Emergency plumber Nuneaton", path: "/emergency-plumber-nuneaton" },
      { label: "Boiler repair Coventry", path: "/boiler-repair-coventry" },
      { label: "Blocked drain Coventry", path: "/blocked-drain-coventry" },
      { label: "Leak repair Coventry", path: "/leak-repair-coventry" },
    ],
    trustPoints: [
      { title: "Local routing first", desc: "Engineers we route are mostly within ten minutes of Bedworth, so practical response is realistic rather than aspirational." },
      { title: "Older-stock awareness", desc: "We brief engineers on the property type from your postcode so older Bedworth pipework gets the right diagnostic approach." },
      { title: "Honest pricing model", desc: "Pricing is set by the engineer attending — we do not quote on their behalf, which keeps you in control of the decision." },
    ],
  },

  "/emergency-plumber-rugby": {
    townName: "Rugby",
    h1Before: "Emergency Plumber Rugby – ",
    h1Accent: "24/7 Callouts",
    h1After: "",
    whenNeedBullets: [
      "Burst pipes after frost or sudden pressure changes",
      "Active leaks from cylinders, immersion seals or pipework",
      "Sewage backing up through toilets, baths or showers",
      "Complete loss of hot water in vulnerable households",
      "Combi boiler lockouts and frozen-condensate failures",
    ],
    fastResponseBody:
      "If you need an emergency plumber Rugby residents can call day or night, this page is built for urgent faults only. Routing covers CV21, CV22 and CV23 — Rugby town plus Bilton, Hillmorton, Brownsover, Cawston, Newbold-on-Avon, Dunchurch and Clifton upon Dunsmore. Hard-water and unvented-cylinder faults are common across this area, and engineers are matched to the property type as well as the symptom.",
    whyChooseBullets: [
      "Emergency-only Rugby focus, not routine bookings",
      "24 hour line answered for CV21, CV22 and CV23 enquiries",
      "Engineers familiar with unvented systems and hard-water failures",
      "Realistic arrival windows for village and outlying postcodes",
      "Pricing confirmed by the attending engineer before any work begins",
    ],
    emergencyCtas: [
      { headline: "Call for urgent help across Rugby", subline: "CV21, CV22 and CV23 covered around the clock — speak to the line directly." },
    ],
    extraFaqItems: RUGBY_FAQ,
    paragraphs: [
      "Rugby is a market town with a strong commuter base, and the property mix runs from Victorian and Edwardian terraces near the centre and around Bilton, to mid-century semi-detached homes in Hillmorton, then out to large modern estates at Cawston, Brownsover and Newbold-on-Avon. Each style of home behaves differently when a plumbing fault appears. Pre-war properties typically still carry a mix of copper, lead and original cast-iron stack pipes that need careful identification before chasing or cutting. Newer estates near Cawston tend to run unvented hot-water cylinders with pressure-fed showers, where a single failing PRV or expansion vessel can knock out the whole supply.",
      "The urgent jobs we route most often across CV21, CV22 and CV23 are burst pipes after a freeze, sudden no-hot-water failures, leaks from immersion-heater seals and inlet groups on unvented cylinders, overflowing toilets in Edwardian terraces with single soil stacks, and combi boiler shutdowns where the condensate has frozen overnight. Rugby is also a notably hard-water area — the chalk geology around the Avon valley drives scale build-up that progressively narrows pipework and reduces flow long before a visible fault appears, which is why some issues escalate quickly when they finally do.",
      "Not every problem needs an immediate visit. A slow drip at a shower hose junction can sensibly wait until morning; an active escape from a third-floor bathroom into a downstairs ceiling cannot. Treat as urgent any active leak that has reached ceilings or wiring, any complete loss of hot water in vulnerable households during cold weather, any sewage backing up through fixtures, and anything involving gas — for gas concerns the National Gas Emergency Service on 0800 111 999 is the first call rather than us. We will tell you honestly when waiting until daytime is a sensible call.",
      "Coverage centres on Rugby town plus Bilton, Hillmorton, Brownsover, Cawston, Newbold-on-Avon, Dunchurch and Clifton upon Dunsmore, and engineers regularly cross into the Daventry and southern Coventry edges depending on the type of job. Because Rugby has a notably dispersed footprint compared with denser towns, arrival windows on village calls (especially Dunchurch and Clifton) can be slightly longer than for a centre-of-town address; we always quote a realistic slot at the point of dispatch so you can plan around it.",
      "Once you contact the line or submit the form, we match the issue and postcode to the nearest engineer with current availability. The engineer rings back, confirms whether they can attend, when, and the call-out and initial-hour pricing for that specific job. Decisions sit with you — we are an introducer, not a contractor, so the engineer's costs and any parts decisions are between the two of you. Most urgent jobs we route are confirmed within minutes of the first call; some bigger investigations (for example hidden leaks under timber floors) need a follow-up daytime visit, which the engineer will discuss honestly on the call.",
    ],
    serviceListItems: [
      "Burst-pipe isolation and urgent containment across Rugby",
      "Unvented cylinder PRV, expansion-vessel and immersion failures",
      "Blocked drains, soil-stack issues and overflowing fixtures",
      "No-hot-water and frozen-condensate boiler callouts",
      "Hidden-leak investigation (engineer-led)",
      "Routing to Gas Safe registered engineers for gas work",
    ],
    relatedServices: [
      { label: "Emergency plumber Coventry", path: "/emergency-plumber-coventry" },
      { label: "Emergency plumber Leamington Spa", path: "/emergency-plumber-leamington-spa" },
      { label: "Boiler repair Coventry", path: "/boiler-repair-coventry" },
      { label: "Blocked drain Coventry", path: "/blocked-drain-coventry" },
      { label: "Leak repair Coventry", path: "/leak-repair-coventry" },
    ],
    trustPoints: [
      { title: "Hard-water expertise", desc: "Rugby's chalk geology means scale-driven failures are common; engineers we route diagnose them rather than guess." },
      { title: "Realistic village windows", desc: "Outlying postcodes like Dunchurch and Clifton get an honest arrival slot, not an idealised promise." },
      { title: "Introducer-only model", desc: "Pricing and scope sit with the engineer attending — we do not quote on their behalf." },
    ],
  },

  "/emergency-plumber-warwick": {
    townName: "Warwick",
    h1Before: "Emergency Plumber Warwick – ",
    h1Accent: "24/7 Callouts",
    h1After: "",
    whenNeedBullets: [
      "Active leaks in listed or period Warwick properties",
      "Burst pipes after frost in loft feed runs",
      "Mains-incoming leaks at the meter or driveway",
      "Unvented cylinder failures on newer estate properties",
      "Sewage backing up through toilets or fixtures",
    ],
    fastResponseBody:
      "If you need an emergency plumber Warwick residents can call out of hours, this page is for urgent faults only. Routing covers CV34 and CV35 — the town centre, Chase Meadow, Woodloes, Myton, Leek Wootton, Hatton and into the Leamington Spa corridor. Engineers used to working in listed and conservation-area properties weigh fabric damage against urgency, and quote a realistic arrival slot before you commit.",
    whyChooseBullets: [
      "Engineers familiar with listed and conservation-area plumbing",
      "24 hour line answered for urgent CV34 and CV35 enquiries",
      "Honest arrival windows for central and outlying postcodes",
      "Engineer-led pricing, confirmed before any work starts",
      "Routing covers Warwick and Leamington in the same dispatch run",
    ],
    emergencyCtas: [
      { headline: "Urgent help in Warwick — speak to the line", subline: "CV34 and CV35 covered around the clock, with realistic arrival windows." },
    ],
    extraFaqItems: WARWICK_FAQ,
    paragraphs: [
      "Warwick is a historic county town, and a meaningful share of the housing stock is listed or sits within conservation areas — particularly around the centre, the Mill Street and Castle Lane streets, and the older lanes between the castle and the river. That matters for plumbing because chasing pipework into stone or oak panelling is rarely a straightforward decision, and an experienced engineer will pause and offer alternatives rather than cut first. Outside the historic core, large modern estates at Chase Meadow, Woodloes, Myton and Hatton run mostly on contemporary sealed systems where the diagnostic process looks completely different.",
      "Across CV34 and CV35 the urgent calls we route most often are leaks from boxed-in pipework in period houses, mains-incoming leaks under driveways and front gardens, frozen and burst feed pipes in lofts during cold snaps, combi boiler shutdowns on the newer estates, and unvented hot-water cylinder failures in larger family homes around Chase Meadow and Woodloes. Hard water across this part of Warwickshire also drives a steady underlying rate of scale-related faults that finally surface as a no-hot-water or low-flow emergency once a heat exchanger has narrowed past the tipping point.",
      "Not every fault is genuinely an emergency, and we will say so honestly. A slow weep at a tap connector or a single dripping radiator valve can usually wait until morning; an active leak hitting a ceiling, a complete loss of hot water in cold weather for a vulnerable household, or sewage backing up through a fixture cannot. For listed or conservation-area properties, an experienced engineer will also weigh damage to original fabric against the urgency of the fault, and discuss the trade-off with you before starting work. For any gas concern, the National Gas Emergency Service on 0800 111 999 is the first call.",
      "Routing covers central Warwick plus Chase Meadow, Woodloes, Myton, Leek Wootton, Hatton and the immediate corridor into Leamington Spa. Many engineers we work with cover both Warwick and Leamington in the same day, which keeps arrival windows tight on weekday daytimes; out-of-hours and Sunday windows widen, and we will quote the realistic slot before you commit. Conservation-area access — including narrow Mill Street parking and limited turning at the river end — is something we flag at dispatch so the engineer is not surprised on arrival.",
      "After you call or submit the form, we route the postcode and symptom to the nearest engineer with current availability. The engineer phones back to confirm whether they can attend, when, and the call-out and initial-hour pricing for that job. Pricing is set by the engineer on site — we do not quote on their behalf — so the decision to proceed is fully yours. For larger investigations in period properties (suspected hidden leaks, soil-stack issues under timber floors), the engineer may recommend a daytime follow-up with the right access tools, which is more economical than working at an emergency rate where it isn't strictly necessary.",
    ],
    serviceListItems: [
      "Burst-pipe isolation and urgent containment in CV34 and CV35",
      "Hidden-leak investigation, including listed-property access",
      "Unvented cylinder and pressure-system failures",
      "Blocked drains, soil-stack and waste-pipe faults",
      "No-hot-water and frozen-condensate boiler callouts",
      "Routing to Gas Safe registered engineers for gas work",
    ],
    relatedServices: [
      { label: "Emergency plumber Leamington Spa", path: "/emergency-plumber-leamington-spa" },
      { label: "Emergency plumber Kenilworth", path: "/emergency-plumber-kenilworth" },
      { label: "Emergency plumber Coventry", path: "/emergency-plumber-coventry" },
      { label: "Boiler repair Coventry", path: "/boiler-repair-coventry" },
      { label: "Leak repair Coventry", path: "/leak-repair-coventry" },
    ],
    trustPoints: [
      { title: "Conservation-area sensitivity", desc: "Engineers used to Warwick's historic streets weigh fabric damage carefully before chasing or cutting." },
      { title: "Cross-town routing", desc: "Warwick and Leamington are dispatched together, keeping daytime windows tight across both." },
      { title: "Engineer-led pricing", desc: "We are an introducer, so the engineer on site confirms costs and scope before work begins." },
    ],
  },

  "/emergency-plumber-leamington-spa": {
    townName: "Leamington Spa",
    h1Before: "Emergency Plumber Leamington Spa – ",
    h1Accent: "24/7 Callouts",
    h1After: "",
    whenNeedBullets: [
      "Active leaks in shared-riser flats around the centre",
      "Burst pipes in lofts or top-floor period conversions",
      "Unvented cylinder PRV and expansion-vessel failures",
      "Sewage backing up through shared soil stacks",
      "Complete loss of hot water in vulnerable households",
    ],
    fastResponseBody:
      "If you need an emergency plumber Leamington Spa residents can call any time of day or night, this page is for urgent jobs only. Routing covers CV31 and CV32 including the centre, Whitnash, Sydenham, Lillington, Milverton, Cubbington and the Warwick and Kenilworth corridors. Engineers used to high-rise period stock and shared-riser flats handle the access questions on the call-back so dispatch is realistic.",
    whyChooseBullets: [
      "Engineers familiar with shared-riser flats and converted period stock",
      "24 hour line answered for CV31 and CV32 enquiries",
      "Realistic arrival windows for central and outlying postcodes",
      "Cross-routing with Warwick and Kenilworth keeps daytime cover tight",
      "Engineer-led pricing, confirmed before any work starts",
    ],
    emergencyCtas: [
      { headline: "Speak to the line for urgent Leamington help", subline: "CV31 and CV32 covered around the clock, with realistic arrival windows." },
    ],
    extraFaqItems: LEAMINGTON_SPA_FAQ,
    paragraphs: [
      "Royal Leamington Spa is a Regency-era town with a property mix that is unusual for the region: large four- and five-storey Victorian and Edwardian townhouses around the Parade and Lansdowne Circus, many split into flats with shared cold-water risers; converted period stock on Clarendon Street and the Old Town; substantial post-war estates in Lillington and Cubbington; smaller terraces around Sydenham; and modern infill in Milverton and Whitnash. An emergency plumber Leamington Spa residents can call needs to be comfortable with high-rise period risers, communal stop-tap arrangements and unvented cylinder systems — they often appear within the same square mile.",
      "Across CV31 and CV32 the urgent calls we route most often are leaks from communal risers in converted flats (where an upstairs fault floods a downstairs neighbour), no-hot-water from scaled or failing combis in student-let stock around Sydenham, burst pipes in unheated lofts during cold snaps, unvented cylinder PRV and expansion-vessel failures in larger family homes, and overflowing toilets in flats where the soil stack is shared. Hard water across the area drives a slow underlying scale problem that often surfaces as an emergency only once flow has narrowed past the tipping point.",
      "Not every issue is genuinely urgent. A slow drip at a single tap, or a short-term loss of hot water in summer, can usually wait until daytime — we will say so honestly. Treat as an emergency: any active leak that risks reaching electrics or downstairs neighbours, sewage backing up through a fixture, total loss of heating in cold weather where vulnerable occupants are present, and any gas concern (for which the National Gas Emergency Service on 0800 111 999 is the first call, not us). For shared-riser flats, isolating at the flat's own stop-tap as a first step often limits the damage substantially before an engineer arrives.",
      "Routing covers the Leamington centre — both the Parade side and the Old Town — plus Whitnash, Sydenham, Lillington, Milverton and Cubbington, and we frequently dispatch on jobs that span Warwick and Kenilworth in the same shift. For converted flats and shared-services blocks, the engineer will ask on the call-back whether you have access to the building's own communal isolation or whether the property's individual stop-tap is enough. That single question often saves a wasted journey because it tells us whether the engineer needs a building manager present on attendance.",
      "After you call or submit the form, we read the issue and postcode and route to the nearest engineer with availability. The engineer rings back, confirms whether they can attend and when, and walks through the call-out and initial-hour pricing for that job. Pricing is the engineer's, not ours — we are an introducer rather than a contractor — so you stay fully in control of the decision before any work starts. For larger investigations in period properties (hidden leaks, riser problems), the engineer may recommend a daytime visit with appropriate tools and access, which is more economical than an out-of-hours rate.",
    ],
    serviceListItems: [
      "Burst-pipe isolation in shared-riser and top-floor flats",
      "Hidden-leak investigation in period properties",
      "Unvented cylinder and pressure-system failures",
      "Blocked drains, soil-stack and waste-pipe faults",
      "No-hot-water and combi boiler pressure-loss callouts",
      "Routing to Gas Safe registered engineers for gas work",
    ],
    relatedServices: [
      { label: "Emergency plumber Warwick", path: "/emergency-plumber-warwick" },
      { label: "Emergency plumber Kenilworth", path: "/emergency-plumber-kenilworth" },
      { label: "Emergency plumber Coventry", path: "/emergency-plumber-coventry" },
      { label: "Boiler repair Coventry", path: "/boiler-repair-coventry" },
      { label: "Blocked drain Coventry", path: "/blocked-drain-coventry" },
    ],
    trustPoints: [
      { title: "Shared-riser experience", desc: "Engineers used to Leamington's centre handle high-rise period plumbing without surprises on arrival." },
      { title: "Cross-town dispatch", desc: "Leamington routing connects with Warwick and Kenilworth so daytime cover stays consistent." },
      { title: "Engineer-led pricing", desc: "We are an introducer; pricing and scope are confirmed by the attending engineer." },
    ],
  },

  "/emergency-plumber-kenilworth": {
    townName: "Kenilworth",
    h1Before: "Emergency Plumber Kenilworth – ",
    h1Accent: "24/7 Callouts",
    h1After: "",
    whenNeedBullets: [
      "Unvented cylinder failures (PRV, expansion, immersion)",
      "Burst pipes in lofts, outhouses or long mains runs",
      "Mains-incoming leaks under driveways on larger plots",
      "No-hot-water from scaled combis in centre-of-town flats",
      "Sewage backing up through fixtures or shared stacks",
    ],
    fastResponseBody:
      "If you need an emergency plumber Kenilworth residents can call around the clock, this page is built for urgent jobs only. Routing covers CV8 including the town centre, Abbey Fields, St John's, Crackley, Burton Green and the Leek Wootton edge, and engineers cross-route with Warwick and southern Coventry to keep daytime windows tight.",
    whyChooseBullets: [
      "Engineers familiar with unvented systems on larger Kenilworth homes",
      "24 hour line answered for CV8 enquiries including weekends",
      "Honest arrival windows quoted before you commit",
      "Cross-dispatch with Warwick and Coventry keeps cover consistent",
      "Engineer-led pricing, confirmed before any work starts",
    ],
    emergencyCtas: [
      { headline: "Speak to the line for urgent Kenilworth help", subline: "CV8 covered around the clock with realistic arrival slots." },
    ],
    extraFaqItems: KENILWORTH_FAQ,
    paragraphs: [
      "Kenilworth is a wealthy commuter town with two distinct property worlds: the older streets around Abbey Fields, St John's and the High Street, which mix Victorian and inter-war stock; and the larger detached and executive homes around Crackley, Burton Green and the Leek Wootton edge, where unvented cylinders, pressure-fed showers and large radiator circuits are standard. An emergency plumber Kenilworth residents can call honestly is one who recognises that a leak from a 1930s soldered joint in a kitchen near Abbey Fields and an unvented PRV failure on a 2010s Crackley estate need completely different responses.",
      "Across CV8 the urgent jobs we route most often are unvented cylinder failures (PRV, expansion-vessel or immersion), mains-incoming leaks under long driveways on the larger plots, leaks from boxed-in pipework in Victorian conversions near St John's, no-hot-water from scaled combis in flats around the town centre, burst pipes in lofts and outhouses after a freeze, and overflowing toilets in older terraces where the soil stack is shared. Hard water across this corner of Warwickshire drives a steady underlying scale rate that often surfaces as an emergency once a heat exchanger or shower thermostat has narrowed past the tipping point.",
      "Not every fault is genuinely an emergency. A slow drip at a single tap connector, or a brief hot-water dip in summer, can usually be contained until daytime — we will tell you when that's the case rather than recommend an out-of-hours visit. Treat as urgent: any active leak reaching ceilings, electrics or downstairs rooms; sewage backing up through fixtures; complete loss of heating in cold weather for vulnerable households; and any gas concern, for which the National Gas Emergency Service on 0800 111 999 is the first call. For large unvented systems, the engineer may ask you to isolate the cold-mains feed at the stop-tap before they arrive — that single step often prevents the cylinder dump from continuing while they travel.",
      "Routing covers central Kenilworth plus Abbey Fields, St John's, Crackley, Burton Green and the Leek Wootton edge, and engineers regularly cross-dispatch with Warwick and southern Coventry. Because Kenilworth sits on the southern edge of the Coventry conurbation, weekday arrival windows can be tight — many engineers we work with cover Coventry and Kenilworth in the same day. Overnight, Sunday and bank-holiday windows widen, and we will always quote a realistic slot before you commit to a visit.",
      "After you call or submit the form, we read the postcode and symptom and route to the nearest engineer with current availability. The engineer rings back, confirms whether they can attend, when, and the call-out and initial-hour pricing for that specific job. Pricing is the engineer's call — we are an introducer rather than a contractor — so the decision to proceed is fully yours after that conversation. For larger investigations on big detached homes (hidden leaks in long pipework runs, underfloor heating manifold issues) the engineer may recommend a daytime follow-up with the right diagnostic tools, which is more economical than working at an emergency rate.",
    ],
    serviceListItems: [
      "Burst-pipe isolation and urgent containment across CV8",
      "Unvented cylinder PRV, expansion-vessel and immersion failures",
      "Hidden-leak investigation, including long pipework runs",
      "Blocked drains, soil-stack and waste-pipe faults",
      "No-hot-water and combi boiler pressure-loss callouts",
      "Routing to Gas Safe registered engineers for gas work",
    ],
    relatedServices: [
      { label: "Emergency plumber Warwick", path: "/emergency-plumber-warwick" },
      { label: "Emergency plumber Leamington Spa", path: "/emergency-plumber-leamington-spa" },
      { label: "Emergency plumber Coventry", path: "/emergency-plumber-coventry" },
      { label: "Boiler repair Coventry", path: "/boiler-repair-coventry" },
      { label: "Leak repair Coventry", path: "/leak-repair-coventry" },
    ],
    trustPoints: [
      { title: "Unvented system experience", desc: "Larger Kenilworth homes commonly run unvented cylinders; engineers we route handle PRV and expansion faults routinely." },
      { title: "Cross-conurbation cover", desc: "Engineers dispatch across Kenilworth, Warwick and southern Coventry, keeping daytime windows tight." },
      { title: "Engineer-led pricing", desc: "We are an introducer; pricing and scope are confirmed by the attending engineer." },
    ],
  },

  "/boiler-repair-coventry": {
    h1Before: "Boiler Repair ",
    h1Accent: "Coventry",
    paragraphs: [
      "A failing boiler in Coventry during autumn or winter affects hot water, heating, and sometimes safety systems across your property. Flats around the centre, family houses in Cheylesmore and Binley, and older homes in Foleshill all rely on dependable heat; when the display codes, pressure drops, or the flame fails to establish, you need a Gas Safe registered engineer rather than a general handyman. coventryplumbing247 helps you describe the fault once and connects you with vetted local professionals who understand Worcester Bosch, Vaillant, Baxi and other common models fitted across the West Midlands.",
      "Boiler repair Coventry searches often come from landlords with HMOs near the university quarter, first-time buyers in Chapelfields, and retirees in villages around the city boundary. We make it explicit that any contract for labour and parts sits between you and the engineer, while we handle the introduction and your preferred contact channel. Whether you smell gas, see repeated lock-outs, or notice a slow deterioration in hot water performance, accurate notes help the engineer prepare parts or diagnostics before they travel from Coventry or nearby towns such as Rugby and Southam.",
      "Surrounding areas including Atherstone, Bulkington and parts of Royal Leamington Spa frequently book engineers who are based in or around Coventry for next-day or urgent slots. If your tenancy agreement requires notifying a managing agent, you can still use the form and flag that a decision-maker is available by phone. Many repairs are resolved in a single visit once access to the boiler cupboard, flue route, and controls is straightforward — mention pets, locked side gates, or parking restrictions in advance.",
      "Transparent communication matters after a breakdown: expect to discuss minimum charges, replacement parts, and whether a repair is sensible compared with ageing equipment. coventryplumbing247 does not quote fixed prices on behalf of engineers because every home near Coventry differs. What we do provide is a dependable route to specialists who carry the right registrations and who routinely work in Coventry, Nuneaton and wider Warwickshire postcodes when capacity allows.",
    ],
    serviceListItems: [
      "No heat or hot water diagnostics",
      "Boiler pressure faults and error codes",
      "Radiator circulation and motorised valve issues",
      "Central heating flushing discussions (engineer-led)",
      "Landlord safety and recommissioning support",
      "Recommendations when replacement is more prudent than repair",
    ],
    relatedServices: [
      { label: "Emergency plumber Coventry", path: "/emergency-plumber-coventry" },
      { label: "Blocked drain Coventry", path: "/blocked-drain-coventry" },
      { label: "Leak repair Coventry", path: "/leak-repair-coventry" },
    ],
    trustPoints: [
      { title: "Gas Safe awareness", desc: "We route gas boiler calls toward appropriately registered engineers for Coventry and surrounding towns." },
      { title: "Local experience", desc: "Engineers we introduce often work CV postcodes daily, from city terraces to edge-of-county properties." },
      { title: "Clear expectations", desc: "You are told we are an introducer — pricing is confirmed by the engineer on site." },
    ],
  },
  "/blocked-drain-coventry": {
    h1Before: "Blocked Drain ",
    h1Accent: "Coventry",
    paragraphs: [
      "Blocked drains in Coventry range from slow bathroom basins in city-centre apartments to backed-up kitchen waste pipes in suburban semis and clogged rainwater gullies near industrial estates. Fat build-up, wet wipes, tree roots and collapsed sections of older clay pipe can all create unpleasant smells, gurgling stacks, or overflows at the lowest fixture. coventryplumbing247 links you to drainage specialists and plumbers equipped for mechanical clearing, jetting and CCTV investigations where appropriate, across Coventry and into neighbouring built-up areas.",
      "Customers in Radford, Longford and Holbrooks often need same-day help when a toilet will not clear, while businesses near the motorway network may require out-of-hours attendance to protect trading space. We encourage you to note when multiple fixtures are affected, as that usually indicates a shared drain rather than a single trap. Engineers travelling from Coventry may also serve Exhall, Bedworth and parts of northern Warwickshire when schedules align.",
      "Responsible clearing protects your Coventry property and the wider sewer network: repeated chemical dosing without diagnosis can damage older pipework. Professionals assess whether rodding, flexible springs or high-pressure water jetting is safest. If your home backs onto gardens with mature trees in Tile Hill or Finham, mention it — root ingress is a known pattern in parts of the West Midlands with mixed-era housing.",
      "Rental properties around Hillfields and Spon End benefit from fast coordination between tenants, agents and engineers. coventryplumbing247 keeps consents explicit and stores your postcode so attendance can be confirmed realistically. We are not the contractor clearing the drain; the engineer you choose carries insurance, methodology and pricing. That distinction keeps responsibilities clear while still helping Coventry residents and nearby towns regain working sanitation quickly.",
    ],
    serviceListItems: [
      "Kitchen sink and waste pipe blockages",
      "Toilet, bath and shower drain clearing",
      "Stack and branch drain investigations",
      "High-pressure jetting where suitable",
      "Outside drain, gully and trap faults",
      "Advice when shared sewers or Thames Water involvement applies",
    ],
    relatedServices: [
      { label: "Emergency plumber Coventry", path: "/emergency-plumber-coventry" },
      { label: "Boiler repair Coventry", path: "/boiler-repair-coventry" },
      { label: "Leak repair Coventry", path: "/leak-repair-coventry" },
    ],
    trustPoints: [
      { title: "Rapid local routing", desc: "Drain issues can damage decoration fast — Coventry-based engineers aim to attend as capacity allows." },
      { title: "Honest scope", desc: "Clearer symptom descriptions from Coventry and surrounding postcodes reduce wasted visits." },
      { title: "Any time of week", desc: "Evenings and weekends matter when WC facilities back up — we reflect real-world availability." },
    ],
  },
  "/leak-repair-coventry": {
    h1Before: "Leak Repair ",
    h1Accent: "Coventry",
    paragraphs: [
      "Leak repair Coventry enquiries start with visible drips, damp plaster, unexplained mould patches, or a water meter that never quite settles. Properties from post-war estates in Willenhall to refurbished warehouses converted near the canal basin all need accurate diagnosis before walls are opened. coventryplumbing247 introduces you to experienced engineers who can isolate supplies, repair accessible pipework, and recommend further investigation when a hidden leak is suspected across Coventry or edge communities towards Warwick and Stratford directions.",
      "Insurance and landlord coordination often matters in Cheylesmore and Leamington Road areas where pipework runs through concrete floors or communal voids. The form asks for access preferences so engineers from Coventry can bring moisture meters, acoustic aids or thermal tools when justified. Mention whether the leak worsens when heating runs or only when mains pressure peaks overnight — those clues narrow the search before anyone lifts flooring.",
      "Surrounding towns such as Kenilworth and Balsall Common frequently use Coventry-based specialists for complex trace work because teams consolidate tools and repeat visits. If you have already tried tightening fittings yourself, say so; overtightened compression nuts are a common secondary issue. For exterior pipework affected by frost near Baginton or the greener fringes, describe insulation condition and recent cold snaps.",
      "Once the leak is found, repair scope may be a straightforward washer replacement or a longer rerun of pipework in an inaccessible void. coventryplumbing247 does not promise outcomes we cannot control — we provide structure, consent capture and connection to professionals who understand Coventry housing and Warwickshire surrounds. Your engineer documents what they find, quotes clearly, and carries liability appropriate to the job, leaving you with a drier, safer home.",
    ],
    serviceListItems: [
      "Visible pipe and joint leak repairs",
      "Under-sink and appliance isolation fixes",
      "Damp or stain investigations linked to plumbing",
      "Hidden leak escalation (engineer-led diagnostics)",
      "Burst pipe reinstatement after emergency isolation",
      "Coordination when multiple rooms in a Coventry property are affected",
    ],
    relatedServices: [
      { label: "Emergency plumber Coventry", path: "/emergency-plumber-coventry" },
      { label: "Boiler repair Coventry", path: "/boiler-repair-coventry" },
      { label: "Blocked drain Coventry", path: "/blocked-drain-coventry" },
    ],
    trustPoints: [
      { title: "Careful diagnostics", desc: "Stopping unnecessary damage matters in Coventry homes where pipe routes vary by era." },
      { title: "Regional coverage", desc: "Engineers often serve Coventry plus Kenilworth, Warwick and nearby Warwickshire routes." },
      { title: "Straightforward referrals", desc: "We stay transparent that the repairing engineer is your contractual partner on site." },
    ],
  },
};
