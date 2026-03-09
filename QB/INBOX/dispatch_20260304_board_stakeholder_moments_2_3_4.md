# Dispatch — Board Stakeholder Onboarding — Moments 2, 3, 4
**Date:** 2026-03-04
**From:** Steward (DavidOS)
**To:** divergent-networks QB
**Thread:** Board Stakeholder Onboarding
**Thread Type:** Product
**Thread Owner:** Steward (DavidOS)

---

## Thread Context

```
Thread:        Board Stakeholder Onboarding → A potential board member receives an email,
               understands the work, and joins the board with access to materials.
Type:          Product
Our fraction:  Moments 2 (First Impression) + 3 (Evidence) + 4 (Decision) — public site
Journey Steps: M2 = First Impression / M3 = Evidence / M4 = Decision
Chunks:        Design System (M2) 🟡 | Portfolio/Next.js (M2) 🔴
               Design System (M3) 🟡 | Portfolio pages (M3) 🔴 | FFA Schema (M3) 🔴
               Design System (M4) 🟡 | Portfolio/CTA (M4) 🔴 | Contact Form (M4) 🔴
Target health: Portfolio pages 🟢 | FFA schema adapted 🟢 | CTA + Contact Form 🟢
Relations:     Portfolio pages → also serve wq_018 (DN redesign as FFA portfolio).
               Contact form → POSTs to ops-hub (coordinate schema with ops-hub QB).
               FFA Schema → shared with all 13 projects (FFA QB owns the floor).
```

---

## The Story (NDD) — Full Arc

ops-hub QB sends the personalized email (M1). The stakeholder clicks. **They land here (M2).** They explore your portfolio and see the evidence (M3). They decide to join and click a CTA (M4). ops-hub QB handles the intake and board access (M5).

divergent-networks.com owns the discovery and decision. This is the heart of the thread — the three moments where the stakeholder decides whether Troy's work is worth their time.

---

## Moment 2: The First Impression — Your Fraction

**Narrative:** They land on divergent-networks.com and immediately understand who Troy is and what Divergent Networks does. They feel like they've walked into something real. **This is the landing page from the email link.**

**Landing page decision:** divergent-networks.com (the public site). Not a login screen. Evidence first, gate later.

**What you need to build:**
1. **Portfolio section** — the current site is Hero + Services + Work + Contact. "Work" needs to become a real portfolio: project cards, each linking to a project detail page.
2. **Board-aware context** — when a stakeholder arrives from the email, the site should feel appropriate for their level. (This can be as simple as a clean, credible, professional site — no special tracking needed for now.)

**Acceptance — Moment 2 🟢 when:**
- A stakeholder landing from the email immediately understands who Troy is and what he builds
- The portfolio section exists with at least 3-4 project entries

---

## Moment 3: The Evidence — Your Fraction

**Narrative:** They explore projects. They see real work, real depth — the research methodology, the systems thinking, the platform approach. FFA connections make the depth visible.

**What you need to build:**
1. **Project detail pages** — each project gets a detail page. Structure:
   - What it is (one paragraph)
   - Why it exists (opportunity / JTBD)
   - What makes it different (FFA-connected: desired outcomes, research angle)
   - Status / what's live
2. **FFA content layer** — surface FFA thinking on each detail page. Coordinate with FFA QB on the schema — they own the floor, you build the ceiling for DN context.

**Acceptance — Moment 3 🟢 when:**
- At least 3-4 project detail pages exist
- Each page surfaces FFA-linked content (JTBD, outcomes, why this project)
- A board stakeholder would understand the depth and quality of the work from these pages

---

## Moment 4: The Decision — Your Fraction

**Narrative:** They're in. They click "Join the board" or "I want to be involved." Simple. One action. Troy receives the signal.

**What you need to build:**
1. **CTA** — prominent on the portfolio page and/or project detail pages. Something like "Interested in being part of this?" or "Join the board."
2. **Interest form** — simple: name, email, "why you're interested" (optional). NOT a full auth form.
3. **Form submission → ops-hub** — form POSTs to ops-hub (or a shared Supabase table). Coordinate the schema with ops-hub QB before building.

**Acceptance — Moment 4 🟢 when:**
- CTA is visible and clear on the site
- Form captures name + email + optional note
- Submission reaches ops-hub (coordinate with ops-hub QB on receiving end)

---

## Note on wq_018 (DN Portfolio Redesign)

This thread's Moments 2-4 **are the portfolio redesign**. wq_018 is the same work. Execute them as one. When this thread is done, wq_018 is done. Don't build two separate things.

---

## Fractional Relations

| Your chunk | Shared floor with | Note |
|------------|------------------|------|
| Portfolio pages | wq_018 (DN redesign) | Same work. One execution. |
| FFA Schema | All 13 projects (FFA QB owns floor) | Coordinate schema with FFA QB before building detail pages. |
| Contact Form | ops-hub QB (they receive submissions) | Coordinate form schema. What fields? Where does it POST? |
| Design System | All DN pages | You own the DN design floor. Every chunk in your fraction uses it. |

---

## Dependencies on Other QBs

- **ops-hub QB** owns M1 (email) and M5 (access). Coordinate: form schema for M4 intake.
- **FFA QB** owns the FFA content schema floor. Coordinate before building M3 detail pages.
- Thread artifact: `david-os/QB/ARTIFACTS/thread_board_stakeholder_onboarding_20260304.md`

---

## Files
- Thread artifact (full grid + story): `/Users/troyeffner/Dropbox/DEV/david-os/QB/ARTIFACTS/thread_board_stakeholder_onboarding_20260304.md`
- WoW fractional vocabulary: `/Users/troyeffner/Dropbox/DEV/david-os/QB/ARTIFACTS/framework_fractional_vocabulary_20260304.md`
- NDD concept note: `/Users/troyeffner/Dropbox/DEV/david-os/QB/ARTIFACTS/concept_narrative_driven_design_20260304.md`

---

## QB Instructions
1. Open divergent-networks QB session (`/qb-start`)
2. Read thread artifact for full context + grid
3. Add M2, M3, M4 work items to divergent-networks WORK_QUEUE
4. This work supersedes / merges with wq_002 (portfolio redesign) and wq_018 (FFA-driven redesign) — they are now one thread
5. Start with portfolio page structure (M2) — unblocks M3 and M4
6. Coordinate with ops-hub QB on form schema before building M4 contact form
7. Coordinate with FFA QB on FFA schema before building M3 project detail FFA layer
8. Update thread artifact health at each session close
