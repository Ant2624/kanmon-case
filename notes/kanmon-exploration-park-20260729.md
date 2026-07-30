# Kanmon: exploration park (ideas · theories · open questions)

**Date:** 2026-07-29  
**Purpose:** Durable scratch space for Anthony’s working theories and feature exploration, **not locked bets**. Grow this file; source-check before promoting anything into Solve → Bet.  
**Workbench:** open in workbench → **Solve → Ideas / Theories** (`#ideas`), main scratch · **Solve → Notes** (`#notes`). Anthony organized raw · `kanmon-case-study-capital-moments.html`  
**Companions:** [`kanmon-incentives-deep-dive-20260729.md`](kanmon-incentives-deep-dive-20260729.md) · [`kanmon-incentives-summary-20260729.md`](kanmon-incentives-summary-20260729.md) · revenue model · partner-vs-direct · ecosystem · feature landscape · source library  
**Interview intel:** [`private notes (not included)`](private notes (not included)) · [`private notes (not included)`](private notes (not included)), label **[interview. Kanmon PM]** vs public / the team.  
**Framing:** `kanmon-case-framing-guide-20260729.md` · `kanmon-case-framing-summary-20260729.md`, feature vs product-line · money constraint · outcome cards.  
**Raw notes:** [`kanmon-case-raw-notes-organized-20260729.md`](kanmon-case-raw-notes-organized-20260729.md). Anthony voice; folded selectively here (T15–T17 · F14–F15 · Q12–Q16).  
**Leverage:** [`kanmon-leverage-deep-dive-20260729.md`](kanmon-leverage-deep-dive-20260729.md) · [`kanmon-leverage-summary-20260729.md`](kanmon-leverage-summary-20260729.md), ranked levers · **C1** every opp counts · **A1/A2** assumptions (T18–T21).

**Status legend:** `working` · `source-check` · `parked` · `one-hyp-among-many` · `assumption` · `interesting` · `research` · label ideas **Feature** | **Product line**

---

## Evaluation lens (Anthony · what the brief lists annotations)

Use this when scoring any idea in Solve → Ideas (the brief criteria stay verbatim on Case; this is *your* operator lens):

1. **Structure ambiguous problem** → Did I **ground the space / how the business works** (partner distributes, Kanmon lends, funded = originations)?  
2. **Product judgment** → Which levers: **UI/UX · visibility · incentives (parties) · credit risk models · capital to fund · regulatory**? Is this PM-feature or Credit/Capital/Legal/GTM?  
3. **Prioritize** → **High leverage × relative risk**; back into sizing; effort/complexity; **sequencing + gradual unlocks + growth**.  
4. **Metrics / trade-offs** → **Value · effort + time · regulatory complexity** (+ conversion↔risk).  
5. Communicate clearly while presenting · mockups convey the feature.

**Money banner:** A proposal is only “good” if it touches **partner funded volume × yield − losses − partner share − cost of funds** (not vanity UX).

**Feature vs product line (quick):** Capital Moments / SMS / UX / soft teaser / ops / router = **Feature**. Factoring / BNPL = **New product line** (interview roadmap; not default MVP).

---

## Outcome card (copy for proposals)

| Field | |
|-------|--|
| **Problem** | |
| **Lever** | surface / start / offer-fund / product fit / partner live / incentives / credit box / capital / regulatory |
| **Outcome metric** | e.g. **saved potential funded / period** (low-N) or incremental funded $ |
| **Counter-metric / risk** | loss band · spam · decline surprise · capital |
| **Effort / time** | |
| **Sequence** | gradual unlocks |
| **Label** | Feature · Product line |
| **Money touch** | how it hits funded × yield − losses − share − CoF |

---

## How to use

1. Capture a claim with **evidence** (fact / hyp / absent-public / interview).  
2. Tag **Feature** vs **Product line**; note **money touch** + outcome card fields.  
3. Note **implication for the case** (what you’d say / build / kill).  
4. Keep Capital Moments as **one hypothesis among several** until kill criteria clear.  
5. Promote only after funnel diagnosis (see → start → offer → fund) → Frame → Bet.

