---
type: exam
title: "K32 Mock Exam — Set 7 (OFFICIAL Shortlist, LN6–LN10 + 3 Pair-Comparison Questions)"
tags: [exam, mock-exam, k32, k32-shortlist, urban-infrastructure, circular-economy, trade-war, total-factor-productivity, poverty-inequality, climate-vulnerability, artificial-intelligence]
created: 2026-08-28
updated: 2026-08-28
status: complete
also_covers: []
---

# K32 Mock Exam — Set 7 (OFFICIAL Shortlist, LN6–LN10 + 3 Pair-Comparison Questions)

⚠️ **This is NOT a real exam** — a mock paper written by Claude after the official shortlist
arrived on 28/8/2026 ([[k32-shortlist-2026]]). Together with [[k32-mock-exam-6]], these two
sets cover all **20/20** official papers once the still-valid questions from
[[k32-mock-exam-1]]…[[k32-mock-exam-5]] are counted.

**What distinguishes this set**: the first three questions take the three LN6–LN10 shortlist
papers with no question yet (L71, L85, L107); **the last three are WITHIN-LECTURE COMPARISON
questions** — the professor's favourite format. With exactly two papers per lecture now, every
plausible comparison lies among the ten pairs listed in section 5 of [[k32-shortlist-2026]].

## Exam Rules & Grading Structure

As in section 0 of [[k32-mock-exam-6]] — **120 minutes, closed-book**, 2 compulsory + at least
2 of 4 elective questions, 12.5 points each.

## Questions

### A. Compulsory questions (each 12.5 points)

**Question 1**: Heshmati and Rashidghalam (Journal of Infrastructure Systems, 2020) measure urban
infrastructure and analyse its effects on urbanization in China. Discuss why they use principal
component analysis rather than direct regression, present their findings on which infrastructure
components matter, and explain the policy warning that follows from the time trends of the
individual sub-indices.

**Question 2**: Saidani et al. (Journal of Cleaner Production, 2019) propose a taxonomy of circular
economy indicators. Discuss their findings concerning the coverage of the three circularity loops
and the balance between intrinsic circularity and sustainability impact, and explain why they regard
the widespread use of a single aggregate number as contentious.

### B. Elective questions (choose a minimum of 2 questions, each 12.5 points)

**Question 3**: Toai (Journal of Information Systems Engineering and Management, 2025) examines the
impact of the US-China trade war on Vietnam's imports and exports. Discuss the findings concerning
Vietnam's trade gains and their composition, and explain the two structural risks the author
identifies alongside those gains.

**Question 4**: Heshmati and Rashidghalam (Journal of Productivity Analysis, 2020) find negative
technical change and TFP growth across all income groups, while Nguyen and Pham (Asian-Pacific
Economic Literature, 2018) document substantial and increasingly pro-poor poverty reduction in
Vietnam. Compare the two studies' methods and findings, and explain how poverty reduction can
accelerate in an economy where measured productivity growth is negative.

**Question 5**: Tran et al. (Environmental Challenges, 2022) and Hastuti et al. (World Development
Perspectives, 2025) both examine how agricultural households respond to climate stress, but reach
very different conclusions about the nature of that response. Compare their methods and findings,
and explain what the contrast implies for the design of climate-adaptation policy.

**Question 6**: Pham et al. (Journal of Cleaner Production, 2024) review AI development in Vietnam's
energy and economic systems, while Van Tam et al. (IJIMDI, 2024) investigate barriers to
construction digitalization in Vietnam. Compare the level of analysis and the evidence base of the
two studies, and explain what their combined reading tells us about why national digital strategies
underperform at firm level.

## Detailed Answers

### Question 1 — Urban Infrastructure and Urbanization in China (Heshmati & Rashidghalam, JIS 2020)

See in full: [[l71-heshmati-rashidghalam-2020-urban-infrastructure-china]].

⭐ **Highest revision priority**: the professor's own paper + **already asked on the real K31
exam (question 6)** + still on the K32 shortlist.

