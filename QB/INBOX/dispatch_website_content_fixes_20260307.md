# Dispatch: Website Content Fixes — Marketing Review + View Live Links
**From:** DavidOS Steward
**Date:** 2026-03-07
**Priority:** high
**Type:** Execution (two discrete fixes)

---

## Task 1 — Marketing Content Review (wq_247)

A full off-property review brief has been written and is ready for practitioner return. When the return comes back, the DN Custodian will receive keep/develop/prune items to act on.

**What the Custodian needs to know now:**
- The NDD detail page is the most stale content — it conflates NDD (knowledge substrate) with FWM (work management) and uses deprecated vocabulary ("QB profiles", "QB coordination", "Workflow Builder")
- Portfolio card for NDD in Work.tsx says "coordinates the workforce" — that's FWM's job, not NDD's
- "Color Coordination" vs "SatButtons" name mismatch — site says "Color Coordination", project is "SatButtons"
- Product categorization (Live/Concept/Seeds) needs review — are any in the wrong bucket?

**Action:** Hold for practitioner return. Then execute keep/develop items on the site content.

**Brief location (for Steward reference):** wq_247 — `david-os/QB/OUTBOX/offproperty_dn-marketing-content-review_20260307.md`

---

## Task 2 — "View Live" Links Bug Fix (wq_249)

### The Bug
Three "View live" links in `components/Work.tsx` point to raw Vercel deployment URLs. They should point to subpaths on divergent-networks.com.

| Product | Current (broken) | Target pattern |
|---------|-----------------|----------------|
| Home Ground | `https://livability-alpha.vercel.app` | `https://divergent-networks.com/[TBD]` |
| Small Biz Operator | `https://smallbiz-peach.vercel.app` | `https://divergent-networks.com/SmallBiz` |
| The Commons | `https://uticacommunityboard.vercel.app` | `https://divergent-networks.com/[TBD]` |

### Open Questions (need Troy's answer before executing)
1. Home Ground subpath — `/livability`? `/homeground`?
2. The Commons subpath — `/communityboard`? `/uticacommunityboard`?
3. Small Biz casing — `/SmallBiz` or `/smallbiz`?

### Implementation Steps
1. Get subpath confirmation from Troy
2. Add Vercel rewrites in `next.config.js` (or `vercel.json`) to proxy each app under its subpath
3. Update `liveUrl` values in `components/Work.tsx`
4. Verify links resolve correctly on deployed site

### Phase 2 (future — don't build yet)
Replace production links with sandbox/demo instances so portfolio visitors can interact without touching real data.

---

## Custodian Action
- Task 1: **Hold** — waiting on practitioner return
- Task 2: **Blocked** — waiting on Troy's subpath confirmation, then execute
