# Kanmon: revenue model & partner commercial model

**Date:** 2026-07-29  
**Purpose:** Plain-English money + partner economics for Anthony’s PM case, plus **when lending happens** (concrete scenarios).  
**Companion summary:** `kanmon-revenue-partner-model-summary-20260729.md`  
**Primary sources:** `kanmon-source-library/` (esp. Cleo WebEDI KB), kanmon.com, partner FAQs, Kanmon LinkedIn, prior market / E2E docs.

**Labels:** **[FACT]** = stated in public source · **[HYP]** = industry-typical / interview sketch, not Kanmon-disclosed.

---

## Plain-English model (6 bullets)

1. **SMB pays Kanmon** for using capital, finance charges / fees on advances and loans; late **$25** / NSF **$35** on partner FAQs. **[FACT]**  
2. **Kanmon is the lender**, provides capital, underwrites, services, collects; **assumes credit risk**; compliance stays with Kanmon. **[FACT]** kanmon.com FAQ.  
3. **Partner distributes under partner brand**, apply/fund inside WebEDI, Money tab, Financing tab, back-office; often via `*.kanmon.com` or SDK. **[FACT]**  
4. **Partner earns without balance-sheet risk**. Kanmon pitches **revenue share / bps on financed $** (LinkedIn) + retention / ARPU (blog); take rate **not published**. Homepage says “new revenue potential” but **does not** spell out rev share in the FAQ block. **[FACT]** LinkedIn/blog pitch · **[HYP]** economics.  
5. **Kanmon’s contribution** = borrower yield − cost of funds − credit losses − partner share − servicing. **[HYP]**  
6. **Originations PM moves funded $ inside partners**, surface + product fit raise volume; credit quality and partner brand sensitivity constrain how hard you push. **[HYP]** for levers · **[FACT]** for partner-distributed GTM.

---

## 1. Who pays whom

```
SMB borrower ──(finance fees / interest / late·NSF)──► Kanmon
Kanmon ───────(capital + risk + UW + servicing)─────► SMB
Kanmon ───────(rev share / bps on funded $)─────────► Partner   [FACT pitch; % unpublished]
Partner ──────(distribution UX + customer relationship)─► SMB
Partner ──────(? SaaS / program fee to Kanmon?)─────► Kanmon   [HYP, unverified]
```

| Party | Pays | Gets | Evidence |
|-------|------|------|----------|
| **SMB** | Financing fees / interest; late $25; NSF $35; funds repaid via ACH | Cash (invoice advance, AP pay, term, LOC) | Partner FAQs **[FACT]** |
| **Partner** | Integration / GTM effort; brand risk if UX feels spammy | Rev share / bps (LinkedIn); retention / lower churn narrative; ARPU claim 2–5× (blog) | LinkedIn + blog **[FACT]** pitch · homepage “revenue potential” softer |
| **Kanmon** | Cost of funds; credit losses; ops/compliance/servicing; partner share | Gross yield on book; possibly platform fees | Yield/losses **[HYP]**; risk on books **[FACT]** |

**Customer relationship:** Partner owns day-to-day product relationship; **credit agreement is with Kanmon** (Cleo: supplier signs agreement with Kanmon). **[FACT]**  
**Credit risk:** Explicitly **Kanmon**. “Kanmon provides the capital… assumes all credit risk.” **[FACT]**

---

## 2. Revenue lines

| Line | Who pays | Public status | Notes |
|------|----------|---------------|-------|
| **Finance charge / interest / factor-style fee** | SMB | **[FACT]** existence; **no public APR/take rate** | Cleo: early repay → **pro-rata financing fee rebate**; “up to entire invoice value less fees” |
| **Late fee $25** | SMB | **[FACT]** | Cleo, PingPong, Cin7, Nuvei FAQs |
| **NSF / bounce $35** | SMB | **[FACT]** | Same cluster |
| **Origination fee (named)** |, | **Not found** as a separate published line | May be bundled into finance charge **[HYP]** |
| **Partner revenue share** | Kanmon → partner | **[FACT]** LinkedIn pitch (“basis points on every dollar financed”), **not** a kanmon.com FAQ line | % / formula **undisclosed** |
| **Partner SaaS / program fee** | Partner → Kanmon? | **[HYP]** | Common in embedded finance; **not verified** for Kanmon |
| **Unused-capital fees** |, | Avionté: **no fees for unused capital** **[FACT]** (SmartFund marketing) | Aligns with draw-when-needed framing |

**Not public:** take rate, partner share %, warehouse cost of funds, loss rates, SaaS pricing.

---

## 3. Partner commercial model

### What Kanmon markets to partners **[FACT]**

| Theme | Source language (paraphrase) |
|-------|------------------------------|
| **Rev share / new revenue** | LinkedIn: basis points on financed $; homepage: unlock / new revenue potential |
| **No balance-sheet risk** | Credit risk off partner books; institutional / Kanmon capital |
| **Kanmon operates lending** | UW, servicing, collections, compliance, partner owns experience |
| **Retention / LTV** | “Revenue share gets interest… churn data gets commitment”; financing raises switching costs |
| **ARPU / CAC** | Blog: offset CAC; increase ARPU **2–5×** (self-report) |
| **Time-to-launch** | Site: implement ~1 week (aggressive); LinkedIn CFO post: **60–90 days** to first origination, treat as marketing range |

