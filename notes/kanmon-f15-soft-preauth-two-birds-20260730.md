# F15 exploration: partner soft pre-auth (two birds)

**Date:** 2026-07-30  
**Status:** Live lead feature framing, soft pre-check + prefill; finish-in-flow is the job / subline  
**Owner idea:** Anthony Carter  
**Label:** Feature (partner-integrated soft check + prefill + state-based campaigns)  
**Hard constraint:** **Soft** only, never “You’re pre-approved for $X” without Credit/Legal. UW/DS own the box **[interview]**.

**Companions:** Drive-down (`kanmon-drive-down-submission-experience-20260730.md`) · F5 soft teasers · park F15 · Bet

---

## The idea (Anthony)

Partner-integrated **soft pre-check / soft eligibility** capability that:

1. **Smooths submission**, partner-shared data pre-fills / shortens apply → fewer mid-apply abandons (Bird 1 · completions).  
2. **Lifts upstream click**. CTAs and education can honestly say checking is fast / low effort / low complexity → more people start (Bird 2 · surface→click).  
3. **State-based campaigns**, if partner+Kanmon logic says “good candidate,” auto-trigger (email/in-product): *easy to quickly check if you can get funding*, without hard-approving dollars.

**Two birds, one stone:** same capability is the **lead feature**, powers **easier finish-in-flow** and **selective upstream activation** (without returning to generic Capital Moments).

---

## Partner types × data (light map)

Soft pre-auth quality tracks **what the partner already knows**. Rich archetypes (invoice/EDI, wallet, ERP/PO, payments, staffing) can widen the net, simplify submit, and drive with more confidence, with prejudice that **new data pipelines** (consent, features, events, soft rules) are still required. Thin SaaS long-tail: defer.

Full map: [`kanmon-f15-partner-types-data-20260730.md`](kanmon-f15-partner-types-data-20260730.md)

---

## How it sits vs the locked drive-down

| Layer | Role |
|-------|------|
| **Lead feature** | Partner soft pre-check and prefill |
| **Job / subline** | Make finishing the application easier while people are still in the form; also better invites |
| **A2** | Still assume visibility can be solid, soft pre-check isn’t “spray Moments everywhere”; it’s **eligibility-informed** copy/campaigns for good candidates |
| **Recover** | Still secondary; soft pre-check may reduce need to chase |

If soft pre-check is too Credit/Legal-heavy for a 4–6 wk MVP, ship UX-only finish-apply improvements first; soft pre-check = Phase 2 unlock on same story.

---

## Capability sketch

```text
Partner systems ──(authorized share)──► Soft eligibility / prefill service
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    ▼                         ▼                         ▼
             Prefill apply              CTA / education copy      State campaigns
             (shorter submit)           (“quick check”)           (good candidates)
                    │                         │                         │
                    └─────────────► more complete submits + selective starts
                                         ↓
                              originations (funded via partners)
```

### Bird 1: smoother submit
- Prefill legal entity, address, revenue proxies, invoice/AP object context from partner  
- Fewer fields, clearer progress, less “I don’t have this on hand” abandon  
- Soft check may set expectations (*likely eligible to apply*, not funded amount)

### Bird 2: more click / start (psychological + truth-in-advertising)
- Copy/CTAs that reduce perceived **time, effort, complexity**, only honest if soft check + short apply are real  
- Triggers: urgency of cash need is partner’s; Kanmon’s job is “this won’t be a 45-min unknown form”  
- Auto-campaigns when state = good candidate: in-product + email (not SMS-first, a messaging vendor blocked **[interview]**)

---

## What “pre-auth” means here (words matter)

| Say | Don’t say |
|-----|-----------|
| Soft check / likely eligible to apply | Pre-approved for $25k |
| Prefill from partner relationship | Guaranteed funding |
| Quick check if you can get funding | Instant approval |
| Soft invite / teaser | Hard credit decision without UW |

False hope → decline surprise → partner brand risk + UDAAP/reg risk. Credit/Legal gate the claim language.

---

## Two-birds opportunity framing [SIM]

Same funnel math as abandon sizing; F15 can touch **two stages**:

| Bird | Stage moved | Illustrative hook |
|------|-------------|-------------------|
| 1 · Submit | Start→Submit (~40% → target 50%) | Prefill / shorter path · M t-shirt ~$230–250k |
| 2 · Click | Seen→Click or Click→Start | Soft CTA + campaigns · smaller per-pt than completions under A2, but **additive** if candidates are selective |

Don’t double-count. Case talk: *primary value = Bird 1; Bird 2 is upside if partner share + soft rules exist.*

---

## Dependencies / risks

| Risk | Mitigate |
|------|----------|
| Partner won’t share data | Contract + value prop (higher funded → their rev-share); start with 1 design partner |
| Credit rejects soft-pass users | Language = apply eligibility, not approval; align thresholds with UW |
| Spam / partner brand | Intensity caps; only “good candidate” states; cooldown |
| Scope creep vs sole PM | MVP = prefill for one product/object (e.g. invoice) + one CTA string; campaigns Phase 1.5 |
| Looks like Moments again | Differentiate: **data-backed soft check**, not generic “right moment” placement |

---

## Diagnosis questions (before locking F15 as *the* deep dive)

1. Which partner fields are already shared today vs need new consent?  
2. Can UW define a **soft** rule set that doesn’t pretend to be the model?  
3. What’s the #1 abandon reason, does prefill actually hit it?  
4. Under A2, is click already healthy on top partners, is Bird 2 real or vanity?  
5. 4–6 wk: prefill-only MVP vs full campaign engine?

---

## Outcome card (draft)

| Field | |
|-------|--|
| **Problem** | Starters abandon (friction/unknown effort); some eligible SMBs never click because apply feels hard |
| **Lever** | Start/submit UX + selective surface (partner data) |
| **Outcome** | ↑ Start→Submit; optional ↑ Click/Start among soft-pass; ↑ funded |
| **Counter** | False hope · loss band if soft rules too loose · partner spam · Legal claim risk |
| **Effort** | M–H (integrations + Credit/Legal); UX-only subset = M |
| **Sequence** | Instrument abandon → design-partner data share → soft rules → prefill MVP → CTA copy → campaigns |
| **Label** | Feature |
| **Money** | Funded $ via higher complete rate (+ selective starts) |

---

## Say while exploring

> I’m exploring partner-integrated soft pre-auth as a way to get two outcomes from one capability: shorter, prefilled submit for people who already started, and honest low-effort CTAs/campaigns for good candidates upstream. Soft only, not hard pre-approval. It extends the submission-experience bet rather than replacing it; if Credit/Legal or partner data aren’t ready in 4–6 weeks, I ship the in-flow UX wedge first and keep soft pre-auth as the unlock.

---

## Next (if promoting)

- [ ] Pick design partner + object (invoice vs AP)  
- [ ] Soft-rule sketch with “Credit owns hard decision”  
- [ ] Mock: partner CTA (“quick check”) → prefilled apply steps  
- [ ] Mock: campaign email for good-candidate state  
- [ ] Decide: F15 = deep-dive feature **or** Phase 2 on F14 story  
