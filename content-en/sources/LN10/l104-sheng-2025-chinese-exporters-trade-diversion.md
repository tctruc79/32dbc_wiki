---
type: source
title: "L104 — Sheng, Song & Zheng (2025) — How did Chinese Exporters Manage the Trade War?"
tags: [trade-war, trade-diversion, quality-ladders, tariffs, china, vietnam]
created: 2026-08-07
updated: 2026-08-11
status: complete
source_file: "raw/3. LECTURE NOTES/LN10 Impacts of Trade War on Vietnamese Economy/L104 JIMF-2025 Sheng et al How did Chinese exposures manage the trade war.pdf"
---

# L104 — Sheng, L., Song, H. & Zheng, X. (2025), Journal of International Money and Finance 153: 103300

**Authors**: Liugang Sheng (Department of Economics and HKIAPS, The Chinese University of Hong
Kong), Huasheng Song (CRPE and School of Economics, Zhejiang University), Xueqian Zheng (School of
Economics, Zhejiang University). JEL: F1, F51, O24. Keywords: Trade war, Trade protectionism, Trade
diversion, Quality ladders. Published online 13 February 2025 in Journal of International Money and
Finance 153 (2025) 103300. Open access under the CC BY-NC license.

## Abstract

> This paper studies how Chinese exporters managed the recent US tariff hikes. Contrary to the
> conventional wisdom of horizontal trade diversion, China did not divert more of its products to
> other Northern countries but more to the South. Moving down the quality ladder of destinations
> helps Chinese exporters escape competition for high-quality products in the North and lowers
> penetration costs in the South. This vertical trade diversion reduces quality-adjusted export
> prices but raises qualities and gross prices of Chinese diverted exports, particularly in poor
> countries and for products with high quality scopes, implying that it may benefit the South more.

**Summary (paraphrase)**: ✅ An error in the professor's original LN10 slide (the 6/8/2026
version) — FIXED in the 8/9/2026 update (see [[ln10-impacts-trade-war-vietnamese-economy]]); the
note below is kept as a historical record: the original slide header correctly read "Sheng, Song
and Zheng (2025). How did Chinese Exporters Manage the trade War?", but the bullet content
underneath that header instead described a completely different topic — climate change exposure
and green innovation at Chinese listed firms. This was clearly a copy-paste error made while
preparing the slide, entirely unrelated to the actual L104 paper. This wiki page is written
entirely from the original PDF (cross-checked and confirmed correct paper title,
authors, and journal), NOT from the incorrect slide content. The paper's real content distinguishes
two trade-diversion strategies: Horizontal Trade Diversion (HTD — redirecting goods to countries
resembling the US, i.e. the Global North) and Vertical Trade Diversion (VTD — redirecting
high-quality goods down the quality ladder to lower-income countries, i.e. the Global South). The
paper's central finding: China primarily adopts the VTD strategy rather than HTD, contrary to what
prior literature typically predicted.

## Research Questions

Three main research questions posed in the Introduction: (i) Did China successfully reallocate its
exports to alternative markets after being hit by US tariffs? (ii) If so, were Chinese products
diverted more to the North or the South? (iii) How did this trade diversion affect China's terms of
trade in third markets? Answering these questions both contributes to academic discourse and offers
practical insights for policymakers and businesses amid rising trade protectionism.

## Research Framework

Theoretical foundation: firms typically export higher-quality products to higher-income countries
at higher prices (Bastos & Silva 2010; Bastos et al. 2018) — this also holds for Chinese exports to
the US, as the US is the single largest high-income market (Manova & Zhang 2012; Fan et al. 2020).
Consequently, the US tariff hike constitutes an external demand shock specifically targeting the
high-quality products China exports. If Chinese exporters redirected similar-quality products to
other Northern countries, they would face intense competition for high-quality goods there. To
escape this competition, exporters may instead redirect high-quality products down to the Global
South, where these products are perceived as an upgrade relative to the lower-quality goods those
countries previously imported from China; meanwhile, the quality advantage of goods previously sold
in the US eases market penetration in the South, even with some price discounting. From this, the
paper derives 4 distinctive predictions of the VTD strategy: (1) China diverts more targeted goods
to the South; (2) exports to the South undergo a marked quality upgrade; (3) the quality-adjusted
price in third markets may fall due to the increased-supply effect, but simultaneous quality
upgrading could raise the gross export price; (4) the VTD pattern is more pronounced for products
with a wide quality scope (i.e. a large range of quality variation across product versions).

