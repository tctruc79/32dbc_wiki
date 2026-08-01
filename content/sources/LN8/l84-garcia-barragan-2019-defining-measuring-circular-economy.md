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

**Tác giả**: Juan F. García-Barragán (tác giả liên hệ), Johan Eyckmans, Sandra Rousseau — cả 3 tại
CEDON, KU Leuven, Bỉ. Bài thuộc dự án IECOMAT (Integrated Economic Modeling of Material Flows), tài
trợ bởi Belgian Science Policy (BELSPO). DOI: 10.1016/j.ecolecon.2018.12.003. JEL: Q53.<br><span
class="en">**Authors**: Juan F. García-Barragán (corresponding author), Johan Eyckmans, Sandra
Rousseau — all at CEDON, KU Leuven, Belgium. Part of the IECOMAT project (Integrated Economic
Modeling of Material Flows), funded by Belgian Science Policy (BELSPO). DOI:
10.1016/j.ecolecon.2018.12.003. JEL: Q53.</span>

> **Lưu ý tên tác giả**: tên file trong `raw/` bị lỗi mã hóa ("Garca-Barragan") — chính tả đúng
> theo trang bìa bài báo là **García-Barragán**.<br><span class="en">**Note on author name**: the
> filename in `raw/` has an encoding error ("Garca-Barragan") — the correct spelling per the
> paper's own cover page is **García-Barragán**.</span>

## Abstract

> The circular economy literature lacks unambiguous definitions. We argue that a convenient
> solution to this problem consists of defining the circular economy as a function of a metric,
> departing from a well-defined material flow and value system. In particular, we propose a metric
> that is derived from maximizing the value to society of materials used in the production of
> commodities that provide services to consumers. Our metric can accommodate for recycling but
> also for alternative strategies like lifetime extension and new business models that intensify
> the productivity of commodities. Following our methodology, we provide unambiguous definitions
> for linear economy, circular economy, and circular economic growth.

**Tóm tắt (diễn giải)**: Bài lý thuyết/toán học thuần túy (không có dữ liệu thực nghiệm) — đề xuất
giải quyết vấn đề "CE thiếu định nghĩa rõ ràng" (Kirchherr et al. 2017 tìm thấy **114 định nghĩa CE
khác nhau**) bằng cách xây dựng **một chỉ số toán học (metric)** xuất phát từ mô hình tối ưu hóa
động (dynamic optimization) dòng vật liệu, từ đó suy ra định nghĩa CHÍNH XÁC cho "kinh tế tuyến
tính", "kinh tế tuần hoàn" và "tăng trưởng kinh tế tuần hoàn".<br><span class="en">**Summary
(paraphrase)**: A purely theoretical/mathematical paper (no empirical data) — proposes solving the
problem that "CE lacks a clear definition" (Kirchherr et al. 2017 find **114 different CE
definitions**) by constructing a **mathematical metric** derived from a dynamic optimization model
of material flows, from which PRECISE definitions of "linear economy," "circular economy," and
"circular economic growth" follow.</span>

## Research Questions

Literature CE thiếu định nghĩa rõ ràng, nhất quán — làm sao xây dựng một định nghĩa/chỉ số KHÔNG mơ
hồ cho circular economy, xuất phát từ một hệ thống dòng vật liệu và giá trị được xác định rõ ràng,
thay vì dựa vào các chỉ số tái chế (recycling rate) đơn thuần vốn không phản ánh đúng bản chất "tối
đa hóa giá trị" của CE?<br><span class="en">The CE literature lacks a clear, consistent
definition — how can one construct an UNAMBIGUOUS definition/metric for the circular economy,
derived from a well-defined material-flow and value system, rather than relying on simple
recycling-rate indicators that do not correctly capture CE's "value maximization" nature?</span>

## Research Framework

