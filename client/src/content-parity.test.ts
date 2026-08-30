import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = resolve(import.meta.dirname, "../..");
const capabilities = readFileSync(resolve(projectRoot, "client/src/pages/Capabilities.tsx"), "utf8");
const infoPage = readFileSync(resolve(projectRoot, "client/src/pages/InfoPage.tsx"), "utf8");
const siteChrome = readFileSync(resolve(projectRoot, "client/src/components/SiteChrome.tsx"), "utf8");
const app = readFileSync(resolve(projectRoot, "client/src/App.tsx"), "utf8");

describe("approved EMFOI content parity", () => {
  it("keeps the approved legacy service taxonomy discoverable", () => {
    const services = [
      ["cyber-security", "Cyber Security"],
      ["managed-services", "Managed Services"],
      ["cloud-services", "Cloud Services"],
      ["network-connectivity", "Network Connectivity"],
      ["erp-solutions", "ERP Solutions"],
      ["it-modernization", "IT Modernization"],
    ];

    for (const [slug, title] of services) {
      expect(capabilities).toContain(`"${slug}"`);
      expect(capabilities).toContain(`title: "${title}"`);
      expect(capabilities).toContain("href={`/capabilities/${card.slug}`}");
    }

    expect(capabilities).toContain("web and mobile development");
  });

  it("keeps the approved legacy industry categories routed", () => {
    const industries = [
      ["food", "Food"],
      ["startups", "Startups"],
      ["consulting-providers", "Consulting Providers"],
      ["non-profit", "Non-Profit"],
      ["ai", "AI"],
      ["other", "Other"],
    ];

    for (const [slug, title] of industries) {
      expect(infoPage).toContain(`title: "${title}"`);
      expect(infoPage).toContain(`href: "/industries/${slug}"`);
      expect(app).toContain(`path="/industries/:slug"`);
      expect(infoPage).toContain(`location.startsWith("/industries/")`);
    }
  });

  it("surfaces Mission, Why Us, and legal navigation", () => {
    expect(infoPage).toContain("Our mission");
    expect(infoPage).toContain("Our core values");
    expect(infoPage).toContain("People, Purpose, and Process");
    expect(infoPage).toContain("function WhyUsPage()");
    expect(infoPage).toContain("function TermsConditionsPage()");
    expect(siteChrome).toContain('href="/why-us"');
    expect(siteChrome).toContain('href="/terms-conditions"');
    expect(app).toContain('path="/why-us"');
    expect(app).toContain('path="/terms-conditions"');
  });
});
