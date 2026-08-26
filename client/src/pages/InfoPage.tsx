/**
 * CIVIC PRECISION — information pages present verifiable company facts and clear, restrained next steps.
 */
import { ArrowRight, BriefcaseBusiness, Check, ChevronRight, Download, ExternalLink, FileText, MapPin, ShieldCheck, UsersRound } from "lucide-react";
import { Link, useLocation } from "wouter";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, PageLayout } from "@/components/SiteChrome";
import { analyticsEvent } from "@/components/ClientEnhancements";
import { MotionReveal } from "@/components/MotionReveal";
import { PageSEO } from "@/components/PageSEO";
import "./contact-map.css";

const industryData = [
  { number: "01", title: "Healthcare", text: "Healthcare IT, responsible AI, and staffing support for health systems and government health programs.", href: "/healthcare", signal: "Care delivery" },
  { number: "02", title: "Government / Public Sector", text: "Custom software, staffing, and teaming posture built for federal, state, and local programs.", href: "/government", signal: "Mission continuity" },
  { number: "03", title: "Financial Services & Insurance", text: "Technology and delivery support for complex, regulated operational environments.", href: "/industries/financial-services-insurance", signal: "Regulated workflow" },
  { number: "04", title: "Manufacturing", text: "Practical systems and specialized IT capacity for organizations where operations matter.", href: "/industries/manufacturing", signal: "Operational flow" },
  { number: "05", title: "Food", text: "Technology support for production, fulfillment, and delivery workflows where timing and availability matter.", href: "/industries/food", signal: "Production flow" },
  { number: "06", title: "Startups", text: "Focused software, advisory, and technical capacity for teams building a product or operating model.", href: "/industries/startups", signal: "Build velocity" },
  { number: "07", title: "Consulting Providers", text: "Technology support for consulting teams that need dependable systems, connectivity, and delivery capacity.", href: "/industries/consulting-providers", signal: "Client delivery" },
  { number: "08", title: "Non-Profit", text: "Scalable, cost-conscious technology support that keeps mission-focused teams moving.", href: "/industries/non-profit", signal: "Mission focus" },
  { number: "09", title: "AI", text: "Practical AI application and governance for teams exploring a more useful, accountable system.", href: "/industries/ai", signal: "Applied intelligence" },
  { number: "10", title: "Other", text: "A focused starting point for software and IT needs that do not fit a single industry category.", href: "/industries/other", signal: "Defined need" },
];

const pageSeo = {
  "/government": { title: "Government IT & Staffing Contractor in Virginia | EMFOI", description: "EMFOI supports federal, state, and local programs with custom software, responsible AI, IT consulting, and healthcare staffing for teaming and delivery needs.", canonicalPath: "/government", breadcrumbs: [{ name: "Government", path: "/government" }] },
  "/capability-statement": { title: "Capability Statement | EMFOI", description: "Review EMFOI’s current capabilities in custom software, AI governance, IT consulting, staff augmentation, and healthcare staffing for government and enterprise buyers.", canonicalPath: "/capability-statement", breadcrumbs: [{ name: "Capability Statement", path: "/capability-statement" }] },
  "/capabilities-statement": { title: "Capability Statement | EMFOI", description: "Review EMFOI’s current capabilities in custom software, AI governance, IT consulting, staff augmentation, and healthcare staffing for government and enterprise buyers.", canonicalPath: "/capability-statement", breadcrumbs: [{ name: "Capability Statement", path: "/capability-statement" }] },
  "/healthcare": { title: "Healthcare Technology, AI Governance & Staffing | EMFOI", description: "EMFOI supports care organizations and government health programs with custom software, practical AI governance, IT consulting, and healthcare staffing.", canonicalPath: "/healthcare", breadcrumbs: [{ name: "Healthcare", path: "/healthcare" }] },
  "/industries": { title: "Healthcare, Government & Industry Solutions | EMFOI", description: "EMFOI brings software, AI governance, IT consulting, staffing, and technology services to healthcare, public-sector, regulated, operational, and mission-focused organizations.", canonicalPath: "/industries", breadcrumbs: [{ name: "Industries", path: "/industries" }] },
  "/industries/food": { title: "Food Industry Technology Support | EMFOI", description: "EMFOI supports food-industry production, fulfillment, and delivery workflows with practical technology and IT capacity.", canonicalPath: "/industries/food", breadcrumbs: [{ name: "Industries", path: "/industries" }, { name: "Food", path: "/industries/food" }] },
  "/industries/startups": { title: "Startup Software & Technology Support | EMFOI", description: "EMFOI helps startup teams shape software, advisory, and technical capacity around the product and operating model they are building.", canonicalPath: "/industries/startups", breadcrumbs: [{ name: "Industries", path: "/industries" }, { name: "Startups", path: "/industries/startups" }] },
  "/industries/consulting-providers": { title: "Technology Support for Consulting Providers | EMFOI", description: "EMFOI supports consulting providers with dependable systems, connectivity, and delivery capacity.", canonicalPath: "/industries/consulting-providers", breadcrumbs: [{ name: "Industries", path: "/industries" }, { name: "Consulting Providers", path: "/industries/consulting-providers" }] },
  "/industries/non-profit": { title: "Non-Profit Technology Support | EMFOI", description: "EMFOI provides scalable, cost-conscious technology support for mission-focused non-profit organizations.", canonicalPath: "/industries/non-profit", breadcrumbs: [{ name: "Industries", path: "/industries" }, { name: "Non-Profit", path: "/industries/non-profit" }] },
  "/industries/ai": { title: "AI Solutions for Organizations | EMFOI", description: "EMFOI helps organizations explore practical AI application and governance around a defined operational need.", canonicalPath: "/industries/ai", breadcrumbs: [{ name: "Industries", path: "/industries" }, { name: "AI", path: "/industries/ai" }] },
  "/industries/other": { title: "Technology Solutions for Emerging Needs | EMFOI", description: "EMFOI provides a focused starting point for software and IT needs outside a single industry category.", canonicalPath: "/industries/other", breadcrumbs: [{ name: "Industries", path: "/industries" }, { name: "Other", path: "/industries/other" }] },
  "/industries/financial-services": { title: "Financial Services & Insurance Technology Delivery | EMFOI", description: "EMFOI supports financial services and insurance organizations with custom software, AI governance, IT consulting, and staffing for complex operational environments.", canonicalPath: "/industries/financial-services-insurance", breadcrumbs: [{ name: "Industries", path: "/industries" }, { name: "Financial Services & Insurance", path: "/industries/financial-services-insurance" }] },
  "/industries/financial-services-insurance": { title: "Financial Services & Insurance Technology Delivery | EMFOI", description: "EMFOI supports financial services and insurance organizations with custom software, AI governance, IT consulting, and staffing for complex operational environments.", canonicalPath: "/industries/financial-services-insurance", breadcrumbs: [{ name: "Industries", path: "/industries" }, { name: "Financial Services & Insurance", path: "/industries/financial-services-insurance" }] },
  "/industries/manufacturing": { title: "Manufacturing Technology Delivery & IT Capacity | EMFOI", description: "EMFOI supports manufacturing organizations with practical software, AI governance, IT consulting, and specialized technology capacity for operational work.", canonicalPath: "/industries/manufacturing", breadcrumbs: [{ name: "Industries", path: "/industries" }, { name: "Manufacturing", path: "/industries/manufacturing" }] },
  "/about": { title: "About EMFOI | Government, Healthcare & Enterprise Delivery", description: "Learn about EMFOI, a Herndon, Virginia-based software, AI, consulting, and staffing partner for government, healthcare, and enterprise programs.", canonicalPath: "/about", breadcrumbs: [{ name: "About EMFOI", path: "/about" }] },
  "/why-us": { title: "Why EMFOI | Personal Service, Technical Capability & Partnership", description: "Learn how EMFOI brings client-oriented service, technical competence, ownership, problem-solving, and transparency to technology delivery.", canonicalPath: "/why-us", breadcrumbs: [{ name: "Why EMFOI", path: "/why-us" }] },
  "/terms-conditions": { title: "Terms & Conditions | EMFOI", description: "Review the current EMFOI Terms & Conditions and related website-use information.", canonicalPath: "/terms-conditions", breadcrumbs: [{ name: "Terms & Conditions", path: "/terms-conditions" }] },
  "/dofiling": { title: "DoFiling by EMFOI | Immigration Case Management Platform", description: "DoFiling is EMFOI’s cloud workspace for immigration case workflows, questionnaires, document handling, attorneys, and employers.", canonicalPath: "/dofiling", breadcrumbs: [{ name: "DoFiling", path: "/dofiling" }] },
  "/carehigh": { title: "CareHigh by EMFOI | Dental Referral Management", description: "CareHigh is EMFOI software for dental teams that helps track referrals, support follow-up, and keep care workflows visible.", canonicalPath: "/carehigh", breadcrumbs: [{ name: "CareHigh", path: "/carehigh" }] },
  "/careers": { title: "Careers | EMFOI", description: "Learn about future opportunities at EMFOI across technology, consulting, and healthcare staffing.", canonicalPath: "/careers", breadcrumbs: [{ name: "Careers", path: "/careers" }], noindex: true },
  "/contact": { title: "Contact EMFOI | Government, Healthcare & Technology Delivery", description: "Contact EMFOI in Herndon, Virginia to discuss custom software, AI governance, IT staffing, healthcare staffing, or public-sector teaming.", canonicalPath: "/contact", breadcrumbs: [{ name: "Contact", path: "/contact" }] },
  "/privacy": { title: "Privacy Notice | EMFOI", description: "Read the EMFOI privacy notice and manage optional analytics preferences.", canonicalPath: "/privacy", breadcrumbs: [{ name: "Privacy Notice", path: "/privacy" }], noindex: true },
  "/insights": { title: "Insights | EMFOI", description: "EMFOI is preparing approved insights on accessible design, responsible AI, government delivery, healthcare staffing, and technology operations.", canonicalPath: "/insights", breadcrumbs: [{ name: "Insights", path: "/insights" }], noindex: true },
} as const;

