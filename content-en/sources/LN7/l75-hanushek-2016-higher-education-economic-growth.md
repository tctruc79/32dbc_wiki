---
type: source
title: "L75 — Hanushek (2016) — Will More Higher Education Improve Economic Growth?"
tags: [education, human-capital, economic-growth, knowledge-capital, cognitive-skills]
created: 2026-08-01
updated: 2026-08-01
status: complete
source_file: "raw/3. LECTURE NOTES/LN7 Investment in development infrastructure health and education/L75 ORE-2016 Hanushek  Will more higher education improve economic growth.pdf"
---

# L75 — Hanushek, E.A. (2016), Oxford Review of Economic Policy 32(4): 538–552

**Author**: Eric A. Hanushek (Stanford University — Hoover Institution). The paper grows out of
long-standing collaboration with Ludger Woessmann. DOI: 10.1093/oxrep/grw025. JEL: O4, I2.

## Abstract

> Calls for expanded university education are frequently based on arguments that more graduates
> will lead to faster growth. Empirical analysis does not, however, support this general
> proposition. Differences in cognitive skills — the knowledge capital of countries — can
> explain most of the differences in growth rates across countries, but just adding more years of
> schooling without increasing cognitive skills historically has had little systematic influence
> on growth.

**Summary (paraphrase)**: The paper directly rebuts the popular policy argument that "expanding
higher education → faster growth." It reuses/extends cross-country growth data and models from
the Hanushek & Woessmann research program to demonstrate that it is NOT years of schooling
(including tertiary) but **knowledge capital** (cognitive skills measured by international
math/science tests) that explains cross-country growth differentials.

## Research Questions

Does expanding higher education (years of tertiary schooling/number of university graduates)
automatically lead to faster economic growth — and if not, what measure of human capital
actually explains cross-country growth differentials?

## Research Framework

Distinguishes 2 growth models: **endogenous growth** (human capital affects the long-run growth
RATE — Lucas 1988, Romer 1990) vs. **neoclassical** (human capital only raises the income LEVEL,
not the steady-state growth rate — Mankiw, Romer & Weil 1992). The key methodological point:
measuring human capital by **school attainment (S)** — years of schooling — has 2 serious
problems: (i) it implicitly assumes a year of school in Japan = a year of school in South Africa
in terms of skills (unrealistic); (ii) it ignores family/health/school quality as other sources of
human capital besides years of schooling. The proposed solution: use **"knowledge capital"** —
standardized international math/science test scores (Hanushek & Kimko 2000; Hanushek & Woessmann
2007, 2011a, 2012, 2015) — as a direct proxy for cognitive skills, instead of years of schooling.

## Data

Main sample: **50 countries** with sufficient data on growth, school attainment, and
international test scores (math/science), over the long-run growth period **1960–2000**.
Dependent variable: average annual real GDP per capita growth rate. Main independent variables:
cognitive skills (A, standardized by the standard deviation of international test scores), 1960
school attainment (S), 1960 GDP per capita (controlling for convergence). Extensions: split by
OECD/non-OECD, by the share of students reaching basic literacy vs. top-performing (±1 standard
deviation on the PISA scale), by years of non-tertiary vs. tertiary schooling separately.

## Methodology

A general growth model: growth = α₁·human_capital + α₂·other_factors + ε. OLS cross-country
estimation for 3 competing specifications (Table 1): (1) school attainment only; (2) cognitive
skills only; (3) both simultaneously — to test which variable "survives" when controlling for the
other. Table 2 extensions: adds an OECD×cognitive-skills interaction, splits basic
literacy/top-performing, adds years of non-tertiary/tertiary schooling separately. **The
causation issue (Section V)** is addressed via 4 supplementary strategies (not one formal IV but
a series of robustness checks on the direction of causality): (a) timing separation — pre-1980
test scores predict 1980–2000 growth (ruling out simple reverse causation); (b) US IMMIGRANT
earnings by HOME-COUNTRY test scores — significant only for those educated in their home country,
not those educated in the US (ruling out cultural confounding); (c) changes in test scores over
time correlate with changes in growth over time (holding the country fixed); (d) using
school-system institutional features (central exams, decentralized decision-making, share of
private schools) as an instrumental variable for test scores.

## Regression/Estimation Results

- **Table 1 — baseline models (50 countries, 1960–2000)**: (1) school attainment only:
  coefficient 0.369 (t=3.23), explaining **25.2%** of growth variation (adj. R²=0.252). (2)
  cognitive skills only: coefficient 2.015 (t=10.68), explaining **73.3%** of variation (adj.
  R²=0.733) — about 3× model (1). (3) both simultaneously: cognitive skills REMAINS strongly
  significant (1.980, t=9.12), but school attainment **LOSES ALL SIGNIFICANCE** (coefficient
  0.026, t=0.34, near zero) — once cognitive skills are controlled for, years of schooling
  explains nothing further about growth.
- **Effect size**: a 1-standard-deviation difference in cognitive skills equates to roughly
  **2 percentage points/year** of average GDP-per-capita growth difference — nearly matching the
  actual observed growth gap between East Asia (4.5%/year) and Latin America (<2%/year)
  1960–2000.
