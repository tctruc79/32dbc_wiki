---
type: source
title: "L14 — Sasges & Takahashi (2025) — Assessing the Influence of Three Policies on Vietnam's Economic Development"
tags: [vietnam, var, policy, electricity, globalization, privatization]
created: 2026-07-20
updated: 2026-07-26
status: complete
source_file: "raw/3. LECTURE NOTES/LN1 Economic development/L14 IE-2025 Sasges-Takahashi Assessing the influence of three policies on Vietnams economic development.pdf"
---

# L14 — Sasges & Takahashi (2025), International Economics 184: 100632

**Authors**: Gerard Sasges (Dept. of Southeast Asian Studies, National University of
Singapore), Harutaka Takahashi (Graduate School of Economics, Kobe University; Meiji Gakuin
University). JEL: O15, O53, O55. Received 16/02/2025, revised 14/08/2025, accepted 18/08/2025,
online 25/08/2025 — part of the special issue "Asian and international economics in an era of
globalization." Collaborative work conducted at IMERA (Institute of Advanced Studies,
University of Aix-Marseille); presented at ICES 2024 (Kindai University, Japan) and a
France-Japan conference at Sciences Po Aix.

> **Update 2026-07-26**: the full text (12 pages, resent by Prof. Heshmati) is now available —
> previously only the ScienceDirect abstract page was on hand. All content below is drawn from
> the full text.

## Summary

Assesses the contribution of three development policies — **electricity infrastructure,
globalization, privatization** — to Vietnam's economic growth from 1980–2018/2019, split into
two periods: **Period I (1980–1997)**, "unstable high growth," and **Period II (1998–2019)**,
"stable high growth." Uses VAR combined with impulse response functions (IRF) and variance
decomposition (VD). Conclusion: in Period I, globalization and electricity infrastructure had
immediate, large positive effects on GDP growth but also contributed to instability; in Period
II, electricity and globalization still supported growth but with relatively small effects,
while **privatization had a substantial effect**, helping to stabilize household consumption
growth and increasing the resilience of GDP to policy shocks — playing a pivotal role in the
stable-high-growth trajectory from 1998 onward. Conclusion: Vietnam's development path is
unique relative to existing development theory; **optimal growth theory** is better suited as
an explanatory framework.

## Research Question & Methodology

- **Question**: existing literature studies each factor separately (Tang et al. 2016 — energy→
  growth via Granger causality; Binh 2011, Canh 2011, Loi 2021 — the reverse direction,
  GDP→energy; Anwar & Nguyen 2010 — globalization via FDI). This paper does not aim to
  establish causality but to assess the **relative importance** of all three policies
  simultaneously in producing the "stable high growth" era after 1998.
- **Data — four annual series, 1980–2019**: GDPG (real GDP growth rate, IMF); PERELECONS (log
  per-capita electricity consumption in kWh, World Bank + Our World in Data — extrapolated to
  2018 from original data spanning 1971–2014); TROPEN (log (Export+Import)/GDP, Penn World
  Table 10.0); PRIVZ (log domestic credit to private sector as %GDP, World Bank).
- **Methodology**: Augmented Dickey-Fuller (ADF) unit root tests → a **VAR (vector
  autoregression)** model estimated by OLS equation-by-equation → **Impulse Response Function
  (IRF)** + **Variance Decomposition (VD)** using a Cholesky decomposition ordering. Software:
  EViews 13. The authors emphasize that IRF is a common macro tool but has "never been used" (to
  their knowledge) to assess historical policies of this kind in Vietnam.
  - Cholesky decomposition ordering (CDO): **TR ⇒ PR ⇒ ELE ⇒ GDPG** — TR (globalization) is not
    affected by other variables within the same period, PR (privatization) is affected only by
    TR, ELE (electricity) is affected by both TR and PR, and GDPG is affected by all three —
    partially consistent with the causality findings of Tang et al. (2016). A different ordering
    would yield a different interpretation.
  - ELE is always placed first in the CDO for Period II because the Vietnamese government
    committed to prioritizing electricity infrastructure development continuously since 1960,
    regardless of fluctuations in trade/privatization.

## Key Results

### Three Foundational Observations on Vietnam's Growth

(1) a shift from a late-1970s downturn to rapid growth beginning in 1982; (2) average growth
of **>6.4%** across the whole period; (3) a clear breakpoint in **1997**. Table 1 (mean and
standard deviation): Vietnam Period I (1980–97) 6.3% (sd 3.18) vs. China 9.6% (sd 3.05);
Vietnam Period II (1998–2019) 6.6% (sd 0.79) vs. China 8.5% (sd 1.87) — China's growth standard
deviation in Period II is **more than double** Vietnam's. The "Vietnamese miracle" is not just
high growth but achieving **stable high growth** after 1998.

### Period I (1980–1997) — VAR(2)

Optimal lag = 2 (lag exclusion test, given data limits a maximum lag of 3). VAR(2) diagnostics:
stable (6/6 inverse roots within the unit circle), normal, no serial autocorrelation.

- **IRF**: a one-standard-deviation (s.d.) shock to TR (globalization) → GDPG rises **2 s.d.**
  in the very first period; a one-s.d. shock to ELE (electricity) → GDPG rises **1.44 s.d.**.
  Both effects gradually weaken over periods 2–3.
- **Variance Decomposition**: in the first period, ~**60%** of GDPG variation is due to the TR
  shock, ~**37%** due to the ELE shock — together accounting for **97%** of GDPG variation in
  Period I. Globalization has a larger impact than electricity infrastructure.

### Period II (1998–2019) — VAR(1)

