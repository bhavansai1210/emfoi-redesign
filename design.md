# EMFOI Design System — Civic Precision

**Purpose:** ఈ file EMFOI website కి future design decisions తీసుకునే సమయంలో single source of truth గా ఉపయోగించాలి. కొత్త page, section, card, form, navigation change, or product area build చేసే ముందు ఈ guide ని చదివి, “ఈ decision Civic Precision ని reinforce చేస్తుందా లేదా dilute చేస్తుందా?” అని check చేయాలి.

> **Core promise:** EMFOI should feel like a well-made public document: warm, precise, accountable, and human. It is not a generic technology site, a dark cyber product, or a crowded agency portfolio. [1]

## 1. Brand essence

EMFOI is a practical software, AI, and staffing partner for organizations where trust, usability, and delivery matter. The visual personality is **assured, lucid, and human-centered**. Copy and design should help a government buyer, healthcare leader, or enterprise technology team quickly understand what EMFOI does and what action to take. [1]

| Design quality | What it means in practice | What it must never become |
| --- | --- | --- |
| **Civic** | Clear routes, visible accountability, document-like order, calm contrast. | Bureaucratic, cold, or over-formal. |
| **Precise** | One clear page purpose, restrained components, deliberate spacing, direct labels. | Busy, over-decorated, or “tech for tech’s sake.” |
| **Human** | Readable type, generous space, practical language, accessible interactions. | Casual, playful, vague, or testimonial-heavy. |

## 2. The signature visual idea

The EMFOI site is an **editorial field guide**. Each page should make visitors feel oriented, then help them move toward a decision. The signature is not a single hero image or a trendy color gradient; it is the combination of warm paper surfaces, deep ink type, Signal Blue actions, fine documentation rules, and a restrained quadrant system. [1] [2]

| Layer | Job | Typical use |
| --- | --- | --- |
| **Warm paper field** | Creates calm, trust, and visual rest. | Main page canvas, long-form content, primary page heroes. |
| **Document structure** | Makes complex services feel navigable. | Numbered rows, keylines, labeled sections, evidence panels, route rails. |
| **Signal layer** | Shows action or orientation, never decoration alone. | Primary button, active nav state, important numerals, focus ring, quadrant outline. |
| **Ink contrast** | Creates a decisive editorial moment. | Final CTA, footer, a major proof or contrast section. |

## 3. Color system

The palette is intentionally light-first. Most pages should remain visually quiet enough for information to carry the authority. **EMFOI Signal Blue** is the only high-attention color; use it sparingly and consistently. [1] [2]

| Token / color | Value | Role | Rule |
| --- | --- | --- | --- |
| Warm paper | `#FBFAF7` | Main background | Default page canvas; never replace broadly with pure white or dark fills. |
| Deep ink navy | `#10213A` | Primary text and dark sections | Use for headings, utility bar, footer, and strong contrast areas. |
| Signal Blue | `#155EEF` | Brand signal | Primary actions, active state, focus ring, selected geometry, key numerals. |
| Signal Blue pale | `#EAF1FF` | Quiet interaction state | Hover backgrounds, small supportive panels, selected list rows. |
| Mineral green | `#EDF3F2` | Healthcare / care coordination field | Healthcare hero and supporting neutral surfaces only. |
| Soft neutral | `#F2F1EC` | Secondary paper field | Alternate section rhythm without visual noise. |
| Coral accent | `#F26B4F` | Tiny editorial note | Eyebrow dash, utility separator, one small detail; never a broad CTA or gradient. |
| Blueprint border | `#DDE2E8` | Structural line | Keylines and card boundaries, not heavy boxed layouts. |

**Color allocation rule:** a standard light page should be approximately warm paper and neutral fields first, ink text second, and Signal Blue only as a controlled signal. Do not introduce purple gradients, neon glow, full-page blue gradients, or a competing accent palette.

## 4. Typography and copy

The typography pair is part of the brand. **DM Serif Display** creates the editorial authority of major headings. **Manrope** carries navigation, body text, labels, forms, and short UI language. Do not replace these fonts with Inter, a system sans-only look, or a decorative display font. [1] [2]

| Element | Font and treatment | Guidance |
| --- | --- | --- |
| Hero and section headline | DM Serif Display, regular, tight tracking, left aligned | Make one precise statement; use a maximum of three to five short lines on desktop. |
| Body and supporting copy | Manrope, medium weight, restrained measure | Prefer one clearly argued paragraph over several generic fragments. |
| Eyebrow / field label | Manrope, 10px, heavy, uppercase, tracked | Use a small coral dash only when it establishes a meaningful editorial label. |
| Navigation and buttons | Manrope, 11–12px, bold | Actions must describe the next professional step, not say “Learn more” by default. |
| Data / route number | Manrope, 10–11px, bold, Signal Blue | Use only when a real sequence or orientation system exists. |

