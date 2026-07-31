---
type: source
title: "L26 — Huynh & Tran (2025) — FDI, Economic Growth, Governance Quality and the Informal Economy"
tags: [fdi, governance, informal-economy, vietnam, panel-data, gmm]
created: 2026-07-23
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L26 IE-2025 Huynh-Tran FDI economic growth governance quality and the informal economy.pdf"
---

# L26 — Huynh, C.M. & Tran, N.H. (2025), International Economics 183: 100619

**Authors**: Cong Minh Huynh (Becamex Business School, Eastern International University, Binh
Duong), Nam Hoai Tran (School of Finance, University of Economics Ho Chi Minh City — UEH).
JEL: F21, E26, H11, H26, O17. Received 09/10/2024, revised 09/05/2025, accepted 24/06/2025,
online 26/06/2025. Partially funded by UEH.

> **Update 2026-07-26**: the full text (17 pages, resent by Prof. Heshmati) is now available —
> previously only the ScienceDirect abstract page was on hand. All content below is drawn from
> the full text.

## Abstract

> This paper empirically investigates how foreign direct investment (FDI) inflows affect the
> informal economy by using a panel data set of 63 provinces in Vietnam from 2006 to 2021. The
> results show that: i) FDI inflows reduce the informal economy through the channels of
> boosting economic growth and improving local governance quality; ii) the formal economy and
> the informal economy are substitutes; iii) local governance quality reduces informal
> activities. Additionally, poverty and unemployment emerge as the primary forces driving
> Vietnam's informal economic activities, while strategic fiscal policy and urbanization can
> effectively shrink the informal sector.

**Summary (interpretation)**: **Highlights**: (1) FDI inflows reduce the informal economy via
the growth and governance-quality channels; (2) formal and informal economies are substitutes
in Vietnam; (3) poverty + unemployment are the primary drivers of informal economic activity;
(4) strategic fiscal policy + urbanization effectively shrink the informal sector; (5)
attracting FDI + improving governance can help formalize the economy.

## Research Questions

How does FDI affect the informal economy? Theoretically, FDI's impact on informal activity is
inconclusive — the literature has arguments both for FDI reducing informality (via technology/
governance/formal jobs) and for FDI increasing informality (MNCs exploiting cheap labor, tax
evasion). The paper empirically tests this question using Vietnamese provincial panel data.

## Research Framework

**Distinguishing definitions** (section 2.1): the shadow economy (Schneider & Enste 2000) =
economic activity intentionally hidden from authorities to avoid taxes/social insurance/
regulation; the informal economy (ILO 2002, 2003) = unregistered activity (legal or illegal)
outside the formal legal framework; the informal sector (La Porta & Shleifer 2014) =
specifically unregistered enterprises not complying with labor/tax/business law. The paper
uses the **informal employment rate** (share of informal workers/total labor, VGSO source) as
a proxy for the informal economy, per the ILO framework.

**5 competing theoretical frameworks**: modernization theory (FDI→technology/governance/formal
jobs→reduces informality, Dunning 1981); dependency theory (Frank 1966 — MNCs exploit cheap
labor → expand informality); dualism theory (Fields 2004 — FDI both creates formal jobs and a
fragmented labor market); institutional theory (North 1990 — FDI improves governance/legal
framework → shrinks informality); fiscal contract theory (Timmons 2005 — FDI→growth→better
public goods→higher tax morale).

## Hypothesis

- **H1**: FDI reduces the informal economy through BOTH the growth AND governance channels.
- **H2**: Economic growth reduces the informal economy.
- **H3**: Local governance quality reduces the shadow economy.

## Data

63 Vietnamese provinces, 2006–2021. Variables (VGSO/PAPI sources): INFO = informal employment
rate (%), averaging **75.622%** (min 31.42%, max 91.12%, n=452 — very large regional
variation); FDI = total foreign investment capital (billion VND), averaging 3,722.383 billion
VND (min 0, max 68,587.5, n=553); GROW = provincial GDP/capita; GOV = the PAPI index
(Provincial Governance and Public Administration Performance Index), 6 dimensions: vertical
accountability, grassroots participation, transparency, control of corruption, public
administrative procedures, public services. Control variables: FISCAL (expenditure
decentralization), URB (urbanization), POV (poverty rate), UNEM (unemployment), HUMAN (% high
school graduates), POP (population growth).

## Methodology

**Empirical model**: INFOᵢₜ = α₀ + α₁FDIᵢₜ + α₂GROWᵢₜ + α₃GOVᵢₜ + α₄FDIᵢₜ·GROWᵢₜ +
α₅FDIᵢₜ·GOVᵢₜ + Xᵢₜ'δ + μᵢ + λₜ + vᵢₜ — the FDI×GROW and FDI×GOV interaction coefficients
identify the transmission CHANNEL (α₁, α₄, α₅ expected negative). FDI uses the **arcsine log**
transformation (Bellemare & Wichman 2020) to retain FDI=0 observations while approximating a
log-transform.