function GovernmentPage() {
  return <PageLayout><PageHero variant="data" eyebrow="Government / Public Sector" title="Ready to support the public work that cannot pause." intro="EMFOI supports federal and state government as a prime, subcontractor, and teaming partner — with software, AI, IT consulting, and healthcare staffing capabilities." ><Link href="/contact" className="button button-primary">Discuss teaming <ArrowRight size={16} /></Link><Link href="/capability-statement" className="button button-secondary">Download capability statement <Download size={16} /></Link></PageHero><section className="site-width buyer-dossier-strip" aria-label="Government buyer dossier" data-aos="fade-up"><div className="buyer-dossier-mark" aria-hidden="true"><i /><i /><i /><i /></div><div><span>01 / COMPANY PROFILE</span><p>Entity, location, and capability reference.</p></div><div><span>02 / DELIVERY POSTURE</span><p>Prime, subcontractor, and teaming support.</p></div><div><span>03 / NEXT STEP</span><p>Match the program need, then begin the conversation.</p></div></section><section className="paper-section"><div className="site-width gov-intro-grid editorial-grid"><div><p className="eyebrow"><span />How to work with us</p><h2>Practical support for public-sector programs.</h2></div><p className="large-copy">We bring a focused capability mix and a collaborative posture to government work. EMFOI is available for subcontracting and teaming today while pursuing additional contract-vehicle access as appropriate.</p></div></section><section className="site-width company-data-section" data-aos="fade-up"><div className="company-data-heading"><p className="eyebrow"><span />Company data</p><h2>Buyer reference</h2></div><div className="buyer-route-rail"><span>01</span><p>Verify the company profile.</p><span>02</span><p>Match the capability and program need.</p><span>03</span><p>Begin a focused teaming conversation.</p></div><div className="company-data-grid"><div><span>Legal name</span><strong>EMFOI, Inc.</strong></div><div><span>Corporate status</span><strong>Delaware corporation · 2013</strong></div><div><span>Place of performance</span><strong>Herndon, Virginia</strong></div><div><span>Small-business status</span><strong>Small business</strong></div><div><span>UEI</span><strong className="pending-value">Pending confirmation</strong></div><div><span>CAGE</span><strong className="pending-value">Pending confirmation</strong></div></div><div className="naics-line"><span>Relevant NAICS</span><p>541511 · 541512 · 541519 · 541611 · 561320 · 561311 · 561312</p></div></section><section className="experience-section" data-aos="fade-up"><div className="site-width experience-grid editorial-grid"><div><p className="eyebrow eyebrow-light"><span />Experience</p><h2>Delivery experience, described with care.</h2></div><div><article><span>01</span><h3>Federal program staffing via prime</h3><p>EMFOI has supported staffing on a federal program through a prime contractor.</p></article><article><span>02</span><h3>VA healthcare staffing teaming</h3><p>EMFOI participates as a teaming partner on a Department of Veterans Affairs healthcare staffing contract, with resources placed and active.</p></article><article><span>03</span><h3>Enterprise IT delivery through primes</h3><p>EMFOI has delivered IT consultants to enterprise clients through prime vendors. Client names are shared only with permission.</p></article><article><span>04</span><h3>Public-sector engagement</h3><p>EMFOI has performed outreach and coordination work toward programs within federal health and civilian agencies.</p></article></div></div></section><section className="site-width gov-cta"><div><FileText size={28} /><div><p className="eyebrow"><span />For prime contractors</p><h2>Primes: request our capability statement and past-performance summary.</h2></div></div><Link href="/contact" className="button button-primary">Request information <ArrowRight size={16} /></Link></section></PageLayout>;
}

