---
type: source
title: "L72 — Kadyraliev et al. (2022) — Investments in Transport Infrastructure as a Factor of Stimulation of Economic Development"
tags: [infrastructure, transport, economic-development, kyrgyzstan, ols]
created: 2026-08-01
updated: 2026-08-01
status: complete
source_file: "raw/3. LECTURE NOTES/LN7 Investment in development infrastructure health and education/L72 TRP-2022 Kadyraliev Investment in transport infratsruture as a factor of stimulation of econ dev.pdf"
---

# L72 — Kadyraliev, A., Supaeva, G., Bakas, B., Dzholdosheva, T., Dzholdoshev, N., Balova, S.,
# Tyurina, Y. & Krinichansky, K. (2022), Transportation Research Procedia 63: 1359–1369

**Authors**: Almaz Kadyraliev, Gulnaz Supaeva, Baktiar Bakas, Tamara Dzholdosheva (Kyrgyz
Economic University), Nurdin Dzholdoshev (International Academy of Management, Law, Finance and
Business, Bishkek), Suzana Balova, Yuliya Tyurina, Konstantin Krinichansky (Financial University
under the Government of the Russian Federation). Conference proceedings of the X International
Scientific Siberian Transport Forum. Open access CC BY-NC-ND.

> **A note on source quality**: the paper combines a fairly thorough literature review on
> transport infrastructure and growth with ONE very thin empirical OLS regression (n=7 annual
> observations, Kyrgyzstan 2013–2019, 6 independent variables) — no t-statistics, p-values, or R²
> are reported for the regression equation. With n=7 and 6 regressors (degrees of freedom near
> zero), this regression result is not statistically credible and should be read as a
> methodological illustration rather than robust empirical evidence. The paper's "Conclusion"
> section actually draws mainly on the literature review + qualitative observations about ODA
> flows, not directly on the regression result.

## Abstract

> The view that transport infrastructure projects have a significant impact on the development
> of the economy is often used to justify the allocation of resources. Faced with increasing
> difficulties in financing transport infrastructure, many countries are seeking to allocate
> their resources in such a way as to maximize net returns. In order to facilitate such
> distribution, it is necessary to fully understand all the large-scale consequences of
> infrastructure investments. Transport infrastructure can be defined as a factor that guarantees
> growth and economic development, thanks to the functions of crossing space in terms of the
> movement of people and the exchange of goods. The effect of the impact of transport
> infrastructure on the economy largely depends on how society uses the services offered by
> infrastructure facilities. [...] It is widely believed that improper planning and
> implementation of an infrastructure project can have a negative impact on the economy and
> environment of the region. In some cases, infrastructure investments may pose a threat to
> communities that will be directly affected by this project.

**Summary (paraphrase)**: The paper argues transport infrastructure investment drives economic
development through multiple channels (reducing unemployment, raising land/real-estate values,
increasing investment attractiveness), while also warning of risks (poor planning, negative
environmental/community impacts). Case study: the effectiveness of transport infrastructure
investment in Kyrgyzstan via official development assistance (ODA) 1992–2018 and a simple OLS
regression forecasting freight turnover, 2013–2019.

## Research Questions

Does transport infrastructure investment (particularly in a developing/transition economy like
Kyrgyzstan) genuinely drive economic development, and how effectively has foreign aid capital for
transport infrastructure been used in Kyrgyzstan to date?

## Research Framework

A broad literature synthesis: Aschauer (1989) — a strong correlation between growth and transport
investment, estimated output elasticity to capital of 0.39; average socio-economic rate of
return 30–40% for telecoms, >40% for electricity, 80% for roads (Estache 2007), typically higher
in low-income than middle-income countries (Canning & Pedroni). Larson: an additional 1% of GDP
in public investment reduces poverty by a proportional 0.5%. Calderon & Servén (2004): the
infrastructure stock both boosts growth and reduces income inequality. A standard
production-function model (Evans & Karras 1994; Ozbay et al. 2007): output is a Cobb-Douglas
function of labor, capital, and transport infrastructure (as a Hicks-neutral shift factor). China
and Vietnam are cited as examples investing ~10% of GDP in infrastructure yet still struggling to
meet electricity/transport demand.

## Data

**Kyrgyzstan case study**: (1) official development assistance (ODA) data 1992–2018 from the
Kyrgyz Ministry of Finance — a total of USD 10.193 billion (USD 7.32 billion in loans + USD 2.873
billion in grants), averaging 11.2% of GDP/year (2.3% grants + 8.8% loans); 73% of aid (USD 7.44
billion) concentrated in 3 sectors: budget support, energy, and transport infrastructure; 56
transport projects, 26% of total ODA, 67 signed agreements worth USD 2,612.4 million (USD 2,239.3
million loans + USD 373.1 million grants); largest creditor: China Eximbank (USD 1,173 million),
Asian Development Bank (USD 643 million). (2) Regression data: 7 years (2013–2019) — cargo
turnover (Y, million ton-km) and 6 independent variables (GRP per capita, fixed-asset investment,
industrial output, the freight-tariff index, resident population, per-capita monetary income),
sourced from the National Statistical Committee of Kyrgyzstan.

