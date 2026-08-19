// Bundled by esbuild to extract policy/disclosure content as JSON (no React pulled in,
// since the content files only `import type`).
import { policies } from '../../src/pages/investors/policies/policyContent';
import { disclosures } from '../../src/pages/investors/policies/disclosureContent';
process.stdout.write(JSON.stringify({ policies, disclosures }));
