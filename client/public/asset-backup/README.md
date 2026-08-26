# EMFOI Managed Image and Logo Backup

This manifest records the complete set of **21 images and logos currently referenced by the website from `/manus-storage/`**, plus **two distinct original EMFOI signal-mark source files** that are retained for brand backup completeness. The source files are preserved in a deployment-safe local collection at `/home/ubuntu/webdev-static-assets/emfoi-managed-assets-2026-08-26/` and in the managed archive below.

> Large media files are intentionally not duplicated into `client/public/`. Keeping the originals in managed storage preserves the live site and prevents static-project deployment/checkpoint failures.

## Managed archive

| Item | Verified value |
|---|---|
| Archive | `/manus-storage/emfoi-managed-assets-and-logos-2026-08-26_83ccbbc8.zip` |
| Asset count | 21 active managed assets + 2 original EMFOI signal-mark source files |
| Archive size | 6.0 MB |
| SHA-256 | `cdd93aaf517817333be97d70bfc10cfa69c7e9df8237a1628ed6e8a91c2ac2a3` |
| Live delivery | Existing `/manus-storage/` URLs remain unchanged |

## Live-site logo backup

The nine logo files currently loaded by the published EMFOI website are also preserved separately at `/home/ubuntu/webdev-static-assets/emfoi-live-logos-2026-08-26/`. This smaller bundle contains the active EMFOI signal mark, CareHigh and DoFiling logos, and the six approved client logos, together with a source-URL ledger and individual SHA-256 checksums.

| Item | Verified value |
|---|---|
| Downloadable repository release | [EMFOI live logo backup — 2026-08-26](https://github.com/bhavansai1210/emfoi-redesign/releases/tag/live-logo-backup-2026-08-26) |
| Release asset | `emfoi-live-logos-2026-08-26.zip` |
| Active logo count | 9 |
| Archive size | 154,377 bytes |
| Archive SHA-256 | `d6e3c4372ab0c359c71af94a1171b33f6b8a7711ce63b7c01bf6f8c7a109eb26` |
| Integrity records | `SOURCE_URLS.txt` and `SHA256SUMS.txt` inside the ZIP |

## Generated visual evidence and delivery-role portraits

Six generated source images are preserved outside the deployable static project at `/home/ubuntu/webdev-static-assets/emfoi-generated-visual-evidence-2026-08-26/` and are served to the website from managed storage. They support the Capabilities practice dossier, Industries operating-context route, Insights field-notes desk, and the clearly labeled illustrative delivery-role cards on the About page.

| Source asset | Website use |
|---|---|
| `emfoi-capabilities-practice-dossier.jpg` | Capabilities practice fieldwork panel |
| `emfoi-industries-operational-context.jpg` | Industries operating-context fieldwork panel |
| `emfoi-insights-field-notes.jpg` | Insights field-notes desk panel |
| `emfoi-role-portrait-leadership.jpg` | Illustrative leadership role card |
| `emfoi-role-portrait-delivery.jpg` | Illustrative program-delivery role card |
| `emfoi-role-portrait-practice.jpg` | Illustrative focused-capability role card |

> These role portraits are editorial illustrations for delivery disciplines; they do not represent named EMFOI employees or publish unapproved biographies.

## Verified inventory

| Asset group | Files preserved |
|---|---:|
| Hero and visual identity | 5 |
| Capability evidence imagery | 7 |
| Industry evidence imagery | 3 |
| Product logos | 2 |
| Approved client logos | 6 |
| **Total** | **23** |

### Asset filenames

`emfoi-civic-fieldwork-hero_b35b1028.jpg`, `emfoi-hero-civic-systems_d308c3fa.jpg`, `emfoi-signal-mark_95fe1ace.png`, `emfoi-signal-mark-source.png`, `emfoi-signal-mark-original-source.png`, `emfoi-ai-governance_8c4ea3e7.jpg`, `emfoi-ai-governance-review_e4514e20.jpg`, `emfoi-healthcare-staffing_5413be2a.jpg`, `emfoi-healthcare-care-coordination_5bc96e0c.jpg`, `emfoi-software-ux_277c53ba.jpg`, `emfoi-software-delivery-studio_b4045e43.jpg`, `emfoi-it-consulting-delivery_6d1fbfcc.jpg`, `emfoi-government-program-briefing_78ee7de8.jpg`, `emfoi-financial-operations-evidence_03eaace5.jpg`, `emfoi-manufacturing-operations-evidence_29b1da20.jpg`, `carehigh-logo_381d8353.svg`, `dofiling-logo-approved_9637c5b5.png`, `intel-technology-provider_96843177.png`, `capital-one_90dc3726.png`, `accenture_c1aaa1d5.png`, `universal-service-administrative-company_204e487f.png`, `caterpillar_4bc0fca9.png`, and `oportun_3c9a9fde.png`.

The small `optimized/` copies in this folder remain available for inspection. They are not used in place of the verified managed originals.
