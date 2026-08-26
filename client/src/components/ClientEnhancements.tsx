/**
 * CIVIC PRECISION — client-side privacy controls use an explicit, quiet document-panel pattern.
 * Optional analytics loads only after a visitor makes an affirmative choice.
 */
import { Check, Settings2, X } from "lucide-react";
import { useEffect, useState } from "react";

type ConsentState = { analytics: boolean; updatedAt: string };
const consentKey = "emfoi-cookie-preferences-v1";

declare global {
  interface Window {
    umami?: { track?: (eventName: string, eventData?: Record<string, string>) => void };
  }
}

export function analyticsEvent(eventName: string, eventData?: Record<string, string>) {
  window.umami?.track?.(eventName, eventData);
}

function AnalyticsLoader({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    const scriptId = "emfoi-consent-analytics";
    const existing = document.getElementById(scriptId);
    if (!enabled) {
      existing?.remove();
      window.umami = undefined;
      return;
    }

    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
    if (!endpoint || !websiteId || existing) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.defer = true;
    script.src = `${endpoint.replace(/\/$/, "")}/umami`;
    script.dataset.websiteId = websiteId;
    document.head.appendChild(script);
  }, [enabled]);

  return null;
}

export function CookiePreferences() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [ready, setReady] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(consentKey);
      if (stored) {
        const value = JSON.parse(stored) as ConsentState;
        setConsent(value);
        setAnalyticsEnabled(Boolean(value.analytics));
      }
    } catch {
      window.localStorage.removeItem(consentKey);
    } finally {
      setReady(true);
    }

    const openPreferences = () => {
      setAnalyticsEnabled(Boolean(consent?.analytics));
      setPreferencesOpen(true);
    };
    window.addEventListener("emfoi:open-cookie-preferences", openPreferences);
    return () => window.removeEventListener("emfoi:open-cookie-preferences", openPreferences);
  }, [consent?.analytics]);

  useEffect(() => {
    if (!preferencesOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreferencesOpen(false);
      if (event.key === "Tab") {
        const focusable = document.querySelectorAll('.cookie-modal button, .cookie-modal input');
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const firstButton = document.querySelector('.cookie-modal .icon-button') as HTMLElement;
    firstButton?.focus();
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [preferencesOpen]);

  const saveConsent = (analytics: boolean) => {
    const next = { analytics, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(consentKey, JSON.stringify(next));
    setConsent(next);
    setAnalyticsEnabled(analytics);
    setPreferencesOpen(false);
  };

  if (!ready) return null;

  return (
    <>
      <AnalyticsLoader enabled={Boolean(consent?.analytics)} />
      {consent === null && !preferencesOpen && (
        <aside className="cookie-banner" aria-label="Cookie preference notice">
          <div className="cookie-mark" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="cookie-copy">
            <strong>Your privacy choices</strong>
            <p>EMFOI uses essential local storage for your preference. Optional analytics helps us understand site use only if you allow it. <a href="/privacy">Read the privacy notice</a>.</p>
          </div>
          <div className="cookie-actions">
            <button className="cookie-text-button" onClick={() => setPreferencesOpen(true)}>Customize</button>
            <button className="button button-secondary cookie-reject" onClick={() => saveConsent(false)}>Use necessary only</button>
            <button className="button button-primary" onClick={() => saveConsent(true)}>Allow analytics <Check size={15} /></button>
          </div>
        </aside>
      )}
      {preferencesOpen && (
        <div className="cookie-modal-layer" role="presentation">
          <section className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-title">
            <div className="cookie-modal-header">
              <div><p className="eyebrow"><span />Privacy preferences</p><h2 id="cookie-preferences-title">Choose what helps the site work.</h2></div>
              <button className="icon-button" onClick={() => setPreferencesOpen(false)} aria-label="Close privacy preferences"><X size={19} /></button>
            </div>
            <div className="cookie-preference-row"><div><strong>Necessary storage</strong><p>Stores your cookie preference on this browser. It is always active.</p></div><span className="preference-status">Required</span></div>
            <label className="cookie-preference-row cookie-toggle-row"><div><strong>Optional analytics</strong><p>Loads privacy-conscious usage measurement after you agree, helping EMFOI improve the website.</p></div><input type="checkbox" checked={analyticsEnabled} onChange={(event) => setAnalyticsEnabled(event.target.checked)} aria-label="Enable optional analytics" /><span className="toggle-indicator" aria-hidden="true" /></label>
            <div className="cookie-modal-actions"><button className="button button-secondary" onClick={() => saveConsent(false)}>Use necessary only</button><button className="button button-primary" onClick={() => saveConsent(analyticsEnabled)}><Settings2 size={15} /> Save preferences</button></div>
          </section>
        </div>
      )}
    </>
  );
}
