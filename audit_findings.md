# EMFOI Redesign Gap Audit — Source Notes

## Original Website Review

Source: [EMFOI home page](https://www.emfoi.com/) and [Solutions page](https://www.emfoi.com/solutions/), reviewed 2026-08-15.

The previous site uses a general IT-services proposition with a navigation organized around **Solutions**, **Company**, **Resources**, and **Contact Us**. Its homepage emphasizes IT continuity and contains a consultation form. The visible service set includes UI/UX, IT consulting and advisory, IT modernization, web development, mobile development, AI/ML development, NFT development, software development, cybersecurity, network connectivity, and ERP solutions.

The old website exposes footer links to LinkedIn, GitHub, Twitter, and Facebook, although the observed destination links are generic platform URLs rather than clearly EMFOI-owned profiles. It also presents a cookie-settings button and privacy-policy acknowledgement around the newsletter form. The new redesign should preserve this functional intent while avoiding unverified social-profile claims.

## Initial New-Site Gap Findings

The current redesign substantially improves buyer clarity for government, healthcare, staffing, AI governance, capability statement details, contact routing, and motion-ready visual systems. Relative to the previous site and the new request, the remaining gaps are: a named **CareHigh** product, social presence controls, user-manageable cookie consent, consent-aware analytics loading, and a more explicit motion system. The audit will also verify any relevant product/service content requested in the attached brief before final delivery.

## CareHigh Verification

Source: [CareHigh LinkedIn profile](https://www.linkedin.com/company/carehighofficial), reviewed 2026-08-15.

CareHigh describes itself as software for modern dental practices that helps teams track and follow up on referrals. Its public profile describes the product as helping practices recover revenue associated with referred patients lost through poor tracking. The new EMFOI product page may safely use this focused positioning and link to `https://www.carehigh.com/`; it should not claim outcome percentages, integrations, or capabilities not approved in public product materials.

## Verified Social Destination

Source: [EMFOI LinkedIn profile](https://www.linkedin.com/company/emfoi/), reviewed 2026-08-15.

`https://www.linkedin.com/company/emfoi/` is a public EMFOI company page that identifies its website as `emfoi.com` and its headquarters as Herndon, Virginia. The new site can display a LinkedIn icon linked to this destination. Other legacy social destinations will remain hidden because the original website only exposed generic platform links and no public verification was obtained for an EMFOI-owned account.

## Enhancement Decisions

| Requested area | Implementation decision |
|---|---|
| CareHigh | Add a dedicated `/carehigh` product page, link it from the homepage product rail and footer, use the supplied logo, and describe only the publicly verified dental-referral workflow purpose. |
| Social media | Add a single verified LinkedIn icon in the footer, update Organization structured data with the same destination, and keep unverified social channels hidden. |
| Motion | Use the existing Framer Motion dependency rather than adding overlapping animation libraries. Apply viewport-triggered, reduced-motion-aware reveals and a restrained product-rail interaction. |
| Cookie preferences | Add a first-visit consent banner and a persistent preferences dialog that distinguishes necessary storage from optional analytics. Store only the visitor’s preference locally. |
| Analytics | Remove unconditional Umami loading from the document head. Load the provided Umami script only after optional analytics consent, and record selected high-intent events when consent is granted. |
| Legal posture | Provide a concise site privacy notice and consent language. These are implementation-level notices, not a substitute for EMFOI-approved legal policy text. |