The voice is plainspoken, specific, and evidence-led. Headlines should name the work or outcome. CTAs should name the decision or conversation. Claims need to be supportable; do not invent team members, customer logos, performance metrics, awards, compliance certifications, or testimonials.

> **Good:** “Bring the work in front of your team.”  
> **Avoid:** “Transform your business with next-generation solutions.”

## 5. Layout architecture

Avoid a generic centered landing-page stack. Build each route like an editorial sequence: orient the visitor, clarify the work, reveal the relevant capability or proof, and offer a direct next action. [1]

| Page region | Required behavior | Recommended composition |
| --- | --- | --- |
| Utility bar | Establishes place and trust context. | Slim ink band with concise factual text. |
| Main navigation | Gives immediate access to primary choices. | Capabilities, Industries, About, Insights, Contact; primary CTA at right. |
| Hero | States one page purpose and one action. | Left editorial headline, right supporting copy/action, restrained quadrant at top-right. |
| Orientation module | Helps a visitor choose a route or understand a sequence. | Buyer rail, numbered delivery strip, document-map, or evidence list. |
| Capability / proof section | Converts the statement into scannable detail. | Keylined grid or full-row clickable list; no uniform rounded-card wall. |
| Contrast CTA | Ends a meaningful page with decisive action. | Ink field, one focused headline, one compact supportive paragraph, one clear button. |
| Footer | Completes the site without competing with it. | Wordmark, useful navigation, headquarters/contact details, legal controls, social links. |

Use `site-width` for the established content measure. Preserve left-aligned editorial hierarchy. On mobile, collapse grids to one column, keep touch targets comfortable, and reduce decorative geometry before reducing text clarity. [2]

## 6. Quadrant and blueprint motif

The quadrant is a **system coordinate**, not a random logo stamp. It must organize information or establish a route point. When it cannot do that, omit it rather than adding decoration.

### Shared hero standard

Every standard secondary-page hero uses the same visual quadrant treatment: a 2×2 outlined mark, 128px square, 7px internal gap, 18° rotation, 26px from the top, and 7% from the right on desktop. On small screens it becomes a 104px mark, moves slightly out to the right, and becomes quieter. The mark retains the same subtle Signal Blue outline and pale fill across routes. Do **not** create page-specific sizes, rotations, extra cross-lines, or brightly filled quadrants. [2]

| Use the motif for | Do not use the motif for |
| --- | --- |
| Hero orientation, a numbered evidence key, a care-coordination map, a buyer-dossier legend, or a contact route marker. | Empty background decoration, oversized watermarking, scattered repeated marks, different random angles, or different colored versions per page. |

Blueprint keylines should be thin, calm, and purposeful. They can divide rows, map a sequence, or structure a field-guide module. Never use half-finished horizontal color lines, random vertical bars, or ornamental borders that do not communicate hierarchy.

## 7. Components and interaction rules

Components must feel composed and accessible. Interactions use transform and opacity rather than layout-shifting animation. Motion is optional support, not an attraction. [1] [2]

| Component | Standard | Interaction rule |
| --- | --- | --- |
| Primary button | Signal Blue fill, white label, compact radius, 44px minimum height. | Small lift on hover and `scale(.97)` on active. |
| Secondary button | Warm paper/transparent field with ink border. | Blue border and pale-blue field on hover. |
| Linked row / card | Entire row is clickable, not only the arrow icon. | Hover gives a pale-blue field and a small arrow movement. |
| Navigation link | Ink/blue active state with restrained underline. | Do not make the whole header jump or animate heavily. |
| Select / form field | Clear white field, ink text, blue focus ring. | Keyboard support and visible `:focus-visible` state are required. |
| Modal / cookie dialog | Quiet paper panel with clear action hierarchy. | Respect focus trapping and reduced motion. |

Use a strong ease-out curve such as `cubic-bezier(.23, 1, .32, 1)`. Normal UI transitions should remain around 160–240ms. Grouped viewport reveals may stagger by roughly 40–60ms. Respect `prefers-reduced-motion` for all nonessential movement. [1]

## 8. Audience-specific page identity

Each page must share the EMFOI system while still responding to its audience. Do not repeat the same hero-and-grid rhythm without a tailored artifact.

