---
type: source
title: "L101 — Robinson & Thierfelder (2024) — US International Trade Policy: Scenarios of Protectionism and Trade Wars"
tags: [trade-war, protectionism, tariffs, cge-model, trade-diversion, us-china-trade, trade-policy]
created: 2026-08-07
updated: 2026-08-08
status: complete
source_file: "raw/3. LECTURE NOTES/LN10 Impacts of Trade War on Vietnamese Economy/L101 JPM-2024 Robinson US international trade policy.pdf"
---

# L101 — Robinson, S. & Thierfelder, K. (2024), Journal of Policy Modeling 46(4): 723–739

**Authors**: Sherman Robinson (Peterson Institute for International Economics — PIIE, Washington
DC, USA), Karen Thierfelder (US Naval Academy, Annapolis, MD, USA). Received 5/2/2024, accepted
19/2/2024, online 3/7/2024, Version of Record 3/8/2024. DOI: 10.1016/j.jpolmod.2024.02.010.
Published by Elsevier on behalf of The Society for Policy Modeling.

✅ **Updated 2026-08-08**: the user replaced the PDF in `raw/` with the FULL 17-page text
(pp.723–739; previously only a 5-page ScienceDirect abstract landing-page printout was
available). This page has been fully rewritten from the full text — it now includes complete
Tables 1–10 with detailed quantitative results by sector/country/scenario that the earlier
version lacked.

## Abstract

> US international trade policy under both the Trump and Biden administrations has been
> increasingly protectionist. This paper considers two policy scenarios under active discussion:
> (1) an across-the-board increase in all US tariffs by 10 percentage points, and (2) a severe
> escalation of the US trade war with China. The scenarios are analyzed using a multi-country
> computable general equilibrium (CGE) simulation model of the global economy. Trade wars or
> policy regimes of widespread protection will increase tariffs in many sectors simultaneously and
> include both final goods and intermediate inputs. The impacts are complex, with a web of direct
> and indirect forces coming into play across domestic and international markets. The global CGE
> model captures these mechanisms, including both short and long-run effects, with and without
> retaliation by partner countries. In a world economy where the US accounts for only 10% of
> global trade and potentially rival trade bloc have emerged in Europe and E&SE Asia, the US is no
> longer hegemonic in global markets. We find that across-the-board tariffs do not protect
> manufacturing jobs because the cost of imported intermediate goods increases, raising costs in
> manufacturing production. The US trade war with China leads to a dramatic fall in bilateral
> trade. Other countries expand their trade to China and the US with the exception of closely
> linked partners (e.g. Canada and Mexico and all countries in E&SE Asia). We find that the world
> economy can adjust to US trade wars, diverting trade around the US.

**Summary (paraphrase)**: The opening paper of LN10's first cluster of 5 readings analyzing the
US-China trade war at the global/theoretical level (before LN10 shifts to Vietnam-specific
empirical evidence in L106/L107) — using a multi-country CGE model called "Globe" (18 regions, 24
sectors) to run 5 "what if" simulations along 2 policy axes (a uniform 10% tariff increase; an
escalated trade war with China), concluding that both generate net costs larger than benefits for
the initiating country, the US — even without retaliation — while the rest of the world adjusts
by diverting trade (trade diversion) around the US.

## Research Questions

The paper does not list research questions explicitly, but the 3-scenario framework (Table 4)
answers 3 core questions: (i) How does a uniform 10-percentage-point tariff increase on all US
imports (a "limited trade war") affect US employment/GDP/trade, with and without retaliation?
(ii) How does an escalated, China-specific 60-percentage-point US tariff (a "China trade war")
affect US-China bilateral trade and third-country trade flows? (iii) Does combining the two
scenarios ("combined trade war") amplify the negative effects, and how does a global economy — no
longer dominated solely by the US — adjust via trade diversion, in the short and long run?

## Research Framework