Tests cross-sectional dependency (Pesaran's CD test 2004) → stationarity via CADF (Pesaran
2007) — GROW is stationary only after first differencing. Baseline estimation: pooled OLS,
random effects (RE), fixed effects (FE) — selected via the Lagrangian multiplier test and the
Hausman test (FE selected). Main endogeneity approach: two-step **System GMM (SGMM, Blundell &
Bond 1998)**, using **forward-orthogonal deviations (FOD)** instead of first-differencing for
the unbalanced panel (Roodman 2009). Instruments: the t-1 lag of the endogenous variable; 25
instruments (basic specification) or 37 (full specification, ≤63 = number of provinces,
avoiding instrument proliferation). Sargan + Hansen J tests confirm instrument validity, no
overidentification.

## Regression/Estimation Results

- **FDI reduces the informal economy through 2 simultaneous channels** (Table 4, FE & SGMM):
  the FDI coefficient is negative, significant at 1–5% (SGMM: −28.3 to −31.7); the interaction
  coefficient **FDI×GROW** is negative and significant (SGMM: −4.86 to −6.28), and **FDI×GOV**
  is negative and significant (SGMM: −7.45 to −8.34) — confirming BOTH the growth-boosting AND
  governance-improving channels operate simultaneously, matching both modernization theory and
  institutional theory.
- **GROW and GOV independently also significantly reduce INFO**: the GROW coefficient is
  negative (SGMM: −16.6 to −18.6), and the GOV coefficient is negative and the LARGEST in the
  model (SGMM: −36.6 to −40.7) — governance quality is the strongest of the key variables.
- **Control variables** (Table 4): FISCAL negative and significant (better fiscal
  decentralization → less informality); URB negative and significant (urbanization → less
  informality); HUMAN negative and significant (higher human capital → less informality);
  conversely **POV positive and significant** (poverty → more informality), **UNEM positive
  and significant** (unemployment → more informality), **POP positive and significant** (rapid
  population growth → more informality).

## Robustness Checks

(1) Using **arcsinh(FDI)** instead of log — coefficients retain the same magnitude/direction
(Table B); (2) using **TAX** (the ratio of tax revenue to provincial GDP, sign reversed) as an
alternative informal-economy proxy — FDI remains linked to higher tax revenue, reconfirming
the main conclusion from a macro-fiscal angle rather than employment data alone (Table C).

## Key Findings

**Formal/informal economies are substitutes**: formal-sector expansion → draws
resources/labor away from the informal sector — most pronounced in high-FDI, strong-institution
provinces. **Provincial distribution map** (Appendix Fig. 2A–D): high-FDI provinces (HCMC,
Hanoi, Binh Duong, Dong Nai, Ba Ria-Vung Tau, Hai Phong, Bac Ninh) have higher growth, better
governance, lower informal employment — concentrated in the Red River Delta and the Southeast.
Informal employment is highest in the Northern mountains, Central Highlands, some North
Central provinces. Best governance: Da Nang, Quang Ninh, Binh Duong.

## Conclusion

5 policy recommendations (section 6): (1) Prioritize FDI attraction — macro stability,
simplified procedures for foreign investors, transparent investment approval, channeling FDI
into formal activity. (2) Strengthen local institutional frameworks — grassroots
participation, vertical accountability, transparency, public administrative procedures;
reduce corruption, improve public services. (3) Promote economic growth, especially in
high-informality regions — expand education, infrastructure, formal job opportunities; invest
in human capital. (4) Use fiscal policy + urbanization — reduce the tax burden on small
businesses, simplify tax compliance; invest in urban/health/education infrastructure. (5)
Targeted social safety net programs (since poverty + unemployment are the primary drivers) —
create formal jobs in rural/disadvantaged areas, expand the safety net.

## Relevance to the Course/Vietnam

- **The paper with the most direct, provincial-level Vietnamese data** across all of LN2 —
  [[institutions]]'s clearest empirical application (via the "local governance quality" proxy
  — the PAPI index) in Vietnam, of top essay relevance. The SGMM + FOD method for an
  unbalanced panel is a worthwhile technique for Vietnamese provincial data (often missing
  observations for some years/provinces).
- Contrasting 2 theories (modernization vs. institutional) is a good framing template for an
  essay's literature review — testing both channels simultaneously via interaction
  coefficients rather than picking one theory.
- Directly related to Nunn (2019) on FDI/globalization's impact on VN (though Nunn discusses
  trade policy/antidumping — harm, while this paper discusses FDI — benefit) — comparable in a
  synthesis on globalization's role in VN's informal/formal economy.
- The provincial distribution map (Fig. 2) is good visual data illustrating VN's regional
  inequality in an essay — related to [[unconditional-convergence]] on within-country
  convergence.

## Links

- Lecture: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]]
  (provincial-level local governance quality application in VN)
