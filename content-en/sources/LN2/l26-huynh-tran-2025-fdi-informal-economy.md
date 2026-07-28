---
type: source
title: "L26 — Huynh & Tran (2025) — FDI, Economic Growth, Governance Quality and the Informal Economy"
tags: [fdi, governance, informal-economy, vietnam, panel-data, gmm]
created: 2026-07-23
updated: 2026-07-26
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L26 IE-2025 Huynh-Tran FDI economic growth governance quality and the informal economy.pdf"
---

# L26 — Huynh, C.M. & Tran, N.H. (2025), International Economics 183: 100619

**Authors**: Cong Minh Huynh (Becamex Business School, Eastern International University, Binh
Duong), Nam Hoai Tran (School of Finance, University of Economics Ho Chi Minh City — UEH).
JEL: F21, E26, H11, H26, O17. Received 09 October 2024, revised 09 May 2025, accepted 24 June
2025, online 26 June 2025. Partially funded by UEH.

> **Update 2026-07-26**: the full text (17 pages, resent by Prof. Heshmati) is now available —
> previously only the ScienceDirect abstract page was available. All content below is drawn
> from the full text.

## Summary

**Highlights**: (1) FDI inflows reduce the informal economy through the channels of economic
growth and governance quality; (2) the formal and informal economies are substitutes in
Vietnam; (3) poverty and unemployment are the primary drivers of informal economic activity;
(4) strategic fiscal policy and urbanization effectively shrink the informal sector; (5)
attracting FDI and improving governance can help formalize the economy.

An empirical study using panel data for **63 Vietnamese provinces, 2006–2021**, examines how
FDI affects the informal economy. Results: (i) FDI reduces the informal economy through two
channels — boosting growth and improving local governance quality; (ii) the formal and
informal economies are substitutes; (iii) local governance quality independently reduces
informal activity.

## Research Question & Methodology

- **Distinguishing definitions** (section 2.1): the shadow economy (Schneider & Enste 2000) =
  all economic activity intentionally hidden from authorities to avoid taxes/social
  insurance/regulation; the informal economy (ILO 2002, 2003) = unregistered activity (legal
  or illegal) operating outside the formal legal framework; the informal sector (La Porta &
  Shleifer 2014) = specifically unregistered enterprises that do not comply with labor/tax/
  business laws. The paper uses the **informal employment rate** (share of informal workers
  in total employment, sourced from the Vietnam General Statistics Office, VGSO) as a proxy
  for the informal economy, following the ILO framework.
- **Five competing theoretical frameworks**: modernization theory (FDI→technology/
  management/formal employment→reduces informality, Dunning 1981); dependency theory (Frank
  1966 — MNCs exploit cheap labor → expand informality); dualism theory (Fields 2004 — FDI
  both creates formal jobs and creates a fragmented labor market); institutional theory
  (North 1990 — FDI improves governance/the legal framework → shrinks informality); FDI
  spillover theory (Javorcik 2004); fiscal contract theory (Timmons 2005 — FDI→growth→better
  provision of public goods→higher tax morale).
- **Three hypotheses**: H1 — FDI reduces the informal economy through BOTH the growth and
  governance channels; H2 — economic growth reduces the informal economy; H3 — local
  governance quality reduces the shadow economy.
- **Empirical model**: INFOᵢₜ = α₀ + α₁FDIᵢₜ + α₂GROWᵢₜ + α₃GOVᵢₜ + α₄FDIᵢₜ·GROWᵢₜ +
  α₅FDIᵢₜ·GOVᵢₜ + Xᵢₜ'δ + μᵢ + λₜ + vᵢₜ — the interaction coefficients FDI×GROW and FDI×GOV
  identify the transmission CHANNEL (α₁, α₄, α₅ expected to be negative).
- **Variables** (sourced from VGSO/PAPI): INFO = informal employment rate (%); FDI = total
  foreign direct investment capital (billion VND); GROW = provincial GDP per capita; GOV =
  the PAPI index (Provincial Governance and Public Administration Performance Index), with 6
  dimensions: vertical accountability, participation at the grassroots level, transparency,
  control of corruption, public administrative procedures, and public service delivery.
  Control variables: FISCAL (expenditure decentralization), URB (urbanization), POV (poverty
  rate), UNEM (unemployment), HUMAN (% of high-school graduates), POP (population growth).
- **Data**: 63 Vietnamese provinces, 2006–2021. INFO averages **75.622%** (min 31.42%, max
  91.12%, n=452 — very large regional variation). FDI averages 3,722.383 billion VND (min 0,
  max 68,587.5, n=553) — using the **arcsine log** transformation (Bellemare & Wichman 2020)
  to retain observations where FDI=0 while still approximating a log transform.
