---
type: source
title: "L62 — Lööf & Heshmati (2006) — On the Relationship between Innovation and Performance: A Sensitivity Analysis"
tags: [innovation, firm-performance, knowledge-production-function, cdm-model, sweden, sensitivity-analysis]
created: 2026-08-01
updated: 2026-08-01
status: complete
source_file: "raw/3. LECTURE NOTES/LN6 Technology growth inequality and poverty/L62 EINT-2006 Loof-Heshmati On the Relationship between Innovation and Performance.pdf"
---

# L62 — Lööf, H. & Heshmati, A. (2006), Economics of Innovation and New Technology 15(4–5): 317–344

**Authors**: Hans Lööf (Industrial Economics and Management, Royal Institute of Technology,
Stockholm), Almas Heshmati (UNU/WIDER, Helsinki — the professor teaching this course). DOI:
10.1080/10438590500512810. JEL: C31, C24, L60, O31, O32.

## Abstract

> We examine sensitivity of the estimated relationship between innovation and firm performance.
> In doing so, we rely on a knowledge production function approach and carry out comparisons in
> a number of ways. The sensitivity analysis is based on the comparison of a basic econometric
> model estimated assuming different error structure and using the same data source, an identical
> model but different data sources, different classifications of firms performance, different
> classifications of innovation and the two main different subpopulations of the business sector.
> The analyses are performed in both level and growth-rate dimensions. New findings are reported
> and previous results are confirmed as well. The study gives indications of what factors cause
> variations in the estimated effects of interest and the direction of changes.

**Summary (paraphrase)**: A multi-dimensional sensitivity analysis of the innovation–firm
performance relationship: comparing different model specifications, estimation methods,
performance measures, innovation classifications, data sources, and 2 business-sector
subpopulations (manufacturing vs. service) — across both the level and growth-rate dimensions.

## Research Questions

The innovation–performance relationship has been widely studied but results vary considerably
across studies. The central question: how sensitive is the estimated innovativeness–firm
performance relationship to methodological/data choices, and what factors cause variation
between estimated results?

## Research Framework

The theoretical framework is a Cobb-Douglas production function extended with an R&D investment
variable. Since this only measures the R&D-input-to-output link while ignoring the "black box"
of knowledge production (Rosenberg 1982, 1994), the paper uses the **knowledge production
function** (Pakes & Griliches 1984), a 3-equation model (innovation input → innovation output →
performance), then extends it toward the **4-equation CDM model** (Crépon, Duguet & Mairesse
1998) to jointly correct selectivity bias (only firms doing R&D are observed) and simultaneity
bias (innovation input, innovation output, and performance are all mutually endogenous).

The paper's specific model is a **"structural multi-step approach"**: the first 2 equations
(selection + innovation input) are jointly estimated via generalized tobit; the last 2
(innovation output + performance) via **3SLS** (three-stage least squares), including the
inverted Mills' ratio (from the tobit) to correct selection bias and instruments for the
endogenous variable to handle simultaneity — differing from CDM in NOT assuming full correlation
across all 4 residuals.

## Data

Data from Sweden's extended **CIS (Community Innovation Survey)**, collected by Statistics
Sweden in 1999, covering 1996–1998, merged with register data (sales, value added, profit,
capital, human resources). Sample: 3190 complete observations (level, 1998), 2899 complete
observations (growth, 1996–1998) — covering >50% of Sweden's non-retail (manufacturing +
service) firms with ≥20 employees. An innovative firm is defined as: innovation input > 0 AND
innovation output (sales from new products) > 0 → 1309 firms (41.0%) innovative: 903
manufacturing, 363 service, 43 utility (excluded from analysis).

## Methodology

4 estimation procedures are compared on the same manufacturing sample: **Model 1** = simple OLS
(ignores both selectivity and simultaneity, innovative sample only); **Model 2** = 3SLS +
inverted Mills' ratio (the base model, correcting BOTH biases); **Model 3** = 3SLS WITHOUT the
Mills' ratio (corrects simultaneity only, ignores selectivity); **Model 4** = a 5-step OLS +
Mills' ratio procedure (corrects selectivity, ignores simultaneity). Model 2 (the base model) is
then applied separately to the manufacturing and service samples for comparison, and across
multiple performance measures (value added, sales, profit before/after depreciation, sales
margin, employment) in both the level and growth-rate dimensions.

## Regression/Estimation Results

