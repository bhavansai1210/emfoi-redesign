/**
 * CIVIC PRECISION — capability content is structured as evidence-led, readable service narratives.
 */
import { ArrowRight, Check, ChevronRight, Download } from "lucide-react";
import { Link, useLocation } from "wouter";
import { PageHero, PageLayout } from "@/components/SiteChrome";
import { PageSEO } from "@/components/PageSEO";

const capabilityData = {
  "custom-software-ux": {
    group: "practice", number: "01", eyebrow: "Capability 01", title: "Custom Software & UX", titleLead: "Design usable systems around the people who depend on them.",
    intro: "EMFOI designs, builds, and deploys custom software end to end — with human-centered design, accessible interfaces, sound architecture, and production-ready engineering.",
    image: "/manus-storage/emfoi-software-ux_277c53ba.jpg", imageAlt: "Illustrative software and user-experience planning materials",
    focus: ["Human-centered research, UI/UX, and interaction design", "Accessible experiences informed by Section 508 and WCAG", "Software architecture, application development, and integration", "Web and mobile development for defined business and program needs", "Deployment planning and continuous improvement"],
    detail: "Our design practice puts real users and operational realities at the center of delivery. We move from discovery through architecture, build, and deployment with an emphasis on outcomes that are usable, maintainable, and ready for the environments where work actually happens. This practice includes the web and mobile development capability described on the legacy EMFOI site.",
  },
  "ai-development-governance": {
    group: "practice", number: "02", eyebrow: "Capability 02", title: "AI Development & Governance", titleLead: "Put practical intelligence to work — with accountability built in.",
    intro: "EMFOI helps organizations develop AI and machine-learning solutions while establishing the governance needed for responsible, regulated deployment.",
    image: "/manus-storage/emfoi-ai-governance_8c4ea3e7.jpg", imageAlt: "Illustrative AI governance and delivery review",
    focus: ["AI and machine-learning solution development", "Model risk and bias evaluation", "Documentation, oversight, and monitoring practices", "HIPAA-aligned practices for regulated and healthcare environments"],
    detail: "AI delivery does not end at a prototype. Our approach pairs implementation with a practical governance posture: evaluating risk and bias, documenting how systems work, and preparing teams to monitor their use. That is especially important for healthcare and other regulated environments.",
  },
  "it-consulting-staffing": {
    group: "practice", number: "03", eyebrow: "Capability 03", title: "IT Consulting & Staff Augmentation", titleLead: "Bring specialized capability where your program needs it most.",
    intro: "EMFOI supports organizations with experienced IT professionals and advisors through staff augmentation, contingent labor, and advisory engagements.",
    image: "/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg", imageAlt: "Illustrative civic systems delivery workspace",
    focus: ["IT staff augmentation and contingent labor", "Program and technical advisory support", "Federal program staffing through prime contractors", "Enterprise consultant delivery through prime vendors"],
    detail: "We help organizations fill critical capability gaps directly and as a subcontractor to prime vendors. EMFOI has staffed teams on federal programs and delivered IT consultants to enterprise clients through primes. Specific client or prime names are shared only where permission has been confirmed.",
  },
  "healthcare-staffing": {
    group: "practice", number: "04", eyebrow: "Capability 04", title: "Healthcare Staffing", titleLead: "Support care delivery with dependable clinical and technology talent.",
    intro: "EMFOI provides healthcare and healthcare-IT staffing for health systems and government health programs, including as a teaming partner on a VA healthcare staffing contract.",
    image: "/manus-storage/emfoi-healthcare-staffing_5413be2a.jpg", imageAlt: "Illustrative healthcare staffing and delivery workspace",
    focus: ["Healthcare IT staffing", "Clinical and allied staffing", "Government health-program support", "Credentialing and quality-focused delivery"],
    detail: "Healthcare staffing requires more than matching a résumé to a requisition. EMFOI’s focus is on qualified professionals, a careful credentialing and quality posture, and coordination that supports the realities of care delivery. We currently participate as a teaming partner on a Department of Veterans Affairs healthcare staffing program.",
  },
  "cyber-security": {
    group: "service", number: "05", eyebrow: "Service line 05", title: "Cyber Security", titleLead: "Protect the systems and information the work depends on.",
    intro: "EMFOI’s cyber security service line supports organizations that need security considerations brought into technology planning, implementation, and ongoing operations.",
    image: "/manus-storage/emfoi-ai-governance_8c4ea3e7.jpg", imageAlt: "Illustrative security and governance review workspace",
    focus: ["Security-aware technology planning", "Risk, access, and control considerations", "Security practices for cloud and application environments", "Documentation and operational handoff"],
    detail: "Cyber security belongs in the delivery conversation from the beginning. EMFOI frames security around the systems, users, information, and operating conditions that shape the actual risk, then connects advisory, implementation, and documentation to the work in front of the team.",
  },
  "managed-services": {
    group: "service", number: "06", eyebrow: "Service line 06", title: "Managed Services", titleLead: "Keep technology support steady after the initial delivery.",
    intro: "EMFOI’s managed-services service line is designed for organizations that need reliable technology support, monitoring, and practical guidance around day-to-day operations.",
    image: "/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg", imageAlt: "Illustrative technology operations briefing",
    focus: ["Ongoing technology support and service coordination", "Monitoring and issue triage around operational systems", "Practical IT guidance for evolving business needs", "Clear handoffs, documentation, and service communication"],
    detail: "A useful technology partner stays engaged after launch. Managed services bring support, communication, and operational context together so teams can address issues, maintain continuity, and make informed decisions as their systems and needs change.",
  },
  "cloud-services": {
    group: "service", number: "07", eyebrow: "Service line 07", title: "Cloud Services", titleLead: "Use cloud technology with the operating model in view.",
    intro: "EMFOI helps organizations plan and support cloud-enabled systems with attention to architecture, security, integration, cost, and the people responsible for operating them.",
    image: "/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg", imageAlt: "Illustrative cloud systems planning workspace",
    focus: ["Cloud architecture and application planning", "Migration and integration considerations", "Security, access, and operational readiness", "Cloud support aligned to the team’s delivery model"],
    detail: "Cloud adoption is a delivery decision as much as a technology decision. EMFOI connects the target architecture to the organization’s security posture, integrations, operational capacity, and user needs so cloud services remain understandable and supportable.",
  },
  "network-connectivity": {
    group: "service", number: "08", eyebrow: "Service line 08", title: "Network Connectivity", titleLead: "Make the connections behind the work more dependable.",
    intro: "EMFOI’s network-connectivity service line addresses the infrastructure and communication conditions that help people, systems, and information stay connected.",
    image: "/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg", imageAlt: "Illustrative network and systems coordination workspace",
    focus: ["Network planning and connectivity assessment", "Infrastructure and systems handoff mapping", "Reliability and issue-resolution coordination", "Documentation for operational teams and stakeholders"],
    detail: "When connectivity is unstable, the effects show up everywhere: delayed work, interrupted transactions, and avoidable operational friction. EMFOI starts with the actual communication path, then helps teams understand the infrastructure, dependencies, and support model around it.",
  },
  "erp-solutions": {
    group: "service", number: "09", eyebrow: "Service line 09", title: "ERP Solutions", titleLead: "Bring the systems behind operations into clearer alignment.",
    intro: "EMFOI supports ERP-related technology work by connecting business processes, system configuration, integrations, and the people who rely on operational information.",
    image: "/manus-storage/emfoi-manufacturing-operations-evidence_29b1da20.jpg", imageAlt: "Illustrative operations team working with enterprise systems",
    focus: ["ERP workflow and system-dependency mapping", "Configuration, integration, and support planning", "Operational reporting and information handoffs", "User-centered change and documentation"],
    detail: "ERP work is most useful when it reflects how the organization actually operates. EMFOI frames the process, information, and ownership handoffs first, then supports practical technology decisions that make enterprise systems easier to use, maintain, and improve.",
  },
  "it-modernization": {
    group: "service", number: "10", eyebrow: "Service line 10", title: "IT Modernization", titleLead: "Move legacy systems forward without losing the thread.",
    intro: "EMFOI helps organizations assess legacy technology, understand modernization risk, and plan practical improvements for systems and data that support important work.",
    image: "/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg", imageAlt: "Illustrative technology modernization planning workspace",
    focus: ["Legacy-system and dependency assessment", "Modernization sequencing and risk framing", "Application, data, and integration planning", "Transition support and operational handoff"],
    detail: "Modernization is not simply a replacement exercise. EMFOI starts by understanding what the legacy environment does, where the risks sit, and how people depend on it, then helps define a robust path toward systems that are easier to support and ready for the future.",
  },
} as const;