function CapabilityStatementPage() {
  return <PageLayout><PageHero variant="statement" eyebrow="Capability Statement" title="A concise view of EMFOI for primes and buyers." intro="This web version summarizes the current EMFOI capability posture. The downloadable PDF will be published after final verification of company identifiers and approved references." ><span className="button button-disabled" aria-disabled="true"><Download size={16} /> PDF pending verification</span></PageHero><section className="site-width capability-statement"><div className="statement-aside"><div className="statement-quadrant" aria-hidden="true"><i /><i /><i /><i /></div><span>EMFOI, INC.</span><p>Software · AI · Staffing</p><div className="statement-line" /><p>Herndon, Virginia<br />Established 2013</p></div><div className="statement-content"><section><p className="eyebrow"><span />Core competencies</p><div className="statement-list"><span>Custom software & UX</span><span>AI development & governance</span><span>IT consulting & staff augmentation</span><span>Healthcare staffing</span></div></section><section><p className="eyebrow"><span />Differentiators</p><p>EMFOI pairs human-centered, accessibility-aware delivery with practical AI governance and specialized healthcare staffing capacity.</p></section><section><p className="eyebrow"><span />Company data</p><div className="statement-list"><span>Delaware corporation · Est. 2013</span><span>Small business status</span><span>Herndon, VA headquarters</span></div></section><section><p className="eyebrow"><span />Experience</p><p>Teaming partner on VA healthcare staffing; federal program staffing via prime; enterprise IT delivery through prime vendors.</p></section></div></section><section className="site-width statement-note"><p><ShieldCheck size={18} />EMFOI, Inc. is a registered entity available for prime and subcontracting engagements. Official UEI and CAGE codes are provided during the formal teaming or procurement process.</p></section></PageLayout>;
}

function IndustriesPage() {
  return <PageLayout><PageHero eyebrow="Industries" title="Capability that respects the context around it." intro="EMFOI supports organizations operating in healthcare, public service, and complex enterprise environments where delivery must be both technically sound and practically usable." /><section className="site-width industry-list"><div className="industry-context-route-map" aria-label="Operating context routes"><div className="industry-context-map-key"><span className="field-guide-quadrant" aria-hidden="true"><i /><i /><i /><i /></span><div><span>Operating-context routes</span><strong>Start with the condition that shapes the work.</strong></div></div><div className="industry-context-route-cells">{industryData.map((industry) => <div key={industry.href}><span>{industry.number}</span><b>{industry.signal}</b></div>)}</div></div><figure className="industry-evidence-panel"><img src="/manus-storage/emfoi-industries-operational-context_b1a250f2.jpg" alt="Illustrative operations briefing with planning materials and workflow mapping" loading="lazy" /><figcaption><span>Operating-context fieldwork</span><p>Start with the workflow, handoffs, and conditions that shape the delivery decision.</p></figcaption></figure>{industryData.map((industry) => <Link key={industry.title} href={industry.href} className="industry-list-row" aria-label={`Explore ${industry.title}`}><span>{industry.number}</span><div><h2>{industry.title}</h2><p>{industry.text}</p></div><span className="industry-row-arrow" aria-hidden="true"><ChevronRight size={23} /></span></Link>)}</section><section className="paper-section industry-principles" data-aos="fade-up"><div className="site-width industry-note-grid editorial-grid"><div><p className="eyebrow"><span />Common thread</p><h2>Every industry brings its own version of high-stakes work.</h2></div><p>We adapt our delivery model to the operational environment, then connect design, technical discipline, governance, and talent to help the work move forward.</p></div></section></PageLayout>;
}

