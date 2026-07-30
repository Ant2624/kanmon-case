# F15: Partner types × data for soft pre-auth

**Date:** 2026-07-30  
**Purpose:** Map of **what partners know about SMBs** that can feed a Kanmon soft pre-auth / prefill product, and what pipelines you’d likely need.  
**Status:** **Locked finding** (partner-data leverage) · soft-pre-auth product still Credit/Legal gated  
**Constraint:** Soft eligibility + prefill only, not hard pre-approved $. Credit/Legal gate claims. UW/DS own the box **[interview]**.

**Companions:** `kanmon-f15-soft-preauth-two-birds-20260730.md` · partner E2E · revenue model · drive-down · on-track checklist

---

## Locked finding (say this)

> Soft pre-auth / confident CTAs only work where partners already hold useful SMB signals. **Rich archetypes**. AR/EDI invoice, wallet/payments, ERP/PO, payment processing, staffing invoices, can widen the net, simplify submit, and drive with object-specific confidence. **Prejudice:** we still need new data pipelines (consent, features, events, soft rules), not just a CTA. **Start with one rich design partner** (invoice or wallet); defer thin SaaS long-tail. Soft only, not hard pre-approval.

---

## Why partner type matters

Soft pre-auth only works if the partner already sits on **signals of identity, cash need, and (ideally) performance**. Different verticals hold different fields. Richer native data → wider net + smoother submit + more confident CTAs. Thin data → more pipelines, weaker soft check, or skip Bird 2.

**Prejudice (build cost):** almost every live integration will need **additional data pipelines** beyond “embed apply CTA”, consent, field mapping, sync freshness, webhook/events, and a soft-rule evaluation service. Don’t assume today’s partner API already exposes everything.

---

## Partner archetypes (Kanmon-relevant)

| Archetype | Example partners **[FACT]** shelf | Native customer world | Soft-pre-auth fit |
|-----------|-----------------------------------|----------------------|-------------------|
| **A · AR / EDI invoice** | Cleo InvoicePay | Invoices, buyers, amounts, due dates, EDI status | **Strong**, object-tied need + AR facts |
| **B · Cross-border / wallet payments** | PingPong | Wallet, payouts, FX, supplier pay, volume | **Strong**, cash-flow + AP/term moments |
| **C · Inventory / ERP / wholesale** | Cin7 | SKUs, POs, suppliers, stock, channels | **Strong**. PO/AP + inventory seasonality |
| **D · Payments / A/R advance** | Nuvei | Payment volume, settlement, merchants | **Medium–strong**, volume proxies |
| **E · Vertical ops (staffing etc.)** | Avionté | Timesheets, invoices to clients, payroll cycle | **Medium–strong**, invoice + labor cycle |
| **F · Generic vertical SaaS** | Long-tail “other” | CRM/billing/light ledger | **Variable**, often thin without new pipes |
| **G · Marketplace / FI** (aspirational) | Not named as live in base sim | GMV, sellers, bank-like KYC | **High upside / high reg**, heavier Legal |

---

## Data classes (what you’d want for soft pre-auth)

| Class | Examples | Feeds |
|-------|----------|-------|
| **Identity / KYB seed** | Legal name, EIN/tax ID, address, owners (if held), DBA | Prefill · ↓ preventable identity fails |
| **Firmographics** | Industry, age on platform, geo, entity type | Soft segment rules |
| **Performance / tenure** | Months active, GMV/revenue proxies, invoice count, payout history | Soft “good candidate” |
| **Object / cash-need** | Invoice $, due date, PO $, AP due, wallet shortfall | Moment + ticket size hint |
| **Bank / money movement** *(sensitive)* | Linked payout account hints, settlement rail | Rarely share raw; maybe “has verified payout” boolean |
| **Risk proxies partner already uses** | Chargeback rate, past-due to platform, suspension flags | Soft exclude / don’t campaign |
| **Consent / relationship** | Partner customer ID, marketing opt-in, financing consent | Campaigns + attribution |

**Hard line:** partner data ≠ underwriting decision. Soft layer ranks **invite / prefill / campaign**; hard pull + model stay Kanmon Credit.

---

## By archetype: likely fields vs pipeline gap

### A · AR / EDI (Cleo-like) **[FACT]** journey exists

| Likely already in partner | Soft-pre-auth use | Likely **new pipeline** |
|---------------------------|-------------------|-------------------------|
| Invoice ID, amount, due, buyer, status | Object CTA + ticket context | Real-time “financeable invoice” event → Kanmon soft eval |
| Vendor/SMB account on EDI network | Identity seed / match | Legal-name / tax-ID sync if not on apply today |
| Finance-on-invoice activation state **[FACT]** | Who already opted into lending rail | Soft-pass campaign only to activated + good invoice set |

**Wider net:** campaign SMBs with recurring unpaid AR who never click Finance.  
**Streamline:** prefill invoice + business from EDI profile.  
**Confident drive:** “This invoice is a fit to check funding”, object-true, not generic capital spam.

---

### B · Cross-border / wallet (PingPong-like)

| Likely already in partner | Soft-pre-auth use | Likely **new pipeline** |
|---------------------------|-------------------|-------------------------|
| Wallet balances, payout volume, FX corridors | Cash-need + capacity proxies | Aggregates / features → soft rules (not raw ledger dump) |
| Supplier / AP payees, payment schedule | AP financing / term moment | Event: large upcoming supplier pay |
| Business KYC already done for wallet **[HYP]** | Prefill KYB fields | Consent + field map wallet KYC → Kanmon apply |

