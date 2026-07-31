---
type: source
title: "L43 — Le (2020) — Floods and Household Welfare: Evidence from Southeast Asia"
tags: [floods, household-welfare, coping-strategies, subjective-wellbeing, vietnam, thailand, satellite-data]
created: 2026-07-29
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L43 EDCC-2020 Le Floods and household welfare.pdf"
---

# L43 — Le, T.N.T. (2020), Economics of Disasters and Climate Change 4(1): 145–170

**Author**: Thi Ngoc Tu Le (University of Göttingen; Hoa Sen University). JEL: I31, Q15, Q51,
Q54.

## Abstract

> This research uses a rich panel data set of household surveys and external long-term flood
> data, extracted from satellite images, to complete a puzzling picture of the effects of
> floods on household welfare. Floods impose a mixed impact on households. On the one hand, the
> floods reduce household incomes dependent on natural sources; while on the other hand, floods
> push farmers out of the fields to seek extra incomes from non-agricultural activities. In
> addition, the floods significantly increase some types of expenditure. The finding of a
> lower household subjective wellbeing score reaffirms all these results. Further, this
> research shows the efforts that rural households are making to cope with the effects of
> flooding. They employ both formal and informal coping mechanisms; however, only financial
> remittances are shown to be significantly effective in providing relief.

**Summary (interpretation)**: Floods are the world's most common type of natural disaster
(~40% of all large-scale disasters), and Southeast Asia is especially vulnerable. The paper
uses household panel data combined with long-run satellite flood data to complete what has
remained a "puzzling" picture of how floods affect household welfare.

## Research Questions

(i) How do floods affect households within a multidimensional concept of welfare? (ii) Which
insurance/coping channels are most commonly used, and which are most effective, in helping
rural households cope with flood shocks?

## Research Framework

Empirical strategy following the **Dell et al. (2014)** framework: a three-part reduced-form
regression with province × wave fixed effects: (1) direct effects on household
income/consumption; (2) coping strategies — interacting flood exposure with formal and
informal insurance variables; (3) **Subjective wellbeing (SWB)** — an ordinal logit model,
following the **OECD (2013)** framework's 3 domains: material conditions, quality of life, and
sustainability.

## Data

The **DFG-FOR756 "Vulnerability to Poverty in Southeast Asia"** project — the same data source
as [[l42-do-2023-land-consolidation-vietnam]]. A panel of 4,400 rural households, surveyed in
2007/2008/2010/2013, across **6 provinces**: 3 in Northeast Thailand plus 3 in Vietnam (**Ha
Tinh, Thua Thien Hue, Dak Lak**). **Objective flood data — a notable methodological feature**:
rather than relying on subjective self-reported survey data, the author uses **MODIS Flood
Water (MFW)** — daily NASA satellite imagery at ~250m resolution, combined with GIS/Google
Earth to delineate village boundaries. The flood variable is the share of village area
flooded, averaged over 2 consecutive years (0 = no flooding, 1 = fully flooded).

## Methodology

Reduced-form regressions (Dell et al. 2014) with province × wave fixed effects for 3 outcome
groups (income/consumption, coping strategies, subjective wellbeing). SWB measured via ordinal
logit on a 1–5 scale (very dissatisfied → very satisfied), both short run and long run (5
years).

## Regression/Estimation Results

- **Income (Table 4)**: when flood=1 (a fully flooded village), income from fishing/aquaculture
  falls by <span class="stat">~97%</span>*, livestock income by ~35%, and crop income by ~37%.
  Conversely, self-employment income rises ~126% and remittances rise
  <span class="stat">185%</span>*****.
- **Expenditure (Table 5)**: health spending rises <span class="stat">48.5%</span>*, education
  spending rises <span class="stat">42.0%</span>; non-food spending +22.3%, food spending
  +10.4%; total spending +~13%.
- **Coping strategies (Tables 6–7)**: private health insurance reduces the flood-related
  health-cost burden by ~36.2%; free public health cards do NOT reduce vulnerability. Among
  informal channels, **only remittances have a negative and statistically significant
  coefficient** (a 10% rise in remittances lowers the flood impact on total spending by 3.7%).
- **Subjective wellbeing (Tables 8–9)**: floods have a significant negative effect on short-run
  SWB (−0.403*, −0.427*); the long-run effect is negative but not statistically significant.
  The probability of being "very dissatisfied" rises by ~4.3 percentage points as flood water
  share moves from 0 to 0.99.

## Key Findings

Floods generate **mixed** effects: on one hand they reduce income dependent on natural
resources, and on the other they push farmers off the land toward non-farm income. Households
draw on both formal and informal coping mechanisms, but only **remittances** prove to be a
statistically significant mitigating channel — the scale of the impact is too large for
households to cope with on their own via other channels.

## Conclusion

"The experience of living in villages that are subject to flooding is not a happy one" — a
somber but consistent conclusion: floods harm households across multiple dimensions (income,
expenditure, subjective wellbeing) that existing coping mechanisms (apart from remittances) are
insufficient to offset.

## Relevance to the Course/Vietnam

- **An important methodological counterpoint to
  [[l44-vo-tran-2022-rural-vulnerability-vietnam]] and
  [[l45-tran-2022-rice-farmers-vulnerability-nghean]]**: all three papers ask "how do
  climate/disaster shocks affect household welfare," but use different measurement frameworks —
  L43 uses the **OECD wellbeing** framework plus reduced-form regressions directly on outcomes,
  while L44/L45 use the **LVI/LVI-IPCC** framework (an HDI-style composite index). See
  [[livelihood-vulnerability-index]].
- **Objective satellite data (MODIS)** is a methodological strength compared with L44/L45,
  which rely solely on subjective survey data.
- **Vietnam**: Ha Tinh and Thua Thien Hue are the two most flood-affected provinces in the
  sample — consistent with L44/L45's finding that the North Central/Central Coast region is
  Vietnam's most vulnerable region to climate disasters.

## Links

- Lecture: [[ln4-agriculture-climate-change-natural-disasters]]
- Concepts: [[livelihood-vulnerability-index]]
- Same lecture: [[l42-do-2023-land-consolidation-vietnam]] (same TVSEP data),
  [[l44-vo-tran-2022-rural-vulnerability-vietnam]],
  [[l45-tran-2022-rice-farmers-vulnerability-nghean]] (same welfare/vulnerability question, a
  different measurement framework — LVI rather than OECD wellbeing).
