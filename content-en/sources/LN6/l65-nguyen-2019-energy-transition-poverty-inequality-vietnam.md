---
type: source
title: "L65 — Nguyen, Nguyen, Hoang, Wilson & Managi (2019) — Energy Transition, Poverty and Inequality in Vietnam"
tags: [energy-poverty, energy-transition, energy-inequality, vietnam, sureg, probit]
created: 2026-08-01
updated: 2026-08-01
status: complete
source_file: "raw/3. LECTURE NOTES/LN6 Technology growth inequality and poverty/L65 EP-2019 Nguyen Energy transition poverty and inequality in Vietnam.pdf"
---

# L65 — Nguyen, T.T., Nguyen, T.-T., Hoang, V.-N., Wilson, C. & Managi, S. (2019), Energy Policy 132: 536–548

**Authors**: Trung Thanh Nguyen, Thanh-Tung Nguyen (Leibniz University Hannover, Germany),
Viet-Ngu Hoang, Clevo Wilson (Queensland University of Technology, Australia), Shunsuke Managi
(Urban Institute, Kyushu University, Japan). DOI: 10.1016/j.enpol.2019.06.001.

## Abstract

> This paper investigates energy transition, energy poverty and energy inequality in Vietnam
> employing a longitudinal dataset of a nationally representative household survey. We use the
> data on residential energy expenditure of more than 9,000 households over the period
> 2004–2016. We find a transition from traditional energy to modern energy but this transition
> varies across regions, between ethnic and welfare groups and between rural and urban
> population. The poor and ethnic minority households still rely heavily on traditional energy
> sources such as coal and biomass to meet their energy demands. Electricity poverty has
> decreased but energy-cost poverty has increased. In addition, energy inequality tends to
> decrease at a more significant rate than income and consumption inequalities. We propose a
> national program for energy poverty alleviation be established to devise policies to lower
> households' energy costs. Further assistance to the poor and ethnic minority households is also
> recommended so that they can afford a higher level of electricity consumption.

**Summary (paraphrase)**: The paper uses a nationally representative longitudinal household
dataset (VHLSS 2004–2016, >9000 households) to analyze 3 interrelated issues: **energy
transition** (shift from traditional to modern energy), **energy poverty**, and **energy
inequality** — the novelty is examining all 3 issues TOGETHER rather than separately as prior
literature did.

## Research Questions

2 research questions: (i) how have energy transition, energy poverty, and energy inequality
changed over time, and how do they differ across population clusters (region, ethnicity,
urban/rural, wealth)? (ii) what factors affect household energy expenditure and energy poverty?
Motivation: Vietnam is a paradigmatic case — rapid GDP growth (7%/year 2004-2014), sharply
falling income poverty, but NO dedicated energy poverty/inequality policy yet, and prior
literature had never studied all 3 issues simultaneously in VN.

## Research Framework

2 competing hypotheses on energy transition in the literature: the **energy ladder model**
(Hosier & Dowd 1987 — households have a clear ordered preference, fully shifting from
traditional to modern energy as income rises, a unidirectional model) vs. the **energy stacking
model** (Han et al. 2018 — households use a portfolio of energy sources SIMULTANEOUSLY
regardless of income changes, never fully abandoning older sources). Energy poverty is measured
via 2 approaches: **expenditure-based** (LIHC "low income high cost": the share of energy
expenditure in income above the median AND income below 60% of the median) and **access-based**
(electricity poverty: per-capita electricity consumption <100 kWh/year, the IEA threshold).
Inequality is measured via the Gini coefficient + Lorenz curve.

## Data

**VHLSS (Vietnam Household Living Standards Survey)**, conducted by GSO with WB and UNDP
support, 7 survey waves 2004/2006/2008/2010/2012/2014/2016, ~9000 households/wave (~65,000 total
observations, repeated cross-section rather than a full panel). Energy expenditure is classified
into 4 categories: (1) coal & biomass (coal, firewood, husk, sawdust, farm by-products), (2) oil
(kerosene, mazut, diesel, lubricant), (3) gas (LPG, natural gas), (4) electricity. Disaggregated
by: poor/non-poor, Kinh/ethnic minority, 6 ecological regions, urban/rural.

## Methodology

**OLS** for log per-capita energy expenditure (equation 2). **SUREG (seemingly unrelated
regression)** for the paired log coal/biomass expenditure and log electricity expenditure
equations jointly (correlated residuals — confirmed via a Breusch-Pagan test), following Nguyen
et al. (2017). **Probit** for 4 poverty-probability types (income, consumption, electricity,
energy-cost poverty). Explanatory variables: household head's age/education/ethnicity, household
size, share of dependents, durable-asset value (proxying wealth instead of income to avoid
endogeneity), self-employment, forest extraction, region/year dummies. VIF test for
multicollinearity.

## Regression/Estimation Results

- **Energy transition 2004-2016 (Table 2)**: share of households using coal/biomass FELL 36
  percentage points (76%→40%); share using gas ROSE 47pp (29%→76%); oil ROSE 8pp; electricity
  ROSE 7pp (92%→99%). Per-capita expenditure: coal/biomass FELL $2.8; oil ROSE $65.0; gas ROSE
  $17.3; electricity ROSE $44.1.
- **Uneven transition (Tables 3, 4)**: the Red River Delta transitioned fastest (coal/biomass
  users −58pp); the Northern region actually **INCREASED** per-capita coal/biomass expenditure
  by +$5.4 (the poorest region). Ethnic minorities: coal/biomass users 93%→77% (only −16pp) vs.
  Kinh 73%→32% (−41pp); minority per-capita coal/biomass expenditure actually **ROSE** $8 while
  Kinh's fell $6.
