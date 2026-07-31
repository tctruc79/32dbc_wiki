---
type: source
title: "L43 — Le (2020) — Floods and Household Welfare: Evidence from Southeast Asia"
tags: [floods, household-welfare, coping-strategies, subjective-wellbeing, vietnam, thailand, satellite-data]
created: 2026-07-29
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L43 EDCC-2020 Le Floods and household welfare.pdf"
---

# L43 — Le, T.N.T. (2020), Economics of Disasters and Climate Change 4(1): 145–170

**Tác giả**: Thi Ngoc Tu Le (University of Göttingen; Hoa Sen University). JEL: I31, Q15, Q51,
Q54.

## Abstract

> This research uses a rich panel data set of household surveys and external long-term flood
> data, extracted from satellite images, to complete a puzzling picture of the effects of
> floods on household welfare. Floods impose a mixed impact on households. On the one hand, the
> floods reduce household incomes dependent on natural sources; while on the other hand, floods
> push farmers out of the fields to seek extra incomes from non-agricultural activities. In
> addition, the floods significantly increase some types of expenditure. The finding of a
> lower household subjective wellbeing score reaffirms all these results. Further, this
> research shows the efforts that rural households are making to cope with the effects of
> flooding. They employ both formal and informal coping mechanisms; however, only financial
> remittances are shown to be significantly effective in providing relief.

**Tóm tắt (diễn giải)**: Lũ lụt là loại thiên tai phổ biến nhất thế giới (~40% tổng số thảm họa
quy mô lớn), và Đông Nam Á đặc biệt dễ bị tổn thương. Bài dùng dữ liệu panel hộ gia đình kết
hợp dữ liệu lũ vệ tinh dài hạn để hoàn thiện một bức tranh còn "khó hiểu" (puzzling) về tác
động của lũ lên welfare hộ gia đình.

## Research Questions

(i) Lũ tác động thế nào lên hộ gia đình trong khái niệm welfare đa chiều? (ii) Kênh bảo hiểm/
ứng phó nào được dùng phổ biến và hiệu quả nhất để hộ nông thôn đối phó với cú sốc lũ?

## Research Framework

Chiến lược thực nghiệm theo khung **Dell et al. (2014)**: hồi quy reduced-form 3 phần, có
province × wave fixed effects: (1) tác động trực tiếp lên thu nhập/tiêu dùng hộ gia đình; (2)
chiến lược ứng phó (coping strategies) — tương tác flood với các biến bảo hiểm chính thức và
phi chính thức; (3) **Subjective wellbeing (SWB)** — ordinal logit, theo khung **OECD (2013)**:
3 miền material conditions, quality of life, sustainability.

## Data

Dự án **DFG-FOR756 "Vulnerability to Poverty in Southeast Asia"** — cùng nguồn với
[[l42-do-2023-land-consolidation-vietnam]]. Panel 4.400 hộ nông thôn, khảo sát
2007/2008/2010/2013, tại **6 tỉnh**: 3 tỉnh Đông Bắc Thái Lan + 3 tỉnh Việt Nam (**Hà Tĩnh,
Thừa Thiên Huế, Đắk Lắk**). **Dữ liệu lũ khách quan — điểm phương pháp luận nổi bật**: thay vì
dùng khảo sát tự báo cáo (dễ bị endogeneity), tác giả dùng **MODIS Flood Water (MFW)** — ảnh vệ
tinh NASA hàng ngày, độ phân giải ~250m, kết hợp GIS/Google Earth để vẽ ranh giới thôn. Biến
flood = tỷ lệ diện tích thôn bị ngập nước trung bình 2 năm liên tiếp (0 = không ngập, 1 = ngập
toàn bộ).

## Methodology

Hồi quy reduced-form (Dell et al. 2014) với province × wave fixed effects cho 3 nhóm outcome
(thu nhập/tiêu dùng, coping strategies, subjective wellbeing). SWB đo bằng ordinal logit trên
thang 1–5 (rất không hài lòng → rất hài lòng), cả ngắn hạn và dài hạn (5 năm).

## Regression/Estimation Results