---

## Working theories

### T1 · Partner-only GTM; originations = funded via partners
| | |
|--|--|
| **Claim** | Public Kanmon GTM is partner/embedded-only; success metric = funded originations through partner platforms, not D2C volume. |
| **Evidence** | `kanmon-partner-vs-direct-20260729.md`; kanmon.com + `*.kanmon.com` portals; no public D2C apply **[FACT]**. Mix % undisclosed. |
| **Implication** | Don’t invent partner↔direct mix; don’t pitch D2C as the originations lever (strategic non-choice). |
| **Status** | `working` |

### T2 · Capability vs incentive: diagnose first
| | |
|--|--|
| **Claim** | Boosting partner originations is either a capability gap (can’t see/start/route) or an incentive gap (won’t push), or both. Wrong fork wastes Series A PM bench. |
| **Evidence** | Anthony’s diagnose-first framing; incentives deep dive §4–6; Pipe assist→2× advances peer claim **[FACT]** vs Kanmon CS SPIFs **[ABSENT-PUBLIC]**. |
| **Implication** | Map see→start→fund per quiet partner before shipping louder Moments or funding SPIFs. |
| **Status** | `working` |

### T3 · Upstream surface vs downstream portal CVR
| | |
|--|--|
| **Claim** | Partner portal (`cleo.kanmon.com` etc.) is often apply/education (downstream CVR). Quiet-partner stalls frequently sit upstream (see / surface / start in partner workflow). |
| **Evidence** | `kanmon-partner-ecosystem-extension-20260729.md`; Cleo WebEDI Finance-on-invoice **[FACT]**; Financing-tab patterns weaker intent **[HYP]**. |
| **Implication** | Don’t assume “new feature lives on the portal.” Diagnose placement before Design. |
| **Status** | `working` |

### T4 · Three constraints: funnel × credit box × capital
| | |
|--|--|
| **Claim** | Partner originations ≈ min(demand we surface, credit box, capital to fund). Widening the box / adding capital is Credit+Capital, not default growth-PM feature. Funnel PM owns more of the already-approvable. |
| **Evidence** | Anthony thinking 2026-07-29; Kanmon assumes credit risk **[FACT]**; the brief conversion↔risk; burn hyp excludes credit losses. |
| **Implication** | Call line: pressure surface/start *inside* existing box; widening only with Credit/Capital, measured on funded $ *and* loss rates. |
| **Status** | `working` |

### T5 · Biggest incentive misalignment = volume vs risk vs brand
| | |
|--|--|
| **Claim** | Growth/PM push starts/funds; Credit/econ protect loss + CM; Partner brand under-promotes if UX feels spammy. Quiet partners can be under-incentivized *or* capability-blocked. |
| **Evidence** | Incentives deep dive §4; summary “Biggest fight: volume vs risk vs brand spam.” |
| **Implication** | Prove scoreboard = incremental funded *inside* credit band, not starts alone. |
| **Status** | `working` |

### T6 · Invoice/AP are the embedded-native core
| | |
|--|--|
| **Claim** | Model favors invoice/AR + AP as workflow-native engines; LOC = buffer; term = lump/growth overlay. Not MCA-first. |
| **Evidence** | Source-library FAQ density (Cleo, Nuvei, Avionté, PingPong, Cin7) **[FACT]**; preferred mix **[HYP]** in incentives §3. |
| **Implication** | Bet moments/routing on cash objects (invoice/AP), not generic “Financing tab” term offers. |
| **Status** | `source-check` |

### T7 · Capital Moments: one hyp among several
| | |
|--|--|
| **Claim** | Upstream object-native CTAs at cash gap can move *see→start* without owning UW. Moments narrative is commoditized (Liberis etc.). |
| **Evidence** | Initial agent hyp; feature landscape; kill if surface already healthy or stall ≠ placement (ops/incentive/credit). |
| **Implication** | Keep labeled **INITIAL / FALSIFIABLE**. Differentiate via vertical objects + routing + quiet-partner ops after diagnosis. |
| **Status** | `one-hyp-among-many` · `source-check` |