- **Energy poverty (Tables 5, 6)**: income poverty 25%→7%, consumption poverty ~40%→3.5%,
  electricity poverty 41%→8% (all fell sharply 2004-2016) but **energy-cost poverty ROSE 5
  percentage points** — the complete opposite direction of the other 3 measures. Ethnic-minority
  energy-cost poverty rose from 39% to 49%; rural households suffer energy-cost poverty at 9
  TIMES the rate of urban households by 2016.
- **Energy inequality (Tables 7, 8)**: income Gini 0.40→0.39, consumption Gini 0.34→0.32,
  energy-expenditure Gini 0.43→**0.37** (falling faster than income/consumption) — BUT the coal &
  biomass-specific Gini **ROSE SHARPLY 0.52→0.79** (inequality in traditional-energy access is
  worsening, especially in the Northern region and among ethnic minorities).
- **Influencing factors (Table 9, SUREG/Probit)**: ethnic minority → lower electricity/energy
  expenditure, higher coal/biomass expenditure, significantly higher probability of poverty (all
  4 types; energy-cost poverty coefficient=0.43***). Higher household-head education → lower
  poverty probability across all types. Rural residence → higher poverty probability across all
  types. Self-employment → lower poverty probability; forest extraction → higher poverty
  probability.

## Robustness Checks

A **VIF test** for multicollinearity among explanatory variables — rejects severe
multicollinearity, confirming valid model specification. A **Breusch-Pagan test** confirms
statistically significant residual correlation between the coal/biomass and electricity
expenditure equations, validating the SUREG choice over separate OLS. Results are cross-checked
across 4 sub-population cuts (ethnicity, urban/rural, poor/non-poor, region) — the
"disadvantaged groups lag behind" pattern is consistent across all 4 cuts.

## Key Findings

Vietnam shows a clear overall energy transition but it is **HIGHLY UNEVEN** — poor and
ethnic-minority households in the Northern region are a worrying exception, actually INCREASING
their reliance on coal/biomass. While 3 of 4 poverty measures improve (income, consumption,
electricity), **energy-cost poverty ROSE** — indicating energy costs are rising relatively faster
than income, creating a new burden for poor households. Overall energy inequality falls fast but
conceals a distributional paradox: coal/biomass-specific inequality ROSE sharply.

## Conclusion

3 main findings: (1) energy transition is clear but varies sharply by demographic profile, with
more developed regions transitioning faster — the exception being poor/ethnic-minority
households in the Northern region; (2) income/consumption/electricity poverty fall but
energy-cost poverty rises — energy costs are rising relatively faster than income; (3) energy
inequality falls faster than income/consumption inequality but coal/biomass inequality still
rises. Recommendations: (i) a national energy-poverty program (no dedicated policy exists yet);
(ii) lower energy costs by attracting private investment into electricity supply; (iii) promote
education + self-employment (positive effects on transition, negative effects on all poverty
types); (iv) special assistance for poor/ethnic-minority households to afford higher electricity
consumption.

## Relevance to the Course/Vietnam

- The third and most recent paper in LN6's Vietnam poverty cluster — together with
  [[l63-tran-alkire-klasen-2015-monetary-multidimensional-poverty-vietnam]] and
  [[l64-nguyen-pham-2018-growth-inequality-poverty-vietnam]] forming 3 lenses on measuring VN
  poverty: monetary, multidimensional, energy.
- **A substantive connection to L63**: the finding that "energy-cost poverty ROSE even as
  income/electricity poverty FELL" is a SECOND INDEPENDENT demonstration of
  [[l63-tran-alkire-klasen-2015-monetary-multidimensional-poverty-vietnam]]'s core thesis that
  different poverty measures diverge substantially and cannot substitute for one another — worth
  adding to exam-prep synthesis since these are 2 independent Vietnam papers showing this
  phenomenon with 2 different measure pairs.
- Connects to [[livelihood-vulnerability-index]] (LN4): energy is a dimension of rural
  Vietnamese vulnerability not directly measured by LVI/LVI-IPCC
  ([[l44-vo-tran-2022-rural-vulnerability-vietnam]],
  [[l45-tran-2022-rice-farmers-vulnerability-nghean]]) — both paper clusters independently
  confirm the North Central/Northern mountainous region as most vulnerable, despite using
  different frameworks (LVI composite index vs. SUREG/Probit energy expenditure).
- Thematically connects to [[l56-sharma-subba-2025-green-startups-sustainability]] (LN5): both
  discuss transitioning to cleaner energy/business models — but L65 measures actual
  distributional impact at the Vietnamese household level, while L56 discusses it at the
  firm/global-policy level; a complementary angle for an essay on clean-energy transition in
  Vietnam.

## Links

- Lecture: [[ln6-technology-growth-inequality-poverty]] · Concept:
  [[growth-inequality-poverty-nexus]]
- Related: [[l63-tran-alkire-klasen-2015-monetary-multidimensional-poverty-vietnam]] (poverty-
  measure divergence — 2nd independent connection),
  [[l64-nguyen-pham-2018-growth-inequality-poverty-vietnam]] (LN6's Vietnam poverty cluster),
  [[livelihood-vulnerability-index]] (LN4, rural VN vulnerability),
  [[l56-sharma-subba-2025-green-startups-sustainability]] (LN5, clean energy transition)