### White-label / brand

- Partner-branded programs: Cleo InvoicePay, Cin7 Capital, Avionté SmartFund, PingPong Financing, Nuvei A/R. **[FACT]**  
- Portals often on `partner.kanmon.com` with partner framing (“Cleo’s trusted partner”). **[FACT]**  
- True white-label depth (who sees “Kanmon” in disclosures) varies by partner, **[HYP]** legal templates require Kanmon lender disclosure.

### Who owns what

| Function | Owner (public) |
|----------|----------------|
| Distribution surface / in-product CTA | Partner |
| KYC/KYB/AML, soft pull, underwriting | Kanmon |
| Capital + credit risk | Kanmon |
| Servicing / collections | Kanmon (“hands-free”) |
| Credit agreement counterparty | Kanmon |
| Day-to-day software relationship | Partner |

---

## 4. Unit economics sketch **[HYP: labeled]**

Illustrative only, for interview math fluency. **Not Kanmon data.**

```
Funded principal                         $100,000
× Expected finance yield (e.g. 8–15%*)     $8–15k   *product- and term-dependent
− Cost of funds (warehouse / debt)        ($3–6k)
− Expected credit loss                    ($1–4k)
− Partner revenue share (e.g. 20–40% of fee income)*  ($1.5–5k)
− Servicing / ops allocation              ($0.5–1.5k)
────────────────────────────────────────────────────
≈ Kanmon contribution margin              ~$0–6k on this sketch
```

\*Industry-ish ranges for embedded SMB lending fee shares / yields, **not** Kanmon-disclosed. Early repay rebates (Cleo **[FACT]**) shrink yield when borrowers prepay.

**Case implication:** Growing originations without soft eligibility / credit guardrails can raise funded $ while destroying contribution margin. Partner share that is too rich can also kill Kanmon CM even if partners are “happy.”

---

## 5. Why partners embed (from their / Kanmon marketing)

| Motive | Who says it | Label |
|--------|-------------|-------|
| New revenue without becoming a lender | Kanmon homepage, LinkedIn | **[FACT]** |
| Retention / lower churn / LTV | Kanmon LinkedIn | **[FACT]** pitch |
| Sticky workflow (capital inside O2C / Money / Financing) | Cleo KB, Cin7, PingPong, Avionté | **[FACT]** |
| Keep buyer terms while supplier gets paid (supply chain) | Cleo KB | **[FACT]** |
| Inventory / growth without draining ops cash | PingPong, Cin7 | **[FACT]** |
| Staffing cash timing (payroll vs client pay) | Avionté SmartFund | **[FACT]** framing |
| Marketplace GMV unlock when suppliers are cash-constrained | Kanmon LinkedIn | **[FACT]** pitch |

---

## 6. When lending happens

Cash-gap **trigger** ≠ always the same **product**. Match product to the object in the partner workflow.

### Trigger → product map

| Cash-gap trigger | Best-fit product | Why |
|------------------|------------------|-----|
| Unpaid AR / Net-30–90 buyer | **Invoice financing** | Advance against specific invoices; repay on schedule |
| Supplier bill / PO due before inventory turns | **AP financing** | Fund payables now; repay later |
| Lump growth / equipment / one-time spend | **Term loan** | Fixed amount, fixed term (PingPong: often 6–12 mo) |
| Recurring buffer / draw-as-needed | **Line of credit** | On-demand; Avionté: pay only when used |
| Refinance / consolidate existing debt | **Term / consol via Kanmon** | Cleo FAQ: consolidation may be available |

### Industry-shaped scenarios (fact vs illustrated)

#### A. Cleo: EDI / supply-chain AR **[FACT]** primary path

**Sources:** `kanmon-source-library/cleo/webedi-invoice-financing-kb.md` · solutions FAQ · `cleo.kanmon.com`

| Step | What happens |
|------|----------------|
| 1 | Admin **activates Cleo InvoicePay** in **WebEDI Portal** |
| 2 | Supplier **applies to Kanmon** (+ docs); UW often **instant or ≤24h** (KB); related FAQ also “qualify ~24h” / offers ≤3 BD |
| 3 | Signs agreement with **Kanmon** (limits + fees) |
| 4 | Eligible invoices show **finance option** in WebEDI |
| 5 | Select invoices **invoice-level**; choose **30 / 60 / 90** |
| 6 | Funds typically **≤24h**; login via **WebEDI or `cleo.kanmon.com`** |
| Related FAQ | Soft pull; bank connect; late **$25** / bounce **$35**; early-pay fee rebate |

**Moment:** Supplier shipped; buyer still on extended terms; payroll/freight due now.  
**Illustrated SMB:** Mid-size retailer supplier on Net-60 **[illustrated]**.

**Servicing note:** Prefer ACH 30/60/90 FAQs for repay mechanics; KB “when buyer pays” = marketing, see E2E reconcile.

