---
type: source
title: "L86 — Heshmati & Rashidghalam (2021) — Assessment of the Urban Circular Economy in Sweden"
tags: [circular-economy, sweden, principal-component-analysis, panel-data, municipalities, k32-shortlist]
created: 2026-08-01
updated: 2026-08-01
status: complete
source_file: "raw/3. LECTURE NOTES/LN8 Circular economy inclusive and sustainable development/L86 JCP-2021 Heshmati-Rashidghalam Assessment of the urban circular economy in Sweden.pdf"
---

# L86 — Heshmati, A. & Rashidghalam, M. (2021), Journal of Cleaner Production 310: 127475
> ⭐ ⭐ **ON THE OFFICIAL K32 SHORTLIST** — this is one of the 20 papers Prof. Heshmati fixed on 28/8/2026 as the question scope for the 06/9 written exam. This paper also **repeats from the K31 shortlist**. See [[k32-shortlist-2026]].


**Authors**: Almas Heshmati (Jönköping International Business School, Sweden — the professor
teaching this course, see [[almas-heshmati]]), Masoomeh Rashidghalam (University of Tabriz,
Iran). DOI: 10.1016/j.jclepro.2021.127475. Received 14/1/2021, accepted 9/5/2021, open access
(CC BY). JEL: F64, H23, K32, N50, O44, Q56.

## Abstract

> This study proposes a general standard for the circular economy (CE), and estimates a
> multidimensional parametric index composed of eight components which is in line with the
> principles of a circular economy. The concept and index are used for evaluating the practices of
> a circular economy at the municipality level. The index is regressed on a number of indicators
> influencing the level and development of circular economy. The empirical analysis is based on
> data from 273 municipalities in Sweden observed 2012–18. The results suggest that there are
> significant differences between the municipalities in the CE index and its sub-components.
> Variations in the index's level are mainly attributed to their regional location, population
> size and density, concentration of industries, and investment programs in the circular economy's
> infrastructure. At a disaggregate level, the municipalities of Gotland, Härjedalen, and
> Mörbylånga performed well in the CE index. In contrast, Stockholm, Uppsala, and Burlöv
> municipalities had the lowest ranks in the CE index. The index had a growth rate of 9.7 percent
> over 7 years at an average annual growth rate of 1.3 percent. [...] The central government should
> apply strict environmental regulations and provide necessary incentives [...].

**Summary (paraphrase)**: The paper builds a **multidimensional composite CE index (CEI, 8
components from 40 indicators)** using a PCA-based parametric method, measuring CE practice
across **273 Swedish municipalities, 2012–2018**, then regresses CEI on determinants (regional
location, population, density, industrial structure, CE-infrastructure investment).

## Research Questions

Sweden has strong environmental policy/ambition but no study had yet assessed CE below the
national level (at the municipality level) — the paper sets 4 objectives: (i) build a
multidimensional CE standard; (ii) estimate a composite index; (iii) use the index to evaluate
municipal-level CE practice (covering urban/rural waste management, agriculture, industry,
households, public services); (iv) identify the determinants of CEI variation across
municipalities and over time.

## Research Framework

CE is a sustainable solution to the problem of a linear economic system treating the environment
as a "waste reservoir" (Pearce & Turner 1990; Leontief 1928/1991; Samuelson 1991) — based on
reduce/reuse/recycle principles, delivering benefits across 4 dimensions: environmental,
economic, resource, social. Sweden: >99% of household waste + 53% of plastic is recycled, but
only 50% of construction waste; per-capita resource consumption is ABOVE the EU average despite
the high recycling rate. In 2018, the Swedish government set up a **Delegation for a Circular
Economy** focused on 3 areas: design for circularity, plastic materials, public procurement.

## Data

Source: **Kolada** (a database of Swedish county/municipal council performance indicators,
co-owned by the state + the Swedish Association of Local Authorities and Regions, SALAR). A
balanced panel of **273 municipalities (out of 290 total), 2012–2018, N=1911 observations** (17
municipalities excluded for missing data). **Part A — measuring CEI**: 40 indicators aggregated
into **8 components**: collected waste (CW, 4 indicators), waste recycling & utilization (WR, 8),
emission of air pollutants (EAP, 3), infrastructure/mechanism/culture (IMC, 7), waste tax (WT, 5),
investment & waste management cost (IWM, 5), clean transport (CT, 3), renewable energy (RE, 5).
**Part B — determinants**: unemployment rate (UNEMP), gross regional product (GRP),
inter-municipality commuting (COMM), tourism revenue (REVE), total municipal investment (TINV),
population density (RESID), education cost (EDUCO), energy cost (ENER), number of asylum seekers
(ASYL), waste tax (WTAX), waste collection charge (WCOL).

## Methodology

**Step 1 — measuring CEI**: **Principal Component Analysis (PCA)** — unlike traditional PCA
using only the first principal component, the paper uses a **weighted average of ALL principal
components with eigenvalue >1** (following Heshmati & Rashidghalam 2020, the same logic as
[[l71-heshmati-rashidghalam-2020-urban-infrastructure-china]] LN7), with weights = share of
explained variance; an indicator contributes to the index when its eigenvector exceeds 0.30.
Applied repeatedly to each sub-component (8 times) then aggregated into the composite
CEI.

**Step 2 — regressing CEI's determinants**: CEIᵢₜ = α₀ + α₁UNEMPᵢₜ + α₂GRPᵢₜ + ... +
α₁₁WCOLᵢₜ + εᵢₜ — estimated via **pooled OLS** and **fixed effects (FE)**, with the Hausman test
confirming FE is more appropriate (since the sample is nearly the entire population of Swedish
municipalities, not a random sample).

## Regression/Estimation Results