**Data**: a balanced panel of 31 Chinese provinces 2005–2014 (N=310) from the National Bureau
of Statistics. Dependent variable: the year-end urban population share. Independent variables:
a composite index of **15 sub-components** built from **74 raw indicators** (3–6 each). The 31
provinces group into six regions.

**Why PCA (part 1)**: the 74 indicators are HIGHLY intercorrelated; entering them directly
causes **severe multicollinearity** — unstable coefficients, inflated standard errors, no
interpretability. PCA separates them into components that are internally HIGHLY correlated but
MUTUALLY uncorrelated: each sub-index is a linear combination of the eigenvectors attached to
the largest eigenvalues of the covariance matrix. The 15 sub-indices are then aggregated into a
second-order composite.

**Six models**: Models 1–3 pooled OLS (1: the 15 sub-indices separately; 2: the composite plus
a time trend; 3: adding the square and interaction); Models 4–6 mirror these with province
fixed effects. Heteroscedasticity-consistent (White) standard errors.

**Model fit**: R² for Models 1–3 is **0.86 / 0.34 / 0.35**; Models 4–6 all ~**0.99**. Two
lessons: (a) AGGREGATING the 15 sub-indices into one composite LOSES much explanatory power
(0.86 → 0.34); (b) province fixed effects improve fit dramatically.

**Main results (part 2)**: in Model 1, **8 of 15** components have significant POSITIVE effects
— **economics, employment, human development, health, housing, security, utilities,
technology**. Education and environment correlate NEGATIVELY but insignificantly. Chinese
urbanization is driven far more by **economic pull factors** (jobs, income, social security)
than by indirect social-welfare factors.

**Regional disparity**: Guangdong highest, Tibet lowest. The Eastern region has the HIGHEST
urban share and the highest scores on most infrastructure indices (education excepted); the
paper's Southwest grouping is LOWEST.

**The policy warning (part 3) — the paper's sharpest point**: the consumption, finance and
human-development indices rose steadily 2005–2014; but the **employment, security and
technology indices DECLINED** — precisely the three components with the STRONGEST positive
coefficients. China is letting exactly the most effective infrastructure pillars erode.
Recommendations: improve central resource allocation between rich and poor provinces; each
province needs its OWN urbanization plan; highly urbanized provinces (Shanghai, Beijing) should
build "smart cities" and "green cities".

### Question 2 — A Taxonomy of Circular Economy Indicators (Saidani et al., JCP 2019)

See in full: [[l85-saidani-2019-taxonomy-circular-economy-indicators]].

⭐ **A special case**: asked on the **K30 exam (question 2)**, DROPPED from the K31 shortlist,
now BACK on the K32 shortlist — evidence the professor rotates papers rather than retiring
them.

**Review scope**: keyword search across academic databases AND non-academic sources (Ellen
MacArthur Foundation, European Environment Agency, European Commission), 2010–5/2018. Result:
**55 indicator sets** — **20** micro, **16** meso, **19** macro.

**The 10-category taxonomy**: (1) level; (2) loops (maintain, reuse/remanufacture, recycle —
per the EMF "butterfly diagram", technical side only); (3) performance (intrinsic vs impact);
(4) perspective (potential vs actual); (5) usages; (6) transversality; (7) dimension; (8)
units; (9) format; (10) source.

**Finding 1 — loops (part 1)**: **90%** of micro-level indicators cover the RECYCLING loop, but
only **45%** cover ALL THREE loops in one consistent set → most are recycling-biased and
neglect higher-value strategies (maintain, reuse, remanufacture). Macro-level indicators —
largely developed in China — are recycling-focused to an even GREATER degree.

**Finding 2 — intrinsic vs impact (part 2)**: **80%** of micro-level indicators measure
INTRINSIC circularity; only **40%** measure sustainability IMPACT; just **20%** measure BOTH.
The serious implication: a product can score highly on intrinsic circularity while still
damaging the environment. The SOCIAL dimension is almost entirely neglected — matching Singh et
al. (2012).