**Wider net:** high-volume wallet users who never open Financing tab.  
**Streamline:** skip re-keying entity/volume.  
**Confident drive:** “Based on your payout activity, a quick check is low-effort.”

---

### C · Inventory / ERP (Cin7-like)

| Likely already in partner | Soft-pre-auth use | Likely **new pipeline** |
|---------------------------|-------------------|-------------------------|
| PO amount, supplier, due, stock levels | AP / inventory financing moment | PO-approved or stock-out-risk events |
| Channel sales / SKU velocity **[HYP]** | Seasonality soft score | Nightly feature sync (not every SKU row to UW) |
| Multi-entity locations | Identity complexity | Entity-resolution assist (ties to F16 research) |

**Wider net:** PO spikes / seasonal builds.  
**Streamline:** PO-backed apply prefill.  
**Confident drive:** tie CTA to **that PO**, not a buried Capital hub.

---

### D · Payments (Nuvei-like)

| Likely already in partner | Soft-pre-auth use | Likely **new pipeline** |
|---------------------------|-------------------|-------------------------|
| Processed volume, settlement timing, MCC | Revenue proxy · soft invite | Rolling volume features + freshness SLA |
| Merchant mid / boarding status | Tenure / “known good” | Boarding-complete → soft-eligible flag |
| Chargebacks / reserves | Soft exclude | Risk flags → no campaign |

---

### E · Staffing / vertical ops (Avionté-like)

| Likely already in partner | Soft-pre-auth use | Likely **new pipeline** |
|---------------------------|-------------------|-------------------------|
| Client invoices, timesheet→bill cycle | Invoice advance moment | Invoice-approved-unpaid events |
| Employer / contractor entity records | KYB seed | Owner/beneficial-owner if held (often isn’t) |
| Payroll dates | Working-capital timing | Calendar triggers (pre-payroll cash gap) |

---

### F · Thin SaaS / long-tail

Often only: email, company name, plan tier, last login.  
**Prejudice:** soft pre-auth is **weak** until you build pipes (billing export, accounting connect, or bank via Plaid *inside* Kanmon, which doesn’t help *pre*-click Bird 2 as much).  
**Sequence:** don’t lead F15 here; use as later partners once A–E patterns exist.

---

## Pipeline prejudice (what you’d likely build)

Even with rich partners, expect:

| Pipeline / system | Job |
|-------------------|-----|
| **Consent + data-share agreement** | Legal basis for partner → Kanmon fields |
| **Identity map** | `partner_customer_id` ↔ Kanmon applicant |
| **Feature sync** | Nightly/hourly aggregates (volume, tenure, open AR), not full DB replica |
| **Event webhooks** | Invoice overdue, PO approved, wallet shortfall, payroll-soon |
| **Soft-rule service** | Credit-approved soft thresholds → pass/fail/maybe + reason codes |
| **Prefill API** | Apply session hydrated from soft-pass payload |
| **Campaign trigger bus** | In-product + email (not SMS-first) when state = good candidate |
| **Suppression** | Opt-out, cooldown, suspended, recent decline, true-risk flags |

**MVP prejudice:** one archetype (probably **A invoice** or **B wallet**) × one design partner × prefill + one campaign trigger, not a universal partner-data lake day one.

---

## How this enables the three outcomes

| Outcome | How partner data helps |
|---------|------------------------|
| **Wider net** | Soft-pass people who never clicked; campaign only when state says candidate |
| **Streamline submit** | Prefill identity + object context → less abandon mid-apply |
| **Confident drive** | CTA copy can be specific (“this invoice / this PO / your payout pattern”) → higher trust than generic “Get capital” |

Same stone as two-birds doc: Bird 1 = simplify; Bird 2 = wider net + confident drive.

---

## T-shirt review by archetype (rough)

| Archetype | Data richness | Pipeline lift | Soft-pre-auth review |
|-----------|---------------|---------------|-------------------------|
| A Invoice/EDI | High | M | **First design partner** |
| B Wallet/payments | High | M–H | Strong #2 |
| C ERP/inventory | High | H (messy objects) | Strong but heavier |
| D Payments processor | Med–high | M | Good volume proxies |
| E Staffing vertical | Med–high | M | Good object moments |
| F Thin SaaS | Low | H | Defer |

---

## Case talk (30 seconds)

> Soft pre-auth only works if partners already hold useful SMB signals, invoice/EDI, wallet volume, POs, payment processing, staffing invoices. Those types can feed soft eligibility, prefill, and state-based campaigns so we cast a wider net *and* shorten submit *and* drive with more confidence. I’d prejudice that we still need new data pipelines, consent, features, events, soft rules, not just a CTA. Start with one rich archetype (e.g. invoice), soft only, Credit-gated language.

---

## Open questions for the hiring manager / partners

1. What fields do top partners already send vs only show in-portal?  
2. Is there a design partner willing to expand share for soft-pass + prefill?  
3. Soft-rule ownership: PM + Credit template, or Credit-only?  
4. Freshness SLA, stale volume features are dangerous for “good candidate” campaigns.
