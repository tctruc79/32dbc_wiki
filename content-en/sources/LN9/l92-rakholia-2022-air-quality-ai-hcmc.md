---
type: source
title: "L92 — Rakholia, Le, Vu, Ho & Carbajo (2022) — AI-Based Air Quality PM2.5 Forecasting Models for Developing Countries: A Case Study of Ho Chi Minh City, Vietnam"
tags: [artificial-intelligence, machine-learning, air-quality, pm2-5, forecasting, vietnam, hcmc]
created: 2026-08-07
updated: 2026-08-07
status: complete
source_file: "raw/3. LECTURE NOTES/LN9 AI digitalization economic development and growth/L92 UC-2022 Rakholia et al. AI-based air quality PM2.5 forecasting modela for HCMC.pdf"
---

# L92 — Rakholia, R., Le, Q., Vu, K., Ho, B.Q. & Carbajo, R.S. (2022), Urban Climate, 46, 101315

**Authors**: Rajnish Rakholia, Quan Le, Ricardo Simon Carbajo (CeADAR — Ireland's National Centre
for Applied Artificial Intelligence, University College Dublin); Khue Vu, Bang Quoc Ho (Institute
for Environment and Resources & Vietnam National University, HCMC). An Ireland–Vietnam
collaboration, the "HealthyAir" project, funded by the Irish Research Council + Ireland's
Department of Foreign Affairs via the COALESCE programme (COALESCE/2020/31).

## Abstract

> Outdoor air pollution damages the climate and causes many diseases, including cardiovascular
> diseases, respiratory infections, and lung damage. In particular, Particulate Matter (PM2.5) is
> considered a hazardous air pollutant to human health. Accurate hourly forecasting of PM2.5
> concentrations is thus of significant importance for public health, helping the citizens to plan
> the measures to alleviate the harmful effects of air pollution on health. This study analyses and
> discusses the temporal characteristics of PM2.5 at different locations in Ho Chi Minh City
> (HCMC), Vietnam - an economic center and a megacity in a developing country with a population of
> 8.99 million people. We developed several AI-based one-shot multi-step PM2.5 forecasting models,
> with both an hourly forecast granularity (1 h to 24 h) and a 24-h rolling mean. These Machine
> Learning algorithms include Stochastic Gradient Descent Regressor, hybrid 1D CNN-LSTM, eXtreme
> Gradient Boosting Regressor, and Prophet. We collected the data from six monitoring stations
> installed by the HealthyAir project partners at different locations in HCMC, including traffic,
> residential and industrial areas in the city. In addition, we developed a suitable model training
> protocol using data from a short period to address the non-stationarity of PM2.5 time series. Our
> proposed PM2.5 forecasting models achieve state-of-the-art accuracy and will be deployed in our
> HealthyAir mobile app to warn HCMC citizens of air pollution issues in the city.

**Summary (paraphrase)**: An applied technical paper, comparing 4 ML algorithms for hourly PM2.5
forecasting across 6 HCMC monitoring stations, designing a dedicated training protocol (a rolling
3-month window) to handle air pollution's non-stationarity — results feed directly into a real
community early-warning app.

## Research Questions

Which machine-learning model most accurately forecasts hourly (1–24h) and 24-h rolling-mean PM2.5
concentrations in HCMC, and how can the inherent non-stationarity of PM2.5 time series be handled
to improve forecast accuracy?

## Research Framework

PM2.5 forecasting is hard due to strong spatiotemporal variation and dependence on many
environmental factors; traditional statistical models underperform AI models when handling
nonlinearity/time-varying data. Prior literature (Table 1 in the paper, surveying 9 studies from
Beijing/Shanghai/Tehran/China) mostly forecasts DAILY averages, single-step, single-location — a
practical limitation for citizens who need to know the forecast for the NEXT HOUR and for MULTIPLE
areas within the same city. This is the gap the paper fills.

## Data