The historical context is the paper's core theoretical foundation: in the early post-WW2 period,
the US dominated the global economy in both GDP and international trade. With European recovery
and the formation of the European Union (EU), Europe gradually became a deeply integrated
regional economy. In the last quarter of the 20th century, especially with China's rise, a
similar regional bloc formed in East and Southeast Asia. The paper formally names this concept:
**3 Inter-connected Regional Economies (ICREs)** — North America (US, Mexico, Canada), Europe
(the EU + closely linked countries), and East/Southeast Asia (China + other East/Southeast Asian
countries). Table 1 quantifies this: the 3 ICRE blocs have comparable shares of global GDP
(Europe 24%, E&SE Asia 31%, North America 29%) but differ widely in their share of global
EXPORTS — Europe leads (37%), E&SE Asia second (30%), North America only 15%. The US alone
accounts for 10.4% of global trade; China alone accounts for 12.0%. The key implication: the US
is now NOT hegemonic as in the postwar era — this is the theoretical premise explaining why
unilateral US protectionism can no longer "force" the rest of the world into concessions as it
once could, and why trade diversion is economically feasible at a global scale. Table 2 adds: US
exports to China are only 9.4% of total US exports, while Chinese exports to the US are 19.7% of
total Chinese exports — structurally, China "has more to lose" in a purely bilateral trade war,
but the key question is each side's ability to diversify trade elsewhere. The paper directly
builds on Robinson's own earlier line of CGE trade-war modeling (Robinson & Thierfelder 2018,
"NAFTA Collapse, Trade War and North American Disengagement", JPM; Robinson & Thierfelder 2019a,
"Global adjustment to disengagement of the United States from the world trading system", JPM;
Devarajan et al. 2021, "Traders' dilemma: Developing countries' response to trade wars", The
World Economy).

## Data

This is not a conventional regression paper with panel data but a calibrated CGE model built on a
global social accounting matrix (SAM). The "Globe" model: **18 countries/regions**, **24
sectors/commodities**, **2 labor categories** (skilled and unskilled), plus **3 other factors of
production** (land, capital, and natural resources). Table 3 gives detailed sectoral trade
structure for the US and China: manufacturing accounts for **57% of total US exports and 69% of
total US imports**; the most trade-exposed US sectors are oilseeds (47% of production exported),
gas extraction (39%), aluminum (30%). For China, manufacturing accounts for **80% of exports and
59% of imports**; oilseeds and mining are highly import-dependent (50% of oilseed consumption, up
to 98% for "other mining products"). The model's underlying database is likely GTAP v11 (Aguiar
et al. 2023, cited in the reference list).

## Methodology

The empirical analysis uses the **multi-country "Globe" CGE model**: a series of single-country
CGE models linked through bilateral trade relationships. Aggregate imports and domestic goods are
imperfect substitutes (a CES function); exports and domestic goods likewise (a CET function). The
paper's distinctive **nested trade structure**: aggregate imports are a CES function over imports
from ICRE BLOCS (NAFTA, Europe, E&SE Asia, rest of world) — WITHIN each bloc, the substitution
elasticity AMONG member countries is LOW (reflecting deeply integrated intra-bloc supply chains,
intermediate goods crossing borders multiple times). Trade elasticities are assumed HIGHER in the
long run than the short run. Each region has its own numeraire price index (the producer price
index — PPI); the global numeraire is a trade-weighted average exchange-rate index for high-income
countries.

**3 factor-market closure assumptions** (Table 5) — the model's implicit "robustness" axis:
**Short run** — in regions engaged in the trade war: labor (both skilled and unskilled) is
UNEMPLOYED per a "wage curve" approach (fixed nominal wage, endogenous labor supply as a function
of the wage-labor-demand gap); capital is SECTOR-SPECIFIC (immobile). **Medium run** — in
high-income regions (Japan, Korea/HK Asia, Canada, the US, EU-EFTA, the UK): all factors fully
employed, flexible nominal wage, capital still sector-specific but labor/land/natural resources
mobile. **Long run** — in ALL regions, ALL factors: fully employed AND fully mobile. Each
country's external current account is assumed FIXED — changes in economic activity do not induce
changes in foreign borrowing; instead the exchange rate adjusts.

**5 simulations (Table 4)**: Sim01 (US unilaterally +10pp tariffs on all partners), Sim01B (as
Sim01, + all regions except low-income ones retaliate), Sim02 (US +60pp tariffs on imports from
China only), Sim02B (as Sim02, + China retaliates in kind), Sim03 (Sim01B + Sim02B combined). The
short run considers both with/without retaliation; the long run considers ONLY with retaliation
(a more realistic assumption given historical precedent). The authors explicitly note **model
limitations**: it does NOT capture recession risk/asset-market shocks from abrupt policy change;
does NOT model long-run trade-balance/FDI flow effects; does NOT model sectoral TFP effects from
disrupted efficient supply chains — so the results should be seen as CONSERVATIVE estimates of
the true magnitude of impact.

## Regression/Estimation Results