## Data

Publicly available Chinese monthly export data from January 2017 to December 2019 — stopping before
the COVID-19 pandemic to avoid noise from supply-chain disruptions/demand shocks/policy changes. The
dataset covers values, quantities, customs regimes, and destination/origin markets for each product
at the HS8 level; the original US HS8-level tariffs are harmonized to HS6 codes matching between the
US and China. By December 2019, Section 301 and Section 232 tariffs had raised the weighted-average
tariff rate by 15.7 percentage points; 67% of 2017 US imports from China were covered by these two
special tariff lists. Chinese FOB (free-on-board) export prices are measured as unit values at the
HS6 level, and all regressions on Chinese exports are run at the HS6 level. For the trade-diversion
analysis, the sample excludes small trade partners (Chinese exports below USD 500 million in 2017)
to avoid estimation bias from small/low-frequency trade values, leaving **131 non-US countries**,
accounting for over 99.4% of China's total non-US exports; results hold when extended to the full
sample of non-US partners (robustness check in Appendix B.6).

## Methodology

**Step 1 — the general effect of US tariffs** (Equation 1): ln𝑌ₖₜ𝒹 = β₀ + β₁ln(1+τᵏᵗᵁˢ) + αₖₘ + αₜ
+ εₖₜ, run separately for 3 destinations 𝑑 = US, Rest of the World (R.o.W.), and World, where 𝑌 is
the export value/quantity/FOB unit price of product 𝑘 at month 𝑡, τᵁˢ is the US tariff on that
product, αₖₘ is the HS6 product-month fixed effect (capturing product-specific seasonality), and αₜ
is the year-month time fixed effect.

**Step 2 — the trade-diversion regression** (Equation 2, non-US countries 𝑐 only): ln𝑌𝑐ₖₜ = γ₀ +
γ₁ln(1+τᵏᵗᵁˢ) + γ₂ln(1+τᵏᵗᵁˢ)×𝑋𝑐 + αₖₘ + α𝑐ₜ + α𝑐ₕ + ε𝑐ₖₜ, where 𝑋𝑐 is a destination characteristic
(interacted with the US tariff to trace where China diverts exports), α𝑐ₜ is the
destination-time fixed effect, α𝑐ₕ is the destination-HS2-sector fixed effect; standard errors are
clustered at the country-product level. γ₁ measures the average trade-diversion elasticity, γ₂
measures the heterogeneity of this elasticity by destination characteristic 𝑋𝑐.

**Step 3 — estimating product quality**, following the classic method of Khandelwal et al. (2013):
given a CES consumer utility function, the quality of each product-destination-time observation is
estimated as the residual from the regression ln(𝑞ₖ𝑐ₜ) + σln(𝑝ₖ𝑐ₜ) = αₖ + α𝑐ₜ + εₖ𝑐ₜ (Equation 3),
where α𝑐ₜ absorbs the destination's income/price index and αₖ absorbs product-specific
characteristics. Estimated quality is ln(λ̂ₖ𝑐ₜ) = ε̂ₖ𝑐ₜ/(σ-1); the quality-adjusted price is
ln(𝑝ₖ𝑐ₜ) − ln(λ̂ₖ𝑐ₜ). Intuition: at a given price, a product sold in higher quantity is assigned
higher quality. The substitution elasticity σ is taken from Broda & Weinstein's (2006) SITC 3-digit
estimates, following Fan et al. (2015), rather than using one common value for all products.

## Regression/Estimation Results

- **General effect of US tariffs (Table 1)**: each 1 percentage point increase in US tariffs
  reduces Chinese export value to the US by about **1.089%*** and quantity by about **1.078%***,
  while the export price to the US does NOT change significantly (-0.011, not significant) —
  consistent with prior studies (Fajgelbaum et al. 2020; Cavallo et al. 2021; Jiang et al. 2022;
  Jiao et al. 2021). By contrast, exports to the rest of the world (R.o.W.) rise significantly
  (+0.155**), making the effect on China's TOTAL world exports close to zero (+0.011, not
  significant) — clear evidence of successful trade diversion. In absolute terms, by end-2019 China
  had increased exports to other partners by **USD 50.3 billion**, offsetting about **90%** of the
  **USD 57.6 billion** loss in the US market.
- **Rejecting HTD (Table 2)**: all 4 measures of similarity between the destination and the US
  (import-mix similarity, China's export-mix similarity, income-level similarity,
  income-distribution similarity), when interacted with US tariffs, yield highly significant
  NEGATIVE coefficients (from -0.481*** to -6.304***) — meaning China diverts more to countries
  that are MORE DIFFERENT from the US, the opposite of what the HTD hypothesis predicts.
