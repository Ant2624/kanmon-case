# Soft pre-check: funnel lift assumptions (simulated)

**Date:** 2026-07-30  
**All numbers simulated**, not Kanmon disclosed.  
**Companions:** [abandon sizing](kanmon-abandon-opportunity-sizing-20260729.md) · [summary](kanmon-funnel-volume-summary-20260729.md) · [lift Sankey](kanmon-funnel-lift-sankey-20260730.html)

---

## Base month (same sim as summary)

| Stage | N | Step CVR |
|-------|---|----------|
| Seen | 8,000 |, |
| Clicked | 960 | 12% of Seen |
| Started | 480 | 50% of Clicked |
| Submitted | 192 | 40% of Started |
| Funded | 51 | ~26.6% of Submitted |
| Financed $ | ~$912k | ~$18k blended ticket |

Abandon pot: **288** Start→Submit. Downstream Submit→Funded held fixed at **26.6%**.

---

## Two lift sources (don’t double-count stages)

| Source | Who | Stage moved |
|--------|-----|-------------|
| **A · Completers** | People who already start | Start→Submit ↑ |
| **B · New top-of-funnel** | Soft invite / clearer low-effort CTA pulls people who weren’t starting | Seen→Click and/or Click→Start ↑ |

Primary story for the lead bet: **A**. **B** is additive upside if soft check + honest copy exist. Under “visibility already solid,” don’t sell B as the main win.

---

## T-shirts

### A: existing starters complete more

Matches abandon medium default: Start→Submit **40% → 50%** (~+10 pts).

| Size | Extra submits from 288 | Extra funded | Extra financed $ / mo |
|------|------------------------|--------------|------------------------|
| Small | ~10% of abandon → submit (~29) | ~8 | ~$140k |
| **Medium ★** | ~17% (~48) | **~13–14** | **~$230–250k** |
| Large | ~30% (~86) | ~23 | ~$410k |

Mechanism story for medium: prefill + shorter path + clearer progress hits mid-form and “I’ll finish later” enough to move ~10 pts, same order of magnitude as prior abandon sizing.

### B: new entrants (assumption ranges)

Assumptions on top of base, **not** measured Kanmon lift.

| Size | Extra Clicks / mo | Extra Starts (50% of those clicks) | Extra Submits (use **lifted** 50% Start→Submit if A is on; else 40%) | Extra funded @ 26.6% | Extra $ @ $18k |
|------|-------------------|--------------------------------------|---------------------------------------------------------------------|----------------------|----------------|
| Small | +40 | +20 | +10 (if A on) / +8 | ~3 / ~2 | ~$50k / ~$40k |
| **Medium ★** | **+80** | **+40** | **+20** / +16 | **~5** / ~4 | **~$95k** / ~$75k |
| Large | +160 | +80 | +40 / +32 | ~11 / ~9 | ~$190k / ~$150k |

Where the +80 clicks come from (medium story): soft-pass campaigns + object CTAs that cut perceived form risk among people who already *see* financing but don’t click. Not cold acquisition outside Seen.

### Aggregate (A + B, medium ★, A on so Start→Submit = 50%)

| Piece | Extra funded / mo | Extra financed $ / mo |
|-------|-------------------|------------------------|
| A Completers | ~13–14 | ~$230–250k |
| B New entrants | ~5 | ~$95k |
| **Combined** | **~18–19** | **~$325–345k** |

Annualized rough: combined medium ~**$3.9–4.1M** financed / yr extra, still simulated.

**Kill if:** Start→Submit already &gt;~60%; soft→hard decline spike (false hope); partner won’t share data; click already maxed and soft CTAs add noise only.

---

## Sankey reading rules

- Stage-local denominators (parent stage), same spirit as the fixed partner×product Sankey.
- **Primary home:** embedded in the case workbench under `#funnel-lift` (Solve → Funnel lift / Numbers). Standalone HTML is a mirror.
- Side-by-side: **Baseline month (simulated)** vs **With soft pre-check (simulated lift)**. Highlight control dims one column without hiding the other.
- Punchline strip (always on for selected size): **New inflow · Saved completers · Total funded lift · $ lift**.
- “What changed” panel under the charts: (1) new top-of-funnel, (2) existing starters finish, (3) aggregate funded / $ lift.
- New inflow drawn as a blue band into Clicked, labeled **New +N** (soft invite, assumption).
- Completer lift drawn as thinner Abandon leak / higher Start→Submit % on the continuing path.
- Chrome says **simulated** in words, not cryptic tags as the only label.
- Medium default ≈ abandon sizing: +10 pts Start→Submit (~+13–14 funded from completers) plus assumed new clicks (~+5 funded). Combined ~+18 funded / ~+$330k financed / mo.

---

## What we are not claiming

- That Kanmon measured these lifts  
- That another company or D&B power this  
- That soft state equals funded amount  