### T8 · Low onboarding volume → no A/B yet
| | |
|--|--|
| **Claim** | Onboarding volume is too low for meaningful A/B; sole PM has not run A/B since joining. |
| **Evidence** | a conversation with the team 2026-07-29 **[interview. Kanmon PM]**. |
| **Implication** | Case: instrument funnel + weekly metrics first; holdouts when N allows, don’t sell CK-scale experimentation as day-one. |
| **Status** | `working` |

### T9 · Sole PM owns full funnel (hiring 2nd/3rd)
| | |
|--|--|
| **Claim** | One PM covers partner win/onboard + APIs + self-hosted pages + SMB offer→finance→email; new hire learns all then splits by strengths. |
| **Evidence** | a conversation with the team **[interview. Kanmon PM]**; aligns the team “tiny PM bench” **[interview, the team]**. |
| **Implication** | Solution = thin wedge a peer can ship; frame hire as load-split + UX strength, not feature factory. |
| **Status** | `working` |

### T10 · UW + DS directors; PM surfaces model value into offers
| | |
|--|--|
| **Claim** | Director of Underwriting + Director of Data Science own models/risk scores; PM partners to surface valuable outputs into underwriting decisions / offers. |
| **Evidence** | a conversation with the team **[interview. Kanmon PM]**. |
| **Implication** | Keep credit boundary clear; name seats on case; conversion↔risk still the scoreboard. |
| **Status** | `working` |

### T11 · additional product lines are being explored
| | |
|--|--|
| **Claim** | Roadmap includes factoring and BNPL (not offered today); early partners for those products. |
| **Evidence** | a conversation with the team **[interview. Kanmon PM]**. |
| **Implication** | Acknowledge multi-product expansion; don’t make new-product launch the 4–6 wk originations MVP unless the hiring manager steers. |
| **Status** | `working` |

### T12 · one messaging channel is unavailable)
| | |
|--|--|
| **Claim** | SMS is a wanted channel; a messaging vendor campaign approvals rejected under financial-services wording, stuck in backlog. |
| **Evidence** | a conversation with the team **[interview. Kanmon PM]** (ASR: SF→SMS, Twitter→a messaging vendor). |
| **Implication** | Adjacent fit story (City SMS + compliance), not core originations lever unless asked. |
| **Status** | `working` |

### T13 · AI + MCP → DB weekly metrics
| | |
|--|--|
| **Claim** | Post-launch ops uses AI/MCPs linked to DB for weekly alerts, charts, prior-week compare, insight suggestions. |
| **Evidence** | a conversation with the team **[interview. Kanmon PM]**. |
| **Implication** | Mirror this operating style in Show/#effort AI workflow narrative. |
| **Status** | `working` |

### T14 · UX weakness = hire opportunity
| | |
|--|--|
| **Claim** | Current PM touches UX/UI but flags it as not a strength; hopes new PM brings UX experience. |
| **Evidence** | a conversation with the team **[interview. Kanmon PM]**. |
| **Implication** | Case Design/mocks + builder-PM proof are positioning assets, not decoration. |
| **Status** | `working` |

### T15 · Numerator / denominator framing · **Anthony notes**
| | |
|--|--|
| **Claim** | Originations grow by changing the **denominator** (top-of-funnel see / candidates) or the **numerator** (funded SMBs = UX + application recovery + credit risk model). |
| **Evidence** | Anthony organized raw notes 2026-07-29 **[Anthony notes]**. |
| **Implication** | Diagnose which side binds before shipping louder surface vs recovery vs credit work. |
| **Status** | `working` |

