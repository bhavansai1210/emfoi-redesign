/**
 * CIVIC PRECISION — global EMFOI navigation and footer.
 * Warm paper canvas, ink-blue structure, Signal Blue calls to action, and purposeful geometry.
 */
import { ArrowUpRight, Linkedin, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { CookiePreferences } from "@/components/ClientEnhancements";
import { MotionReveal } from "@/components/MotionReveal";

const brandMark = "/manus-storage/emfoi-signal-mark_95fe1ace.png";

const navItems = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Government", href: "/government" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const [location] = useLocation();
  const active = href === "/" ? location === "/" : location.startsWith(href);
  return (
    <Link href={href} onClick={onClick} className={`nav-link ${active ? "nav-link-active" : ""}`}>
      {children}
    </Link>
  );
}

function SocialPlatformIcon({ platform }: { platform: "linkedin" | "facebook" | "instagram" | "x" }) {
  if (platform === "linkedin") return <Linkedin size={18} aria-hidden="true" />;
  if (platform === "facebook") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.65 21v-8h2.68l.4-3.12h-3.08V7.89c0-.9.25-1.52 1.55-1.52H16.9V3.58c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.37v2.06H7.25V13h2.86v8h3.54Z" /></svg>;
  if (platform === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.8" fill="none" stroke="currentColor" strokeWidth="1.9" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.9" /><circle cx="17.55" cy="6.55" r="1.15" fill="currentColor" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 3.5h2.9l-6.35 7.25L23 20.5h-5.86l-4.58-5.98L7.32 20.5H4.4l6.79-7.76L4 3.5h6.01l4.14 5.47L18.9 3.5Zm-1.03 15.2h1.62L9.13 5.2H7.4L17.87 18.7Z" /></svg>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="utility-bar">
        <div className="site-width utility-inner">
          <span>Herndon, Virginia</span>
          <span className="utility-separator" />
          <span>EMFOI, Inc. · Established 2013</span>
          <a href="mailto:info@emfoi.com" className="utility-mail">info@emfoi.com</a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-width header-inner">
          <Link href="/" className="brand" aria-label="EMFOI home">
            <img className="brand-mark" src={brandMark} alt="" />
            <span className="brand-wordmark">EMFOI</span>
            <span className="brand-inc">INC.</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <NavLink key={item.href} href={item.href}>{item.label}</NavLink>)}
          </nav>
          <div className="header-actions">
            <Link href="/contact" className="button button-primary header-cta">Request a briefing <ArrowUpRight size={15} strokeWidth={2.25} /></Link>
            <button className="mobile-menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence initial={false}>
      {open && (
        <motion.div className="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
          <div className="site-width mobile-menu-inner">
            {navItems.map((item) => <NavLink key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
            <Link href="/contact" className="button button-primary mobile-cta" onClick={() => setOpen(false)}>Request a capability briefing <ArrowUpRight size={16} /></Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-main">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand" aria-label="EMFOI home">
            <img className="brand-mark" src={brandMark} alt="" />
            <span className="brand-wordmark">EMFOI</span>
            <span className="brand-inc">INC.</span>
          </Link>
          <p>Software, AI, and staffing partners for government and healthcare.</p>
          <a href="mailto:info@emfoi.com" className="footer-email">info@emfoi.com <ArrowUpRight size={15} /></a>
          <div className="footer-social"><span className="footer-social-label">Connect with EMFOI</span><div className="footer-social-icons"><a className="footer-social-icon-button footer-social-icon-button-active" href="https://www.linkedin.com/company/emfoi/" target="_blank" rel="noreferrer" aria-label="Follow EMFOI on LinkedIn" title="LinkedIn"><SocialPlatformIcon platform="linkedin" /></a><span className="footer-social-icon-button footer-social-icon-button-pending" role="img" aria-label="EMFOI Facebook profile link pending confirmation" title="Facebook profile link pending confirmation"><SocialPlatformIcon platform="facebook" /></span><span className="footer-social-icon-button footer-social-icon-button-pending" role="img" aria-label="EMFOI Instagram profile link pending confirmation" title="Instagram profile link pending confirmation"><SocialPlatformIcon platform="instagram" /></span><span className="footer-social-icon-button footer-social-icon-button-pending" role="img" aria-label="EMFOI X profile link pending confirmation" title="X profile link pending confirmation"><SocialPlatformIcon platform="x" /></span></div><span className="footer-social-note">LinkedIn · Facebook · Instagram · X</span></div>
        </div>
        <div className="footer-column">
          <span className="footer-heading">Explore</span>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/government">Government</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/dofiling">DoFiling</Link>
          <Link href="/carehigh">CareHigh</Link>
        </div>
        <div className="footer-column">
          <span className="footer-heading">Company</span>
          <Link href="/about">About EMFOI</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <span className="footer-heading">Headquarters</span>
          <address>205 Van Buren Street<br />Suite 120<br />Herndon, VA 20170</address>
          <a href="tel:+18003568933">1-800-356-8933</a>
          <span className="pending-contact">Local 703 line pending confirmation</span>
        </div>
      </div>
      <div className="site-width footer-bottom">
        <span>© {new Date().getFullYear()} EMFOI, Inc. — a Delaware corporation established 2013.</span>
        <div className="footer-legal">
          <Link href="/privacy">Privacy notice</Link>
          <button className="footer-legal-button" onClick={() => window.dispatchEvent(new Event("emfoi:open-cookie-preferences"))}>Manage cookies</button>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, children, variant = "standard" }: { eyebrow: string; title: string; intro: string; children?: React.ReactNode; variant?: "standard" | "data" | "contact" | "statement" | "product" }) {
  return (
    <section className={`page-hero page-hero-${variant}`}>
      <div className="page-hero-system" aria-hidden="true"><span /><span /><span /><span /><i /><i /><i /></div>
      <MotionReveal className="site-width page-hero-grid">
        <div>
          <p className="eyebrow"><span />{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero-intro">
          <p>{intro}</p>
          {children}
        </div>
      </MotionReveal>
    </section>
  );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
  return <div className="site-frame"><Header /><main>{children}</main><Footer /><CookiePreferences /></div>;
}
