---
type: source
title: "L42 — Do, Nguyen & Grote (2023) — Land Consolidation, Rice Production, and Agricultural Transformation: Vietnam"
tags: [land-fragmentation, land-consolidation, rice, poverty, vietnam, stochastic-frontier]
created: 2026-07-29
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L42 EAP-2023 Do Land consolidation rice production and agricultural transformation Vietnam.pdf"
---

# L42 — Do, Nguyen & Grote (2023), Economic Analysis and Policy 77: 157–173

**Authors**: Manh Hung Do, Trung Thanh Nguyen, Ulrike Grote (Leibniz University Hannover). JEL:
D01, O12, Q12. Keywords: Rural transformation, Land fragmentation, Farm income, Non-farm
income, Poverty reduction, Simultaneous regression.

## Abstract

> Land consolidation is important to increase the economies of scale in farming, and
> understanding its determinants and effects is useful for policy-makers to support rural
> transformation. In this paper, we examine the factors determining the voluntary
> participation of farm households in land consolidation and investigate its impacts on crop
> production costs, rural poverty, and rural transformation. Our results show that land
> consolidation is driven by farming efficiency. It significantly decreases land preparation
> and harvest costs, increases farm income, and reduces poverty. We conclude that land
> consolidation should be promoted to facilitate the redistribution of farm land from farmers
> who want to leave agriculture to those who continue to work in agriculture. The
> redistribution of farmland promotes agricultural transformation by reallocating labor from
> farm to non-farm sectors.

**Summary (interpretation)**: **Land fragmentation** is a major barrier to economies of scale
in agriculture. In Vietnam, the egalitarian per-capita land distribution of the late-1980s Doi
Moi era left land highly fragmented — averaging 3.9 plots per household, mean plot size 0.19
ha. The revised 2013 Land Law legalized **land consolidation**, but no impact evaluation had
yet been conducted before this paper.

## Research Questions

(i) What factors determine households' voluntary participation in land consolidation? (ii) How
does land consolidation affect rice-production costs, rural poverty, and rural transformation?

## Research Framework

Agricultural transformation is an inseparable part of economic growth, characterized by the
reallocation of labor from farm to non-farm sectors, and the redistribution of farmland from
farmers who want to leave agriculture to those who continue farming (Johnston & Mellor 1961;
Lewis 1954). The framework positions farming efficiency and land consolidation in a
**potentially bidirectional** relationship, requiring a simultaneous-equation system rather
than a one-directional regression.

## Data

**TVSEP** ("Poverty dynamics and sustainable development," DFG-FOR756 project — the same data
source as [[l43-le-2020-floods-household-welfare]]) — a panel of rural households across 3
central provinces: **Ha Tinh, Thua Thien Hue, and Dak Lak**. A balanced sample of **995
rice-growing households** across 3 survey waves in 2010/2013/2017 (2,985 observations). Land
fragmentation is measured with the **Simpson index** = 1 − Σ(aᵢ/A)² (aᵢ = area of plot i, A =
total area); a declining Simpson index over time is treated as evidence the household has
"consolidated" (LC=1).

## Methodology

**Step 1** — estimating farming efficiency: a **stochastic frontier** model in translog form,
"true random-effects" specification (Greene 2005) — separating the inefficiency component from
unobserved heterogeneity; correlated random effects (CRE, Mundlak 1978) address endogeneity
from omitted variables and reverse causality. **Step 2** — a **simultaneous-equation system**
linking farming efficiency ↔ participation in land consolidation via **3SLS**, using
**Lewbel's (2012) heteroscedasticity-based IV** to construct an internal instrument for the
binary land-consolidation variable, plus 2 exogenous village-level instruments (number of
enterprises, average distance to fields). Diagnostic tests: Hansen–Sargan, Breusch–Pagan LM,
Likelihood Ratio, Wald test. **Step 3** — **SURE regression** (seemingly unrelated regression)
for farm/non-farm income shares. **Step 4** — impact evaluation: **PSM combined with
Difference-in-Differences (PSM-DD)**, kernel matching, 1,000 bootstrap replications, measuring
impact on rice-production costs (6 categories) and poverty via the **FGT index**
(Foster–Greer–Thorbecke 1984) at two poverty lines, PPP $2.05/day and PPP $3.20/day.

## Regression/Estimation Results

- **Average farming efficiency**: 0.669 in the earlier period (2010–2013), 0.748 in the later
  period (2017), 0.696 across the full period — higher than Thailand (0.63), Cambodia (0.60),
  and Bangladesh (0.57).
- **Table 4 — bidirectional relationship**: farming efficiency has a **positive and
  significant** effect on participation in land consolidation (0.545*), but the reverse
  direction — participation → farming efficiency — is **not statistically significant**
  (−0.814, not sig.), differing from Nguyen & Warr (2020) and Tu et al. (2021), which the
  authors attribute to differences in measurement/method.
- **Production costs (Table 6, PSM-DD)**: land consolidation reduces land-preparation costs by
  <span class="stat">PPP$24.35/ha</span>* and harvest costs by
  <span class="stat">PPP$41.82/ha</span>*** — driven by mechanization.
- **Table 5 — SURE**: land consolidation raises farm income per worker (1.141**) but has no
  significant effect on non-farm income per worker; it lowers the non-farm income share
  (−0.443***) and raises the farm income share (0.518***).
- **Poverty**: the DD estimator (δ) shows that the land-consolidation participant group reduces
  poverty markedly more than the control group (e.g., the poverty headcount ratio falls by
  0.033* at the $2.05 line).

## Key Findings

Land consolidation is driven by **farming efficiency** (the main causal direction runs from
efficiency to participation, not the reverse). Land consolidation promotes rural transformation
toward agricultural concentration for participating households, and significantly reduces
poverty.

## Conclusion

Land consolidation should be promoted to facilitate the redistribution of farmland from farmers
who want to leave agriculture to those who continue farming — this redistribution promotes
agricultural transformation by reallocating labor from farm to non-farm sectors.

## Relevance to the Course/Vietnam

- **Part of the same Vietnamese land-institutions picture as
  [[l41-ho-2021-land-tenure-vietnam]]**, but a different CHANNEL: L41 addresses property
  rights/tenure security, while L42 addresses land fragmentation/consolidation. Both trace back
  to the same late-1980s Doi Moi period — two sides of a larger land-institutions story:
  ownership rights alone are NOT sufficient if land remains fragmented, and conversely, land
  consolidation does NOT resolve tenure-security concerns.
- **Connection to [[institutions]] (LN2)**: land fragmentation represents a different kind of
  "institutional failure" than the classic institutions framework — a failure to reorganize the
  land market after a major institutional shock (collectivization → decollectivization).
- **A noteworthy methodological point**: this paper best illustrates handling
  **simultaneity/reverse causality** via a simultaneous-equation system (3SLS + Lewbel 2012) —
  distinct from L41's Oster (2019) bias-adjustment.
- **Vietnam**: the empirical evidence supports the 2014 land-consolidation policy — prioritize
  high-farming-efficiency households for early participation, and invest in rural
  infrastructure.

## Links

- Lecture: [[ln4-agriculture-climate-change-natural-disasters]]
- Concepts: [[institutions]]
- Same lecture: [[l41-ho-2021-land-tenure-vietnam]] (land institutions, a different channel),
  [[l43-le-2020-floods-household-welfare]] (same TVSEP/DFG-FOR756 data source, same 3 central
  provinces, but L43 also draws on Thai data and focuses on flood shocks rather than land
  institutions).
