---
type: source
title: "L46 — Hastuti et al. (2025) — Climate Change and Labor Mobility: Agricultural Households in Indonesia"
tags: [labor-mobility, climate-change, indonesia, instrumental-variable, mediation-analysis, structural-transformation, k32-shortlist]
created: 2026-07-29
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L46 WDP-2025 Hastuti et al Climate change and labor mobility.pdf"
---

# L46 — Hastuti, Dartanto, Halimatussadiah & Rifin (2025), World Development Perspectives 40: 100750
> ⭐ ⭐ **ON THE OFFICIAL K32 SHORTLIST** — this is one of the 20 papers Prof. Heshmati fixed on 28/8/2026 as the question scope for the 06/9 written exam. This paper is **new relative to the K31 shortlist**. See [[k32-shortlist-2026]].


**Authors**: Hastuti, Teguh Dartanto, Alin Halimatussadiah (Universitas Indonesia), Amzul Rifin
(Bogor Agricultural University). Keywords: Agricultural Households, Climate Change, Labor
Mobility, Indonesia, Instrumental variable, Mediation analysis.

## Abstract

> Climate change presents a significant challenge to the agricultural sector. It disrupts
> farming processes and reduces productivity, increasing uncertainty for farming households
> and driving them to seek alternative livelihoods. This research undertakes an examination of
> the impact of climate change, proxied by variation of rainfall and temperature, on labor
> mobility in Indonesia using longitudinal data from three successive rounds of the Indonesia
> Family Life Survey (IFLS). Labor mobility refers to sectoral shifts, where a household head
> changes employment sectors, regardless of relocation. We employ an instrumental variable
> approach to ensure robust estimation by accounting for potential endogeneity of climate
> variables, using altitude and latitude as instruments. Our findings indicate that variation
> of rainfall and temperature affects labor mobility in Indonesia's agricultural households.
> Specifically, a one percent increase in the coefficient of variation for rainfall and
> temperature significantly increases the probability of labor mobility by approximately 0.47
> and 1.38 percentage point, respectively. We further demonstrate that the effect operates
> primarily through changes in farm production costs that influence labor mobility, especially
> under varying rainfall. The heterogeneity analysis indicates that impact of rainfall and
> temperature variability are more pronounced among farmers in Java, particularly those with
> higher education and smaller landholdings.

**Summary (interpretation)**: **The only study in LN4 set outside Vietnam** — the Indonesian
context. The paper examines the effects of rainfall and temperature variability on **labor
mobility** — a shift ACROSS occupational sectors by the household head, not necessarily
geographic migration — using long-run **Indonesia Family Life Survey (IFLS)** data.

## Research Questions

(1) What is the causal effect of climate change on labor mobility among Indonesian
agricultural households? (2) Does farm production cost play a mediating role in this
relationship?

## Research Framework

**Defining labor mobility — an important contrast with the Vietnamese papers in LN4**: a
shift ACROSS economic sectors (agriculture → non-agriculture) by the household head, excluding
cross-border migration. This is the ONLY paper in LN4 to study **exit/mobility out of
agriculture** rather than the in-place coping/adaptation of households that remain farming —
a sharp contrast with the "stay and adapt" approach of L43/L44/L45. The mediation framework
uses **IV-mediate (Dippel et al. 2020)** — decomposing the effect of climate on labor mobility
into a **Direct Effect** (μ2) and an **Indirect Effect** through the **farm production cost**
channel (κ1×μ1).

## Data

IFLS 2000/2007/2014, representing ~83% of Indonesia's population, across 13 provinces. The
sample is restricted to households whose head works in agriculture: **4,909 households**.
Climate variables (rainfall, temperature) come from **WorldClim**, measured as the
**coefficient of variation (CV)** over 14 years at the sub-district level — mean CV is 2.4% for
rainfall and 0.4% for temperature.

## Methodology