### T16 · Partner show-logic / need-gated surface · **Anthony notes**
| | |
|--|--|
| **Claim** | Partner logic for *when* Kanmon appears matters. “if I don’t need funds, do I see Kanmon?” Always-on vs need-gated changes see→click quality. |
| **Evidence** | Anthony raw notes **[Anthony notes]**; ties to T2/T3. |
| **Implication** | Ask for partner surface rules before assuming CTA density is the lever. |
| **Status** | `working` |

### T17 · Portal land = Kanmon-owned customer · **Anthony notes**
| | |
|--|--|
| **Claim** | For the exercise, Kanmon owns the customer from land on `[*partner].kanmonhq.com`, apply UX, drop-off, recovery are Kanmon levers thereafter. |
| **Evidence** | Anthony raw notes **[Anthony notes]**. |
| **Implication** | Split diagnosis: partner-owned see/surface vs Kanmon-owned start→fund after portal. |
| **Status** | `working` |

### T18 · Every opportunity counts (low volume) · **C1**
| | |
|--|--|
| **Claim** | At low onboard/origination volume, each eligible funded path is high-value, prefer recover lost opps on existing flow over elegant experiment velocity or broad net-new bets. |
| **Evidence** | Anthony framing 2026-07-29; low volume → no A/B **[interview. Kanmon PM]**; raw notes (recovery, attempt≠convert). |
| **Money touch** | Outcome = **save N potential funded** / period inside credit band, not “+X% at scale.” |
| **Implication** | Instrument where each opp dies; ship judgment + before/after; fix leaky pipes before factoring/BNPL. If A2 dies, Moments becomes *more* urgent under scarcity. |
| **Status** | `working` · constraint |

### T19 · Goal = funnel throughput (not net-new logos) · **A1 [ASSUMPTION]**
| | |
|--|--|
| **Claim** | Primary win = more SMBs through start → offer → accept → fund on partners we already have, not primarily inventing net-new partner logos. |
| **Evidence** | Anthony working assumption 2026-07-29, **source-check, not proven**. |
| **Implication** | Weight in-funnel conversion; demote logo acquisition as case MVP. |
| **Kill** | Live inventory can’t originate (onboard/API/self-hosted broken) → partners-live returns to top. |
| **Status** | `assumption` · `source-check` |

### T20 · Visibility assumed solid (partners incentivized) · **A2 [ASSUMPTION]**
| | |
|--|--|
| **Claim** | Partner visibility volume is roughly solid because partners are incentivized to support customers with liquidity (rev share / retention / helping SMBs). |
| **Evidence** | Anthony working assumption 2026-07-29; rev-share pitch **[FACT]** LinkedIn, **assumption not proven** for all partners. |
| **Implication** | Demote pure “more CTAs / Capital Moments” unless diagnosis shows visibility weak. Start from funnel throughput. |
| **Kill (visibility)** | Buried Financing tabs / no impressions / eligible never see → surface/Moments return to top. |
| **Kill (incentive)** | Brand risk / support burden → partners won’t push despite rev share → incentive/ops fork. |
| **Status** | `assumption` · `source-check` |

### T21 · Ranked leverage (funnel-first under A1+A2 · **I1**)
| | |
|--|--|
| **Claim** | Top levers: (1) soft pre-check + prefill (2) easier finish-in-flow as the job (3) preventable decline plugs, not credit policy (4) decision experience without model changes (5) ledger completes/preventable/funded-in-box. Moments demoted until A2 dies. Risk model/box **out of scope**. |
| **Evidence** | `kanmon-leverage-deep-dive-20260729.md` · Anthony’s instinct I1 · Notes themes · C1/A1/A2. |
| **Implication** | Solve → Ideas **Leverage** cards; Bet only after diagnosis can kill A1/A2/I1. |
| **Status** | `working` · `source-check` |

### T22 · Anthony’s instinct: completions first · **I1**
| | |
|--|--|
| **Claim** | Highest leverage = application completions; then decisions without influencing risk models; avoid unnecessary rejections from inaccurate/missing info, bad pre-fill, confusing forms, not by loosening credit policy. |
| **Evidence** | Anthony operator instinct 2026-07-29; aligns Notes (recovery, pre-fill, non-risk declines) + UW/DS own models **[interview]**. |
| **Money touch** | ↑ complete submits · ↓ preventable declines · ↑ funded among already-in-box. |
| **Kill** | Complete-submit already excellent and binding leak is true credit or capital. |
| **Status** | `working` · operator bet |

