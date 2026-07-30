# Drive-down logic: zeroing in on submission experience

**Date:** 2026-07-30  
**Owner:** Anthony Carter (case judgment)  
**Status:** Documented / settling, lead deep dive  
**Labels:** reasoning is Anthony’s; volumes **[SIM]** unless noted

**Companions:** F14 in workbench · Bet stage · `kanmon-abandon-opportunity-sizing-20260729.md` · on-track checklist

---

## One-line bet

**Partner soft pre-check and prefill**, so more people who *started* (intent already expressed) **finish submit** while still in the form. Soft ≠ hard approval amount. Not chase them back after they leave, and not invent demand at Seen.

Recovery (email + OTP) remains a **worthwhile residual** opportunity. It is **not** the lead bet: most starters never complete (~40–42% Start→Submit), so **preventing drop during submit beats going to get them back.**

---

## How I drove down (funnel of judgment)

```text
North star: originations via partner platforms
        ↓
Levers: more partners · more surface · more convert in funnel · broader products · credit/capital
        ↓  [A1] win = funnel throughput on live partners (not new logos first)
        ↓  [A2] visibility assumed solid → de-prioritize Seen / No-click for this case
        ↓  [I1] PM can own convert UX; cannot own risk models
        ↓
Where is the scarce, PM-owned leak with intent?
        ↓
ABANDON mid-apply (Start → Submit)  ← ~288 journeys / mo [SIM]
        ↓  Why: they already started = intent detected
        ↓  Size: gross ceiling ~$1.4M financed / mo; M t-shirt ~$230–250k if +10 pts CVR
        ↓
Abandon has MANY reasons (handoff, mid-form, bank, KYB, “later”)
        ↓  No silver bullet, two exploration paths:
        │
        ├─ Path A · PREVENT (primary)     what’s blocking completion in session?
        │              → soft pre-check + prefill (and UX) so finish is easier while they’re there
        │
        └─ Path B · RECOVER (secondary)   they left, email + OTP resume
                       → still valuable; harder than keeping them
        ↓
LEAD FEATURE = partner soft pre-check and prefill (Path A)
        Job = easier finish-in-flow · Recovery = sequenced after / residual (Path B)
```

---

## Why abandon (vs other pots)

| Alternative | Why not lead |
|-------------|--------------|
| Seen / No-click / Capital Moments | A2: visibility assumed solid; Moments commoditized; intent not yet as strong |
| Preventable **declines** (post-submit) | Smaller N (~18); many shapes; no silver bullet; diagnose taxonomy later |
| True risk / credit box | UW/DS, don’t claim to fix via PM UX |
| Factoring / BNPL | Product **line**, not 4–6 wk originations MVP |
| Pre-start (Click→Start) | Secondary; handoff-related but weaker “intent started” story than mid-apply |

**Abandon wins because:** intent already expressed **and** volume/opportunity size dominate.

---

## Why submission experience (prevent) over recovery

| | Prevent (in-flow submit UX) | Recover (email + OTP) |
|--|----------------------------|------------------------|
| Job | Meet people where they are; remove blockers so they don’t leave | Win back people who already dropped |
| Fit to ~40% Start→Submit | Majority never finish, fix the process they’re *in* | Only helps residual after leave |
| Product instinct | **Easier to keep than to chase** | Worthwhile, higher friction (open → OTP → resume → still finish) |
| Case lead? | **Yes** | Secondary / Phase 2 |

Spoken: *“Most people who start don’t submit. I’d ship partner soft pre-check and prefill so finishing is easier while they’re still in the form. Recovery is real money left on the table, but prevention is the higher-leverage first move.”*

---

## What “submission experience” means (scope for deep dive)

Still diagnose **which** blockers dominate, then wedge, e.g.:

- Clearer handoff / progress / time expectation  
- Prefill / fewer fields / save state *in session*  
- Bank-link and KYB guidance when that’s the stuck point  
- Step design that reduces mid-form abandon  

**Not yet locked:** one specific UI widget. Locked: **the lead feature = partner soft pre-check and prefill**; the job is in-flow complete-to-submit, not surface Moments and not recover-first.

**Non-goals for lead bet:** loosening credit box · new product lines · cold-traffic acquisition · SMS (blocked) as primary channel.

---

## Opportunity math (same pot either path)

Both prevent and recover move **Start→Submit → funded $**. Sizing still applies:

| | |
|--|--|
| Pot | ~288 abandon / mo [SIM] |
| Gross ceiling | ~77 funded · ~$1.4M / mo |
| M t-shirt (+10 pts → ~50% Start→Submit) | ~+13–14 funded · ~$230–250k / mo |

Prevent that lifts CVR +10 pts and recover that returns ~17% of abandoners to submit are **economically similar**; **choose prevent first on conversion logic**, not because recover has no $.

---

## Lead feature (locked framing)

**Partner soft pre-check and prefill** is the feature. It smooths submit **and** powers selective upstream CTAs/campaigns. Documented in `kanmon-f15-soft-preauth-two-birds-20260730.md`. Soft only, not hard pre-approval. Soft runs for everyone in program scope; no-need path still valid.

---

## Kill / reopen

| Signal | Action |
|--------|--------|
| Start→Submit already excellent (&gt;~60%) | Pot too small, don’t lead here |
| Diagnosis: drop is almost all true ineligibility / fraud | Re-size; don’t polish UX into a wall |
| A2 dies (Seen actually tiny) | Reopen surface / Moments-class work |
| Prevent ships and residual abandon still huge + email works | Promote recover as next wedge |

---

## Record of judgment (for AI workflow / reader)

1. Agent suggested Capital Moments → Anthony source-checked → **demoted** under A2 + commoditization.  
2. Completions-first (I1) → sized funnel → **abandon** largest PM-owned intent pot.  
3. Explored recover (email + OTP) as concrete feature → Anthony zoomed out: abandon is multi-cause → **prevent vs recover**.  
4. Anthony locked: **submission experience first**; recover worthwhile but secondary because most starters never complete.

This file is the SoT for that drive-down. Workbench **Bet** + **F14** + process beat **b54** mirror it.
