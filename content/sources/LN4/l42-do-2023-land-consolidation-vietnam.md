---
type: source
title: "L42 — Do, Nguyen & Grote (2023) — Land Consolidation, Rice Production, and Agricultural Transformation: Vietnam"
tags: [land-fragmentation, land-consolidation, rice, poverty, vietnam, stochastic-frontier]
created: 2026-07-29
updated: 2026-07-29
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L42 EAP-2023 Do Land consolidation rice production and agricultural transformation Vietnam.pdf"
---

# L42 — Do, Nguyen & Grote (2023), Economic Analysis and Policy 77: 157–173

**Tác giả**: Manh Hung Do, Trung Thanh Nguyen, Ulrike Grote (Leibniz University Hannover). JEL:
D01, O12, Q12. Keywords: Rural transformation, Land fragmentation, Farm income, Non-farm income,
Poverty reduction, Simultaneous regression.

## Tóm tắt

**Land fragmentation** (phân mảnh ruộng đất — các thửa ruộng của một hộ nằm rải rác, xen kẽ với
thửa của hộ khác) là rào cản lớn cho kinh tế quy mô trong nông nghiệp ở nhiều nước đang phát
triển. Ở Việt Nam, phân phối ruộng đất bình quân đầu người thời Đổi Mới cuối thập niên 1980 khiến
đất đai bị phân mảnh cao — trung bình 3,9 thửa/hộ, diện tích thửa trung bình 0,19 ha. Luật Đất
đai sửa đổi 2013 và Nghị định 43/2014/NĐ-CP hợp pháp hóa và đơn giản hóa thủ tục **land
consolidation** (dồn điền đổi thửa) nhằm cải thiện kinh tế quy mô, nhưng chưa có đánh giá tác
động nào. Bài này (i) xác định yếu tố quyết định hộ tự nguyện tham gia land consolidation, và
(ii) đánh giá tác động lên chi phí sản xuất lúa, nghèo đói nông thôn, và chuyển dịch cơ cấu nông
thôn (rural transformation). Kết quả: land consolidation được thúc đẩy bởi **farming efficiency**
(hiệu quả canh tác); nó giảm đáng kể chi phí làm đất và thu hoạch, tăng thu nhập từ nông nghiệp,
và giảm nghèo.

## Câu hỏi nghiên cứu & phương pháp

- **Dữ liệu**: TVSEP ("Poverty dynamics and sustainable development", dự án DFG-FOR756, cùng
  nguồn dữ liệu với [[l43-le-2020-floods-household-welfare]]) — panel hộ nông thôn 3 tỉnh miền
  Trung: **Hà Tĩnh, Thừa Thiên Huế, Đắk Lắk**. Mẫu cân bằng **995 hộ trồng lúa** qua 3 đợt khảo
  sát 2010/2013/2017 (2.985 quan sát).
- **Đo land fragmentation**: **Simpson index** = 1 − Σ(aᵢ/A)² (aᵢ = diện tích thửa i, A = tổng
  diện tích). Simpson index giảm dần theo thời gian → coi là hộ đã "consolidate" (LC=1).
- **Bước 1 — ước lượng farming efficiency**: mô hình **stochastic frontier** dạng translog, "true
  random-effects" (Greene 2005) — tách biệt inefficiency component khỏi unobserved heterogeneity;
  dùng correlated random-effects (CRE, Mundlak 1978) để xử lý nội sinh biến bỏ sót và reverse
  causality (đầu vào–đầu ra được quyết định đồng thời).
- **Bước 2 — hệ phương trình đồng thời (simultaneous-equation system)**: liên kết farming
  efficiency ↔ tham gia land consolidation bằng **3SLS**, dùng phương pháp
  **heteroscedasticity-based IV của Lewbel (2012)** để tạo instrument nội tại cho biến nhị phân
  land consolidation (giải quyết vấn đề 3SLS với biến phụ thuộc nhị phân), cộng thêm 2 biến công
  cụ ngoại sinh cấp thôn (số doanh nghiệp, khoảng cách trung bình tới ruộng). Kiểm định chất lượng:
  Hansen–Sargan, Breusch–Pagan LM, Likelihood Ratio, Wald test.
- **Bước 3 — SURE regression** (seemingly unrelated regression) cho tỷ trọng thu nhập nông
  nghiệp/phi nông nghiệp — xử lý tương quan sai số giữa 2 phương trình vì phân bổ lao động farm/
  non-farm có liên hệ với nhau.
- **Bước 4 — đánh giá tác động**: **PSM kết hợp Difference-in-Differences (PSM-DD)**, kernel
  matching, bootstrap 1.000 lần, đo tác động lên chi phí sản xuất lúa (6 hạng mục) và nghèo đói —
  chỉ số **FGT** (Foster–Greer–Thorbecke 1984) tại 2 ngưỡng nghèo PPP $2,05/ngày (chuẩn nghèo quốc
  gia VN) và PPP $3,20/ngày (chuẩn nghèo World Bank cho nước thu nhập trung bình).

