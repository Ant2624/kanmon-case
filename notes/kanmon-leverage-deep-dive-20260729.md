# Kanmon case: leverage deep dive (from Anthony’s raw notes)

**Date:** 2026-07-29  
**North star:** Partner-sourced **funded** originations (Series A · sole-PM · low volume).  
**Primary source:** [`kanmon-case-raw-notes-organized-20260729.md`](kanmon-case-raw-notes-organized-20260729.md)  
**Grounding:** framing guide · interview debrief · incentives · source-check · revenue model · exploration park  
**Companion:** [`kanmon-leverage-summary-20260729.md`](kanmon-leverage-summary-20260729.md)

**Labels:** **[NOTE]** Anthony’s raw notes · **[interview. Kanmon PM]** · **[FACT]** public · **[HYP]** · **[ASSUMPTION]** source-check, not proven · **[ABSENT-PUBLIC]**

---

## Working constraints & assumptions (read first)

### C1 · Every opportunity counts **[NOTE]** + **[interview: Kanmon PM]**

> If originations are low volume, every opportunity counts.

| Implication | Case posture |
|-------------|--------------|
| Don’t optimize for elegant experiment velocity | Optimize for **capturing each eligible funded path** |
| High cost of missed handoff / apply drop / silent partner | Prefer **recover lost opps on existing flow** over broad net-new experiments |
| Instrumentation still matters | Know where each opp dies; ship via **judgment + before/after**, not multi-cell A/B |
| Sequencing | Fix leaky pipes before net-new product lines (factoring / BNPL) |
| Outcome framing | “**Save N potential originations** per period”, not “+X% at scale” |

### A1 · Goal = funnel throughput, not net-new logos **[ASSUMPTION]**

> We need **more people through the funnel** (start → offer → accept → fund), not primarily invent net-new partner logos.

| | |
|--|--|
| **Why plausible** | Case prompt mixes partners-live + surface + convert + product fit; interview sole-PM already owns onboard, but **funded volume on live partners** is the scarce scoreboard under low N. |
| **Implication** | Weight **in-funnel conversion** (apply completion, handoff to `*.kanmon.com`, KYB/bank-link, offer clarity, time-to-decision, accept→fund). Demote “add logos” as primary case bet. |
| **Kill A1** | If diagnosis shows **zero/near-zero live partners able to originate** (onboard unfinished / API broken), partners-live returns to top, throughput has nothing to run through. |

### A2 · Visibility volume assumed solid **[ASSUMPTION]**

> Partner **visibility volume is assumed solid** because partners are **assumed incentivized** to support their own customers with liquidity (rev share / retention / helping SMBs).

| | |
|--|--|
| **Why plausible** | Partners get rev-share / bps pitch **[FACT]** LinkedIn + retention / no credit risk story; Cleo-style object CTAs exist on at least one deep partner **[FACT]**. |
| **Implication** | **Deprioritize pure “more CTAs / Capital Moments upstream”** unless diagnosis shows visibility is actually weak. Start from **funnel throughput**. |
| **Kill A2 (visibility)** | Quiet partners with **buried Financing tabs**, no object CTAs, or impression data showing eligible SMBs never see capital → surface / Moments returns to top. Under low volume, a weak surface is *more* costly, not less, but only if A2 fails. |
| **Kill A2 (incentive sub-claim)** | Brand risk / support burden / invisible econ can make partners **not** push despite rev share (incentives deep dive §4). If partners *won’t* surface despite capability, fork is **incentive/ops**, not louder CTAs alone. |

**Operator rule:** Rank below assumes **A1 + A2 hold** and follows **Anthony’s instinct (I1)**. Keep kill criteria on the tongue. If A1/A2 die mid-diagnosis, re-rank before locking Bet.

---

## Anthony’s instinct: operator working bet **[I1]**

> **Highest leverage = application completions** (get more people to **finish** apply).  
> **Then decisions**, but he **assumes he cannot influence risk models** (UW/DS own the box).  
> **Within decisions:** avoid **unnecessary rejections** from inaccurate info, missing details, bad pre-fill, confusing forms, **not** by loosening credit policy. Non-risk / data-quality / process declines = holes to plug.

| Implication | Case posture |
|-------------|--------------|
| Top of ranking | Apply UX · recovery/resume · partner-data pre-fill · validation before submit · soft checks that cut incomplete/bad apps · handoff friction to `*.kanmon.com` |
| Secondary | Decision *experience* (clarity, time-to-decision comms, offer sheet), **no model weight changes** |
| Explicitly out of scope for this bet | Changing risk model / widening credit box |
| Visibility / Moments | Stays lower under A2 unless kill criteria fire |
| Outcome framing | ↑ **complete submits** · ↓ **preventable declines** · ↑ **funded among already-in-box** applicants |

