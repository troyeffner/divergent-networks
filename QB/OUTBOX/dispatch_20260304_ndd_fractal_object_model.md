# DISPATCH — NDD Fractal Object Model
**Date:** 2026-03-04
**From:** divergent-networks QB
**To:** Coach → all QBs
**Priority:** high
**Decisions:** d_018, d_019

---

## What Happened

Troy arrived at the complete NDD object model. The product hierarchy, the workforce hierarchy, the research hierarchy, and the JTBD hierarchy are one structure. "Feature" is eliminated from the vocabulary entirely.

## The Model

```
PRODUCT:    Brand > Narrative       > Thread          > Touchpoint > Task
JTBD:              > Job Grouping   > Individual Job
WORKFORCE:  Coach > Coach/QB        > QB              > Contractor > Contractor
```

### Definitions

| Level | Product meaning | JTBD meaning | Workforce meaning |
|-------|----------------|--------------|-------------------|
| **Brand** | Domain identity (Home Ground, The Commons, NDD) | — | Coach holds the arc |
| **Narrative** | Collection of threads — a research story arc | Job Grouping — the research question that encompasses related jobs | Coach writes the story, assigns fractions |
| **Thread** | A JTBD that crosses surfaces — distributed, not confined to one screen | Individual Job — the specific JTBD | QB owns this — this IS the fraction |
| **Touchpoint** | Individual contact point where a thread surfaces on a specific screen/surface | — | Contractor builds this |
| **Task** | What happens at a touchpoint | — | Contractor executes this |

### Level Discipline

Each level has its own vocabulary, its own owner, its own decisions. Don't mix levels.

- **Narrative level** — think in research stories and job groupings. Not screens. Not tools.
- **Thread level** — think in individual jobs. Not surfaces. Not UI.
- **Touchpoint level** — think in surfaces and contact points. This is where screens live.
- **Task level** — think in actions. This is where UI interactions live.

If you're naming narratives and start referencing screens, you've dropped to Touchpoint level. "Feature" collapsed narrative, thread, and touchpoint into one word — that's why it's gone.

### Key Properties

1. **Fractal distributed** — threads cross surfaces. An individual job has touchpoints on multiple screens. The thread connects them.
2. **Temporal lifecycle at every level** — Narratives: ideation → execution → live. Threads: seed → active → complete. Touchpoints: seed → being tested → live screen. Tasks: future → designed → live flow.
3. **Cross-QB threads** — because threads cross surfaces, a single thread may involve multiple QBs. Coach coordinates across QB boundaries.
4. **One model** — product structure, work structure, and JTBD structure are the same hierarchy. One fractal structure describes what's being built, who's building it, and what jobs it serves.
5. **JTBD absorbed** — NDD doesn't bolt on JTBD. Narrative = Job Grouping. Thread = Individual Job. The hierarchy has a structural home for jobs at every level.
6. **{OOUX}** — this model produces an OOUX-compatible object model as output. {OOUX} is an NDD narrative, not a borrowed framework. NDD arrived at object language through narrative-driven research.

### What This Enables

- **Trace a job across the whole product** — see every surface where a thread has touchpoints
- **Find gaps** — threads with missing touchpoints reveal where the product doesn't yet serve a job
- **Identify hub screens** — surfaces serving many threads are high-value, high-complexity
- **Prioritize builds** — which touchpoint, for which thread, unlocks the most value
- **Distribute work fractionally** — each QB owns threads (individual jobs), each Contractor builds touchpoints

---

## The Model Applied to All Products

### Brand: Home Ground
**Coach:** TroyOS | **QB:** Home Ground
**Approach model:** Three Cards — separating affordability, sustainability, and livability into distinct assessments. Three Cards is the approach, not a narrative.

**Narrative: {Purchase Roof}** — active
Job grouping: "Know what I can actually afford"
Investigating what "affordable" actually means when you separate qualification from what you can sustain.

- Thread: "Know my actual purchasing ceiling" (individual job)
- Thread: "Understand total upfront cost picture" (individual job)
- Thread: "See the gap between qualification and real ceiling" (individual job)

**Narrative: {Decision Rehearsal}** — active
Job grouping: "Feel confident in my decision under pressure"
Investigating what happens to a purchase decision under pressure — before you commit, not after.