**Finding 3 — the single number (part 3)**: **60%** of micro-level indicators collapse total
circularity performance into ONE number. Contentious because **no standardized method exists
for aggregating different loops onto a common scale** — adding a tonne of recycled material to
a repaired, life-extended product has no theoretical basis. A single number is convenient for
communication but hides the trade-offs.

**Two secondary findings**: only **3 of 20** micro-level indicators are sector-specific — the
rest claim generality despite testing on a single product or sector. On format, **45%** of
micro-level indicators come with a computational tool, while nearly all macro-level ones remain
textual/manual formulas.

### Question 3 — The US-China Trade War and Vietnam's Imports and Exports (Toai, JISEM 2025)

See in full: [[l107-toai-2025-vietnam-import-export-trade-war]].

**Method — state its limits to earn marks**: qualitative-descriptive with NO econometric model.
Three components: descriptive statistics; comparative trade-flow analysis including an **Import
Source Concentration Index**; and policy content analysis (investment incentives, export
promotion, CPTPP/RCEP utilization).

**Core figures**: exports to the US rose **USD 83.0bn → 119.5bn** (2020→2024), over **40%** in
five years, CAGR ~9.4%; by 2024 the US took **29.5%** of total exports, becoming the LARGEST
market. Imports from China rose **USD 83.6bn → 118.7bn** (**42%**, CAGR ~9.1%) — tracking
export growth almost exactly.

**2024 import mix**: semiconductors and electronic components **33%**, textiles **22%**,
industrial machinery **18%**, chemical inputs **15%**, other inputs **12%** — **all
intermediate goods feeding export assembly, not consumer goods**.

**Structural risk 1 — vertical specialization**: export growth is TIGHTLY BOUND to Chinese
input imports, exactly Hummels et al.'s (2001) pattern. Without domestic supporting industries
or supply diversification, export performance stays exposed to a SINGLE supplier. The author
warns much of the gain may reflect **opportunistic production relocation** rather than genuine
domestic competitiveness.

**Structural risk 2 — a ballooning surplus and regulatory scrutiny**: the surplus with the US
rose **USD 63.2bn → 123.4bn** (nearly doubling); exports to the US are almost **5×** imports
from it. In late 2024 the US Treasury renewed concerns over trade practices and exchange-rate
policy. The overlap between Chinese imports and US exports has drawn US Customs and Border
Protection suspicion of **transshipment** — legal and strategic risk (potential loss of GSP
preferences). This matches Krugman's (1986) strategic trade theory.

**Four recommendations**: diversify input sourcing; strengthen domestic supply chains and
supporting industries; move up the value-added ladder (from assembly to design/branding);
rebalance trade diplomacy. A quotable closing line: Vietnam's long-run success lies not in
exploiting an external shock but in its ability to **convert that shock into genuine structural
improvement**.

⚠️ **Two internal inconsistencies — flagging them earns credit**: (a) the methodology states a
2015–2023 window while all results figures cover 2020–2024; (b) the conclusion says the surplus
"more than doubled" whereas the figures (63.2 → 123.4) show it *nearly* doubled.

### Question 4 — Comparison: Negative TFP Growth ↔ Vietnamese Poverty Reduction (L61 ↔ L64)

See in full: [[l61-heshmati-rashidghalam-2020-tfp-technology-shifters]] and
[[l64-nguyen-pham-2018-growth-inequality-poverty-vietnam]].

⭐ **L64 is the single most revision-worthy paper of the 20**: asked on BOTH the K30 exam
(question 6) AND the K31 exam (question 2) — two consecutive cohorts — and still on the K32
shortlist. L61 is also the professor's own paper.

**L61 — method and results**: a translog production function on a panel of 190 countries
1996–2013, using OBSERVABLE technology shifters rather than a bare time trend. The
controversial result: technical change and TFP growth are **NEGATIVE across ALL income
groups**. The human-capital index has the highest elasticity at **0.234**; the technology index
is NEGATIVE at **−0.043**.