**Evidence alignment:** Raw notes (recovery, simplify apply, non-risk rejection holes, soft pre-auth/pre-fill) **[NOTE]** · UW+DS own models; PM surfaces into offers **[interview]** · does **not** contradict I1.

**Kill I1 (completions-first):** Data shows complete-submit CVR already excellent and the binding leak is true credit declines or capital, then partner with Credit/Capital; still don’t claim owning models.

---

## Money equation (what leverage must touch)

```
Partner funded originations ≈
  partners live × surface × eligible start × offer→accept→fund × product fit
  bound by credit box × capital
```

**Category money:** `funded $ × yield − losses − partner share − CoF`  
Under **C1**: each incremental funded path on an already-live partner is high-value; vanity CVR without fund is waste.

---

## Note themes → lever map

| Anthony’s note theme | Lever(s) | Under A1+A2 |
|----------------------|----------|-------------|
| **1. Numerator / denominator**, funded = UX + recovery + credit; denom = see/candidates | **start** · **offer/fund** · **credit box** · (denom → **surface**) | Move **numerator** first; denom demoted while A2 holds |
| **2. Funnel drop-off**, see→click→start→submit; non-risk declines | **start** · **offer** · instrument | Obsess each step; **L3** for non-risk plugs |
| **3. Application recovery / abandon pickup** | **start** | **L1 #1** under C1 |
| **4. Partner show-logic**. “if I don’t need funds, do I see Kanmon?” | **surface** · **incentives** | **Conditional**, rises if A2 dies |
| **5. Soft pre-auth / partner data pre-fill** | **start** · **offer** (Credit/Legal) | **L2 #2** |
| Impressions / CTA views / land / success reporting | Instrument | **L5** parallel now |
| Who’s attempting & not converting | **start** · **product fit** | Now |
| Multi-product optionality across lines | **product fit** | Mid; router Feature |
| Capital / regulatory / credit models as judgment lenses | **capital** · **regulatory** · **credit box** | Constraints, not default MVP |

---

## Scoring rubric (sole-PM · Series A · low N)

| Dimension | High score means… |
|-----------|-------------------|
| **Impact** | Moves **funded** $ or saves countable lost funded paths |
| **Effort** | Thin PM bench can ship 4–6 wk wedge (eng+Legal+Credit gated ok if scoped) |
| **Risk** | Credit / regulatory / partner brand controllable |
| **Evidence** | Grounded in **[NOTE]** + interview/public |
| **Label** | Prefer **Feature** on existing shelf |
| **Sequence** | Now = leaky pipe; After unlock = net-new / product line |

Scores: **H / M / L** (relative).

---

## Top 5 leverage ranking (I1 · A1+A2 · C1)

*Aligned to Anthony’s instinct: completions first → preventable (non-risk) declines → decision experience, **never** “change the model.”*

### #1: Application completion (finish apply)

| | |
|--|--|
| **Plain English** | Get more SMBs who enter the path to **submit a complete application**, clearer forms, less handoff friction to `*.kanmon.com`, abandon resume/recovery. |
| **Impact** | **H**. I1 #1; under C1 each lost mid-apply is a burned funded path |
| **Effort** | **M**. UX + resume flows; email/in-product (SMS blocked **[interview]**); sole-PM thin wedge |
| **Risk** | **L–M**, nag/UDAAP if recovery pushy; stay soft |
| **Evidence** | **I1** · **[NOTE]** recovery, simplify apply, portal ownership · bank-link abandon **[FACT]** · UX strength **[interview]** |
| **Feature vs product-line** | **Feature** (start / UX) |
| **Sequencing** | **Now** |
| **Money touch** | ↑ complete submits → more in-box decisions → funded |
| **Kill** | Complete-submit already excellent; leak is post-submit true risk or capital |

### #2: Prefill, validation & soft checks (quality before submit)

| | |
|--|--|
| **Plain English** | Partner-data pre-fill + validate-before-submit + soft checks so apps that complete aren’t incomplete, inaccurate, or missing details that cause **preventable** declines. |
| **Impact** | **H**, raises completions *and* cuts data-quality / process fails (I1 “within decisions”) |
| **Effort** | **M–H**, partner data share + Legal/Credit on soft-check copy; one pilot partner |
| **Risk** | **M**, consent; never hard “pre-approved” without Credit |
| **Evidence** | **I1** · **[NOTE]** soft pre-auth / pre-fill · soft pull **[FACT]** · F5/F15 park |
| **Feature vs product-line** | **Feature** (start) |
| **Sequencing** | **Now** with #1 on one partner |
| **Money touch** | ↑ submit quality → ↓ preventable declines → ↑ funded in-box |
| **Kill** | Prefill rich and preventable-decline rate already ~0 |

