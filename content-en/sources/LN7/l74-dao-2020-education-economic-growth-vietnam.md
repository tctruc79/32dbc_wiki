---
type: source
title: "L74 — Dao & Trinh (2020) — Education and Economic Growth in Vietnam"
tags: [education, economic-growth, vietnam, tfp, gmm, dea]
created: 2026-08-01
updated: 2026-08-01
status: complete
source_file: "raw/3. LECTURE NOTES/LN7 Investment in development infrastructure health and education/L74 JEP-2020 Dao Education and economic growth in Vietnam.pdf"
---

# L74 — Dao, T.T.B. & Trinh, N.H. (2020), Journal of Education and Practice 11(6): 10–22

**Authors**: Thi Thanh Binh Dao, Ngoc Hieu Trinh (Hanoi University, Faculty of Management and
Tourism). ISSN 2222-1735 (print)/2222-288X (online). DOI: 10.7176/JEP/11-6-02. Published
29/2/2020. Note: the lecture note's shorthand author name is "Dao, B." — the full, correct name
per the paper's title page is **Dao Thi Thanh Binh** (co-author Trinh Ngoc Hieu, not listed in the
lecture note).

## Abstract

> The relationship between education and economic growth has always been considered a
> fundamental concern of many economists as well as governments. This research provides
> empirical evidence of the education true effects are not well understood, especially in
> Vietnam. This research provides empirical evidence of the influences of education in Vietnam's
> economy, more specifically on Vietnam's productivity, from the period 2000 to 2015. The paper
> find that the final findings are supportive to the hypothesis made: education is critical
> factor of economic enhancement. More specifically, primary and secondary schooling levels
> better the productivity of the economy estimated by the Total Factor Productivity and the GDP
> growth.

**Summary (paraphrase)**: Empirically tests the effect of education (3 levels: primary,
secondary, higher) on Vietnam's economic growth 2000–2015, measured via 2 dependent variables:
Total Factor Productivity (TFP, estimated via DEA/Malmquist) and GDP growth rate — conclusion:
primary + secondary education have a significant positive effect, HIGHER EDUCATION has NO
significant effect on growth.

## Research Questions

Does education deliver a positive impact on Vietnam's economic growth, and specifically which
level (primary/secondary/higher) contributes most?

## Research Framework

2 competing growth models: Neoclassical (Solow-Swan, diminishing returns, convergence, exogenous
technical progress) vs. Endogenous Growth Theory (endogenous technical progress, dependent on
R&D/human capital). The literature review cites Barro (2002): an additional year of schooling
raises national growth by 0.44%/year (~100-country data, 1965–1995, secondary/higher education
significant, primary and female participation not significant); Mingat & Tan (1996): low-income
countries benefit most from primary education, middle-income from secondary, high-income from
higher education (113 countries); Hua (2005) — the paper's main reference model, estimating
TFP/TE/TP by 3 education levels for 29 Chinese provinces 1993–2001, finding ONLY higher education
statistically significant (China). The paper hypothesizes Vietnam will differ from China: as a
developing country, primary/secondary education will have a STRONGER effect than higher
education.

## Hypothesis