6 monitoring stations installed by the HealthyAir project (from 2/2021), covering all 3 area
types: traffic (stations 2, 5), residential (station 4), industrial (station 3), and mixed
(station 1: industry+traffic+residential; station 6: traffic+residential). Data on PM2.5 + TSP +
SO2/O3/NO2/CO gases + temperature/humidity, sampled every minute then aggregated to hourly means,
period 2/2021–12/2021 (~11 months, overlapping HCMC's COVID-19 lockdown period). Anomalous values
(>20,000 or <-10 μg/m³) and outliers (>200 μg/m³ AND 3x the prior hour) removed; data split into
train/validation/test at an 80:10:10 ratio.

## Methodology

**4 algorithms compared**: (1) **XGBoost Regressor** (gradient-boosted decision trees,
multi-output wrapper); (2) **SGD Regressor** (Stochastic Gradient Descent, linear regression with
L2 regularization, multi-output wrapper); (3) **hybrid 1D CNN-LSTM** (1D CNN extracting features,
LSTM handling the time series' long-term dependencies); (4) **Prophet** (an additive
growth+seasonality decomposition model, Taylor & Letham 2018). Because PM2.5 is strongly
non-stationary and only ~1 year of data was available, the authors did NOT train on the full year
but sampled multiple ~3-month subsets uniformly, keeping training data CLOSE to test data in time
— this is a protocol innovation, not a new algorithm. Evaluated via RMSE and MAE.

## Regression/Estimation Results

- **Raw hourly PM2.5 forecasting (Table 5, averaged across all 6 stations)**: **SGD Regressor
  performs best** (RMSE=7.74 μg/m³, MAE=5.75 μg/m³), beating Prophet (RMSE=8.47/MAE=5.89), XGBoost
  (RMSE=8.73/MAE=6.28), and 1D CNN-LSTM (RMSE=8.86/MAE=6.65 — the WEAKEST despite being the most
  complex deep-learning model).
- **24-h rolling-mean forecasting (Table 6)**: **SGD Regressor again performs best**
  (RMSE=3.38 μg/m³, MAE=2.64 μg/m³), beating 1D CNN-LSTM (RMSE=4.12/MAE=3.25), XGBoost
  (RMSE=4.31/MAE=3.36), and Prophet (RMSE=5.55/MAE=4.21 — the WEAKEST at this task). Rolling-mean
  errors are MARKEDLY LOWER than raw forecasting (since the rolling mean reduces data variation).
- **Spatiotemporal characteristics (Table/Fig. 3)**: the HIGHEST annual mean PM2.5 is at station 4
  (23.1 μg/m³, a poor residential area using wood/charcoal/gas for cooking, 4.6x the WHO
  guideline), followed by station 3 (the Tan Binh industrial zone), then station 1 (near Xa Lo Ha
  Noi highway). Pollution is higher September–April (dry season), lower May–August (monsoon);
  peaking at 6–8 AM and 5–6 PM (cooking/commute hours).

## Key Findings

**The SGD Regressor — the simplest linear model among the 4 — consistently outperforms both the
complex deep-learning model (1D CNN-LSTM) and Prophet, at BOTH forecasting tasks (hourly and
rolling-mean)**. A plausible reason: the small training sets (~3 months each, due to the
non-stationarity protocol) make the complex model (CNN-LSTM) more prone to overfitting than a
simple linear model; Prophet is optimized for series with STRONG seasonality, so it underperforms
on PM2.5 (highly volatile, weak seasonality).

## Conclusion

Air pollution is a serious problem, more urgent in large developing-country cities like HCMC (8.99
million people, only 1 monitoring station before 2021). The HealthyAir project installed 6
stations, analyzed PM2.5's spatiotemporal characteristics, and developed a series of hourly + 24-h
rolling-mean forecasting models. To address non-stationarity, the authors designed a new training
protocol (short ~3-month data windows close to the test period in time). The SGD Regressor
consistently outperforms every other model including the popular Prophet — achieving
state-of-the-art accuracy, to be deployed in the HealthyAir mobile app for early warnings to HCMC
citizens. Future directions: adding meteorological/other pollutant data, exploiting long-term
seasonality once more years of data are available (without lockdown periods).

## Implications for the Course/Vietnam

- Shares a methodology/goal cluster with [[l91-pham-2020-flood-risk-ai-vietnam]] — both use AI/ML
  to forecast/map concrete environmental risk in Vietnam, serving real
  disaster-management/public-health purposes — see [[ai-for-environmental-risk-vietnam]].
  Difference: L91 forecasts SPACE (a static risk map), L92 forecasts TIME (a dynamic hourly PM2.5
  series).
- **A memorable methodological lesson for the exam**: a SIMPLE model (the linear SGD Regressor)
  outperforms a COMPLEX one (deep-learning 1D CNN-LSTM) when the training set is small —
  counterintuitive relative to the common expectation that "deep learning is always better," a
  good debate point for AI/ML methodology-comparison questions in the course.
- Vietnam is the direct context — an Ireland-Vietnam international collaboration (CeADAR-UCD ×
  VNU-HCM), foreign funding (the Irish Research Council) rather than a domestic fund like
  [[l91-pham-2020-flood-risk-ai-vietnam]] (NAFOSTED) — 2 different funding models for applied AI
  research in Vietnam.

## Links

- Lecture: [[ln9-ai-digitalization-economic-development-growth]] · Concept:
  [[ai-for-environmental-risk-vietnam]]
- Related: [[l91-pham-2020-flood-risk-ai-vietnam]], [[l93-pham-2024-ai-development-vietnam-review]]
