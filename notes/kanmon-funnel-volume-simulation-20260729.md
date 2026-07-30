# Kanmon: funnel volume simulation (base + drop-offs)

**Date:** 2026-07-29  
**Purpose:** Fictional but **realistic** monthly funnel for case reasoning.  
**Not Kanmon disclosed data.** Every number is **[SIM]** unless tagged **[FACT]** / **[INTERVIEW]**.

**Companion:** `kanmon-funnel-volume-summary-20260729.md`

---

## 0. Grounding (what we actually know)

| Signal | Label | Source |
|--------|-------|--------|
| Series A · ~21 people · small PM bench | **[INTERVIEW]** / team | the team + the team |
| Sole PM · full funnel · **low onboarding volume** · **little or no A/B testing today** | **[INTERVIEW]** | a conversation with the team |
| Partner/embedded-only GTM publicly | **[FACT]** | kanmon.com · partner portals |
| Products live: term · LOC · invoice · AP | **[FACT]** | kanmon.com |
| Soft pull · KYB · funds often ≤24–48h · apply often &lt;10–15 min | **[FACT]** | site / partner FAQs |
| Late $25 / NSF $35 | **[FACT]** | partner FAQs |
| “20+ clients” (third-party directory) | **[WEAK]** | Open Banking Tracker-style listings, treat as order-of-magnitude only |
| Exact partner count, MAU, originations, approval rate | **Unknown** |, |

**Industry anchors used for calibration (not Kanmon):**

| Anchor | Use | Source |
|--------|-----|--------|
| Digital lender stage drop-offs (ID 25–30%, docs 20–25%, consent 8–10%, offer 5–8%, e-sign 3–5%); cumulative drop often &gt;60% before decision | Shape **start→submit** leak | LendFoundry blog (indicative ranges) |
| Embedded example: 10k purchasers → 100 apps → 50 approve → 25 fund (~0.25% end-to-end of purchasers) | Reminder attach rates are **small** | Rohit Mittal / embedded lending essay |
| Prefill / in-portal apply can **3–4×** completions vs referral | Upside if Kanmon prefill/recovery works | Lendio × D&B case (embedded marketplace) |
| MSB embedded lending: high application friction (~47% cite apply issues) | Supports completions bet | PYMNTS Embedded Lending Opportunity 2024 |

---

## 1. Working assumptions for THIS simulation

Aligned with Anthony’s case framing:

| ID | Assumption |
|----|------------|
| **C1** | Low volume → every opportunity counts |
| **A1** | Optimize **funnel throughput** on live partners, not new logos first |
| **A2** | **Visibility is solid** (partners incentivized), so “Seen” is not the scarce step |
| **I1** | Highest PM leverage = **completions** + **preventable (non-model) declines**; cannot change risk models |

If A2 dies, re-run with a thinner “Seen” top.

---

## 2. Base world (monthly · fictional Series A third-party embed)

### 2.1 Partners

| Metric | **[SIM]** Base | Rationale |
|--------|----------------|-----------|
| Integrated / “live” logos | 22 | Weak public “20+” order-of-magnitude |
| **Originating** (funded ≥1 in 90d) | **10** | Power law, many quiet |
| Top 3 partners share of funded $ | **65%** | Typical embed concentration **[HYP]** |

### 2.2 Product shelf (live)

| Product | Role in mix | Typical ticket **[SIM]** | Tenure **[FACT]/[SIM]** |
|---------|-------------|--------------------------|-------------------------|
| **Invoice financing** | AR advance at object | $6k–$15k (use **$9k**) | 30/60/90 common **[FACT]** Cleo-like |
| **AP financing** | Pay supplier / PO | $8k–$25k (use **$14k**) | Short working-capital |
| **Term loan** | Lump growth / inventory | $25k–$80k (use **$45k**) | 6–12 mo **[FACT]** marketing bands |
| **LOC** | Buffer / draws | $10k–$40k limit; draw **$12k** | Ongoing |

**Factoring / BNPL:** roadmap **[INTERVIEW]**, **0** volume in base (not live).

### 2.3 Top-of-funnel (visibility assumed solid)

| Step | Definition | **[SIM]** / mo | Notes |
|------|------------|----------------|-------|
| **P0 Eligible presence** | SMB sessions where capital *could* show (partner has program on) | 40,000 | Across 10 originating partners |
| **P1 Seen** | Financing CTA / object affordance actually viewed | **8,000** | A2: 20% of eligible have a capital-relevant moment + see UI |
| **P2 Clicked** | Clicked CTA / “Get financing” / Finance invoice | **960** | 12% CTR of Seen, healthy for money UI **[HYP]** |