**L64 — method and results**: Foster-Greer-Thorbecke + Datt-Ravallion decomposition (separating
the growth from the inequality component) + the Kakwani-Pernia pro-poor index, on Vietnamese
living standards surveys 1993–2008. Over 1993–98 inequality ROSE and the pro-poor index was
only **0.90**; over 2004–08 inequality FELL and the index jumped to **1.80** — "highly
pro-poor". Most importantly: Vietnamese poverty is **NOW more sensitive to inequality than to
growth**.

**Three ways to reconcile the paradox — the core of the answer**:

1. *Different levels and different measurement*. L61 measures TFP — the residual after
   capital's and labour's contributions — on a cross-country sample; L64 measures household
   expenditure distribution within one country. Poor households' income growth can come from
   FACTOR ACCUMULATION (more labour moving into higher-productivity sectors, more capital)
   without any TFP gain.
2. *Structural transformation, not technical progress*. Vietnam's poverty reduction came mainly
   from labour moving out of agriculture into industry and services — each worker's ABSOLUTE
   productivity level rises while residual-measured TFP growth can still be negative. This is
   exactly the channel [[l14-sasges-2025-vietnam-policies]] describes for Vietnam.
3. *Distribution matters more than the aggregate*. L64's key finding means that even with slow
   aggregate growth (consistent with L61's negative TFP), better distribution still cuts
   poverty sharply. The policy implication: once productivity-driven growth margins are
   exhausted, the remaining levers are distribution and human capital — matching L61's finding
   that human capital has the HIGHEST elasticity.

⚠️ **A critical point worth making**: L61's negative TFP growth in EVERY income group is
unusual and should be treated cautiously — it may reflect measurement issues (choice of
technology shifters, the translog form, cross-country data quality) rather than genuine
technological regress.

### Question 5 — Comparison: Adapting in Place ↔ Leaving Farming (L45 ↔ L46)

See in full: [[l45-tran-2022-rice-farmers-vulnerability-nghean]] and
[[l46-hastuti-2025-climate-labor-mobility-indonesia]].

**L45 — adapting IN PLACE**: the Livelihood Vulnerability Index plus its IPCC-framework
variant, a correlation matrix and beta regression, on rice-farming households in Nghe An.
**76%** are "slightly vulnerable". The COUNTERINTUITIVE finding: **formal credit and irrigation
INCREASE vulnerability** — plausibly because borrowing households intensify and are more
exposed when harvests fail, and irrigation creates a false sense of security inviting riskier
investment.

**L46 — LEAVING farming**: latitude and altitude instrument rainfall and temperature
variability on Indonesian household panel data (4,909 households). Rainfall +1% → **+0.47 pp**;
temperature +1% → **+1.38 pp**. Mediation: RAINFALL works through farm production cost while
TEMPERATURE does not.

**Three axes of difference**: (1) *The outcome measured* — L45 measures the DEGREE of
vulnerability among households that stay in farming; L46 measures the PROBABILITY of leaving.
Two different outcomes of the same pressure, not contradictory. (2) *Causal identification
strength* — L45 is descriptive and correlational; L46 has strong instruments (F of 57.6 and
60.8), supports causal claims and opens the mechanism black box. (3) *Context* — one Vietnamese
province versus a national Indonesian sample.

**An important convergence**: both show that **resources determine the form of the response**.
L46: small holders (<0.5 ha) are pushed to leave while larger holders (≥1 ha) can adapt in
place. L45: households with credit and irrigation are MORE vulnerable. Read together: access to
resources does not automatically reduce vulnerability — what matters is whether it is used to
REDUCE exposure or to INTENSIFY production.

**Policy implications (part 2)**: (a) adaptation policy CANNOT aim solely at keeping households
in farming — for small holders, labor mobility may be a rational response deserving support
(vocational training, transitional social protection) rather than obstruction; (b) extending
credit and building irrigation is NOT enough and can backfire without risk management —
agricultural insurance, crop diversification and early warning are needed; (c) because the
channels differ between rainfall and temperature, the instruments must differ too: lowering
production costs addresses RAINFALL risk, while TEMPERATURE risk requires heat-tolerant
varieties and protection of field labour conditions.

💡 **Comparison-answer technique**: structure it clearly — (i) 3–4 sentences summarizing each
paper, (ii) 2–3 axes of difference, (iii) at least one point of convergence, (iv) the policy
implication. Listing the two papers in parallel without synthesizing is the most common way to
lose marks.

### Question 6 — Comparison: National-Level AI ↔ Sector-Level Digitalization Barriers (L93 ↔ L95)

See in full: [[l93-pham-2024-ai-development-vietnam-review]] and
[[l95-tam-2024-construction-digitalization-barriers-vietnam]].

⭐ **L95 is one of the four trunk papers** — asked on K31 (question 3) and still on the K32
shortlist.

**L93 — NATIONAL level**: a critical review synthesizing the OECD.AI database and policy
documents, with no dataset of its own. Vietnam invested only **USD 31m** in AI in 2021 — far
below Singapore (**USD 2,293m**), Indonesia (**344m**), Thailand (**162m**) and Malaysia
(**114m**), on par only with the Philippines (**34m**). The 2021 national strategy (2030
vision) targets five reputable AI brands and a top-5 ASEAN position by 2025, yet by end-2023
**NOT ONE brand had been identified**. Alongside runs a "quantity-quality paradox": low
publication volume but a top-5%-journal share ranking second in the region.

**L95 — SECTOR/FIRM level**: a survey of **248 experts** in Vietnamese construction, with
exploratory factor analysis and ANOVA across **31 barriers**. Key finding: the number-one
barrier is **social and habitual resistance, NOT technology** — the problem lies with people
and organizations, not missing tools. The three stakeholder groups rank barriers markedly
differently (ANOVA significant), so no single shared "barrier list" exists.

**Comparing level and evidence base (part 1)**: L93 is a secondary review at national level —
strong on the regional comparative picture and policy assessment, weak in having no primary
data and so saying nothing about firm behaviour. L95 is a primary survey at sector level —
strong on identifying on-the-ground barriers and inter-stakeholder differences, weak in
covering one sector and relying on subjective perceptions rather than realized adoption
outcomes. They are COMPLEMENTARY, not competing.

**Reading them together — why national strategy underperforms at firm level (part 2)**: L93
shows a strategy with high targets, low resourcing and missed milestones. L95 explains WHY:
even where technology and policy exist, the decisive barriers are social resistance, entrenched
habits and lack of stakeholder alignment. The gap sits in organisational-level
**IMPLEMENTATION**, not policy design or technology supply. Spending USD 31m will not produce
five AI brands if firms do not change how they work — and equally, raising the budget while
ignoring organisational change management will not suffice.

**A worthwhile wider connection**: the same "institutions/behaviour matter more than
technology" logic appears in [[l55-stein-2026-digital-entrepreneurship-fintech-denmark]] (the
Danish FinTech ecosystem succeeded through collaboration and neutral leadership, not superior
technology) and in [[l25-bizikova-2025-water-energy-food-nexus]] (nexus research fails at the
governance stage, not the modelling stage). Drawing this cross-lecture link distinguishes an
answer from one confined to the two papers named.

## Links

- [[k32-shortlist-2026]] — the official 20-paper shortlist + the 10 within-lecture comparison
  pairs.
- [[k32-mock-exam-6]] — the sibling set, covering LN1–LN5.
- [[k30-final-exam]], [[k31-final-exam]] — the 2 REAL exams; L71 was asked as K31·Q6, L85 as
  K30·Q2, L64 as both K30·Q6 and K31·Q2, and L95 as K31·Q3.
- [[exam-prep]] — the 62-paper lookup table + the debates section.
- [[almas-heshmati]] — the professor's profile (L61, L71, L86 are his own papers on the
  shortlist).
