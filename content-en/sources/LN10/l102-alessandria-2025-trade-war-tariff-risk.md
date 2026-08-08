---
type: source
title: "L102 — Alessandria, Yar Khan, Khederlarian, Ruhl & Steinberg (2025) — Trade War and Peace: U.S.-China Trade and Tariff Risk from 2015–2050"
tags: [trade-war, tariffs, us-china, trade-policy-uncertainty, dynamic-trade-model, ntr, nntr, indirect-inference]
created: 2026-08-07
updated: 2026-08-07
status: complete
source_file: "raw/3. LECTURE NOTES/LN10 Impacts of Trade War on Vietnamese Economy/L102 JIE-2025 Alessandria et al Trade war and peace-US-Chiana trade and tariff risk from 2015-2050.pdf"
---

# L102 — Alessandria, G., Yar Khan, S., Khederlarian, A., Ruhl, K.J. & Steinberg, J.B. (2025), Journal of International Economics 155: 104066

**Authors**: George Alessandria, Shafaat Yar Khan, Armen Khederlarian, Kim J. Ruhl, Joseph B.
Steinberg. Published in the Journal of International Economics, Volume 155, May 2025, article
104066, DOI: 10.1016/j.jinteco.2025.104066. Kim J. Ruhl is a co-editor of the journal but was not
involved in the review or publication decision for this article (Declaration of competing
interest). George Alessandria and Kim J. Ruhl received support from the National Science
Foundation, award #2214852. ⚠️ The source PDF in `raw/` is a printout of the ScienceDirect abstract
landing page (6 pages), not the full published text, so this page has no JEL classification, no
submission/acceptance dates, and no complete author affiliations — missing items are left blank
rather than guessed, and the Methodology/Results sections below track exactly what the abstract,
introduction, methods/results excerpt, and conclusion on the landing page provide.

## Abstract

> We model trade policy as a Markov process. Using a dynamic exporting model, we estimate how
> expectations about U.S. tariffs on China have changed around the U.S.-China trade war. We find
> (i) no increase in the likelihood of a trade war before 2018; (ii) the trade war was initially
> expected to end quickly but its expected duration grew substantially after 2020; and (iii) the
> trade war reduced the likelihood that China would face Non-Normal Trade Relations tariffs in the
> future. Our findings imply the expected mean future U.S. tariff on China rose more under
> President Biden than under President Trump.

**Summary (paraphrase)**: The 2nd of LN10's 7 readings — part of the theoretical/global-simulation
layer alongside L101 (differing from L101 in using a dynamic model with time-varying expectations
rather than a static general-equilibrium model). The key point: the paper measures not just the
LEVEL of tariffs but EXPECTATIONS about future tariffs — the same current tariff can carry very
different economic meaning depending on whether firms believe it will soon reverse or persist,
since Chinese firms' investment decisions in the U.S. export market depend on long-run
expectations, not just the current tariff rate.

## Research Questions

The paper originates from a real chain of questions that arose the moment Donald Trump was elected
U.S. President in 2016: Would he follow through on his campaign pledge to raise tariffs on China?
If so, by how much? Would he shift China to the Non-Normal Trade Relations (NNTR) tariff schedule
or choose something else? How long would these tariffs last? Would policy reverse quickly — as with
President Nixon's import surcharge — or remain in place for decades — as with President Truman's
embargo on China? Once Trump did raise tariffs on China in 2018, the "how long" question grew more
complicated with the upcoming 2020 election and Joseph Biden's subsequent term — the issue remained
live through 2024, when in May of that year Biden renewed the existing tariffs and added a further
25 percentage points on almost 400 goods.

## Research Framework

Methodological foundation: trade policy is treated as a Markov process — the probability of
switching between tariff "regimes" varies over time rather than being fixed. The framework combines
two key features: (1) heterogeneous firms making forward-looking export participation decisions —
i.e., Chinese firms invest in U.S. market access based on expectations about FUTURE tariffs, not
just the current rate; (2) tariff risk that varies across both products and time. The paper
directly builds on Alessandria et al. (2021) and Alessandria et al. (2024b) — shorthand AKKRS — by
introducing a richer stochastic process for trade policy that accounts for multidimensional tariff
risk, then using it to forecast future trade dynamics. The paper contributes to two literatures:
(a) the U.S.-China trade-war literature (surveyed by Fajgelbaum & Khandelwal 2022; Caliendo & Parro
2023); (b) the trade-policy-uncertainty literature (surveyed by Handley & Limão 2022), particularly
studies using dynamic trade models to analyze policy dynamics.

