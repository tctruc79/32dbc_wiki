---
type: source
title: "L15 — Yin, Bai & Sun (2025) — Measurement and Spatiotemporal Dynamic Evolution of China's High-Quality Economic Development"
tags: [china, high-quality-development, entropy-method, regional, cluster-analysis]
created: 2026-07-20
updated: 2026-07-23
status: complete
source_file: "raw/3. LECTURE NOTES/LN1 Economic development/L15 SF-2025 Yin et al Measurement and spatiotemporal dynamic evolution of Chinas high-quality economic development.pdf"
---

# L15 — Yin, Bai & Sun (2025), Sustainable Futures 10: 101420

**Authors**: Liang Yin, Xiaodong Bai, Xuelian Sun — School of Mathematical Sciences, Dalian
Minzu University, Liaoning, China. Received 1/5/2025, accepted 4/10/2025, online 11/10/2025.
Open access CC BY-NC. Funded by the Social Science Foundation of Liaoning Province (Grant
L21BJY009). Keywords: high-quality development, five principles of development, entropy
method, cluster analysis, kernel density estimation.

## Summary

Constructs an index for evaluating [[high-quality-development]] (HQED) in China, based on the
"new development concept" (five principles: **innovation, coordination, greenness, openness,
sharing** — set out at the Fifth Plenary Session of the 18th Central Committee of the CPC).
Uses the **entropy method** plus **cluster analysis** to evaluate HQED levels across 30 Chinese
provinces (2011–2021, excluding Tibet, Hong Kong, Macao, and Taiwan); **kernel density
estimation** is used to explore spatiotemporal dynamics. Findings: large gaps between
provinces, with the East outperforming the Central, Northeast, and West regions; development is
"uneven, uncoordinated, insufficient" in many provinces.

## Research Question & Methodology

- **Background**: the 19th National Congress of the CPC declared that China's economy was
  shifting from "high-speed growth" to "high-quality development." Measuring HQED is
  statistically difficult despite the apparent simplicity of the concept.
- **Composite index**: 5 primary indicators (corresponding to the 5 principles) → 11 secondary
  indicators → **21 tertiary indicators** (e.g., number of R&D personnel, R&D expenditure, the
  urban-rural income gap, the share of social security spending, energy consumption per unit of
  GDP, green coverage rate, public transit vehicles per 10,000 people, total trade volume as a
  share of GDP, per-capita education spending, medical technicians per 10,000 people, etc.).
- **Entropy method** (equations 1–4 in the paper): normalize the data (range method) →
  calculate information entropy for each indicator → derive objective weights (avoiding
  subjective bias) → aggregate the composite score.
- Data: China Statistical Yearbook, China Urban Statistical Yearbook, China Energy Statistical
  Yearbook (2011–2021, 30 provinces/municipalities).
- Spatial analysis: **Global/Local Moran's Index** (spatial autocorrelation), **K-means
  clustering** (grouping into 4 HQED tiers), **Gaussian kernel density estimation**
  (distributional evolution over time).

## Key Results

- **Stable top 6, 2011–2021**: Guangdong, Jiangsu, Beijing, Zhejiang, Shanghai, Shandong — all
  in the East. In 2021: Guangdong ranks highest (0.7202), Gansu lowest (0.2029). Drivers of the
  leading group: policy/institutional advantages (the Guangdong-Hong Kong-Macao Greater Bay
  Area, Yangtze River Delta integration), a high-tech economic structure, an open geographic
  position (FDI >60%), and high-quality human capital.
- **Global Moran's I** shows p<0.05 throughout 2011–2021 → statistically significant **spatial
  clustering** exists; most pronounced in 2016 and 2020 (coinciding with major regional policy
  initiatives). High-High clusters are concentrated in the East (Shanghai, Jiangsu); Low-Low
  clusters are in the West (Xinjiang, Gansu).
- **K-means, 4 clusters** (2021): the highest tier contains only Guangdong and Jiangsu; the
  lowest tier is concentrated in the West (Shanxi, Inner Mongolia, Jilin, Heilongjiang, Jiangxi,
  Guizhou, Guangxi, Yunnan, Gansu, Qinghai, Ningxia, Xinjiang).
- **Kernel density**: the distribution's peak shifts rightward continuously (2011→2021) →
  nationwide HQED is improving; but the right tail widens, and a **three-peak polarization**
  pattern appears in most years for the composite index and for innovation, openness, and
  sharing → the gap between leading and lagging provinces keeps **widening** even as overall
  levels improve.
- **2014 breakpoint**: comprehensive reforms plus an innovation-driven strategy, followed by the
  Belt and Road Initiative (from 2014) and the Beijing-Tianjin-Hebei regional strategy, which
  promoted inter-provincial cooperation.

## Policy Recommendations (Section 5)

1. Address uneven improvement in innovation (Guangdong leads, many provinces remain below the
   0.63-point threshold) — strategic R&D investment (AI, IoT, cloud), tax incentives for
   startups in disadvantaged regions (Ningxia), microcredit for small enterprises (Gansu).
2. Strengthen urban-rural coordination — invest in rural internet/transport infrastructure
   (Guizhou), expand social security in regions with strong coordination but weak sharing
   (Heilongjiang).
3. Increase sustainability via green total factor productivity — train farmers/enterprises to
   adopt renewable energy (Qinghai, Xinjiang).
4. Advance comprehensive reform and opening-up, and Belt and Road cooperation.

**Self-acknowledged limitations**: coupling with the digital economy/AI has not been studied;
data gaps exist (industrial output, wastewater treatment in some provinces required
interpolation); more "tailored" region-specific solutions are needed.

## Significance for the Course/Vietnam

- The provincial-level composite index framework (entropy method + 5 principles + clustering +
  kernel density) is a **methodology directly replicable for Vietnam** (at the
  province/municipality level) — consistent with the professor's suggestion on heterogeneous
  growth across Vietnam's provinces
  ([[l11-patel-2021-unconditional-convergence]], LN1 slide 37).
- The three-peak polarization, despite an overall upward trend, is a good empirical
  illustration that national-level [[unconditional-convergence]] does not automatically imply
  **provincial-level σ-convergence** within a country — useful data for cross-checking
  inter-regional convergence claims in Vietnam.

## Links

- Lecture: [[ln1-economic-development]] · Concept: [[high-quality-development]],
  [[unconditional-convergence]]