- Thread: "Learn what actually impacts my decision" (individual job)
- Thread: "Practice what-if scenarios before committing" (individual job)

**Narrative: {???}** — active, UNNAMED
Job grouping: "Know if I can sustain this month to month"
Investigating monthly sustainability as a distinct question from affordability.

- Thread: "See true monthly costs beyond the mortgage payment" (individual job)
- Thread: "Understand recurring obligations and hidden costs" (individual job)
- **ACTION: Home Ground QB to name this narrative**

**Narrative: {???}** — active, UNNAMED
Job grouping: "Know if this home supports the life I want"
Investigating life fit as a distinct question from what you can afford or sustain.

- Thread: "Assess whether this home supports my actual life" (individual job)
- **ACTION: Home Ground QB to name this narrative**

**Future Narrative: {Liquidity Framework}** — ideation
Job grouping: "Know what this purchase does to my financial flexibility"
Investigating cash and asset position before, during, and after purchase.

- Thread seed: "Know what this does to my financial flexibility"
- Thread seed: "See full cash position across the purchase timeline"
- Thread seed: "Compare liquidity impact across properties"

---

### Brand: Small Biz Operator
**Coach:** TroyOS | **QB:** Small Biz

**Narrative: {Where to Start}** — active
Job grouping: "Figure out what's actually broken"
Investigating how leaders name and prioritize dysfunction when they know something's wrong but can't point to it.

- Thread: "Name my actual challenges across 10 distinct areas" (individual job)
- Thread: "See where challenges compound each other" (individual job)
- Thread: "Know what to address first" (individual job)

**Narrative: {In Practice}** — active
Job grouping: "Build the skills to fix it"
Investigating how teams build real collaboration skills through doing — not through training decks.

- Thread: "Build practiced collaboration skills through structured exercises" (individual job)
- Thread: "Translate service design methodology into my team's language" (individual job)

**Future Narrative: {Entrepreneur Story Alignment Sprint}** — execution
Job grouping: "Align on our story as founders"
Investigating how founding teams of 2-12 clarify direction through narrative-driven coaching.

- Thread seed: "Align on our story as founders"
- Thread seed: "Clarify direction without consensus theater"

**Future Narrative: {Business Storytelling Studio}** — candidate
Job grouping: TBD
- **ACTION: SmallBiz QB to validate whether this is a real narrative or thread within {In Practice}**

**Future Narrative: {Module Promotion}** — pattern
Job grouping: "Grow the toolset from what works"
Testing whether service-led workshop patterns can graduate into self-service tools.

- Thread seed: "Grow the diagnostic from practice evidence, not product roadmap assumptions"

---

### Brand: The Commons
**Coach:** TroyOS | **QB:** Community Board (The Commons)

**Narrative: {Community Board}** — active
Job grouping: "Find and share what's happening in my neighborhood"
Investigating whether photo-native submission and pin-based curation can make hyperlocal community information discoverable at neighborhood scale.

- Thread: "Discover relevant events I'd otherwise miss" (individual job)
- Thread: "Submit community information from a real board" (individual job)
- Thread: "Curate and verify what's posted" (individual job)
- Thread: "Reach beyond my physical board's foot traffic" (individual job)

**Future Narrative: {Fairness Framework}** — ideation
Job grouping: "Know the ranking is fair"
Testing whether algorithmic ranking can reflect community values instead of engagement metrics.

- Thread seed: "Know the ranking is fair"
- Thread seed: "Governance reflects community values, with explicit fail conditions"

**Future Narrative: {Venue Discovery}** — ideation
Job grouping: "Discover places, not just events"
Extending from event listings to a persistent neighborhood venue graph.

- Thread seed: "Discover places, not just events"
- Thread seed: "Venue data grows from curated board submissions"

---

### Brand: NDD (Narrative Driven Design)
**Coach:** TroyOS | **QB:** FFA (NDD)

**Narrative: {Workflow Builder}** — active
Job grouping: "Coordinate the research workforce"
Investigating how research work gets distributed across specialists — thread management, fractional routing, and coordination across project boundaries.

