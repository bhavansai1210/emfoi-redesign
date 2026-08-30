/**
 * CIVIC PRECISION — information pages present verifiable company facts and clear, restrained next steps.
 */
import { 
  ArrowRight, 
  BriefcaseBusiness, 
  Check, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  UsersRound,
  Users
} from "lucide-react";
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
  return (
    <PageLayout>
      <PageHero 
        variant="data" 
        eyebrow="Government / Public Sector" 
        title="Ready to support the public work that cannot pause." 
        intro="EMFOI supports federal and state government as a prime, subcontractor, and teaming partner — with software, AI, IT consulting, and healthcare staffing capabilities." 
      >
        <div className="flex gap-4 mt-6">
          <Link href="/contact" className="button button-primary">
            Discuss teaming <ArrowRight size={16} />
          </Link>
          <Link href="/capability-statement" className="button button-secondary">
            Download capability statement <Download size={16} />
          </Link>
        </div>
      </PageHero>
      
      <section className="site-width buyer-dossier-strip" aria-label="Government buyer dossier" data-aos="fade-up">
        <div className="buyer-dossier-mark" aria-hidden="true"><i /><i /><i /><i /></div>
        <div><span>01 / COMPANY PROFILE</span><p>Entity, location, and capability reference.</p></div>
        <div><span>02 / DELIVERY POSTURE</span><p>Prime, subcontractor, and teaming support.</p></div>
        <div><span>03 / NEXT STEP</span><p>Match the program need, then begin the conversation.</p></div>
      </section>
      
      <section className="paper-section">
        <div className="site-width editorial-grid">
          <div>
            <p className="eyebrow"><span />How we work with us</p>
            <h2>Practical support for public-sector programs.</h2>
          </div>
          <p className="large-copy">
            We bring a focused capability mix and a collaborative posture to government work. 
            EMFOI is available for subcontracting and teaming today while pursuing additional 
            contract-vehicle access as appropriate.
          </p>
        </div>
      </section>
      
      <section className="site-width company-data-section" data-aos="fade-up">
        <div className="company-data-heading">
          <p className="eyebrow"><span />Company data</p>
          <h2>Buyer reference</h2>
        </div>
        <div className="buyer-route-rail">
          <span>01</span><p>Verify the company profile.</p>
          <span>02</span><p>Match the capability and program need.</p>
          <span>03</span><p>Begin a focused teaming conversation.</p>
        </div>
        <div className="company-data-grid">
          <div><span>Legal name</span><strong>EMFOI, Inc.</strong></div>
          <div><span>Corporate status</span><strong>Delaware corporation · 2013</strong></div>
          <div><span>Place of performance</span><strong>Herndon, Virginia</strong></div>
          <div><span>Small-business status</span><strong>Small business</strong></div>
          <div><span>UEI</span><strong className="pending-value">Pending confirmation</strong></div>
          <div><span>CAGE</span><strong className="pending-value">Pending confirmation</strong></div>
        </div>
        <div className="naics-line">
          <span>Relevant NAICS</span>
          <p>541511 · 541512 · 541519 · 541611 · 561320 · 561311 · 561312</p>
        </div>
      </section>
      
      <section className="experience-section" data-aos="fade-up">
        <div className="site-width experience-grid editorial-grid">
          <div>
            <p className="eyebrow eyebrow-light"><span />Experience</p>
            <h2>Delivery experience, described with care.</h2>
          </div>
          <div>
            <article><span>01</span><h3>Federal program staffing via prime</h3><p>EMFOI has supported staffing on a federal program through a prime contractor.</p></article>
            <article><span>02</span><h3>VA healthcare staffing teaming</h3><p>EMFOI participates as a teaming partner on a Department of Veterans Affairs healthcare staffing contract, with resources placed and active.</p></article>
            <article><span>03</span><h3>Enterprise IT delivery through primes</h3><p>EMFOI has delivered IT consultants to enterprise clients through prime vendors. Client names are shared only with permission.</p></article>
            <article><span>04</span><h3>Public-sector engagement</h3><p>EMFOI has performed outreach and coordination work toward programs within federal health and civilian agencies.</p></article>
          </div>
        </div>
      </section>
      
      <section className="site-width gov-cta">
        <div>
          <FileText size={28} />
          <div>
            <p className="eyebrow"><span />For prime contractors</p>
            <h2>Primes: request our capability statement and past-performance summary.</h2>
          </div>
        </div>
        <Link href="/contact" className="button button-primary">Request information <ArrowRight size={16} /></Link>
      </section>
    </PageLayout>
  );
}

