# Kanmon. Prioritized backlog & trade-offs (P0–P2)

> Standalone draft. Once approved, folds into the workbench `ideas` tab right after "Where I would focus first."
> Practice volumes referenced below are from the funnel **simulation**, not Kanmon's real book.

## Sequencing thesis: convert existing demand first

Make sure the demand we're **already** getting converts before we spend to grow inflow. So the backlog plugs the down-funnel first (P0–P2), then boosts top-of-funnel, with one deliberate exception: **P0 spans both phases.** pre-approval estimate and shorter application finishes applications in-flow *now*, and the same partner-held data later powers a pre-approved top-of-funnel incentive. One build, two payoffs, which is why it's P0 even though it also serves the later phase.

## At a glance

| Pri | Item | Funnel stage | Impact | Effort | Risk (reg/credit) |
|---|---|---|---|---|---|
| **P0** | **pre-approval estimate and shorter application** *(chosen feature · spans top of funnel)* | Start → Submit | High | Med | Med |
| **P1** | Preventable-decline plugs (submission errors / bad-missing data) | Submit → Approve | Med–High | Low–Med | Low |
| **P2** | Abandonment quick recovery (save-&-resume, nudge back) | Start → exit | Med | Low | Low |

*Later horizon (not in this cut): pre-approved offer surfaced as a top of funnel incentive, reuses P0; right-moment surfacing, parked under assumption "financing is visible enough," reopen if diagnosis says otherwise.*

---

## P0, pre-approval estimate and shorter application  ⭐ chosen feature (spans both phases)