## Data

U.S. import data from the U.S. Census Bureau, July 2014 through June 2024, at the HS-6 level,
combined with Eurostat import data for the 27 EU countries. The 27 EU countries are aggregated into
a SINGLE importer; for both the U.S. and the EU, China is treated as a separate exporter, while all
other exporters are aggregated into a second group. The sample is a balanced sample. This is
disaggregated data, allowing the authors to isolate trade responses by product/time rather than
looking only at aggregate trade values.

## Methodology

**A dual method**: combining reduced-form analysis to identify the key parameters with a structural
model to fully quantify the expectations dynamics.

(1) **Reduced-form analysis** based on two key elasticities COINED by the authors: the
**trade-war gap elasticity** — the elasticity of U.S. imports from China with respect to the gap
between trade-war tariffs and Normal Trade Relations (NTR) tariffs; and the **NNTR-gap
elasticity** — the elasticity with respect to the gap between NNTR tariffs and NTR tariffs. The
two elasticities are ORTHOGONAL to each other, so movements in each identify a different
regime-switching probability in the structural model.

(2) **Structural model**: a dynamic exporter model building on Alessandria et al. (2021) and
AKKRS, in which Chinese firms invest in U.S. market access, subject to idiosyncratic firm-level
shocks, industry-specific tariff variation across policy "regimes," and a common time-varying
probability of switching between policy regimes. These switching probabilities are estimated via
indirect inference — calibrating the structural model's parameters so simulated moments match the
elasticities estimated from actual data.

## Regression/Estimation Results

3 main findings (Abstract/Introduction sections):

- **(i) NO increase in the probability of a trade war before 2018**: despite Trump's campaign
  rhetoric of raising tariffs, the trade-war gap elasticity remained STABLE in the three years
  before the Trump tariffs took effect — indicating NO anticipatory market response before the
  policy was actually enacted.
- **(ii) The probability of returning to the original NTR level was >70%, falling to 21% by 2023**:
  during the first two years of the trade war, the market still believed VERY STRONGLY (>70%) that
  tariffs would return to NTR levels. This expectation began to shift once President Biden
  continued the trade war; by 2023, the probability of the trade war ending had fallen to 21%. This
  transition dynamic is also identified by the behavior of the trade-war gap elasticity — falling
  in 2019 right after the Trump tariffs took effect, then stalling for several years before falling
  further.
- **(iii) The nature of the uncertainty changed, not just its degree**: the trade war reduced the
  likelihood that China would face the NNTR tariff schedule in the future. Before the trade war,
  the possibility of reverting to NNTR still existed — even after China was granted Permanent NTR
  status in 2001, and even after Trump's election — but this possibility FELL once the trade war
  began and a different tariff schedule was applied specifically to China. This shift is identified
  by the NNTR-gap elasticity — STABLE before the trade war but RISING after it began; because the
  trade-war gap and NNTR gap are orthogonal, this rise specifically reflects a declining likelihood
  of reverting to NNTR. The growth in the NNTR-gap elasticity during the trade-war period is of a
  SIMILAR MAGNITUDE to the growth around China's 2001 WTO accession — an event Pierce & Schott
  (2016) and Handley & Limão (2017) cite as evidence that it eliminated policy uncertainty.

**Quantifying the discounted expected mean tariff**: even though Trump raised tariffs while Biden
only maintained them, Trump actually LOWERED the discounted expected mean tariff by 5.3 percentage
points, while Biden RAISED it by 4.6 percentage points. The reduction under Trump comes from the
decline in the likelihood of reverting to NNTR PLUS the high initial probability that the trade war
would be short-lived; the shift in expectations toward a LONG trade war under Biden instead raised
expected future tariffs.

## Robustness Checks

