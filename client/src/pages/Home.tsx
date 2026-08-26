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
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const scrollGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const scrollItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.68, ease: [0.23, 1, 0.32, 1] } },
};

const capabilityCards = [
  { number: "01", discipline: "Experience systems", title: "Custom Software & UX", text: "Human-centered design, accessible interfaces, architecture, development, and production deployment.", href: "/capabilities/custom-software-ux", image: "/manus-storage/emfoi-software-delivery-studio_b4045e43.jpg" },
  { number: "02", discipline: "Responsible intelligence", title: "AI Development & Governance", text: "Practical AI and machine-learning solutions paired with responsible governance for regulated environments.", href: "/capabilities/ai-development-governance", image: "/manus-storage/emfoi-ai-governance-review_e4514e20.jpg" },
  { number: "03", discipline: "Program capacity", title: "IT Consulting & Staff Augmentation", text: "Experienced IT professionals and advisors for staff augmentation, contingent labor, or advisory engagements.", href: "/capabilities/it-consulting-staffing", image: "/manus-storage/emfoi-it-consulting-delivery_6d1fbfcc.jpg" },
  { number: "04", discipline: "Care delivery", title: "Healthcare Staffing", text: "Qualified healthcare and healthcare-IT professionals for health systems and government health programs.", href: "/capabilities/healthcare-staffing", image: "/manus-storage/emfoi-healthcare-care-coordination_5bc96e0c.jpg" },
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroEase = [0.23, 1, 0.32, 1] as const;
  const heroCopyScrollY = useTransform(scrollY, [0, 720], [0, -46]);
  const heroCopyScrollOpacity = useTransform(scrollY, [0, 660], [1, 0.42]);
  const heroImageScrollY = useTransform(scrollY, [0, 720], [0, 112]);
  const heroImageScrollRotate = useTransform(scrollY, [0, 720], [0, 1.2]);
  const heroImageScrollScale = useTransform(scrollY, [0, 720], [1, 1.055]);

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-copy > *", {
        opacity: 0,
        x: -40,
        stagger: 0.12,
        duration: 1.2,
        clearProps: "all"
      })
      .from(".hero-visual", {
        opacity: 0,
        x: 60,
        scale: 0.96,
        duration: 1.4,
        delay: -1
      }, "-=0.8")
      .from(".trust-strip > *", {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.8,
        delay: -0.6
      });
    }, heroRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <><PageSEO title="EMFOI | Software, AI & Staffing for Government and Healthcare" description="EMFOI is a Delaware-incorporated (2013) IT and staffing firm delivering custom software, AI development and governance, IT consulting, and healthcare staffing to federal agencies, state governments, and enterprises." canonicalPath="/" /><PageLayout>
      <section className="home-hero" ref={heroRef}>
        <div className="site-width home-hero-grid">
          <motion.div className="hero-copy" style={reducedMotion ? undefined : { y: heroCopyScrollY, opacity: heroCopyScrollOpacity }}>
            <p className="eyebrow"><span />EMFOI, INC. · ESTABLISHED 2013</p>
            <h1>Software, AI, and staffing partners for <em>government</em> and healthcare.</h1>
            <p className="hero-supporting-copy">A Herndon-based IT firm delivering precision software, AI governance, and qualified staffing for high-consequence programs. We operate as a prime, subcontractor, or teaming partner for federal, state, and enterprise clients.</p>
            <ul className="hero-fact-list" aria-label="EMFOI service areas"><li><strong>01</strong><span>Software & UX</span></li><li><strong>02</strong><span>AI & governance</span></li><li><strong>03</strong><span>Staffing & delivery</span></li></ul>
            <div className="hero-actions"><Link href="/contact" className="button button-primary">Request a capability briefing <ArrowRight size={17} /></Link><Link href="/capability-statement" className="button button-secondary">Download capability statement <Download size={16} /></Link></div>
          </motion.div>
          <motion.div className="hero-visual" style={reducedMotion ? undefined : { y: heroImageScrollY, rotate: heroImageScrollRotate, scale: heroImageScrollScale }}><div className="hero-image-frame"><div className="hero-system-quadrant" aria-hidden="true"><i /><i /><i /><i /></div><img className="hero-image-motion" src="/manus-storage/emfoi-civic-fieldwork-hero_b35b1028.jpg" alt="Civic program planning materials and architectural models on a warm paper workspace" /></div><div className="hero-visual-label"><span className="signal-dot" />Software · AI · Staffing</div><div className="hero-visual-index"><span>Capability field guide</span><strong>01</strong></div><div className="hero-corner-note"><span>Scroll to explore</span><ArrowDownRight size={18} /></div></motion.div>
        </div>
        <div className="site-width trust-strip"><span>Delaware-Incorporated IT Firm</span><i /><span>Herndon, VA Headquarters</span><i /><span>Federal & Healthcare Delivery</span><i /><span>Small Business Prime / Sub</span></div>
      </section>

      <section className="audience-section" data-aos="fade-up"><MotionReveal className="site-width audience-grid"><div className="section-heading-block editorial-grid"><div><p className="eyebrow"><span />Start with your context</p><h2>Where the mission meets the work.</h2></div><p>We organize our delivery around the specific regulatory, technical, and operational realities of your environment.</p></div><motion.div className="audience-cards" aria-label="Choose an EMFOI audience pathway" variants={scrollGroup} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={{ once: true, amount: 0.26 }}>{audiences.map((audience, index) => <motion.div key={audience.label} variants={scrollItem}><Link href={audience.href} className="audience-card"><div className="audience-card-header"><span className="audience-label">{audience.label}</span><span className="audience-step">0{index + 1}</span></div><h3>{audience.title}</h3><p>{audience.text}</p><span className="text-link">Explore <ArrowRight size={15} /></span></Link></motion.div>)}</motion.div></MotionReveal></section>

      <section className="client-evidence-section" data-aos="fade-up" data-aos-delay="100"><MotionReveal className="site-width"><div className="client-evidence-intro editorial-grid"><div><p className="eyebrow"><span />Selected client relationships</p><h2>Work grounded in real operating environments.</h2></div><p>EMFOI has supported organizations across technology, financial services, public-sector administration, and enterprise operations.</p></div><motion.div className="client-logo-grid" aria-label="Selected EMFOI clients" variants={scrollGroup} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={{ once: true, amount: 0.2 }}>{clientLogos.map((client) => <motion.div className="client-logo-cell" key={client.name} variants={scrollItem}><img src={client.image} alt={`${client.name} logo`} loading="lazy" onLoad={(event) => event.currentTarget.parentElement?.classList.add("is-loaded")} onError={(event) => event.currentTarget.parentElement?.classList.add("is-loaded")} /></motion.div>)}</motion.div><p className="client-evidence-note">Client marks are shown for identification only and remain the property of their respective owners.</p></MotionReveal></section>

      <section className="case-study-ready-section" data-aos="fade-up" data-aos-delay="150"><MotionReveal className="site-width"><div className="case-study-ready-intro editorial-grid"><div><p className="eyebrow"><span />Delivery evidence</p><h2>Precision in high-consequence environments.</h2></div><div className="case-study-release-note"><span>Company overview</span><p>Our evidence framework tracks the operating setting, the delivery path, and the specific outcomes that define program success.</p></div></div><motion.div className="case-study-ready-grid case-study-draft-grid" variants={scrollGroup} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={{ once: true, amount: 0.22 }}>{caseStudyDrafts.map((study) => <motion.article className="case-study-ready-card case-study-draft-card" key={study.number} variants={scrollItem}><div className="case-study-card-head"><span>{study.number} / DELIVERY RECORD</span><span>Evidence map</span></div><div className="case-study-card-copy"><p>{study.sector} / Practice context</p><h3>{study.title}</h3><span className="case-study-context">{study.context}</span></div><dl className="case-study-draft-fields"><div><dt>Scope</dt><dd>{study.scope}</dd></div><div><dt>Delivery</dt><dd>{study.delivery}</dd></div><div><dt>Evidence</dt><dd>{study.outcome}</dd></div></dl><div className="case-study-card-rail"><span>Context → delivery → evidence</span><ArrowRight size={14} /></div></motion.article>)}</motion.div><p className="case-study-ready-note">A useful record starts with the realities of the work, then makes the next decision clear. <Link href="/contact">Plan the project conversation <ArrowRight size={14} /></Link></p></MotionReveal></section>

      <section className="capability-section" data-aos="fade-up" data-aos-delay="200"><MotionReveal className="site-width"><div className="section-split-heading capability-intro editorial-grid"><div><p className="eyebrow"><span />Our capabilities</p><h2>Focused expertise.<br /><em>Connected delivery.</em></h2></div><p>Four focused practices, arranged around the realities of modern programs: systems, governance, people, and service.</p></div><motion.div className="home-capability-grid" variants={scrollGroup} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={{ once: true, amount: 0.18 }}>{capabilityCards.map((card) => <motion.div key={card.number} variants={scrollItem}><Link href={card.href} className="home-capability-card"><div className="capability-visual" aria-hidden="true"><img src={card.image} alt="" loading="lazy" /><span /></div><div className="capability-card-content"><div className="card-topline"><span>{card.number} / {card.discipline}</span><MoveUpRight size={18} /></div><div className="capability-copy"><h3>{card.title}</h3><p>{card.text}</p></div><span className="card-rule" /></div></Link></motion.div>)}</motion.div></MotionReveal></section>

      <section className="contrast-section" data-aos="fade-up"><div className="section-quadrant section-quadrant-contrast" aria-hidden="true"><i /><i /><i /><i /></div><div className="site-width contrast-grid editorial-grid"><div><p className="eyebrow eyebrow-light"><span />The EMFOI difference</p><h2>Technology is only useful when people can <em>use it.</em></h2></div><div className="difference-list"><div><span>01</span><p><strong>Accessibility is a delivery standard.</strong> We bring a Section 508 and WCAG-aware perspective to user experience.</p></div><div><span>02</span><p><strong>Governance is part of the build.</strong> AI work considers risk, bias, documentation, and monitoring from the start.</p></div><div><span>03</span><p><strong>Teaming is practical.</strong> We support agencies and primes as a direct partner, subcontractor, or teaming partner.</p></div></div></div></section>

      <section className="proof-section" data-aos="fade-up"><div className="section-quadrant proof-quadrant" aria-hidden="true"><i /><i /><i /><i /></div><div className="site-width proof-grid editorial-grid"><div><p className="eyebrow"><span />How we show up</p><h2>Direct when it matters. Ready to partner when it helps.</h2></div><div className="proof-cards"><article className="proof-card"><div className="proof-card-media"><img src="/manus-storage/emfoi-government-program-briefing_78ee7de8.jpg" alt="" loading="lazy" /><span>Public-sector delivery</span></div><div className="proof-card-copy"><span className="proof-icon"><Check size={18} /></span><h3>Government & public sector</h3><p>Support for federal and state government as a prime, subcontractor, and teaming partner.</p><Link href="/government">Explore government <ChevronRight size={16} /></Link></div></article><article className="proof-card"><div className="proof-card-media"><img src="/manus-storage/emfoi-healthcare-care-coordination_5bc96e0c.jpg" alt="" loading="lazy" /><span>Care coordination</span></div><div className="proof-card-copy"><span className="proof-icon"><Sparkles size={18} /></span><h3>Healthcare programs & organizations</h3><p>Practical attention to usable systems, responsible AI, and healthcare staffing for complex care environments.</p><Link href="/healthcare">Explore healthcare <ChevronRight size={16} /></Link></div></article></div></div></section>

      <section className="product-portfolio-section" data-aos="fade-up"><div className="site-width product-portfolio-grid editorial-grid"><div><p className="eyebrow eyebrow-light"><span />Product portfolio</p><h2>Two focused products. One delivery standard.</h2></div><p>EMFOI develops and maintains market-ready software experiences built on our legal-case and care-coordination expertise.</p></div><div className="site-width home-product-cards"><Link href="/dofiling" className="home-product-card"><div className="product-card-bg"><img src="/manus-storage/emfoi-dofiling-product-evidence_4263f10d.jpg" alt="" loading="lazy" /><span /></div><div className="product-card-content"><div className="product-card-logo"><img src="/asset-backup/Do-Filling-Logo.png" alt="Do Filing logo" /><span>Do Filing</span></div><div className="product-card-copy"><h3>Dofiling</h3><p>A comprehensive immigration case-management platform built for legal professionals and individuals.</p></div><span className="text-link">Explore Dofiling <ArrowRight size={15} /></span></div></Link><Link href="/carehigh" className="home-product-card"><div className="product-card-bg"><img src="/manus-storage/emfoi-healthcare-care-coordination_5bc96e0c.jpg" alt="" loading="lazy" /><span /></div><div className="product-card-content"><div className="product-card-logo"><img src="/asset-backup/Care_high_-_vector_1.svg" alt="CareHigh logo" /><span>CareHigh</span></div><div className="product-card-copy"><h3>CareHigh</h3><p>A focused referral management system that simplifies patient intake, follow-up, and care coordination.</p></div><span className="text-link">Explore CareHigh <ArrowRight size={15} /></span></div></Link></div></section>

      <section className="ink-cta-section"><div className="site-width ink-cta-grid"><div><p className="eyebrow eyebrow-light"><span />A clear next step</p><h2>Bring your next program into focus.</h2></div><p>Our team is ready to learn about your requirements and explore a teaming conversation, staffing search, or technology project.</p><Link href="/contact" className="button button-light">Start a conversation <ArrowRight size={16} /></Link></div></section>
    </PageLayout></>
  );
}