- **Confirming VTD (Table 3)**: the US-tariff coefficient is significantly positive for export
  value (0.372***), quantity (0.243***), price (0.129***), quality (0.589***), and extensive
  margin — new product varieties (0.009***); the quality-adjusted price coefficient alone is
  significantly NEGATIVE (-0.455***). Interaction terms with the destination's GDP-per-capita ratio
  to the US all show diversion and quality upgrading are STRONGER in POORER countries — matching
  VTD features (1) and (2) exactly.
- **Magnitude (Table 4)**: for a 10-percentage-point US tariff increase, in a
  sample-average-income country (e.g. Greece), Chinese export value to that country rises 3.72%,
  quantity 2.43%, price 1.29%, quality-adjusted price falls 4.55%, quality rises 5.89%. In a
  hypothetical poor country A (e.g. Poland, with relative income 10 percentage points below the
  sample average), every effect is STRONGER: export value +5.00% (1.28pp higher), quantity +3.19%
  (+0.76pp), quality +7.88% (+1.99pp), price +1.81% (+0.52pp) — showing the quality-upgrading
  effect consistently dominates the price-depressing supply effect.
- **Product quality scope (Table 5)**: all 3 measures of high quality scope (Rauch-classification-
  based, based on the standard deviation of estimated quality, based on the standard deviation of
  industry R&D intensity) yield significantly POSITIVE interaction coefficients for both quality
  and export value — VTD and quality upgrading are more pronounced for products with a wide quality
  scope. Under the preferred measure (R&D-intensity standard deviation), for each 1 percentage
  point increase in US tariffs, quality rises about 0.40% for the low-scope group versus 0.76% for
  the high-scope group; export value rises 0.24% versus 0.49%.
- **Dynamics over time (Section 4.2.4)**: a dynamic Difference-in-Differences (DID) approach shows
  NO differential trend before the tariff announcement (no "pre-trend") between targeted and
  non-targeted products; the diversion and quality-upgrading trends begin rising about 3 months
  before the tariffs take effect (an announcement effect), and become most pronounced 5-6 months
  after actual implementation — reflecting adjustment costs in export reallocation and the time
  needed to establish new trade networks.
- **Why divert to the South (Table 6, Section 4.2.5)**: using an index of import competition for
  high-quality goods in third countries (import share from the US, Germany, and Japan at the HS6
  level), the interaction with US tariffs is highly significantly NEGATIVE (-2.901*** for export
  value, -3.261*** for quantity, -0.044*** for extensive margin) — China diverts LESS to countries
  where competition for high-quality goods is already intense. This is direct evidence for VTD's
  primary driving force: competition for high-quality goods is more intense in the North than in
  the South.
- **Political distance and trade policy uncertainty (Table 7, Section 4.2.6)**: results are robust
  to controlling for bilateral political distance (measured via United Nations General Assembly
  voting, following Bailey et al. 2017) and the Trade Policy Uncertainty index (TPU, following Ahir
  et al. 2022). China diverts LESS to the US's political allies (a 10% tariff hike raises exports
  by only 0.42% for a country one standard deviation politically closer to the US, versus an
  average increase of 4.19%) and MORE to countries politically closer to China (+6.4% versus the
  4.1% average, 2.3pp higher); higher TPU in the third market reduces the degree of diversion
  there.
- **Testing tariff evasion via entrepôt trade (Section 4.2.7)**: excluding 20 countries with free
  trade agreements (FTAs) with the US, and separately excluding 9 countries suspected of serving as
  entrepôt hubs — including **Vietnam**, along with Mexico, Korea, Thailand, Germany, Malaysia,
  Canada, Cambodia, and Singapore — the VTD results hold in both cases, indicating that vertical
  trade diversion is NOT driven by tariff-evasion behavior via entrepôt re-export.

## Robustness Checks

