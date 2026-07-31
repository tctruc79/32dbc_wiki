---
type: source
title: "L22 — Mauro (1995) — Corruption and Growth"
tags: [corruption, institutions, investment, instrumental-variables]
created: 2026-07-23
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L22 QJE-1995 Mauro Corruption and growth.pdf"
---

# L22 — Mauro (1995), The Quarterly Journal of Economics 110(3): 681–712

**Author**: Paolo Mauro (adapted from chapter 1 of his doctoral dissertation; employed at the
IMF at the time of publication — the paper notes the views expressed are not those of the
IMF). Published by Oxford University Press, JSTOR 2946696.

## Abstract

> This paper analyzes a newly assembled data set consisting of subjective indices of
> corruption, the amount of red tape, the efficiency of the judicial system, and various
> categories of political stability for a cross section of countries. Corruption is found to
> lower investment, thereby lowering economic growth. The results are robust to controlling
> for endogeneity by using an index of ethnolinguistic fractionalization as an instrument.

**Summary (interpretation)**: Analyzes a new dataset (Business International) of subjective
indices on corruption, red tape, judicial efficiency, and political instability for a
cross-section of countries. **Corruption lowers investment, thereby lowering economic
growth.** The result is robust when controlling for endogeneity using the ethnolinguistic
fractionalization (ELF) index as an instrument.

## Research Questions

The debate over corruption's effect was unresolved in the literature — Leff (1964) and
Huntington (1968) had argued corruption could **raise** growth (helping circumvent
bureaucratic delay — "speed money"; or creating work incentives for officials if bribes act
like piece-rate pay). Conversely Shleifer & Vishny (1993) and Rose-Ackerman (1978) argued
corruption lowers growth. Mauro is the **first systematic cross-country empirical analysis**
linking bureaucratic honesty/efficiency indices to economic growth — question: which
direction, and through what channel, does corruption actually affect growth?

## Research Framework

North (1990) emphasized the role of an efficient judicial system in economic performance. The
causal framework tested: corruption → lower investment → lower growth. Endogeneity issue:
institutions and economic variables co-evolve (institutions affect performance BUT
performance also affects institutions in return) → an instrument is needed.

## Data

The **Business International (BI, now part of the Economist Intelligence Unit)** index — 56
"country risk factors," 68 countries, 1980–1983 (and 30 factors, 57 countries, 1971–1979). The
paper uses 9 institutional efficiency indicators: institutional change, social change,
opposition takeover, labor stability, relations with neighboring countries, terrorism,
judiciary, red tape, corruption. Aggregated into a **corruption index**, a **bureaucratic
efficiency index** (average of judiciary + red tape + corruption), and a **political
stability index**.

## Methodology

Uses **ELF** (ethnolinguistic fractionalization — the probability two random individuals in a
country do not share an ethnolinguistic group) as an instrument — highly correlated with
corruption/institutions but arguably exogenous to economic variables. Estimates both **OLS and
2SLS** for comparison.

## Regression Results

- **Corruption and Investment**: a negative, significant correlation, both OLS and 2SLS. A
  one-standard-deviation improvement in the corruption index → investment rate **+2.9% of
  GDP**. This coefficient does NOT differ significantly between low- and high-red-tape
  countries (Table IV) — rejecting the Leff/Huntington hypothesis that corruption is only
  beneficial when bureaucracy is cumbersome.
- A one-standard-deviation improvement in the **bureaucratic efficiency index** → investment
  rate **+4.75% of GDP** (OLS); the coefficient is even **larger** under 2SLS with ELF —
  suggesting attenuation bias in OLS matters more than reverse-causality bias (paralleling
  Acemoglu et al. 2001's finding that 2SLS > OLS).
- **Institutional Efficiency and Growth**: the bureaucratic efficiency index is robustly
  negatively correlated with growth, even controlling for other standard growth determinants.
  Main channel: bad institutions → lower investment rate → lower growth.
- **Illustrative (headline) estimate**: if Bangladesh raised bureaucratic integrity/efficiency
  to Uruguay's level (= a one-SD improvement in the bureaucratic efficiency index), the
  investment rate would rise **~5 percentage points of GDP**, annual GDP growth **>0.5
  percentage points**.

## Key Findings

Bureaucratic efficiency may be **as important as political stability** as a determinant of
investment/growth.

## Conclusion

Three open research directions from the concluding remarks: (1) the positive correlation
between corruption efficiency and political stability needs explaining — Mauro (1993) proposes
a strategic-complementarity model: politicians setting high bribe rates shorten the whole
government's time horizon → other politicians likewise compete for today's "pie" rather than
tomorrow's → multiple equilibria in corruption/instability/growth; (2) corrupt/unstable
governments spend **less on education** (controlling for GDP/capita) — consistent with
Shleifer & Vishny's suggestion that corrupt rent-seeking opportunities are lower in education
than other spending categories; (3) institutional inefficiency is persistent over time → bad
institutions in the past may contribute to low growth → poverty today — but the paper does
**not analyze the reverse direction** (poverty → bad institutions), left open for future
research.

## Relevance to the Course/Vietnam

- Together with Acemoglu et al. (2001), these are 2 papers using an IV strategy to isolate
  institutions' causal effect — a good methodological template for a Vietnam institutions/
  corruption essay. Notable common thread: both papers find the 2SLS estimate **larger** than
  OLS, suggesting measurement error/attenuation bias is a shared issue when measuring
  institutions with subjective indices.
- Exam prep question: why is ELF a valid instrument for corruption? The
  corruption→investment→growth mechanism; compare to Acemoglu et al.'s institutions→income
  mechanism.

## Links

- Lecture: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]] ·
  related to [[l21-acemoglu-2001-colonial-origins]] (same 2SLS > OLS pattern)