- **Large CEI variation across municipalities (Table 3)**: **Gotland ranks #1** (CEI=88.35, far
  above #2); **Stockholm ranks LAST** (CEI=29.50) despite being the most economically developed
  capital — the highest/lowest-contributing components differ by municipality (WR: Gotland
  highest/Stockholm lowest; RE: Halland highest/Västerbotten lowest).
- **CEI rises over time**: from 40.93 (2012) to 44.59 (2018) — **a 9.7% growth over 7 years,
  averaging 1.3%/year** (Table 4). Component trends differ: CW/EAP fall (environmental
  improvement), WT/IWM/CT/RE rise, IMC stays constant.
- **FE regression, 12 significant variables (Table 6, R²adj=0.53 for pooled OLS)**: **UNEMP
  significant negative** (unemployment +1% → CEI −0.23%); **COMM significant negative**
  (inter-municipal commuting +1% → CEI −0.21%); **RESID significant negative** (population
  density +100 persons/km² → CEI −0.31 units); **ASYL significant negative** (more asylum
  seekers → lower CEI, attributed to differing education/environmental-awareness levels); **WCOL
  significant STRONGLY positive** (waste-collection charge +1 SEK/m² → CEI +0.50 units — the
  model's largest coefficient); **WTAX, EDUCO, ENER, GRP, TINV significant positive**; REVE
  (tourism revenue) is NOT significant in the FE model.

## Robustness Checks

The paper estimates **pooled OLS** in parallel as a sensitivity check against the fixed-effects
assumption — the two models agree on most coefficient signs, but notably differ on EDUCO and
UNEMP (opposite signs between pooled OLS and FE) and REVE (significant in pooled OLS but NOT
significant in FE) — showing that ignoring municipality-specific heterogeneity in pooled OLS can
bias the estimates; the Hausman test confirms FE is the more appropriate model.

## Key Findings

**CEI variation is mainly driven by regional location, population size/density, industrial
structure, and CE-infrastructure investment** — not simply wealth. Large, high-density
municipalities (Stockholm) have higher energy/water demand → greater waste/pollution management
challenges → lower CEI — counterintuitive to "larger/richer city = better environment." Among 6
major cities (Fig. 3), **Västerås has the best CE performance, Stockholm the worst**. The waste
collection charge (WCOL) is the STRONGEST policy lever in the model — the price signal is more
effective than mere economic scale in driving CE.

## Conclusion

There are significant differences among Swedish municipalities in CEI and its components —
driven by geographic location, population, density, industrial structure, CE-infrastructure
investment. At the disaggregate level, Gotland/Härjedalen/Mörbylånga/Gällivare/Tanum perform
best; Stockholm/Uppsala/Burlöv/Botkyrka/Sollentuna worst. At the aggregate county level (Table
3), Gotland/Jämtland/Norrbotten/Kalmar/Västerbotten (peripheral, sparsely populated regions)
perform best; Stockholm/Jönköping/Örebro/Blekinge/Västergötland worst. CEI grew 9.7% over 7
years — suggesting the 2030 goal is achievable if this pace continues. Recommendations: local
governments need policies fit to their own sectoral structure; the central government should
apply strict environmental regulations + incentives for achieving environmental-quality goals + a
technology/knowledge-transfer program from high- to low-performing municipalities; lower labor
taxes for the remanufacturing/repair/reuse sector.

## Relevance to the Course/Vietnam

- **A paper by Prof. Heshmati himself** — using the same PCA method (weighted average of all
  eigenvalue>1 principal components) as
  [[l71-heshmati-rashidghalam-2020-urban-infrastructure-china]] (LN7, China urban infrastructure)
  and [[l61-heshmati-rashidghalam-2020-tfp-technology-shifters]] (LN6, 190-country TFP) — 3
  papers illustrating the author's consistent "methodological signature" across LN6/LN7/LN8: a
  multi-component PCA composite index + a panel regression identifying determinants.
- **A before/after methodological pair with [[l81-su-2013-circular-economy-china]]** (same CE
  topic, 8 years apart) — L81 uses a simple %-change/relative-performance comparison without PCA
  (4 Chinese cities); L86 uses a formal PCA + panel regression (273 Swedish municipalities) —
  clearly illustrating methodological evolution.
- The counterintuitive finding "large/wealthy Stockholm has the LOWEST CEI" is a good contrast
  point with [[l71-heshmati-rashidghalam-2020-urban-infrastructure-china]] (LN7) where
  wealthier provinces/regions (Eastern China) have the BEST urban infrastructure — 2 papers by
  the same author find the relationship between city scale/density and environmental/
  infrastructure quality running in OPPOSITE directions depending on context (China: large scale
  → better infrastructure; Sweden: large scale/density → worse CE) — an interesting tension
  worth flagging for exam-prep.
- Vietnam relevance: Sweden's CE governance model (autonomous local government, price/fees as the
  main lever, central government only sets framework regulation + incentives) contrasts with the
  top-down model in [[l81-su-2013-circular-economy-china]] — Vietnam (more centralized than
  Sweden, more decentralized than China) could learn from both, especially the price/waste-fee
  lever (WCOL), the most effective in this model.

## Links

- Lecture: [[ln8-circular-economy-inclusive-sustainable-development]] · Concept:
  [[circular-economy]] · Person: [[almas-heshmati]] (author)
- Related: [[l81-su-2013-circular-economy-china]] (same-author methodological pair),
  [[l71-heshmati-rashidghalam-2020-urban-infrastructure-china]] (LN7, same PCA method + opposite
  city-scale↔quality relationship), [[l61-heshmati-rashidghalam-2020-tfp-technology-shifters]]
  (LN6, same author PCA methodological signature)
