---
type: source
title: "L43 — Le (2020) — Floods and Household Welfare: Evidence from Southeast Asia"
tags: [floods, household-welfare, coping-strategies, subjective-wellbeing, vietnam, thailand, satellite-data]
created: 2026-07-29
updated: 2026-07-29
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L43 EDCC-2020 Le Floods and household welfare.pdf"
---

# L43 — Le, T.N.T. (2020), Economics of Disasters and Climate Change 4(1): 145–170

**Author**: Thi Ngoc Tu Le (University of Göttingen; Hoa Sen University). JEL: I31, Q15, Q51,
Q54.

## Summary

Floods are the world's most common type of natural disaster (~40% of all large-scale disasters),
and Southeast Asia is especially vulnerable (35% of all flood events in the Asia-Pacific region,
1970–2014). The paper uses household panel data combined with long-run satellite flood data to
complete what has remained a "puzzling" picture of how floods affect household welfare. Floods
generate **mixed** effects: on one hand they reduce income dependent on natural resources, and on
the other they push farmers off the land toward non-farm income. Floods significantly raise
certain categories of spending, and lower subjective-wellbeing scores confirm these results.
Households draw on both formal and informal coping mechanisms, but only **remittances** prove to
be a statistically significant mitigating channel.

## Research Question & Methodology

- **Two research questions**: (i) how do floods affect households within a multidimensional
  concept of welfare? (ii) which insurance/coping channels are most commonly used, and which are
  most effective, in helping rural households cope with flood shocks?
- **Household data**: the **DFG-FOR756 "Vulnerability to Poverty in Southeast Asia"** project —
  the same data source as [[l42-do-2023-land-consolidation-vietnam]]. A panel of 4,400 rural
  households, surveyed in 2007/2008/2010/2013, across **6 provinces**: 3 in Northeast Thailand
  (Buri Ram, Ubon Ratchathani, Nakhon Phanom) plus 3 in Vietnam (**Ha Tinh, Thua Thien Hue, Dak
  Lak** — the same 3 provinces as L42).
- **Objective flood data — a notable methodological feature**: rather than relying on subjective
  self-reported survey data (prone to endogeneity, as households tend to exaggerate or downplay
  impacts), the author uses **MODIS Flood Water (MFW)** — daily NASA satellite imagery at ~250m
  resolution, combined with GIS/Google Earth to delineate village boundaries. The flood variable
  is the share of village area flooded, averaged over 2 consecutive years (0 = no flooding, 1 =
  fully flooded). This approach reduces the endogeneity from "subjective exaggeration" that
  Guiteras et al. (2015) identify as a weakness of self-reported/rainfall data.
- **Empirical strategy — following the Dell et al. (2014) framework**: a three-part reduced-form
  regression with province × wave fixed effects:
  1. Direct effects on household income/consumption (including health and education spending).
  2. Coping strategies — interacting flood exposure with formal insurance variables (free health
     cards, private insurance) and informal ones (assets, savings, remittances, non-farm income,
     social networks).
  3. **Subjective wellbeing (SWB)** — an ordinal logit model, following the **OECD (2013)**
     framework's 3 domains: material conditions, quality of life, and sustainability. Measured on
     a 1–5 scale (very dissatisfied → very satisfied), both in the short run and long run (5
     years).

## Key Results

- **Income (Table 4)**: when flood=1 (a fully flooded village), income from fishing/aquaculture
  falls by <span class="stat">~97%</span>*, livestock income by ~35%, and crop income by ~37%.
  Conversely, self-employment income rises ~126% and remittances rise
  <span class="stat">185%</span>***** — confirming the hypothesis that flooded households leave
  agriculture in search of non-farm income.
- **Expenditure (Table 5)**: health spending rises <span class="stat">48.5%</span>* in flooded
  (flood=1) villages, education spending rises <span class="stat">42.0%</span>; non-food spending
  +22.3%, food spending +10.4%; total spending +~13%.
- **Coping strategies (Tables 6–7)**: private health insurance reduces the flood-related
  health-cost burden by ~36.2%; free public health cards do NOT reduce vulnerability (the
  coefficient is even positive — because program recipients tend to already be more vulnerable to
  begin with). Among informal channels (assets, savings, remittances, non-farm income, social
  networks), **only remittances have a negative and statistically significant coefficient** (a
  10% rise in remittances lowers the flood impact on total spending by 3.7%) — remittances are
  the ONLY channel that is genuinely effective.
- **Subjective wellbeing (Tables 8–9)**: floods have a significant negative effect on short-run
  SWB (−0.403*, −0.427*); the long-run effect is negative but not statistically significant. The
  probability of being "very dissatisfied" rises by ~4.3 percentage points as flood water share
  moves from 0 to 0.99.
- **Conclusion (in a notably somber tone)**: "the experience of living in villages that are
  subject to flooding is not a happy one" — the scale of the impact is too large for households
  to cope with on their own.

## Significance for the Course/Vietnam

- **An important methodological counterpoint to
  [[l44-vo-tran-2022-rural-vulnerability-vietnam]] and
  [[l45-tran-2022-rice-farmers-vulnerability-nghean]]**: all three papers ask "how do
  climate/disaster shocks affect household welfare," but use different measurement frameworks —
  L43 uses the **OECD wellbeing** framework (material conditions/quality of life/sustainability)
  plus reduced-form regressions directly on outcomes (income, expenditure, SWB), while L44/L45
  use the **LVI/LVI-IPCC** framework (an HDI-style composite index). These represent two distinct
  traditions of measuring "vulnerability to climate" worth comparing for exam purposes — see
  [[livelihood-vulnerability-index]].
- **Objective satellite data (MODIS)** is a methodological point of contrast with L44/L45, which
  rely solely on subjective survey data — a clear strength of L43 in reducing endogeneity.
- **Same TVSEP/DFG-FOR756 data source as L42**: both survey Ha Tinh, Thua Thien Hue, and Dak Lak
  — indicating these are 3 focal provinces for rural-development research on Vietnam in the
  international literature; worth noting for cross-referencing figures if an essay focuses on
  this region.
- **Vietnam**: Ha Tinh and Thua Thien Hue are the two most flood-affected provinces in the sample
  (compared with Dak Lak and the Thai provinces) — consistent with L44/L45's finding that the
  North Central/Central Coast region is Vietnam's most vulnerable region to climate disasters.

## Links

- Lecture: [[ln4-agriculture-climate-change-natural-disasters]]
- Concepts: [[livelihood-vulnerability-index]]
- Same lecture: [[l42-do-2023-land-consolidation-vietnam]] (same TVSEP data),
  [[l44-vo-tran-2022-rural-vulnerability-vietnam]],
  [[l45-tran-2022-rice-farmers-vulnerability-nghean]] (same welfare/vulnerability question, a
  different measurement framework — LVI rather than OECD wellbeing).
