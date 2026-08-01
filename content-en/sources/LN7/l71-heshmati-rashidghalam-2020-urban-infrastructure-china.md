---
type: source
title: "L71 — Heshmati & Rashidghalam (2020) — Measurement and Analysis of Urban Infrastructure and Its Effects on Urbanization in China"
tags: [infrastructure, urbanization, china, principal-component-analysis, panel-data]
created: 2026-08-01
updated: 2026-08-01
status: complete
source_file: "raw/3. LECTURE NOTES/LN7 Investment in development infrastructure health and education/L71 ISENG-2020 Heshmati-Rashidghalam Measurement and analysis of urban infrastructure in China.pdf"
---

# L71 — Heshmati, A. & Rashidghalam, M. (2020), Journal of Infrastructure Systems 26(1): 04019030

**Authors**: Almas Heshmati (Dept. of Economics, Sogang University, Seoul — the professor
teaching this course, see [[almas-heshmati]]), Masoomeh Rashidghalam (Dept. of Agricultural
Economics, University of Tabriz, Iran). DOI: 10.1061/(ASCE)IS.1943-555X.0000513. Submitted
4/3/2018, approved 6/3/2019. Keywords: Urbanization; Multidimensional index; Composite index;
Principal component analysis; Urban infrastructure; Chinese provinces.

## Abstract

> This paper studies urbanization in China using composite indices of urban infrastructure. It
> has two objectives. First, it computes a multidimensional composite index of urban
> infrastructure for ranking 31 provinces and six regions in China by their level of urbanization
> and infrastructure development during the period 2005–2014. The infrastructure index is
> composed of 15 components: consumption, culture, economic, education, employment, environment,
> finance, human development, health, housing, social security, social services, technology,
> transport, and utilities. Second, the paper estimates the effects of the aggregate urban
> infrastructure index and its underlying components on urbanization levels. Our empirical
> results suggest that provincial and regional disparities are significant and allocations for
> urban infrastructure are not balanced between the different provinces and regions. Guangdong
> and Tibet have the highest and lowest values of urban infrastructure respectively while the
> Eastern and Southeast regions have the highest and lowest urbanized populations, respectively.
> [...] Our estimation results indicate that the economics, employment, human development,
> health, housing, security, utilities, and technology components of urban infrastructure had
> positive and significant effects on China's urbanization.

**Summary (paraphrase)**: Two parallel objectives: (1) build a multidimensional composite index
measuring urban infrastructure for 31 provinces + 6 regions of China, 2005–2014, using PCA; (2)
regress this index's effect on the urbanization rate. Authored by the course's own Prof.
Heshmati — shares authors with
[[l61-heshmati-rashidghalam-2020-tfp-technology-shifters]] in LN6, but is on an ENTIRELY
DIFFERENT dataset/topic (L61 is a 190-country panel measuring TC/TFP growth via technology
shifters, not Chinese urban infrastructure) — same two authors only, not a companion paper on the
same dataset.

## Research Questions

Two questions: (i) How does the level and composition of urban infrastructure vary across
China's provinces/regions during 2005–2014? (ii) Which infrastructure components (among 15) have
a significant positive/negative effect on the urbanization rate?

## Research Framework

