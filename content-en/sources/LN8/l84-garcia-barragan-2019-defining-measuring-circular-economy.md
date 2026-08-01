---
type: source
title: "L84 — García-Barragán, Eyckmans & Rousseau (2019) — Defining and Measuring the Circular Economy: A Mathematical Approach"
tags: [circular-economy, definition, mathematical-modeling, recycling, theory]
created: 2026-08-01
updated: 2026-08-01
status: complete
source_file: "raw/3. LECTURE NOTES/LN8 Circular economy inclusive and sustainable development/L84 EE-2019 García-Barragan Defining and measuring the circular economy.pdf"
---

# L84 — García-Barragán, J.F., Eyckmans, J. & Rousseau, S. (2019), Ecological Economics 157: 369–372

**Authors**: Juan F. García-Barragán (corresponding author), Johan Eyckmans, Sandra Rousseau —
all at CEDON, KU Leuven, Belgium. Part of the IECOMAT project (Integrated Economic Modeling of
Material Flows), funded by Belgian Science Policy (BELSPO). DOI: 10.1016/j.ecolecon.2018.12.003.
JEL: Q53.

> **Note on author name**: the filename in `raw/` has an encoding error ("Garca-Barragan") — the
> correct spelling per the paper's own cover page is **García-Barragán**.

## Abstract

> The circular economy literature lacks unambiguous definitions. We argue that a convenient
> solution to this problem consists of defining the circular economy as a function of a metric,
> departing from a well-defined material flow and value system. In particular, we propose a metric
> that is derived from maximizing the value to society of materials used in the production of
> commodities that provide services to consumers. Our metric can accommodate for recycling but
> also for alternative strategies like lifetime extension and new business models that intensify
> the productivity of commodities. Following our methodology, we provide unambiguous definitions
> for linear economy, circular economy, and circular economic growth.

**Summary (paraphrase)**: A purely theoretical/mathematical paper (no empirical data) —
proposes solving the problem that "CE lacks a clear definition" (Kirchherr et al. 2017 find
**114 different CE definitions**) by constructing a **mathematical metric** derived from a
dynamic optimization model of material flows, from which PRECISE definitions of "linear
economy," "circular economy," and "circular economic growth" follow.

## Research Questions

The CE literature lacks a clear, consistent definition — how can one construct an UNAMBIGUOUS
definition/metric for the circular economy, derived from a well-defined material-flow and value
system, rather than relying on simple recycling-rate indicators that do not correctly capture
CE's "value maximization" nature?

## Research Framework

Root problem: recycling and CE are related but distinct concepts — recycling is just ONE
industrial activity, while CE takes **material value maximization** as its explicit efficiency
benchmark; using recycling indicators directly as a proxy for CE is **methodologically
unsatisfactory**. A 3-step method: (1) start from a mathematically well-defined circular system
(a representative consumer maximizing utility over "functionalities" — services like mobility,
lighting, communication — rather than the physical products themselves, reflecting the trend
toward a service/functional economy); (2) characterize optimal material flows and build metrics
measuring linear and recycling activity; (3) use those metrics to give UNAMBIGUOUS definitions
of: a linear economy, a circular economy, a "more circular" economy, and circular economic
growth.

**Mathematical model**: a dynamic economy with a representative consumer, N types of virgin and
recycled materials, a concave production function combining virgin material + recycled material +
capital, an environmental-quality function reflecting the negative externality of material use.
Solving the Lagrangian optimization problem → first-order conditions → 2 auxiliary metrics: the
**optimal size of recycling activity** (Rᵢ,ⱼ,ₜ*) and the **optimal size of linear activity**
(Lᵢ,ⱼ,ₜ*) for each material/sector/period. The composite CE metric: **Cₜ* = Rₜ* − Lₜ*** (total
optimal recycling activity minus total optimal linear activity, weighted by an "intolerance
factor" μ). **The economy is defined as circular at time t if Cₜ* > 0**; linear if Cₜ* ≤ 0;
"more circular" if Cₜ* is larger at one time than another; positive circular economic growth if
the rate of change (Cτ* − Cₜ*)/Cₜ* > 0.

## Key Findings

- The proposed metric **encompasses both recycling and alternative strategies** (product
  lifetime extension, new business models intensifying commodity productivity) — not limited to
  material recycling like most other CE metrics in the literature.
- Economic interpretation of the first-order optimality condition: material flows maximize
  social welfare when the present + future marginal benefit (accounting for durability) EQUALS
  the social marginal cost of recycling (including resource scarcity + landfill-space impacts).
  Illustrative example: increased car-sharing raises vehicle utilization intensity → raises the
  "mobility functionality" productivity of the existing vehicle stock — this is exactly the
  "circular growth" logic the metric captures but a plain recycling rate cannot measure.
- The resulting definitions are "not perfect, but certainly unambiguous" — a core distinction
  from the 114 existing CE definitions in the literature, most of which are
  descriptive/qualitative.

## Conclusion

Departing from a mathematically well-defined circular system, constructing optimal metrics for
linear and recycling activity — fully incorporating the social value of economic activity —
provides a convenient foundation for defining currently ambiguous terms like circular economy,
linear economy, or more circular economy. The proposed definitions and metric can be further
expanded/refined; a future research direction is to **operationalize** this metric with
real-world data on a specific functionality system (e.g., mobility, housing, nutrition).

## Relevance to the Course/Vietnam

- **LN8's purest theoretical/mathematical paper** — rare across the whole course reading list
  (most other papers use panel regression or qualitative review); the closest in genre is
  [[l23-besley-ghatak-2010-property-rights]] (LN2, also theoretical but in narrative form rather
  than L84's explicit mathematical model).
- **Central to LN8's CE definitional debate**: shares the same starting point of "114 CE
  definitions" (Kirchherr et al. 2017) as [[l83-kirchherr-2018-barriers-circular-economy-eu]] and
  [[l85-saidani-2019-taxonomy-circular-economy-indicators]], but takes a COMPLETELY different
  resolution path: rather than accepting plurality and measuring empirically (L83) or building a
  flexible taxonomy for many indicators (L85), L84 tries to ELIMINATE ambiguity via a single
  mathematical definition — see [[circular-economy]] (Debates section).
- Vietnam relevance: an abstract theoretical model, hard to apply directly to a Vietnam-data
  essay, but the "functionality instead of physical product" framing (car-sharing, service
  instead of ownership) is a useful lens for analyzing emerging sharing-economy business models
  in Vietnamese cities (shared electric motorbikes, rental services...).

## Links

- Lecture: [[ln8-circular-economy-inclusive-sustainable-development]] · Concept:
  [[circular-economy]]
- Related: [[l83-kirchherr-2018-barriers-circular-economy-eu]],
  [[l85-saidani-2019-taxonomy-circular-economy-indicators]] (same root "114 CE definitions"
  problem, 3 different resolution paths), [[l23-besley-ghatak-2010-property-rights]] (LN2, same
  pure-theory genre)
