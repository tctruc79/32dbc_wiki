---
type: source
title: "L15 — Yin, Bai & Sun (2025) — Measurement and Spatiotemporal Dynamic Evolution of China's High-Quality Economic Development"
tags: [china, high-quality-development, entropy-method, regional, cluster-analysis]
created: 2026-07-20
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN1 Economic development/L15 SF-2025 Yin et al Measurement and spatiotemporal dynamic evolution of Chinas high-quality economic development.pdf"
---

# L15 — Yin, Bai & Sun (2025), Sustainable Futures 10: 101420

**Authors**: Liang Yin, Xiaodong Bai, Xuelian Sun — School of Mathematical Sciences, Dalian
Minzu University, Liaoning, China. Received 1/5/2025, accepted 4/10/2025, online 11/10/2025.
Open access CC BY-NC. Funded by the Social Science Foundation of Liaoning Province (Grant
L21BJY009). Keywords: high-quality development, five principles of development, entropy
method, cluster analysis, kernel density estimation.

## Abstract

> China's economic development has shifted from high speed to high quality. This study
> constructs an evaluation index for China's high-quality development utilizing a new
> development concept. The entropy method and cluster analysis were used to assess the level of
> high-quality development in China between 2011 and 2021. Kernel density estimation method was
> employed to explore spatiotemporal dynamics. The results reveal significant differences in
> the level of economic development among provinces in China, the eastern region is
> significantly better than the central, northeastern, and western regions. From the
> perspective of the sub-item evaluation, challenges with uneven, uncoordinated, and
> insufficient economic development exist in various Chinese provinces.

**Summary (interpretation)**: Constructs an evaluation index for China's
[[high-quality-development]] (HQED) based on the "new development concept" (5 principles:
**innovation, coordination, greenness, openness, sharing**). Uses the **entropy method** +
**cluster analysis** to assess HQED levels across 30 Chinese provinces (2011–2021); **kernel
density estimation** to explore spatiotemporal dynamics. Results: large gaps among provinces,
the eastern region outperforming central/northeastern/western regions; development is "uneven,
uncoordinated, insufficient" in many provinces.

## Research Questions

The 19th CPC Congress declared China's economy shifting from "high-speed growth" to
"high-quality development" (HQED). Measuring HQED is a hard statistical problem even though the
concept sounds simple — the paper asks: how should HQED be measured at the provincial level,
and how has it evolved spatiotemporally over 2011–2021?

## Research Framework

A composite index built on the "new development concept" — **5 principles**: innovation,
coordination, greenness, openness, sharing (from the 5th Plenary Session of the 18th CPC
Central Committee) → 5 primary indicators → 11 secondary → **21 tertiary indicators** (e.g.,
R&D personnel, R&D spending, the urban-rural income gap, the social-security spending ratio,
energy consumption/GDP, green coverage ratio, total trade/GDP, average education spending, and
health technicians per 10,000 people).

## Data

The China Statistical Yearbook, China Urban Statistical Yearbook, and China Energy Statistical
Yearbook (2011–2021, 30 provinces/municipalities, excluding Tibet, Hong Kong, Macao, Taiwan).

## Methodology

- The **entropy method** (equations 1–4): standardize the data (range method) → compute the
  information entropy of each indicator → derive objective weights (avoiding subjective bias)
  → aggregate the score.
- Spatial analysis: **Global/Local Moran's Index** (spatial autocorrelation), **K-means
  clustering** (grouping into 4 HQED levels), **Gaussian kernel density estimation**
  (distributional evolution over time).

## Regression/Estimation Results

- **A stable top-6 for 2011–2021**: Guangdong, Jiangsu, Beijing, Zhejiang, Shanghai, Shandong —
  all eastern. In 2021: Guangdong highest (0.7202), Gansu lowest (0.2029).
- **Global Moran's I** with p<0.05 throughout 2011–2021 → statistically significant spatial
  clustering; clearest in 2016 and 2020. High-High regions concentrated in the east (Shanghai,
  Jiangsu); Low-Low in the west (Xinjiang, Gansu).
- **K-means 4 groups** (2021): the top group contains only Guangdong + Jiangsu; the lowest
  group is concentrated in the west.
- **Kernel density**: the distribution's peak continually shifts right (2011→2021) → nationwide
  HQED improves; but the right tail widens, with **tri-modal polarization** in most years — the
  gap between leading and lagging provinces keeps widening even as things improve overall. A
  2014 breakpoint (comprehensive reform + Belt and Road).

## Key Findings

Large gaps among provinces: the eastern region outperforms the central/northeastern/western
regions, with the leading group's advantage driven by policy/institutional advantages (the
Guangdong-Hong Kong-Macao Greater Bay Area, Yangtze River Delta integration), a high-tech
economic structure, an open geographic position (FDI >60%), and high-quality human capital.
Development remains "uneven, uncoordinated, insufficient" in many provinces — overall
improvement does not imply inter-provincial convergence.

## Conclusion

Policy recommendations: (1) address uneven innovation — strategic R&D investment (AI, IoT,
cloud), startup tax incentives in disadvantaged regions, microcredit for small firms; (2)
strengthen urban-rural coordination — rural internet/transport infrastructure investment,
expanded social security; (3) raise sustainability via green total factor productivity —
training farmers/firms in renewable-energy adoption; (4) push comprehensive reform-and-opening,
Belt and Road cooperation. Acknowledged limitations: no study of coupling with the digital
economy/AI; missing data for some provinces requiring interpolation; a need for more "tailored"
regional solutions.

## Relevance to the Course/Vietnam

- The province-level composite-index measurement framework (entropy method + 5 principles +
  clustering + kernel density) is a **method template directly replicable for Vietnam**
  (provinces/cities) — matching the professor's suggestion about heterogeneous growth across
  VN provinces ([[l11-patel-2021-unconditional-convergence]], LN1 slide 37).
- Tri-modal polarization despite an overall rising trend is a good empirical illustration that
  national-level [[unconditional-convergence]] does not automatically imply province-level
  **σ-convergence** within a single country — useful data for testing the cross-region
  convergence claim in Vietnam.

## Links

- Lecture: [[ln1-economic-development]] · Concept: [[high-quality-development]],
  [[unconditional-convergence]]
