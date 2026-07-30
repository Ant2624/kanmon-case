# Kanmon: D&B / DUNS entity lookup (exploration stub)

**Date:** 2026-07-29  
**Status:** `interesting` · `research`, **not a Bet**  
**Park:** F16 · Q17 · ties to leverage **#1–#3** (completions / preventable KYB)  
**Depth:** [`kanmon-exploration-park-20260729.md`](kanmon-exploration-park-20260729.md) · [`kanmon-leverage-deep-dive-20260729.md`](kanmon-leverage-deep-dive-20260729.md)

---

## Why Anthony cares (completions bet)

Leverage instinct = **application completions** + **avoid unnecessary rejections from inaccurate/missing details**, not changing risk models. KYB sits on apply/UW; ops runs KYB; PM partners UW/DS. Entity resolution could reduce identity friction, bad entity data, and duplicate/mismatch declines.

**Outcome framing:** ↑ complete KYB · ↓ preventable identity rejects · ↓ time-to-decision (among already-in-box).

---

## What D&B actually offers (fact vs marketing)

| Capability | What it is | Confidence |
|------------|------------|------------|
| **D&B Direct+ Identity Resolution** | Match free-text business record (name, address, reg #, phone, email) → ranked **D-U-N-S Number** with match-grade / confidence codes (`cleanseMatch`-class). Auto-accept above threshold or manual review. | **[FACT]** vendor API surface / docs indexes |
| **Search** | Find candidate businesses by criteria before enrich. | **[FACT]** Direct+ capability group |
| **Enrich (Data Blocks)** | Firmographics, hierarchy, principals, risk/financial blocks for a known D-U-N-S. | **[FACT]** Direct+ |
| **Multi-Process** | Match + enrich in one call (onboarding pattern). | **[FACT]** Direct+ |
| **Direct Onboard / Compliance suites** | Corporate identity match, identity verification, KYC-style layers, sanctions/watchlist screening, monitoring, marketed for CDD / faster onboard. | **[FACT]** product exists; **marketing** on speed/coverage claims (entity counts, update cadence) |
| **“Instant DUNS”** | Often means **resolve to an existing D-U-N-S** quickly; assigning a *new* number may still involve D&B registration / investigation flows, not a free third-party mint API for every unknown entity. | **[nuance]**, don’t overclaim |

**Sources (public):** [D&B Direct+ docs](https://directplus.documentation.dnb.com/) · [developer.dnb.com](https://developer.dnb.com/) · Direct 2.0 Onboard API overview · third-party API indexes summarizing Identity Resolution.

**Kanmon:** No public claim found that Kanmon uses D&B. Treat as **adjacent industry tooling**, not current-state fact. **[ABSENT-PUBLIC]**

---

## Fit to Kanmon case (without overclaiming)

| Fits | Does not fit |
|------|----------------|
| Completions / data-quality friction on apply→KYB | Changing UW/DS risk models or credit box |
| Preventable declines from wrong/missing legal entity | Full KYB/AML substitute |
| Time-to-decision via cleaner entity handoff to ops | “We already know Kanmon’s vendor stack” |

---

## Risks

- **Cost**, enterprise licensing; often opaque list price  
- **Vendor lock**. D-U-N-S as system-of-record identifier  
- **Privacy / redistribution**, license limits on storing/sharing enriched data  
- **Match error**, wrong entity worse than missing entity  
- **Not a substitute** for full KYB/AML / beneficial ownership / sanctions where required  

---

## Kill / promote criteria

| Promote toward Bet when… | Kill / park when… |
|--------------------------|-------------------|
| Decline/stall taxonomy shows material **identity / KYB data-quality** share (Q17) | Almost all fails are true risk or capital |
| Existing vendor already covers match well | Cost ≫ saved funded paths under C1 |
| Design partner + Legal clear on consent/storage | Match quality too low for SMB long-tail |

---

## Next research (if pursued)

1. Ask / infer: current KYB stack and top preventable decline reasons.  
2. Compare D&B vs Middesk / Persona / Alloy / registry-direct for SMB long-tail.  
3. Scope: match-only at apply vs enrich for ops queue, thinnest wedge first.