AIC suggests lag 3, but the 3-lag and 2-lag models are unstable (eigenvalue >1) → VAR(1) is
chosen (8/8 inverse roots within the circle, stable). CDO ordering: **ELE ⇒ PR ⇒ TR ⇒ GDPG**
(the alternative ordering ELE⇒TR⇒PR⇒GDPG produces no material change in results).

- **IRF**: PR and ELE produce only small positive shocks of **+0.2 s.d.** on GDPG in the first
  period, weakening quickly; in period 2, ELE and TR shift to NEGATIVE shocks (**−0.2 s.d.** and
  **−0.3 s.d.**), remaining negative for the rest of the period (because 90% of the population
  already had electricity access by 2004 → the marginal returns of electricity infrastructure
  investment fell sharply; Period II trade liberalization boosted both exports AND imports, so
  net exports no longer had a clear effect on GDP). PR (privatization) initially shows a small
  negative shock (−0.2 s.d.) before turning positive (+0.4 s.d.), remaining positive for the
  rest of the period — the roles of globalization and privatization are both important across
  both periods, but privatization is the NEW factor that stands out in Period II.
  - Comparative reading: in the first period, ELE produces a positive shock similar to TR in
    Period I, but subsequently produces persistently negative shocks — electricity
    infrastructure has "run out of room" for positive impact.
- **Variance Decomposition**: in the first period, only **25%** of GDPG variation is due to the
  three factors combined; in later periods this rises to **40%** (the remaining 60% is
  explained by GDPG itself — internal inertia). This is a complete contrast with Period I (97%
  of variation from the two policies).

### Six Synthesized Conclusions (Section 3.4)

1. Period I: energy infrastructure and globalization initially boosted GDP growth, but their
   effectiveness gradually declined, eventually turning into a drag.
2. VD confirms that these two policies account for 97% of period-to-period GDP growth
   variation in Period I.
3. Globalization has a substantially larger impact than electricity infrastructure in Period I.
4. Period II: the initial impact of both electricity infrastructure and globalization remains
   positive but small, soon turning negative and staying negative.
5. Privatization (the new policy in Period II) initially has a small negative impact, then
   turns positive and stays positive — resembling the J-curve effect observed in trade
   balances.
6. VD confirms that the three policies together have only a negligible impact in Period II
   (just 40% of variation, versus 97% in Period I) — the Vietnamese economy has developed
   resilience to policy shocks, contributing to the remarkable growth stability of Period II.

### Discussion (Section 4) — Vietnam vs. China from the Demand Side

- **China**: gross capital formation (aggregate investment) contributes the most to GDP growth
  and shows a clear cyclical pattern.
- **Vietnam**: household consumption contributes STABLY and continuously to GDP growth — the
  core difference explaining why Vietnam achieved "stable" high growth while China remained
  highly volatile over the same period.
- WTO accession in 2007: a large negative shock from net exports (due to trade liberalization)
  was almost entirely offset by positive gross investment.
- Period II stabilization mechanism: electricity infrastructure raised living standards →
  stabilized household consumption; Đổi Mới (Renovation) reforms → GDP/capita reached USD 1,000
  by 2008, the poverty rate fell to 10% by 2004 — welfare improvements occurred simultaneously
  with FDI offsetting the domestic savings shortfall WITHOUT sacrificing household consumption.

### Conclusion (Section 5) — Optimal Growth Theory, Not the Classical Capital-Accumulation Model

- Classical development theory: the agriculture→industry transition (economic takeoff) through
  capital accumulation. But according to the **Rybczynski theorem**, increasing capital →
  increases production of capital-intensive goods BUT decreases production of consumer goods →
  living standards FALL in the short run if limited savings are channeled into capital
  accumulation — this is NOT the optimal path.
  - Directly rebuts/finds inapplicable the classical economic-takeoff model (classical capital
    accumulation) for Vietnam's case.
- Instead, Vietnam absorbed surplus labour into the consumer goods sector — the government set
  targets for 100% electrification, land reform, universal education, and FDI attraction (the
  Đổi Mới policy package) → developing the consumer goods sector → achieving stable consumption
  levels. Per-capita electricity consumption is nearly proportional to per-capita GDP —
  implying the Vietnamese government "implicitly solved" the problem of the optimal consumption
  path that maximizes GDP/capita.
- **Optimal growth theory** (Euler equation, saddle-point stable steady state) is a more
  suitable theoretical framework — one rarely used in traditional economic development theory.
- **Comparison with post-WWII Japan** (Takahashi 2023): reconstruction did not rely excessively
  on capital accumulation but instead used existing capital plus democratizing reforms (land
  reform, dissolution of the zaibatsu) plus absorption of surplus labour into the consumer
  goods sector — GDP/capita recovered to pre-war levels by 1956 despite the backdrop of the
  Korean War.

## Significance for the Course/Vietnam

- The paper directly illustrates "Vietnam as a development success story" with long-run
  quantitative data (1980–2019) — a good model for an essay using Vietnamese data, to be
  cross-referenced with [[essays-instructions]].
- Connects to [[unconditional-convergence]] (Patel et al.): Vietnam is a concrete example of a
  middle-income country growing faster and more stably over time, consistent with the
  "increasing persistence" that Patel et al. document among middle-income countries.
- Suggests a methodology for a topic comparing Vietnam's provinces/regions (LN1 slide 37): VAR
  + IRF + VD is a viable toolkit for assessing sub-national policy impacts, analogous to how
  this paper operates at the national level.
- The "optimal growth theory" framework (maximizing per-capita welfare rather than maximum
  capital accumulation) is a notably distinct perspective for an essay on Vietnam's development
  model — directly contrasting with the classical economic-takeoff model (Todaro & Smith).

## Links

- Lecture: [[ln1-economic-development]] · [[overview]] · Concept: [[unconditional-convergence]]
