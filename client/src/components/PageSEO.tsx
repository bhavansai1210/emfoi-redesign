/**
 * CIVIC PRECISION — route-level metadata keeps each page precise, factual, and easily discoverable.
 */
import { useEffect } from "react";

type Breadcrumb = { name: string; path: string };

type PageSEOProps = {
  title: string;
  description: string;
  canonicalPath: string;
  breadcrumbs?: readonly Breadcrumb[];
  noindex?: boolean;
};

const SITE_URL = "https://www.emfoi.com";

function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

function setMeta(attribute: "name" | "property", key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = url;
}

function setStructuredData(data: Record<string, unknown>) {
  let element = document.head.querySelector<HTMLScriptElement>('script[data-emfoi-page-schema="true"]');
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.emfoiPageSchema = "true";
    document.head.appendChild(element);
  }
  element.text = JSON.stringify(data);
}

export function PageSEO({ title, description, canonicalPath, breadcrumbs = [], noindex = false }: PageSEOProps) {
  useEffect(() => {
    const url = absoluteUrl(canonicalPath);
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex,follow" : "index,follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setCanonical(url);

    const trail = [{ name: "Home", path: "/" }, ...breadcrumbs];
    const graph: Record<string, unknown>[] = [{
      "@type": "WebPage",
      name: title,
      description,
      url,
      isPartOf: { "@type": "WebSite", name: "EMFOI", url: SITE_URL },
    }];

    if (trail.length > 1) {
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: trail.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      });
    }

    setStructuredData({ "@context": "https://schema.org", "@graph": graph });
  }, [breadcrumbs, canonicalPath, description, noindex, title]);

  return null;
}