type Slug = keyof typeof capabilityData;
type CapabilityCard = { slug: Slug; number: string; title: string; short: string; group: "practice" | "service" };

const cards: CapabilityCard[] = [
  { slug: "custom-software-ux", number: "01", title: "Custom Software & UX", short: "Human-centered design, accessible interfaces, architecture, engineering, and web or mobile delivery.", group: "practice" },
  { slug: "ai-development-governance", number: "02", title: "AI Development & Governance", short: "Practical AI delivery with risk, bias, documentation, and oversight in view.", group: "practice" },
  { slug: "it-consulting-staffing", number: "03", title: "IT Consulting & Staff Augmentation", short: "Specialized IT professionals and advisory support for programs and teams.", group: "practice" },
  { slug: "healthcare-staffing", number: "04", title: "Healthcare Staffing", short: "Healthcare and healthcare-IT talent for health systems and government programs.", group: "practice" },
  { slug: "cyber-security", number: "05", title: "Cyber Security", short: "Security-aware planning, risk framing, and operational support for systems and information.", group: "service" },
  { slug: "managed-services", number: "06", title: "Managed Services", short: "Steady support, monitoring, service coordination, and practical IT guidance.", group: "service" },
  { slug: "cloud-services", number: "07", title: "Cloud Services", short: "Cloud architecture, migration, integration, security, and operational readiness.", group: "service" },
  { slug: "network-connectivity", number: "08", title: "Network Connectivity", short: "More dependable connections between people, systems, and information.", group: "service" },
  { slug: "erp-solutions", number: "09", title: "ERP Solutions", short: "Operational workflow, system configuration, integration, and user-centered support.", group: "service" },
  { slug: "it-modernization", number: "10", title: "IT Modernization", short: "Legacy-system assessment, modernization planning, and practical transition support.", group: "service" },
];

