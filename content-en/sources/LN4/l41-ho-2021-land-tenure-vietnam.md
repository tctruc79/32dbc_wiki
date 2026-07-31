---
type: source
title: "L41 — Ho (2021) — Land Tenure and Economic Development: Evidence from Vietnam"
tags: [land-tenure, property-rights, institutions, vietnam, nighttime-lights]
created: 2026-07-29
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L41 WD-2021 Ho Land tenure and eco dev evidence from vietnam.pdf"
---

# L41 — Ho, H.A. (2021), World Development 140: 105275

**Author**: Hoang-Anh Ho (University of Economics Ho Chi Minh City). JEL: O11, P48, Q15.
Keywords: Land tenure, Privatization, Economic development, Southeast Asia, Vietnam.

## Abstract

> The relationship between private property rights and economic development has been
> investigated by numerous cross-country studies. Nevertheless, aggregate measures of private
> property rights have prevented cross-country studies in general from identifying the specific
> institutions governing private property rights that policy reforms should consider. The
> present paper investigates the impact of private property rights to land on economic
> development in a within-country setting, exploiting the 1993 nationwide land privatization in
> Vietnam. Using a random sample of more than 2000 rural communes across Vietnam, our study
> finds that the prevalence of private land tenure has a positive and significant impact on the
> level of economic development, as proxied by nighttime light intensity. The magnitude of the
> impact, however, is sensitive to both observed and unobserved confounding factors, and
> overall modest. The most plausible explanations for this modest impact are the lingering
> insecurity that land-use certificates can be revoked by the state and the relatively high
> taxes and time cost of land transactions in Vietnam. These lessons are of interest not only to
> Vietnam with its future land reform, but also to other developing countries contemplating the
> privatization of agricultural land.

**Summary (interpretation)**: An influential line of cross-country research — led by
[[l21-acemoglu-2001-colonial-origins]] — has found a positive effect of **private property
rights** on economic development, but cannot pin down PRECISELY which institution matters for
policy reform. This paper exploits a **within-country** setting: Vietnam's nationwide 1993 land
reform, which issued **land-use certificates** for agricultural land.

## Research Questions

How do private property rights over land affect commune-level economic development in Vietnam
following the 1993 land reform?

## Research Framework

Following Besley (1995) and Besley & Ghatak (2010) — the same theory that
[[l23-besley-ghatak-2010-property-rights]] develops in depth in LN2 — private land tenure
operates through two channels: (i) the **residual claimant incentive** — farmers, as residual
claimants of output, have an incentive to invest (labor, fertilizer, improved seed) and can use
land as collateral for credit; (ii) **transaction security** — clear legal records lower
land-transaction costs, increase land-market liquidity. The author builds a simple
**endogenous land tenure** model in which households decide whether to apply for a certificate
by comparing marginal costs (time, money) against marginal benefits (protecting the plot's
returns). The model identifies 3 potential confounder groups — **public infrastructure**,
**land quality**, and **geography** — each of which affects both the decision to apply for a
certificate and economic development directly, so omitting them would overestimate the effect
of land tenure.

## Data

The Commune Module of the 2004 VHLSS (Vietnam Household Living Standards Survey), a random
sample of ~2,205 out of 8,000 rural communes. The private-land-tenure variable = the share of
agricultural land area holding land-use certificates (sample mean: 74.41%). The dependent
variable is **nighttime light intensity** (logged, plus 0.01) from NOAA satellite data for
2005 — used because Vietnam has no commune-level GDP data; cross-checked against 2002 VHLSS
per-capita consumption, yielding a Pearson correlation of 0.73 (p=0.000), confirming the
reliability of this proxy.

## Methodology

**Two empirical models**: (1) **Panel data** (1992, pre-reform, vs. 2005, post-reform) —
fixed-effects vs. random-effects, with a Hausman test (rejecting the random-effects null at
p=0.000) — handling **time-invariant** confounders. (2) **2004 cross-section** combined with
the **Oster (2019)** method — estimating the sensitivity of the estimated coefficient to
UNOBSERVED confounders, based on how much the coefficient shifts as observed confounders are
added progressively, adjusted for the R² of the "true data-generating process." This is an
alternative to instrumental variables (the author acknowledges being unable to find a credible
IV) — it yields a coefficient range under different scenarios for the **coefficient of
proportionality (δ)** between 0 and 1, and R from 0.65 to 0.80.