- **Thu nhập (Table 4)**: khi flood=1 (thôn ngập hoàn toàn), thu nhập săn bắt/nuôi trồng thủy
  sản giảm <span class="stat">~97%</span>*, thu nhập chăn nuôi giảm ~35%, thu nhập từ cây trồng
  giảm ~37%. Ngược lại, thu nhập tự doanh (self-employment) tăng ~126% và **kiều hối tăng <span
  class="stat">185%</span>*****.
- **Chi tiêu (Table 5)**: chi tiêu y tế tăng <span class="stat">48,5%</span>*, chi tiêu giáo dục
  tăng <span class="stat">42,0%</span>; chi tiêu phi lương thực +22,3%, lương thực +10,4%; tổng
  chi tiêu +~13%.
- **Coping strategies (Table 6–7)**: bảo hiểm y tế tư nhân giảm gánh nặng chi phí y tế do lũ
  ~36,2%; thẻ y tế miễn phí công KHÔNG giảm được vulnerability. Trong các kênh phi chính thức —
  **chỉ kiều hối có hệ số âm và có ý nghĩa thống kê** (giảm 3,7% tác động lũ lên tổng chi tiêu
  khi kiều hối tăng 10%).
- **Subjective wellbeing (Table 8–9)**: flood có tác động âm có ý nghĩa lên SWB ngắn hạn
  (−0,403*, −0,427*); tác động dài hạn âm nhưng không có ý nghĩa thống kê. Xác suất "rất không
  hài lòng" tăng ~4,3 điểm % khi floodwater đổi từ 0 lên 0,99.

## Key Findings

Lũ tạo tác động **hỗn hợp**: một mặt giảm thu nhập phụ thuộc nguồn tự nhiên, mặt khác đẩy nông
dân ra khỏi đồng ruộng tìm thu nhập phi nông nghiệp. Hộ gia đình dùng cả cơ chế ứng phó chính
thức lẫn phi chính thức, nhưng chỉ có **kiều hối** là hiệu quả có ý nghĩa thống kê trong việc
giảm nhẹ tác động — quy mô tác động quá lớn để hộ gia đình tự ứng phó ở cấp cá nhân bằng các
kênh khác.

## Conclusion

"The experience of living in villages that are subject to flooding is not a happy one" — kết
luận u ám nhưng nhất quán: lũ gây tổn hại đa chiều (thu nhập, chi tiêu, subjective wellbeing)
mà cơ chế ứng phó hiện có (trừ kiều hối) không đủ hiệu quả để bù đắp.

## Ý nghĩa cho môn học/Việt Nam

- **Đối trọng phương pháp luận quan trọng với [[l44-vo-tran-2022-rural-vulnerability-vietnam]]
  và [[l45-tran-2022-rice-farmers-vulnerability-nghean]]**: cả 3 paper đều hỏi "climate/disaster
  tác động thế nào lên household welfare" nhưng dùng khung đo lường khác nhau — L43 dùng khung
  **OECD wellbeing** + hồi quy reduced-form trực tiếp trên outcome, trong khi L44/L45 dùng khung
  **LVI/LVI-IPCC** (composite index kiểu HDI). Xem [[livelihood-vulnerability-index]].
- **Dữ liệu vệ tinh khách quan (MODIS)** là điểm mạnh phương pháp luận nổi bật so với L44/L45
  chỉ dùng dữ liệu khảo sát chủ quan.
- **Việt Nam**: Hà Tĩnh và Thừa Thiên Huế là 2 tỉnh bị ảnh hưởng lũ nặng nhất trong mẫu — khớp
  với kết quả L44/L45 xác định vùng Bắc Trung Bộ/Duyên hải miền Trung là vùng dễ tổn thương
  nhất trước thiên tai khí hậu ở Việt Nam.

## Liên kết

- Bài giảng: [[ln4-agriculture-climate-change-natural-disasters]]
- Concepts: [[livelihood-vulnerability-index]]
- Cùng lecture: [[l42-do-2023-land-consolidation-vietnam]] (cùng dữ liệu TVSEP),
  [[l44-vo-tran-2022-rural-vulnerability-vietnam]], [[l45-tran-2022-rice-farmers-vulnerability-nghean]]
  (cùng câu hỏi welfare/vulnerability, khung đo khác — LVI thay vì OECD wellbeing).
