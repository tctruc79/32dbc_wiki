---
type: source
title: "L77 — Drama, Soro & Senou (2025) — Sectoral Allocation of Public Investment: Optimizing Efficiency in Education and Health Systems in Developing Economies"
tags: [public-investment, education, health, efficiency, dea, sfa, governance, developing-economies]
created: 2026-08-01
updated: 2026-08-01
status: complete
source_file: "raw/3. LECTURE NOTES/LN7 Investment in development infrastructure health and education/L77 SSHO SHO-2025 Drama et al Sectoral allocation of public investment-optimizing efficiency in education and health systems in developing economies.pdf"
---

# L77 — Drama, B.G.H., Soro, K. & Senou, M.M. (2025), Social Sciences & Humanities Open 12: 102300

**Authors**: Bédi Guy Hervé Drama (Dept. of Economics, Université Peleforo Gon Coulibaly,
Korhogo, Côte d'Ivoire), Kolotioloman Soro (Peleforo Gon Coulibaly University, Korhogo), Melain
Modeste Senou (United Nations Development Programme, Cotonou, Benin). JEL: H51, H52, O23, C67.
Received 20/5/2025, accepted 29/11/2025, online 2/12/2025. Open access CC BY-NC. The paper
self-declares NO use of generative AI tools in research/writing (a "Declaration of AI usage"
section).

## Abstract

> This study evaluates public investment efficiency across 75 developing countries from 2002 to
> 2022 using Data Envelopment Analysis (DEA) and Stochastic Frontier Analysis (SFA). Results show
> an average efficiency of 83.58%, with health (85.37%) and education (84.79%) outperforming
> other sectors (71.94%). Corruption control and rule of law emerge as the most critical
> determinants of efficiency, while trade openness, geographic advantages, and labor force
> composition also significantly influence outcomes. The findings reveal substantial room for
> improvement — nearly 16% efficiency gains are possible through better governance and strategic
> reallocation toward human capital sectors. These results provide actionable insights for
> policymakers seeking to optimize resource allocation and enhance public investment returns in
> resource-constrained environments.

**Summary (paraphrase)**: The paper closing LN7 — directly synthesizing/integrating both the
"education" and "health" themes by measuring public-investment allocative efficiency ACROSS
SECTORS (education vs. health vs. other) on a 75-developing-country, 21-year panel, using both
frontier-efficiency methods simultaneously (non-parametric DEA + parametric SFA) to ensure
results are not method-dependent.

## Research Questions

3 linked research questions (section 1): (i) How do education and health public-investment
efficiency levels compare across developing countries? (ii) What contextual/institutional
factors influence efficiency in each sector, and do these effects differ systematically between
sectors? (iii) What investment allocation strategies optimize outcomes under varying
fiscal/institutional constraints?

## Research Framework

Theoretical foundation: human capital theory + endogenous growth (Romer 1990; Barro 1990) —
public education/health investment drives productivity via knowledge spillovers/human-capital
accumulation; Aschauer (1989) — productive public spending raises the marginal productivity of
private capital. But public choice theory (Buchanan & Tullock 1962) warns electoral incentives
skew allocation away from the economic optimum (favoring "visible" infrastructure over education/
health). Optimal allocation theory is complicated by cross-sectoral externalities/synergies
(Devarajan et al. 1996; Bloom et al. 2004 — education improves health outcomes). 4 literature
gaps the paper fills: (1) SINGLE-sector analyses, lacking a cross-sectoral comparative framework;
(2) inadequate integration of institutional/governance factors as efficiency determinants; (3)
methodological limitations (only DEA or only SFA, no cross-validation); (4) a data bias toward
developed-country contexts.

## Data

A balanced panel of **75 developing countries, 2002–2022** (21 years, 1,800 observations),
sourced from World Bank World Development Indicators (WDI) + World Governance Indicators (WGI).
Outcome variables: total public investment spending (DEPIN), public health spending (DEPIN_SA,
avg. 3.0% of GDP), public education spending (DEPIN_ED, avg. 3.8% of GDP), other public spending
(OTHER_DEPIN, avg. 5.4% of GDP, highest variability). Control variables: GDP per capita (avg.
USD 2,627, range 287.5–10,052), Gini (avg. 43.22), corruption control (avg. −0.467, range −1.45
to 1.47), rule of law (avg. −0.526), FDI/GDP ratio, trade openness (avg. 0.229), inflation (avg.
7.21%), employed active population (avg. 63.5%), maritime access (78.66% of observations are
coastal countries). The negative mean values for corruption control/rule of law confirm the
sample sits in a "weak institutions" context.

## Methodology

**A dual method** to ensure results are not technique-dependent. (1) **DEA (Data Envelopment
Analysis)**, input-oriented, Variable Returns to Scale (VRS), Debreu-Farrell approach: min δᵢₜ
subject to δᵢxᵢ ≥ Xλ; yᵢ ≤ Yλ; 1'λ=1; λ≥0 — δ∈[0,1] is the efficiency score (1=fully efficient),
requiring no assumed functional form for production, suited to hard-to-quantify outputs (life
expectancy, education attainment) but sensitive to outliers/measurement noise since it treats ALL
deviation from the frontier as inefficiency. (2) **SFA (Stochastic Frontier Analysis)**:
yᵢₜ = f(xᵢₜ;β)·exp(vᵢₜ − uᵢₜ), separating random noise (v~N(0,σᵥ²)) from inefficiency (u≥0) —
compensating for DEA's weakness but requiring a functional-form assumption. (3) **A two-stage
Tobit regression**: after obtaining DEA scores, regressing the inverse efficiency score
θᵢₜ=1/δᵢₜ on a matrix of institutional/economic variables Z (censored at 1, since the DEA score
is bounded to [0,1]) to identify determinants of inefficiency — corruption control, rule of law,
FDI, non-landlocked status, inflation, trade openness, active population.

## Regression/Estimation Results

- **DEA efficiency scores by sector (Table 2)**: TOTAL = **83.58%**; **health = 85.37%**
  (highest); **education = 84.79%**; **other sectors = 71.94%** (lowest, 13–14 percentage points
  below health/education). This COMPLETELY REVERSES the OECD pattern (Afonso & Aubyn 2006:
  education 85% > health 72% in developed countries) — in developing countries, health is MORE
  efficient than education, the opposite of rich countries.
- **Two-stage Tobit (Table 3) — efficiency determinants**: **corruption control** is the most
  consistent and strongest variable across ALL categories — coefficients 0.032 (total, p<0.01)
  to 0.085 (other sectors, p<0.01); strongest in "other sectors"/infrastructure (0.085) > health
  (0.067) > education (0.039) — infrastructure is more vulnerable to corruption than the two
  social sectors. **Rule of law** is positive and significant but SMALLER in magnitude than
  corruption control (0.005–0.014) — corruption specifically is a tighter constraint than broad
  legal institutional quality. **FDI** is significantly positive for health/education/other
  sectors (0.019–0.025) but NOT significant for total efficiency. **Trade openness** is
  significantly positive for every sector, STRONGEST in education (0.086). **Active population**
  has a VERY LARGE positive coefficient across all sectors (0.343–0.840, strongest in other
  sectors).
- **SFA results (Table 4) — robustness check**: corruption control (0.142–0.343) and rule of law
  (0.142–0.421) REMAIN positive and significant across all frontier models — SFA coefficients
  are LARGER than Tobit, suggesting DEA may UNDERESTIMATE institutional effects by absorbing
  part of it into "random noise" rather than systematic inefficiency. Public investment (the
  main spending variable) has a positive but modest coefficient (0.114–0.161) — suggesting
  returns from IMPROVED GOVERNANCE/TARGETING outweigh returns from simply raising raw spending.
  FDI in SFA is NOT significant or slightly negative — contrasting with DEA, indicating FDI's
  effect is complex/not robust across the two methods.

## Robustness Checks

The paper's MAIN robustness check is the parallel use of 2 independent methods (non-parametric
DEA + parametric SFA) — a paper-wide robustness design rather than an appendix check. Result: the
direction (coefficient sign) of corruption control and rule of law is consistent between
DEA-Tobit and SFA across ALL models — reinforcing confidence in the main finding about the role
of institutions. The point of INCONSISTENCY (openly stated by the authors, not hidden): FDI flips
sign/loses significance between the two methods — the authors interpret this as evidence that
FDI's effect depends on accompanying institutional conditions, not an automatic effect.