**Scenario 1 — a "limited" trade war (+10pp on all partners)**: Short run, WITHOUT retaliation: US
real GDP −1.2%, employment −2.1%, exports −4.9%, imports −0.8%, terms of trade (ToT) IMPROVES
+3.5% (100→103.5, the US exploits market power), the real exchange rate APPRECIATES 7.3% (Table
7A) — this very appreciation "eats" the protectionist benefit, making exports fall more than
imports. Short run, WITH retaliation: GDP −2.2%, employment −3.9%, exports −6.5%, imports −5.2%,
ToT WORSENS to 98.5 — the US has LESS market power than its trade partners; the exchange rate
appreciates less (2.1% instead of 7.3%) but both exports and imports fall more sharply. Long run,
with retaliation (Table 6B): US GDP is only −0.1% (a milder impact than the short run since
employment fully recovers) but ToT worsens FURTHER (95.0) — imports fall 7.1%, exports fall 5.0%.

**Scenario 2 — a US-China trade war (+60pp on China only, with retaliation)**: Short run: US GDP
−1.4%, employment −2.3%; China GDP −1.4%, employment −3.4% — BUT CHINA's exports still RISE +0.1%
short run and +1.4% long run (Table 6A/6B), thanks to strong diversification to other markets.
China's real exchange rate DEPRECIATES sharply — 7.8% short run, 11.9% long run (Table 7A/7B) —
because imports are COMPLEMENTS (not substitutes) in China's production, so China must increase
exports to earn the foreign exchange needed to pay for more expensive but essential imports.
China's exports to the US fall **44% in the long run** (Table 8B) but RISE to every other region:
+15.4% Rest of NAFTA, +14.6% Europe, +11.7% intra-China (re-export/transshipment?), +9.6% Rest of
ESE Asia. US exports to China fall **62.3%**; the US's NAFTA partners also cut exports to China
due to regional supply-chain linkage (Canada −28.3%, Mexico −33.2% — much sharper than other
East/Southeast Asian countries, since Rest of NAFTA sends 73.5% of its exports to the US while
Rest of ESE Asia sends only 27.4% to China, per Table 2).

**Scenario 3 — Combined**: amplifies the negative effects of both scenarios above. Short run: US
employment −5.6%, real GDP −3.3%, aggregate final demand −3.1%. Long run: final demand only −0.9%
(no more employment loss) but exports fall in EVERY region EXCEPT China (+1%, Table 8C).

**Sectoral results (Table 9, long run with retaliation)**: most US manufacturing sectors DECLINE
despite being tariff-"protected" — e.g. Autos −5.04% (combined scenario), Aluminum −4.70%,
Petroleum −7.78% — a **"fallacy of composition"**: widespread tariffs hit both intermediate
inputs and final goods, so even protected sectors bear higher input costs through inter-sectoral
linkages. A few sectors RISE: light manufacturing +2.37% (China scenario), intermediate
manufacturing +1.42%, other manufacturing +0.87–0.89%, other services (the least-traded sector)
rises modestly in every scenario.

**Tariff revenue & welfare (Table 10)**: welfare loss per dollar of tariff revenue gained — short
run: $1.76 (limited), $1.31 (China), $1.59 (combined); long run: $0.46, $0.65, $0.49 respectively.
**Trade-war tariffs are a VERY INEFFICIENT tool for raising government revenue.**

## Robustness Checks

The paper's "robustness" design sits directly in the model architecture: each scenario is run
across 3 axes of variation — **with/without retaliation** × **short/long run** × **limited/China/
combined** — yielding 9+ complete quantitative result combinations (Tables 6A/6B, 7A/7B, 8A/8B/
8C). The main conclusion (protectionism generates a net cost for the US) HOLDS across EVERY
combination, though the dominant mechanism differs: short-run costs mainly stem from FRICTIONAL
UNEMPLOYMENT; long-run costs mainly stem from a TERMS-OF-TRADE LOSS even after employment fully
recovers.

## Key Findings

**The US-China trade war leads to a dramatic fall in bilateral trade** — China's exports to the
US −44%, US exports to China −62.3% long run (Table 8B). But this does NOT mean the world gets
"stuck" — **other countries expand trade with both China and the US**, WITH THE EXCEPTION of
partners closely linked through value chains (Canada/Mexico — tied to the US via NAFTA, CUTTING
exports to China 28.3%/33.2%; and ALL East/Southeast Asian countries — tied to China through
regional supply chains). Overall conclusion: **the world economy can adjust to US trade wars by
diverting trade around the US** — this mechanism partly limits the global economic damage, but
the US itself (the initiator) still bears a net cost, since it loses trade standing and supply
chains restructure around it rather than through it. Two important quantitative findings absent
from the earlier summary: (1) a **"fallacy of composition"** — widespread tariffs reduce OUTPUT
in nearly every industrial sector, including "protected" ones, because intermediate-input costs
rise in tandem; (2) **tariffs are a very inefficient revenue-raising tool** — a welfare loss of
$0.46–$1.76 per $1 of tariff revenue collected, depending on scenario/time horizon.

