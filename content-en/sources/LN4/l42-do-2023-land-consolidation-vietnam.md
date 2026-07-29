---
type: source
title: "L42 — Do, Nguyen & Grote (2023) — Land Consolidation, Rice Production, and Agricultural Transformation: Vietnam"
tags: [land-fragmentation, land-consolidation, rice, poverty, vietnam, stochastic-frontier]
created: 2026-07-29
updated: 2026-07-29
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L42 EAP-2023 Do Land consolidation rice production and agricultural transformation Vietnam.pdf"
---

# L42 — Do, Nguyen & Grote (2023), Economic Analysis and Policy 77: 157–173

**Authors**: Manh Hung Do, Trung Thanh Nguyen, Ulrike Grote (Leibniz University Hannover). JEL:
D01, O12, Q12. Keywords: Rural transformation, Land fragmentation, Farm income, Non-farm income,
Poverty reduction, Simultaneous regression.

## Summary

**Land fragmentation** (a household's plots scattered and interspersed among other households'
plots) is a major barrier to economies of scale in agriculture across many developing countries.
In Vietnam, the egalitarian per-capita land distribution of the late-1980s Doi Moi era left land
highly fragmented — averaging 3.9 plots per household, with a mean plot size of 0.19 ha. The
revised 2013 Land Law and Decree 43/2014/ND-CP legalized and simplified the procedures for
**land consolidation**, aiming to improve economies of scale, but no impact evaluation had yet
been conducted. This paper (i) identifies the determinants of households' voluntary participation
in land consolidation, and (ii) evaluates its impact on rice-production costs, rural poverty, and
rural transformation. Results: land consolidation is driven by **farming efficiency**; it
significantly lowers land-preparation and harvest costs, raises farm income, and reduces poverty.

## Research Question & Methodology

- **Data**: TVSEP ("Poverty dynamics and sustainable development," DFG-FOR756 project — the same
  data source as [[l43-le-2020-floods-household-welfare]]) — a panel of rural households across 3
  central provinces: **Ha Tinh, Thua Thien Hue, and Dak Lak**. A balanced sample of **995
  rice-growing households** across 3 survey waves in 2010/2013/2017 (2,985 observations).
- **Measuring land fragmentation**: the **Simpson index** = 1 − Σ(aᵢ/A)² (aᵢ = area of plot i, A
  = total area). A declining Simpson index over time is treated as evidence the household has
  "consolidated" (LC=1).
- **Step 1 — estimating farming efficiency**: a **stochastic frontier** model in translog form,
  "true random-effects" specification (Greene 2005) — separating the inefficiency component from
  unobserved heterogeneity; correlated random effects (CRE, Mundlak 1978) address omitted-variable
  bias and reverse causality (inputs and outputs are determined jointly).
- **Step 2 — simultaneous-equation system**: linking farming efficiency and participation in land
  consolidation via **3SLS**, using **Lewbel's (2012) heteroscedasticity-based IV** to construct
  an internal instrument for the binary land-consolidation variable (addressing the problem of
  3SLS with a binary dependent variable), plus 2 exogenous village-level instruments (number of
  enterprises, average distance to fields). Diagnostic tests: Hansen–Sargan, Breusch–Pagan LM,
  Likelihood Ratio, Wald test.
- **Step 3 — SURE regression** (seemingly unrelated regression) for farm/non-farm income shares —
  addressing correlated errors across the two equations, since farm and non-farm labor
  allocation are interrelated.
- **Step 4 — impact evaluation**: **PSM combined with Difference-in-Differences (PSM-DD)**,
  kernel matching, 1,000 bootstrap replications, measuring impact on rice-production costs (6
  categories) and poverty — the **FGT index** (Foster–Greer–Thorbecke 1984) at two poverty lines,
  PPP $2.05/day (Vietnam's national poverty line) and PPP $3.20/day (the World Bank's poverty
  line for lower-middle-income countries).

## Key Results

- **Average farming efficiency**: 0.669 in the earlier period (2010–2013), 0.748 in the later
  period (2017), 0.696 across the full period — higher than Thailand (0.63), Cambodia (0.60), and
  Bangladesh (0.57).
- **Table 4 — bidirectional relationship**: farming efficiency has a **positive and significant**
  effect on participation in land consolidation (0.545*), but the reverse direction —
  participation in land consolidation → farming efficiency — is **not statistically significant**
  (−0.814, not sig.). This differs from Nguyen & Warr (2020) and Tu et al. (2021), which the
  authors attribute to differences in measurement/method.
- **Production costs (Table 6, PSM-DD)**: land consolidation reduces land-preparation costs by
  <span class="stat">PPP$24.35/ha</span>* and harvest costs by
  <span class="stat">PPP$41.82/ha</span>*** — driven by mechanization (combine harvesters
  replacing hand harvesting), as larger plot sizes enable machine use.
- **Table 5 — SURE**: land consolidation raises farm income per worker (1.141**) but has no
  significant effect on non-farm income per worker; it lowers the non-farm income share
  (−0.443***) and raises the farm income share (0.518***) — pushing rural transformation toward
  agricultural concentration for participating households.
- **Poverty**: the DD estimator (δ) shows that the land-consolidation participant group reduces
  poverty markedly more than the control group (e.g., the poverty headcount ratio falls by
  0.033* at the $2.05 line).

## Significance for the Course/Vietnam

- **Part of the same Vietnamese land-institutions picture as
  [[l41-ho-2021-land-tenure-vietnam]]**, but a different CHANNEL: L41 addresses
  **property rights/tenure security** (whether a land-use certificate is held), while L42
  addresses **land fragmentation/consolidation** (how scattered plots are). Both trace back to
  the same late-1980s Doi Moi period — L41 is a consequence of the 1993 reform granting land-use
  certificates, L42 a consequence of the egalitarian per-capita land distribution of the same
  period, which caused fragmentation. These are two sides of a larger land-institutions story:
  ownership rights alone are NOT sufficient if land remains fragmented, and conversely, land
  consolidation does NOT resolve tenure-security concerns.
- **Connection to [[institutions]] (LN2)**: land fragmentation represents a different kind of
  "institutional failure" than the classic institutions framework (corruption, extractive
  institutions) — it is a failure to reorganize the land market after a major institutional shock
  (collectivization → decollectivization). A note on L41/L42 has been added to the
  [[institutions]] page under "Application to Vietnam."
- **A noteworthy methodological point**: this is the paper in the course that best illustrates
  handling **simultaneity/reverse causality** via a simultaneous-equation system (3SLS + Lewbel
  2012) — distinct from how L41 handles endogeneity via Oster (2019) bias-adjustment. Both
  methods are chosen "in the absence of a clean exogenous IV" — a comparison worth making for
  exam questions on handling endogeneity in land research.
- **Vietnam**: the empirical evidence supports the 2014 land-consolidation policy — results
  suggest prioritizing high-farming-efficiency households for early participation (since the main
  causal direction runs from efficiency to participation), and investing in rural infrastructure
  (roads, enterprises), since these show up as instruments capturing competing non-farm
  opportunities against the incentive to consolidate.

## Links

- Lecture: [[ln4-agriculture-climate-change-natural-disasters]]
- Concepts: [[institutions]]
- Same lecture: [[l41-ho-2021-land-tenure-vietnam]] (land institutions, a different channel),
  [[l43-le-2020-floods-household-welfare]] (same TVSEP/DFG-FOR756 data source, same 3 central
  provinces, but L43 also draws on Thai data and focuses on flood shocks rather than land
  institutions).