---

## Open questions

| ID | Question | Why it matters | Status |
|----|----------|----------------|--------|
| Q1 | Where does each quiet partner stall: see / start / offer / fund? | Picks capability vs incentive fork | `working` |
| Q2 | Is `*.kanmon.com` portal access eligibility-gated or open educate/apply? | Portal = CVR vs gate | `working` |
| Q3 | What does partner admin intensity / rev-share look like today? | Incentive felt vs pitch-only | `working` |
| Q4 | Does Kanmon already have offer/trigger APIs behind kanmon.dev? | Moments eng cost vs reuse | `parked` (gated) |
| Q5 | Natural workflow objects per vertical? | Moment catalog scope | `working` |
| Q6 | Capital capacity vs credit-box tightness, which binds first on quiet partners? | Funnel vs box vs capital | `working` |
| Q7 | Take rate / share formula? | Incentive richness | `parked` (**ABSENT-PUBLIC**) |
| Q8 | CS recommend tooling or SPIFs exist privately? | Cap vs Inc gap | `parked` (**ABSENT-PUBLIC**) |
| Q9 | What “particular project” is intended for the new PM? | Lane after learn-all | `working` **[interview, open]** |
| Q10 | Factoring/BNPL timing vs originations on live partners? | MVP vs roadmap | `working` **[interview, open]** |
| Q11 | Who is the hiring manager / next-round format? Atlanta↔Bay expectation? | Prep for HM | `working` **[interview, open]** |
| Q12 | Partner success reporting, land / CTA impressions / click→convert by segment? | Low-hanging diagnose | `working` **[Anthony notes]** |
| Q13 | Application recovery / pickup-where-you-left-off campaigns today? | Numerator lever | `working` **[Anthony notes]** |
| Q14 | Non-risk declines, holes to plug vs pure credit box? | Funnel vs credit | `working` **[Anthony notes]** |
| Q15 | Multi-product eligibility + cross-partner apply awareness for SMBs? | Router / education | `working` **[Anthony notes]** |
| Q16 | Soft pre-auth / partner-data share for pre-fill? | Cap with Legal/Credit | `working` **[Anthony notes]** |
| Q17 | What share of declines/stalls are identity / KYB data quality (vs true risk)? Does Kanmon already use an entity-resolution vendor? | Validates F16 before build | `working` **[Anthony notes]** · research |

---

## Feature exploration areas

Seeded from incentives gaps / white space. Each is an **area to explore**, not a roadmap commitment.  
**Filter:** prefer **Features** that move funded originations; park **Product lines** unless the hiring manager steers / diagnosis requires new SKU.

### F1 · Upstream Moments / workflow triggers · **Feature** · **demoted under A2**
| | |
|--|--|
| **Claim** | Object CTAs at cash gap (Cleo Finance-on-invoice gold pattern) beat buried Financing tabs. |
| **Evidence** | Liberis Adverts/webhooks **[FACT]**; Kanmon public trigger framework **[ABSENT-PUBLIC]**; incentives §5. |
| **Money touch** | ↑ see→start → funded $ on existing invoice/AP shelf. |
| **Implication** | **Under A2:** not default wedge, start in-funnel. **If A2 dies:** jumps to top (and under T18/C1 is *more* valuable). Kill Moments if Finance-on-invoice already exists and funds still low. |
| **Status** | `source-check` · demoted while A2 holds · ties to T7/T20 |

