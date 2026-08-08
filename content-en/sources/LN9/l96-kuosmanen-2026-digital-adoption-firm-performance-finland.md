---
type: source
title: "L96 — Kuosmanen, Pajarinen & Heshmati (2025) — Digital Technology Adoption and Firm Performance: Evidence from Finland's Service Sector Using Linked Microdata"
tags: [digitalization, digital-intensity-index, firm-performance, productivity, finland, quantile-regression]
created: 2026-08-07
updated: 2026-08-07
status: complete
source_file: "raw/3. LECTURE NOTES/LN9 AI digitalization economic development and growth/L96 TP-2025 Kousmanen et al Digital technology adoption and firm performance Evidence from Finlands servicesector.pdf"
---

# L96 — Kuosmanen, N., Pajarinen, M. & Heshmati, A. (2025), Telecommunications Policy (Article in Press)

**Authors**: Natalia Kuosmanen, Mika Pajarinen (ETLA Economic Research, Helsinki), Almas Heshmati
(University of Economics Ho Chi Minh City — the professor teaching this course). Received
17/6/2025, revised 21/9/2025, accepted 5/10/2025. ⚠️ Year note: the LN9 slide cites "(2026)" but
the actual PDF (DOI: 10.1016/j.telpol.2025.103080) is dated **2025** ("Article in Press") — this
page uses the correct PDF year. An earlier draft circulated as ETLA Working Paper No. 117 (2024).

## Abstract

> This study examines how digital technology adoption relates to firm performance in Finland's
> private service sector, an ideal case given both the country's advanced digitalization and the
> sector's central role in the economy. Using the Eurostat Digital Intensity Index, which captures
> the adoption of 12 technologies, we measure firms' digital maturity and link it to firm
> performance outcomes. The analysis draws on a unique linked employer–employee dataset spanning
> 2015–2021, combining firm-level financial, workforce, and ICT usage information. Results show
> that higher digital intensity is positively associated with firm characteristics such as size,
> international activity, market share, foreign ownership, labor productivity, and workforce
> education. It is also linked to stronger performance outcomes, including revenue, value added,
> and labor productivity. Notably, these performance links are strongest among top-performing
> firms, suggesting that the associations with digitalization are unevenly distributed across the
> performance spectrum. This heterogeneity highlights the risk of a 'digital divide' and points to
> the importance of policies that enable broader diffusion of digital capabilities beyond frontier
> firms.

**Summary (paraphrase)**: A paper by Prof. Heshmati himself, using a high-quality Finnish linked
employer-employee dataset (10,456 firm-year observations) and applying 3 methods simultaneously
(WLS, quantile regression, a control function) to measure the digitalization–performance link from
multiple angles — not just one model.

## Research Questions

Which firms tend to adopt digital technology more intensively, and is the association between
digital intensity and performance outcomes (revenue, value added, labor productivity) even across
the full distribution of firms?

## Research Framework

The paper directly engages the classic "productivity paradox" debate (whether ICT investment
genuinely raises measured productivity) — arguing the paradox is gradually being resolved as firms
accumulate sufficient complementary assets/practices (management, digital culture, supply-chain
collaboration) to exploit digital tools. The resource-based view framework: digital tools alone do
NOT automatically raise performance unless paired with complementary capabilities — so
digitalization's effect is expected to be UNEVEN across firm characteristics.

## Data

Merges 3 Statistics Finland sources: (1) the ICT Enterprise Survey (census for firms ≥100
employees + a stratified sample for 10–99 employees), (2) the Financial Statement Data Panel
(mandatory financial statements, near-universal coverage), (3) Employment Statistics. Scope: the
private service sector, 2015–2021, N=10,456 firm-year observations (2015: 1,553 to 2021: 1,493).
Eurostat's Digital Intensity Index (DII): 12 criteria (Table 1) — from basic (internet, website,
~76–84% of firms meet) to advanced (AI adoption, strategic e-commerce, only ~21% of firms meet);
firms are grouped into 4 levels: very low (0–3), low (4–6), high (7–9), very high (10–12
criteria). Most firms (64.5%) adopt 4–10 technologies; 14.1% adopt exactly 8 — the most common
level.

## Methodology

**3 complementary methods**. (1) **WLS (Weighted Least Squares)** — regressing ln(revenue)/ln(labor
productivity) on DII (as 4-level categories OR a continuous 0–12 score), controlling for
age/size/foreign ownership/R&D/international activity/market share/industry/year, with sample
weights correcting unequal selection probabilities. Also runs models with lagged (t-1) DII to
check dynamic persistence. (2) **Quantile regression** — estimating coefficients at the 25th/50th/
75th percentiles of revenue/productivity rather than only the conditional mean, to detect
heterogeneity across the firm distribution. (3) **A control function** (Ackerberg, Caves & Frazer
2015, building on Olley & Pakes 1996, Levinsohn & Petrin 2003) — estimating a production function
ln(VA) = f(capital, labor, DII, controls) addressing simultaneity between input/digitalization
choices and unobserved productivity shocks.