- **Econometric methodology**: tests for cross-sectional dependency (Pesaran's CD test 2004)
  → stationarity tests via CADF (Pesaran 2007) — GROW is stationary only after first
  differencing. Baseline estimation: pooled OLS, random effects (RE), fixed effects (FE) —
  selected via the Lagrangian multiplier test and the Hausman test (FE is selected). Main
  approach to endogeneity: two-step **System GMM (SGMM, Blundell & Bond 1998)**, using
  **forward-orthogonal deviations (FOD)** instead of first-differencing to handle the
  unbalanced panel (Roodman 2009) — reducing data loss from missing observations.
  Instruments: the t-1 lag of the endogenous variable; a total of 25 instruments (basic
  specification) or 37 instruments (full specification, ≤63 = number of provinces, avoiding
  instrument proliferation). Sargan and Hansen J tests confirm instrument validity, with no
  overidentification.
- **Authors' claimed key contribution**: a **provincial-level** dataset (rather than
  national-level, as in most existing literature) — capturing regional disparities in
  informal employment, FDI inflows, growth, and governance quality within a single country.

## Key Results

- **FDI reduces the informal economy through two simultaneous channels** (Table 4, FE & SGMM,
  both specifications): the FDI coefficient is negative, significant at 1–5% (SGMM: −28.3 to
  −31.7); the interaction coefficient **FDI×GROW** is negative and significant (SGMM: −4.86 to
  −6.28), and **FDI×GOV** is negative and significant (SGMM: −7.45 to −8.34) — confirming that
  BOTH channels — boosting growth AND improving governance — operate simultaneously,
  consistent with both modernization theory and institutional theory.
- **GROW and GOV independently also significantly reduce INFO**: the GROW coefficient is
  negative (SGMM: −16.6 to −18.6), and the GOV coefficient is negative and the LARGEST in the
  model (SGMM: −36.6 to −40.7) — governance quality is the strongest of the key variables.
- **The formal and informal economies are substitutes**: expansion of the formal sector draws
  resources/labor away from the informal sector — most pronounced in provinces with high FDI
  and strong institutions.
- **Control variables** (Table 4): FISCAL is negative and significant (better fiscal
  decentralization → less informality); URB is negative and significant (urbanization → less
  informality); HUMAN is negative and significant (higher human capital → less informality);
  conversely, **POV is positive and significant** (poverty → more informality), **UNEM is
  positive and significant** (unemployment → more informality), and **POP is positive and
  significant** (rapid population growth → more informality, as labor supply outpaces formal
  job creation).
- **Two robustness checks**: (1) using arcsinh(FDI) instead of log — coefficients retain the
  same magnitude/direction (Table B); (2) using **TAX** (the ratio of tax revenue to
  provincial GDP, sign reversed) as an alternative proxy for the informal economy — FDI
  remains associated with higher tax revenue, reconfirming the main conclusion from a
  macro-fiscal perspective rather than relying solely on employment data (Table C).
- **Provincial distribution maps** (Appendix Fig. 2A–D): high-FDI provinces (Ho Chi Minh
  City, Hanoi, Binh Duong, Dong Nai, Ba Ria-Vung Tau, Hai Phong, Bac Ninh) have higher growth,
  better governance, and lower informal employment — concentrated in the Red River Delta and
  the Southeast region. Informal employment is highest in the Northern mountainous region,
  the Central Highlands, and some North Central provinces. Best governance: Da Nang, Quang
  Ninh, Binh Duong.

## Five Policy Recommendations (Section 6)

1. Prioritize attracting FDI — maintain macroeconomic stability, simplify procedures for
   foreign investors, ensure transparency in investment approval processes, and channel FDI
   toward formal economic activity.
2. Strengthen local institutional frameworks — enhance grassroots participation, vertical
   accountability, transparency, and public administrative procedures; reduce corruption and
   improve public services to build public trust.
3. Promote economic growth, particularly in high-informality regions — expand education,
   infrastructure, and formal job opportunities; invest in human capital (vocational
   training, skills).
4. Use fiscal policy and urbanization — reduce the tax burden on small businesses, simplify
   tax compliance; invest in urban/health/education infrastructure.
5. Targeted social safety net programs (since poverty and unemployment are the primary
   drivers) — create formal jobs in rural/disadvantaged areas, and expand the social safety
   net.

## Significance for the Course/Vietnam

- **The paper with the most direct, provincial-level Vietnamese data** in all of LN2 — the
  clearest empirical application of [[institutions]] (via the "local governance quality"
  proxy — the PAPI index) in Vietnam, of top importance for an essay. The SGMM + FOD method
  for an unbalanced panel is a technique worth learning for Vietnamese provincial-level data
  (which often has missing observations for certain years/provinces).
- The comparison of two theories (modernization vs. institutional) is a good framing model
  for the literature review section of an essay — rather than choosing one theory, it tests
  both channels simultaneously via interaction coefficients.
- Directly related to Nunn (2019) on the impact of FDI/globalization in Vietnam (though Nunn
  discusses trade policy/antidumping — a harm — while this paper discusses FDI — a benefit) —
  they can be compared in a synthesis on the role of globalization in Vietnam's
  informal/formal economy.
- The provincial distribution map (Fig. 2) is good visual data for illustrating Vietnam's
  regional inequality in an essay — related to [[unconditional-convergence]] on convergence
  within a single country.

## Links

- Lecture: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]]
  (application of provincial-level local governance quality in Vietnam)