### F2 · Quiet-partner success tooling · **Feature / ops**
| | |
|--|--|
| **Claim** | Live integrations with low fund rate need health dashboards, playbooks, QBR packs, not only more SDK surfaces. |
| **Evidence** | Insights language **[FACT]** thin; Pipe portal depth **[FACT]** peer; Kanmon ops tooling **[ABSENT-PUBLIC]**. |
| **Money touch** | ↑ partner intensity / attach → funded on already-live partners. |
| **Implication** | Cap (+ PS capacity) candidate after funnel shows eng-live but org quiet. |
| **Status** | `working` |

### F3 · CS recommend-capital workflows · **Feature / ops**
| | |
|--|--|
| **Claim** | Human assist can unlock attach (Pipe: assisted → 2× advances claim **[FACT]** peer) without new SMB acquisition. |
| **Evidence** | Kanmon agent UI / SPIFs **[ABSENT-PUBLIC]**; brand/compliance risk if CS “sells loans.” |
| **Money touch** | ↑ starts/funds via assisted attach; watch adverse selection. |
| **Implication** | Cap (+ Inc if SPIF), only if diagnosis = won’t push / no playbook. |
| **Status** | `working` |

### F4 · Self-serve rev-share / econ dashboard · **Feature (incentives)**
| | |
|--|--|
| **Claim** | Incentive must be *felt*; partners push what they can see paid. |
| **Evidence** | Pipe rev share in portal **[FACT]**; Kanmon take rate + dashboard **[ABSENT-PUBLIC]**. |
| **Money touch** | ↑ partner push → funded; take-rate *change* = commercial not UI. |
| **Implication** | Inc-first when capability already converts. Don’t invent %. |
| **Status** | `working` |

### F5 · Soft prequal teasers (Credit-gated) · **Feature**
| | |
|--|--|
| **Claim** | Soft eligibility before full apply raises start CVR / reduces surprise declines. |
| **Evidence** | Soft pull + fast UW **[FACT]**; named pre-approved product thinner than Parafin/Stripe peers **[UNK]/[ABSENT-PUBLIC]**. |
| **Money touch** | ↑ start quality → funded; counter = false hope / UDAAP if overclaimed. |
| **Implication** | Cap with Legal/Credit gate, never hard “pre-approved” without Credit. |
| **Status** | `source-check` |

### F6 · Cross-product router at moment of need · **Feature**
| | |
|--|--|
| **Claim** | Invoice vs AP vs LOC vs term match → accept↑ regret↓. Shelf exists; public router thin. |
| **Evidence** | Multi-product **[FACT]**; Cin7 one-at-a-time lock **[FACT]**; router **[ABSENT-PUBLIC]**; T6 product favoritism. |
| **Money touch** | ↑ accept / repeat on existing shelf; not a new product line. |
| **Implication** | Amplifies invoice/AP wedge; compounds Moments if both ship. |
| **Status** | `working` |

### F7 · In-partner fee / payment calculator · **Feature** (park vanity risk)
| | |
|--|--|
| **Claim** | Fee clarity → trust, fewer NSF surprises, better product choice. |
| **Evidence** | Late $25 / NSF $35 **[FACT]**; calculator UX **[ABSENT-PUBLIC]** in source library. |
| **Money touch** | Weak unless tied to start/accept; can scare converts if clumsy. |
| **Implication** | Cap for start friction / education stall. |
| **Status** | `parked` |

### F8 · SPIFs / rate promos / volume tiers · **Feature / commercial**
| | |
|--|--|
| **Claim** | Pure incentive lever when capability already works. |
| **Evidence** | Kanmon **[ABSENT-PUBLIC]**; category uses rev share broadly **[FACT]**. |
| **Money touch** | ↑ funded via partner push; margin / adverse selection risk. |
| **Implication** | **After** diagnose, never first. |
| **Status** | `parked` until funnel says “works but unused” |

### F9 · Direct SMB channel · **Strategic non-choice**
| | |
|--|--|
| **Claim** | Would add non-partner volume but cannibalizes embedded thesis. |
| **Evidence** | Public GTM partner-only **[FACT]**. |
| **Money touch** | Off-metric for this case (success = partner originations). |
| **Implication** | Do not pitch. |
| **Status** | `parked` · do not pitch |