## Regression/Estimation Results

- **WLS (Table 4)**: relative to very low, DII=low raises revenue **+23.7%**, DII=high **+40.6%**,
  DII=very high **+62.8%** (all p<0.01); labor productivity is only significant from the high level
  upward (+4.4% to +7.2%). The continuous digitalization score: +7.3% revenue and +1.0%
  productivity per additional DII point. Lagged (t-1) DII remains significantly positive for
  revenue (very high: +31.3%) — the association is PERSISTENT over time, not merely contemporaneous.
- **Quantile regression (Table 5, discussed p.8)**: for revenue, the positive digital-intensity
  association holds across all quantiles but is MARKEDLY STRONGER at the upper end of the
  distribution (high-revenue firms). For labor productivity, at the 25th quantile only very-high is
  significant; at the median both high/very-high are significant; at the 75th quantile coefficients
  are LARGER and more consistent — the higher in the productivity distribution, the stronger the
  digitalization association.
- **Control function (Table 6)**: DII=very high raises value added **+9.7%** (p<0.01) relative to
  very low, confirming the WLS result holds after addressing input-digitalization-productivity
  simultaneity; the continuous digitalization score: +0.8% VA per point.

## Robustness Checks

Main robustness check (Appendix A, Table A.1): re-running the full WLS model using only 2015–2019
data (excluding the COVID-19 period) — DII coefficients remain significantly positive with a
similar direction/magnitude to the full sample, confirming results are not driven by the pandemic
shock. Appendix B also runs separate YEAR-BY-YEAR regressions (2015–2021) — the DII=very-high
coefficient for productivity fluctuates (significant in 2015/2017 but NOT in 2016/2018–2021),
showing the digitalization–productivity link is less stable over time than the
digitalization–revenue link (which stays consistently positive every year in Table A.4).

## Key Findings

**Digital intensity correlates positively and consistently with all 3 performance outcomes
(revenue, value added, labor productivity)**, but this association is UNEVEN — strongest among
already top-performing firms (the upper end of the distribution), weaker or insignificant among
low-performing firms — suggesting an emerging "digital divide" rather than digitalization
narrowing performance gaps. Larger, foreign-owned, internationally active firms with a more
educated workforce systematically show higher digital intensity; OLDER firms tend toward LOWER
digital intensity (structural inertia).

## Conclusion

Digitalization correlates positively with Finnish service-firm performance 2015–2021, consistently
across 3 different methods (WLS, quantile, control function) — contributing evidence that the
"productivity paradox" is gradually resolving among firms with sufficient complementary
capabilities. But because the effect concentrates among frontier firms, digitalization investment
does NOT automatically spread benefits to all firms — targeted support policy is needed (digital
skills training, ecosystem-level knowledge-sharing platforms) so small/older/domestic-only firms
are not left behind. Future research directions: cross-country comparisons (the role of
institutions/infrastructure), longer panel data to isolate causal mechanisms, broadening beyond
productivity to firm survival/innovation.

## Implications for the Course/Vietnam

- **A paper by Prof. Heshmati himself** — sharing the same rigorous/multi-method "signature"
  (cross-verifying with 3 different techniques) as
  [[l61-heshmati-rashidghalam-2020-tfp-technology-shifters]],
  [[l71-heshmati-rashidghalam-2020-urban-infrastructure-china]],
  [[l86-heshmati-rashidghalam-2021-urban-circular-economy-sweden]] — despite entirely different
  topics, a consistent empirical style.
- **An interesting contrast with L61's negative TFP**: L61 (LN6, same co-author Heshmati) finds
  NEGATIVE TC/TFP growth despite positive input elasticities — technology does NOT automatically
  raise measured productivity at the national level. L96 instead finds digitalization correlates
  POSITIVELY with productivity at the Finnish FIRM level — but conditionally (strong only among
  high performers) — both papers by the same author suggest: technology raising productivity is
  NOT universal, depending on the level of analysis and available complementary capacity.
- Connects to [[digital-transformation-and-productivity]] (LN9): sharing a cluster with
  [[l93-pham-2024-ai-development-vietnam-review]], [[l94-vietduc-2024-digital-economy-vietnam]],
  [[l95-tam-2024-construction-digitalization-barriers-vietnam]] — L96 serves as a "benchmark" from
  a developed country: showing that even in Finland (an EU digitalization leader),
  digitalization's benefits are NOT even — Vietnam (still in early digitalization per L93/L94)
  should anticipate a similar, potentially sharper "digital divide" risk.

## Links

- Lecture: [[ln9-ai-digitalization-economic-development-growth]] · Concept:
  [[digital-transformation-and-productivity]]
- Author: [[almas-heshmati]] · Related:
  [[l61-heshmati-rashidghalam-2020-tfp-technology-shifters]] (LN6),
  [[l71-heshmati-rashidghalam-2020-urban-infrastructure-china]] (LN7),
  [[l86-heshmati-rashidghalam-2021-urban-circular-economy-sweden]] (LN8)
