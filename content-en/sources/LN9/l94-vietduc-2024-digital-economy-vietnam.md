---
type: source
title: "L94 — Dang, Tran, Dang & Bui (2024) — Measuring the Digital Economy in Vietnam"
tags: [digital-economy, digital-spillover, ict, vietnam, panel-regression]
created: 2026-08-07
updated: 2026-08-07
status: complete
source_file: "raw/3. LECTURE NOTES/LN9 AI digitalization economic development and growth/L94 TP-2024 VietDuc Measuring the digital economy in Vietnam.pdf"
---

# L94 — Dang, T.V.D., Tran, T.D., Dang, H.L. & Bui, X.P. (2024), Telecommunications Policy, 48, 102683

**Authors**: Dang Thi Viet Duc (Posts and Telecommunications Institute of Technology), Tran Tho
Dat (National Economic University), Dang Huyen Linh (Ministry of Planning and Investment), Bui
Xuan Phong (Posts and Telecommunications Institute of Technology). Received 19/4/2023, revised
3/11/2023, accepted 3/11/2023. Funded by the Posts and Telecommunications Institute of Technology,
Hanoi.

## Abstract

> This study uses the concept of digital spillover and a panel model to measure the GDP
> contribution of Vietnam's core digital economy and digitalized economy. The proposed model is
> suitable for the case of countries, especially developing countries, with limited data. The
> calculations and analysis give three main results. Firstly, the scale of Vietnam's core economy
> has increased rapidly over the past 14 years. In 2007, the share of the core economy in GDP was
> only 1.45%. In 2019, this number increased to 7.08%. Second, the scale of Vietnam's digitalized
> economy grew significantly from 2007 to 2019. In 2007–2011, the digitalized economy accounted for
> 4.90% of GDP. This number increased to 11.56% for the period 2016–2019. Third, the growth of the
> digitalized economy is mainly based on the growth of the core digital economy. Therefore, the
> digital spillover effect in Vietnam's digitalized economy during the 13 years has only slightly
> changed. This study implies that Vietnam needs policies to develop the core digital economy and
> especially promote digital transformation to achieve the national digitalized economy goal of 20%
> of GDP by 2025 and 30% by 2030, respectively.

**Summary (paraphrase)**: The first paper to formally measure the scale of Vietnam's digital
economy (both the core level and the economy-wide spillover level) using an econometric model
suited to a limited-data context — the most important finding is NOT that "the digital economy is
growing" (something everyone knows) but that the SPILLOVER effect is nearly unchanged, showing
growth mainly comes from the ICT sector ITSELF rather than yet spreading to other sectors.

## Research Questions

What is the scale of Vietnam's core digital economy and digitalized economy (including the
spillover effect), and how has this trend changed 2007–2019?

## Research Framework

Uses Bukht & Heeks's (2017) 3-tier framework, widely accepted by the IMF/OECD/UNCTAD: (1) the
**core digital economy** (ICT hardware manufacturing, ICT services, digital content); (2) the
**narrow digital economy** (including online platforms); (3) the **digitalized economy** — ALL
activity using digital technology, nearly the entire modern economy. 3 measurement directions in
the literature: (a) the index method (ITU IDI, WEF NRI, OECD DESI, G20 DETF — measures ASPECTS but
does not yield a monetary GDP-contribution figure); (b) the statistical method (national account
statistics — measures the CORE digital economy in monetary terms but stops there); (c) the
econometric spillover-effect method (Huawei & Oxford Economics 2017; China's CAICT 2020 —
requiring large data, hard to apply to a single country with limited data). This paper combines
(b) for the core digital economy and a reduced version of (c) suited to limited data for the
digitalized economy — this is the main METHODOLOGICAL contribution.

## Data

Core digital economy: the OECD definition (ICT hardware + ICT services + digital content/media),
content-services ICT sector data from Vietnam's GSO + ICT hardware from UNIDO. Digitalized
economy: a panel of **20 Vietnamese economic sectors** (Table 1, codes N1–N20, e.g.
N10=Information and communication), 3 periods based on 4 Input-Output tables (IO
2007/2012/2016/2019): 2006–2012, 2012–2016, 2016–2019 → 60 observations. Capital estimated via the
Perpetual Inventory Method (PIM, an assumed 3.5%/year depreciation rate based on recent GSO data);
ICT usage measured as the share of ICT spending in each sector's total intermediate cost.

## Methodology

A reduced-form production-function-based regression (Kotarba 2017, following 3 factors:
assets/usage/labor): Z_grᵢₜ = β₀ + β₁lnZᵢₜ₋₁ + β₂K_grᵢₜ + β₃L_grᵢₜ + β₄ICTᵢₜ + εᵢₜ, where Z_gr is
sector i's value-added growth rate, ICTᵢₜ is the sector's ICT-spending share of total intermediate
cost. A Hausman test → selects the **Random Effects (RE) model** (FE unsuitable);
heteroskedasticity (p=0.0000) and autocorrelation (p=0.0007) detected → addressed via clustering
by industry; multicollinearity checked (VIF≈1) → NO multicollinearity issue. The estimated β₄
coefficient is used to compute the spillover effect's GDP contribution via: digitalized-economy
%GDP = Σ(β₄×ICTᵢₜ×VAᵢₜ₋₁)/GDPₜ + core-digital-economy %GDP.

## Regression/Estimation Results

