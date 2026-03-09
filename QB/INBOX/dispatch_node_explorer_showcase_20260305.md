# Dispatch: Node Explorer — Keystone Showcase on divergent-networks.com
From: Coach
To: DN QB
Date: 2026-03-05
Priority: HIGH
Thread: Node Explorer → NDD Production + DN Showcase
Connects to: wq_071 (DN interactive fractal surface), wq_018 (DN redesign)
Depends on: NDD QB building NodeExplorer.tsx first (dispatch_node_explorer_component_20260305.md)

---

## What This Is

Troy wants the Node Explorer on divergent-networks.com as a **Keystone feature** — a public-facing interactive demonstration of the NDD philosophy. This is how the methodology becomes visible, tangible, and compelling to stakeholders visiting the site.

**Prototype to reference:**
`/Users/troyeffner/Dropbox/DEV/TroyOS/QB/ARTIFACTS/visual_node_explorer_20260305.html`

---

## The Brand Story

The Node Explorer on DN.com shows visitors:
- How Narratives → Threads → Jobs → Tasks → Objects all connect
- How clicking any node reveals a fractal that sprawls two levels deep
- How toggling categories shows the invisible architecture beneath any project

The copy framing: **"Every project is a network. Most teams can only see their own node."**

This is the Keystone section — it sits between the Services section and the Work/Case Studies section. It replaces the static diagram with something alive.

---

## DN QB Fraction — What to Build

### Prerequisites (wait for NDD QB)
- `NodeExplorer.tsx` React component from NDD QB
- `explorerDemoData.ts` curated dataset

### Step 1: Section component
Create `components/KeystoneExplorer.tsx` — wraps NodeExplorer with:
- Section header: "The Network Behind the Work"
- 2-3 sentence intro (see copy below)
- The interactive graph (using demo data — curated, not live NDD instance data)
- Subtle call-to-action beneath: "Want to see this applied to your organization? →"

### Step 2: Curated demo data
Use `explorerDemoData.ts` from NDD QB. If not yet available, use the hardcoded data from the prototype directly. The DN showcase always uses fixed demo data — not a live NDD instance.

### Step 3: Wire into page.tsx
Add `<KeystoneExplorer />` to `app/page.tsx` between `<Services />` and `<Work />`.

### Section copy

**Header:** The Network Behind the Work

**Body:**
Most research projects look like a list of tasks. They're actually a network — narratives connecting to threads, jobs connecting to objects, tasks connecting back to the questions that started everything.

This is what a research system looks like when you can see all of it at once.

**Instructions (subtle, below graph):**
Click any node. Toggle categories. Two levels deep.

**CTA:** Ready to map your research network? [troy@divergent-networks.com]

---

## Visual Fit

- Full-width section, dark background (matches existing site)
- Graph height: ~500px on desktop, scrollable on mobile
- Category toggle buttons use brand accent color (#7eb8a4) as base
- Node colors: use existing brand palette extended (prototype has the colors)
- Info panel: bottom-left, same dark glass style as rest of site

---

## Output Expected

1. `components/KeystoneExplorer.tsx` — section wrapper with copy + graph
2. `app/page.tsx` updated — KeystoneExplorer added between Services and Work
3. Screenshot at desktop (1280px) + mobile (375px)
4. Return package to Coach OUTBOX: component location, screenshot, any copy changes made