const practiceCards = cards.filter((card) => card.group === "practice");
const serviceCards = cards.filter((card) => card.group === "service");

function CapabilityIndex() {
  return (
    <><PageSEO title="EMFOI Capabilities | Software, AI & Staffing for Government and Healthcare" description="Explore EMFOI capabilities in custom software and UX, AI development and governance, IT consulting, staffing, cyber security, managed services, cloud, network connectivity, ERP, and IT modernization." canonicalPath="/capabilities" breadcrumbs={[{ name: "Capabilities", path: "/capabilities" }]} /><PageLayout>
      <PageHero variant="practice" eyebrow="Capabilities" title="Capability built for high-consequence work." intro="Four focused practices and six connected service lines, designed to work independently or together when your program calls for expertise across technology, governance, operations, and people." ><Link href="/capability-statement" className="button button-primary">Download capability statement <Download size={16} /></Link></PageHero>
      <section className="paper-section capabilities-index-section">
        <div className="site-width capability-list">
          <div className="capability-dossier-rail" aria-label="Capability practice dossier">
            <div className="capability-dossier-key"><span className="field-guide-quadrant" aria-hidden="true"><i /><i /><i /><i /></span><div><span>Practice dossier</span><strong>Ten coordinates for a connected delivery model.</strong></div></div>
            <div className="capability-dossier-map">{cards.map((card) => <div key={card.slug}><span>{card.number}</span><b>{card.title.replace(" & ", " / ")}</b></div>)}</div>
          </div>
          <figure className="practice-evidence-panel"><img src="/manus-storage/emfoi-capabilities-practice-dossier_b750dabc.jpg" alt="Illustrative delivery team reviewing a program dossier" loading="lazy" /><figcaption><span>Practice fieldwork</span><p>Delivery decisions are strongest when technology, governance, operations, and people are considered together.</p></figcaption></figure>
          <div className="capability-index-group"><div className="capability-index-group-heading"><div><p className="eyebrow"><span />Core practices</p><h2>Start with the primary delivery need.</h2></div><p>These four practices describe the center of EMFOI’s current software, AI, consulting, and staffing work.</p></div>{practiceCards.map((card) => <Link key={card.slug} href={`/capabilities/${card.slug}`} className="capability-list-card"><span className="capability-number">{card.number}</span><div><span className="capability-list-kicker">Explore practice</span><h2>{card.title}</h2><p>{card.short}</p></div><span className="circle-arrow"><ArrowRight size={20} /></span></Link>)}</div>
          <div className="capability-index-group capability-service-line-group"><div className="capability-index-group-heading"><div><p className="eyebrow"><span />Connected service lines</p><h2>Bring the surrounding systems into view.</h2></div><p>The broader EMFOI service taxonomy is preserved here as focused routes for security, operations, infrastructure, enterprise systems, and modernization.</p></div>{serviceCards.map((card) => <Link key={card.slug} href={`/capabilities/${card.slug}`} className="capability-list-card"><span className="capability-number">{card.number}</span><div><span className="capability-list-kicker">Explore service line</span><h2>{card.title}</h2><p>{card.short}</p></div><span className="circle-arrow"><ArrowRight size={20} /></span></Link>)}</div>
          <p className="capability-taxonomy-note">Web and mobile development are represented within Custom Software &amp; UX; AI/ML and software development are represented within the AI and custom software practices.</p>
        </div>
      </section>
      <section className="ink-cta-section"><div className="site-width ink-cta-grid"><div><p className="eyebrow eyebrow-light"><span />How we engage</p><h2>Bring the right capability to the table.</h2></div><p>Whether you need a delivery partner, qualified talent, or a teaming conversation, we start by understanding the program and the people it serves.</p><Link href="/contact" className="button button-light">Request a capability briefing <ArrowRight size={16} /></Link></div></section>
    </PageLayout></>
  );
}

