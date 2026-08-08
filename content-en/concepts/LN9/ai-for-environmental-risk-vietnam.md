---
type: concept
title: "AI for Environmental Risk Management"
tags: [artificial-intelligence, machine-learning, disaster-risk, air-quality, vietnam]
created: 2026-08-07
updated: 2026-08-07
status: complete
---

# AI for Environmental Risk Management

## Definition

The application of **hybrid ML/AI models** (combining multiple algorithms, or combining AI with
multi-criteria decision methods) to forecast/map environmental risk at the local/urban scale —
replacing traditional physical/statistical models that require functional-form assumptions and
handle nonlinear, high-dimensional data poorly. In LN9, this concept is illustrated through 2
different problems sharing the same methodological logic: **spatial forecasting** (flooding,
likelihood at a location — [[l91-pham-2020-flood-risk-ai-vietnam]]) and **temporal forecasting**
(hourly air-pollution concentration at a station — [[l92-rakholia-2022-air-quality-ai-hcmc]]).

## Theoretical origins

- **Ensemble/hybrid learning** — combining multiple weak learners (Decision Table as the base
  classifier within AdaBoost/Bagging in L91) to reduce variance/bias relative to a single model.
- **Multi-Criteria Decision Analysis (MCDA)** — L91 combines an AI-generated susceptibility map
  with an AHP (Analytic Hierarchy Process)-generated consequences map to produce a complete RISK
  map, clearly separating "likelihood" and "consequence" as 2 independent risk components.
- **Time-series non-stationarity** — L92 emphasizes PM2.5 is a non-stationary time series
  (statistical properties change over time), requiring a dedicated training protocol rather than
  directly applying standard time-series models.

## Which course sources discuss it

- [[l91-pham-2020-flood-risk-ai-vietnam]] — 2 hybrid AI models (ABMDT, BDT) forecasting flood
  susceptibility in Quang Nam; BDT performs best (AUC=0.960).
- [[l92-rakholia-2022-air-quality-ai-hcmc]] — 4 ML models (SGD Regressor, CNN-LSTM, Gradient
  Boosting, Prophet) forecasting hourly PM2.5 at 6 HCMC stations; the SGD Regressor performs
  best.

## Debates/tensions worth remembering for the exam

- **The "best" model is not fixed — it depends on the problem**: both papers compare multiple
  algorithms and find different winners (a tree-based ensemble in L91; the simple linear SGD
  Regressor in L92 actually outperforms deep-learning CNN-LSTM) — the methodological lesson:
  there is NO universally "best" AI algorithm for every environmental-forecasting problem;
  benchmarking multiple models on the problem's own data is essential.
- **From academic model to real-world deployment**: both papers tie results to a concrete
  application (a flood-risk map for local disaster management in L91; the "Healthy Air" mobile
  early-warning app in L92) — unlike many purely theoretical/regression-based readings in other
  lectures, these are 2 technology cases designed FROM THE START for real-world deployment.

## Relevance to Vietnam

Both papers use Vietnam as their direct context (Quang Nam — a flood-prone key economic region
of Central Vietnam; HCMC — an 8.99-million-population metropolis) — illustrating that AI can be
applied RIGHT NOW in Vietnam for concrete risk-management problems, even though
[[l93-pham-2024-ai-development-vietnam-review]] shows Vietnam generally still lags the region on
AI investment/policy — these 2 papers demonstrate there are still successful technical "bright
spots" at the project/local level despite limited national AI policy.

## Links

- Lecture: [[ln9-ai-digitalization-economic-development-growth]] · [[overview]]
- Related concept: [[digital-transformation-and-productivity]] (LN9, the lecture's other cluster,
  the economic digitalization theme rather than technical application)
- Sources: [[l91-pham-2020-flood-risk-ai-vietnam]], [[l92-rakholia-2022-air-quality-ai-hcmc]]
