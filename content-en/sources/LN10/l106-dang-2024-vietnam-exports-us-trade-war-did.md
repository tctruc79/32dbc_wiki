---
type: source
title: "L106 — Dang, Yawei & Abdullah (2024) — The Impact of the US-China Trade War on Vietnamese Exports to the US: A Quantitative Study Using DiD Approach"
tags: [trade-war, trade-diversion, vietnam, exports, difference-in-differences, us-china]
created: 2026-08-07
updated: 2026-08-07
status: complete
source_file: "raw/3. LECTURE NOTES/LN10 Impacts of Trade War on Vietnamese Economy/L106 JTS-2024 Dang et al The impact of the US-Chinatrade war on Vietnamese exports to the US.pdf"
---

# L106 — Dang, B.T.T., Yawei, W. & Abdullah, A.J. (2024), Journal of Trade Science, 12(4), 304–318

**Authors**: Binh Thi Thanh Dang (Economics Department, Thuongmai University, Hanoi), Wang Yawei (Graduate School of International Social Science, Yokohama National University, Japan), Abdul Jabbar Abdullah (Universiti Teknologi MARA, Sarawak, Malaysia). JEL: F13, F14, F60. Received 8/2/2024, revised 14/5 and 19/7/2024, accepted 26/7/2024. Open access CC BY 4.0.

## Abstract

> Purpose – The study attempts to examine the impact of the US-China trade war on Vietnamese exports to the United States, which has consistently served as a key market for Vietnamese goods and services in recent decades. The heterogeneous effects of the trade war on different export sectors are also evaluated. Design/methodology/approach – The secondary data on Vietnamese exports to the US at a 6-digit level is collected from UN Comtrade. Besides, the difference-in-differences (DiD) method is employed to analyze the impact of the trade war on exports from Vietnam to the United States. Findings – The findings revealed a 14% increase in total Vietnamese exports to the United States due to the trade war. Examining heterogeneous effects, certain industries, such as plastics, iron or steel articles, textiles and garments, and machinery and mechanical appliances, experience significant benefits. However, the study did not identify statistically significant effects on other sectors, such as electrical machinery products, agricultural and forestry, and furniture. Originality/value – The paper is one among limited studies considering the causal effects of the trade war on a developing country, accounting for the heterogeneous effects on different export sectors.

**Summary (paraphrase)**: The first CAUSAL (not merely descriptive correlational) evidence on how much Vietnam benefited from trade diversion during the US-China trade war — using DiD to isolate the real effect from other confounding factors, while also showing the benefit is UNEVEN across sectors.

## Research Questions

What is the causal impact of the US-China trade war on Vietnam's TOTAL exports to the US, and is this impact even across different export sectors?

## Research Framework

Traditional trade theory: trade liberalization generates "trade creation" effects (Viner 2014); conversely, when a group of countries lowers barriers with each other (or RAISES barriers against a third country), "trade diversion" occurs — the non-participating third country benefits relatively as tariffed goods become relatively more expensive (Dai et al. 2014; Steinbock 2018). Theory predicts: the US-China trade war reduces US-China bilateral trade, INCREASES both countries' imports from third countries — "bystanders" like Vietnam. Prior Vietnam literature was mostly QUALITATIVE/predictive (Ha & Phuc 2019; Hoa 2019; Lich 2018), with MIXED scholarly views (some predicting Vietnam benefits, others fearing losses) — the gap the paper fills is CAUSAL QUANTITATIVE evidence.

## Data

Secondary UN Comtrade data, Vietnamese exports to the US at **6-digit HS** level, MONTHLY frequency, period **1/2018–8/2019** (before the 4th tariff round took effect — by then nearly all HS codes were tariffed, leaving insufficient control groups; and before COVID-19 to avoid confounding). 4 rounds of US tariff increases on Chinese goods: List 1 ($34bn, 25%, 7/6/2018), List 2 ($16bn, 25%, 8/23/2018), List 3 ($200bn, 10%→25% from 5/2019, 9/24/2018), List 4A ($120bn, 10%→7.5%, 9/1/2019). Treatment/control groups classified per the USTR list (tariffed Chinese goods = treatment; not tariffed = control). The US accounted for 1/3 of Vietnam's total export value in 2022 (up from 20% in 2010) — Vietnam's LARGEST export market.

## Methodology

**DiD (Difference-in-Differences)**, following Angrist & Pischke (2009): ln(expᵢₜ) = α + β_DD·tradewarᵢₜ + Σγₖ·HSₖᵢ + Σδⱼ·timeⱼₜ + eᵢₜ, where tradewarᵢₜ = 1 if product i is a Chinese good subject to additional US tariffs (from its effective date) and 0 otherwise; HSₖᵢ and timeⱼₜ are product/time dummies. The core assumption (parallel trends): the treatment and control groups follow PARALLEL export trends before the trade war — checked via a chart (Fig. 3) showing the assumption is reasonable. DiD is run separately for TOTAL exports and for EACH sector with sufficient treatment/control groups at the 6-digit level: plastics (HS39), textiles/garments (HS50-63), machinery/mechanical appliances (HS84), electrical machinery (HS85), vegetables/fruits (HS07/08/20), wood (HS44), fish (HS03), furniture (HS94), iron/steel (HS73).