#### B. PingPong: cross-border / payments **[FACT]**

- Products: **AP financing** + **fixed-term loans**; funds into **PingPong account**.  
- Moment: Stock for e-comm peak; pay overseas suppliers without draining cash. **[FACT]** marketing · peak seller **[illustrated]**.

#### C. Cin7: inventory / ERP **[FACT]**

- Term, LOC, invoice, AP from **Money → Cin7 Capital**; Plaid; Kanmon reviews.  
- Moment: Supplier PO due before stock sells. Invoice financing explicitly “provided by Kanmon.”

#### D. Nuvei: payments / A/R **[FACT]**

- Choose invoices + repayment period; enroll + bank connect; late $25 / NSF $35.

#### E. Avionté: staffing **[FACT]**

- Select invoices from Avionté back-office; full or partial; funds **24–48h**; not all-or-nothing factoring; no unused-capital fees.

### Lending scenario one-liners (call-ready)

1. **Cleo / EDI:** Supplier activates InvoicePay → Kanmon approval → finances **marked unpaid invoices** in WebEDI on 30/60/90 while the retailer keeps long pay terms. **[FACT]**  
2. **PingPong / AP:** Cross-border seller pays supplier bills via AP financing with funds landing in the PingPong balance. **[FACT]**  
3. **PingPong / term:** Same seller takes a **6–12 month term loan** for growth or inventory peak, repaid by monthly ACH. **[FACT]** product · peak timing **[illustrated]**.  
4. **Cin7 / AP:** Inventory brand funds a **supplier PO** from Cin7 Capital so stock arrives before the next reorder. **[FACT]** product · brand story **[illustrated]**.  
5. **Cin7 / invoice or LOC:** Same ops borrows against AR or keeps a **LOC buffer** beside inventory workflows. **[FACT]** products available.  
6. **Avionté / staffing:** Agency advances **selected invoices** in SmartFund when payroll hits before clients pay. **[FACT]**  
7. **Nuvei / A/R:** Merchant picks invoices inside Nuvei’s suite and advances A/R with fixed repayments. **[FACT]**

---

## 7. Implications for “partner originations” PM

| Lever | Moves Kanmon revenue when… | Moves partner satisfaction when… | Watch-out |
|-------|----------------------------|----------------------------------|-----------|
| **Surface / Capital Moments** | More eligible starts → more funded $ → more yield | Capital appears at real cash gaps, not spam | Brand intensity; UDAAP |
| **Product fit** | Right product → higher accept + lower regret/default | Invoice vs AP vs term matches workflow object | Wrong product lock (Cin7 one-type-at-a-time) |
| **Eligible start / apply CVR** | More completed apps → more book | Soft pull, fast UW (Cleo ≤24h narrative) | Bank-link abandon |
| **Offer → accept → fund** | Speed to cash (≤24–48h) | Predictable funding | Silent declines |
| **Repeat draws** | Invoice-level selection → habitual originations | Control (“which invoices”) | NSF / late fees → churn |
| **Partner rev share / SPIFs** | Partner GTM push | Partner feels paid | Over-rich share → Kanmon CM |
| **Credit policy** | Protects contribution margin | Fewer bad experiences long-term | Volume vanity vs loss |

**Interview line:**  
> “Kanmon makes money when SMBs fund and perform; partners make money (and stickiness) when financing sits in their workflow without balance-sheet risk. My job on partner originations is incremental **funded** volume inside that system, inside an agreed loss band, not Kanmon.com traffic.”

---

## Fact vs hyp checklist

| Claim | Type |
|-------|------|
| Kanmon provides capital + assumes credit risk | **FACT** |
| Soft pull; licensed lender (CA CFL cited) | **FACT** |
| Late $25 / NSF $35 on partner FAQs | **FACT** |
| Partner revenue share / bps exists as LinkedIn commercial pitch | **FACT** (LinkedIn), not FAQ |
| Specific take rate / share % / SaaS fee | **Not public** |
| Unit economics numbers above | **HYP** |
| Cleo WebEDI activate → apply → finance-marked invoices → 30/60/90 → ≤24h fund | **FACT** (KB + related) |
| Partner-only / no D2C apply funnel | **FACT** on public surfaces (see partner-vs-direct) |
| ARPU 2–5× / churn improvement from financing | **FACT** as Kanmon marketing claim, not third-party audited |

---

## Sources

- `ops/drafts/prep/kanmon-source-library/README.md` + pages under `cleo/`, `pingpong/`, `cin7/`, `other/`, `kanmon/`
- Cleo KB: https://www.cleo.com/blog/knowledge-base-webedi-invoice-financing · local `cleo/webedi-invoice-financing-kb.md`
- https://kanmon.com/ · https://kanmon.com/blog/kanmon-has-a-new-look
- Kanmon LinkedIn (rev share / bps, churn, CFO balance-sheet posts), 2026
- Pressure-test log: `kanmon-source-check-20260729.md`
- Prior: `kanmon-market-research-20260729.md` §5 · `kanmon-partner-vs-direct-20260729.md` · `kanmon-partner-e2e-examples-20260729.md`
