---
type: source
title: "L61 — Heshmati & Rashidghalam (2020) — Estimation of Technical Change and TFP Growth Based on Observable Technology Shifters"
tags: [total-factor-productivity, technical-change, translog-production-function, panel-data, cross-country, k32-shortlist]
created: 2026-08-01
updated: 2026-08-04
status: complete
source_file: "raw/3. LECTURE NOTES/LN6 Technology growth inequality and poverty/L61 JPA-2020 Heshmati-Rashidghalam Estimation of TC and TFP growth based on observable technology shifters.pdf"
---

# L61 — Heshmati, A. & Rashidghalam, M. (2020), Journal of Productivity Analysis 53: 21–36
> ⭐ ⭐ **ON THE OFFICIAL K32 SHORTLIST** — this is one of the 20 papers Prof. Heshmati fixed on 28/8/2026 as the question scope for the 06/9 written exam. This paper also **repeats from the K31 shortlist**. See [[k32-shortlist-2026]].


**Authors**: Almas Heshmati (Department of Economics, Sogang University, Seoul; Jönköping
International Business School, Sweden — the professor teaching this course), Masoomeh
Rashidghalam (Department of Agricultural Economics, University of Tabriz, Iran — corresponding
author). DOI: 10.1007/s11123-019-00558-5. JEL: C33, C43, D24, O33, O47, O50.

## Abstract

> This paper models and estimates total factor productivity (TFP) growth parametrically. The
> model is a generalization of the traditional production function model where technology is
> represented by a time trend. It decomposes TFP growth into an unobservable time trend induced
> technical change, scale economies and an observable technology shifter index's components. The
> empirical results are based on unbalanced panel data at the global level for 190 countries
> observed over the period 1996–2013. It uses a number of exogenous growth factors in modeling
> four technology shifter indices to explore development infrastructure, finance, technology and
> human development determinants of TFP growth. Our results show that unobservable technical
> change remains the most important component of TFP growth. Our findings also show that
> technical changes and TFP growth are unexpectedly negative across all country income groups and
> years.

**Summary (paraphrase)**: The paper models TFP growth by extending the traditional translog
production function (where technology is represented only by a time trend) to add 4 observable
**technology shifter indices**. TFP growth is decomposed into 3 components: (i) unobservable
technical change (TC, the time trend), (ii) scale economies, (iii) the technology shifter index.
Unbalanced panel data, 190 countries 1996–2013.

## Research Questions

TFP growth offers an opportunity to raise economic welfare — the central research question: what
determinants should policymaking focus on to enhance TFP growth? The paper sets 2 specific aims:
(i) measure TFP growth and the rate of technical change using both unobserved and observable
sources; (ii) compute exact returns to scale.

## Research Framework

The TC/TFP growth literature falls into 4 groups (Diewert 1981): parametric estimation (from
Solow 1957 onward), non-parametric indices (Malmquist), exact index numbers (Fisher), and linear
programming. The paper uses a **parametric/econometric** approach based on the translog
production function since it allows estimating and decomposing TFP growth, controlling for
production/environmental/managerial/technology factors that the non-parametric approach (the
Divisia index) cannot.

The model extends the translog production function with a time trend (pure exogenous TC) by
adding 4 **"technology shifters"** — functions of exogenous factors: (1) the **infrastructure
index** (trade openness, internet users, mobile phone subscribers/100 people); (2) the **finance
index** (savings % GDP, FDI % GDP, stock market capitalization % GDP); (3) the **technology
index** (R&D expenditure, hi-tech exports, non-resident patent applications); (4) the **human
capital index** (health expenditure % GDP, education expenditure % GDP, tertiary school
enrollment %). Each index is a weighted sum (weights constrained to sum to 1) of 3 component
shifters.

## Data

Unbalanced country-level panel, 190 countries, 1996–2013, N=3362 observations, source Global
Economy.com. Output = aggregate GDP. Inputs: LABOR (persons employed), CAPINV (capital
investment, USD), ENEUSE (aggregate energy use). 12 exogenous factors make up the 4 technology
indices above. Countries are split into 5 income groups (very low/low/medium/high/very high,
~20% of the sample each, GDP/capita as proxy).

## Methodology

4 models are estimated: (1) **Cobb-Douglas time trend** (CD); (2) **translog time trend** (TT);
(3) nonlinear **translog technology index** (TI); (4) **restricted technology index** (RTI) —
using pre-specified weights (from Heshmati & Kumbhakar 2014 + expert knowledge) instead of
estimated weights, enabling a direct TT-vs-TI test (a nuisance-parameter identification problem
arises when H0 sets the weights to 0). Models 2 and 3 are estimated via **non-linear least
squares** with the weight-sum-to-1 constraint, plus country dummies to follow a fixed-effects
panel approach.

Model selection uses an F-test (translog vs. CD), AIC/BIC information criteria (Table 3), and a
likelihood-ratio test (Table 4) — Model 4 (RTI) has the lowest AIC/BIC and is preferred across
all tests.

