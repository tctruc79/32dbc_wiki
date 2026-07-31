---
type: source
title: "L14 — Sasges & Takahashi (2025) — Assessing the Influence of Three Policies on Vietnam's Economic Development"
tags: [vietnam, var, policy, electricity, globalization, privatization]
created: 2026-07-20
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN1 Economic development/L14 IE-2025 Sasges-Takahashi Assessing the influence of three policies on Vietnams economic development.pdf"
---

# L14 — Sasges & Takahashi (2025), International Economics 184: 100632

**Authors**: Gerard Sasges (Dept. of Southeast Asian Studies, National University of
Singapore), Harutaka Takahashi (Graduate School of Economics, Kobe University; Meiji Gakuin
University). JEL: O15, O53, O55. Received 16/02/2025, revised 14/08/2025, accepted 18/08/2025,
online 25/08/2025 — part of the special issue "Asian and international economics in an era of
globalization". Conducted in collaboration at IMERA (Institute of Advanced Studies, University
of Aix-Marseille); presented at ICES 2024 (Kindai University, Japan) and a France-Japan
conference at Sciences Po Aix.

## Abstract

> This study evaluates the contributions of three key policies—electricity infrastructure,
> globalization, and privatization—to Vietnam's economic development from 1980 to 2018. This
> period can be divided into two distinct phases: Period I (1980–1997) was characterized by
> high but unstable growth, while Period II (1998–2018) witnessed sustained high growth and
> improved stability. To assess the impact of these policies on GDP growth during both phases,
> impulse response and vector autoregression (VAR) analyses were conducted. Our results show
> that during Period I, globalization and energy infrastructure had immediate and substantial
> positive impacts on GDP growth but also contributed to growth rate instability. In Period II,
> power infrastructure and globalization continued to support GDP growth, though the effects
> were relatively minor. In contrast, privatization policies had a significant impact. They
> contributed to stable household consumption growth and enhanced the resilience of GDP growth
> to policy shocks, thus playing a key role in achieving the stable and high growth trajectory
> observed since 1998. While Vietnam's development path may appear unique from the standpoint
> of existing development theories, optimal growth theory offers a more suitable explanatory
> framework.

**Summary (interpretation)**: Evaluates the contribution of three development policies —
**electricity infrastructure, globalization, privatization** — to Vietnam's economic growth
1980–2018/2019, split into two phases: **Period I (1980–1997)** "unstable high growth" and
**Period II (1998–2019)** "stable high growth". Conclusion: Vietnam's development path is
unique relative to existing development theory; **optimal growth theory** is a more suitable
explanatory framework.

## Research Questions

Existing literature studies each factor separately (Tang et al. 2016 — energy→growth via
Granger causality; Binh 2011, Canh 2011, Loi 2021 — the reverse GDP→energy direction; Anwar &
Nguyen 2010 — globalization via FDI). This paper does not aim to establish causality but to
assess the **relative importance** of all three policies simultaneously in producing the
"stable high growth" era after 1998.

## Research Framework

Three foundational observations open the analysis: (1) a shift from late-1970s contraction to
rapid growth by 1982; (2) average growth exceeding 6.4% across the whole period; (3) a clear
1997 breakpoint — splitting **Period I (1980–1997, high but unstable growth)** and **Period II
(1998–2019, stable high growth)**. A demand-side analytical frame in the discussion section:
comparing the contribution of gross capital formation (China) versus household consumption
(Vietnam).

## Data

4 annual series 1980–2019: GDPG (real GDP growth rate, IMF); PERELECONS (log per-capita
electricity consumption in kWh, World Bank + Our World in Data); TROPEN (log
(Export+Import)/GDP, Penn World Table 10.0); PRIVZ (log domestic credit to the private sector
as % of GDP, World Bank).

## Methodology

An Augmented Dickey-Fuller (ADF) unit-root test → a **VAR (vector autoregression)** model
estimated equation-by-equation via OLS → **Impulse Response Function (IRF)** +
**Variance Decomposition (VD)** using Cholesky ordering. Software: EViews 13.

- Period I: VAR(2) (lag exclusion test). Cholesky order (CDO): **TR ⇒ PR ⇒ ELE ⇒ GDPG**.
- Period II: VAR(1) (AIC suggests lag 3 but it is unstable). CDO: **ELE ⇒ PR ⇒ TR ⇒ GDPG**.

