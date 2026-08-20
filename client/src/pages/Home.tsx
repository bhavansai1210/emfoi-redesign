/**
 * CIVIC PRECISION — the home page is an editorial field guide for government, healthcare, and enterprise buyers.
 */
import { ArrowDownRight, ArrowRight, Check, ChevronRight, Download, ExternalLink, MoveUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { analyticsEvent } from "@/components/ClientEnhancements";
import { MotionReveal } from "@/components/MotionReveal";
import { PageLayout } from "@/components/SiteChrome";
import { PageSEO } from "@/components/PageSEO";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";

const scrollGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const scrollItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.68, ease: [0.23, 1, 0.32, 1] } },
};

const capabilityCards = [
  { number: "01", discipline: "Experience systems", title: "Custom Software & UX", text: "Human-centered design, accessible interfaces, architecture, build, and deployment.", href: "/capabilities/custom-software-ux", image: "/manus-storage/emfoi-software-delivery-studio_b4045e43.jpg" },
  { number: "02", discipline: "Responsible intelligence", title: "AI Development & Governance", text: "Practical AI delivery with responsible governance for regulated environments.", href: "/capabilities/ai-development-governance", image: "/manus-storage/emfoi-ai-governance-review_e4514e20.jpg" },
  { number: "03", discipline: "Program capacity", title: "IT Consulting & Staff Augmentation", text: "Experienced IT talent and advisory capacity where programs need it most.", href: "/capabilities/it-consulting-staffing", image: "/manus-storage/emfoi-it-consulting-delivery_6d1fbfcc.jpg" },
  { number: "04", discipline: "Care delivery", title: "Healthcare Staffing", text: "Qualified healthcare and healthcare-IT professionals for programs that serve care.", href: "/capabilities/healthcare-staffing", image: "/manus-storage/emfoi-healthcare-care-coordination_5bc96e0c.jpg" },
];

const audiences = [
  { label: "Government", title: "For public-sector programs", text: "Teaming and delivery support for federal, state, and local government.", href: "/government" },
  { label: "Healthcare", title: "For care organizations", text: "Technology, AI, and staffing with healthcare realities in view.", href: "/healthcare" },
  { label: "Enterprise", title: "For complex organizations", text: "Specialized capability that meets the moment without unnecessary friction.", href: "/contact" },
];

const clientLogos = [
  { name: "Intel Technology Provider", image: "/manus-storage/intel-technology-provider_96843177.png" },
  { name: "Capital One", image: "/manus-storage/capital-one_90dc3726.png" },
  { name: "Accenture", image: "/manus-storage/accenture_c1aaa1d5.png" },
  { name: "Universal Service Administrative Company", image: "/manus-storage/universal-service-administrative-company_204e487f.png" },
  { name: "Caterpillar", image: "/manus-storage/caterpillar_4bc0fca9.png" },
  { name: "Oportun", image: "/manus-storage/oportun_3c9a9fde.png" },
];

const caseStudyDrafts = [
  { number: "01", sector: "Government", title: "Mission delivery record", context: "Public-program context", scope: "Program setting", delivery: "Delivery path", outcome: "Operational evidence" },
  { number: "02", sector: "Healthcare", title: "Care operations record", context: "Care-delivery context", scope: "Workflow setting", delivery: "Coordination path", outcome: "Service evidence" },
  { number: "03", sector: "Enterprise", title: "Complex operations record", context: "Enterprise context", scope: "Operating setting", delivery: "Implementation path", outcome: "Business evidence" },
];