## Conclusion

Empirical analysis of three potential US protectionist scenarios (a uniform tariff increase, an
escalated China trade war, and a combination) shows — as economic theory and historical
experience predict — that **protectionist trade policies generate serious costs and limited
benefits to the initiating country (the US) itself**. While there is potential for gains from
exploiting market power on world markets, the inevitable retaliation from trade partners erodes
or reverses those gains — especially true for the US, which has lost its postwar hegemonic role
now that Europe and E&SE Asia have become regional economic blocs matching or exceeding the US's
role in international trade. The uniform 10% tariff scenario has a significant short-run impact
(due to frictional unemployment); in the long run, the welfare loss is more modest but trade
successfully reorients to other markets. If the policy goal is to protect industry, it FAILS —
output falls in almost every sector except low-traded services. The expanded US-China trade war
causes bilateral trade to fall sharply; other countries benefit from spillovers via changed
international prices and by seizing the opportunities opened up as trade with China declines. In
the US, domestic production shifts away from traded agriculture/industry/services toward
low-traded services; in China, the shift runs the opposite way — toward traded industries and
services. The combined scenario amplifies the negative effects the most, with the US effectively
withdrawing from the global economy.

## Implications for the Course/Vietnam

- **The opening/theoretical-foundation paper of LN10's first cluster of 5 readings** — setting
  the multi-scenario CGE framework for the entire group of papers analyzing the trade war at the
  global level (before LN10 shifts to Vietnam-specific empirical evidence in L106/L107), and
  central to the [[trade-war-and-protectionism]] concept.
- **Theory-to-Vietnam-evidence bridge**: the trade-diversion mechanism L101 predicts at the
  theoretical level ("the world adjusts by diverting trade around the US") is exactly what
  [[l106-dang-2024-vietnam-exports-us-trade-war-did]] (Vietnamese exports to the US +14%) and
  [[l107-toai-2025-vietnam-import-export-trade-war]] (Vietnamese exports to the US +40%,
  2020–2024) confirm with real country-level data.
- **A nuance worth flagging for exam prep, now with concrete quantitative evidence**: L101's
  Table 8B shows that in the US-China trade war scenario, exports from "Other Southeast Asia"
  (the CGE region bloc Vietnam belongs to, excluding China/Japan/Korea) to the US actually FALL
  3.7% in the long run — superficially contradicting the strong empirical evidence in L106/L107
  showing Vietnam's own exports to the US rising sharply. The most plausible reconciliation (not a
  real contradiction): L101 aggregates "Southeast Asia" into ONE composite CGE region (of 18), so
  the regional average can mask large divergence among member countries — Vietnam, one specific
  country within that bloc, can benefit very differently from the average, especially through the
  Vertical Trade Diversion channel [[l104-sheng-2025-chinese-exporters-trade-diversion]] describes
  (China actively rerouting ITS OWN exports toward countries like Vietnam) plus Vietnam's own
  US-import-rerouting-from-China effect (L106) — a cross-paper comparison question (L101 vs. L104
  vs. L106/L107) well worth including in exam prep, now citable with the concrete Table 8B figure
  instead of only qualitative reasoning.
- Vietnam relevance: L101's policy implication (protectionism creates a net cost for the
  initiator; trade diversion benefits third countries not closely tied to the trade-war
  initiator) reinforces the argument that Vietnam should leverage its "third-country" position in
  trade diversion — but should heed the long-term structural risks (dependence on Chinese inputs,
  export/import imbalance) that [[l107-toai-2025-vietnam-import-export-trade-war]] warns about.

## Links

- Lecture: [[ln10-impacts-trade-war-vietnamese-economy]] · Concept:
  [[trade-war-and-protectionism]]
- Related: [[l102-alessandria-2025-trade-war-tariff-risk]] (comparing static CGE vs. a dynamic
  model of tariff expectations), [[l104-sheng-2025-chinese-exporters-trade-diversion]] (the
  complementary Vertical Trade Diversion channel),
  [[l106-dang-2024-vietnam-exports-us-trade-war-did]],
  [[l107-toai-2025-vietnam-import-export-trade-war]] (Vietnam-specific empirical evidence for the
  trade-diversion mechanism)
