/**
 * CIVIC PRECISION — the home page is an editorial field guide for government, healthcare, and enterprise buyers.
 */
import { ArrowDownRight, ArrowRight, Check, ChevronRight, Download, ExternalLink, MoveUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { PageLayout } from "@/components/SiteChrome";

const capabilityCards = [
  { number: "01", title: "Custom Software & UX", text: "Human-centered design, accessible interfaces, architecture, build, and deployment.", href: "/capabilities/custom-software-ux" },
  { number: "02", title: "AI Development & Governance", text: "Practical AI delivery with responsible governance for regulated environments.", href: "/capabilities/ai-development-governance" },
  { number: "03", title: "IT Consulting & Staff Augmentation", text: "Experienced IT talent and advisory capacity where programs need it most.", href: "/capabilities/it-consulting-staffing" },
  { number: "04", title: "Healthcare Staffing", text: "Qualified healthcare and healthcare-IT professionals for programs that serve care.", href: "/capabilities/healthcare-staffing" },
];

const audiences = [
  { label: "Government", title: "For public-sector programs", text: "Teaming and delivery support for federal, state, and local government.", href: "/government" },
  { label: "Healthcare", title: "For care organizations", text: "Technology, AI, and staffing with healthcare realities in view.", href: "/industries" },
  { label: "Enterprise", title: "For complex organizations", text: "Specialized capability that meets the moment without unnecessary friction.", href: "/contact" },
];

export default function Home() {
  return (
    <PageLayout>
      <section className="home-hero">
        <div className="site-width home-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />EMFOI, INC. · HERNDON, VIRGINIA</p>
            <h1>Software, AI, and staffing partners for <em>government</em> and healthcare.</h1>
            <p className="hero-supporting-copy">EMFOI is a Delaware-incorporated IT and staffing firm delivering custom software, AI development and governance, IT consulting, and healthcare staffing to public-sector, healthcare, and enterprise organizations.</p>
            <div className="hero-actions"><Link href="/contact" className="button button-primary">Request a capability briefing <ArrowRight size={17} /></Link><Link href="/capability-statement" className="button button-secondary">Review capability statement <Download size={16} /></Link></div>
          </div>
          <div className="hero-visual"><div className="hero-image-frame"><img src="/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg" alt="Abstract systems and planning objects in an EMFOI signature color palette" /></div><div className="hero-visual-label"><span className="signal-dot" />Software · AI · Staffing</div><div className="hero-corner-note"><span>Scroll to explore</span><ArrowDownRight size={18} /></div></div>
        </div>
        <div className="site-width trust-strip"><span>Established 2013</span><i /><span>Delaware corporation</span><i /><span>Federal & healthcare delivery experience</span><i /><span>Small business</span></div>
      </section>

      <section className="audience-section"><div className="site-width audience-grid"><div className="section-heading-block"><p className="eyebrow"><span />Start with your context</p><h2>Where the mission meets the work.</h2><p>Different environments have different stakes. Choose the path that best fits the work in front of you.</p></div><div className="audience-cards">{audiences.map((audience) => <Link href={audience.href} className="audience-card" key={audience.label}><span className="audience-label">{audience.label}</span><h3>{audience.title}</h3><p>{audience.text}</p><span className="text-link">Explore <ArrowRight size={15} /></span></Link>)}</div></div></section>

      <section className="capability-section"><div className="site-width"><div className="section-split-heading"><div><p className="eyebrow"><span />Our capabilities</p><h2>Focused expertise.<br /><em>Connected delivery.</em></h2></div><p>EMFOI brings four capabilities together around the realities of modern programs — systems, governance, people, and service.</p></div><div className="home-capability-grid">{capabilityCards.map((card) => <Link href={card.href} className="home-capability-card" key={card.number}><div className="card-topline"><span>{card.number}</span><MoveUpRight size={18} /></div><h3>{card.title}</h3><p>{card.text}</p><span className="card-rule" /></Link>)}</div></div></section>

      <section className="contrast-section"><div className="site-width contrast-grid"><div className="contrast-copy"><p className="eyebrow eyebrow-light"><span />The EMFOI difference</p><h2>Technology is only useful when people can <em>use it.</em></h2><p>We combine delivery discipline with human-centered thinking — helping organizations build, govern, and staff programs that hold up in the real world.</p><Link href="/about" className="text-link text-link-light">How we work <ArrowRight size={16} /></Link></div><div className="difference-list"><div><span>01</span><p><strong>Accessibility is a delivery standard.</strong> We bring a Section 508 and WCAG-aware perspective to user experience.</p></div><div><span>02</span><p><strong>Governance is part of the build.</strong> AI work considers risk, bias, documentation, and monitoring from the start.</p></div><div><span>03</span><p><strong>Teaming is practical.</strong> We support agencies and primes as a direct partner, subcontractor, or teaming partner.</p></div></div></div></section>

      <section className="proof-section"><div className="site-width proof-grid"><div><p className="eyebrow"><span />How we show up</p><h2>Direct when it matters. Ready to partner when it helps.</h2></div><div className="proof-cards"><article><span className="proof-icon"><Check size={18} /></span><h3>Government & public sector</h3><p>Support for federal and state government as a prime, subcontractor, and teaming partner.</p><Link href="/government">Explore government <ChevronRight size={16} /></Link></article><article><span className="proof-icon"><Sparkles size={18} /></span><h3>Regulated & healthcare environments</h3><p>Practical attention to usability, responsible AI, and staffing for programs with complex needs.</p><Link href="/industries">Explore industries <ChevronRight size={16} /></Link></article></div></div></section>

      <section className="dofiling-section"><div className="site-width dofiling-grid"><div className="dofiling-mark">D<span>O</span>F</div><div><p className="eyebrow"><span />A product built by EMFOI</p><h2>DoFiling brings product thinking to a complex legal workflow.</h2><p>EMFOI built DoFiling, a cloud workspace that streamlines immigration case workflows, questionnaires, and document handling for attorneys and employers.</p><a href="https://dofiling.com" target="_blank" rel="noreferrer" className="button button-dark">Visit DoFiling <ExternalLink size={16} /></a></div></div></section>

      <section className="final-cta-section"><div className="site-width final-cta-grid"><div><p className="eyebrow"><span />A clear next step</p><h2>Bring your next program into focus.</h2></div><div><p>Tell us what you are solving for. We will help identify the capability, talent, or teaming path that makes sense.</p><Link href="/contact" className="button button-primary">Start a conversation <ArrowRight size={17} /></Link></div></div></section>
    </PageLayout>
  );
}
