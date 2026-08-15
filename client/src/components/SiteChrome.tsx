/**
 * CIVIC PRECISION — global EMFOI navigation and footer.
 * Warm paper canvas, ink-blue structure, Signal Blue calls to action, and purposeful geometry.
 */
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const brandMark = "/manus-storage/emfoi-signal-mark_95fe1ace.png";

const navItems = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Government", href: "/government" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
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
      {open && (
        <div className="mobile-menu" aria-label="Mobile navigation">
          <div className="site-width mobile-menu-inner">
            {navItems.map((item) => <NavLink key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
            <Link href="/contact" className="button button-primary mobile-cta" onClick={() => setOpen(false)}>Request a capability briefing <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      )}
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
        </div>
        <div className="footer-column">
          <span className="footer-heading">Explore</span>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/government">Government</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/dofiling">DoFiling</Link>
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
          <span title="Legal copy to be supplied before launch">Privacy Policy</span>
          <span title="Legal copy to be supplied before launch">Terms & Conditions</span>
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
      <div className="site-width page-hero-grid">
        <div>
          <p className="eyebrow"><span />{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero-intro">
          <p>{intro}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
  return <div className="site-frame"><Header /><main>{children}</main><Footer /></div>;
}
