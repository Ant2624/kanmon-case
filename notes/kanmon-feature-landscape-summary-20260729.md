# Kanmon: Feature Landscape summary

**2026-07-29** · Call-scannable · Full brief: `kanmon-feature-landscape-20260729.md`  
**Legend:** **[FACT]** / **[HYP]** / **[UNK]**

---

## Top feature themes (what the category ships)

| Theme | Market status | Kanmon public signal |
|-------|---------------|----------------------|
| Embed SDK / iframe / hosted UI | Table stakes | Web SDK iframe `show()` **[FACT]** |
| Pre-approved / soft-prequal offers | Table stakes | Soft pull + fast UW **[FACT]**; named “pre-approved offer” product **[UNK]** |
| No-code → API ladder | Table stakes | API + SDK; no-code depth **[UNK]** |
| Partner marketing / launch kits | Table stakes | “Out-of-the-box product marketing” **[FACT]** |
| Progressive limits / renewals | Table stakes | Progressive credit limits **[FACT]** |
| Partner portal / analytics | Common among leaders | Insights language **[FACT]**; portal depth **[UNK]** |
| Documented webhooks | Common (Stripe/Pipe/YouLend/Liberis/Defacto) | **[UNK]** gated docs |
| **Contextual offer tooling** (placement APIs, priorities, suppression) | **Shipped publicly by Liberis**; others more “promote offers” | Marketing “target / upsell” only **[FACT]** |
| Invoice + AP object financing | **Rarer** among MCA peers | Both on FAQ + live partners **[FACT]** |
| Works **without** payments rails | **Rarer** | Explicit FAQ yes **[FACT]** |
| Multi-product (term + LOC + AR + AP) | **Rarer as one portfolio** | Core claim **[FACT]** |

---

## Table stakes vs rare

**Table stakes**
- White-label embed + provider holds risk/capital/compliance  
- Pre-approved-style offers from platform data  
- Rev share + marketing playbooks  
- Multi-depth integration (referral → embed → API)  
- Fast fund + repeat borrow story  

**Rare / differentiating (publicly)**
- Liberis-grade **Adverts API + marketing offer webhooks**  
- **Invoice/AP workflow** financing (Kanmon, Defacto/Aria lane)  
- **No payments prerequisite** (Kanmon)  
- **Multi-product WC portfolio** on one partner embed (Kanmon claim)  
- Pipe-grade **developer partner portal**  
- CS “recommend capital” agent tools, mostly **[UNK]** industry-wide  

**Peers to name:** Parafin, Pipe, YouLend, Liberis, Stripe Capital, Defacto, finmid.  
**Adjacent only:** Capchase (vendor financing), Clearco/Wayflyer (direct e-com RBF), Resolve (B2B net terms), Amazon Lending (closed), Brex (spend), consumer BNPL.

---

## Capital Moments: source-check (5 bullets)

1. **Narrative is commoditized**. Liberis, Parafin, Stripe, Defacto, Pipe all sell “capital in the platform / at the right moment.” **[FACT]**  
2. **Product surface is not equal**. Liberis documents offer placement + daily marketing webhooks; Kanmon’s public site does not. Don’t claim invention of contextual offers. **[FACT]**  
3. **Kanmon’s better wedge may be vertical objects + portfolio**, invoice/AP moments for SaaS *without* payments, routed to term vs LOC vs AR vs AP. **[HYP]**  
4. **Only bet Moments if the bottleneck is placement**, if quiet partners fail on eng depth, CS habit, or eligibility, Moments won’t move originations. **[HYP]**  
5. **Safe case posture**. Moments = *hypothesis for partner-driven originations*; diagnose funnel first; keep Wedge B (partner ops/CS) and Wedge C (renewals) as alternates. **[HYP]**  

---

## Research agenda (top of stack)

| Pri | Question | Why |
|-----|----------|-----|
| P0 | See → start → fund rates for 2–3 partners; where quiet partners stall | Locks whether Moments is the right lever |
| P0 | Does Kanmon already have offer/trigger APIs behind `kanmon.dev`? | Avoid rediscovering Liberis |
| P0 | Is the hole timing/placement vs GTM/CS vs credit? | Falsifies Capital Moments |
| P1 | Natural workflow objects per vertical (invoice, job, payroll, AP) | Designs differentiated moments |
| P1 | Multi-product attach at launch vs single MCA-like product | Product router vs single offer |
| P2 | Win/loss vs Parafin/Pipe/YouLend | Positions the bet |

---

## Mini matrix (memory aid)

| | Pre-appr. offers | Contextual tooling | Invoice/AP | No payments req. | Partner portal |
|--|------------------|--------------------|------------|------------------|----------------|
| Kanmon | P | P | **Y** | **Y** | P |
| Parafin | Y | P |, |, | Y |
| Pipe | Y | P |, |, | **Y** |
| Stripe Cap. | Y | P |, |, | Y |
| Liberis | Y | **Y** |, |, | P |
| Defacto | Y | P | **Y** (AR) |, | P |

Y = clear public · P = partial/marketing ·, = not core public

---

## Feature landscape: initial  
*(paste into workbench Space / Education / Bet stage)*

```markdown
### Feature landscape: initial (2026-07-29)

**Category:** Embedded SMB working capital for partner SaaS (capital-as-a-service). Peers: Parafin, Pipe, YouLend, Liberis, Stripe Capital (platforms), Defacto, finmid. Adjacent-only: Capchase (vendor financing), Clearco/Wayflyer (direct RBF), Resolve (B2B net terms), Amazon Lending, Brex, consumer BNPL.

**Table stakes:** White-label embed (SDK/iframe/hosted), provider risk/capital/compliance, pre-approved-style offers from platform data, rev share, marketing kits, integration ladder, progressive limits / renewals.

**Rare / Kanmon-relevant:** Multi-product portfolio (term + LOC + invoice + AP); explicit no-payments-required UW path; workflow invoice/AP surfaces. Liberis leads publicly on contextual offer APIs (Adverts + marketing webhooks). Pipe leads on partner developer portal. Full Kanmon webhook/admin depth unknown (gated docs).

**Capital Moments:** Strong problem frame; weak uniqueness if pitched as generic “right offer at the right time” (market already says this). Differentiated only if tied to vertical workflow objects + product routing and/or quiet-partner activation (CS/ops), after funnel diagnosis.

**Next research:** (1) partner see→start→fund + quiet-partner stall point, (2) existing Kanmon trigger/offer APIs behind docs, (3) vertical moment inventory vs payments-GMV peers.

**Sources:** kanmon.com, competitor sites/docs (Parafin, Pipe, Stripe, YouLend, Liberis, Defacto, finmid); full write-up `ops/drafts/prep/kanmon-feature-landscape-20260729.md`.
```

---

**Files**
- `ops/drafts/prep/kanmon-feature-landscape-20260729.md`
- `ops/drafts/prep/kanmon-feature-landscape-summary-20260729.md`
