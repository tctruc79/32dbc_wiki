---
type: source
title: "L21 — Acemoglu, Johnson & Robinson (2001) — The Colonial Origins of Comparative Development"
tags: [institutions, colonialism, instrumental-variables]
created: 2026-07-23
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L21 AER-2001 Acemoglu The colonial origins of comparative development.pdf"
---

# L21 — Acemoglu, Johnson & Robinson (2001), American Economic Review 91(5): 1369–1401

**Tác giả**: Daron Acemoglu (MIT), Simon Johnson (MIT Sloan), James A. Robinson (UC Berkeley).
JEL: O11, P16, P51. Bài trong `raw/` là bản PDF 302 trang tải từ AER-online, nhưng chỉ **33
trang đầu là bài báo thật** (kể cả appendix + references) — từ trang 34 trở đi là danh sách
"Cited by" (crossref, hàng nghìn trích dẫn 2003–2023), không phải nội dung bài.

## Abstract

> We exploit differences in European mortality rates to estimate the effect of institutions on
> economic performance. Europeans adopted very different colonization policies in different
> colonies, with different associated institutions. In places where Europeans faced high
> mortality rates, they could not settle and were more likely to set up extractive institutions.
> These institutions persisted to the present. Exploiting differences in European mortality
> rates as an instrument for current institutions, we estimate large effects of institutions on
> income per capita. Once the effect of institutions is controlled for, countries in Africa or
> those closer to the equator do not have lower incomes. (JEL O11, P16, P51)

**Tóm tắt (diễn giải)**: Dùng khác biệt tỷ lệ tử vong của lính thực dân châu Âu làm
**instrument** ước lượng tác động nhân quả của institutions lên hiệu suất kinh tế. Nơi tỷ lệ
tử vong cao, châu Âu không định cư được → dựng institutions **extractive**; nơi tỷ lệ thấp →
dựng institutions kiểu **Neo-European** (bảo vệ property rights, khuyến khích đầu tư). Các
institutions này persist đến hiện tại. Sau khi kiểm soát institutions, các nước châu Phi hoặc
gần xích đạo không còn thu nhập thấp hơn một cách có ý nghĩa.

## Research Questions

Đâu là nguyên nhân căn bản (fundamental causes) của chênh lệch thu nhập/capita giữa các nước?
Vấn đề nhận dạng (identification): các nước giàu có thể *chọn* hoặc *đủ khả năng* có
institutions tốt hơn (reverse causality) + nhiều biến bị bỏ sót tương quan với institutions +
đo lường institutions ex-post có sai số → cần một **instrument** ngoại sinh.

## Research Framework

**Chuỗi lý thuyết** (theory of institutional differences): settler mortality (ngoại sinh) →
khả năng định cư → chiến lược thuộc địa (định cư & xây institutions bảo vệ luật pháp/đầu tư vs
extractive state chuyển tài nguyên về mẫu quốc) → early institutions → institutions hiện tại →
income/capita hiện tại. Phương trình chính: log yᵢ = μ + α·Rᵢ + Xᵢ'γ + εᵢ (1), với R = chỉ số
institutions nội sinh.

## Hypothesis

**3 tiền đề** (premises) làm nền cho identification strategy:
1. Châu Âu áp dụng chiến lược thuộc địa khác nhau — cực đoan là định cư & xây institutions bảo
   vệ luật pháp/đầu tư (Mỹ, Úc, New Zealand) hoặc dựng nhà nước extractive (Congo, Gold Coast).
2. Chiến lược thuộc địa phần nào do khả năng định cư quyết định (nơi tử vong cao → không định
   cư được).
3. Institutions ban đầu (early institutions) persist đến hiện tại.

## Data

- **R** = "average protection against expropriation risk" 1985–1995 (thang 0–10, Political
  Risk Services, dùng bởi Knack & Keefer 1995) — đo institutions hiện tại.
- **M** = settler mortality rate (‰, dữ liệu lính/giáo sĩ châu Âu 1817–1848, chủ yếu do sốt rét
  + sốt vàng da qua muỗi Anopheles/Aedes aegypti — 80% ca tử vong vùng nhiệt đới, theo Curtin
  1989).