- **Comparing 4 procedures (manufacturing sample, Table VII)** — elasticity of innovation output
  on value added/employee: level dimension: Model1 (OLS)=**0.054**, Model2 (3SLS+Mills)=**0.121**,
  Model3 (3SLS no Mills)=0.119 (≈Model2 → simultaneity bias more severe than selectivity), Model4
  (5-step)=**0.166** (biased UPWARD from ignoring simultaneity). Growth-rate dimension:
  Model1=0.024, Model2=0.070, Model3=0.058, Model4=0.073.
- **Comparing manufacturing vs. service (Table VIII, base model)**: elasticity of innovation
  output→value added/employee = **0.093 (service)** vs. **0.121 (manufacturing)** — a strikingly
  similar magnitude between the two sectors (not previously well documented). Human capital
  (engineers/administrators) correlates strongly with performance: administrators coefficient=1.314,
  engineers=1.033 (manufacturing) vs. 0.491/0.369 (service). Physical capital elasticity =0.140
  (manufacturing) vs. 0.052 (service).
- **Different performance measures (Table IX)**: employment increases with innovation output
  only for **service firms** (elasticity 0.122, level, significant), no significant correlation
  for manufacturing. Sales are a WORSE proxy than value added for the innovation-performance
  relationship.
- **Innovation classification (Table X)**: products new only to the firm (not the market) show a
  tighter relationship with performance in the level dimension; but in the growth-rate dimension,
  only innovations new to the MARKET drive productivity growth for manufacturing.

## Robustness Checks

The entire paper is essentially a chain of robustness checks (this is its main purpose, not a
side-section): (1) comparing data sources — **register data is more reliable than survey data**,
especially in the growth-rate dimension; (2) checking outlier influence by censoring extreme
values (productivity <100,000 SEK or >10 million SEK/employee, growth outside [−75%, +300%]) —
outlier influence is clearest for the sales/employee elasticity in the growth-rate dimension; (3)
benchmarking coefficient magnitudes against Griliches & Mairesse (1984, 0.07), Mairesse & Cuneo
(1985, 0.10), Crépon et al. (1998, 0.07–0.10) — this paper's coefficients (0.09–0.12) fall within
a similar range to the literature.

## Key Findings

**Simple OLS gives a downward-biased coefficient** due to ignoring both selectivity and
simultaneity bias; simultaneity is confirmed to be the more severe problem. **Manufacturing and
service firms are strikingly similar** in the innovation→productivity relationship in both the
level and growth dimensions — a finding not well documented before, supporting the view that
goods and services are not so different for productivity-analysis purposes. Employment increases
with innovation output only for service firms. Register data is more reliable than survey data,
especially for growth regressions.

## Conclusion

The paper concludes: simple OLS is unsuitable for analyzing the innovation-productivity
relationship due to downward bias. The base model (correcting both biases) yields significant
estimates in both level and growth-rate forms, with magnitudes matching prior literature.
Comparing manufacturing/service reveals a striking homogeneity not previously well documented.
Sales is a worse proxy than value added. Employment increases with innovation only for service
firms; no strong correlation is found between innovation intensity and profit growth for either
firm group. Register data is superior to survey data when both are available.

## Relevance to the Course/Vietnam

- A paper by Prof. Heshmati himself — a methodological pair with
  [[l61-heshmati-rashidghalam-2020-tfp-technology-shifters]] (that paper measures TFP at the
  country level, this one measures innovation-productivity at the firm level) — both share the
  theme of "how technology/innovation determines productivity" but differ in unit of analysis and
  endogeneity-correction technique.
- The CDM/knowledge-production-function framework (correcting selectivity + simultaneity via a
  Mills' ratio + instrumental-variable/3SLS) is a technique worth referencing for an essay
  wanting to measure the innovation-performance relationship among Vietnamese firms (e.g., GSO
  enterprise survey data) — in terms of endogeneity-handling logic, it can be contrasted with the
  **SGMM** used by [[l26-huynh-tran-2025-fdi-informal-economy]] (LN2) for a provincial panel:
  both aim to resolve endogeneity but with different tools (3SLS+Mills ratio for cross-section
  vs. SGMM for a dynamic panel).
- The "manufacturing and service are similar" finding suggests innovation policy for the service
  sector (rapidly growing as a share of Vietnam's GDP) need not fundamentally differ from
  manufacturing policy in terms of the innovation→productivity mechanism.

## Links

- Lecture: [[ln6-technology-growth-inequality-poverty]] · Concept:
  [[technology-change-and-tfp-growth]] · Person: [[almas-heshmati]] (author)
- Related: [[l61-heshmati-rashidghalam-2020-tfp-technology-shifters]] (same-author methodological
  pair), [[l26-huynh-tran-2025-fdi-informal-economy]] (LN2, endogeneity-technique contrast: SGMM
  vs. 3SLS+Mills ratio)
