# Kanmon: Partner privacy & consent guidance (US) · soft pre-check + prefill

> **Scope:** US only. **Not legal advice**. PM-level framing to structure the work; confirm permissible-purpose, adverse-action, and CCPA classifications with counsel. Requirements vary by product, borrower type (personal guarantor vs. pure commercial), and state.
> Sibling of `kanmon-preauth-architecture-by-product-20260730.md` · `kanmon-preauth-partner-copy-20260730.md` · `kanmon-preauth-funnel-lift-assumptions-20260730.md`.

## Why this exists

P0 (soft pre-check + prefill) sends partner-held SMB data to Kanmon and may run a soft credit check. The moment that data moves, **both the partner and Kanmon pick up US privacy / consumer-finance obligations.** This is the partner-review package Kanmon should provide, and a gating item in partner onboarding. It's the compliance half of the [load-bearing assumption](kanmon-backlog-sequencing-20260729.md): partners hold enough data *and* have the right to share it.

## The data flow that triggers obligations

- **Partner → Kanmon:** business identity, sales/deposit history, bank-connection data, and often a **personal guarantor's PII**.
- **Kanmon:** uses it to prefill the application and/or run a **soft** inquiry to gauge fit and present an offer.
- **Triggers:** guarantor PII + any consumer-report pull → **FCRA**; financial data handled by a lender → **GLBA**; California residents (incl. guarantors, some B2B) → **CCPA/CPRA**; any decline/less-favorable terms → **ECOA/Reg B** (and FCRA §615 if a consumer report was used).

## Partner-review checklist

1. **Privacy-policy disclosure clause (drop-in).** The partner's own policy must disclose that user data *may be shared with a financing provider (Kanmon) to evaluate and present financing*, with the data categories named and a link to Kanmon's privacy notice. Most partner policies were written for the core SaaS, not embedded lending, so Kanmon ships the clause.
2. **Explicit, in-flow consent / authorization.** At the pre-check step the SMB authorizes (a) sharing partner data with Kanmon and (b) a soft inquiry for prequalification. Capture, timestamp, and retain proof of consent.
3. **Permissible purpose (FCRA).** A soft pull still needs a permissible purpose. Cleanest path = **user-initiated prequal with written authorization**. If using prescreen / **firm offer of credit** (§604(c)/§615(d)): it must be a genuine firm offer, include the opt-out notice, and retain the criteria (5 yrs).
4. **Data minimization & purpose limitation.** Share only the fields each product needs (see data-scope matrix); no repurposing beyond the stated financing purpose.
5. **Data-sharing agreement / DPA.** Define roles (e.g., **service provider** vs. independent controller under CCPA), partner **represents it has the right to share**, plus security, breach, retention, and deletion terms.
6. **GLBA (nonpublic personal info).** If Kanmon is the financial institution, ensure a GLBA privacy notice + safeguards; the partner's sharing must be consistent with its own GLBA notice where applicable.
7. **CCPA/CPRA (California).** Classify the transfer, **service-provider** disclosure vs. "**sharing**"/"sale" (which triggers opt-out). Honor access/deletion. Note guarantor personal info and B2B nuances.
8. **Adverse action (ECOA/Reg B + FCRA).** If a soft signal ever informs a **decline or worse terms**, adverse-action notices attach (Reg B for business credit; FCRA §615 if a consumer report was used). Design decision: keep the soft pre-check **informational-only** to avoid triggering, or wire the notices.
9. **"Pre-qualified" vs. "pre-approved" language.** The soft check must **not imply a firm/guaranteed offer** unless it actually meets firm-offer rules. (Same guardrail as the P0 feature copy.)

## Roadmap implication: this splits P0

- **Light MVP: prefill + explicit in-flow consent** (no consumer-report pull). Mostly a UX + disclosure lift → ships first.
- **Full soft pre-check:** adds permissible-purpose review, DPA, and adverse-action wiring → heavier; may **gate per partner and per state**.
- **Sequence:** ship *prefill + consent* first; layer the *soft check* once each partner's privacy package is in place.

## What Kanmon should provide partners (product deliverables)

- Drop-in **privacy-policy disclosure clause** template.
- Standard **consent / authorization** copy + a reusable UX component.
- **DPA / data-sharing addendum.**
- **Data-scope matrix by product** (term loan, LOC, invoice, PO).
- A partner-onboarding **"privacy review" gate** (the checklist above).

## One-line for the interview

"Soft pre-check needs the partner's privacy house in order first, disclosure clause, in-flow consent, a data-sharing agreement, and a call on FCRA permissible-purpose / adverse-action. That's why I'd ship *prefill + consent* before the *soft check*: same finish-rate win, far lighter compliance surface."