The paper's main robustness check is cross-validating the two ORTHOGONAL elasticities — the
trade-war gap and the NNTR gap — each identifying a DIFFERENT regime-switching probability in the
structural model, cleanly separating two types of uncertainty (uncertainty about whether the TRADE
WAR will end, and uncertainty about whether NNTR will return) rather than lumping them into one
vague indicator. The authors additionally cross-check the 2018 trade-war dynamics against the 1980
trade reform: trade responses before/after these two reforms are SIMILAR in magnitude — before
both, there was no material trade change correlated with the tariff change; in the first two years
after both, trade changed suddenly by roughly 3 TIMES the tariff change, then STALLED for two years
before changing further. Statistically, the authors CANNOT reject the hypothesis that the two
episodes share the same trade-elasticity dynamics — suggesting a similar expectational dynamic
operated in both episodes, reinforcing confidence in the dynamic-expectations modeling approach.

## Key Findings

- Before 2018, the market did NOT anticipate the possibility of a trade war at all — policy
  uncertainty only truly emerged AFTER Trump enacted the tariffs, not before.
- The initial belief that the trade war was merely temporary (>70% probability of returning to NTR)
  collapsed over time (down to 21% by 2023) as Biden continued rather than reversed Trump's
  policy — demonstrating the cross-partisan PERSISTENCE of U.S. protectionist policy toward China.
- The nature of the uncertainty shifted from "will tariffs return to normal in the short run" to a
  more STRUCTURAL, long-run policy risk — the likelihood of reverting to the NNTR schedule (the
  worst-case scenario) fell sharply, but at the same time the intermediate trade-war tariff level
  has persisted longer than initially expected.
- A political paradox: Trump — who ACTIVELY raised tariffs — actually LOWERED the expected future
  tariff (thanks to short-run initial expectations + reduced NNTR risk); Biden — who merely
  MAINTAINED the status quo — actually RAISED the expected future tariff (by extending expectations
  of a protracted trade war).

## Conclusion

The U.S.-China trade war that began in 2018 demonstrated that China's Permanent Normal Trade
Relations status did NOT eliminate trade-policy risk, and that the nature of this risk fundamentally
changed. At the beginning of the trade war, the expected path of future tariffs actually FELL,
because trade-war tariffs were expected to be quickly reversed and the likelihood of reverting to
the Non-Normal Trade Relations schedule had diminished. As the trade war continued, expected
tariffs GREW.

## Implications for the Course/Vietnam

- **Same theoretical/global-simulation layer as
  [[l101-robinson-thierfelder-2024-us-trade-policy-cge]] but a different tool**: L101 uses a static
  computable general equilibrium (CGE) model to simulate two hypothetical ("what if") tariff
  scenarios, while L102 uses a DYNAMIC exporting model with time-varying expectations to estimate
  PRECISELY what the market has believed and currently believes about the future path of policy —
  two complementary approaches: one answers "if scenario X happens, what is the impact," the other
  answers "which scenario does the market actually believe will happen, and how strongly."
- **Central to the [[trade-war-and-protectionism]] concept**: L102 is the primary source for the
  argument that "policy uncertainty changes in NATURE over time, not just in DEGREE" in the concept
  page's debates/tensions section — the probability of the trade war ending falling from >70% (2018)
  to 21% (2023) is the core figure linking L102 to LN10's entire 3-layer analytical framework.
- **Vietnam relevance**: Vietnam is not a direct subject of the model (the paper only models the
  U.S.-China-EU), but the lesson about the NATURE of policy uncertainty is highly relevant for
  Vietnam — an economy clearly benefiting from trade diversion away from China (see
  [[l106-dang-2024-vietnam-exports-us-trade-war-did]],
  [[l107-toai-2025-vietnam-import-export-trade-war]]). If even a tariff policy aimed squarely at
  China can persist and expand across multiple U.S. presidencies regardless of party, then the U.S.
  trade-policy risk facing countries benefiting from trade diversion — including Vietnam — should
  also be viewed as a long-run STRUCTURAL risk (e.g., the anti-circumvention/origin-fraud
  investigation risk that [[l107-toai-2025-vietnam-import-export-trade-war]] warns about), not a
  temporary state that will self-reverse.

## Links

- Lecture: [[ln10-impacts-trade-war-vietnamese-economy]] · Concept:
  [[trade-war-and-protectionism]]
- Related: [[l101-robinson-thierfelder-2024-us-trade-policy-cge]] (same theoretical/global-simulation
  layer, different method — static CGE vs. dynamic expectations model),
  [[l106-dang-2024-vietnam-exports-us-trade-war-did]],
  [[l107-toai-2025-vietnam-import-export-trade-war]]