Two sets of robustness checks. **(1) Ruling out alternative explanations for the export-price
increase**: using the Herfindahl-Hirschman Index (HHI) and the top-5-exporter concentration ratio
(CR5) to test for markup adjustment — the interaction between US tariffs and market concentration
is NEGATIVE, meaning prices rise more in MORE competitive markets, rejecting the markup story. On
input costs, US tariffs actually LOWER China's import input prices (consistent with Chor & Li 2021
on falling income/manufacturing employment in affected regions) — also rejecting the
rising-input-cost story. **(2) Additional VTD robustness checks**: results are unchanged under
alternative substitution elasticities σ (a constant σ=5 per Fan et al. 2015, and a disaggregated σ
by destination-HS4 sector per Soderbery 2018), when extended to the full sample of non-US partners,
when controlling for China's upstream import tariffs, and when controlling for initial product
quality. Analysis by ownership type shows state-owned enterprises (SOEs) exhibit WEAKER diversion
and quality upgrading than privately owned enterprises (POEs); processing exports show SMALLER
effects than ordinary exports, though both display the VTD pattern.

## Key Findings

**China's dominant strategy for coping with US tariffs is Vertical Trade Diversion (VTD), NOT
Horizontal (HTD)** as conventional wisdom predicted — China "escapes" intense competition for
high-quality goods in the North by pushing high-quality goods down to the South, where competition
is lower and the goods are perceived as an upgrade. The primary driver is directly confirmed: the
higher the high-quality-goods import competition in a third country (measured by import share from
the US/Germany/Japan), the LESS China diverts there. The quality-upgrading effect ALWAYS DOMINATES
the price-depressing supply effect, so even though the quality-adjusted price falls, China's gross
FOB export price in third markets RISES — meaning China's gross terms of trade in those markets
IMPROVE, particularly pronounced in poor countries and for products with a wide quality scope.

## Conclusion

In the face of the US tariff shock, Chinese exporters successfully diverted goods to the South
along the quality ladder, rather than to the North as conventional wisdom predicted. This VTD
strategy leads to significant quality upgrading and export price increases in diverted Chinese
goods, despite the discount in quality-adjusted prices, thereby improving China's gross terms of
trade in third markets. The paper highlights the role of product quality scope in trade
diversion — an aspect largely overlooked in multi-country, multi-industry quantitative trade models
(e.g. computable general equilibrium/CGE models) used to quantify the welfare costs/benefits of the
trade war; ignoring the quality margin may bias estimates of third countries' gains and China's
welfare losses. The paper recommends future quantitative studies incorporate the quality margin
(following Feenstra & Romalis 2014).

## Implications for the Course/Vietnam

- **Central to LN10's new [[trade-war-and-protectionism]] concept**, supplying the theoretical
  mechanism + quantitative evidence for the trade-diversion phenomenon that L101
  ([[l101-robinson-thierfelder-2024-us-trade-policy-cge]]) only simulates at the macro level and
  L103 ([[l103-che-2025-tariff-evasion-trade-war]]) approaches from a tariff-evasion angle.
- **Vietnam is explicitly named in the paper** — as 1 of 9 countries suspected of serving as an
  entrepôt hub, which the authors exclude from the sample as a robustness check (Section 4.2.7);
  the VTD results hold even after excluding Vietnam, indicating the paper's core finding is NOT
  driven by tariff-evasion behavior through Vietnam. This is a nuance worth noting when connecting
  to [[l106-dang-2024-vietnam-exports-us-trade-war-did]] (Vietnamese exports to the US up 14% via
  DID) and [[l107-toai-2025-vietnam-import-export-trade-war]] (Vietnamese exports to the US up over
  40% during 2020–2024): the export growth those two papers document more likely reflects US
  buyers directly substituting Vietnamese supply for Chinese supply (a demand-side diversion
  channel on the US side), rather than Vietnam serving as a pass-through hub for Chinese goods
  under the VTD mechanism L104 describes — since L104 itself tested for and ruled out that
  possibility.
- **L104's "escaping high-quality competition" mechanism suggests another angle for Vietnam**: if
  China tends to push high-quality goods toward lower-income countries generally (the Global
  South, of which Vietnam is a potential market even though it is not analyzed separately in the
  main regression tables), Vietnam could simultaneously benefit from the US directly redirecting
  orders to it (per L106/L107) while also facing import-competition pressure from increasingly
  higher-quality Chinese goods — two opposing forces both worth monitoring when assessing the net
  impact of the trade war on Vietnam.

## Links

- Lecture: [[ln10-impacts-trade-war-vietnamese-economy]] · Concept:
  [[trade-war-and-protectionism]]
- Related: [[l101-robinson-thierfelder-2024-us-trade-policy-cge]],
  [[l103-che-2025-tariff-evasion-trade-war]], [[l106-dang-2024-vietnam-exports-us-trade-war-did]],
  [[l107-toai-2025-vietnam-import-export-trade-war]]