- **Load-bearing assumption (my theory, unverified):** partners already hold enough data to power a soft pre-auth / prefill (business identity + sales/deposit history via the connected platform). **P0 rests on this hypothesis, not a confirmed fact.** As we refine the presentation experience, calling out *which* partner-held fields are actually available (and getting consent to use them) is a key open item. If partners lack the data, P0 narrows to prefill-only and the soft check weakens.
- **Problem:** Starters quit mid-form; in the sim ~60% of starters never submit (~288 quit/month). The form asks for data the partner already holds.
- **Lever:** Use partner-held data to shorten the form (prefill) and run a light fit check (soft, never a hard "pre-approved" amount).
- **Outcome metric:** Complete-submit rate (Start → Submit). Sim: a ~+10 pt finish lift (≈ **+1,000 bps**; ~40% → ~50%, a **~+25% relative lift**) ≈ **~14 extra funded / ~$230–250k financed** that month.
- **Counter-metric / risk:** Soft-pull consent, adverse-action rules, partner data-share agreement; must not imply a guaranteed offer. Watch for lower-quality submits gaming the shorter form.
- **US privacy & consent:** partners need a privacy package before P0, disclosure clause, explicit in-flow consent, data-sharing agreement/DPA, and FCRA permissible-purpose + adverse-action handling (FCRA · GLBA · CCPA/CPRA · ECOA/Reg B). This **splits P0**: ship *prefill + consent* first (no report pull), layer the *soft check* once the partner-privacy package is in place. See [`kanmon-preauth-partner-privacy-guidance-20260730.md`](kanmon-preauth-partner-privacy-guidance-20260730.md).
- **Effort:** Med, needs partner data plumbing + consent UX; UW/DS own the actual credit box (we surface, we don't underwrite).
- **Sequence:** P0, highest single-lever finish-rate impact *and* the only item that also pays off in Phase 2, so it earns the first seat.
- **Feature / product-line:** Feature; product-line agnostic (helps every product's form).
- **Money touch:** Directly lifts funded originations by converting more in-flight starters.

## P1. Preventable-decline plugs

- **Problem:** Some SMBs complete the application and are still declined for **non-risk** reasons, bad or missing data, submission/format errors, KYB identity mismatches. That's a fully-intent customer lost at the last inch.
- **Lever:** Catch and fix fixable-data declines before final decision (validation, identity resolution, clarify-and-resubmit), without loosening credit policy.
- **Outcome metric:** Preventable-decline rate ↓ / Submit → Approve ↑ (funded recovered from non-risk declines).
- **Counter-metric / risk:** Low, no credit-box change; guardrail is keeping the conversion↔risk boundary clean (don't reclassify true-risk declines as "preventable").
- **Effort:** Low–Med, mostly validation + handoff/data-quality work.
- **Sequence:** P1, recovers customers **closest to funded** (they already finished), and it's a pure plug with minimal risk. Highest-confidence recovery after P0.
- **Feature / product-line:** Feature / ops; product-line agnostic.
- **Money touch:** Recovers funded that we're losing at the decision step for no risk reason.

## P2. Abandonment quick recovery

- **Problem:** SMBs start the application, leave, and never come back (sim: ~288 quit mid-form/month). Today there may be no save-and-resume or nudge-back path.
- **Lever:** Save-and-resume + a lightweight recovery nudge (bring them back to where they left off).
- **Outcome metric:** Recovered starts → completed submits (share of abandoners who return and finish).
- **Counter-metric / risk:** Low, respect contact/consent limits; lean on in-app and email first.
- **Effort:** Low, session persistence + a resume link/nudge.
- **Sequence:** P2, recovers in-flight demand too, but abandoners are further from funding and lower-intent than P1's completed-then-declined group, so it sits behind both.
- **Feature / product-line:** Feature; product-line agnostic.
- **Money touch:** Recovers a fraction of mid-form quitters into funded originations.

---

## Why this order (the trade-off story)

- **P0 first** because it's the biggest single-lever finish-rate move *and* the only item that also seeds Phase 2 (pre-approved top of funnel incentive), two payoffs for one build.
- **P1 over P2** because a preventable decline loses a customer who did *all* the work and got to the decision, closest to funded, clearest non-risk hole, lowest risk to plug.
- **P2 last of the three** because abandoners are further up the funnel and lower-intent; still cheap, still worth it, just lower expected recovery per fix.
- **Top-of-funnel comes after**, deliberately: no point paying to grow inflow until the funnel it lands in actually converts, and when we do boost it, P0's pre-check is already the asset that powers a pre-approved offer.

---

## Plain-language version

**The goal, plainly:** Kanmon makes money when a small business borrows through one of its partner apps. We want more of those loans to actually happen. Today, plenty of owners start an application and don't finish, or finish and get turned down for a fixable reason. Before we spend effort getting *more* people to start, let's make sure the people already trying get through.

- **P0. Fill in the boring parts of the form for them.** The partner app already knows a lot about the business (sales, connected bank). Use that to pre-fill the application and give a quick, soft "you look like a fit" signal, without promising a specific loan amount. Fewer questions means more people finish. Bonus: the same information later lets us tell a business "you're likely approved for about $X" *before* they even ask, which also helps bring new applicants in.

- **P1. Stop losing people over paperwork.** Some owners fill out everything and still get rejected, not because they're too risky, but because a field was wrong, a document was missing, or their business details didn't match up. Catch those before the final "no," ask them to fix it, and let them through. We're not changing *who* qualifies, just not losing good ones to typos.

- **P2. Let people pick up where they left off.** Lots of owners start the form and wander off. Save their progress and send a friendly nudge with a link back to the exact spot. Some come back and finish.

**Why this order, plainly:** Start with pre-fill (P0), it helps the most and does double duty. Then rescue the people who finished but got a fixable "no" (P1); they're the closest to done. Then bring back the people who quit halfway (P2). Only after that do we work on getting more people in the top of the funnel.

---

## AI angle, where AI is the lever

*AI assists surfacing and operations here; it does not own the credit box. Underwriting and data science keep the actual approve/decline decision, we keep the conversion↔risk boundary clean.*

- **P0. AI does the prefill and the soft read.** AI parses partner-held data and financial documents (statement/entity extraction) and maps it to the right form fields, so the owner confirms instead of types. A model produces the *soft* fit signal (never a hard amount), and AI drafts clear "here's what's still needed" prompts. Later, the same models turn that data into a pre-approved "~$X available" estimate for the top-of-funnel offer.

- **P1. AI sorts the "no"s.** For every decline, AI classifies it as a true-risk "no" (leave it to the model) vs. a fixable-data "no" (bad format, missing doc, identity mismatch), and flags likely-preventable rejects *before* the final decision, with a suggested fix. Identity resolution / entity matching is itself an AI/ML task that raises clean KYB pass-through.

- **P2. AI decides who, when, and how to nudge.** A propensity model scores which abandoners are worth bringing back and when; AI personalizes the message and picks the best *allowed* channel (lean in-app and email first). An in-form assistant can answer "why do you need this?" in the moment to stop drop-off before it happens.

**One-line AI-workflow note for the interview:** AI drafted and structured this backlog; the human judgment was the sequencing (plug-before-pump), ranking P1 above P2, and holding the line that AI surfaces and assists but does not underwrite.
