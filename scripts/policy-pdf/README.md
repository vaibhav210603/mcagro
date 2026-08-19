# Policy letterhead PDFs

Generates a PDF for every drafted policy/disclosure (from
`src/pages/investors/policies/policyContent.ts` and `disclosureContent.ts`),
rendered on the MRC Agrotech letterhead (`letterhead.png`, full-page A4
background). Output goes to `public/policies/<slug>.pdf`.

## Regenerate after editing a policy

```bash
./scripts/policy-pdf/generate.sh
```

Requires `python3` with `reportlab` and `Pillow` installed, and the repo's
`node_modules` (for esbuild). The website links to these PDFs from the
Statutory Communication and Regulation 46 & 62 pages.
