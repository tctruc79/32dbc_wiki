---
type: source
title: "L11 — Patel, Sandefur & Subramanian (2021) — The New Era of Unconditional Convergence"
tags: [convergence, growth, middle-income, solow, volatility]
created: 2026-07-20
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN1 Economic development/L11 JDE-2021 Patel The new era of unconditional convergence.pdf"
---

# L11 — Patel, Sandefur & Subramanian (2021), Journal of Development Economics 152: 102687

**Authors**: Dev Patel (Harvard University), Justin Sandefur & Arvind Subramanian (Center for
Global Development). Received 19/02/2021, accepted 05/05/2021, online 02/06/2021. An expansion
of an earlier paper with the provocative title "Everything you know about cross-country
convergence is (now) wrong."

## Abstract

> The central fact that has motivated the empirics of economic growth—namely unconditional
> divergence—is no longer true and has not been so for decades. Across a range of data sources,
> poorer countries have in fact been catching up with richer ones, albeit slowly, since the
> mid-1990s. This new era of convergence does not stem primarily from growth moderation in the
> rich world but rather from accelerating growth in the developing world, which has
> simultaneously become remarkably less volatile and more persistent. Debates about a
> "middle-income trap" also appear anachronistic: middle-income countries have exhibited higher
> growth rates than all others since the mid-1980s.

**Summary (interpretation)**: The central fact that once shaped the entire empirical growth
literature — **unconditional divergence** (poor countries failing to catch up with rich ones) —
is no longer true and has been wrong for decades. This new convergence does not come from rich
countries slowing down but from developing countries accelerating — while simultaneously
becoming less volatile and more persistent. The debate over the [[middle-income-trap]] is also
outdated: middle-income countries have grown faster than every other group since the mid-1980s.

## Research Questions

The cross-country growth literature (since Barro 1991) had concluded there was no
unconditional convergence — only conditional convergence (after controlling for human capital,
investment, finance...). This paper asks: does this fact still hold with the latest data
(through 2019)? And if convergence has returned, where does it come from — rich countries
slowing down or poor countries accelerating?

## Research Framework

The Solow (1956) framework: low-income countries with the same technology but lower
capital/higher MPK should grow faster (unconditional convergence). Johnson & Papageorgiou
(2020, review) found no convergence evidence in regressions of GDP/capita growth on initial
GDP/capita — this paper re-tests exactly that fact with the latest data, while also measuring
two additional quantities: volatility (within-country standard deviation of growth) and
persistence (autocorrelation of growth across adjacent periods) to confirm this is genuine
σ-convergence rather than transient β-convergence.

## Data

**Three independent datasets** cross-checked against each other: the Maddison Project, Penn
World Tables (PWT) 10.0, and World Development Indicators (WDI). The sample excludes oil
exporters and countries with population under 1 million.

## Methodology

- **Estimating equation** (Barro & Sala-i-Martin 1992):

  (1/s)·ln(y_{i,t+s}/y_{i,t}) = α − ((1−e^{−βs})/s)·ln(y_{i,t}) + ε_{i,t+s}

  estimated by **non-linear least squares**, with heteroskedasticity-robust standard errors,
  for every starting point t from 1960 to 2010, ending at the most recent year with data
  (~2019).
- Also measures **volatility** (equation 4, within-country standard deviation of growth) and
  **persistence** (equation 5, correlation coefficient ρ between adjacent growth periods).

## Regression Results

- The β coefficient flips sign and becomes **significant from the late 1990s**, strongest in
  the 2000s (Fig. 1, all three datasets agree). The pace is modest: on average, developing
  countries close half the gap to their steady state in **~170 years** (versus a standard
  ~2%/year rate, a ~35-year half-life, in Barro & Sala-i-Martin 1992 for US states).
- γ (a test for the middle-income trap): after 1985, middle-income countries grew
  **0.50–0.75 percentage points** faster.
- Figure 4: volatility (std. dev.) declines over time for low-/middle-income countries;
  persistence (ρ) rises, especially clearly for middle-income countries after 1970.

## Key Findings — 3 central facts

1. **Convergence reversal**: convergence comes from poor countries accelerating, NOT from rich
   countries slowing — the entire growth distribution of poor countries shifts upward. The
   share of low-income countries with negative growth fell from 42% (1980s) to 16%
   (2000s–2010s).
2. **Middle-income trap refuted**: cross-sectional growth now has an **inverted-U** shape —
   middle-income countries have grown fastest since the 1980s, faster even than low-income
   countries since the start of the convergence era. "More trampoline than trap." (→ a direct
   rebuttal of the [[middle-income-trap]] of Gill & Kharas 2015.)
3. **Volatility down, persistence up**: the convergence era coincides with lower
   within-country volatility and more persistent growth in developing countries — especially
   clear for middle-income countries, which now have the highest persistence (the exact
   opposite of the "middle-income trap" narrative).

## Conclusion

- The analysis is at the **country** level and does not map directly onto individual
  inequality — the convergence era coincides with declining global earnings inequality, but
  the "elephant's trunk" (top incomes) remains the main factor holding back reductions in
  global inequality (the Lakner & Milanovic elephant graph).
- Krugman (2018, note 10) explains the "middle-income trampoline" via the "It" theory —
  countries that already have "It" (sufficient conditions to absorb frontier technology) grow
  fast because they are catching up to a receding frontier; countries too poor lack "It", and
  already-rich countries are already at the frontier — only middle-income countries both have
  "It" and still have distance left to close.
- **The authors' important caveat**: 25 years of convergence is no guarantee it continues —
  the root cause remains unclear (global cheap finance, China's growth, or country-specific
  factors), and future forces (deglobalization, climate change, labour-saving technology)
  could reverse the trend.

## Relevance to the Course/Vietnam

Central to [[unconditional-convergence]]. The professor suggests (LN1 slide 37) this
convergence model applies to heterogeneous growth across **Vietnam's provinces/regions** — a
candidate essay/thesis topic (comparing inter-provincial β/σ-convergence, testing the
middle-income trap at the local level).

## Links

- Lecture: [[ln1-economic-development]] · Concepts: [[unconditional-convergence]],
  [[middle-income-trap]]