export default function Home() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroEase = [0.23, 1, 0.32, 1] as const;
  const heroCopyScrollY = useTransform(scrollY, [0, 720], [0, -46]);
  const heroCopyScrollOpacity = useTransform(scrollY, [0, 660], [1, 0.42]);
  const heroImageScrollY = useTransform(scrollY, [0, 720], [0, 112]);
  const heroImageScrollRotate = useTransform(scrollY, [0, 720], [0, 1.2]);
  const heroImageScrollScale = useTransform(scrollY, [0, 720], [1, 1.055]);
  return (
    <><PageSEO title="EMFOI | Software, AI & Staffing for Government and Healthcare" description="EMFOI delivers custom software, AI development and governance, IT consulting, and healthcare staffing for government, healthcare, and complex enterprise organizations." canonicalPath="/" /><PageLayout>
      <section className="home-hero">
        <div className="site-width home-hero-grid">
          <motion.div className="hero-copy" style={reducedMotion ? undefined : { y: heroCopyScrollY, opacity: heroCopyScrollOpacity }} initial={reducedMotion ? false : { opacity: 0, x: -48 }} animate={reducedMotion ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.82, ease: heroEase }}>
            <p className="eyebrow"><span />EMFOI, INC. · HERNDON, VIRGINIA</p>
            <h1>Software, AI, and staffing partners for <em>government</em> and healthcare.</h1>
            <p className="hero-supporting-copy">EMFOI is a Delaware-incorporated IT and staffing firm delivering custom software, AI development and governance, IT consulting, and healthcare staffing to public-sector, healthcare, and enterprise organizations.</p>
            <ul className="hero-fact-list" aria-label="EMFOI service areas"><li><strong>01</strong><span>Software & UX</span></li><li><strong>02</strong><span>AI & governance</span></li><li><strong>03</strong><span>Staffing & delivery</span></li></ul>
            <div className="hero-actions"><Link href="/contact" className="button button-primary">Plan a briefing <ArrowRight size={17} /></Link><Link href="/capability-statement" className="button button-secondary">Review capability statement <Download size={16} /></Link></div>
          </motion.div>
          <motion.div className="hero-visual" style={reducedMotion ? undefined : { y: heroImageScrollY, rotate: heroImageScrollRotate, scale: heroImageScrollScale }} initial={reducedMotion ? false : { opacity: 0, x: 58, scale: 0.97 }} animate={reducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.12, ease: heroEase }}><div className="hero-image-frame"><div className="hero-system-quadrant" aria-hidden="true"><i /><i /><i /><i /></div><img className="hero-image-motion" src="/manus-storage/emfoi-civic-fieldwork-hero_b35b1028.jpg" alt="Civic program planning materials and architectural models on a warm paper workspace" /></div><div className="hero-visual-label"><span className="signal-dot" />Software · AI · Staffing</div><div className="hero-visual-index"><span>Capability field guide</span><strong>01</strong></div><div className="hero-corner-note"><span>Scroll to explore</span><ArrowDownRight size={18} /></div></motion.div>
        </div>
        <motion.div className="site-width trust-strip" initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.48, ease: heroEase }}><span>Established 2013</span><i /><span>Delaware corporation</span><i /><span>Federal & healthcare delivery experience</span><i /><span>Small business</span></motion.div>
      </section>

      <section className="audience-section"><MotionReveal className="site-width audience-grid"><div className="section-heading-block"><p className="eyebrow"><span />Start with your context</p><h2>Where the mission meets the work.</h2><p>Different environments have different stakes. Choose the path that best fits the work in front of you.</p></div><motion.div className="audience-cards" aria-label="Choose an EMFOI audience pathway" variants={scrollGroup} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={{ once: true, amount: 0.26 }}>{audiences.map((audience, index) => <motion.div key={audience.label} variants={scrollItem}><Link href={audience.href} className="audience-card"><div className="audience-card-header"><span className="audience-label">{audience.label}</span><span className="audience-step">0{index + 1}</span></div><h3>{audience.title}</h3><p>{audience.text}</p><span className="text-link">Explore <ArrowRight size={15} /></span></Link></motion.div>)}</motion.div></MotionReveal></section>

      <section className="client-evidence-section"><MotionReveal className="site-width"><div className="client-evidence-intro"><div><p className="eyebrow"><span />Selected client relationships</p><h2>Work grounded in real operating environments.</h2></div><p>EMFOI has supported organizations across technology, financial services, public-sector administration, and enterprise operations.</p></div><motion.div className="client-logo-grid" aria-label="Selected EMFOI clients" variants={scrollGroup} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={{ once: true, amount: 0.2 }}>{clientLogos.map((client) => <motion.div className="client-logo-cell" key={client.name} variants={scrollItem}><img src={client.image} alt={`${client.name} logo`} loading="lazy" onLoad={(event) => event.currentTarget.parentElement?.classList.add("is-loaded")} onError={(event) => event.currentTarget.parentElement?.classList.add("is-loaded")} /></motion.div>)}</motion.div><p className="client-evidence-note">Client marks are shown for identification only and remain the property of their respective owners.</p></MotionReveal></section>

      <section className="case-study-ready-section"><MotionReveal className="site-width"><div className="case-study-ready-intro"><div><p className="eyebrow"><span />Delivery evidence</p><h2>Program context. Delivery path. Operational evidence.</h2></div><div className="case-study-release-note"><span>Evidence framework</span><p>EMFOI organizes every engagement around the operating setting, the delivery path, and the evidence that matters to the program.</p></div></div><motion.div className="case-study-ready-grid case-study-draft-grid" variants={scrollGroup} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={{ once: true, amount: 0.22 }}>{caseStudyDrafts.map((study) => <motion.article className="case-study-ready-card case-study-draft-card" key={study.number} variants={scrollItem}><div className="case-study-card-head"><span>{study.number} / DELIVERY RECORD</span><span>Evidence map</span></div><div className="case-study-card-copy"><p>{study.sector} / Practice context</p><h3>{study.title}</h3><span className="case-study-context">{study.context}</span></div><dl className="case-study-draft-fields"><div><dt>Scope</dt><dd>{study.scope}</dd></div><div><dt>Delivery</dt><dd>{study.delivery}</dd></div><div><dt>Evidence</dt><dd>{study.outcome}</dd></div></dl><div className="case-study-card-rail"><span>Context → delivery → evidence</span><ArrowRight size={14} /></div></motion.article>)}</motion.div><p className="case-study-ready-note">A useful record starts with the realities of the work, then makes the next decision clear. <Link href="/contact">Plan the project conversation <ArrowRight size={14} /></Link></p></MotionReveal></section>

      <section className="capability-section"><MotionReveal className="site-width"><div className="section-split-heading capability-intro"><div><p className="eyebrow"><span />Our capabilities</p><h2>Focused expertise.<br /><em>Connected delivery.</em></h2></div><p>Four focused practices, arranged around the realities of modern programs: systems, governance, people, and service.</p></div><motion.div className="home-capability-grid" variants={scrollGroup} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={{ once: true, amount: 0.18 }}>{capabilityCards.map((card) => <motion.div key={card.number} variants={scrollItem}><Link href={card.href} className="home-capability-card"><div className="capability-visual" aria-hidden="true"><img src={card.image} alt="" loading="lazy" /><span /></div><div className="capability-card-content"><div className="card-topline"><span>{card.number} / {card.discipline}</span><MoveUpRight size={18} /></div><div className="capability-copy"><h3>{card.title}</h3><p>{card.text}</p></div><span className="card-rule" /></div></Link></motion.div>)}</motion.div></MotionReveal></section>

      <section className="contrast-section"><div className="section-quadrant section-quadrant-contrast" aria-hidden="true"><i /><i /><i /><i /></div><div className="site-width contrast-grid"><div className="contrast-copy"><p className="eyebrow eyebrow-light"><span />The EMFOI difference</p><h2>Technology is only useful when people can <em>use it.</em></h2><p>We combine delivery discipline with human-centered thinking — helping organizations build, govern, and staff programs that hold up in the real world.</p><Link href="/about" className="text-link text-link-light">How we work <ArrowRight size={16} /></Link></div><div className="difference-list"><div><span>01</span><p><strong>Accessibility is a delivery standard.</strong> We bring a Section 508 and WCAG-aware perspective to user experience.</p></div><div><span>02</span><p><strong>Governance is part of the build.</strong> AI work considers risk, bias, documentation, and monitoring from the start.</p></div><div><span>03</span><p><strong>Teaming is practical.</strong> We support agencies and primes as a direct partner, subcontractor, or teaming partner.</p></div></div></div></section>

      <section className="proof-section"><div className="section-quadrant proof-quadrant" aria-hidden="true"><i /><i /><i /><i /></div><div className="site-width proof-grid"><div><p className="eyebrow"><span />How we show up</p><h2>Direct when it matters. Ready to partner when it helps.</h2></div><div className="proof-cards"><article className="proof-card"><div className="proof-card-media"><img src="/manus-storage/emfoi-government-program-briefing_78ee7de8.jpg" alt="" loading="lazy" /><span>Public-sector delivery</span></div><div className="proof-card-copy"><span className="proof-icon"><Check size={18} /></span><h3>Government & public sector</h3><p>Support for federal and state government as a prime, subcontractor, and teaming partner.</p><Link href="/government">Explore government <ChevronRight size={16} /></Link></div></article><article className="proof-card"><div className="proof-card-media"><img src="/manus-storage/emfoi-healthcare-care-coordination_5bc96e0c.jpg" alt="" loading="lazy" /><span>Care coordination</span></div><div className="proof-card-copy"><span className="proof-icon"><Sparkles size={18} /></span><h3>Healthcare programs & organizations</h3><p>Practical attention to usable systems, responsible AI, and healthcare staffing for complex care environments.</p><Link href="/healthcare">Explore healthcare <ChevronRight size={16} /></Link></div></article></div></div></section>

      <section className="product-portfolio-section">
        <MotionReveal className="site-width" variant="slide"><div className="product-portfolio-intro"><div><p className="eyebrow"><span />Product evidence</p><h2>Two focused products. One delivery standard.</h2></div><p>EMFOI turns operational complexity into useful, durable workflow experiences — from legal casework to care coordination.</p></div></MotionReveal>
        <div className="site-width product-evidence-grid">
          <MotionReveal variant="scale"><article className="product-evidence-card product-evidence-dofiling"><div className="product-evidence-topline"><span>01 / EMFOI PRODUCT SYSTEM</span><span>Legal workflow</span></div><div className="product-evidence-mark dofiling-evidence-mark"><img src="/manus-storage/dofiling-logo-approved_9637c5b5.png" alt="Do Filing" /></div><div className="product-evidence-copy"><h3>DoFiling</h3><p>A cloud workspace that streamlines immigration case workflows, questionnaires, and document handling for attorneys and employers.</p><a href="https://dofiling.com" target="_blank" rel="noreferrer" className="text-link">Explore DoFiling <ExternalLink size={15} /></a></div></article></MotionReveal>
          <MotionReveal variant="scale" delay={0.08}><article className="product-evidence-card product-evidence-carehigh"><div className="product-evidence-topline"><span>02 / EMFOI PRODUCT SYSTEM</span><span>Care coordination</span></div><div className="product-evidence-mark carehigh-evidence-mark"><img src="/manus-storage/carehigh-logo_381d8353.svg" alt="CareHigh" /></div><div className="product-evidence-copy"><h3>CareHigh</h3><p>A focused referral-management experience that helps modern dental teams track referrals, support follow-up, and stay connected.</p><a href="https://www.carehigh.com/" target="_blank" rel="noreferrer" className="text-link" onClick={() => analyticsEvent("carehigh_visit", { source: "homepage" })}>Explore CareHigh <ExternalLink size={15} /></a></div></article></MotionReveal>
        </div>
      </section>

      <section className="final-cta-section"><div className="section-quadrant final-cta-quadrant" aria-hidden="true"><i /><i /><i /><i /></div><div className="site-width final-cta-grid"><div><p className="eyebrow"><span />A clear next step</p><h2>Bring your next program into focus.</h2></div><div><p>Tell us what you are solving for. We will help identify the capability, talent, or teaming path that makes sense.</p><Link href="/contact" className="button button-primary">Start a conversation <ArrowRight size={17} /></Link></div></div></section>
    </PageLayout></>
  );
}