- **Table 2 — higher-education extension (column 4)**: once cognitive skills are controlled for,
  **neither years of non-tertiary schooling (0.076, t=0.94) NOR years of tertiary schooling
  (0.198, t=0.16) is statistically significant** — the tertiary level has no independent effect
  larger than any other level. Exception: for the 24-OECD-country subgroup alone, tertiary
  schooling is significant at the 10% level — but this effect is ENTIRELY driven by the US;
  dropping the US from the sample, the effect vanishes.
- **Basic literacy vs. top performers (Table 2, columns 2–3)**: both have a significant separate
  POSITIVE effect on long-run growth (basic literacy: 2.644, t=3.51; top-performing: 12.602,
  t=4.35) — and surprisingly: **top performers matter MORE in DEVELOPING countries than in the
  OECD** (the OECD×top-performing interaction = −13.422, t=2.08, significant) — suggesting
  developing countries need high skills to absorb advanced technology, not just widespread basic
  skills.
- **Tertiary expansion trend vs. quality (Figures 2–4)**: a strong positive correlation between
  2000 tertiary % and 2000 PISA scores (Figure 2) — but NO correlation between the RATE OF
  TERTIARY EXPANSION 2000–2014 and 2000 PISA scores (Figure 3, no relationship); the correlation
  between the tertiary expansion rate and PISA IMPROVEMENT 2000–2012 is only r=0.3 and NOT
  statistically significant (Figure 4) — countries rapidly expanding higher education are NOT
  simultaneously improving cognitive skills.

## Robustness Checks

4 causality-testing strategies (Section V, see Methodology) all give consistent results
supporting a causal interpretation: (a) pre-1980 test scores predict 1980–2000 growth EVEN MORE
STRONGLY than earlier periods — ruling out the "just correlation because rich countries already
invest more in schools" hypothesis; (b) US immigrant earnings correlate with home-country test
scores only for those EDUCATED AT HOME, not those educated in the US; (c) changes in test scores
over time systematically correlate with changes in growth over time; (d) an IV based on
school-system institutional features confirms the causal interpretation. Robustness conclusion:
while no single test is "fully conclusive" on its own, the combination of all 4 builds fairly
persuasive evidence for a causal cognitive-skills → growth relationship.

## Key Findings

**"More schooling" ≠ "more growth"; "more knowledge capital" = "more growth"**. Years of
schooling is only an INDIRECT and imperfect measure of true human capital (cognitive skills).
Expanding higher education only generates growth if ACCOMPANIED by skill improvement —
otherwise, it is a "misplaced investment strategy." The sole exception (the US) is not due to
years of tertiary schooling but rather: strong economic institutions (open labor/capital markets,
limited regulation, secure property rights), the world's best universities, and the ability to
attract highly skilled immigrant talent (55% of US STEM PhD holders are foreign-born).

## Conclusion

Higher education yields substantial individual earnings benefits, and for that reason (along with
expected productivity/growth effects) governments have pushed for expansion. But this movement
must confront the actual growth record: ONCE knowledge capital is controlled for, school
attainment (including years of tertiary schooling) is NOT related to economic growth. Better
engineers/workforce come not from "more years of university" but from "universities admitting
students with stronger input skills" — the skills of graduates are ENDOGENOUS (dependent on
input skills), not exogenous/fixed as policy discourse commonly assumes.

## Relevance to the Course/Vietnam

- **The central theoretical pillar of [[human-capital-returns-to-education]]** — providing an
  explanatory framework for the two Vietnam-based empirical findings in the same LN7:
  [[l74-dao-2020-education-economic-growth-vietnam]] (higher education has NO significant effect
  on VN GDP growth) and [[l73-mcguinness-2021-returns-to-education-vietnam]] (the VN university
  premium fell sharply 2010–2016) — both are consistent with Hanushek's argument: expanding
  higher education does not automatically generate growth/returns without an accompanying
  skills/knowledge-capital foundation and matching labor demand.
- **Direct policy implication for a Vietnam essay**: if VN continues expanding the number of
  universities/colleges (as noted in
  [[l73-mcguinness-2021-returns-to-education-vietnam]]) without simultaneously raising input/
  output quality (PISA, teaching quality), by Hanushek's logic this is a "misplaced investment
  strategy" — a strong counter-argument to purely quantity-based education policy proposals.
- Shares the "human capital → growth" theme with [[l76-bloom-2018-health-economic-growth]] (LN7)
  — both emphasize QUALITY (cognitive skills vs. specific population-group health) mattering
  more than raw investment scale/quantity.

## Links

- Lecture: [[ln7-investment-infrastructure-health-education]] · Concept:
  [[human-capital-returns-to-education]]
- Related: [[l74-dao-2020-education-economic-growth-vietnam]],
  [[l73-mcguinness-2021-returns-to-education-vietnam]] (both match Hanushek's argument in the VN
  context), [[l76-bloom-2018-health-economic-growth]] (same human-capital-quality theme)
