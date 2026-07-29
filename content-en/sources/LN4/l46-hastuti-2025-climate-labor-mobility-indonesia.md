---
type: source
title: "L46 — Hastuti et al. (2025) — Climate Change and Labor Mobility: Agricultural Households in Indonesia"
tags: [labor-mobility, climate-change, indonesia, instrumental-variable, mediation-analysis, structural-transformation]
created: 2026-07-29
updated: 2026-07-29
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L46 WDP-2025 Hastuti et al Climate change and labor mobility.pdf"
---

# L46 — Hastuti, Dartanto, Halimatussadiah & Rifin (2025), World Development Perspectives 40: 100750

**Authors**: Hastuti, Teguh Dartanto, Alin Halimatussadiah (Universitas Indonesia), Amzul Rifin
(Bogor Agricultural University). Keywords: Agricultural Households, Climate Change, Labor
Mobility, Indonesia, Instrumental variable, Mediation analysis.

## Summary

**The only study in LN4 set outside Vietnam** — the Indonesian context. Climate change disrupts
farming and reduces productivity, creating uncertainty for agricultural households and pushing
them toward alternative livelihoods. This paper examines the effects of rainfall and temperature
variability (measured via the coefficient of variation) on **labor mobility** — here defined as a
shift ACROSS occupational **sectors** by the household head, not necessarily geographic migration
— using long-run **Indonesia Family Life Survey (IFLS)** data from 2000/2007/2014. It uses
instrumental variables (altitude and latitude) to address the endogeneity of climate variables.
Results: both rainfall and temperature variability raise the probability of labor mobility, with
the effect operating mainly through the **agricultural production cost** channel.

## Research Question & Methodology

- **Two objectives**: (1) the causal effect of climate change on labor mobility among
  Indonesian agricultural households; (2) the mediating role of **farm production costs** in
  this relationship.
- **Defining labor mobility — an important contrast with the Vietnamese papers in LN4**: this is
  a shift ACROSS economic SECTORS (agriculture → non-agriculture) by the household head,
  excluding cross-border migration; measured between pairs of IFLS survey waves (2000→2007,
  2007→2014) as a binary variable (1 = left agriculture). This is the ONLY paper in LN4 to study
  **exit/mobility out of agriculture** rather than the in-place coping/adaptation of households
  that remain farming — a sharp contrast with the "stay and adapt" approach of L43/L44/L45.
- **Data**: IFLS 2000/2007/2014, representing ~83% of Indonesia's population, across 13
  provinces. The sample is restricted to households whose head works in agriculture: **4,909
  households**. Climate variables (rainfall, temperature) come from **WorldClim**, measured as
  the **coefficient of variation (CV)** over 14 years at the sub-district level — mean CV is 2.4%
  for rainfall and 0.4% for temperature.
- **Instrumental variables**: **latitude** as the IV for rainfall variability (lower latitudes
  receive more rainfall), and **altitude** as the IV for temperature variability (higher-altitude
  areas are warming roughly 3 times faster than the global average). Strong first-stage tests:
  Kleibergen-Paap rk Wald F = 57.6 (rainfall) / 60.8 (temperature) — well above the Stock-Yogo
  threshold; the Sargan-Hansen test confirms endogeneity in the raw climate variables (justifying
  the use of IV).
- **Mediation analysis — a notable methodological feature and the paper's key contribution**:
  uses the **IV-mediate framework of Dippel et al. (2020)** to decompose the effect of climate on
  labor mobility into a **Direct Effect** (μ2) and an **Indirect Effect** operating through the
  **farm production cost** channel (κ1×μ1). This is the ONLY paper in LN4 that opens the
  "black box" of transmission MECHANISM rather than just measuring an overall effect.
- **Robustness checks**: IV-Probit (a nonlinear specification) and Kinky Least-Squares (KLS,
  Kripfganz & Kiviet 2021), testing sensitivity across assumed correlation levels between the
  climate variables and unobserved error.

## Key Results

- **Main effect (Table 2, IV)**: a 1% increase in rainfall CV raises the probability of labor
  mobility by <span class="stat">0.47 percentage points</span>***; a 1% increase in temperature
  CV raises it by <span class="stat">1.38 percentage points</span>*** — both significant at the
  1% level. OLS yields positive but statistically insignificant coefficients — indicating
  attenuation bias from endogeneity when IV is not used.
