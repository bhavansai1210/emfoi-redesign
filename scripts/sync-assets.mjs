import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const liveOrigin = "https://emfoi-redes-dahzjzgz.manus.space";
const defaultTarget = "/home/ubuntu/webdev-static-assets/emfoi-local-assets";
const target = process.argv.includes("--public")
  ? path.join(projectRoot, "client", "public", "asset-backup", "local")
  : defaultTarget;

const assets = [
  ["emfoi-civic-fieldwork-hero_b35b1028.jpg", "/manus-storage/emfoi-civic-fieldwork-hero_b35b1028.jpg"],
  ["emfoi-hero-civic-systems_d308c3fa.jpg", "/manus-storage/emfoi-hero-civic-systems_d308c3fa.jpg"],
  ["emfoi-ai-governance_8c4ea3e7.jpg", "/manus-storage/emfoi-ai-governance_8c4ea3e7.jpg"],
  ["emfoi-ai-governance-review_e4514e20.jpg", "/manus-storage/emfoi-ai-governance-review_e4514e20.jpg"],
  ["emfoi-healthcare-staffing_5413be2a.jpg", "/manus-storage/emfoi-healthcare-staffing_5413be2a.jpg"],
  ["emfoi-healthcare-care-coordination_5bc96e0c.jpg", "/manus-storage/emfoi-healthcare-care-coordination_5bc96e0c.jpg"],
  ["emfoi-software-ux_277c53ba.jpg", "/manus-storage/emfoi-software-ux_277c53ba.jpg"],
  ["emfoi-software-delivery-studio_b4045e43.jpg", "/manus-storage/emfoi-software-delivery-studio_b4045e43.jpg"],
  ["emfoi-it-consulting-delivery_6d1fbfcc.jpg", "/manus-storage/emfoi-it-consulting-delivery_6d1fbfcc.jpg"],
  ["emfoi-government-program-briefing_78ee7de8.jpg", "/manus-storage/emfoi-government-program-briefing_78ee7de8.jpg"],
  ["emfoi-financial-operations-evidence_03eaace5.jpg", "/manus-storage/emfoi-financial-operations-evidence_03eaace5.jpg"],
  ["emfoi-manufacturing-operations-evidence_29b1da20.jpg", "/manus-storage/emfoi-manufacturing-operations-evidence_29b1da20.jpg"],
  ["emfoi-signal-mark_95fe1ace.png", "/manus-storage/emfoi-signal-mark_95fe1ace.png"],
  ["carehigh-logo_381d8353.svg", "/manus-storage/carehigh-logo_381d8353.svg"],
  ["dofiling-logo-approved_9637c5b5.png", "/manus-storage/dofiling-logo-approved_9637c5b5.png"],
  ["intel-technology-provider_96843177.png", "/manus-storage/intel-technology-provider_96843177.png"],
  ["capital-one_90dc3726.png", "/manus-storage/capital-one_90dc3726.png"],
  ["accenture_c1aaa1d5.png", "/manus-storage/accenture_c1aaa1d5.png"],
  ["universal-service-administrative-company_204e487f.png", "/manus-storage/universal-service-administrative-company_204e487f.png"],
  ["caterpillar_4bc0fca9.png", "/manus-storage/caterpillar_4bc0fca9.png"],
  ["oportun_3c9a9fde.png", "/manus-storage/oportun_3c9a9fde.png"],
  ["emfoi-capabilities-practice-dossier_b750dabc.jpg", "/manus-storage/emfoi-capabilities-practice-dossier_b750dabc.jpg"],
  ["emfoi-industries-operational-context_b1a250f2.jpg", "/manus-storage/emfoi-industries-operational-context_b1a250f2.jpg"],
  ["emfoi-insights-field-notes_161fb23c.jpg", "/manus-storage/emfoi-insights-field-notes_161fb23c.jpg"],
  ["emfoi-role-portrait-leadership_1778d07b.jpg", "/manus-storage/emfoi-role-portrait-leadership_1778d07b.jpg"],
  ["emfoi-role-portrait-delivery_54b0d31c.jpg", "/manus-storage/emfoi-role-portrait-delivery_54b0d31c.jpg"],
  ["emfoi-role-portrait-practice_d8301bce.jpg", "/manus-storage/emfoi-role-portrait-practice_d8301bce.jpg"],
];

await mkdir(target, { recursive: true });
const ledger = [];
for (const [filename, sourcePath] of assets) {
  const response = await fetch(`${liveOrigin}${sourcePath}`);
  if (!response.ok) throw new Error(`${filename}: HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(path.join(target, filename), bytes);
  ledger.push({ filename, source: `${liveOrigin}${sourcePath}`, bytes: bytes.length });
  console.log(`saved ${filename} (${bytes.length} bytes)`);
}
await writeFile(path.join(target, "SOURCE_URLS.json"), `${JSON.stringify({ generatedAt: new Date().toISOString(), target, assets: ledger }, null, 2)}\n`);
console.log(`\nSaved ${ledger.length} assets to ${target}`);
console.log("Use --public only for a local public-folder cache; production continues using managed storage.");