**Instrumental variables**: **latitude** as the IV for rainfall variability (lower latitudes
receive more rainfall), and **altitude** as the IV for temperature variability (higher-altitude
areas are warming roughly 3 times faster than the global average). Strong first-stage tests:
Kleibergen-Paap rk Wald F = 57.6 (rainfall) / 60.8 (temperature) — well above the Stock-Yogo
threshold; Sargan-Hansen confirms endogeneity in the raw climate variables. **Mediation
analysis — a notable methodological feature**: uses the **IV-mediate framework of Dippel et
al. (2020)** — the ONLY paper in LN4 that opens the "black box" of transmission MECHANISM
rather than just measuring an overall effect.

## Regression/Estimation Results

- **Main effect (Table 2, IV)**: a 1% increase in rainfall CV raises the probability of labor
  mobility by <span class="stat">0.47 percentage points</span>***; a 1% increase in temperature
  CV raises it by <span class="stat">1.38 percentage points</span>*** — both significant at the
  1% level. OLS yields positive but statistically insignificant coefficients — indicating
  attenuation bias from endogeneity when IV is not used.
- **Mediation (Table 4)**: for rainfall variability, both the direct effect and the indirect
  effect (through farm production cost) are positive and significant. For temperature
  variability, the indirect effect through production cost is NOT statistically significant —
  the temperature effect may operate through a different channel.
- **Heterogeneity (Table 3)**: effects are stronger on the **island of Java** (rainfall +0.41
  percentage points, temperature +6.23 percentage points), NOT significant outside Java.
  Households with **small** landholdings (<0.5 ha) are more vulnerable — larger and significant
  coefficients compared with large-landholding households (≥1 ha, not significant).

## Robustness Checks

IV-Probit (a nonlinear specification) yields consistent results (rainfall +0.48 percentage
points, temperature +1.37 percentage points); Kinky Least-Squares (KLS, Kripfganz & Kiviet
2021) remains positive and significant across the assumed correlation range [−0.50, −0.10].

## Key Findings

Large-landholding households have better resources/technology/capital to adapt in place,
reducing their need to leave agriculture. Farmers with LOW education (≤primary school) show
LARGER and more strongly significant rainfall/temperature CV coefficients — more sensitive to
climate variability (marginal effect); separately, the authors also note that more highly
educated farmers are generally more likely to move into non-farm work because they have better
opportunities — two distinct statements (marginal sensitivity vs. baseline probability) that
should be cited carefully.

## Conclusion

Climate change has a causal relationship with labor mobility among Indonesian agricultural
households — improving agricultural efficiency is key to mitigating adverse effects. Building
a cost-efficient, climate-resilient agricultural system requires combining precision
agriculture, human-capital development, and institutional coordination to increase resilience
and reduce unwanted labor mobility out of agriculture.

## Relevance to the Course/Vietnam

- **A distinctive position within LN4**: the ONLY non-Vietnamese paper (Indonesia) — extending
  the "agriculture and climate change" story beyond Vietnam. Also the ONLY paper to frame
  climate impact as a trigger for **structural transformation** (Lewis 1954 dual-sector model)
  rather than as a welfare shock requiring in-place "coping."
- **A clear contrast with L43/L44/L45**: the Vietnamese papers all study households that
  **stay** in agriculture. L46 studies households that **leave** — treating labor mobility
  itself AS an adaptation strategy, not an outcome requiring remediation.
- **An IV methodology worth comparing with L41/L42**: L46 finds a valid exogenous IV
  (latitude/altitude), whereas L41 (Ho 2021) relies on Oster (2019) bias-adjustment, and L42
  uses Lewbel's (2012) heteroscedasticity-based internal IV — three papers, three different
  strategies for handling endogeneity.
- **Vietnam**: the finding that "smallholders are more vulnerable and more likely to exit
  agriculture" connects directly to the land-fragmentation story in
  [[l42-do-2023-land-consolidation-vietnam]].

## Links

- Lecture: [[ln4-agriculture-climate-change-natural-disasters]]
- Same lecture: [[l43-le-2020-floods-household-welfare]],
  [[l44-vo-tran-2022-rural-vulnerability-vietnam]],
  [[l45-tran-2022-rice-farmers-vulnerability-nghean]] (a contrast between "staying and adapting"
  and "leaving"), [[l42-do-2023-land-consolidation-vietnam]] (a link to land fragmentation →
  production costs).