function CapabilityStatementPage() {
  return (
    <PageLayout>
      <PageHero 
        variant="statement" 
        eyebrow="Capability Statement" 
        title="A concise view of EMFOI for primes and buyers." 
        intro="This web version summarizes the current EMFOI capability posture. The downloadable PDF will be published after final verification of company identifiers and approved references." 
      >
        <span className="button button-disabled mt-6" aria-disabled="true">
          <Download size={16} /> PDF pending verification
        </span>
      </PageHero>
      <section className="site-width capability-statement">
        <div className="statement-aside">
          <div className="statement-quadrant" aria-hidden="true"><i /><i /><i /><i /></div>
          <span>EMFOI, INC.</span>
          <p>Software · AI · Staffing</p>
          <div className="statement-line" />
          <p>Herndon, Virginia<br />Established 2013</p>
        </div>
        <div className="statement-content">
          <section>
            <p className="eyebrow"><span />Core competencies</p>
            <div className="statement-list">
              <span>Custom software & UX</span>
              <span>AI development & governance</span>
              <span>IT consulting & staff augmentation</span>
              <span>Healthcare staffing</span>
            </div>
          </section>
          <section>
            <p className="eyebrow"><span />Differentiators</p>
            <p>EMFOI pairs human-centered, accessibility-aware delivery with technical governance. We focus on high-consequence environments where software must hold up under operational pressure.</p>
          </section>
        </div>
      </section>
    </PageLayout>
  );
}