Urbanization is defined multidimensionally — demographic (rising urban population share),
geographic (rural→urban spatial transformation), economic (restructuring industrial
infrastructure). Since 1978 (opening-up reform + Hukou system reform), China's urbanization rate
rose from <20% to 56% (2015), with UNDESA forecasting 76% by 2050. Infrastructure investment
accounted for 25–35% of total fixed-asset investment since 2004, growing at an average 20%/year.
Theoretical framework: urban infrastructure (a pull factor) → attracts migration + firms →
urbanization; simultaneously, geographic/regional differences (Christensen & McCord 2016: 3
exogenous geographic factors explain ~50% of China's urbanization variation) create structural
divergence.

## Data

A balanced panel of 31 Chinese provinces, 2005–2014 (N=310 observations), sourced from the
National Bureau of Statistics of China. Main dependent variable: **Urban** = urban share of
population at year-end. Independent variable: a composite urban infrastructure index built from
**15 sub-components** (consumption, culture, economics, education, employment, environment,
finance, human development, health, housing, security, services, technology, transportation,
utilities), each constructed from **74 underlying indicators** — each component uses 3–6
indicators (e.g. economics: 5 indicators; education: 5; employment: 4; security: 5, covering
pension/unemployment/medical/work-injury/maternity insurance). The 31 provinces are grouped into
6 regions: North, Northeast, East, Central, Southeast, Northwest.

## Methodology

Two steps. **Step 1 — Principal Component Analysis (PCA)**: reduces the dimensionality of 74
indicators into 15 uncorrelated sub-indices (each sub-index is a linear combination of the
eigenvectors corresponding to the largest eigenvalues of the covariance matrix), then aggregates
the 15 sub-indices into a second-order composite index (a 16th aggregate index). PCA was chosen
because the 74 indicators are highly correlated — direct regression would face severe
multicollinearity; PCA separates indicators into components that are highly correlated
internally but uncorrelated across components.

**Step 2 — Regression**: dependent variable is the urbanization rate, heteroscedasticity-
consistent (White method) standard errors. **6 models**: Models 1–3 pooled OLS (Model 1: the 15
disaggregated sub-indices; Model 2: the aggregate index + time trend; Model 3: adds the squared
aggregate index + interaction with time trend); Models 4–6 are the fixed-effects (least-squares
dummy variable) counterparts controlling for province fixed effects.

## Regression/Estimation Results

- **Model fit (R²)**: Models 1–3 (pooled OLS) are 0.86, 0.34, and 0.35 respectively; Models 4–6
  (fixed-effects) are all ~0.99 — aggregating the index into a single composite variable reduces
  explanatory power relative to keeping the 15 components separate; controlling for province
  fixed effects strongly improves fit.
- **Model 1 (15 disaggregated components)**: 8/15 components have a significant POSITIVE effect
  on urbanization — **economics, employment, human development, health, housing, security,
  utilities, technology**. Education and environment correlate negatively with urbanization but
  are not statistically significant.
- **Provincial/regional gaps**: Guangdong (highest infrastructure) vs. Tibet (lowest). By region:
  the **Eastern region** (Jiangsu, Zhejiang, Shanghai, Anhui, Fujian, Jiangxi, Shandong) has the
  HIGHEST urban population share and most of the highest infrastructure indices (except
  education); the **Southeast region** (Chongqing, Sichuan, Guizhou, Yunnan, Tibet — per the
  paper's own regional grouping, not geographic "southeast" in the ordinary sense) has the
  LOWEST urbanization share. The Central region ranks second. Most components peak in the
  East/trough in the Northwest, except HDI which peaks in the East/troughs in the Southeast.
- **Trends over time**: the consumption, finance, and human development indices rose
  continuously 2005–2014; the employment, security, and technology indices DECLINED over time —
  a policy warning since these are also the 3 components with the strongest positive regression
  coefficients on urbanization.

## Key Findings

China's urbanization is tied more tightly to economic, employment, social-security, housing,
utility, and technology infrastructure than to pure education/environmental infrastructure —
consistent with the intuition that the "economic pull factor" (job opportunities, income, social
security) is stronger than the "indirect welfare pull factor" in urban migration decisions. The
East–West gap is stark, possibly reflecting political priorities or a scarcity of natural
resources/environmental capacity in the West.

## Conclusion

3 main conclusions: (1) significant provincial/regional disparities, geographic location matters
for China's urbanization; (2) the urbanization rate rose over time but infrastructure
composition trended in opposite directions (consumption/finance/HDI rising, employment/security/
technology falling); (3) the regression confirms specific infrastructure components drive
urbanization. Policy recommendations: the central government should improve resource allocation
and the location of key industries between rich/poor provinces; each province needs its OWN
urbanization plan tailored to its characteristics; Northwest/Southeast regions should leverage
comparative advantages to narrow the gap; highly urbanized provinces (Shanghai, Beijing) should
build "smart cities" + "green/forest cities" to tackle pollution.

## Relevance to the Course/Vietnam

- This opens LN7 and is authored by the course's own Prof. Heshmati — a PCA + panel-regression
  method worth learning for an essay using Vietnamese provincial-level infrastructure data
  (matching the data structure of [[l26-huynh-tran-2025-fdi-informal-economy]] — a 63-province VN
  panel, the same logic of "provincial-level variables, controlling for province fixed effects").
- Shares the [[infrastructure-investment-and-growth]] theme with
  [[l72-kadyraliev-2022-transport-infrastructure-investment]] (LN7) but differs sharply in
  methodological rigor — L71 uses a N=310 panel + rigorous PCA, L72 uses OLS with 7 observations
  and no significance testing.
- Shares 2 authors (Heshmati & Rashidghalam) with
  [[l61-heshmati-rashidghalam-2020-tfp-technology-shifters]] in LN6 — but is on an entirely
  different dataset/topic (L61 is a 190-country panel measuring TC/TFP growth, not Chinese urban
  infrastructure); not a companion paper on the same dataset, just two examples of the
  professor's consistent PCA/panel methodological style across different topics.
- Vietnam relevance: the "East–West gap" structure resembles Vietnam's own regional inequality
  (Red River Delta/Southeast vs. Northern mountains/Central Highlands) already seen in
  [[l26-huynh-tran-2025-fdi-informal-economy]] (LN2) and
  [[l44-vo-tran-2022-rural-vulnerability-vietnam]] (LN4) — a recurring motif across the course:
  infrastructure/institutions/income all diverge along the same geographic axis.

## Links

- Lecture: [[ln7-investment-infrastructure-health-education]] · Concept:
  [[infrastructure-investment-and-growth]]
- Related: [[l72-kadyraliev-2022-transport-infrastructure-investment]] (same infrastructure
  theme), [[l26-huynh-tran-2025-fdi-informal-economy]] (same provincial-panel method),
  [[almas-heshmati]]
