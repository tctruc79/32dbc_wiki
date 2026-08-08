---
type: source
title: "L91 — Pham, Luu, Phong et al. (2020) — Flood Risk Assessment Using Hybrid Artificial Intelligence Models Integrated with Multi-Criteria Decision Analysis in Quang Nam Province, Vietnam"
tags: [artificial-intelligence, machine-learning, flood-risk, disaster-management, vietnam, mcda]
created: 2026-08-07
updated: 2026-08-07
status: complete
source_file: "raw/3. LECTURE NOTES/LN9 AI digitalization economic development and growth/L91 JH-2020 Pham Flood risk assessment using hybrid AI models Vietnam.pdf"
---

# L91 — Pham, B.T., Luu, C., Phong, T.V., Nguyen, H.D., Le, H.V., Tran, T.Q., Ta, H.T. & Prakash, I. (2020), Journal of Hydrology, 592, 125815

⚠️ **Limited source**: the PDF in `raw/` is a printed ScienceDirect landing page (full Highlights +
Abstract + Introduction, plus short "Section snippets" excerpts of Study area/Conceptual framework/
Important factors/Discussion/Concluding remarks, each cut off by "…") — NOT the full paywalled
text (the detailed Table 2 "important factors," the full AUC results table, in-depth discussion).
This page uses only what is readable, without inferring the cut-off figures.

**Authors**: Binh Thai Pham, Chinh Luu, Tran Van Phong, Huu Duy Nguyen, Hiep Van Le, Thai Quoc
Tran, Huong Thu Ta, Indra Prakash. Funding: the Vietnam National Foundation for Science and
Technology Development (NAFOSTED), grant 105.08-2019.03.

## Abstract

> Flood risk assessment is an important task for disaster management activities in flood-prone
> areas. Therefore, it is crucial to develop accurate flood risk assessment maps. In this study, we
> proposed a flood risk assessment framework which combines flood susceptibility assessment and
> flood consequences (human health and financial impact) for developing a final flood risk
> assessment map using Multi-Criteria Decision Analysis (MCDA) method. Two hybrid Artificial
> Intelligence (AI) models, namely ABMDT (AdaBoost-DT) and BDT (Bagging-DT) were developed with
> Decision Table (DT) as a base classifier for creating a flood susceptibility map. We used 847
> flood locations of major flooding events in the years 2007, 2009 and 2013 in Quang Nam province
> of Vietnam; and 14 flood influencing factors of topography, geology, hydrology and environment to
> construct and validate the hybrid AI models. Various statistical measures were used to validate
> the models, including the Area Under Receiver Operating Characteristic (ROC) Curve called AUC.
> Results show that all the proposed models performed well, but the performance of the BDT model
> (AUC = 0.96) is the best in comparison to other models ABMDT (AUC = 0.953) and single DT
> (AUC = 0.929). Therefore, the flood susceptibility map produced by the BDT model was used to
> combine with a flood consequences map to develop a reliable flood risk assessment map for the
> study area. The final flood risk map can provide a useful source for better flood hazard
> management of the study area, and the proposed framework and models can be applied to other
> flood-prone areas.

**Summary (paraphrase)**: An applied technical paper — combining 2 hybrid AI models with the AHP
method (an MCDA branch) to create a 2-layer flood risk map (likelihood × consequence) for a
specific Vietnamese province, with the novelty being the FIRST integration of AI/ML with MCDA for
this problem.

## Research Questions

Can a more accurate flood risk assessment map be built by combining a hybrid AI model (estimating
flood likelihood) with a traditional MCDA method (estimating flood consequences), and which
hybrid AI model (ABMDT or BDT) performs best?

## Research Framework