Main hypothesis (section 3.1): Vietnam's economic growth will be DIRECTLY linked to education;
specifically, for a developing country like Vietnam, primary and secondary education will leave a
bigger mark than higher education (opposite to Hua's 2005 result for China).

## Data

Vietnam data 2000–2015 (16 years, including 1999 to compute TFP). Sources: Ministry of Education
& Training (enrollment ratios), GSO + World Bank (population, GDP, exports, FDI, labor, exchange
rate). 7 variables: TFP (dependent variable, Model 1)/GDP growth (dependent variable, Model 2);
primary (EDUP), secondary (EDUS), higher (EDUU) enrollment ratios; export/GDP ratio (EX); FDI/GFCF
ratio (FDI); capital-labor ratio (KL); VND/USD exchange rate (ER). Primary/secondary enrollment
ratios FELL continuously 2000–2015 (from ~12.5%/10.5% to 8%/8% — as a share of population, not an
age-specific net enrollment rate), the higher-education ratio rose slightly to 2.3%. GDP growth
ranged 5.2–7.55%/year over the period.

## Methodology

**Model 1 (TFP)**: TFP = c₁EDUP + c₂EDUS + c₃EDUU + c₄EX + c₅FDI + c₆KL + c₇ER + e. TFP is
estimated using **DEA (Data Envelopment Analysis) + the Malmquist index** (DEAP 2.1 software,
Coelli 1996), inputs: social capital (substituting for capital stock due to missing depreciation
data) + labor force; outputs: GDP + export ratio. **Model 2 (GDP growth)**: GDPG = c₁EDUP +
c₂EDUS + c₃EDUU + c₄EX + c₅FDI + c₆KL₋₁ + c₇ER₋₁ + e (labor and exchange rate lagged 1 year). Both
models are estimated using **Generalized Method of Moments (GMM)**, using Eviews 9, with
overidentification testing.

## Regression/Estimation Results

- **Model 1 (TFP, equation 3) — NOT reliable, by the author's own admission**: most coefficients
  are NEGATIVE and unusually large (EDUP=−1088.7, EDUS=−855.5, EDUU=−1814.1, EX=−22.2,
  FDI=−107.4, KL=−931.6, ER=+0.004), R²=0.342, **adjusted R²=−0.2345 (NEGATIVE)** — the model
  fails to explain TFP variation. Except for labor (t=−2.015), all other variables are NOT
  statistically significant at the 5% level. The paper itself admits: "the model is
  questionable." The DEAP-computed TFP also fluctuates abnormally (from 0.123 to ~19.5%/year),
  diverging sharply from TFP computed for neighboring countries in the Penn World Table — the
  author acknowledges Vietnam's TFP was "not accurately calculated."
- **Model 2 (GDP growth, equation 4) — the main, statistically significant model**: after
  dropping FDI (via a J-statistic redundancy test, p=0.302 — not significant) and lagging labor +
  exchange rate by 1 year, R²=0.853, **adjusted R²=0.74**. Result: GDPG = 1.222·EDUP +
  1.691·EDUS + 1.519·EDUU + 0.076·EX + 1.234·KL₋₁ − 5.6×10⁻⁸·ER₋₁ − 0.897. **ONLY primary and
  secondary education are statistically significant** (t=3.398 and t=5.126); higher education has
  a positive coefficient (1.519) but t=1.079, NOT significant at 5%. Exports (t=4.37), lagged
  labor (t=3.689), lagged exchange rate (t=−4.204) are all significant at 1%.

## Robustness Checks

The author explicitly states limitations in section 4.3 "Robustness": did NOT test for
multicollinearity/heteroscedasticity; had NO clear model-selection guidance for GMM, using only a
simple functional-form test to decide on OLS; TFP was not accurately computed due to insufficient
DEAP software instructions. This is an important methodological WEAKNESS of the paper — honestly
acknowledged by the author but not resolved.

## Key Findings

**Primary and secondary education are Vietnam's main growth drivers, HIGHER EDUCATION has NO
statistically significant effect on GDP growth** in the 2000–2015 sample — the complete opposite
of Hua's (2005) result for China (only higher education significant). Explanation: Vietnam is at
an earlier development stage than China, needing GENERAL LABOR with basic skills to absorb/
imitate technology (catch-up) rather than highly skilled labor generating innovation —
consistent with Mingat & Tan's (1996) finding that middle-income countries benefit most from
secondary education.

## Conclusion

The hypothesis is confirmed: education is an important driver of Vietnam's economic growth, but
SPECIFICALLY primary/secondary rather than higher education. Recommendation: the government
should maintain/expand the universal primary/secondary schooling plan to boost social prosperity
— but the author also NOTES that higher education remains "essential for long-term evolution"
because university graduates are the main component enabling Vietnam to catch up with and absorb
advanced technology from developed nations — i.e., "higher education is not statistically
significant" should not be read as "higher education is unimportant."

## Relevance to the Course/Vietnam

- **Direct China (Hua 2005) vs. Vietnam (this paper) contrast**: the same model framework (7
  variables, DEA/Malmquist TFP), 2 COMPLETELY OPPOSITE results by education level — clear
  evidence that "returns to education by level" depend on a country's DEVELOPMENT STAGE, not a
  universal constant — this connects directly to the central argument of
  [[l75-hanushek-2016-higher-education-economic-growth]] that "expanding higher education" does
  not automatically generate growth without a matching foundation of basic skills/knowledge
  capital.
- **Agreement with [[l73-mcguinness-2021-returns-to-education-vietnam]]**: both VN papers over a
  similar period show higher education playing a MORE MUTED role than expected — Dao (2020) at
  the macro-growth level (GMM), McGuinness et al. (2021) at the micro-wage level (Mincer). The
  convergence between 2 fully independent methods strengthens confidence in the conclusion that
  "Vietnam's higher education has not fully realized its growth-contribution potential over
  2000–2016."
- The paper illustrates another methodological lesson (similar to
  [[l72-kadyraliev-2022-transport-infrastructure-investment]]): Model 1 (TFP) FAILS openly
  (negative adjusted R²) while Model 2 (GDPG) SUCCEEDS (adjusted R²=0.74) — the author honestly
  reports both, a good model of academic transparency for students writing an essay: not every
  model specification works, and failure should be reported rather than hidden.
- Directly relevant to Vietnam — the data is VN 2000–2015, overlapping the timeframe of
  [[l14-sasges-2025-vietnam-policies]] (LN1, a VAR/IRF on VN electricity/globalization/
  privatization 1980–2019) — the 1997 breakpoint in Sasges could be cross-referenced against the
  education growth period here.

## Links

- Lecture: [[ln7-investment-infrastructure-health-education]] · Concept:
  [[human-capital-returns-to-education]]
- Related: [[l73-mcguinness-2021-returns-to-education-vietnam]] (agreement, same VN theme),
  [[l75-hanushek-2016-higher-education-economic-growth]] (matches the "higher education needs
  accompanying conditions" argument), [[l14-sasges-2025-vietnam-policies]] (LN1, same VN
  timeframe)