Under A2 we **do not** treat P0→P1 as the main leak. Diagnosis question: is Seen really ~8k or much lower?

---

## 3. Core funnel (monthly base case)

All counts are **SMB financing journeys** (one journey ≈ one apply attempt), not unique SMBs.

| Stage | Code | **[SIM]** N | Step CVR | Drop from prior | Dominant leak narrative |
|-------|------|-------------|----------|-----------------|-------------------------|
| Seen | P1 | 8,000 |, |, | Assumed solid |
| Clicked | P2 | 960 | 12.0% | 7,040 | No need / not now / trust |
| **Started apply** | P3 | 480 | 50.0% | 480 | Handoff to `*.kanmon.com`, surprise form, “do later” |
| **Submitted complete** | P4 | **192** | **40.0%** | **288** | **#1 leak under I1**, abandon, bank link, KYB friction, time |
| Decision rendered | P5 | 182 | 95.0% | 10 | Ops/queue/timeouts rare |
| **Offer (approved)** | P6 | **82** | **45.0%** | **100** | Credit box **[out of PM model control]** |
| Of declines (100): preventable data/process |, | **~18** | 18% of declines |, | Missing/wrong entity, incomplete bank, form errors **[I1]** |
| True risk / policy declines |, | **~82** | 82% of declines |, | Leave to UW/DS |
| Accepted offer | P7 | 57 | 70.0% | 25 | Price/terms surprise, cold feet |
| **Funded (origination)** | P8 | **51** | 90.0% | 6 | Docs/ACH fail, change mind |

**End-to-end:** Seen→Funded ≈ **0.64%** · Click→Funded ≈ **5.3%** · Start→Funded ≈ **10.6%** · Submit→Funded ≈ **26.6%**

**Read for the case:** At ~**50 funded / month**, every incomplete apply and every preventable decline is material (C1).

---

## 4. Speculative drop-off detail (where the 288 + 18 go)

### 4.1 Start → Submit (288 lost): PM-owned under I1

Calibrated to digital-lender stage ranges (LendFoundry), reweighted for **embedded + bank link + KYB** (SMB harder than consumer).

| Sub-step | Share of 288 | **[SIM]** N | Speculative cause |
|----------|--------------|-------------|-------------------|
| Bounce at handoff / login (`*.kanmon.com`) | 22% | 63 | New domain, invite email lag, session fail |
| Abandon mid-form (time / complexity) | 28% | 81 | &gt;10–15 min, unclear progress |
| Bank link friction / fail | 20% | 58 | Plaid decline, wrong bank, trust |
| KYB / entity / ownership docs stuck | 18% | 52 | Wrong legal name, no DUNS, owner ID |
| “Save for later” never returns | 12% | 34 | No recovery / weak reminder |

**Implication:** Recovery + prefill + entity lookup (e.g. D&B-style) + handoff UX attack the biggest buckets without touching risk models.

### 4.2 Decision declines (100): split preventable vs true risk

| Type | Share | **[SIM]** N | Owner |
|------|-------|-------------|-------|
| True credit / policy | 82% | 82 | UW / DS, **don’t claim to fix via UX alone** |
| Preventable (incomplete/wrong data that would have cleared soft gates) | 18% | 18 | PM + ops tooling + validation |

**Note:** 18% preventable is a **guess** for case storytelling. Real split needs decline-reason taxonomy.

### 4.3 Offer → Accept → Fund (25 + 6)

| Sub-step | **[SIM]** N | Speculative cause |
|----------|-------------|-------------------|
| Offer not accepted | 25 | Sticker shock, wrong product, slow decision (&gt;3 BD), unclear terms |
| Accept but not funded | 6 | Agreement friction, ACH setup, legal tweak delay |

Decision **experience** (status, clarity, time communication) helps here, still not model weights.

---

## 5. Mix by product (of 51 funded / mo)

| Product | Share | Funded N | Avg ticket | Funded $ |
|---------|-------|----------|------------|----------|
| Invoice | 40% | 20 | $9,000 | $180k |
| AP | 30% | 15 | $14,000 | $210k |
| Term | 20% | 10 | $45,000 | $450k |
| LOC draws | 10% | 6 | $12,000 | $72k |
| **Total** | 100% | **51** |, | **~$912k / mo** |

**Annualized funded $ [SIM]** ≈ **$11M**, plausible order-of-magnitude for a thin Series A third-party book; **not** a claim about Kanmon’s actual book.

Invoice/AP dominate **count**; term dominates **dollars**, matches “embedded-native” vs lump-sum product stories.