- Mẫu cơ sở: **64 ex-colonies** có đủ dữ liệu settler mortality + institutions + GDP (mẫu thế
  giới đầy đủ 110 nước cho hồi quy OLS). Appendix Table A2 có dữ liệu từng nước, bao gồm cả
  **Việt Nam** (VNM: log GDP/capita PPP 1995 = 7.28, protection against expropriation trung
  bình 1985–95 = 6.41, main mortality estimate = 140‰).

## Methodology

R nội sinh trong (1), mô hình hóa bằng first-stage: Rᵢ = ζ + β·log Mᵢ + Xᵢ'δ + vᵢ (5), ước
lượng **2SLS (two-stage least squares)** — log settler mortality làm instrument cho
institutions hiện tại.

## Regression/Estimation Results

- **OLS (Bảng 2)**: hệ số institutions α = 0.52 (mẫu cơ sở 64 nước), R²=0.54; toàn mẫu thế giới
  α=0.54, R²=0.62. Ví dụ minh họa: Nigeria (percentile 25, R=5.6) vs Chile (percentile 75,
  R=7.8) — chênh lệch ước tính 1.14 log-point (~2.1 lần) nếu quan hệ là nhân quả, so với chênh
  lệch thực tế 253 log-point (~11 lần).
- **First stage (Bảng 3)**: log settler mortality một mình giải thích **27%** biến thiên
  institutions hiện tại; constraint on executive 1900 giải thích 20%; European settlements 1900
  giải thích ~30% institutions hiện tại và ~50% biến thiên early institutions.
- **2SLS (Bảng 4, kết quả trung tâm)**: hệ số institutions **α = 0.94** (SE = 0.16) — **lớn
  hơn** ước lượng OLS (0.52), ngụ ý sai số đo lường (attenuation bias) quan trọng hơn reverse
  causality/omitted-variable bias trong việc làm méo OLS. Highly significant.

## Robustness Checks

Mục V kiểm soát thêm natural resources, soil quality, landlocked, life expectancy, infant
mortality — các biến kiểm soát này phần lớn không significant và ít làm thay đổi 2SLS estimate;
**overidentification test** (dùng thêm instrument khác) không bác bỏ exclusion restriction.
Thêm latitude/continent dummies: hệ số institutions giảm nhẹ nhưng vẫn significant; dummy châu
Phi cho thấy các nước châu Phi vẫn nghèo hơn 90 log-point (~145%) dù đã kiểm soát institutions.

## Key Findings

Institutions vẫn là **"black box"** — kết quả chỉ ra giảm expropriation risk mang lại lợi ích
lớn nhưng KHÔNG chỉ ra bước cụ thể nào để cải thiện institutions. Institutional features
(expropriation risk, rule of law...) nên hiểu là **equilibrium outcome** của institutions nền
tảng hơn (vd hệ thống tổng thống vs nghị viện).

## Conclusion

Nhấn mạnh lại 3 tiền đề như kết luận trung tâm; institutions hiện tại **không phải định mệnh
không đổi** từ chính sách thuộc địa — dẫn ví dụ Nhật Bản thời Minh Trị và Hàn Quốc thập niên
1960 như bằng chứng institutions có thể cải thiện đáng kể.

## Ý nghĩa cho môn học/Việt Nam

- Nền tảng lý thuyết trung tâm của [[institutions]] và cả LN2 — 5 paper còn lại của lecture đều
  build trên premise "institutions matter" mà bài này thiết lập bằng identification chặt chẽ.
- Việt Nam xuất hiện trực tiếp trong Appendix Table A2 (dữ liệu gốc) — dữ liệu thô có thể dùng
  đối chiếu cho essay về vai trò institutions ở Việt Nam.
- Câu hỏi ôn thi: giải thích identification strategy (3 tiền đề + exclusion restriction); vì
  sao 2SLS (0.94) > OLS (0.52) — attenuation bias vs reverse causality.

## Liên kết

- Bài giảng: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]]
  (nền tảng lý thuyết) · liên hệ [[deep-roots-of-development]] (reversal of fortune, Spolaore
  & Wacziarg 2013 dùng lại kết quả bài này)