### #3: Preventable decline plugs (data / process, not credit policy)

| | |
|--|--|
| **Plain English** | Find declines caused by bad/missing info, KYB/process gaps, or form confusion, fix those holes. **Do not** loosen the credit box or change model weights. |
| **Impact** | **H**. I1 decision layer without owning UW/DS |
| **Effort** | **M**, ops + decline taxonomy + UX; KYB/KYC/UCC tools in PM scope **[interview]** |
| **Risk** | **M**, must separate preventable vs true-risk with Credit; never blur into box widening |
| **Evidence** | **I1** · **[NOTE]** non-risk rejection = plug hole · UW+DS own models **[interview]** |
| **Feature vs product-line** | **Feature** (ops / offer path); box = **out of scope** for this bet |
| **Sequencing** | **Now** once decline reasons are labeled |
| **Money touch** | ↓ preventable declines → ↑ funded among already-in-box |
| **Kill** | Almost all declines are true risk; then only decision *experience* (#4) remains on offer side |

### #4: Decision experience (clarity · status · offer sheet)

| | |
|--|--|
| **Plain English** | While UW/DS decide: clear status, time-to-decision expectations, readable offer sheet, improve the **experience**, not the **model**. |
| **Impact** | **M–H**, reduces wait-abandon and confused declines of good offers |
| **Effort** | **M**, copy/UX; PM surfaces model outputs with DS **[interview]** without owning scores |
| **Risk** | **L–M**. Legal on offer/decline language |
| **Evidence** | **I1** secondary · offers ≤3 BD partner-specific **[FACT]** · T10 park |
| **Feature vs product-line** | **Feature** |
| **Sequencing** | **Now/next** beside #3 |
| **Money touch** | ↑ accept among offered-in-box; protect trust |
| **Kill** | Experience fine; leak is accept→fund or capital |

### #5: Opportunity ledger (complete / preventable / funded-in-box)

| | |
|--|--|
| **Plain English** | Count complete submits, preventable vs true-risk declines, and funded among in-box applicants, so every opp is visible under C1. |
| **Impact** | **H unlock**, proves I1; judgment + before/after (not multi-cell A/B) |
| **Effort** | **L–M**, events + MCP-style weekly metrics **[interview]** |
| **Risk** | **L** |
| **Evidence** | **C1** · **[NOTE]** impressions / attempt≠convert · T8/T13 |
| **Feature vs product-line** | **Feature / ops** |
| **Sequencing** | **Parallel now** with #1–#3 |
| **Money touch** | Directs PM time; Prove = ↑ completes · ↓ preventable · ↑ funded in-box |
| **Kill** | Over-build experiment platform when N can’t support it |

**Spoken Top 5:** finish apply → prefill/validate → plug preventable declines → decision experience → ledger.  
**Out of scope:** risk model / credit box changes. **Conditional:** Moments / show-logic if A2 dies. **Later:** accept→fund polish if diagnosis shows last-mile leak after in-box offers.

### Adjacent research · Entity lookup / D&B DUNS (F16): ties to #1–#3 completions bet

| | |
|--|--|
| **Anthony instinct** | Completions + avoid unnecessary rejections from inaccurate/missing details, **not** changing risk models. |
| **Why it sits here** | KYB is on the apply/UW path (ops runs KYB; PM with UW/DS **[interview]**). Bad entity identity → incomplete KYB, duplicate/mismatch, preventable declines, same leak family as **#1 complete**, **#2 prefill/validate**, **#3 preventable plugs**. |
| **Vendor fact (light)** | D&B Direct+ Identity Resolution matches free-text business records → D-U-N-S + confidence; Enrich / Onboard add firmographics & CDD layers **[FACT]** vendor. “Instant DUNS” marketing ≠ always mint-new; often match-to-existing / investigation. **Kanmon uses D&B: unknown, do not claim.** |
| **Outcome framing** | ↑ complete KYB · ↓ preventable identity rejects · faster time-to-decision, among already-in-box. |
| **Risks** | Cost · vendor lock · privacy · match error · **not** a substitute for full KYB/AML. |
| **Status** | `interesting` / `research`, park **F16**; 1-pager `kanmon-dnb-duns-exploration-20260729.md`. Promote only if Q17 (identity/KYB share of stalls) lights up. |

---

## Conditional / demoted (assumption-gated)

| Lever | Status under A1+A2 | When it returns |
|-------|--------------------|-----------------|
| **Capital Moments / upstream CTAs** | **Demoted** (A2) | Kill A2: buried tabs / no impressions / eligible never see |
| **Partners-live / new logos** | **Demoted** (A1) | Kill A1: no usable live inventory |
| **Quiet-partner incentive / rev-share felt / SPIFs** | Parked until “works but unused” | Kill A2 incentive sub-claim |
| **Product router** | Mid. Feature | Wrong-SKU regret shows in accept/default |
| **Factoring / BNPL** | Product line, after pipes | the hiring manager steers or unmet need requires new SKU |
| **SMS** | Secondary, Legal-gated | After email recovery; a messaging vendor FS blocked |
| **D2C** | Strategic no | Off case metric |

**Under C1, if A2 dies:** Moments / upstream visibility jumps to **#1 or #2**, scarcity makes missed surface *more* valuable, not less. Assumption demotion ≠ “Moments is bad.”

---

## Scorecard (summary)

| Rank | Lever | Impact | Effort | Risk | Label | Seq |
|------|-------|--------|--------|------|-------|-----|
| 1 | Application completion (finish apply) | H | M | L–M | Feature | Now |
| 2 | Prefill / validation / soft checks | H | M–H | M | Feature | Now (1 partner) |
| 3 | Preventable decline plugs (not credit box) | H | M | M | Feature | Now |
| 4 | Decision experience (no model change) | M–H | M | L–M | Feature | Now/next |
| 5 | Ledger: completes / preventable / funded-in-box | H unlock | L–M | L | Feature/ops | Parallel now |
|, | Accept → fund polish | M–H | M | L–M | Feature | After in-box path healthy |
|, | Capital Moments (upstream) | H *if A2 fails* | M | M brand | Feature | After kill A2 |
|, | Risk model / credit box change |, |, |, | **Out of scope (I1)** | Credit owns |
|, | Factoring/BNPL | H new book | H | H | Product line | After unlock |

---

## Kill criteria (portfolio)

1. **I1 holds** → don’t lead with model/box changes.  
2. **A2 holds + start CVR healthy** → don’t lead with Moments.  
3. **A1 holds + live partners can originate** → don’t lead with logo acquisition.  
4. **Stall = true credit box or capital** → stop growth-PM theater; partner with UW/DS/Capital; measure funded *and* losses.  
5. **Completions/prefill don’t move funded** → re-diagnose (true risk vs experience vs capital).  
6. **Partner brand spam complaints** → intensity down.  
7. **Low N** → never claim multi-cell A/B as week-one religion.

---

## What to deprioritize (say out loud)

- **Changing risk models / widening the credit box** (I1, out of scope)  
- Net-new partner logos as the **case MVP** (A1)  
- Louder upstream CTAs / Capital Moments as **default** (A2)  
- Factoring / BNPL as 4–6 wk originations bet  
- SPIFs / take-rate changes before funnel diagnosis  
- Fee calculator vanity · D2C · CK-scale experiment theater  

---

## Interview lines (Solve-ready)

**Instinct:**  
> “My working bet: highest leverage is getting more people to *finish* the application. On decisions I assume I don’t own the risk models. UW and DS do, so I’d plug preventable declines from bad/missing data and confusing forms, not loosen the box.”

**Constraint:**  
> “At low volume every opportunity counts. I’d rather save N complete submits and preventable declines on live partners than run elegant multi-cell tests we can’t power.”

**Assumptions (honest):**  
> “Working assumptions: (1) win is throughput start→offer→accept→fund, not primarily new logos; (2) visibility is roughly solid because partners are incentivized. If data shows buried CTAs, I flip back to surface.”

**Bet shape:**  
> “Default wedge: apply completion + prefill/validation + preventable-decline plugs + decision experience, instrumented as completes / preventable / funded-in-box. Feature on the existing shelf. Moments only if visibility assumption dies.”

---

## Sources

- `kanmon-case-raw-notes-organized-20260729.md`  
- `kanmon-case-framing-guide-20260729.md` · summary  
- `private notes (not included)` · case intel summary  
- `kanmon-incentives-deep-dive-20260729.md`  
- `kanmon-source-check-20260729.md`  
- `kanmon-revenue-partner-model-20260729.md`  
- `kanmon-exploration-park-20260729.md`  
- Solve → Notes (`kanmon-case-study-capital-moments.html#notes`)
