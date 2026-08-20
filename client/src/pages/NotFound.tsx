/*
 * CIVIC PRECISION — the fallback route is a navigable field-guide notice,
 * using the same warm paper, ink structure, keylines, and signal-blue action system as the rest of EMFOI.
 */
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "wouter";
import { PageLayout } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="not-found-page">
        <div className="page-hero-system not-found-system" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="site-width not-found-grid">
          <div className="not-found-copy">
            <p className="eyebrow"><span />Route notice</p>
            <p className="not-found-code">404</p>
            <h1>This route is not on the current field guide.</h1>
            <p>The page may have moved, or the address may be incomplete. Return to the main site to continue exploring EMFOI’s capabilities and industry support.</p>
            <div className="not-found-actions">
              <Link href="/" className="button button-primary">Return home <ArrowRight size={16} /></Link>
              <Link href="/contact" className="text-link">Request help finding a page <ArrowRight size={15} /></Link>
            </div>
          </div>
          <aside className="not-found-rail" aria-label="Available site routes">
            <div className="not-found-rail-mark"><Compass size={24} aria-hidden="true" /></div>
            <span className="not-found-rail-label">Available routes</span>
            <Link href="/capabilities">Capabilities <ArrowRight size={15} /></Link>
            <Link href="/industries">Industries <ArrowRight size={15} /></Link>
            <Link href="/healthcare">Healthcare <ArrowRight size={15} /></Link>
            <Link href="/contact">Contact <ArrowRight size={15} /></Link>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
