---
type: source
title: "L22 — Mauro (1995) — Corruption and Growth"
tags: [corruption, institutions, investment, instrumental-variables]
created: 2026-07-23
updated: 2026-07-23
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L22 QJE-1995 Mauro Corruption and growth.pdf"
---

# L22 — Mauro (1995), The Quarterly Journal of Economics 110(3): 681–712

**Author**: Paolo Mauro (adapted from chapter 1 of his doctoral dissertation; employed at the
IMF at the time of publication — the paper explicitly notes the views expressed are not those
of the IMF). Published by Oxford University Press, JSTOR 2946696.

## Summary

Analyzes a new dataset (Business International) comprising subjective indices of corruption,
red tape, judicial efficiency, and various measures of political instability for a
cross-section of countries. **Corruption lowers investment, thereby lowering economic
growth.** The result is robust to controlling for endogeneity by using the ethnolinguistic
fractionalization (ELF) index as an instrument.

## Research Question & Methodology

- **Literature context**: the debate over the effect of corruption was unresolved — Leff
  (1964) and Huntington (1968) had argued corruption could **increase** growth (by helping
  agents circumvent bureaucratic delay — "speed money"; or by creating work incentives for
  civil servants if bribes function like piece-rate pay). Conversely, Shleifer & Vishny
  (1993) and Rose-Ackerman (1978) argued corruption lowers growth. Mauro provides the
  **first systematic cross-country empirical analysis** linking indices of bureaucratic
  honesty/efficiency to economic growth.
- **Endogeneity problem**: institutions and economic variables co-evolve (institutions affect
  performance, BUT performance also affects institutions in return) → uses **ELF** (the
  probability that two randomly selected individuals in a country do not belong to the same
  ethnolinguistic group) as an instrument — ELF correlates highly with corruption/institutions
  but can be treated as exogenous to economic variables.
- **Data**: the Business International (BI, now part of the Economist Intelligence Unit)
  index — 56 "country risk factors," 68 countries, 1980–1983 (and 30 factors, 57 countries,
  1971–1979). The paper uses 9 institutional efficiency indicators: institutional change,
  social change, opposition takeover, labor stability, relations with neighboring countries,
  terrorism, judiciary, red tape, corruption. These are aggregated into a **corruption
  index**, a **bureaucratic efficiency index** (average of judiciary + red tape + corruption),
  and a **political stability index**.

## Key Results

- **III.1 Corruption and Investment**: a negative, significant correlation, both in OLS and
  2SLS (with ELF as instrument). A one-standard-deviation improvement in the corruption index
  raises the investment rate by **+2.9% of GDP**. This coefficient does NOT differ
  significantly between low- and high-red-tape countries (Table IV) — rejecting the
  Leff/Huntington hypothesis that corruption is only beneficial when bureaucracy is
  cumbersome.
- A one-standard-deviation improvement in the **bureaucratic efficiency index** raises the
  investment rate by **+4.75% of GDP** (OLS); the coefficient is even **larger** under 2SLS
  with ELF — suggesting attenuation bias in OLS matters more than reverse-causality bias
  (paralleling the finding of Acemoglu et al. 2001, where 2SLS > OLS).
- **III.2 Institutional Efficiency and Growth**: the bureaucratic efficiency index is
  robustly negatively correlated with growth, even after controlling for other standard
  determinants of growth. Main channel: bad institutions → lower investment rate → lower
  growth.
- **Illustrative (headline) estimate**: if Bangladesh raised the integrity/efficiency of its
  bureaucracy to Uruguay's level (= a one-standard-deviation improvement in the bureaucratic
  efficiency index), the investment rate would rise by **~5 percentage points of GDP**, and
  annual GDP growth would rise by **>0.5 percentage points**.
- Secondary finding: bureaucratic efficiency may be **as important as political stability**
  as a determinant of investment/growth.

## Concluding Remarks — Three Open Research Directions

1. The positive correlation between corruption efficiency and political stability needs
   explaining — Mauro (1993) proposes a strategic-complementarity model: politicians who set
   high bribe rates shorten the time horizon of the entire government → other politicians
   likewise compete for their share of today's "pie" rather than worrying about tomorrow's →
   multiple equilibria in corruption/instability/growth.
2. Corrupt/unstable governments spend **less on education** (controlling for GDP/capita) —
   consistent with Shleifer & Vishny's suggestion that opportunities for corrupt rent-seeking
   are lower in the education sector than in other categories of spending.
3. Institutional inefficiency is persistent over time → bad institutions in the past may
   contribute to low growth → poverty today — but the paper does **not analyze the reverse
   direction** (poverty → bad institutions), leaving this open for future research.

## Significance for the Course/Vietnam

- Together with Acemoglu et al. (2001), this is one of two papers using an IV strategy to
  isolate the causal effect of institutions — a good methodological model for an essay on
  institutions/corruption in Vietnam. Notable common thread: both papers find the 2SLS
  estimate **larger** than OLS, suggesting measurement error/attenuation bias is a shared
  issue when measuring institutions with subjective indices.
- Exam prep questions: why is ELF a valid instrument for corruption? The
  corruption→investment→growth mechanism; compare it with the institutions→income mechanism
  in Acemoglu et al.

## Links

- Lecture: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]] ·
  related: [[l21-acemoglu-2001-colonial-origins]] (same 2SLS > OLS pattern)
