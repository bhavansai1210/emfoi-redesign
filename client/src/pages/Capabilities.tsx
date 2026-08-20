/**
 * CIVIC PRECISION — capability content is structured as evidence-led, readable service narratives.
 */
import { ArrowRight, Check, ChevronRight, Download, ExternalLink } from "lucide-react";
import { Link, useLocation } from "wouter";
import { PageHero, PageLayout } from "@/components/SiteChrome";
import { PageSEO } from "@/components/PageSEO";

const capabilityData = {
  "custom-software-ux": {
    number: "01", eyebrow: "Capability 01", title: "Custom Software & UX", titleLead: "Design usable systems around the people who depend on them.",
    intro: "EMFOI designs, builds, and deploys custom software end to end — with human-centered design, accessible interfaces, sound architecture, and production-ready engineering.",
    image: "/manus-storage/emfoi-software-ux_277c53ba.jpg",
    focus: ["Human-centered research, UI/UX, and interaction design", "Accessible experiences informed by Section 508 and WCAG", "Software architecture, application development, and integration", "Deployment planning and continuous improvement"],
    detail: "Our design practice puts real users and operational realities at the center of delivery. We move from discovery through architecture, build, and deployment with an emphasis on outcomes that are usable, maintainable, and ready for the environments where work actually happens.",
  },
  "ai-development-governance": {
    number: "02", eyebrow: "Capability 02", title: "AI Development & Governance", titleLead: "Put practical intelligence to work — with accountability built in.",
    intro: "EMFOI helps organizations develop AI and machine-learning solutions while establishing the governance needed for responsible, regulated deployment.",
    image: "/manus-storage/emfoi-ai-governance_8c4ea3e7.jpg",
    focus: ["AI and machine-learning solution development", "Model risk and bias evaluation", "Documentation, oversight, and monitoring practices", "HIPAA-aligned practices for regulated and healthcare environments"],
    detail: "AI delivery does not end at a prototype. Our approach pairs implementation with a practical governance posture: evaluating risk and bias, documenting how systems work, and preparing teams to monitor their use. That is especially important for healthcare and other regulated environments.",
  },
  "it-consulting-staffing": {
    number: "03", eyebrow: "Capability 03", title: "IT Consulting & Staff Augmentation", titleLead: "Bring specialized capability where your program needs it most.",
    intro: "EMFOI supports organizations with experienced IT professionals and advisors through staff augmentation, contingent labor, and advisory engagements.",
    image: "/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg",
    focus: ["IT staff augmentation and contingent labor", "Program and technical advisory support", "Federal program staffing through prime contractors", "Enterprise consultant delivery through prime vendors"],
    detail: "We help organizations fill critical capability gaps directly and as a subcontractor to prime vendors. EMFOI has staffed teams on federal programs and delivered IT consultants to enterprise clients through primes. Specific client or prime names are shared only where permission has been confirmed.",
  },
  "healthcare-staffing": {
    number: "04", eyebrow: "Capability 04", title: "Healthcare Staffing", titleLead: "Support care delivery with dependable clinical and technology talent.",
    intro: "EMFOI provides healthcare and healthcare-IT staffing for health systems and government health programs, including as a teaming partner on a VA healthcare staffing contract.",
    image: "/manus-storage/emfoi-healthcare-staffing_5413be2a.jpg",
    focus: ["Healthcare IT staffing", "Clinical and allied staffing", "Government health-program support", "Credentialing and quality-focused delivery"],
    detail: "Healthcare staffing requires more than matching a résumé to a requisition. EMFOI’s focus is on qualified professionals, a careful credentialing and quality posture, and coordination that supports the realities of care delivery. We currently participate as a teaming partner on a Department of Veterans Affairs healthcare staffing program.",
  },
};

type Slug = keyof typeof capabilityData;

const cards = [
  { slug: "custom-software-ux" as Slug, number: "01", title: "Custom Software & UX", short: "Human-centered design, accessible interfaces, architecture, engineering, and deployment." },
  { slug: "ai-development-governance" as Slug, number: "02", title: "AI Development & Governance", short: "Practical AI delivery with risk, bias, documentation, and oversight in view." },
  { slug: "it-consulting-staffing" as Slug, number: "03", title: "IT Consulting & Staff Augmentation", short: "Specialized IT professionals and advisory support for programs and teams." },
  { slug: "healthcare-staffing" as Slug, number: "04", title: "Healthcare Staffing", short: "Healthcare and healthcare-IT talent for health systems and government programs." },
];