function AboutPage() {
  const teamProfileSlots = [
    { number: "01", type: "Leadership", title: "Sai Chaitanya Nandigam", text: "President & Founder. Directing strategic growth and delivery posture since 2013.", image: "/manus-storage/emfoi-role-portrait-leadership_1778d07b.jpg", alt: "Sai Chaitanya Nandigam, President & Founder of EMFOI" },
    { number: "02", type: "Delivery", title: "Program Principal", text: "Coordinating complex delivery across people, systems, and program requirements.", image: "/manus-storage/emfoi-role-portrait-delivery_54b0d31c.jpg", alt: "Editorial portrait representing an EMFOI program-delivery engagement role" },
    { number: "03", type: "Advisory", title: "Technical Lead", text: "Directing software architecture, AI governance, and specialized capability development.", image: "/manus-storage/emfoi-role-portrait-practice_d8301bce.jpg", alt: "Editorial portrait representing an EMFOI focused-capability engagement role" },
  ];

  return (
    <PageLayout>
      <PageHero 
        variant="record" 
        eyebrow="About EMFOI" 
        title="A focused partner for work that needs to hold up." 
        intro="EMFOI, Inc. is a Delaware corporation established in 2013 and headquartered in Herndon, Virginia. We deliver custom software, AI development and governance, IT consulting and staffing, and healthcare staffing to government and enterprise clients." 
      />
      
      <section className="site-width about-summary-strip editorial-grid">
        <div />
        <div className="about-summary-content">
          <p className="eyebrow"><span />Company overview</p>
          <p className="large-copy">An institutional view of EMFOI: Delaware-incorporated, Herndon-based, and focused on high-consequence delivery since 2013.</p>
        </div>
      </section>

      <section className="site-width about-story editorial-grid">
        <div>
          <p className="eyebrow"><span />Our story</p>
          <h2>Built around delivery, not unnecessary scale.</h2>
        </div>
        <div>
          <p className="large-copy">
            EMFOI, Inc. is a Delaware corporation established in 2013, headquartered in Herndon, Virginia. 
            We deliver custom software, AI development and governance, IT consulting and staffing, 
            and healthcare staffing to government and enterprise clients — directly and alongside leading prime contractors.
          </p>
          <p className="mt-6">
            Over more than a decade we’ve staffed teams on federal programs, delivered IT consultants 
            to enterprise clients through prime vendors, and built our own software products, 
            including DoFiling, an immigration case-management platform used by legal professionals.
          </p>
        </div>
      </section>

      <section className="paper-section about-mission-section">
        <div className="site-width about-mission-grid editorial-grid">
          <div>
            <p className="eyebrow"><span />Our mission</p>
            <h2>Bring personal service and practical technology together.</h2>
          </div>
          <div>
            <p className="large-copy">
              EMFOI’s mission is to pair the personal service of a focused technology partner 
              with the reach and capability needed for complex work.
            </p>
            <p className="mt-6">
              We aim to make technology easier to understand, more useful to the people who depend on it, 
              and better connected to the goals of the organization or program around it.
            </p>
          </div>
        </div>
      </section>

      <section className="paper-section values-section" data-aos="fade-up">
        <div className="site-width">
          <p className="eyebrow"><span />Our core values</p>
          <div className="values-grid">
            <article><span>01</span><h3>Passionate</h3><p>We bring energy and care to the work of helping organizations move forward.</p></article>
            <article><span>02</span><h3>Respectful</h3><p>We communicate with consideration for clients, colleagues, users, and the realities around the work.</p></article>
            <article><span>03</span><h3>Ownership</h3><p>We take responsibility for our role, our decisions, and the quality of the delivery we support.</p></article>
            <article><span>04</span><h3>Unified</h3><p>We work as one team across disciplines, partners, and program requirements.</p></article>
          </div>
        </div>
      </section>

      <section className="paper-section team-profile-section">
        <MotionReveal className="site-width">
          <div className="team-profile-intro editorial-grid">
            <div>
              <p className="eyebrow"><span />How we organize delivery</p>
              <h2>Direction, delivery, and specialized practice.</h2>
            </div>
            <p>
              EMFOI brings the appropriate roles together around the work: clear direction, 
              attentive delivery coordination, and the focused capability the program needs.
            </p>
          </div>
          <p className="team-profile-visual-note">
            Illustrative role portraits — individual EMFOI biographies are added only with approved information.
          </p>
          <div className="team-profile-grid">
            {teamProfileSlots.map((profile) => (
              <article className="team-profile-card" key={profile.number}>
                <figure className="team-profile-portrait">
                  <img src={profile.image} alt={profile.alt} loading="eager" />
                </figure>
                <div className="team-profile-mark">
                  <UsersRound size={18} />
                  <span>{profile.number}</span>
                </div>
                <p>{profile.type}</p>
                <h3>{profile.title}</h3>
                <p>{profile.text}</p>
                <span className="team-profile-status">Engagement role</span>
              </article>
            ))}
          </div>
        </MotionReveal>
      </section>

      <section className="ink-cta-section">
        <div className="site-width ink-cta-grid">
          <div>
            <p className="eyebrow eyebrow-light"><span />Build with us</p>
            <h2>Bring expertise to the work that matters.</h2>
          </div>
          <div className="flex flex-col gap-6">
            <p>Explore career opportunities or begin a conversation with the EMFOI team.</p>
            <Link href="/careers" className="button button-light w-fit">
              Explore careers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function WhyUsPage() {
  const whyUsPoints = [
    { number: "01", title: "Client-oriented service", text: "We prioritize the personal service of a focused technology partner, ensuring your program’s specific needs are heard and addressed." },
    { number: "02", title: "Technical competence", text: "We bring specialized capability across software, AI, and staffing, delivering technically sound solutions that hold up in complex environments." },
    { number: "03", title: "Ownership & responsibility", text: "We take full responsibility for our role, our decisions, and the quality of the delivery we support, acting as a true partner in your success." },
    { number: "04", title: "Problem-solving posture", text: "We focus on solving the real operational challenges in front of your team, avoiding unnecessary complexity in favor of practical results." },
    { number: "05", title: "Transparency & integrity", text: "We maintain clear communication, documented decision-making, and ethical delivery standards across every engagement." },
  ];

  return (
    <PageLayout>
      <PageHero 
        eyebrow="Why EMFOI" 
        title="A delivery posture built on partnership and precision." 
        intro="People, Purpose, and Process. EMFOI brings client-oriented service, technical competence, and operational ownership to every technology and staffing engagement." 
      />
      
      <section className="paper-section why-us-intro-section">
        <div className="site-width why-us-intro-grid editorial-grid">
          <div>
            <p className="eyebrow"><span />Our approach</p>
            <h2>Focused on the work that matters.</h2>
          </div>
          <p className="large-copy">
            We believe technology delivery is strongest when it is grounded in the real environment, 
            supported by accountable governance, and delivered by people who take ownership of the result.
          </p>
        </div>
      </section>

      <section className="site-width why-us-points-section" data-aos="fade-up">
        <div className="why-us-points-grid">
          {whyUsPoints.map((point) => (
            <article key={point.number} className="why-us-point-card">
              <span>{point.number}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ink-cta-section">
        <div className="site-width ink-cta-grid">
          <div>
            <p className="eyebrow eyebrow-light"><span />Contact us</p>
            <h2>Ready to explore a focused partnership?</h2>
          </div>
          <div className="flex flex-col gap-6">
            <p>Begin a conversation about your program, product, or staffing needs with the EMFOI team.</p>
            <Link href="/contact" className="button button-light w-fit">
              Contact EMFOI <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function TermsConditionsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Terms & Conditions" intro="Review the current EMFOI Terms & Conditions and related website-use information." />
      <section className="site-width legal-content-section">
        <div className="legal-body editorial-grid">
          <div />
          <div>
            <p className="large-copy">These terms govern your use of the EMFOI website. By accessing this site, you agree to these conditions.</p>
            <div className="mt-8 space-y-6 text-ink-navy/80">
              <section>
                <h3 className="text-ink-navy font-medium mb-2">1. Use of Content</h3>
                <p>All information, text, and media on this site are for informational purposes. Unauthorized reproduction is prohibited.</p>
              </section>
              <section>
                <h3 className="text-ink-navy font-medium mb-2">2. Accuracy of Information</h3>
                <p>While we strive for accuracy, EMFOI does not warrant that the information on this site is complete or current.</p>
              </section>
              <section>
                <h3 className="text-ink-navy font-medium mb-2">3. External Links</h3>
                <p>This site may contain links to third-party websites. EMFOI is not responsible for the content or privacy practices of these sites.</p>
              </section>
              <section>
                <h3 className="text-ink-navy font-medium mb-2">4. Governing Law</h3>
                <p>These terms are governed by the laws of the Commonwealth of Virginia.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function PrivacyNoticePage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Privacy Notice" intro="EMFOI respects your privacy and is committed to protecting your personal data." />
      <section className="site-width legal-content-section">
        <div className="legal-body editorial-grid">
          <div />
          <div>
            <p className="large-copy">This notice explains how we handle information collected through this website.</p>
            <div className="mt-8 space-y-6 text-ink-navy/80">
              <section>
                <h3 className="text-ink-navy font-medium mb-2">1. Data Collection</h3>
                <p>We collect minimal information required to provide our services and analyze website performance.</p>
              </section>
              <section>
                <h3 className="text-ink-navy font-medium mb-2">2. Analytics</h3>
                <p>We use optional analytics to improve our website. You can manage your preferences through the cookie settings.</p>
              </section>
              <section>
                <h3 className="text-ink-navy font-medium mb-2">3. Contact Information</h3>
                <p>If you contact us, we use your information only to respond to your inquiry.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function InsightsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Insights" title="Operational knowledge and delivery perspectives." intro="EMFOI is preparing approved insights on accessible design, responsible AI, government delivery, healthcare staffing, and technology operations." />
      <section className="site-width insights-placeholder-section">
        <div className="editorial-grid">
          <div />
          <div className="py-20 border-t border-ink-navy/10">
            <p className="large-copy">Verified insights and case-study summaries are currently being prepared for publication.</p>
            <p className="mt-4 text-ink-navy/60">Check back for perspectives on high-consequence technology delivery.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function CareersPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Careers" title="Join the work that needs to hold up." intro="Learn about future opportunities at EMFOI across technology, consulting, and healthcare staffing." />
      <section className="site-width careers-placeholder-section">
        <div className="editorial-grid">
          <div />
          <div className="py-20 border-t border-ink-navy/10">
            <p className="large-copy">We are always looking for professionals who prioritize delivery and ownership.</p>
            <div className="mt-8 p-8 bg-paper-canvas border border-ink-navy/10 rounded-sm">
              <h3 className="text-xl font-medium mb-4">Current Status</h3>
              <p className="text-ink-navy/80">Active job listings are currently managed through our partner platforms. For general inquiries, please contact us directly.</p>
              <Link href="/contact" className="button button-primary mt-6 w-fit">Contact recruiting <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ContactPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Contact" title="Begin the conversation." intro="Contact EMFOI in Herndon, Virginia to discuss custom software, AI governance, IT staffing, healthcare staffing, or public-sector teaming." />
      <section className="site-width contact-section editorial-grid">
        <div className="contact-info-block">
          <div className="contact-method">
            <MapPin size={24} className="text-signal-blue" />
            <div>
              <h3>Headquarters</h3>
              <p>205 Van Buren Street<br />Suite 120<br />Herndon, VA 20170</p>
            </div>
          </div>
          <div className="contact-method">
            <FileText size={24} className="text-signal-blue" />
            <div>
              <h3>Direct contact</h3>
              <p>1-800-555-8933</p>
              <p className="text-sm text-ink-navy/60 mt-1">Local 703 line pending confirmation.</p>
            </div>
          </div>
          <div className="contact-method">
            <Users size={24} className="text-signal-blue" />
            <div>
              <h3>Response time</h3>
              <p>We typically respond within one business day.</p>
            </div>
          </div>
        </div>
        <div className="contact-form-block">
          <ContactForm />
        </div>
      </section>
      <section className="site-width map-section" data-aos="fade-up">
        <div className="map-container rounded-sm overflow-hidden border border-ink-navy/10 grayscale hover:grayscale-0 transition-all duration-700">
          <img 
            src="/manus-storage/emfoi-signal-mark_95fe1ace.png" 
            alt="EMFOI Headquarters in Herndon, Virginia" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </PageLayout>
  );
}

function IndustryDetailPage({ path }: { path: string }) {
  const dossier = industryData.find(d => d.href === path) || industryData[ industryData.length - 1 ];
  return (
    <PageLayout>
      <PageHero eyebrow="Industry" title={dossier.title} intro={dossier.text} />
      <section className="site-width industry-dossier-section editorial-grid">
        <div className="industry-dossier-aside">
          <div className="industry-dossier-mark" aria-hidden="true"><i /><i /><i /><i /></div>
          <span>OPERATING CONTEXT</span>
          <p>{dossier.signal}</p>
        </div>
        <div className="industry-dossier-content">
          <p className="large-copy">EMFOI supports organizations operating in {dossier.title.toLowerCase()}, providing technically sound and practically usable delivery.</p>
          <div className="mt-12 p-8 bg-paper-canvas border border-ink-navy/10 rounded-sm">
            <h3 className="text-xl font-medium mb-4">Evidence ready</h3>
            <p className="text-ink-navy/80">Case-study summaries for {dossier.title.toLowerCase()} are currently being prepared for publication.</p>
            <Link href="/contact" className="button button-primary mt-6 w-fit">Discuss your needs <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function IndustriesIndexPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Industries" title="Capability that respects the context around it." intro="EMFOI supports organizations operating in healthcare, public sector, and complex enterprise environments where delivery must be both technically sound and practically usable." />
      <section className="site-width industries-grid-section" data-aos="fade-up">
        <div className="industries-list">
          {industryData.map((item) => (
            <Link key={item.number} href={item.href} className="industry-row group">
              <span className="industry-number">{item.number}</span>
              <div className="industry-info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="industry-arrow">
                <ChevronRight size={24} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

function HealthcarePage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Healthcare" title="Technology and staffing for the care mission." intro="EMFOI supports care organizations and government health programs with custom software, practical AI governance, IT consulting, and healthcare staffing." />
      <section className="site-width healthcare-content-section editorial-grid">
        <div>
          <p className="eyebrow"><span />Our focus</p>
          <h2>Supporting high-consequence health delivery.</h2>
        </div>
        <div>
          <p className="large-copy">We focus on the intersections of technology and care, where systems must be reliable, secure, and accessible.</p>
          <div className="mt-8 space-y-6">
            <article className="p-6 border border-ink-navy/10 rounded-sm">
              <h3 className="text-lg font-medium mb-2">Healthcare staffing</h3>
              <p className="text-ink-navy/80">We place qualified healthcare professionals in government and enterprise health programs, ensuring mission continuity.</p>
            </article>
            <article className="p-6 border border-ink-navy/10 rounded-sm">
              <h3 className="text-lg font-medium mb-2">Health IT & AI</h3>
              <p className="text-ink-navy/80">From custom patient-coordination software to responsible AI governance, we build tools that support care teams.</p>
            </article>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function DoFilingPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Product" title="DoFiling" intro="Immigration case management, built for precision and visibility." />
      <section className="site-width product-dossier-section editorial-grid">
        <div className="product-visual">
          <div className="product-logo-frame bg-[#f8f9fa] p-12 rounded-sm border border-ink-navy/10">
            <img src="/manus-storage/dofiling-logo-approved_9637c5b5.png" alt="DoFiling Logo" className="w-full h-auto object-contain" />
          </div>
        </div>
        <div className="product-details">
          <p className="large-copy">DoFiling is a cloud workspace for immigration case workflows, document handling, and client coordination.</p>
          <ul className="mt-8 space-y-4">
            <li className="flex gap-3"><Check size={20} className="text-signal-blue shrink-0" /> <span>Secure document storage and sharing</span></li>
            <li className="flex gap-3"><Check size={20} className="text-signal-blue shrink-0" /> <span>Attorney and employer portals</span></li>
            <li className="flex gap-3"><Check size={20} className="text-signal-blue shrink-0" /> <span>Automated questionnaires and forms</span></li>
          </ul>
          <div className="mt-10 flex gap-4">
            <a href="https://dofiling.com" target="_blank" rel="noopener noreferrer" className="button button-primary">Visit DoFiling <ExternalLink size={16} /></a>
            <Link href="/contact" className="button button-secondary">Request demo</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function CareHighPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Product" title="CareHigh" intro="Dental referral management, simplified for visibility and follow-up." />
      <section className="site-width product-dossier-section editorial-grid">
        <div className="product-visual">
          <div className="product-logo-frame bg-[#fff9f0] p-12 rounded-sm border border-ink-navy/10">
            <img src="/manus-storage/carehigh-logo_381d8353.svg" alt="CareHigh Logo" className="w-full h-auto object-contain" />
          </div>
        </div>
        <div className="product-details">
          <p className="large-copy">CareHigh helps dental teams track referrals, support follow-up, and keep care workflows visible.</p>
          <ul className="mt-8 space-y-4">
            <li className="flex gap-3"><Check size={20} className="text-signal-blue shrink-0" /> <span>Real-time referral tracking</span></li>
            <li className="flex gap-3"><Check size={20} className="text-signal-blue shrink-0" /> <span>Patient follow-up reminders</span></li>
            <li className="flex gap-3"><Check size={20} className="text-signal-blue shrink-0" /> <span>Multi-office visibility</span></li>
          </ul>
          <div className="mt-10">
            <Link href="/contact" className="button button-primary">Request information <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function InfoPage() {
  const [location] = useLocation();
  const seo = pageSeo[location as keyof typeof pageSeo] || pageSeo["/about"];

  if (location === "/government") return <><PageSEO {...seo} /><GovernmentPage /></>;
  if (location === "/capability-statement" || location === "/capabilities-statement") return <><PageSEO {...seo} /><CapabilityStatementPage /></>;
  if (location === "/healthcare") return <><PageSEO {...seo} /><HealthcarePage /></>;
  if (location === "/industries") return <><PageSEO {...seo} /><IndustriesIndexPage /></>;
  if (location === "/about") return <><PageSEO {...seo} /><AboutPage /></>;
  if (location === "/why-us") return <><PageSEO {...seo} /><WhyUsPage /></>;
  if (location === "/terms-conditions") return <><PageSEO {...seo} /><TermsConditionsPage /></>;
  if (location === "/privacy") return <><PageSEO {...seo} /><PrivacyNoticePage /></>;
  if (location === "/insights") return <><PageSEO {...seo} /><InsightsPage /></>;
  if (location === "/careers") return <><PageSEO {...seo} /><CareersPage /></>;
  if (location === "/contact") return <><PageSEO {...seo} /><ContactPage /></>;
  if (location === "/dofiling") return <><PageSEO {...seo} /><DoFilingPage /></>;
  if (location === "/carehigh") return <><PageSEO {...seo} /><CareHighPage /></>;
  if (location.startsWith("/industries/")) return <><PageSEO {...seo} /><IndustryDetailPage path={location} /></>;

  return <><PageSEO {...seo} /><AboutPage /></>;
}
