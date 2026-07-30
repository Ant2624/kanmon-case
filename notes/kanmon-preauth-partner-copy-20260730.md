# Soft pre-check: partner in-product copy

**Feature (Experience mocks):** partner soft pre-check and prefill.  
**Payoff line:** makes the application easier to finish in-flow (and better top-of-funnel invites), not the other way around.

**Never say in partner UI:** “You’re approved for $X,” “guaranteed funding,” “instant approval,” “pre-approved” as a hard dollar claim.

**Credit/Legal** gate final claim strings before live partners.

---

## Voice

- Short. Specific to the object when you have one (this invoice, this PO).
- Calm money UI, no urgency theater.
- “Check” and “see if you qualify” beat “get capital now.”
- No-need is a normal exit, not a failure.

---

## Shared states (any product type)

| State | Primary | Secondary / helper | Primary button | Secondary |
|-------|---------|-------------------|----------------|-----------|
| Soft strong | You can check funding without starting from a blank form. | We’ll use details already in {Partner} to speed this up. This is not a funding decision. | Check funding | Not now |
| Soft weak | Funding might be an option, check takes a few minutes. | We don’t have a full picture yet. No hard decision until you finish with Kanmon. | See if you qualify | Not now |
| Prefill ready | Continue with details filled in from {Partner}. | Review everything. You can edit before you submit. | Continue application | Review first |
| No financing need | No problem, you can leave this. | Financing stays in {Partner} if you want it later. | Back to {Partner} | Remind me later |
| Incomplete data | We need a few details from you to check. | Partner data wasn’t enough for a soft check. | Start application | Cancel |
| Soft unavailable | Check funding the usual way. | Soft check isn’t available right now. | Start application | Cancel |
| Soft exclude / cooldown | Financing isn’t available for this account right now. | Contact support if you think that’s wrong. | OK |, |
| Mid-apply resume | Pick up where you left off. | Your progress is saved. | Continue | Save and exit |
| After soft → before hard decision | Application submitted. | Kanmon reviews credit separately. Timing varies; often within a few business days if you qualify. | Done |, |

---

## By product type

### A · Invoice / EDI

| State | Copy |
|-------|------|
| Soft strong + object | Check funding for invoice {#} ({amount} · due {date}). |
| Soft weak + object | See if this invoice can be funded, short check. |
| No need | Keep waiting on the buyer, leave financing for later. |
| Prefill | Invoice and business details are filled in. Confirm and finish. |

Footer microcopy: *Checking isn’t approval. Kanmon makes the credit decision.*

### B · Wallet / payments

| State | Copy |
|-------|------|
| Soft strong | Based on your payout activity, you can run a quick funding check. |
| Soft weak | See if financing fits, we’ll use what we can from your wallet profile. |
| Event (design assumption) | Large supplier payment coming up, check funding if you want a bridge. |
| No need | Skip for now. Financing stays under your account. |

Avoid: “Approved based on your volume.”

### C · ERP / PO

| State | Copy |
|-------|------|
| Soft strong + PO | Check funding for PO {#} ({amount}). |
| Hub only | Open Capital to see if financing fits, not a commitment. |
| No need | Pay from cash / other rails, dismiss. |
| Constraint note | If your account already has an active financing type, finish or change that first (partner rule). |

### D · Payments processor

| State | Copy |
|-------|------|
| Soft strong | Your processing history is enough to start a short funding check. |
| Soft exclude | Financing isn’t offered on this account right now. |
| No need | Dismiss, no change to payments. |

### E · Staffing

| State | Copy |
|-------|------|
| Soft strong + invoice | Check funding against client invoice {#}. |
| Payroll timing (design assumption) | Payroll soon, optional funding check if cash is tight. |
| No need | Quiet week is fine, dismiss. |

---

## Email (good-candidate only: Phase 1.5)

Caps: cooldown after dismiss; no SMS-first. Soft language only, never “approved for $X.”

### Soft invite

**Subject:** Quick funding check in {Partner}  
**Preview:** Check whether funding fits, we prefill what we already have. Not an approval.  
**Body:** Based on your activity in {Partner}, you can run a short funding check. We’ll prefill what we already have from {Partner}. This is not an approval and not a promised dollar amount. Kanmon makes the credit decision if you apply.  
[Check in {Partner}] · [Unsubscribe / fewer emails]

### Abandoned apply recovery (secondary)

**Subject:** Pick up your {Partner} funding application  
**Preview:** Your progress is saved. Finish when you’re ready.  
**Body:** You started a funding application from {Partner} and left before submitting. Your progress is saved. Finishing in the product is still the main path, this is a quiet recovery track.  
[Continue application] · [Unsubscribe / fewer emails]

### Not-now nurture

**Subject:** Funding stays available in {Partner}  
**Preview:** You said not now, that’s fine. A calm reminder only.  
**Body:** You chose not to check funding right now. That’s completely fine. If cash timing changes, you can check from {Partner} without starting from a blank form when soft prefill is available.  
[Open {Partner}] · [Unsubscribe / fewer emails]

---

## Strings to kill

| Kill | Why |
|------|-----|
| You’re pre-approved for $25,000 | Hard $ claim |
| Guaranteed / instant approval | False hope |
| Only serious borrowers | Shame + gates “need” |
| Act now or lose eligibility | Fake urgency |
| another company–style “see your offers” framing without partner truth | Wrong product family; don’t confuse brands |

---

## Review checklist before partner QA

- [ ] No dollar approval in partner chrome  
- [ ] Soft vs hard decision called out once per flow  
- [ ] Not now / don’t need works without dead end  
- [ ] Object ID present when object-tied  
- [ ] Legal reviewed claim verbs (*check*, *qualify*, *funding decision*)  