function CapabilityIndex() {
  return (
    <><PageSEO title="Capabilities | Software, AI, IT Consulting & Healthcare Staffing | EMFOI" description="Explore EMFOI capabilities in custom software and UX, AI development and governance, IT consulting and staff augmentation, and healthcare staffing." canonicalPath="/capabilities" breadcrumbs={[{ name: "Capabilities", path: "/capabilities" }]} /><PageLayout>
      <PageHero eyebrow="Capabilities" title="Capability built for high-consequence work." intro="Four focused practices, designed to work independently or together when your program calls for expertise across technology, governance, and people." />
      <section className="paper-section capabilities-index-section">
        <div className="site-width capability-list">
          <div className="capability-dossier-rail" aria-label="Capability practice dossier">
            <div className="capability-dossier-key"><span className="field-guide-quadrant" aria-hidden="true"><i /><i /><i /><i /></span><div><span>Practice dossier</span><strong>Four coordinates for a connected delivery model.</strong></div></div>
            <div className="capability-dossier-map">{cards.map((card) => <div key={card.slug}><span>{card.number}</span><b>{card.title.replace(" & ", " / ")}</b></div>)}</div>
          </div>
          {cards.map((card) => <Link key={card.slug} href={`/capabilities/${card.slug}`} className="capability-list-card"><span className="capability-number">{card.number}</span><div><span className="capability-list-kicker">Explore practice</span><h2>{card.title}</h2><p>{card.short}</p></div><span className="circle-arrow"><ArrowRight size={20} /></span></Link>)}
        </div>
      </section>
      <section className="ink-cta-section"><div className="site-width ink-cta-grid"><div><p className="eyebrow eyebrow-light"><span />How we engage</p><h2>Bring the right capability to the table.</h2></div><p>Whether you need a delivery partner, qualified talent, or a teaming conversation, we start by understanding the program and the people it serves.</p><Link href="/contact" className="button button-light">Request a capability briefing <ArrowRight size={16} /></Link></div></section>
    </PageLayout></>
  );
}

function CapabilityDetail({ data, slug }: { data: (typeof capabilityData)[Slug]; slug: Slug }) {
  return (
    <><PageSEO title={`${data.title} | EMFOI`} description={data.intro} canonicalPath={`/capabilities/${slug}`} breadcrumbs={[{ name: "Capabilities", path: "/capabilities" }, { name: data.title, path: `/capabilities/${slug}` }]} /><PageLayout>
      <section className="capability-detail-hero">
        <div className="site-width capability-detail-grid"><div><p className="eyebrow"><span />{data.eyebrow}</p><p className="capability-detail-number">{data.number}</p><h1>{data.titleLead}</h1><p className="hero-supporting-copy">{data.intro}</p><Link href="/contact" className="button button-primary">Discuss your needs <ArrowRight size={16} /></Link></div><figure className="capability-image-wrap"><img src={data.image} alt="" /><figcaption>{data.title}</figcaption></figure></div>
      </section>
      <section className="paper-section detail-copy-section"><div className="site-width detail-copy-grid"><div><p className="eyebrow"><span />What we do</p><h2>{data.title}</h2></div><div><p className="large-copy">{data.detail}</p><ul className="check-list">{data.focus.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div></div></section>
      {data.title === "IT Consulting & Staff Augmentation" && <section className="site-width naics-panel"><div><p className="eyebrow"><span />Buyer reference</p><h3>Relevant NAICS codes</h3></div><p>541511 · 541512 · 541519 · 541611 · 561320 · 561311 · 561312</p></section>}
      {data.title === "AI Development & Governance" && <section className="site-width governance-evidence-map" aria-label="AI governance delivery map"><div className="governance-map-heading"><div className="governance-map-mark" aria-hidden="true"><i /><i /><i /><i /></div><div><p className="eyebrow"><span />Governance map</p><h2>From use case to accountable operation.</h2></div></div><div className="governance-map-steps"><div><span>01</span><h3>Context</h3><p>Clarify the workflow, stakeholders, and operational question.</p></div><div><span>02</span><h3>Controls</h3><p>Consider risk, bias, documentation, oversight, and monitoring.</p></div><div><span>03</span><h3>Delivery</h3><p>Build practical capability around the environment where it will be used.</p></div></div></section>}
      <section className="workstrip"><div className="site-width workstrip-grid"><div><span className="workstrip-kicker">EMFOI engagement model</span><h2>Start with the practical path forward.</h2></div><div className="workstrip-steps"><span>01 <b>Understand the mission</b></span><span>02 <b>Shape the team or solution</b></span><span>03 <b>Deliver with accountability</b></span></div></div></section>
      <section className="site-width related-links"><p className="eyebrow"><span />Explore next</p><div>{cards.filter((card) => card.title !== data.title).map((card) => <Link href={`/capabilities/${card.slug}`} key={card.slug}>{card.title}<ChevronRight size={18} /></Link>)}</div></section>
    </PageLayout></>
  );
}

export default function Capabilities() {
  const [location] = useLocation();
  const slug = location.split("/")[2] as Slug | undefined;
  return slug && capabilityData[slug] ? <CapabilityDetail data={capabilityData[slug]} slug={slug} /> : <CapabilityIndex />;
}