function CapabilityDetail({ data, slug }: { data: (typeof capabilityData)[Slug]; slug: Slug }) {
  return (
    <><PageSEO title={data.title === "AI Development & Governance" ? "AI Development & Governance Consulting | EMFOI" : `${data.title} | EMFOI`} description={data.intro} canonicalPath={`/capabilities/${slug}`} breadcrumbs={[{ name: "Capabilities", path: "/capabilities" }, { name: data.title, path: `/capabilities/${slug}` }]} /><PageLayout>
      <section className="capability-detail-hero">
        <div className="site-width capability-detail-grid"><div><p className="eyebrow"><span />{data.eyebrow}</p><p className="capability-detail-number">{data.number}</p><h1>{data.titleLead}</h1><p className="hero-supporting-copy">{data.intro}</p><Link href="/contact" className="button button-primary">Discuss your needs <ArrowRight size={16} /></Link><Link href="/capability-statement" className="button button-secondary">Download capability statement <Download size={16} /></Link></div><figure className="capability-image-wrap"><img src={data.image} alt={data.imageAlt} /><figcaption>{data.title}</figcaption></figure></div>
      </section>
      <section className="paper-section detail-copy-section"><div className="site-width detail-copy-grid"><div><p className="eyebrow"><span />What we do</p><h2>{data.title}</h2></div><div><p className="large-copy">{data.detail}</p><ul className="check-list">{data.focus.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div></div></section>
      {data.title === "IT Consulting & Staff Augmentation" && <section className="site-width naics-panel"><div><p className="eyebrow"><span />Buyer reference</p><h3>Relevant NAICS codes</h3></div><p>541511 · 541512 · 541519 · 541611 · 561320 · 561311 · 561312</p></section>}
      {data.title === "AI Development & Governance" && <section className="site-width governance-evidence-map" aria-label="AI governance delivery map"><div className="governance-map-heading"><div className="governance-map-mark" aria-hidden="true"><i /><i /><i /><i /></div><div><p className="eyebrow"><span />Governance map</p><h2>From use case to accountable operation.</h2></div></div><div className="governance-map-steps"><div><span>01</span><h3>Context</h3><p>Clarify the workflow, stakeholders, and operational question.</p></div><div><span>02</span><h3>Controls</h3><p>Consider risk, bias, documentation, oversight, and monitoring.</p></div><div><span>03</span><h3>Delivery</h3><p>Build practical capability around the environment where it will be used.</p></div></div></section>}
      <section className="workstrip"><div className="site-width workstrip-grid"><div><span className="workstrip-kicker">EMFOI engagement model</span><h2>Start with the practical path forward.</h2></div><div className="workstrip-steps"><span>01 <b>Understand the mission</b></span><span>02 <b>Shape the team or solution</b></span><span>03 <b>Deliver with accountability</b></span></div></div></section>
      <section className="site-width related-links"><p className="eyebrow"><span />Explore next</p><div>{cards.filter((card) => card.title !== data.title).slice(0, 6).map((card) => <Link href={`/capabilities/${card.slug}`} key={card.slug}>{card.title}<ChevronRight size={18} /></Link>)}</div></section>
    </PageLayout></>
  );
}

export default function Capabilities() {
  const [location] = useLocation();
  const slug = location.split("/")[2] as Slug | undefined;
  return slug && capabilityData[slug] ? <CapabilityDetail data={capabilityData[slug]} slug={slug} /> : <CapabilityIndex />;
}