## Regression/Estimation Results

### Period I (1980–1997)

- VAR(2) diagnostics: stable (6/6 inverse roots inside the unit circle), normal, no serial
  correlation.
- IRF: a 1 s.d. shock to TR (globalization) → GDPG rises **2 s.d.** in the first period; a 1
  s.d. shock to ELE → GDPG rises **1.44 s.d.**. Both fade gradually in periods 2–3.
- VD: in the first period, ~60% of GDPG variation is due to the TR shock, ~37% to the ELE
  shock — together **97%** of GDPG variation in Period I.

### Period II (1998–2019)

- VAR(1) diagnostics: stable (8/8 inverse roots inside the circle).
- IRF: PR and ELE produce only small **+0.2 s.d.** positive shocks in the first period, fading
  quickly; by period 2 ELE and TR turn NEGATIVE (**−0.2** and **−0.3 s.d.**), staying
  negative. PR starts slightly negative (−0.2 s.d.) then turns positive (+0.4 s.d.) and stays
  positive — a J-curve-like pattern.
- VD: only **25%** of GDPG variation in the first period is due to the three factors, rising
  to **40%** in later periods (the remaining 60% is explained by GDPG itself).

## Robustness Checks

Reversing the Cholesky decomposition order in Period II (ELE⇒TR⇒PR⇒GDPG instead of
ELE⇒PR⇒TR⇒GDPG) leaves the results largely unchanged — confirming the conclusion is not
sensitive to the assumed contemporaneous-causality ordering among the three policies.

## Key Findings

1. Period I: energy infrastructure + globalization initially boost GDP growth but the effect
   gradually diminishes and eventually turns unfavourable; globalization has a significantly
   larger impact than energy infrastructure.
2. Period II: the initial impact of both electricity infrastructure and globalization remains
   positive but small, soon turning negative and staying negative (since 90% of the
   population already had electricity by 2004; Period II trade liberalization boosts both
   exports AND imports, so net exports no longer have a clear impact).
3. Privatization (a new policy in Period II) is the standout NEW factor, contributing to
   stable household consumption growth and GDP resilience against policy shocks.
4. Comparing VN–China on the demand side: China relies on gross capital formation (which is
   cyclical); Vietnam relies on stable household consumption — the core difference explaining
   why VN achieved "stable" high growth while China remained highly volatile over the same
   period. WTO 2007: a negative net-export shock was almost fully offset by positive gross
   investment.

## Conclusion

Classical development theory (agriculture→industry transition via capital accumulation) does
not fit Vietnam's case: per the **Rybczynski theorem**, more capital → more capital-goods
output BUT less consumer-goods output → living standards FALL short-term if scarce domestic
savings are diverted into capital accumulation. Vietnam instead absorbed surplus labour into
the consumer-goods sector (100% electrification, land reform, universal education, FDI
attraction via Doi Moi) → achieved stable consumption. **Optimal growth theory** (Euler
equation, saddle-point stable steady state) is a more suitable theoretical framework — rarely
used in traditional development-economics theory. A parallel with post-WWII Japan (Takahashi
2023): reconstruction did not over-rely on capital accumulation, instead using existing
capital + democratizing reforms + absorbing surplus labour — GDP/capita recovered to pre-war
levels by 1956 despite the Korean War context.

## Relevance to the Course/Vietnam

- The paper directly illustrates "Vietnam as a development success story" with long-run
  quantitative data (1980–2019) — a good template for an essay using VN data, cross-referenced
  with [[essays-instructions]].
- Links to [[unconditional-convergence]] (Patel et al.): Vietnam is a concrete example of a
  middle-income country growing faster and more stably over time, matching the "rising
  persistence" Patel documents for the middle-income group.
- A methodological hint for a VN province/region comparison essay (LN1 slide 37): VAR + IRF +
  VD is a feasible tool for assessing policy impact at the local level, just as this paper
  does at the national level.
- The "optimal growth theory" frame (maximizing per-capita welfare rather than maximum capital
  accumulation) is a distinctive perspective worth noting for an essay on Vietnam's
  development model — directly opposed to the classical economic-takeoff model (Todaro &
  Smith).

## Links

- Lecture: [[ln1-economic-development]] · [[overview]] · Concept: [[unconditional-convergence]]
