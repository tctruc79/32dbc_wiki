---
type: source
title: "L101 — Robinson & Thierfelder (2024) — US International Trade Policy: Scenarios of Protectionism and Trade Wars"
tags: [trade-war, protectionism, tariffs, cge-model, trade-diversion, us-china-trade, trade-policy]
created: 2026-08-07
updated: 2026-08-07
status: complete
source_file: "raw/3. LECTURE NOTES/LN10 Impacts of Trade War on Vietnamese Economy/L101 JPM-2024 Robinson US international trade policy.pdf"
---

# L101 — Robinson, S. & Thierfelder, K. (2024), Journal of Policy Modeling 46(4): 723–739

**Authors**: Sherman Robinson (Peterson Institute for International Economics — PIIE, Washington
DC, USA), Karen Thierfelder (US Naval Academy, Annapolis, MD, USA). Received 5/2/2024, accepted
19/2/2024, online 3/7/2024, Version of Record 3/8/2024. DOI: 10.1016/j.jpolmod.2024.02.010.
Published by Elsevier on behalf of The Society for Policy Modeling.

⚠️ **Note on the source**: the PDF in `raw/` is a ScienceDirect landing-page printout (5 pages:
header + abstract, "Section snippets" excerpting the theoretical background/methodology/scenario
paragraphs, a conclusion excerpt, references + "Cited by"), NOT the full 17-page text (pp.723–739)
of the article — the complete version sits behind "View full text". This wiki page ingests ALL
content present in the file (all 5/5 pages read via image rendering since the PDF has no text
layer), cross-checked against the professor's original slides in `LN10 Impacts of Trade War on
Vietnamese Economy.pdf` (slides 4–6, which paraphrase nearly verbatim the same paragraphs, helping
complete the conclusion sentence that was truncated "..." on the ScienceDirect page). Accordingly,
the Regression/Estimation Results and Key Findings sections below accurately reflect the paper's
own qualitative statements in its abstract/conclusion — there is NO detailed quantitative table by
sector/country (e.g. % GDP change, % employment change, specific bilateral trade-value changes),
as those tables sit in the paper body not present in the available source.

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
empirical evidence in L106/L107) — using a static multi-country CGE model called "Globe" to run 2
"what if" scenarios (a uniform 10% tariff increase; an escalated trade war with China), concluding
that both scenarios generate net costs larger than benefits for the initiating country, the US,
while the rest of the world adjusts by diverting trade (trade diversion) around the US.

## Research Questions

The paper does not list research questions explicitly in the usual style, but they can be
reconstructed from the two-scenario policy framework: (i) How does a uniform 10% tariff increase
on all US imports affect US manufacturing employment and intermediate-input costs? (ii) How does
an escalated US-China trade war affect US-China bilateral trade and third-country trade flows?
(iii) Through what mechanism can a global economy — no longer dominated solely by the US —
"adjust" to these protectionist shocks, and specifically how does trade diversion operate?

## Research Framework

The historical context is the paper's core theoretical foundation: in the early post-WW2 period,
the US dominated the global economy in both GDP and international trade. With European recovery
and the formation of the European Union (EU), Europe gradually became a deeply integrated regional
economy that now equals the US in GDP and plays a far larger role in global trade. In the last
quarter of the 20th century, especially with China's rise, a similar regional bloc formed in East
and Southeast Asia. The key implication: the US now accounts for only about 10% of global trade
and is no longer hegemonic as in the postwar era — this is the theoretical premise explaining why
unilateral US protectionism can no longer "force" the rest of the world into concessions as it once
could, and why trade diversion is economically feasible at a global scale. The paper also directly
builds on Robinson's own earlier line of CGE trade-war modeling (Robinson et al. 2018, "NAFTA
Collapse, Trade War and North American Disengagement", JPM; Robinson et al. 2019, "Global
adjustment to disengagement of the United States from the world trading system", JPM) — confirmed
via the paper's own reference list.

## Data

This is not a conventional regression paper with panel data but a calibrated CGE model built on a
global social accounting matrix (SAM). The model's "units of observation": **18 countries/regions**,
**24 sectors/commodities**, **2 labor categories** (skilled and unskilled), plus **3 other factors
of production** (land, capital, and natural resources). The paper's reference list cites Aguiar et
al. (2023), "The Global Trade Analysis Project (GTAP) Data Base: Version 11" — suggesting the
underlying database for the "Globe" model is likely GTAP v11, though the available methodology
excerpt does not explicitly name the database (this is an inference from the reference list, not a
direct statement by the authors in the available excerpt).

## Methodology

The empirical analysis of trade policy scenarios is done with a **multi-country computable general
equilibrium (CGE) simulation model of the global economy called "Globe"**. The underlying approach
to multi-country modeling is the construction of a series of single-country CGE models linked
through (the source is truncated "..." here — most likely continuing with "trade flows," not
inferred further). The model is used for **scenario analysis**: "what if" simulations of the impact
on the global economy of different trade policy regimes — the two scenarios under active US
discussion: (i) a uniform 10-percentage-point tariff increase, and (ii) an escalated trade war with
China. The scenarios are NOT forecasts, but projections of alternative futures under different
assumptions about US policy behavior and feedback reactions by other countries. The model is run
with and without retaliation by trade partners, and distinguishes short-run from long-run effects.

## Regression/Estimation Results

Results of **Scenario 1 — a uniform 10% tariff increase** (the headline result emphasized in the
abstract): across-the-board tariffs **do NOT protect US manufacturing jobs**. Mechanism: the cost
of imported intermediate inputs rises because tariffs cover both final goods and intermediate
inputs, raising domestic manufacturing production costs — a "self-defeating" effect that undermines
the very protection the policy targets.

Results of **Scenario 2 — an escalated US-China trade war** (detailed in Key Findings below):
US-China bilateral trade falls sharply, but third countries adjust via trade diversion.

## Robustness Checks

The paper's "robustness" design sits directly in the model architecture rather than a separate
appendix: each scenario is run **with and without retaliation** from trade partners, and
distinguishes **short-run from long-run effects** — allowing a sensitivity check of the main
conclusion (protectionism generates a net cost for the US) against different assumptions about how
the rest of the world responds. The available source does not show a specific quantitative
comparison table across these retaliation/time-horizon variants.

## Key Findings

**The US-China trade war leads to a dramatic fall in bilateral trade** between the two countries.
But this does NOT mean the world gets "stuck" — **other countries expand trade with both China and
the US**, WITH THE EXCEPTION of partners closely linked through value chains (e.g. Canada and
Mexico — tied to the US via USMCA, and ALL countries in East and Southeast Asia — tied to China
through regional supply chains). Overall conclusion: **the world economy can adjust to US trade
wars by diverting trade around the US** — this mechanism partly limits the global economic damage,
but the US itself (the initiator) still bears a net cost, since it loses trade standing and supply
chains restructure around it rather than through it.

## Conclusion

Empirical analysis of two potential US protectionist scenarios (a uniform tariff increase on all
imports, and an escalated trade war with China) shows — as economic theory and historical
experience predict — that **protectionist trade policies generate serious costs and limited
benefits to the initiating country (the US) itself**. While there is potential for gains from
exploiting market power on world markets by raising tariffs, the increased cost of intermediate
inputs and the inevitable retaliation from trade partners erode or reverse those potential gains.
The paper concludes with a clear policy implication: unilateral protectionism in a multipolar world
(where the US is no longer hegemonic) is a strategy with a net negative payoff for the US itself.

## Implications for the Course/Vietnam

- **The opening/theoretical-foundation paper of LN10's first cluster of 5 readings** — setting the
  static "what if" CGE framework for the entire group of papers analyzing the trade war at the
  global level (before LN10 shifts to Vietnam-specific empirical evidence in L106/L107), and
  central to the new [[trade-war-and-protectionism]] concept.
- **Theory-to-Vietnam-evidence bridge**: the trade-diversion mechanism L101 predicts at the
  theoretical level ("the world adjusts by diverting trade around the US") is exactly what
  [[l106-dang-2024-vietnam-exports-us-trade-war-did]] (Vietnamese exports to the US rose 14% due to
  the trade war) and [[l107-toai-2025-vietnam-import-export-trade-war]] (Vietnamese exports to the
  US grew >40%, 2020–2024) confirm with real country-level data — Vietnam is the concrete empirical
  evidence for the abstract mechanism L101's CGE model simulates.
- **A nuance worth flagging for exam prep**: L101's abstract explicitly places East/Southeast Asian
  countries (the group Vietnam belongs to) among the EXCEPTIONS — i.e. NOT expanding trade much
  with China/the US, due to close regional supply-chain linkage with China. This appears to
  superficially contradict the strong empirical evidence in
  [[l106-dang-2024-vietnam-exports-us-trade-war-did]]/[[l107-toai-2025-vietnam-import-export-trade-war]]
  showing Vietnamese exports to the US rising sharply. The most plausible reconciliation (not a
  real contradiction): L101 models "East/Southeast Asia" as ONE aggregated CGE region (out of 18),
  while L106/L107 measure Vietnam specifically — one country within that bloc can benefit very
  differently from the regional average, especially through the Vertical Trade Diversion channel
  [[l104-sheng-2025-chinese-exporters-trade-diversion]] describes (China rerouting its OWN exports
  TOWARD countries like Vietnam, rather than Vietnam itself expanding trade with China/the US via
  the same mechanism other blocs use) — a cross-paper comparison question (L101 vs. L104 vs.
  L106/L107) well worth including in exam prep.
- Vietnam relevance: L101's policy implication (protectionism creates a net cost for the initiator;
  trade diversion benefits third countries not closely tied to the trade-war initiator) reinforces
  the argument that Vietnam should leverage its "third-country" position in trade diversion — but
  should heed the long-term structural risks (dependence on Chinese inputs, export/import
  imbalance) that [[l107-toai-2025-vietnam-import-export-trade-war]] warns about.

## Links

- Lecture: [[ln10-impacts-trade-war-vietnamese-economy]] · Concept:
  [[trade-war-and-protectionism]]
- Related: [[l102-alessandria-2025-trade-war-tariff-risk]] (comparing static CGE vs. a dynamic
  model of tariff expectations), [[l104-sheng-2025-chinese-exporters-trade-diversion]] (the
  complementary Vertical Trade Diversion channel), [[l106-dang-2024-vietnam-exports-us-trade-war-did]],
  [[l107-toai-2025-vietnam-import-export-trade-war]] (Vietnam-specific empirical evidence for the
  trade-diversion mechanism)