### F10 · Partner onboard + self-hosted pages + internal ops · **Feature / ops**
| | |
|--|--|
| **Claim** | Originations can stall at partner onboard/API/self-hosted page + KYB/KYC/UCC ops, not only SMB CTA placement. |
| **Evidence** | Sole PM described this as core scope **[interview. Kanmon PM]**. |
| **Money touch** | ↑ partners live / throughput → funded capacity of existing products. |
| **Implication** | Diagnose partner review + ops tooling before assuming Moments-only. |
| **Status** | `working` |

### F11 · Factoring expansion · **New product line**
| | |
|--|--|
| **Claim** | Factoring unlocks SMB segments / use cases term/invoice don’t cover. |
| **Evidence** | the team: expanding with early partners **[interview. Kanmon PM]**. |
| **Money touch** | New yield book, also new losses, capital, legal. |
| **Implication** | Roadmap talk; not default case MVP. Research unmet need first. |
| **Status** | `parked` for case MVP · `working` for horizon |

### F12 · BNPL expansion · **New product line**
| | |
|--|--|
| **Claim** | BNPL at purchase/pay moments expands attach. |
| **Evidence** | the team: want BNPL; not offered today **[interview. Kanmon PM]**. |
| **Money touch** | New product economics + disclosures + partner design. |
| **Implication** | Same as F11, acknowledge; don’t default MVP here. |
| **Status** | `parked` for case MVP · `working` for horizon |

### F13 · SMS channel (a messaging vendor) · **Feature / channel**
| | |
|--|--|
| **Claim** | SMS lifts lifecycle / reminders for offers & servicing. |
| **Evidence** | Wanted; a messaging vendor FS wording rejects **[interview. Kanmon PM]**. |
| **Money touch** | Only if it moves start/accept/fund or reduces loss ops; high regulatory complexity. |
| **Implication** | Adjacent proof; Legal-gated; not core originations bet unless asked. |
| **Status** | `working` · secondary |

### F14 · Application recovery / abandon campaigns · **Feature** · **Anthony notes**
| | |
|--|--|
| **Claim** | “Didn’t finish” / abandon-cart style recovery + simplify-apply tooling moves numerator (funded) without new partners. |
| **Evidence** | Anthony raw notes, high interest **[Anthony notes]**; recovery existence **[UNK]**. |
| **Money touch** | ↑ complete→fund on already-interested SMBs. |
| **Implication** | Strong Cap-first if diagnosis = start→exit drop; pairs with portal ownership (T17). |
| **Status** | `working` |

### F15 · Partner soft pre-check / prefill + state campaigns · **Feature** · **live lead**
| | |
|--|--|
| **Claim** | One partner-integrated soft eligibility + prefill capability can (1) shorten submit for starters and (2) power honest low-effort CTAs + auto-campaigns for good-candidate states upstream, two birds, one stone. |
| **Evidence** | Anthony exploration 2026-07-30 **[Anthony notes]** · soft pull / never hard $ without Credit **[prior]** · SMS not primary (a messaging vendor blocked) **[interview]** · full write-up `kanmon-f15-soft-preauth-two-birds-20260730.md`. |
| **Outcome card** | **Problem:** apply friction + perceived effort kills start/submit · **Lever:** submit UX + selective surface · **Metric:** ↑ Start→Submit; optional ↑ Click among soft-pass · **Counter:** false hope, spam, Legal claims · **Effort:** M–H · **Sequence:** after abandon diagnosis; design partner · **Label:** Feature · **Money:** funded $ via completes (+ selective starts) |
| **Money touch** | Bird 1 = completions pot; Bird 2 = selective upstream, don’t double-count; don’t claim hard approval. |
| **Implication** | **Lead feature** for the case; finish-in-flow is the job. Differentiate from Capital Moments via **data-backed soft check**, not generic placement. Soft for everyone in scope; no-need path still valid. MVP may be prefill-only if Credit/campaigns too heavy. |
| **Status** | `working` · **live lead framing** · partner-data map locked · product still Credit/Legal source-check |