- **Mediation (Table 4)**: for rainfall variability, both the direct effect and the indirect
  effect (through farm production cost) are positive and significant — production cost is a
  genuine transmission channel. For temperature variability, the indirect effect through
  production cost is NOT statistically significant — the temperature effect may operate through a
  different channel (e.g., productivity or direct labor conditions).
- **Heterogeneity (Table 3)**:
  - **Region**: effects are stronger on the **island of Java** (rainfall +0.41 percentage points,
    temperature +6.23 percentage points), and NOT significant outside Java — because Java offers
    more non-farm employment opportunities.
  - **Land size**: households with **small** landholdings (<0.5 ha) are more vulnerable — their
    rainfall/temperature coefficients are larger and significant compared with large-landholding
    households (≥1 ha, where the coefficient is not significant) — large-landholding households
    have better resources/technology/capital to adapt in place, reducing their need to leave
    agriculture.
  - **Education — a nuanced result requiring careful reading**: farmers with LOW education
    (≤primary school) show LARGER and more strongly significant rainfall/temperature CV
    coefficients — that is, they are MORE sensitive to climate variability, as measured by the
    marginal effect in the interaction regression — which the authors interpret as reflecting
    more direct economic pressure. At the same time, the authors also note (as a separate general
    observation, not a regression coefficient) that more highly educated farmers are generally
    more likely to move into non-farm work because they have better opportunities. These two
    statements are not contradictory, but they measure two different things (marginal
    sensitivity to a climate shock vs. baseline probability of job switching) — this distinction
    should be cited carefully, not oversimplified into "higher education → greater
    climate-driven labor mobility."
- **Robustness**: IV-Probit yields consistent results (rainfall +0.48 percentage points,
  temperature +1.37 percentage points); KLS remains positive and significant across the assumed
  correlation range [−0.50, −0.10].

## Significance for the Course/Vietnam

- **A distinctive position within LN4**: this is the ONLY non-Vietnamese paper (Indonesia) —
  extending the "agriculture and climate change" story beyond Vietnam and showing the issue's
  broader relevance across Southeast Asia. It is also the ONLY paper to frame climate impact as a
  trigger for **structural transformation** (in the spirit of the Lewis 1954 dual-sector model —
  surplus agricultural labor shifting to industry/services) rather than as a welfare shock
  requiring in-place "coping."
- **A clear contrast with L43/L44/L45**: the Vietnamese papers in LN4 all study households that
  **stay** in agriculture and try to measure/reduce vulnerability (LVI, coping strategies,
  remittances...). L46 studies households that **leave** — treating labor mobility itself AS an
  adaptation strategy, not an outcome requiring remediation. This offers a useful complementary
  angle for exam questions comparing "vulnerability/adaptation-in-place" (L43–L45) against
  "exit/mobility" (L46) as two distinct responses to the same type of climate shock.
- **An IV methodology worth comparing with L41/L42**: L46 finds a valid exogenous IV
  (latitude/altitude), whereas L41 (Ho 2021) must rely on Oster (2019) bias-adjustment because
  finding an IV for land tenure is a "daunting task," and L42 uses Lewbel's (2012)
  heteroscedasticity-based internal IV — three papers, three different strategies for handling
  endogeneity when the object of study (land tenure, land consolidation, climate) is hard to
  instrument cleanly in every case.
- **Vietnam**: although not set in Vietnam, the finding that "smallholders are more vulnerable
  and more likely to exit agriculture" and that "production cost is the main transmission
  channel" has direct relevance for Vietnam — connecting to the land-fragmentation story in
  [[l42-do-2023-land-consolidation-vietnam]] (small/fragmented land → higher production costs) and
  suggesting a POTENTIAL mechanism (though not tested directly by any LN4 paper in Vietnam):
  whether land consolidation in Vietnam might reduce climate-driven labor mobility out of
  agriculture.

## Links

- Lecture: [[ln4-agriculture-climate-change-natural-disasters]]
- Same lecture: [[l43-le-2020-floods-household-welfare]],
  [[l44-vo-tran-2022-rural-vulnerability-vietnam]],
  [[l45-tran-2022-rice-farmers-vulnerability-nghean]] (a contrast between "staying and adapting"
  and "leaving"), [[l42-do-2023-land-consolidation-vietnam]] (a link to land fragmentation →
  production costs).