Flood risk = probability of occurrence × negative consequences (Schanze 2006); flood risk can be
managed by reducing consequences (de Moel 2015). Prior literature used pure MCDA (e.g., AHP —
Ozturk & Batuk 2011; Kappes et al. 2012) but faced limitations when the number of criteria/data
grows large, making objective weight estimation difficult (prone to expert subjective bias). The
paper proposes integrating AI/ML to automatically estimate weights, reducing human bias — this is
the main NOVELTY relative to prior pure-MCDA studies.

## Data

847 flood locations from major flood events in 2007/2009/2013 in Quang Nam province (Central
Vietnam, bordering Danang to the North, the Dung Quat Economic Zone to the South, area
~1,057,474 ha, complex terrain from high mountains in the West to deltas/coastal areas in the
East); 14 flood-influencing factors across 4 groups: topography, geology, hydrology, environment
(Table 2 detail is cut off in the available PDF — only the first factor is readable: elevation
weight W=0.7235, followed by rainfall, cut off). Feature selection via the Relief-F technique
(Yang et al. 2011).

## Methodology

Combines 2 hybrid AI models as the flood-susceptibility model: **ABMDT** (AdaBoost combined with
Decision Table as the base classifier) and **BDT** (Bagging combined with Decision Table);
compared against a single DT (no ensembling) as the baseline. The flood-susceptibility map (from
the best AI model) is combined with a flood-consequences map (built using **AHP** — Analytic
Hierarchy Process, a common MCDA method) to produce the complete flood RISK map. Tools: Weka
(AI/ML modeling) and ArcGIS (spatial analysis/visualization). Model validation via AUC (Area
Under the ROC Curve).

## Regression/Estimation Results

**BDT (Bagging-DT) is the best model: AUC=0.960**, beating ABMDT (AdaBoost-DT, AUC=0.953) and a
single DT (AUC=0.929) — all 3 models achieve GOOD performance (AUC>0.9), but the Bagging ensemble
edges out AdaBoost and clearly outperforms the non-ensembled single DT.

## Key Findings

Hybrid AI models (especially BDT) perform well at forecasting flood susceptibility in Quang Nam;
INTEGRATING AI with MCDA (rather than using pure MCDA as in prior literature) allows for more
OBJECTIVE weighting of influencing factors (reducing expert bias) while retaining the familiar
multi-criteria decision-making framework for consequences.

## Conclusion

The authors developed a soft-computing-based flood risk framework, in which the flood risk map is
generated by combining a flood-susceptibility map (the BDT hybrid AI model) and a
flood-consequences map (the AHP technique), applied to Quang Nam province, Vietnam. Validation
results confirm all proposed models perform well for building the flood-susceptibility map; the
framework/models can be applied to other flood-prone areas beyond Quang Nam.

## Implications for the Course/Vietnam

- **A direct example of applied AI in Vietnam** — in contrast to the general picture in
  [[l93-pham-2024-ai-development-vietnam-review]] (Vietnam lags on national-level AI investment/
  policy), this paper shows successful technical AI application research still occurs at the
  project/local level, funded by a domestic science fund (NAFOSTED).
- Shares a methodology/goal cluster with [[l92-rakholia-2022-air-quality-ai-hcmc]] — both use
  AI/ML to forecast/map concrete environmental risk in Vietnam, serving real
  disaster-management/public-health purposes — see [[ai-for-environmental-risk-vietnam]].
- Connects to [[l43-le-2020-floods-household-welfare]] (LN4) — the same Vietnamese flooding topic
  but an entirely different angle: L91 is a FORECASTING/risk-mapping tool used before a flood
  occurs (prevention), L43 measures socioeconomic IMPACT after a flood has occurred (impact) — the
  two papers complement each other across the full disaster-risk-management cycle.

## Links

- Lecture: [[ln9-ai-digitalization-economic-development-growth]] · Concept:
  [[ai-for-environmental-risk-vietnam]]
- Related: [[l92-rakholia-2022-air-quality-ai-hcmc]], [[l43-le-2020-floods-household-welfare]]
  (LN4), [[l93-pham-2024-ai-development-vietnam-review]]
