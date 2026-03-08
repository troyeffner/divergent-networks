# Custodian Work Queue — divergent-networks

## Queue Rules
- Add all non-autonomous work here before execution.
- Include acceptance criteria and decision deadline.
- Keep statuses current.

## Status Legend
- `queued`
- `in_progress`
- `blocked`
- `completed`

## Items
| id | title | category | priority | owner | status | acceptance | decision_due | notes |
|---|---|---|---|---|---|---|---|---|
| wq_001 | Production launch — Next.js site + DNS + Vercel domain connection | launch | high | Custodian | completed | Site live at divergent-networks.com; DNS propagated; Vercel domain connected; OG tags verified | 2026-03-05 | DNS set 2026-03-03. A → 76.76.21.21. CNAME www → cname.vercel-dns.com. Vercel domains added. Propagation pending (up to 48h). |
| wq_002 | Portfolio redesign — brand-of-brands structure + detail pages | product_planning | high | Custodian | completed | Portfolio section with brand-of-brands tiers (Live/Concept/Seeds) + Client Work; 4 detail pages in investment pitch format; Philosophy section with belief statements + Substack link | 2026-03-04 | Core structure shipped: Work.tsx has 3 product tiers (6 products) + 3 client case studies. Detail pages at /work/[slug] for livability, smallbiz, tyfbaf, ndd. Remaining gaps broken into wq_005–wq_007. |
| wq_003 | Design Principles page — draft + publish | content | med | Troy | queued | Design principles page live on site; Troy has confirmed content is ready to publish | tbd | Source: TroyOS/QB/ARTIFACTS/design_principles_20260304.md — 9 principles, raw draft. Content still in flux. Revisit when Troy gives the go-ahead. Blocked on content readiness. |
| wq_004 | Article: The Thread You're Missing — NDD + fractal threads + silo problem | content | high | Troy | queued | Troy approves title + format; article written and ready to publish | tbd | Brief in INBOX: article_brief_narrative_methodology_20260304.md. Blocked on Troy title/format decision. Sources: concept_narrative_driven_design, concept_fractal_threads, concept_thread_mode, troy_wow_v1 — all in TroyOS/QB/ARTIFACTS/. Practice thread. |
| wq_005 | Community Board detail page | build | med | Custodian | completed | Detail page at /work/communityboard with investment pitch format matching other detail pages | 2026-03-04 | Added communityboard to projects object in work/[slug]/page.tsx. Flipped hasDetailPage: true in Work.tsx. Build passes. All 5 products now have detail pages. |
| wq_006 | NDD schema integration into detail pages | build | high | Custodian | blocked | Detail pages pull structured content from NDD schema instead of hardcoded data | tbd | Currently all detail page content is hardcoded in work/[slug]/page.tsx. Blocked on NDD Custodian delivering schema floor. Board Stakeholder thread M3 depends on this. |
| wq_007 | Per-product JTBD interest forms — fractal stakeholder intake (M4) | build | high | Troy | blocked | Each product detail page has an interest form driven by that product's NDD JTBD; visitors self-select stakeholder role; submissions reach ops-hub with product + JTBD context | tbd | Fractal thread (d_009): not one generic form — each brand's intake uses its own JTBD. Blocked on: (1) NDD Custodian JTBD definitions per product, (2) ops-hub Custodian form schema + endpoint. Dependencies: wq_006 (NDD schema) must deliver JTBD before forms can be built. |
| wq_008 | DISPATCH → Home Ground Custodian: Reword NDD JTBD — 23 homebuyer jobs too close to other sources | content | high | HG Custodian | queued | JTBD reworded to be distinct from existing home-buying research; slight reframe, not restructure | tbd | Troy flagged: HB-JOB-001 through HB-JOB-023 in Livability ndd_instance.json need rewording. Not a structural change — same jobs, distinct language. High priority for Home Ground Custodian. |