const industryDetails = {
  financial: {
    kind: "financial",
    eyebrow: "Financial Services & Insurance",
    title: "Technology delivery for complex, regulated operations.",
    intro: "EMFOI supports financial services and insurance organizations where approval paths, audit-ready decisions, and operational handoffs need technology delivery that remains clear and usable.",
    image: "/manus-storage/emfoi-financial-operations-evidence_03eaace5.jpg",
    imageAlt: "Operational planning materials and technology workspace for a regulated delivery team",
    contextLabel: "Regulated workflow dossier",
    contextTitle: "Track the handoffs before they become risk.",
    contextCopy: "Map the decisions, exceptions, approvals, and ownership transitions around an operational workflow before defining the technology response.",
    focusTitle: "Keep delivery grounded in the regulated workflow.",
    focusCopy: "Regulated operations depend on more than a working interface. They need clear approval ownership, documented decision paths, and technical capacity that fits the delivery window. EMFOI starts with that operating context, then defines practical software, governance, or staffing support.",
    items: ["Custom software and UX for defined workflows with approval and exception paths in view.", "Practical AI implementation with documentation, oversight, and accountable decisions in view.", "IT consulting and staff augmentation for specific delivery windows and system handoffs."],
    rail: [
      { label: "01 / CONTROL OWNER", text: "Identify who owns each approval, exception, and decision." },
      { label: "02 / WORKFLOW TRACE", text: "Surface the system handoffs and documentation that shape the work." },
      { label: "03 / DELIVERY WINDOW", text: "Match software, governance, or capacity to the defined need." },
    ],
    principlesTitle: "A delivery posture for regulated handoffs.",
    principles: [
      { number: "01", title: "Traceable workflow", text: "Start with the people, systems, decisions, and exception paths that shape the work." },
      { number: "02", title: "Audit-ready governance", text: "Keep accountability and documented decision-making visible as technology changes." },
      { number: "03", title: "Defined capacity", text: "Add the software, advisory, or staffing support that fits the actual delivery window." },
    ],
  },
  manufacturing: {
    kind: "manufacturing",
    eyebrow: "Manufacturing",
    title: "Technology support shaped around the work that keeps operations moving.",
    intro: "EMFOI supports manufacturing organizations where shop-floor dependencies, systems handoffs, and specialized technology capacity shape how reliably operations can move.",
    image: "/manus-storage/emfoi-manufacturing-operations-evidence_29b1da20.jpg",
    imageAlt: "Operations specialist using a tablet alongside a manufacturing production line",
    contextLabel: "Operational floor map",
    contextTitle: "Follow the handoff from floor to system.",
    contextCopy: "Start where the work happens: the people, equipment, shift changes, systems dependencies, and information that must stay in sync.",
    focusTitle: "Build around the workflow, then support operational continuity.",
    focusCopy: "Operations rely on technology that people can use, teams can maintain, and delivery plans can support without interrupting the work. EMFOI connects software delivery, AI governance, and focused technical capacity to the specific workflow that needs attention.",
    items: ["Usable software and UX for operational teams, shop-floor workflows, and system dependencies.", "AI development and governance with accountable oversight, documentation, and risk in view.", "IT consulting and staff augmentation when specialized technical capacity is needed around a handoff."],
    rail: [
      { label: "01 / FLOOR SIGNAL", text: "Observe the real task, shift handoff, and operational dependency." },
      { label: "02 / SYSTEM LINK", text: "Map the tools and information that must remain connected." },
      { label: "03 / DELIVERY SUPPORT", text: "Apply software, governance, or capacity to the defined constraint." },
    ],
    principlesTitle: "A delivery posture for operational continuity.",
    principles: [
      { number: "01", title: "Floor context", text: "Start with the task, system dependency, and people who keep the operation moving." },
      { number: "02", title: "Usable delivery", text: "Focus on software and technical decisions that remain practical for the team using them." },
      { number: "03", title: "Continuity support", text: "Connect advisory, implementation, and focused staffing around a critical operational handoff." },
    ],
  },
  food: {
    kind: "food",
    eyebrow: "Food",
    title: "Technology support for production and delivery that cannot drift.",
    intro: "EMFOI supports food-industry organizations where production, availability, fulfillment, and delivery timing shape the technology need.",
    image: "/manus-storage/emfoi-manufacturing-operations-evidence_29b1da20.jpg",
    imageAlt: "Illustrative operations specialist reviewing a production workflow",
    contextLabel: "Production flow dossier",
    contextTitle: "Keep production, information, and delivery connected.",
    contextCopy: "Map the process from production through fulfillment, then identify the system handoffs and operational signals that need clearer support.",
    focusTitle: "Support the workflow behind the delivered product.",
    focusCopy: "Food-industry work depends on coordinated timing and dependable information. EMFOI helps teams frame software, enterprise systems, connectivity, and technical support around the production and delivery flow already in motion.",
    items: ["Workflow and system mapping for production, fulfillment, and delivery operations.", "Usable software and ERP-related support for teams working across operational handoffs.", "Focused IT consulting and staffing capacity for defined technology needs."],
    rail: [
      { label: "01 / PRODUCTION", text: "Understand the task, timing, and information created at the source." },
      { label: "02 / FULFILLMENT", text: "Trace the systems and people coordinating availability and movement." },
      { label: "03 / DELIVERY", text: "Support the handoff that keeps the customer-facing work on track." },
    ],
    principlesTitle: "A delivery posture for time-sensitive operations.",
    principles: [
      { number: "01", title: "Process first", text: "Start with the operational sequence instead of assuming the system is the whole problem." },
      { number: "02", title: "Information in motion", text: "Make the handoffs and ownership around critical information easier to understand." },
      { number: "03", title: "Practical support", text: "Match technology and capacity to the workflow’s actual timing and constraints." },
    ],
  },
  startups: {
    kind: "startups",
    eyebrow: "Startups",
    title: "A focused technology partner for teams building what comes next.",
    intro: "EMFOI supports startup teams with custom software, product experience, advisory support, and technical capacity around a defined product or operating need.",
    image: "/manus-storage/emfoi-software-ux_277c53ba.jpg",
    imageAlt: "Illustrative product team reviewing software and user-experience work",
    contextLabel: "Build-stage fieldwork",
    contextTitle: "Turn a product question into a usable next step.",
    contextCopy: "Start with the customer, workflow, and delivery constraint that need clarity, then shape the product and technical response around that evidence.",
    focusTitle: "Build the right thing with the right level of support.",
    focusCopy: "Early teams often need more than a development handoff. EMFOI brings product thinking, accessible UX, engineering, AI perspective, and focused technical capacity together around the stage and scope of the work.",
    items: ["Product discovery, UI/UX, and accessible interface design.", "Web, mobile, and custom software development for defined product needs.", "Technical advisory and staff augmentation for focused delivery windows."],
    rail: [
      { label: "01 / USER NEED", text: "Clarify who depends on the product and what the workflow asks of them." },
      { label: "02 / PRODUCT SHAPE", text: "Translate the question into a usable, testable experience." },
      { label: "03 / DELIVERY CAPACITY", text: "Add the right engineering or advisory support for the next stage." },
    ],
    principlesTitle: "A delivery posture for build-stage decisions.",
    principles: [
      { number: "01", title: "Useful before ornate", text: "Prioritize the experience and system behavior that the user actually needs." },
      { number: "02", title: "Scope with intent", text: "Keep the technical response aligned with the product question and delivery window." },
      { number: "03", title: "Capacity when needed", text: "Bring in focused expertise without forcing a team into an oversized model." },
    ],
  },
  consulting: {
    kind: "consulting",
    eyebrow: "Consulting Providers",
    title: "Dependable technology support for teams delivering expertise to clients.",
    intro: "EMFOI supports consulting providers that need dependable systems, connectivity, and technical capacity to keep client delivery moving.",
    image: "/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg",
    imageAlt: "Illustrative consulting and systems planning workspace",
    contextLabel: "Client-delivery map",
    contextTitle: "Protect the work between the brief and the result.",
    contextCopy: "Understand the internal systems, network conditions, and delivery handoffs that affect a consulting team’s ability to serve its clients.",
    focusTitle: "Make technology a steadier part of client delivery.",
    focusCopy: "Consulting providers carry deadlines, collaboration needs, and client expectations at the same time. EMFOI helps frame the practical technology and capacity issues that can create downtime, slow transactions, or missed handoffs.",
    items: ["Network and connectivity considerations for distributed client work.", "Managed services and support coordination around day-to-day operations.", "Staff augmentation and technical advisory for delivery peaks or defined needs."],
    rail: [
      { label: "01 / CLIENT COMMITMENT", text: "Identify the delivery promise that the technology environment must support." },
      { label: "02 / INTERNAL FLOW", text: "Surface the systems and handoffs creating friction for the team." },
      { label: "03 / SUPPORT MODEL", text: "Choose the advisory, service, or capacity response that fits." },
    ],
    principlesTitle: "A delivery posture for client-facing teams.",
    principles: [
      { number: "01", title: "Reliability matters", text: "Treat the network, systems, and support model as part of the client experience." },
      { number: "02", title: "Capacity is contextual", text: "Add expertise around a delivery need rather than defaulting to a fixed staffing pattern." },
      { number: "03", title: "Clear handoffs", text: "Keep ownership and communication visible when work crosses teams and systems." },
    ],
  },
  "non-profit": {
    kind: "non-profit",
    eyebrow: "Non-Profit",
    title: "Technology support that keeps mission-focused teams moving.",
    intro: "EMFOI supports non-profit organizations with scalable, cost-conscious technology planning, implementation, and operational support.",
    image: "/manus-storage/emfoi-industries-operational-context_b1a250f2.jpg",
    imageAlt: "Illustrative mission-focused operations planning workspace",
    contextLabel: "Mission operations dossier",
    contextTitle: "Make the technology serve the mission.",
    contextCopy: "Start with the people, programs, and constraints that define the mission, then shape the technology response around the work that must keep moving.",
    focusTitle: "Choose practical technology for the capacity you have.",
    focusCopy: "Mission-focused teams need technology that is useful, supportable, and proportionate to their available time and resources. EMFOI brings software, cloud, connectivity, consulting, and staffing perspectives to that reality.",
    items: ["Technology planning grounded in program and mission workflows.", "Cloud, connectivity, and managed-support considerations for lean teams.", "Accessible software and focused technical capacity for defined needs."],
    rail: [
      { label: "01 / MISSION", text: "Clarify the service, program, or community outcome the system must support." },
      { label: "02 / CAPACITY", text: "Work within the team’s resources, skills, and operational bandwidth." },
      { label: "03 / PRACTICAL PATH", text: "Choose the smallest useful next step that can be supported over time." },
    ],
    principlesTitle: "A delivery posture for mission-focused organizations.",
    principles: [
      { number: "01", title: "Mission before machinery", text: "Keep the organization’s purpose visible in every technology decision." },
      { number: "02", title: "Sustainable support", text: "Favor systems and service models the team can understand and maintain." },
      { number: "03", title: "Scale with care", text: "Build a practical path that can grow as the mission and capacity grow." },
    ],
  },
  ai: {
    kind: "ai",
    eyebrow: "AI",
    title: "Move from AI curiosity to a responsible, useful next step.",
    intro: "EMFOI helps organizations explore AI applications and governance around a defined workflow, operational question, or product need.",
    image: "/manus-storage/emfoi-ai-governance_8c4ea3e7.jpg",
    imageAlt: "Illustrative team reviewing AI governance and operational questions",
    contextLabel: "Applied intelligence map",
    contextTitle: "Start with the work, not the label.",
    contextCopy: "Clarify the decision, user, information, and operating condition before choosing whether AI is the right response.",
    focusTitle: "Pair experimentation with accountability.",
    focusCopy: "An AI initiative is strongest when its use case is specific and its governance is practical. EMFOI connects solution development with risk, bias, documentation, oversight, and the team responsible for ongoing use.",
    items: ["AI and machine-learning solution development for defined use cases.", "Risk, bias, documentation, oversight, and monitoring considerations.", "Accessible interfaces and workflow design around human decisions."],
    rail: [
      { label: "01 / QUESTION", text: "Define the operational decision or user need that matters." },
      { label: "02 / CONTROL", text: "Consider information, risk, bias, accountability, and oversight." },
      { label: "03 / USE", text: "Design the system and operating practice around the real environment." },
    ],
    principlesTitle: "A delivery posture for practical AI.",
    principles: [
      { number: "01", title: "Specific use case", text: "Anchor AI work to a defined workflow, decision, and group of users." },
      { number: "02", title: "Visible accountability", text: "Keep documentation, oversight, and responsible ownership in view." },
      { number: "03", title: "Human context", text: "Design around the people who interpret, challenge, and act on the output." },
    ],
  },
  other: {
    kind: "other",
    eyebrow: "Other",
    title: "A clear starting point for technology needs that do not fit one label.",
    intro: "EMFOI offers a focused starting point for software and IT projects that span categories or need a more tailored delivery conversation.",
    image: "/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg",
    imageAlt: "Illustrative cross-functional technology planning workspace",
    contextLabel: "Open brief",
    contextTitle: "Name the condition before naming the solution.",
    contextCopy: "Bring the workflow, system, team, or delivery constraint into view so the next step can be shaped around the actual need.",
    focusTitle: "Find the useful path through an unclassified need.",
    focusCopy: "Not every technology need begins with a neat category. EMFOI can start with the operating context, then connect the appropriate mix of software, AI, consulting, staffing, security, cloud, or modernization support.",
    items: ["Discovery and technical framing around a defined business or program need.", "A connected view of software, infrastructure, governance, and people.", "A focused next step that can be discussed with the right EMFOI capability."],
    rail: [
      { label: "01 / CONDITION", text: "Describe what is not working, changing, or ready to be built." },
      { label: "02 / CONSTRAINT", text: "Make the users, systems, timeline, and ownership visible." },
      { label: "03 / RESPONSE", text: "Shape a focused capability conversation around the evidence." },
    ],
    principlesTitle: "A delivery posture for emerging needs.",
    principles: [
      { number: "01", title: "Listen first", text: "Let the operating context shape the technology conversation." },
      { number: "02", title: "Connect the pieces", text: "Bring software, systems, governance, and capacity into one view." },
      { number: "03", title: "Make the next step clear", text: "Leave the team with a useful decision rather than unnecessary complexity." },
    ],
  },
} as const;