## Key Findings

**In developing countries, health and education are MORE efficient than infrastructure/other
sectors** (the reverse of the rich-country pattern) — reflecting faster-diminishing marginal
returns in complex physical infrastructure (requiring multi-agency coordination, long
implementation timelines, more vulnerable to corruption "leakage") compared to basic health/
education interventions from a low starting base. **Corruption control is the SINGLE MOST
important lever** for raising public investment efficiency — more important than raising
spending itself. There remains **~16% efficiency-improvement headroom** (28% for "other sectors"
alone) through better governance + strategic reallocation toward human-capital sectors — meaning
"development output" (life expectancy, education) can rise substantially WITHOUT more budget,
just better governance.

## Conclusion

Public investment achieves an average 83.58% efficiency across 75 developing countries, with
health/education outperforming other sectors. Institutional quality (corruption control + rule
of law) is the foundational determinant of efficiency. The 16% improvement headroom represents a
practical pathway to closing the USD 2.5 trillion/year SDG financing gap — through BETTER
GOVERNANCE rather than simply spending more. Recommendations: (1) prioritize health investment
given superior efficiency + high sensitivity to institutional improvement; (2) education benefits
more from trade integration; (3) a SEQUENTIAL policy approach — strengthen institutions BEFORE
increasing infrastructure investment, given higher institutional sensitivity in the non-social
sector.