- **RE regression (Table 4)**: ICT-usage coefficient = **0.0147** (p=0.048, significant at 5%) — a
  1-percentage-point rise in a sector's ICT-spending share of intermediate cost → ~0.0147
  percentage-point rise in that sector's value-added growth rate. This coefficient is MUCH LOWER
  than the comparable Singapore estimate (Vu 2013: 0.179) — reflecting Singapore's digital economy
  being significantly more advanced than Vietnam's. Overall R² = 0.2283.
- **Core digital economy (Table 5)**: GDP share rose from **1.45% (2007) → 7.08% (2019) → 8.05%
  (2020)** — the digital sector's average growth rate of 21.76%/year (2007–2020) is over 3x the
  national GDP growth rate (6.01%/year); ICT-sector labor productivity (VND 140.1 million/year) is
  nearly 3x the economy-wide average (VND 50.7 million/year).
- **Internal structural shift within the digital sector**: in 2007, ICT services/content accounted
  for 67% of the digital sector's value added (hardware only 23%) — driven by state investment
  (>60% of investment capital in the ICT services sector was state-owned). By 2020, a COMPLETE
  REVERSAL: ICT hardware accounts for 85%, services/content only 15% — driven by heavy FDI inflows
  into electronic component/equipment manufacturing (95% of this sector's production value and 97%
  of its export turnover was FDI firms in 2020); computer/phone/component exports made up 34% of
  the country's total goods export turnover in 2020.
- **Digitalized economy & the spillover gap (Table 6)**: the digitalized economy's GDP share rose
  from 4.90% (2007–2011) to 11.56% (2016–2019); BUT the gap (= the net spillover effect) only rose
  slightly from 4.31% to 5.41% of GDP over the same period — meaning almost ALL of the digitalized
  economy's growth comes from the CORE digital economy's own growth, not from stronger spillover
  into other sectors.

## Robustness Checks

The paper explicitly states 3 limitations rather than running separate robustness checks: (1) the
IO 2016/2019 tables are NOT built from fresh surveys but updated from IO 2012 via the RAS method —
may not accurately reflect actual changes over the past 8 years; (2) the model ignores long-term
ICT equipment investment (only counting spending, not the ICT capital stock); (3) it assumes a
SINGLE ICT-impact coefficient across all sectors — a fairly strong assumption since actual ICT
application/impact varies substantially by sector.

## Key Findings

**Vietnam's digital economy is growing rapidly in SCALE (especially ICT hardware, driven by FDI)
but the SPILLOVER effect to the rest of the economy is nearly unchanged** — a counterintuitive
finding relative to the expectation that "ICT sector growth automatically boosts the whole
economy." Reason: Vietnam's ICT hardware sector is mainly export-oriented OUTSOURCING/ASSEMBLY
(95% FDI firms), serving EXPORT demand rather than DOMESTIC demand — so it generates high
digital-sector growth but limited technology spillover to other domestic production/service
sectors. Only 6% of Vietnamese firms use sophisticated production/business management software;
90% of 400 firms surveyed by VCCI reported digital transformation had NOT been successful.

## Conclusion

Vietnam's core digital economy grew from 1.45% of GDP (2007) to 7.08% (2019)/8.05% (2020); the
digitalized economy grew from 4.90% (2007–2011) to 11.56% of GDP (2016–2019); but the net
spillover effect only rose slightly (4.31%→5.41% of GDP) — reflecting the structural nature of
Vietnam's ICT sector (export-oriented outsourcing/assembly, FDI-dependent) and still-limited ICT
application among domestic firms. To hit the 20%-of-GDP (2025)/30%-of-GDP (2030) targets, Vietnam
needs to: (1) build technological autonomy, reduce FDI dependence, serve more domestic demand
rather than only exports; (2) drive genuine digital transformation in firms (not just policy on
paper — the government should track the real implementation of Decree 80/NĐ-TTg supporting SMEs);
(3) build sandbox mechanisms for new digital products/services; (4) prioritize digital
transformation in manufacturing/agriculture — 2 sectors the government targets strategically but
which currently show LOW ICT application.

## Implications for the Course/Vietnam

- **This is exactly a paper K31 Q3 references** alongside
  [[l95-tam-2024-construction-digitalization-barriers-vietnam]] (Tam et al. 2024, K31 Q3 asks
  directly about Tam) — but L94 and L95 play COMPLEMENTARY roles within the LN9 cluster: L94
  measures the MACRO scale of the digital economy, L95 measures BARRIERS at the specific
  firm/sector level — macro/micro angles on the same Vietnamese digital-transformation issue.
- **The "growth without spillover" mechanism parallels
  [[l64-nguyen-pham-2018-growth-inequality-poverty-vietnam]] (LN6)**: both papers show fast
  sector/economy growth does NOT automatically spread benefits broadly — L64 with growth not
  automatically reducing inequality, L94 with ICT-sector growth not automatically spilling
  technology into other sectors — the same policy lesson: targeted intervention is needed, not
  reliance on organic growth alone.
- Connects to [[digital-transformation-and-productivity]] (LN9): shares a cluster with
  [[l93-pham-2024-ai-development-vietnam-review]] (national AI policy),
  [[l95-tam-2024-construction-digitalization-barriers-vietnam]] (firm-level barriers),
  [[l96-kuosmanen-2026-digital-adoption-firm-performance-finland]] (a Finland benchmark).

## Links

- Lecture: [[ln9-ai-digitalization-economic-development-growth]] · Concept:
  [[digital-transformation-and-productivity]]
- Related: [[l93-pham-2024-ai-development-vietnam-review]],
  [[l95-tam-2024-construction-digitalization-barriers-vietnam]],
  [[l64-nguyen-pham-2018-growth-inequality-poverty-vietnam]] (LN6)
