# Kanmon partner E2E: summary

**Full writeup:** `ops/drafts/prep/kanmon-partner-e2e-examples-20260729.md`  
**Labels:** **[F]** = public fact · **[H]** = illustrated hypothesis

---

## Three scenarios (titles)

1. **Cleo InvoicePay**, unpaid EDI invoice → invoice financing  
2. **PingPong Financing**, e-comm inventory peak → AP financing / term loan  
3. **Cin7 Capital**, supplier PO due → AP financing (inventory)

---

## Shared spine (any partner)

```
Need in SaaS → SURFACE → eligible START → OFFER → ACCEPT → FUND → USE → REPAY
                                                      ↑
                                         Kanmon = lender, capital, credit risk [F]
```

**Not originations:** signed partner · click only · declined · offer not accepted · limit with $0 draws.

---

## Customer journey (one line)

| | Cleo | PingPong | Cin7 |
|--|------|----------|------|
| Trigger | Net-60 AR | Peak inventory | PO / AP due |
| Surface | Finance on invoice [F] | Financing tab [F] | Money → Capital [F] |
| Apply | ~15 min + bank [F] | &lt;5 min + bank [F] | Questions + Plaid [F] |
| Decision | ≤3 BD offers [F] | ~24h avg / ≤3 BD [F] | ~1–2 BD [F] |
| Fund rail | Same-day ACH [F] | Into PingPong wallet [F] | Business bank ACH [F] |
| Drop risks | Never see CTA; approve-no-draw | Silent tab; wrong product | Hub buried; one-type lock |

---

## Handshake spine (instrument this)

```
session.create → eligibility.check → application.submit
  → credit.soft_pull → decision.rendered → offer.accepted
  → draw.request → funding.initiated → funding.settled
  → repayment.posted | repayment.failed
```

Names are **[H]**; behaviors (soft pull, ACH, bank link) are **[F]** where partner FAQs say so.

---

## System map (boxes)

```
Partner SaaS ←→ Kanmon platform ←→ UW / KYB / soft pull
                      ↓
              Capital / funding  →  ACH or partner wallet  →  SMB
                      ↓
              Servicing ←→ Partner analytics / webhooks [H]
```

---

## Capital stack: 30 seconds

**Kanmon [F]:** licensed lender; “provides the capital”; “assumes all credit risk”; equity-backed (a16z/Bessemer/TruStage Ventures Discovery Fund listed publicly as investors, **equity**, not proven loan warehouse).

**Not found [F]:** named warehouse bank, forward-flow buyer, or ABS for Kanmon, **don’t invent**.

**Industry path [H] as scale:** balance sheet → warehouse revolver → forward flow / whole-loan sale → ABS. Day-0 cash always comes from *someone*; at scale originators recycle via takeout so equity ≠ every dollar of UPB.

**Origination for capital partners:** eligible **loan asset** created (`funding.settled`), not a SaaS click.

---

## Interview hooks

- North star = **funded originations through partners** → count settled funds.  
- Levers: surface × eligible start × offer-fund × product fit.  
- Cleo = best **moment** example (invoice). PingPong/Cin7 = **hub** examples (tab/menu). Capital Moments thesis = move hub → moment.  
- You own distribution UX; Credit owns who gets an offer.