function IndustryDetailPage({ detail }: { detail: (typeof industryDetails)[keyof typeof industryDetails] }) {
  return <PageLayout><PageHero eyebrow={detail.eyebrow} title={detail.title} intro={detail.intro}><Link href="/contact" className="button button-secondary">Discuss an industry need <ArrowRight size={16} /></Link></PageHero><section className={`paper-section industry-evidence-section industry-evidence-${detail.kind}`}><div className="site-width industry-evidence-panel editorial-grid" data-aos="fade-up"><div><p className="eyebrow"><span />{detail.contextLabel}</p><h2>{detail.contextTitle}</h2><p>{detail.contextCopy}</p><div className="industry-context-rail" aria-label={`${detail.eyebrow} operating context`}>{detail.rail.map((point) => <div key={point.label}><span>{point.label}</span><p>{point.text}</p></div>)}</div></div><figure><img src={detail.image} alt={detail.imageAlt} loading="lazy" /><figcaption>EMFOI / {detail.eyebrow}</figcaption></figure></div></section><section className="detail-copy-section"><div className="site-width detail-copy-grid editorial-grid" data-aos="fade-up"><div><p className="eyebrow"><span />Delivery focus</p><h2>{detail.focusTitle}</h2></div><div><p className="large-copy">{detail.focusCopy}</p><ul className="check-list">{detail.items.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div></div></section><section className="paper-section"><div className="site-width industry-principles"><div><p className="eyebrow"><span />How we frame the work</p><h2>{detail.principlesTitle}</h2></div><div className="industry-principle-grid editorial-grid">{detail.principles.map((principle) => <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div></section><section className="site-width industry-detail-cta"><div><p className="eyebrow"><span />Start a focused conversation</p><h2>Bring the work in front of your team.</h2></div><Link href="/contact" className="button button-primary">Contact EMFOI <ArrowRight size={16} /></Link></section></PageLayout>;
}

function HealthcarePage() {
  const healthcareCapabilities = [
    { number: "01", title: "Healthcare software & UX", text: "Human-centered, accessible software delivery for teams and programs that depend on usable systems.", href: "/capabilities/custom-software-ux" },
    { number: "02", title: "AI development & governance", text: "Practical AI implementation with risk, bias, documentation, and oversight in view for regulated work.", href: "/capabilities/ai-development-governance" },
    { number: "03", title: "Healthcare staffing", text: "Healthcare and healthcare-IT professionals for health systems and government health programs.", href: "/capabilities/healthcare-staffing" },
    { number: "04", title: "IT consulting & staff augmentation", text: "Experienced IT talent and advisory capacity where healthcare programs need focused delivery support.", href: "/capabilities/it-consulting-staffing" },
  ];
  return <PageLayout><PageHero variant="data" eyebrow="Healthcare" title="Technology, AI, and staffing with healthcare realities in view." intro="EMFOI supports care organizations and government health programs with custom software, practical AI governance, IT consulting, and healthcare staffing." ><Link href="/contact" className="button button-primary">Discuss a healthcare need <ArrowRight size={16} /></Link></PageHero><section className="site-width care-route-map" aria-label="Healthcare delivery map" data-aos="fade-up"><div className="care-route-mark" aria-hidden="true"><i /><i /><i /><i /></div><div><span>01 / OPERATIONS</span><p>Map the care, coordination, and workflow context.</p></div><div><span>02 / DELIVERY</span><p>Connect usable systems, practical governance, and focused support.</p></div><div><span>03 / NEXT ACTION</span><p>Choose the capability that fits the work in front of the team.</p></div></section><section className="paper-section"><div className="site-width healthcare-intro-grid editorial-grid"><div><p className="eyebrow"><span />A focused delivery mix</p><h2>Connect the systems, governance, and people behind care.</h2></div><p className="large-copy">Healthcare work brings operational, technology, and workforce needs into the same conversation. EMFOI offers a focused set of capabilities that can stand alone or work together around the program in front of you.</p></div></section><section className="site-width healthcare-capability-section" data-aos="fade-up"><div className="section-split-heading editorial-grid"><div><p className="eyebrow"><span />Explore by need</p><h2>Start with the work that needs support.</h2></div><p>Each capability page explains EMFOI’s current delivery posture in direct, factual terms.</p></div><div className="healthcare-capability-grid">{healthcareCapabilities.map((capability) => <Link key={capability.href} href={capability.href} className="healthcare-capability-card"><span>{capability.number}</span><div><h3>{capability.title}</h3><p>{capability.text}</p></div><ChevronRight size={21} /></Link>)}</div></section><section className="ink-cta-section"><div className="site-width ink-cta-grid"><div><p className="eyebrow eyebrow-light"><span />Healthcare staffing</p><h2>Need qualified clinical or healthcare-IT talent?</h2></div><p>Explore EMFOI’s healthcare staffing capability or begin a focused conversation about your program context.</p><Link href="/capabilities/healthcare-staffing" className="button button-light">Explore healthcare staffing <ArrowRight size={16} /></Link></div></section></PageLayout>;
}

function AboutPage() {
  const teamProfileSlots = [
    { number: "01", type: "Leadership", title: "Sai Chaitanya Nandigam", text: "President & Founder. Directing strategic growth and delivery posture since 2013.", image: "/manus-storage/emfoi-role-portrait-leadership_1778d07b.jpg", alt: "Sai Chaitanya Nandigam, President & Founder of EMFOI" },
    { number: "02", type: "Delivery", title: "Program Principal", text: "Coordinating complex delivery across people, systems, and program requirements.", image: "/manus-storage/emfoi-role-portrait-delivery_54b0d31c.jpg", alt: "Editorial portrait representing an EMFOI program-delivery engagement role" },
    { number: "03", type: "Advisory", title: "Technical Lead", text: "Directing software architecture, AI governance, and specialized capability development.", image: "/manus-storage/emfoi-role-portrait-practice_d8301bce.jpg", alt: "Editorial portrait representing an EMFOI focused-capability engagement role" },
  ];
  return <PageLayout><PageHero variant="record" eyebrow="About EMFOI" title="A focused partner for work that needs to hold up." intro="EMFOI, Inc. is a Delaware corporation established in 2013 and headquartered in Herndon, Virginia. We deliver custom software, AI development and governance, IT consulting and staffing, and healthcare staffing to government and enterprise clients." /><section className="site-width about-summary-strip editorial-grid"><div><span>Company overview</span><p>An institutional view of EMFOI: Delaware-incorporated, Herndon-based, and focused on high-consequence delivery since 2013.</p></div></section><section className="site-width about-story editorial-grid"><div><p className="eyebrow"><span />Our story</p><h2>Built around delivery, not unnecessary scale.</h2></div><div><p className="large-copy">EMFOI, Inc. is a Delaware corporation established in 2013, headquartered in Herndon, Virginia. We deliver custom software, AI development and governance, IT consulting and staffing, and healthcare staffing to government and enterprise clients — directly and alongside leading prime contractors.</p><p>Over more than a decade we’ve staffed teams on federal programs, delivered IT consultants to enterprise clients through prime vendors, and built our own software products, including DoFiling, an immigration case-management platform used by legal professionals.</p></div></section><section className="paper-section about-mission-section"><div className="site-width about-mission-grid editorial-grid"><div><p className="eyebrow"><span />Our mission</p><h2>Bring personal service and practical technology together.</h2></div><div><p className="large-copy">EMFOI’s mission is to pair the personal service of a focused technology partner with the reach and capability needed for complex work.</p><p>We aim to make technology easier to understand, more useful to the people who depend on it, and better connected to the goals of the organization or program around it.</p></div></div></section><section className="paper-section values-section" data-aos="fade-up"><div className="site-width"><p className="eyebrow"><span />Our core values</p><div className="values-grid"><article><span>01</span><h3>Passionate</h3><p>We bring energy and care to the work of helping organizations move forward.</p></article><article><span>02</span><h3>Respectful</h3><p>We communicate with consideration for clients, colleagues, users, and the realities around the work.</p></article><article><span>03</span><h3>Ownership</h3><p>We take responsibility for our role, our decisions, and the quality of the delivery we support.</p></article><article><span>04</span><h3>Unified</h3><p>We work as one team across disciplines, partners, and program requirements.</p></article></div></div></section><section className="paper-section team-profile-section"><MotionReveal className="site-width"><div className="team-profile-intro editorial-grid"><div><p className="eyebrow"><span />How we organize delivery</p><h2>Direction, delivery, and specialized practice.</h2></div><p>EMFOI brings the appropriate roles together around the work: clear direction, attentive delivery coordination, and the focused capability the program needs.</p></div><p className="team-profile-visual-note">Illustrative role portraits — individual EMFOI biographies are added only with approved information.</p><div className="team-profile-grid">{teamProfileSlots.map((profile) => <article className="team-profile-card" key={profile.number}><figure className="team-profile-portrait"><img src={profile.image} alt={profile.alt} loading="eager" /></figure><div className="team-profile-mark"><UsersRound size={18} /><span>{profile.number}</span></div><p>{profile.type}</p><h3>{profile.title}</h3><p>{profile.text}</p><span className="team-profile-status">Engagement role</span></article>)}</div></MotionReveal></section><section className="ink-cta-section"><div className="site-width ink-cta-grid"><div><p className="eyebrow eyebrow-light"><span />Build with us</p><h2>Bring expertise to the work that matters.</h2></div><p>Explore career opportunities or begin a conversation with the EMFOI team.</p><Link href="/careers" className="button button-light">Explore careers <ArrowRight size={16} /></Link></div></section></PageLayout>;
}

function WhyUsPage() {
  const whyUsPoints = [
    { number: "01", title: "Client-oriented service", text: "We prioritize the personal service of a focused technology partner, ensuring your program’s specific needs are heard and addressed." },
    { number: "02", title: "Technical competence", text: "We bring specialized capability across software, AI, and staffing, delivering technically sound solutions that hold up in complex environments." },
    { number: "03", title: "Ownership & responsibility", text: "We take full responsibility for our role, our decisions, and the quality of the delivery we support, acting as a true partner in your success." },
    { number: "04", title: "Problem-solving posture", text: "We focus on solving the real operational challenges in front of your team, avoiding unnecessary complexity in favor of practical results." },
    { number: "05", title: "Transparency & integrity", text: "We maintain clear communication, documented decision-making, and ethical delivery standards across every engagement." },
  ];
  return <PageLayout><PageHero eyebrow="Why EMFOI" title="A delivery posture built on partnership and precision." intro="People, Purpose, and Process. EMFOI brings client-oriented service, technical competence, and operational ownership to every technology and staffing engagement." /><section className="paper-section why-us-intro-section"><div className="site-width why-us-intro-grid editorial-grid"><div><p className="eyebrow"><span />Our approach</p><h2>Focused on the work that matters.</h2></div><p className="large-copy">We believe technology delivery is strongest when it is grounded in the real environment, supported by accountable governance, and delivered by people who take ownership of the result.</p></div></section><section className="site-width why-us-points-section" data-aos="fade-up"><div className="why-us-points-grid">{whyUsPoints.map((point) => <article key={point.number} className="why-us-point-card"><span>{point.number}</span><h3>{point.title}</h3><p>{point.text}</p></article>)}</div></section><section className="ink-cta-section"><div className="site-width ink-cta-grid"><div><p className="eyebrow eyebrow-light"><span />Contact us</p><h2>Ready to explore a focused partnership?</h2></div><p>Begin a conversation about your program, product, or staffing needs with the EMFOI team.</p><Link href="/contact" className="button button-light">Contact EMFOI <ArrowRight size={16} /></Link></div></section></PageLayout>;
}

function TermsConditionsPage() {
  return <PageLayout><PageHero eyebrow="Legal" title="Terms & Conditions" intro="Review the current EMFOI Terms & Conditions and related website-use information." /><section className="site-width terms-content-section" data-aos="fade-up"><div className="terms-grid editorial-grid"><div><p className="eyebrow"><span />Current version</p><h2>Website use and service terms.</h2></div><div><p className="large-copy">These terms govern your use of the EMFOI website and provide institutional context for our delivery engagements. For specific program or contract terms, please refer to your formal agreement.</p><div className="terms-text-block"><h3>01 / Acceptance of Terms</h3><p>By accessing this website, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.</p><h3>02 / Use License</h3><p>Permission is granted to temporarily view the materials on EMFOI’s website for personal, non-commercial transitory viewing only.</p><h3>03 / Disclaimer</h3><p>The materials on EMFOI’s website are provided on an 'as is' basis. EMFOI makes no warranties, expressed or implied, and hereby disclaims all other warranties.</p><h3>04 / Limitations</h3><p>In no event shall EMFOI or its suppliers be liable for any damages arising out of the use or inability to use the materials on EMFOI’s website.</p></div></div></div></section></PageLayout>;
}

function PrivacyNoticePage() {
  return <PageLayout><PageHero eyebrow="Legal" title="Privacy Notice" intro="Read the EMFOI privacy notice and manage optional analytics preferences." /><section className="site-width privacy-content-section" data-aos="fade-up"><div className="privacy-grid editorial-grid"><div><p className="eyebrow"><span />Data & Privacy</p><h2>Restrained collection. Clear intent.</h2></div><div><p className="large-copy">EMFOI respects your privacy and is committed to protecting the personal data we collect through our website and service engagements.</p><div className="privacy-text-block"><h3>01 / Information Collection</h3><p>We collect information you provide directly to us through contact forms, career inquiries, or service requests.</p><h3>02 / Use of Information</h3><p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you about your inquiries.</p><h3>03 / Analytics</h3><p>We use privacy-aware analytics to understand how visitors interact with our website. You can manage your preferences through the cookie settings.</p></div></div></div></section></PageLayout>;
}

function InsightsPage() {
  const inquiryAreas = [
    { number: "01", title: "Accessible systems", text: "How usable software, thoughtful UX, and delivery discipline keep people connected to essential work." },
    { number: "02", title: "Responsible AI", text: "How governance, documentation, and accountable decisions make AI implementation more practical." },
    { number: "03", title: "Operational delivery", text: "How teams connect software, specialist capacity, and program context around high-stakes work." },
  ];
  return <PageLayout><PageHero variant="practice" eyebrow="Insights" title="Questions worth carrying into the work." intro="EMFOI shares practical perspective on accessible systems, responsible AI, government delivery, healthcare staffing, and technology operations." /><section className="site-width insights-ledger"><div className="insights-ledger-intro"><FileText size={30} /><div><p className="eyebrow"><span />EMFOI field notes</p><h2>Perspective organized around the decisions that matter.</h2></div></div><div className="insights-inquiry-grid">{inquiryAreas.map((area) => <article key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div><figure className="insights-evidence-panel"><img src="/manus-storage/emfoi-insights-field-notes_161fb23c.jpg" alt="Illustrative field-notes workspace with research folders and drafting tools" loading="lazy" /><figcaption><span>Field-notes desk</span><p>Practical perspective starts with the artifacts, tradeoffs, and operating questions that sit behind a decision.</p></figcaption></figure><div className="insights-ledger-action"><p>Looking for a perspective on a program, product, staffing, or teaming decision?</p><Link href="/contact" className="text-link">Start a focused conversation <ArrowRight size={16} /></Link></div></section></PageLayout>;
}

function CareersPage() {
  return (
    <PageLayout>
      <PageHero 
        eyebrow="Careers" 
        title="Work on technology and staffing programs that serve real needs." 
        intro="EMFOI is building a team of thoughtful problem-solvers across technology, consulting, and healthcare staffing. Verified, active roles will be listed here as they become available." 
      />
      <section className="site-width carehigh-cta" data-aos="fade-up">
        <BriefcaseBusiness size={30} />
        <h2>Open roles will appear here.</h2>
        <p>For general interest or partnering inquiries, contact the EMFOI team and share the work you are interested in.</p>
        <a className="button button-primary" href="mailto:info@emfoi.com?subject=Career%20interest">
          Email EMFOI <ArrowRight size={16} />
        </a>
      </section>
    </PageLayout>
  );
}

function ContactPage() {
  const officeAddress = "205 Van Buren Street, Suite 120, Herndon, VA 20170";
  const mapQuery = encodeURIComponent(officeAddress);
  return (
    <PageLayout>
      <PageHero 
        variant="contact" 
        eyebrow="Contact" 
        title="Start with the work in front of you." 
        intro="Whether you are exploring a capability, staffing need, partnership, or public-sector teaming opportunity, EMFOI is ready to learn more." 
      />
      <section className="contact-page-section" data-aos="fade-up">
        <div className="site-width contact-page-grid">
          <div className="contact-details">
            <p className="eyebrow"><span />EMFOI headquarters</p>
            <h2>Herndon, Virginia</h2>
            <address>
              <MapPin size={18} />
              205 Van Buren Street, Suite 120<br />
              Herndon, VA 20170
            </address>
            <a href="mailto:info@emfoi.com">info@emfoi.com</a>
            <a href="tel:+18003568933">1-800-356-8933</a>
            <span className="contact-sub-detail">[Local phone pending verification]</span>
            
            <div className="contact-map-shell">
              <img 
                className="contact-office-map" 
                src="/asset-backup/emfoi-herndon-location-map.png" 
                alt="Map locating EMFOI, Inc. headquarters in Herndon, Virginia" 
                loading="lazy" 
              />
            </div>
            
            <a className="contact-map-attribution" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
              © OpenStreetMap contributors
            </a>
            
            <a className="contact-map-link" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer">
              Open directions <ExternalLink size={14} />
            </a>
            
            <div className="contact-route">
              <span>01</span><p>Share the context.</p>
              <span>02</span><p>Choose the right capability.</p>
              <span>03</span><p>Plan a focused next step.</p>
            </div>
            
            <div className="teaming-note">
              <UsersRound size={20} />
              <p>
                <b>For prime contractors / teaming</b><br />
                Choose “Government / Teaming” in the form and include the program or opportunity you are exploring.
              </p>
            </div>
          </div>
          
          <div className="contact-form-panel">
            <h2>Tell us where you need support.</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function InfoPage() {
  const [location] = useLocation();
  const seo = pageSeo[location as keyof typeof pageSeo] ?? pageSeo["/insights"];
  const content = location === "/government" ? <GovernmentPage />
    : location === "/capability-statement" || location === "/capabilities-statement" ? <CapabilityStatementPage />
    : location === "/healthcare" ? <HealthcarePage />
    : location === "/industries" ? <IndustriesPage />
    : location === "/industries/financial-services-insurance" || location === "/industries/financial-services" ? <IndustryDetailPage detail={industryDetails.financial} />
    : location === "/industries/manufacturing" ? <IndustryDetailPage detail={industryDetails.manufacturing} />
    : location === "/industries/food" ? <IndustryDetailPage detail={industryDetails.food} />
    : location === "/industries/startups" ? <IndustryDetailPage detail={industryDetails.startups} />
    : location === "/industries/consulting-providers" ? <IndustryDetailPage detail={industryDetails.consulting} />
    : location === "/industries/non-profit" ? <IndustryDetailPage detail={industryDetails["non-profit"]} />
    : location === "/industries/ai" ? <IndustryDetailPage detail={industryDetails.ai} />
    : location === "/industries/other" ? <IndustryDetailPage detail={industryDetails.other} />
    : location === "/about" ? <AboutPage />
    : location === "/why-us" ? <WhyUsPage />
    : location === "/terms-conditions" ? <TermsConditionsPage />
    : location === "/privacy" ? <PrivacyNoticePage />
    : location === "/insights" ? <InsightsPage />
    : location === "/careers" ? <CareersPage />
    : <ContactPage />;

  return (
    <>
      <PageSEO {...seo} />
      {content}
    </>
  );
}