---

## 6. Funnel by product (sketch)

Same stage CVRs unless noted, product differences **[SIM]**:

| Product | Click→Start | Start→Submit | Submit→Offer | Offer→Fund | Why different **[HYP]** |
|---------|-------------|--------------|--------------|------------|-------------------------|
| Invoice | Higher | Medium | Medium-high | Higher | Object-tied need; 30/60/90 clear |
| AP | Medium | Medium | Medium | Medium | Bill pay urgency |
| Term | Lower | Lower | Lower | Medium | Bigger commitment, more UW |
| LOC | Medium | Medium | Medium | Lower first draw | Limit accept ≠ draw |

For case talk: **fix completions once** lifts all products; invoice may show ROI fastest under object workflows (Cleo-like).

**Interactive:** [`kanmon-funnel-flow-visual-20260729.html`](kanmon-funnel-flow-visual-20260729.html), **Partner × product only** (Seen→Funded continuing path; leak sinks sit **under each stage column**, no click / abandon pre-start / mid-apply / preventable / true risk / no accept / unfunded). **No click de-emphasized for this case** under A2 (visibility assumed solid; kill/reopen if A2 dies, not a claim partners never have a surface problem). Focus: mid-apply, preventable, continuing path. Filters narrow within that matrix; default = full shelf. Partner shelves **[FACT]**; Seen/CVRs **[SIM]** power-law under A2/I1. Factoring/BNPL = 0 in base (roadmap).

---

## 7. Settled opportunity size + sensitivity

**Lock for case talk [SIM]** (doc base, not Sankey partner×product skew):

| Pot | Journeys | Gross addressable (100% @ downstream CVR) | Settled capture | Extra funded $ / mo |
|-----|----------|---------------------------------------------|-----------------|---------------------|
| Abandon **before submit** (Start→Submit) | 288 | ~77 funded · **~$1.4M** (Submit→Fund 26.6% × ~$18k) | +10 pts CVR (40%→50%) | **~$230–250k** (~+13–14 funded) |
| **Preventable** decline (post-submit) | ~18 | ~11 funded · **~$200k** (Offer→Fund 62% × ~$18k) | Halve (18→9) | **~$100–110k** (~+6 funded) |
| Combined |, | ~$1.6M ceiling | Both | **~$330–360k** (~+19–20 · ~36% book) |

Gross = ceiling. Settled = credible feature bet under low-N / no A/B. Completions pot is ~**7×** preventable on $; preventable still worth shipping on the same prefill/validation stack.

Holding credit box (45% offer rate) and accept/fund fixed:

| Intervention **[SIM]** | Mechanism | Extra submits | Extra offers | Extra funded / mo | Extra funded $ / mo (blended ~$18k) |
|------------------------|-----------|---------------|--------------|-------------------|-------------------------------------|
| +10 pts Start→Submit (40%→50%) | Recovery + UX | +48 | +22 | **+14** | **~$250k** |
| Cut preventable declines 18→9 | Prefill / validation / entity match |, | +9 | **+6** | **~$110k** |
| Both |, |, |, | **~+20** | **~$360k** |

Vs. “add Moments CTR +2 pts on Seen” under A2 (visibility already solid): +160 clicks → ~+8 funded if CVRs hold, **smaller than completions** in this base. If A2 is wrong (Seen is 2,000 not 8,000), surface wins again.

---

## 8. How to use on the case

1. Say explicitly: **illustrative model**, not their data.  
2. Ask / imply diagnosis: confirm Seen volume and Start→Submit and decline reasons.  
3. Proposal language: “At ~50 funded/mo, lifting Start→Submit 10 pts is ~14 originations, material under low N.”  
4. Keep factoring/BNPL off the volume sheet until live.  
5. Pair with Prove: instrument stages P2–P8 + decline taxonomy (preventable vs risk).

---

## 9. Open questions for the hiring manager / data

1. Monthly: Seen / Start / Submit / Offer / Fund (even rough)?  
2. What % of declines are “incomplete file” vs true risk?  
3. Top partner share of originations?  
4. Start→Submit by partner (self-hosted page quality)?  

---

## Sources (calibration)

- a conversation with the team 2026-07-29 (low volume, no A/B)  
- kanmon.com + partner FAQs (products, timing, fees)  
- LendFoundry, digital lender drop-off stage ranges  
- Rohit Mittal, embedded lending funnel scale illustration  
- Lendio × Dun & Bradstreet, prefill / embedded completion lift  
- PYMNTS. Embedded Lending Opportunity (MSB apply friction)