### F16 · Entity lookup / D&B DUNS match · **Feature** · **Anthony adjacent · completions / preventable KYB**
| | |
|--|--|
| **Claim** | Entity lookup (e.g. D&B Identity Resolution / D-U-N-S match, and where applicable, DUNS assignment flows) could cut missing/wrong business-identity friction on the apply → KYB path, without changing risk models. |
| **Evidence** | Anthony adjacent capability note 2026-07-29 **[Anthony notes]** · D&B Direct+ Identity Resolution (`cleanseMatch`) matches name/address/reg/phone → ranked D-U-N-S + confidence **[FACT]** vendor docs · Direct+ Enrich / Multi-Process / Direct Onboard = firmographics + CDD layers **[FACT]** marketing+docs · Kanmon using D&B **[ABSENT-PUBLIC]**, **do not claim** · Instant “issue a DUNS” for every new entity is often **match-existing** or investigation/registration, not a free third-party mint **[nuance]** |
| **Outcome card** | **Problem:** bad/missing legal-entity data → incomplete KYB, duplicate/mismatch, preventable declines · **Lever:** start / KYB ops (completions + preventable) · **Metric:** ↑ complete KYB submits; ↓ preventable identity rejects; ↓ time-to-decision · **Counter:** vendor cost, lock-in, privacy/data residency, false confidence · **Effort:** M–H (integration + Legal/ops) · **Sequence:** after decline taxonomy shows identity/KYB as a real leak · **Label:** Feature · **Money:** ↑ funded among already-in-box by saving identity-fail paths |
| **Money touch** | ↑ complete KYB → more decisionable apps; ↓ preventable identity rejects → funded in-box (not box widening). |
| **Implication** | Fits **completions bet** + L2/L3 (prefill/validate + preventable declines). Ops runs KYB; PM partners UW/DS **[interview]**, vendor is tooling, not a substitute for full KYB/AML. Research only until funnel shows identity friction binds. |
| **Risks** | Cost · vendor lock · privacy / redistribution license · match errors → wrong entity · **not** a substitute for full KYB/AML · don’t pitch as “we change underwriting.” |
| **Status** | `interesting` · `research` |

---

## Incentive map (seed from deep dive)

**SMB**, fee for speed / soft pull / stay-in-workflow / invoice·AP control.  
**Partner**, rev-share pitch (% unpublished) + retention / no credit risk; disincentive = brand spam.  
**Kanmon**, yield − losses − share − ops; assumes credit risk **[FACT]**.

Full tables: [`kanmon-incentives-deep-dive-20260729.md`](kanmon-incentives-deep-dive-20260729.md) · call card: [`kanmon-incentives-summary-20260729.md`](kanmon-incentives-summary-20260729.md)

---

## Education captured (not bets)

| Term | One-liner |
|------|-----------|
| **KYB** | Know Your Business, entity/AML/ownership checks (vs KYC = people). Soft pull + bank link + KYB → decision. |
| **Originations (this case)** | Funded loans/advances sourced through partner platforms. |
| **Credit box** | Who gets an offer given risk model + tolerance. |
| **Capital constraint** | Whether Kanmon (and funders) can fund approved demand. |
| **Feature** | Improves discovery/start/ops/channel/routing on existing shelf. |
| **Product line** | New financing type (e.g. factoring, BNPL), new risk/legal/capital. |
| **D-U-N-S** | D&B unique business ID; Direct+ Identity Resolution matches free-text → DUNS + confidence. Not a full KYB substitute. |

---

## Append template (copy for new ideas)

```md
### Tx / Fx · Title · Feature | Product line
| | |
|--|--|
| **Claim** | |
| **Evidence** | |
| **Money touch** | funded × yield − losses − share − CoF |
| **Outcome card** | problem · lever · metric · counter · effort · sequence |
| **Implication** | |
| **Status** | working | source-check | parked |
```