Vấn đề gốc: recycling và CE là 2 khái niệm liên quan nhưng khác nhau — recycling chỉ là MỘT hoạt
động công nghiệp, còn CE lấy **tối đa hóa giá trị vật liệu** làm chuẩn hiệu quả tường minh; dùng
trực tiếp chỉ số tái chế làm proxy cho CE về mặt phương pháp luận là **không thỏa đáng**. Phương
pháp 3 bước: (1) xuất phát từ một hệ thống tuần hoàn xác định rõ về mặt toán học (người tiêu dùng
đại diện tối đa hóa utility qua các "functionality" — dịch vụ như di chuyển, chiếu sáng, liên lạc —
thay vì bản thân sản phẩm vật lý, phản ánh xu hướng kinh tế dịch vụ/chức năng); (2) đặc trưng hóa
dòng vật liệu tối ưu và xây dựng chỉ số đo hoạt động tuyến tính và tái chế; (3) dùng các chỉ số đó
để định nghĩa KHÔNG MƠ HỒ: kinh tế tuyến tính, kinh tế tuần hoàn, kinh tế tuần hoàn "hơn"
(more circular), và tăng trưởng kinh tế tuần hoàn.<br><span class="en">Root problem: recycling and
CE are related but distinct concepts — recycling is just ONE industrial activity, while CE takes
**material value maximization** as its explicit efficiency benchmark; using recycling indicators
directly as a proxy for CE is **methodologically unsatisfactory**. A 3-step method: (1) start from
a mathematically well-defined circular system (a representative consumer maximizing utility over
"functionalities" — services like mobility, lighting, communication — rather than the physical
products themselves, reflecting the trend toward a service/functional economy); (2) characterize
optimal material flows and build metrics measuring linear and recycling activity; (3) use those
metrics to give UNAMBIGUOUS definitions of: a linear economy, a circular economy, a "more
circular" economy, and circular economic growth.</span>