- Thread: "Organize research into traceable arcs" (individual job)
- Thread: "Distribute work to the right specialist" (individual job)
- Thread: "Coordinate across project boundaries" (individual job)

**Narrative: {OOUX}** — active
Job grouping: "Make product structure and work structure one model"
Investigating how the fractal object model (Brand > Narrative > Thread > Touchpoint > Task) organizes both what's built and who builds it.

- Thread: "Product structure and workforce structure are one model" (individual job)
- Thread: "Trace any job across the whole product" (individual job)
- Thread: "Distribute work fractionally using the same hierarchy" (individual job)

**Future Narrative: {Cross-project Pattern Extraction}** — ideation
Job grouping: "Find patterns that recur across domains"
Testing whether NDD can surface research patterns across unrelated products.

- Thread seed: "Find patterns across Home Ground, SmallBiz, The Commons, tyfbaf"

**Future Narrative: {Self-hosted Deployment}** — ideation
Job grouping: "Let any team run NDD"
Packaging NDD as infrastructure any research team can run.

- Thread seed: "Another team can spin up an NDD instance for their domain"

**Future Narrative: {Workforce Intelligence}** — ideation
Job grouping: "The system gets smarter about matching work to people"
Testing whether the routing layer can learn from assignment patterns.

- Thread seed: "The capability graph improves work distribution over time"

---

### Brand: tyfbaf
**Coach:** TroyOS | **QB:** tyfbaf

**Narrative: {Trust Circles}** — concept
Job grouping: "Represent my real relationships digitally"
Investigating whether concentric rings of access can represent real relationship structures — contextual, layered, and portable.

- Thread: "Represent my actual relationship tiers" (individual job)
- Thread: "Control what different people see based on trust level" (individual job)
- Thread: "Make trust boundaries portable across platforms" (individual job)

**Future Narrative: {Pre-stay Handshake}** — ideation
Job grouping: "Align on boundaries before we're in the same space"
Investigating how to establish shared expectations before a stay or visit.

- Thread seed: "Align on boundaries before we're in the same space"

**Future Narrative: {Adaptive Guardrails}** — ideation
Job grouping: "Trust changes over time — the tool adapts"
Testing whether boundaries can adjust based on context and relationship evolution.

- Thread seed: "Trust changes over time — the tool should too"

---

## TroyOS Note (Coach-level)

**Jobs ≠ journey. Jobs ≠ page flow.**

The JTBD framework looks like it should map to the user journey and page flow — but that's misleading. A key enabler job may live on different pages. Same with all of the jobs. Threads (individual jobs) cross surfaces — that's the whole point of the distributed model. If you map jobs to pages 1:1, you've collapsed back to screen-first thinking. The thread is the organizing unit, not the page. Pages are just where touchpoints land. Multiple threads touch the same page. One thread touches multiple pages. The job map and the page map are different views of the same product.

---

## Action Required

### For Coach (TroyOS):
- Distribute this model to all QBs
- Update WoW baseline with d_018 vocabulary architecture (including JTBD mapping) and d_019 workforce mapping
- Add vocabulary enforcement: Brand, Narrative (= Job Grouping), Thread (= Individual Job), Touchpoint, Task — no "feature"
- Add level discipline enforcement: if a QB references screens at Narrative level, correct to Touchpoint level

### For each QB:
- Validate the narrative/thread mapping for your product — are the job groupings right? Are the individual jobs correctly scoped?
- Identify unnamed narratives (job groupings that exist but don't have names yet)
- Identify gaps: threads with missing touchpoints (jobs the product doesn't yet serve)
- Identify hub screens: surfaces serving multiple threads (high-value, high-complexity)
- Purge "feature" from all vocabulary — replace with appropriate level (narrative/thread/touchpoint)

### For Home Ground QB specifically:
- Name the sustainability narrative (job grouping: "Know if I can sustain this month to month")
- Name the livability narrative (job grouping: "Know if this supports the life I want")
- The three-card model identified these as distinct — they need narrative names

### For NDD QB specifically:
- {OOUX} is now an active narrative — track it
- The fractal object model IS the NDD schema extension — not separate from the research infrastructure
- JTBD mapping (Narrative = Job Grouping, Thread = Individual Job) is now canonical — validate across all product NDD instances