## Methodology

A standard Cobb-Douglas production specification: ln Yᵢₜ = βₗ ln Lᵢₜ + βₖ ln Kᵢₜ +
Σβᵤ ln Zᵤ,ᵢₜ + βₜ ln Tᵢₜ, where Tᵢₜ (transport infrastructure) enters as a Hicks-neutral shift
factor. Empirical application: a multivariate OLS regression (ordinary least squares, s =
(XᵀX)⁻¹XᵀY) of cargo turnover on the 6 variables above, with a pairwise correlation matrix R
across 7 variables (most pairwise correlations among regressors are VERY HIGH, 0.9+, indicating
serious unaddressed multicollinearity).

## Regression/Estimation Results

- **Estimated equation**: Y = 31646.7206 − 57.9253·X1 + 0.02451·X2 + 0.02381·X3 − 10.7209·X4 −
  5.709·X5 + 0.6635·X6 (X1=GRP per capita, X2=fixed-asset investment, X3=industrial output,
  X4=freight-tariff index, X5=population, X6=per-capita income). **No t-statistic/p-value/R² is
  reported anywhere in the paper** — with n=7 observations and 6 regressors + constant (7
  parameters for 7 observations), the model is nearly saturated in degrees of freedom, and the
  result cannot be meaningfully interpreted for statistical significance.
- **Quality of ODA-funded transport capital used** (qualitative, not regression-based): a survey
  of ODA-rehabilitated road quality shows the share rated "good" fell from 82% (2009) to 34%
  (2019), while "bad" rose from 8% to 47% — the ADB (2013) assessed 33% of nationally significant
  roads as needing re-rehabilitation despite ~USD 1 billion invested since 1994; external debt for
  road projects reached USD 1.463 billion, with an average loan term of 9 years 4 months against
  a maximum road lifespan of 20–24 years — a warning of repayment risk arising before the
  infrastructure's useful life ends.

## Robustness Checks

None — the paper performs no robustness testing (no multicollinearity diagnostics despite the
paper's own reported correlation matrix showing an obvious problem, no specification test, no
alternative-variable/sample robustness check).

## Key Findings

The paper's real strength lies in its qualitative/case-study section, not the regression: (1)
Kyrgyzstan's cargo transport primarily serves Kyrgyzstan–China bilateral trade and will keep
growing; (2) the share of transit cargo (especially China–Russia via Kyrgyzstan and Central Asia)
will grow faster; (3) state-level measures are needed to expand international border-crossing
transit capacity; (4) modern solutions are needed to attract transcontinental Europe–Asia transit
cargo flow.

## Conclusion

Most low-income countries receive significant benefits from improved infrastructure and income
growth, usually with a positive impact on the poorest population — but it remains difficult to
design specific national policy to lift the poor out of poverty based on clear empirical data;
more research and reliable data are needed to establish a specific causal relationship between
infrastructure measures and their impact. Nevertheless, there is overall evidence supporting
infrastructure investment as a clear policy objective for supporting economic development and
pro-poor growth. For industry: time/cost savings and increased accessibility/reliability from
transport infrastructure will raise productivity by improving production/distribution; wider
market access creates new business opportunities and increases competition.

## Relevance to the Course/Vietnam

- The paper clearly illustrates a methodological point the course emphasizes: a sound theoretical
  framework (Cobb-Douglas + Hicks-neutral shift factor) does not guarantee credible empirical
  results — a lesson for the essay: a good theoretical model does not automatically yield
  trustworthy empirical results if the sample size is too small.
- Directly contrasts with [[l71-heshmati-rashidghalam-2020-urban-infrastructure-china]] (same
  LN7, same [[infrastructure-investment-and-growth]] theme) — L71 uses N=310 panel observations +
  rigorous PCA, the polar opposite of L72's n=7 approach — a good comparison pair for an exam
  question on "when is an empirical infrastructure study credible."
- Vietnam is directly cited in the literature review (alongside China, investing ~10% of GDP in
  infrastructure yet still facing electricity/transport shortfalls) — useful data for the opening
  of an essay on Vietnamese infrastructure investment.
- The debt-risk warning (loan terms shorter than infrastructure lifespan) connects to the
  development-finance theme in LN3 —
  [[l34-cai-2023-natural-resources-financial-development-vietnam]] also discusses the
  finance–development relationship in VN, albeit via a different mechanism.

## Links

- Lecture: [[ln7-investment-infrastructure-health-education]] · Concept:
  [[infrastructure-investment-and-growth]]
- Related: [[l71-heshmati-rashidghalam-2020-urban-infrastructure-china]] (contrasting
  methodological rigor)