**Mô hình toán học**: kinh tế động với người tiêu dùng đại diện, N loại vật liệu nguyên sinh (virgin)
và tái chế, hàm sản xuất lõm (concave) kết hợp vật liệu nguyên sinh + tái chế + vốn, hàm chất lượng
môi trường phản ánh ngoại tác tiêu cực của việc dùng vật liệu. Giải bài toán tối ưu hóa Lagrangian →
suy ra điều kiện bậc-1 → định nghĩa 2 chỉ số phụ trợ: **quy mô hoạt động tái chế tối ưu** (Rᵢ,ⱼ,ₜ*)
và **quy mô hoạt động tuyến tính tối ưu** (Lᵢ,ⱼ,ₜ*) cho mỗi loại vật liệu/khu vực/thời điểm. Chỉ số
CE tổng hợp: **Cₜ* = Rₜ* − Lₜ*** (tổng hoạt động tái chế tối ưu trừ tổng hoạt động tuyến tính tối
ưu, có trọng số "intolerance factor" μ). **Kinh tế được coi là tuần hoàn tại thời điểm t nếu Cₜ* >
0**; tuyến tính nếu Cₜ* ≤ 0; "tuần hoàn hơn" nếu Cₜ* lớn hơn ở thời điểm này so với thời điểm khác;
tăng trưởng kinh tế tuần hoàn dương nếu tỷ lệ thay đổi (Cτ* − Cₜ*)/Cₜ* > 0.<br><span class="en">
**Mathematical model**: a dynamic economy with a representative consumer, N types of virgin and
recycled materials, a concave production function combining virgin material + recycled material +
capital, an environmental-quality function reflecting the negative externality of material use.
Solving the Lagrangian optimization problem → first-order conditions → 2 auxiliary metrics: the
**optimal size of recycling activity** (Rᵢ,ⱼ,ₜ*) and the **optimal size of linear activity**
(Lᵢ,ⱼ,ₜ*) for each material/sector/period. The composite CE metric: **Cₜ* = Rₜ* − Lₜ*** (total
optimal recycling activity minus total optimal linear activity, weighted by an "intolerance
factor" μ). **The economy is defined as circular at time t if Cₜ* > 0**; linear if Cₜ* ≤ 0;
"more circular" if Cₜ* is larger at one time than another; positive circular economic growth if
the rate of change (Cτ* − Cₜ*)/Cₜ* > 0.</span>

## Key Findings

- Chỉ số đề xuất **bao trùm cả tái chế lẫn các chiến lược thay thế** (kéo dài vòng đời sản phẩm,
  mô hình kinh doanh mới tăng năng suất hàng hóa) — không chỉ giới hạn ở tái chế vật liệu như đa số
  chỉ số CE khác trong literature.<br><span class="en">The proposed metric **encompasses both
  recycling and alternative strategies** (product lifetime extension, new business models
  intensifying commodity productivity) — not limited to material recycling like most other CE
  metrics in the literature.</span>
- Diễn giải kinh tế của điều kiện tối ưu bậc-1: dòng vật liệu tối đa hóa phúc lợi xã hội khi lợi ích
  biên hiện tại + tương lai (có tính bền — durability) BẰNG chi phí biên xã hội của tái chế (kể cả
  tác động khan hiếm tài nguyên + không gian bãi rác). Ví dụ trực quan: tăng cường dùng chung xe
  (car-sharing) làm tăng cường độ sử dụng xe → tăng năng suất "chức năng di chuyển" của kho xe hiện
  có — đây chính là logic "circular growth" mà chỉ số nắm bắt được nhưng recycling rate đơn thuần
  không đo được.<br><span class="en">Economic interpretation of the first-order optimality
  condition: material flows maximize social welfare when the present + future marginal benefit
  (accounting for durability) EQUALS the social marginal cost of recycling (including resource
  scarcity + landfill-space impacts). Illustrative example: increased car-sharing raises vehicle
  utilization intensity → raises the "mobility functionality" productivity of the existing vehicle
  stock — this is exactly the "circular growth" logic the metric captures but a plain recycling
  rate cannot measure.</span>
- Định nghĩa được xây dựng "không hoàn hảo nhưng chắc chắn không mơ hồ" (*not perfect, but
  certainly unambiguous*) — khác biệt cốt lõi so với 114 định nghĩa CE hiện có trong literature vốn
  phần lớn mang tính mô tả/định tính.<br><span class="en">The resulting definitions are "not
  perfect, but certainly unambiguous" — a core distinction from the 114 existing CE definitions in
  the literature, most of which are descriptive/qualitative.</span>

## Conclusion

Xuất phát từ một hệ thống tuần hoàn xác định rõ về mặt toán học, việc xây dựng chỉ số tối ưu cho
hoạt động tuyến tính và tái chế — tích hợp đầy đủ giá trị xã hội của hoạt động kinh tế — là nền tảng
thuận tiện để định nghĩa các thuật ngữ hiện còn mơ hồ như circular economy, linear economy, hay more
circular economy. Định nghĩa và chỉ số đề xuất có thể mở rộng/tinh chỉnh thêm; hướng nghiên cứu
tương lai là **vận hành hóa (operationalize)** chỉ số này bằng dữ liệu thực tế trên một hệ thống
functionality cụ thể (ví dụ di chuyển, nhà ở, dinh dưỡng).<br><span class="en">Departing from a
mathematically well-defined circular system, constructing optimal metrics for linear and recycling
activity — fully incorporating the social value of economic activity — provides a convenient
foundation for defining currently ambiguous terms like circular economy, linear economy, or more
circular economy. The proposed definitions and metric can be further expanded/refined; a future
research direction is to **operationalize** this metric with real-world data on a specific
functionality system (e.g., mobility, housing, nutrition).</span>

## Ý nghĩa cho môn học/Việt Nam

- **Bài lý thuyết/toán học thuần túy nhất của LN8** — hiếm trong toàn bộ reading list môn học (đa
  số bài khác dùng panel regression hoặc review định tính); gần nhất về thể loại là
  [[l23-besley-ghatak-2010-property-rights]] (LN2, cũng lý thuyết nhưng bằng ngôn ngữ tường thuật
  chứ không dùng mô hình toán tường minh như L84).<br><span class="en">**LN8's purest
  theoretical/mathematical paper** — rare across the whole course reading list (most other papers
  use panel regression or qualitative review); the closest in genre is
  [[l23-besley-ghatak-2010-property-rights]] (LN2, also theoretical but in narrative form rather
  than L84's explicit mathematical model).</span>
- **Trung tâm của tranh luận định nghĩa CE trong LN8**: cùng xuất phát từ vấn đề "114 định nghĩa CE"
  (Kirchherr et al. 2017) như [[l83-kirchherr-2018-barriers-circular-economy-eu]] và
  [[l85-saidani-2019-taxonomy-circular-economy-indicators]], nhưng chọn hướng giải quyết HOÀN TOÀN
  khác: thay vì chấp nhận đa nghĩa và đo lường thực nghiệm (L83) hay xây dựng taxonomy linh hoạt
  cho nhiều chỉ số (L85), L84 cố gắng LOẠI BỎ sự mơ hồ bằng một định nghĩa toán học duy nhất — xem
  thêm [[circular-economy]] (mục Tranh luận).<br><span class="en">**Central to LN8's CE
  definitional debate**: shares the same starting point of "114 CE definitions" (Kirchherr et al.
  2017) as [[l83-kirchherr-2018-barriers-circular-economy-eu]] and
  [[l85-saidani-2019-taxonomy-circular-economy-indicators]], but takes a COMPLETELY different
  resolution path: rather than accepting plurality and measuring empirically (L83) or building a
  flexible taxonomy for many indicators (L85), L84 tries to ELIMINATE ambiguity via a single
  mathematical definition — see [[circular-economy]] (Debates section).</span>
- Liên hệ Việt Nam: mô hình lý thuyết trừu tượng, khó áp dụng trực tiếp cho essay dữ liệu Việt Nam,
  nhưng khung "functionality thay vì sản phẩm vật lý" (car-sharing, dịch vụ thay vì sở hữu) là ý
  tưởng hữu ích khi phân tích các mô hình kinh doanh chia sẻ mới nổi ở đô thị Việt Nam (xe máy điện
  chia sẻ, thuê đồ dùng...).<br><span class="en">Vietnam relevance: an abstract theoretical model,
  hard to apply directly to a Vietnam-data essay, but the "functionality instead of physical
  product" framing (car-sharing, service instead of ownership) is a useful lens for analyzing
  emerging sharing-economy business models in Vietnamese cities (shared electric motorbikes,
  rental services...).</span>

## Liên kết

- Bài giảng: [[ln8-circular-economy-inclusive-sustainable-development]] · Concept:
  [[circular-economy]]<br><span class="en">Lecture:
  [[ln8-circular-economy-inclusive-sustainable-development]] · Concept:
  [[circular-economy]]</span>
- Liên hệ: [[l83-kirchherr-2018-barriers-circular-economy-eu]],
  [[l85-saidani-2019-taxonomy-circular-economy-indicators]] (cùng vấn đề gốc "114 định nghĩa CE",
  3 hướng giải quyết khác nhau), [[l23-besley-ghatak-2010-property-rights]] (LN2, cùng thể loại lý
  thuyết thuần)<br><span class="en">Related:
  [[l83-kirchherr-2018-barriers-circular-economy-eu]],
  [[l85-saidani-2019-taxonomy-circular-economy-indicators]] (same root "114 CE definitions"
  problem, 3 different resolution paths), [[l23-besley-ghatak-2010-property-rights]] (LN2, same
  pure-theory genre)</span>