## Relevance to the Course/Vietnam

- **The synthesis/closing paper of LN7** — integrating all 3 lecture themes (infrastructure/
  health/education) into ONE unified analytical framework, central to LN7's new
  [[public-investment-allocation-efficiency]] concept.
- **Directly relates to [[institutions]] (LN2)**: corruption control is the STRONGEST efficiency
  determinant — the same argument as [[l22-mauro-1995-corruption-growth]] (corruption reduces
  investment/growth) and [[l26-huynh-tran-2025-fdi-informal-economy]] (PAPI governance quality
  reduces VN's informal economy) — 3 papers from 3 different lectures (LN2, LN2, LN7) all
  converge on the conclusion that institutional quality is a foundational variable running
  through the entire course, not tied to any single topic.
- **The finding that health/education outperform infrastructure in developing countries**
  directly reinforces the message of
  [[l75-hanushek-2016-higher-education-economic-growth]] and
  [[l76-bloom-2018-health-economic-growth]]: well-targeted/well-governed investment matters more
  than scale — Drama et al. supply cross-country QUANTITATIVE evidence for this qualitative
  argument.
- Vietnam relevance: VN fits the sample's typical "developing economy" profile (GDP/capita within
  sample range, institutions improving) — the "strengthen institutions before increasing
  infrastructure investment" recommendation can be directly cross-referenced with the debt/
  short-infrastructure-lifespan warning in
  [[l72-kadyraliev-2022-transport-infrastructure-investment]] and the PAPI/governance finding in
  [[l26-huynh-tran-2025-fdi-informal-economy]] — 3 papers all suggesting VN should prioritize
  public governance before expanding infrastructure investment scale.

## Links

- Lecture: [[ln7-investment-infrastructure-health-education]] · Concept:
  [[public-investment-allocation-efficiency]]
- Related: [[institutions]] (LN2), [[l22-mauro-1995-corruption-growth]] (LN2),
  [[l26-huynh-tran-2025-fdi-informal-economy]] (LN2),
  [[l75-hanushek-2016-higher-education-economic-growth]],
  [[l76-bloom-2018-health-economic-growth]],
  [[l72-kadyraliev-2022-transport-infrastructure-investment]]