## Kết quả chính

- **Farming efficiency trung bình**: 0,669 giai đoạn trước (2010–2013), 0,748 giai đoạn sau
  (2017), trung bình toàn kỳ 0,696 — cao hơn Thái Lan (0,63), Campuchia (0,60), Bangladesh (0,57).
- **Table 4 — quan hệ 2 chiều**: farming efficiency ảnh hưởng **dương và có ý nghĩa** lên tham gia
  land consolidation (0,545*), nhưng chiều ngược lại — tham gia land consolidation → farming
  efficiency — **KHÔNG có ý nghĩa thống kê** (−0,814, không sig). Kết quả này khác với Nguyen &
  Warr (2020) và Tu et al. (2021), tác giả cho rằng do khác biệt đo lường/phương pháp.
- **Chi phí sản xuất (Table 6, PSM-DD)**: land consolidation giảm chi phí làm đất
  (land preparation) <span class="stat">PPP$24,35/ha</span>* và chi phí thu hoạch (harvest)
  <span class="stat">PPP$41,82/ha</span>*** — nhờ cơ giới hóa (máy gặt đập liên hợp thay vì gặt
  tay), diện tích thửa lớn hơn cho phép dùng máy.
- **Table 5 — SURE**: land consolidation tăng thu nhập nông nghiệp/lao động (1,141**) nhưng KHÔNG
  ảnh hưởng có ý nghĩa lên thu nhập phi nông nghiệp/lao động; giảm tỷ trọng thu nhập phi nông
  nghiệp (−0,443***) và tăng tỷ trọng thu nhập nông nghiệp (0,518***) — thúc đẩy rural
  transformation theo hướng tập trung hóa nông nghiệp cho nhóm tham gia.
- **Nghèo đói**: DD estimator (δ) cho thấy nhóm tham gia land consolidation giảm nghèo rõ rệt hơn
  nhóm đối chứng (vd poverty headcount ratio giảm 0,033* tại ngưỡng $2,05).

## Ý nghĩa cho môn học/Việt Nam

- **Cùng bức tranh thể chế đất đai Việt Nam với [[l41-ho-2021-land-tenure-vietnam]]** nhưng khác
  KÊNH: L41 bàn **property-rights/tenure security** (có land-use certificate hay không), L42 bàn
  **land fragmentation/consolidation** (đất bị phân mảnh nhiều hay ít). Cả hai đều truy gốc về
  cùng đợt Đổi Mới cuối 1980s ở Việt Nam — L41 là hệ quả của cải cách 1993 cấp land-use
  certificates, L42 là hệ quả của phân phối đất bình quân đầu người CÙNG giai đoạn đó gây phân
  mảnh. Đây là 2 mặt của một câu chuyện thể chế đất đai lớn hơn: quyền sở hữu KHÔNG đủ nếu đất còn
  phân mảnh, và ngược lại dồn điền đổi thửa KHÔNG giải quyết được vấn đề an ninh sở hữu.
- **Liên hệ [[institutions]] (LN2)**: land fragmentation là một dạng "thất bại thể chế" khác với
  khung institutions cổ điển (corruption, extractive institutions) — đây là failure trong việc
  tổ chức lại land market sau một cú sốc thể chế lớn (tập thể hóa → phi tập thể hóa). Đã bổ sung
  ghi chú L41/L42 vào trang [[institutions]] mục "Ứng dụng Việt Nam".
- **Phương pháp luận đáng chú ý**: đây là paper trong môn học minh họa rõ nhất cho kỹ thuật xử lý
  **simultaneity/reverse causality** bằng hệ phương trình đồng thời (3SLS + Lewbel 2012) — khác
  với cách L41 xử lý nội sinh bằng Oster (2019) bias-adjustment. Cả 2 phương pháp đều là lựa chọn
  "khi không có IV ngoại sinh hoàn hảo" — chủ đề đáng so sánh cho câu hỏi ôn thi về xử lý
  endogeneity trong nghiên cứu đất đai.
- **Việt Nam**: minh chứng thực nghiệm ủng hộ chính sách dồn điền đổi thửa 2014 — kết quả gợi ý
  nên khuyến khích các hộ có farming efficiency cao tham gia trước (vì chiều nhân quả chủ yếu là
  efficiency → participation), và đầu tư hạ tầng nông thôn (đường, doanh nghiệp) như biến công cụ
  cho thấy các cơ hội phi nông nghiệp cạnh tranh với động lực dồn điền.

## Liên kết

- Bài giảng: [[ln4-agriculture-climate-change-natural-disasters]]
- Concepts: [[institutions]]
- Cùng lecture: [[l41-ho-2021-land-tenure-vietnam]] (thể chế đất đai, kênh khác),
  [[l43-le-2020-floods-household-welfare]] (cùng nguồn dữ liệu TVSEP/DFG-FOR756, 3 tỉnh miền
  Trung, nhưng L43 dùng thêm dữ liệu Thái Lan và tập trung vào cú sốc lũ lụt thay vì thể chế đất).