| Audience / route | Distinct field-guide artifact | Content emphasis |
| --- | --- | --- |
| Government | Buyer dossier or teaming route | Delivery posture, procurement-ready clarity, software/AI/staffing alignment. |
| Healthcare | Care-coordination map or delivery strip | Operations, systems, governance, and staffing around care realities. |
| AI governance | Evidence-and-governance map | Risk, documentation, oversight, responsible implementation. |
| Financial services & insurance | Delivery-focus sequence | Regulated operational context, usable systems, practical governance. |
| Manufacturing | Operational workflow lens | People, systems, workflow dependencies, specialized IT capacity. |
| Products | Numbered evidence panel | Product identity is visible, but the EMFOI parent system stays dominant. |

## 9. Navigation and content standards

The header should contain only top-level choices. A page that is already reachable inside a parent category should not automatically become a redundant header item. Government is reached through Industries and still remains available in the footer; future navigation changes should follow that logic. [3]

Every visible card, list row, or route option that looks actionable must have a meaningful destination. If a detailed destination does not exist, either create factual content based on approved services or do not show it as an active arrow. Never make only the arrow clickable while the rest of a large row appears interactive.

## 10. Non-negotiable “do not” list

| Do not introduce | Why it harms the system |
| --- | --- |
| Dark theme or neon/cyber styling | Conflicts with EMFOI’s warm, accountable public-service posture. |
| Purple gradients or generic SaaS gradients | Makes the site look interchangeable rather than ownable. |
| Excessive rounded cards | Weakens the document-map and keyline language. |
| Repeated left-side accent lines | Creates visual clutter without adding hierarchy. |
| Random logo/quadrant variations | Dilutes the shared system and makes pages feel unfinished. |
| Fake testimonials, metrics, logos, awards, staff bios, or case studies | Creates trust and compliance risk. |
| Long generic intro copy | Reduces decision clarity; use direct, approved language. |
| Layout changes without responsive validation | Risks broken mobile rhythm and touch usability. |

## 11. Future page-building recipe

When adding a new page, write the content structure first, then build the visual treatment.

1. Define the one visitor question the page answers and one primary action.
2. Select the page’s audience-specific field-guide artifact from Section 8.
3. Use the standard hero: eyebrow, precise DM Serif headline, supporting explanation, one action, and the shared quadrant treatment.
4. Add one orientation or proof module that gives the visitor useful structure.
5. Use full-card links for any capability or industry choices.
6. End with one decisive, non-generic CTA.
7. Check copy for supportable claims and leave unknown facts as an approved placeholder rather than inventing them.
8. Validate keyboard focus, mobile hierarchy, contrast, reduced motion, and top-of-page route scroll behavior.

## 12. Pre-release visual checklist

Before saving a future update, use this review table.

| Check | Pass condition |
| --- | --- |
| **Identity** | Warm paper, ink navy, Signal Blue, DM Serif Display, and Manrope are all used in their proper roles. |
| **Quadrant** | The shared mark has standard scale/position/stroke; it is absent if it adds no structural meaning. |
| **Hierarchy** | Headline, supporting copy, and CTA are visible without decorative competition. |
| **Spacing** | Major regions have deliberate breathing room; no section feels attached to the previous strip by accident. |
| **Navigation** | Top-level navigation is concise; every action-looking row is fully clickable and has a valid destination. |
| **Accessibility** | Text contrast, keyboard focus, touch targets, and reduced-motion behavior are maintained. |
| **Evidence** | No unapproved client, metric, award, testimonial, or credential claim appears. |
| **Responsive quality** | Desktop and mobile are both checked; decorative elements never obscure content. |

## 13. Future implementation prompt

Use the following prompt whenever you ask for a new EMFOI page or a major redesign pass:

> “Use `design.md` as the source of truth. Keep the EMFOI Civic Precision system: warm paper, deep ink navy, Signal Blue, DM Serif Display plus Manrope, editorial field-guide layout, fine document keylines, and the standardized quadrant motif. Build a page for **[audience / page purpose]** with one clear action, supportable copy only, full-card interactions, accessible keyboard behavior, and desktop/mobile validation. Do not introduce dark themes, generic gradients, excessive rounded cards, random quadrant variants, fake metrics, or unsupported customer evidence.”

## References

[1] [EMFOI Civic Precision design direction](./ideas.md)  
[2] [EMFOI current visual-system implementation](./client/src/index.css)  
[3] [EMFOI shared navigation and page-hero implementation](./client/src/components/SiteChrome.tsx)