## Regression/Estimation Results

- **Total exports (Table 3)**: tradewar coefficient = **0.141*** (p<0.01)** → the trade war INCREASED Vietnamese exports to the US by approximately **14%**. N=28,154 observations, R²=0.891.
- **By sector (Table 3)** — SIGNIFICANT: plastics (HS39) 0.356** (~35%+), iron/steel (HS73) 0.308*** (~31%), textiles/garments (HS50-63) 0.241*** (~24%), machinery (HS84) 0.189* (~19%, only significant at the 10% level). NOT significant: electrical machinery (HS85) 0.077, fish (HS03) 0.150, vegetables/fruits 0.063, wood (HS44) 0.025, furniture (HS94) 0.013.

## Robustness Checks

**Falsification/placebo test** (Table 4): assuming the trade war started 1 year EARLIER than actual (7/2017 instead of 7/2018), re-running DiD on the 1/2017–6/2018 period (before the real trade war began). TOTAL exports show NO significant result (0.033, no asterisk) — REINFORCING the main result's reliability (no "fake" pre-existing upward trend before the trade war). However, ⚠️ 2 sectors STILL show significant positive coefficients in the placebo test: textiles/garments (0.137*) and iron/steel (0.337***) — the authors describe this in text as a "negative impact" but Table 4's actual figures are POSITIVE and significant, suggesting the parallel-trends assumption may be weaker specifically for these 2 sectors (possibly reflecting a pre-existing export growth trend, not solely the trade war) — the authors still conclude reliability is "generally confirmed" despite these 2 exceptions.

## Key Findings

**The US-China trade war INCREASED total Vietnamese exports to the US by 14% — direct causal evidence for trade diversion theory** — but the benefit concentrates in INTERMEDIATE goods (plastics, iron/steel — production inputs) rather than final CONSUMER goods (electronics, agriculture, furniture show no significant effect). Mechanism: (1) Vietnamese goods became relatively cheaper than Chinese goods once China was tariffed; (2) Vietnam could import cheap raw materials from BOTH the US (e.g., plastics) AND China (e.g., steel for machinery) since the two countries tariffed each other; (3) possible Chinese investment relocation to Vietnam to evade tariffs. Product groups NOT directly tariffed by the US (electronics, agriculture, furniture) show no effect — Vietnamese agriculture/seafood already faced separate pre-existing US trade barriers (anti-dumping suits on shrimp/catfish).

## Conclusion

The US-China trade war has had major impacts not only on the two countries but also on third countries — Vietnam, pursuing an export-led growth strategy, is significantly affected. Vietnamese exports to the US rose ~14%, concentrated in textiles/garments, machinery, plastics, iron/steel — via a substitution effect for Chinese goods. NO effect was found in agriculture, electronic machinery, furniture — because these sectors were not directly tariffed against China by the US, Vietnamese product quality remains limited, and pre-existing separate US trade barriers apply. Recommendation: Vietnam needs to maintain competitive advantage, raise export product quality, implement effective origin tracing (avoiding transshipment suspicion for Chinese goods), and attract quality FDI. Limitations: (1) some sectors (footwear, toys, sports equipment) lacked sufficient control groups and could not be estimated; (2) the MECHANISM behind positive/null impacts per sector is not fully understood; (3) the study only covers the pre-COVID-19/pre-4th-round period — the context may have changed substantially afterward.

## Relevance to the Course/Vietnam

- **This paper is exactly the direct Vietnamese empirical evidence for the Vertical Trade Diversion theory in [[l104-sheng-2025-chinese-exporters-trade-diversion]]** (LN10) — L104 finds China diverting exports TO the Global South (AND excludes Vietnam from an "evasion entrepôt" role via a separate test), while L106 shows Vietnam benefiting DIRECTLY via a substitution effect (replacing Chinese goods in the US market itself) — 2 DIFFERENT trade-diversion mechanisms operating in parallel: China diverting elsewhere (L104) AND Vietnam directly substituting in the US (L106), not contradicting each other.
- Directly paired with [[l107-toai-2025-vietnam-import-export-trade-war]] — L106 uses rigorous QUANTITATIVE DiD for a short period (2018-2019), L107 uses a BROADER descriptive/review approach (2020-2024) — the two papers complement each other on methodological precision vs. observation length.
- Connects to [[l42-do-2023-land-consolidation-vietnam]] (LN4) — both use DiD/PSM-DD for Vietnamese policy questions, illustrating DiD as a method recurring across multiple course lectures to address endogeneity absent a randomized experiment.

## Links

- Lecture: [[ln10-impacts-trade-war-vietnamese-economy]] · Concept: [[trade-war-and-protectionism]]
- Related: [[l104-sheng-2025-chinese-exporters-trade-diversion]], [[l107-toai-2025-vietnam-import-export-trade-war]], [[l42-do-2023-land-consolidation-vietnam]] (LN4)