## Regression/Estimation Results

- **Model 1 (Cobb-Douglas)**: elasticities labor=0.447, capital=0.579, energy=0.222 (all
  significant <1%); RTS=1.248 (increasing).
- **Model 2 (TT)**: mean elasticity labor=0.35, capital=0.75, energy=0.08; RTS>1 in every
  year/income group (mean 1.184). **Mean TFP growth across the whole sample ≈ −1.5%**, NEGATIVE
  in every income group EXCEPT the very-low-income group (+0.8%). Mean TC −1.8%, shifting from
  positive (+1.7% in 1996) to continuously negative (−5.4% by 2013).
- **Model 3 (TI, technology index)**: elasticity labor=0.360, capital=0.599, energy=0.038; mean
  RTS ≈0.998 (near constant). **TC and TFP growth are NEGATIVE in ALL income groups and every
  year** (mean TFP −3.6%, ranging −6.7% in 2008 to −1.4% in 1997; mean TC −3.4%). Elasticity of
  the 4 technology indices: infrastructure=0.181, finance=0.167, **technology index=−0.043
  (NEGATIVE, counterintuitive)**, human capital=**0.234 (highest)**.
- Countries with the highest TFP growth: Dominica (5.5%), San Marino (4.8%), UK (4%), Malta
  (3.6%); lowest: Tuvalu (−16.7%), Niger (−15%), Chad (−14.4%).
- **Model 4 (RTI)** retains almost identical signs/significance to Model 3, confirming Model 4
  outperforms Models 1–3 per the LR test and AIC/BIC.

## Robustness Checks

The paper tries 2 alternative weighting specifications for the technology index — (i) simple
equal weights (0.333/0.333/0.334) and (ii) entering the technology indicators directly as
control variables in the production function instead of aggregating into an index — both lead to
the SAME qualitative conclusion (TC/TFP negative in every income group), so the authors report
only the RTI version (Model 4) to conserve space.

## Key Findings

**Unobservable technical change (TC, the time-trend component) remains the most important
component of TFP growth** — substantially larger than the scale-economies or technology-index
components. The finding that TC and TFP growth are NEGATIVE across ALL income groups and years
in the technology index model is the paper's **most surprising result** — it contradicts the
ordinary expectation that high-income countries (with more R&D, better infrastructure) would
show positive TFP growth. The human capital index has the strongest positive TFP elasticity,
while the technology index (R&D/hi-tech exports/patents) has a slight NEGATIVE elasticity.

## Conclusion

The paper applies the parametric method to examine TFP growth for 190 countries 1996–2013. Model
3 (TI) is best supported by the data — this is the specification whose technology-index weights
are ESTIMATED directly from the data (unlike Model 4/RTI, which uses PRE-SPECIFIED expert-imposed
weights). Labor and capital elasticities are positive as expected across all income groups; RTS >
1 (increasing returns to scale). However, TC and TFP growth are NEGATIVE across all income groups
and years in the technology index model; TC declines over time. The decomposition shows TC's
contribution is negative in all models. Production elasticities with respect to the technology
indices confirm the human capital index has the largest impact.

## Relevance to the Course/Vietnam

- A paper by Prof. Heshmati himself — same author as
  [[l62-loof-heshmati-2006-innovation-performance]] at a different level of analysis (country vs.
  firm); the two papers form LN6's opening methodological pair, laying the TFP/technical-change
  groundwork before the 3 empirical Vietnam papers in the lecture's second half.
- Vietnam is part of the 190-country sample, in the low/lower-middle income group during
  1996–2013 — the finding that TC/TFP are negative across EVERY income group (including the
  very-low group in Model 3) suggests Vietnam's GDP growth in this period cannot be attributed
  purely to technological catch-up but rather reflects capital/labor accumulation — directly
  connected to the mechanism behind the [[middle-income-trap]] (technology-upgrading failure).
- This negative TC/TFP finding adds a cautionary angle to the convergence debate: while
  [[l11-patel-2021-unconditional-convergence]] (LN1) finds middle-income countries grew
  GDP/capita FASTER after 1985 (evidence against the middle-income trap at the GDP level), this
  paper shows the TFP/technical-change component underlying that growth is negative — the two
  results are not directly contradictory (different variables: GDP/capita growth vs. TFP
  decomposition) but suggest GDP growth may stem more from input accumulation than genuine
  productivity improvement.
- The 4-technology-shifter-index framework (infrastructure/finance/technology/human capital) is
  a good template for an essay wanting to measure Vietnam's national-level technological
  capability quantitatively rather than qualitatively.

## Links

- Lecture: [[ln6-technology-growth-inequality-poverty]] · Concept:
  [[technology-change-and-tfp-growth]] · Person: [[almas-heshmati]] (author)
- Related: [[l62-loof-heshmati-2006-innovation-performance]] (same-author methodological pair,
  country vs. firm level), [[middle-income-trap]] (LN1, technology-upgrading mechanism),
  [[l11-patel-2021-unconditional-convergence]] (LN1, convergence contrast)
