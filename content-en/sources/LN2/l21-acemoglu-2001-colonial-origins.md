---
type: source
title: "L21 — Acemoglu, Johnson & Robinson (2001) — The Colonial Origins of Comparative Development"
tags: [institutions, colonialism, instrumental-variables]
created: 2026-07-23
updated: 2026-07-23
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L21 AER-2001 Acemoglu The colonial origins of comparative development.pdf"
---

# L21 — Acemoglu, Johnson & Robinson (2001), American Economic Review 91(5): 1369–1401

**Authors**: Daron Acemoglu (MIT), Simon Johnson (MIT Sloan), James A. Robinson (UC Berkeley).
JEL: O11, P16, P51. The file in `raw/` is a 302-page PDF downloaded from AER-online, but only
the **first 33 pages are the actual article** (including appendix and references) — from page
34 onward is a "Cited by" list (Crossref, thousands of citations from 2003–2023), not the
content of the article.

## Summary

Uses the difference in mortality rates of European colonial settlers as an **instrument** to
estimate the causal effect of institutions on economic performance. Where mortality rates were
high, Europeans could not settle → **extractive** institutions were built; where mortality was
low → **Neo-European**-style institutions were built (protecting property rights, encouraging
investment). These institutions persist to the present day. After controlling for institutions,
African countries or those near the equator no longer have significantly lower income.

## Research Question & Methodology

- **Question**: what are the fundamental causes of cross-country differences in income per
  capita? The identification problem: richer countries may *choose* or *be able to afford*
  better institutions (reverse causality), plus numerous omitted variables correlate with
  institutions, plus ex-post measurement of institutions is subject to error → an
  **instrument** is needed.
- **Three-premise theory**: (1) Europeans pursued different colonization strategies — at one
  extreme, settling and building institutions protecting the rule of law/investment (US,
  Australia, New Zealand), or, at the other, establishing extractive states that transferred
  resources back to the mother country (Congo, Gold Coast); (2) the colonization strategy was
  partly determined by the feasibility of settlement (where mortality was high, settlement was
  not feasible); (3) early institutions persist to the present.
- **Key variables**: R = "average protection against expropriation risk" 1985–1995 (0–10
  scale, Political Risk Services, used by Knack & Keefer 1995) — measures current
  institutions. M = settler mortality rate (‰, data on European soldiers/missionaries from
  1817–1848, mainly due to malaria and yellow fever transmitted by Anopheles/Aedes aegypti
  mosquitoes — 80% of deaths in tropical regions, per Curtin 1989).
- **Main equation**: log yᵢ = μ + α·Rᵢ + Xᵢ'γ + εᵢ (1). R is endogenous, modeled as
  Rᵢ = ζ + β·log Mᵢ + Xᵢ'δ + vᵢ (5), estimated via 2SLS.
- Baseline sample: **64 ex-colonies** with sufficient data on settler mortality, institutions,
  and GDP (the full world sample of 110 countries is used for the OLS regression).

## Key Results

- **OLS (Table 2)**: institutions coefficient α = 0.52 (baseline sample of 64 countries),
  R²=0.54; full world sample α=0.54, R²=0.62 — over 50% of the variation in income per capita
  is associated with the institutions index. Illustrative example: Nigeria (25th percentile,
  R=5.6) vs. Chile (75th percentile, R=7.8) — an estimated gap of 1.14 log points (~2.1×) if
  the relationship is causal, compared with an actual gap of 253 log points (~11×) — showing
  that although institutions matter, they do not explain the entire gap. Adding
  latitude/continent dummies: the institutions coefficient falls slightly but remains
  significant; the Africa dummy shows African countries are still 90 log points (~145%) poorer
  even after controlling for institutions.
- **First stage (Table 3)**: log settler mortality alone explains **27%** of the variation in
  current institutions; constraint on the executive in 1900 explains 20% of current
  institutions; European settlements in 1900 explain ~30% of current institutions and ~50% of
  the variation in early institutions — confirming the causal chain
  mortality→settlement→early institutions→current institutions.
- **2SLS (Table 4, central result)**: institutions coefficient **α = 0.94** (SE = 0.16) —
  **larger** than the OLS estimate (0.52), implying that measurement error (attenuation bias)
  matters more than reverse causality/omitted-variable bias in biasing the OLS estimate.
  Highly significant.
- **Robustness (Section V)**: controlling additionally for natural resources, soil quality,
  landlocked status, life expectancy, and infant mortality — these control variables are
  mostly insignificant and change the 2SLS estimate little; an overidentification test (using
  C, S as additional instruments) does not reject the exclusion restriction.
- **Concluding remarks (Section VI)**: reiterates the three premises as conclusions;
  **institutions remain a "black box"** — the results show that reducing expropriation risk
  brings large benefits but do NOT identify any specific steps for improving institutions.
  Institutional features (expropriation risk, rule of law, etc.) should be understood as an
  **equilibrium outcome** of more fundamental institutions (e.g., presidential vs.
  parliamentary systems) — deeper analysis of this mechanism is left as a direction for future
  research. Emphasis: current institutions are **not an unchangeable fate** determined by
  colonial policy — citing Meiji-era Japan and 1960s South Korea as evidence that institutions
  can be substantially improved.
- Appendix Table A2: mortality/institutions data for individual countries, including
  **Vietnam** (VNM: log GDP/capita PPP 1995 = 7.28, average protection against expropriation
  1985–95 = 6.41, main mortality estimate = 140‰).

## Significance for the Course/Vietnam

- The central theoretical foundation of [[institutions]] and of LN2 as a whole — the remaining
  five papers in the lecture all build on the premise that "institutions matter," which this
  paper establishes through rigorous identification.
- Vietnam appears directly in Appendix Table A2 (raw data) — this raw data can serve as a
  reference for an essay on the role of institutions in Vietnam.
- Exam prep questions: explain the identification strategy (three premises + exclusion
  restriction); why is 2SLS (0.94) > OLS (0.52) — attenuation bias vs. reverse causality.

## Links

- Lecture: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]]
  (theoretical foundation) · related: [[deep-roots-of-development]] (reversal of fortune;
  Spolaore & Wacziarg 2013 reuse this paper's results)