## Regression/Estimation Results

- **Panel data (Table 2)**: random-effects gives a coefficient of 0.012*** (a 1% increase in
  land-use certificates → a 1.2% increase in nighttime light); fixed-effects lowers this to
  0.009*** — indicating the presence of time-invariant confounders.
- **Cross-section (Table 3)**: the univariate regression (column 1) gives a coefficient of
  <span class="stat">0.017</span> (a 1% increase in land-use certificates → a 1.7% increase in
  nighttime light). Once full controls are added (agricultural suitability, electricity grid
  access, markets, elevation, terrain ruggedness) plus province fixed effects (**column 7**),
  the coefficient falls sharply to <span class="stat">0.006</span>*** — only a 0.6% increase in
  nighttime light. Full R² = 0.617.
- **Oster (2019) bias-adjustment (Table 4)**: under the most optimistic scenario (δ=0.1,
  R=0.65), the coefficient remains 0.006***. Under the **most conservative** scenario (δ=0.9,
  R=0.80), the coefficient **is not different from zero** — meaning unobserved confounders
  COULD fully explain the observed effect of private land tenure.

## Robustness Checks

Results hold up across a range of checks — the intensive margin (communes with positive
luminosity only: coefficient falls to 0.003), nighttime light per capita, nighttime light
growth, district-clustered standard errors. There is a marked North–South difference: the
coefficient is considerably larger in the South than in the North (0.012*** vs. 0.003** in the
full cross-sectional model) — reflecting the South's (especially the Mekong Delta's) longer
tradition of private land tenure, which made the 1993 reform more economically effective there.

## Key Findings

The effect of private land tenure on rural economic development in Vietnam is **modest**. The
primary explanations: (i) **lingering insecurity** — the state can still reclaim land-use
certificates (typically with below-market compensation) upon expiry; an estimated ~4% of
households had land reclaimed during 2006–2012 (Markussen & Tarp 2014); (ii) **high taxes and
time costs** for land transactions relative to other East Asian countries (Childress 2004).

## Conclusion

The lesson is valuable not only for Vietnam's future land reform but also for other developing
countries considering agricultural land privatization: the degree of completeness of property
rights (not merely their formal existence) determines the magnitude of the real economic
effect.

## Relevance to the Course/Vietnam

- **An important cross-lecture link to LN2**: this paper builds directly on the
  private-property-rights argument of [[l21-acemoglu-2001-colonial-origins]] and on the
  [[l23-besley-ghatak-2010-property-rights]] theory of the two channels through which property
  rights operate. It is a rare instance in the syllabus where the abstract institutions/
  property-rights theory of LN2 is **empirically tested with Vietnamese micro-data** in LN4 —
  see also [[institutions]].
- **A meaningful contrast with AJR (2001)**: whereas AJR's cross-country research finds a LARGE
  effect of private property rights on development, Ho (2021) finds a **modest** effect that
  could fall to zero under a conservative scenario — suggesting cross-country results may
  overstate the effect when local-level confounders cannot be controlled for.
- **A methodological point worth noting for the exam**: the Oster (2019) technique is an
  alternative to IV when no valid instrument can be found — worth comparing with
  [[l46-hastuti-2025-climate-labor-mobility-indonesia]] (a real IV) and
  [[l42-do-2023-land-consolidation-vietnam]] (PSM-DD).
- **Policy implications for Vietnam**: future land reform should move toward permanent land
  ownership rather than term-limited land-use certificates, and reduce land-transaction
  taxes/costs.

## Links

- Lecture: [[ln4-agriculture-climate-change-natural-disasters]]
- Concepts: [[institutions]]
- Cross-lecture (LN2): [[l21-acemoglu-2001-colonial-origins]],
  [[l23-besley-ghatak-2010-property-rights]]
- Same lecture (LN4): [[l42-do-2023-land-consolidation-vietnam]] — both concern land
  institutions in Vietnam, but L41 addresses property rights/tenure security while L42
  addresses land fragmentation/consolidation — two distinct channels.
