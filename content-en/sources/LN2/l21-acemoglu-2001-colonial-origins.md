---
type: source
title: "L21 — Acemoglu, Johnson & Robinson (2001) — The Colonial Origins of Comparative Development"
tags: [institutions, colonialism, instrumental-variables]
created: 2026-07-23
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L21 AER-2001 Acemoglu The colonial origins of comparative development.pdf"
---

# L21 — Acemoglu, Johnson & Robinson (2001), American Economic Review 91(5): 1369–1401

**Authors**: Daron Acemoglu (MIT), Simon Johnson (MIT Sloan), James A. Robinson (UC Berkeley).
JEL: O11, P16, P51. The file in `raw/` is a 302-page PDF downloaded from AER-online, but only
the **first 33 pages are the actual article** (including appendix and references) — from page
34 onward is a "Cited by" list (Crossref, thousands of citations 2003–2023), not article
content.

## Abstract

> We exploit differences in European mortality rates to estimate the effect of institutions on
> economic performance. Europeans adopted very different colonization policies in different
> colonies, with different associated institutions. In places where Europeans faced high
> mortality rates, they could not settle and were more likely to set up extractive institutions.
> These institutions persisted to the present. Exploiting differences in European mortality
> rates as an instrument for current institutions, we estimate large effects of institutions on
> income per capita. Once the effect of institutions is controlled for, countries in Africa or
> those closer to the equator do not have lower incomes. (JEL O11, P16, P51)

**Summary (interpretation)**: Uses the difference in European colonial settlers' mortality
rates as an **instrument** to estimate the causal effect of institutions on economic
performance. Where mortality was high, Europeans could not settle → **extractive** institutions
were built; where mortality was low → **Neo-European**-style institutions were built
(protecting property rights, encouraging investment). These institutions persist to the
present. After controlling for institutions, African or near-equator countries no longer have
significantly lower income.

## Research Questions

What are the fundamental causes of cross-country income/capita differences? An identification
problem: rich countries may *choose* or *afford* better institutions (reverse causality) + many
omitted variables correlate with institutions + ex-post measurement of institutions has error →
an exogenous **instrument** is needed.

## Research Framework

The **theory of institutional differences**: settler mortality (exogenous) → settlement
feasibility → colonization strategy (settling & building law/investment-protecting
institutions vs. an extractive state transferring resources to the mother country) → early
institutions → current institutions → current income/capita. The main equation:
log yᵢ = μ + α·Rᵢ + Xᵢ'γ + εᵢ (1), with R = the endogenous institutions index.

## Hypothesis

**3 premises** underpinning the identification strategy:

1. Europeans pursued different colonization strategies — at one extreme, settling & building
   law/investment-protecting institutions (US, Australia, New Zealand), or building an
   extractive state (Congo, Gold Coast).
2. Colonization strategy was partly determined by settlement feasibility (high mortality →
   settlement not feasible).
3. Early institutions persisted to the present.

## Data

- **R** = "average protection against expropriation risk" 1985–1995 (0–10 scale, Political
  Risk Services, used by Knack & Keefer 1995) — measures current institutions.
- **M** = settler mortality rate (‰, data on European soldiers/missionaries 1817–1848, mainly
  malaria + yellow fever via Anopheles/Aedes aegypti mosquitoes — 80% of deaths in tropical
  regions, per Curtin 1989).
- Baseline sample: **64 ex-colonies** with sufficient settler mortality + institutions + GDP
  data (the full 110-country world sample is used for the OLS regression). Appendix Table A2
  has country-level data, including **Vietnam** (VNM: log GDP/capita PPP 1995 = 7.28, average
  protection against expropriation 1985–95 = 6.41, main mortality estimate = 140‰).

## Methodology

R is endogenous in (1), modeled via the first stage: Rᵢ = ζ + β·log Mᵢ + Xᵢ'δ + vᵢ (5),
estimated by **2SLS (two-stage least squares)** — log settler mortality instruments for
current institutions.

## Regression/Estimation Results

- **OLS (Table 2)**: institutions coefficient α = 0.52 (baseline sample of 64 countries),
  R²=0.54; full world sample α=0.54, R²=0.62. Illustrative example: Nigeria (25th percentile,
  R=5.6) vs. Chile (75th percentile, R=7.8) — an estimated 1.14-log-point gap (~2.1×) if
  causal, compared with an actual gap of 253 log points (~11×).
- **First stage (Table 3)**: log settler mortality alone explains **27%** of the variation in
  current institutions; the 1900 constraint on the executive explains 20%; 1900 European
  settlements explain ~30% of current institutions and ~50% of the variation in early
  institutions.
- **2SLS (Table 4, central result)**: institutions coefficient **α = 0.94** (SE = 0.16) —
  **larger** than the OLS estimate (0.52), implying measurement error (attenuation bias)
  matters more than reverse causality/omitted-variable bias in biasing OLS. Highly
  significant.

## Robustness Checks

Section V additionally controls for natural resources, soil quality, landlocked status, life
expectancy, infant mortality — these controls are mostly insignificant and change the 2SLS
estimate little; an **overidentification test** (using additional instruments) does not reject
the exclusion restriction. Adding latitude/continent dummies: the institutions coefficient
falls slightly but remains significant; the Africa dummy shows African countries are still 90
log points (~145%) poorer even after controlling for institutions.

## Key Findings

Institutions remain a **"black box"** — the results show lower expropriation risk brings large
benefits but do NOT identify any specific step to improve institutions. Institutional features
(expropriation risk, rule of law...) should be understood as an **equilibrium outcome** of
more fundamental institutions (e.g., presidential vs. parliamentary systems).

## Conclusion

Reiterates the 3 premises as the central conclusion; current institutions are **not an
unchangeable fate** from colonial policy — citing Meiji-era Japan and 1960s South Korea as
evidence that institutions can be substantially improved.

## Relevance to the Course/Vietnam

- The central theoretical foundation of [[institutions]] and of LN2 as a whole — the other 5
  papers in the lecture all build on the "institutions matter" premise this paper establishes
  through rigorous identification.
- Vietnam appears directly in Appendix Table A2 (raw data) — usable for an essay on the role
  of institutions in Vietnam.
- Exam prep question: explain the identification strategy (3 premises + exclusion
  restriction); why is 2SLS (0.94) > OLS (0.52) — attenuation bias vs. reverse causality.

## Links

- Lecture: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]]
  (theoretical foundation) · related to [[deep-roots-of-development]] (reversal of fortune,
  Spolaore & Wacziarg 2013 reuse this paper's results)
