---
type: source
title: "L21 — Acemoglu, Johnson & Robinson (2001) — The Colonial Origins of Comparative Development"
tags: [institutions, colonialism, instrumental-variables]
created: 2026-07-23
updated: 2026-08-04
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L21 AER-2001 Acemoglu The colonial origins of comparative development.pdf"
---

# L21 — Acemoglu, Johnson & Robinson (2001), American Economic Review 91(5): 1369–1401

**Tác giả**: Daron Acemoglu (MIT), Simon Johnson (MIT Sloan), James A. Robinson (UC Berkeley).
JEL: O11, P16, P51. Bài trong `raw/` là bản PDF 302 trang tải từ AER-online, nhưng chỉ **33
trang đầu là bài báo thật** (kể cả appendix + references) — từ trang 34 trở đi là danh sách
"Cited by" (crossref, hàng nghìn trích dẫn 2003–2023), không phải nội dung bài.<br><span
class="en">**Authors**: Daron Acemoglu (MIT), Simon Johnson (MIT Sloan), James A. Robinson (UC
Berkeley). JEL: O11, P16, P51. The PDF in `raw/` is a 302-page file downloaded from AER-online,
but only the **first 33 pages are the actual article** (including appendix and references) —
from page 34 onward it is a "Cited by" list (Crossref, thousands of citations 2003–2023), not
part of the article's content.</span>

## Abstract

> Chúng tôi khai thác khác biệt về tỷ lệ tử vong của người châu Âu để ước lượng tác động của
> institutions lên hiệu suất kinh tế. Người châu Âu áp dụng các chính sách thuộc địa hóa rất
> khác nhau ở các thuộc địa khác nhau, đi kèm với các institutions khác nhau. Ở những nơi người
> châu Âu đối mặt với tỷ lệ tử vong cao, họ không thể định cư và nhiều khả năng dựng lên các
> institutions mang tính extractive. Các institutions này tồn tại dai dẳng đến hiện tại. Bằng
> cách khai thác khác biệt tỷ lệ tử vong của người châu Âu làm instrument cho institutions hiện
> tại, chúng tôi ước lượng được tác động lớn của institutions lên thu nhập bình quân đầu người.
> Một khi đã kiểm soát tác động của institutions, các nước ở châu Phi hoặc gần đường xích đạo
> hơn không còn có thu nhập thấp hơn. (JEL O11, P16, P51)

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
gần xích đạo không còn thu nhập thấp hơn một cách có ý nghĩa.<br><span class="en">**Summary
(paraphrase)**: Uses differences in European settler mortality rates as an **instrument** to
estimate the causal effect of institutions on economic performance. Where mortality rates were
high, Europeans could not settle → they set up **extractive** institutions; where rates were
low → they set up **Neo-European** institutions (protecting property rights, encouraging
investment). These institutions persist to the present. Once institutions are controlled for,
African or near-equator countries no longer have significantly lower income.</span>

## Research Questions

Đâu là nguyên nhân căn bản (fundamental causes) của chênh lệch thu nhập/capita giữa các nước?
Vấn đề nhận dạng (identification): các nước giàu có thể *chọn* hoặc *đủ khả năng* có
institutions tốt hơn (reverse causality) + nhiều biến bị bỏ sót tương quan với institutions +
đo lường institutions ex-post có sai số → cần một **instrument** ngoại sinh.<br><span
class="en">What are the fundamental causes of income-per-capita differences across countries?
The identification problem: rich countries may *choose* or *afford* better institutions
(reverse causality), plus many omitted variables correlate with institutions, plus ex-post
measurement of institutions is error-prone → an exogenous **instrument** is needed.</span>

## Research Framework

**Chuỗi lý thuyết** (theory of institutional differences): settler mortality (ngoại sinh) →
khả năng định cư → chiến lược thuộc địa (định cư & xây institutions bảo vệ luật pháp/đầu tư vs
extractive state chuyển tài nguyên về mẫu quốc) → early institutions → institutions hiện tại →
income/capita hiện tại. Phương trình chính: log yᵢ = μ + α·Rᵢ + Xᵢ'γ + εᵢ (1), với R = chỉ số
institutions nội sinh.<br><span class="en">**Theoretical chain** (theory of institutional
differences): settler mortality (exogenous) → feasibility of settlement → colonization strategy
(settling & building institutions that protect the rule of law/investment vs. an extractive
state that transfers resources back to the mother country) → early institutions → current
institutions → current income per capita. Main equation: log yᵢ = μ + α·Rᵢ + Xᵢ'γ + εᵢ (1),
where R = the endogenous institutions index.</span>

## Hypothesis

**3 tiền đề** (premises) làm nền cho identification strategy:<br><span class="en">**3
premises** underpin the identification strategy:</span>

1. Châu Âu áp dụng chiến lược thuộc địa khác nhau — cực đoan là định cư & xây institutions bảo
   vệ luật pháp/đầu tư (Mỹ, Úc, New Zealand) hoặc dựng nhà nước extractive (Congo, Gold
   Coast).<br><span class="en">Europeans adopted different colonization strategies — at the
   extremes, settling & building institutions that protect the rule of law/investment (US,
   Australia, New Zealand) or setting up an extractive state (Congo, Gold Coast).</span>
2. Chiến lược thuộc địa phần nào do khả năng định cư quyết định (nơi tử vong cao → không định
   cư được).<br><span class="en">The colonization strategy was partly determined by the
   feasibility of settlement (where mortality was high → settlement was not possible).</span>
3. Institutions ban đầu (early institutions) persist đến hiện tại.<br><span class="en">Early
   institutions persist to the present.</span>

## Data

- **R** = "average protection against expropriation risk" 1985–1995 (thang 0–10, Political
  Risk Services, dùng bởi Knack & Keefer 1995) — đo institutions hiện tại.<br><span
  class="en">**R** = "average protection against expropriation risk" 1985–1995 (0–10 scale,
  Political Risk Services, used by Knack & Keefer 1995) — measures current
  institutions.</span>
- **M** = settler mortality rate (‰, dữ liệu lính/giáo sĩ châu Âu 1817–1848, chủ yếu do sốt rét
  + sốt vàng da qua muỗi Anopheles/Aedes aegypti — 80% ca tử vong vùng nhiệt đới, theo Curtin
  1989).<br><span class="en">**M** = settler mortality rate (per mille, data on European
  soldiers/clergy 1817–1848, mostly due to malaria + yellow fever transmitted by
  Anopheles/Aedes aegypti mosquitoes — 80% of deaths in tropical areas, per Curtin
  1989).</span>
- Mẫu cơ sở: **64 ex-colonies** có đủ dữ liệu settler mortality + institutions + GDP (mẫu thế
  giới đầy đủ 110 nước cho hồi quy OLS). Appendix Table A2 có dữ liệu từng nước, bao gồm cả
  **Việt Nam** (VNM: log GDP/capita PPP 1995 = 7.28, protection against expropriation trung
  bình 1985–95 = 6.41, main mortality estimate = 140‰).<br><span class="en">Baseline sample:
  **64 ex-colonies** with complete data on settler mortality + institutions + GDP (the full
  110-country world sample is used for the OLS regression). Appendix Table A2 gives
  country-level data, including **Vietnam** (VNM: log GDP per capita PPP 1995 = 7.28, average
  protection against expropriation 1985–95 = 6.41, main mortality estimate = 140‰).</span>

## Methodology

R nội sinh trong (1), mô hình hóa bằng first-stage: Rᵢ = ζ + β·log Mᵢ + Xᵢ'δ + vᵢ (5), ước
lượng **2SLS (two-stage least squares)** — log settler mortality làm instrument cho
institutions hiện tại.<br><span class="en">R is endogenous in (1), modeled via the first-stage
equation: Rᵢ = ζ + β·log Mᵢ + Xᵢ'δ + vᵢ (5), estimated using **2SLS (two-stage least squares)**
— log settler mortality as the instrument for current institutions.</span>

## Regression/Estimation Results

- **OLS (Bảng 2)**: hệ số institutions α = 0.52 (mẫu cơ sở 64 nước), R²=0.54; toàn mẫu thế giới
  α=0.54, R²=0.62. Ví dụ minh họa: Nigeria (percentile 25, R=5.6) vs Chile (percentile 75,
  R=7.8) — chênh lệch ước tính 1.14 log-point (~2.1 lần) nếu quan hệ là nhân quả, so với chênh
  lệch thực tế 253 log-point (~11 lần).<br><span class="en">**OLS (Table 2)**: institutions
  coefficient α = 0.52 (baseline 64-country sample), R²=0.54; full world sample α=0.54,
  R²=0.62. Illustrative example: Nigeria (25th percentile, R=5.6) vs. Chile (75th percentile,
  R=7.8) — an estimated gap of 1.14 log points (~2.1×) if the relationship is causal, compared
  to an actual gap of 253 log points (~11×).</span>
- **First stage (Bảng 3)**: log settler mortality một mình giải thích **27%** biến thiên
  institutions hiện tại; constraint on executive 1900 giải thích 20%; European settlements 1900
  giải thích ~30% institutions hiện tại và ~50% biến thiên early institutions.<br><span
  class="en">**First stage (Table 3)**: log settler mortality alone explains **27%** of the
  variation in current institutions; constraint on executive in 1900 explains 20%; European
  settlements in 1900 explain ~30% of current institutions and ~50% of the variation in early
  institutions.</span>
- **2SLS (Bảng 4, kết quả trung tâm)**: hệ số institutions **α = 0.94** (SE = 0.16) — **lớn
  hơn** ước lượng OLS (0.52), ngụ ý sai số đo lường (attenuation bias) quan trọng hơn reverse
  causality/omitted-variable bias trong việc làm méo OLS. Highly significant.<br><span
  class="en">**2SLS (Table 4, central result)**: institutions coefficient **α = 0.94** (SE =
  0.16) — **larger** than the OLS estimate (0.52), implying that measurement error
  (attenuation bias) matters more than reverse causality/omitted-variable bias in biasing the
  OLS estimate. Highly significant.</span>

## Robustness Checks

Mục V kiểm soát thêm natural resources, soil quality, landlocked, life expectancy, infant
mortality — các biến kiểm soát này phần lớn không significant và ít làm thay đổi 2SLS estimate;
**overidentification test** (dùng thêm instrument khác) không bác bỏ exclusion restriction.
Thêm latitude/continent dummies: hệ số institutions giảm nhẹ nhưng vẫn significant; dummy châu
Phi cho thấy các nước châu Phi vẫn nghèo hơn 90 log-point (~145%) dù đã kiểm soát
institutions.<br><span class="en">Section V adds further controls — natural resources, soil
quality, landlocked status, life expectancy, infant mortality — most of which are not
significant and barely change the 2SLS estimate; the **overidentification test** (using an
additional instrument) does not reject the exclusion restriction. Adding latitude/continent
dummies: the institutions coefficient falls slightly but remains significant; the Africa dummy
shows African countries are still 90 log points (~145%) poorer even after controlling for
institutions.</span>

## Key Findings

Institutions vẫn là **"black box"** — kết quả chỉ ra giảm expropriation risk mang lại lợi ích
lớn nhưng KHÔNG chỉ ra bước cụ thể nào để cải thiện institutions. Institutional features
(expropriation risk, rule of law...) nên hiểu là **equilibrium outcome** của institutions nền
tảng hơn (vd hệ thống tổng thống vs nghị viện).<br><span class="en">Institutions remain a
**"black box"** — the results show that reducing expropriation risk yields large benefits but
do NOT indicate concrete steps to improve institutions. Institutional features (expropriation
risk, rule of law...) should be understood as an **equilibrium outcome** of more fundamental
institutions (e.g., presidential vs. parliamentary systems).</span>

## Conclusion

Nhấn mạnh lại 3 tiền đề như kết luận trung tâm; institutions hiện tại **không phải định mệnh
không đổi** từ chính sách thuộc địa — dẫn ví dụ Nhật Bản thời Minh Trị và Hàn Quốc thập niên
1960 như bằng chứng institutions có thể cải thiện đáng kể.<br><span class="en">Reaffirms the 3
premises as the central conclusion; current institutions are **not an immutable destiny** set
by colonial policy — it cites Meiji-era Japan and 1960s South Korea as evidence that
institutions can improve substantially.</span>

## Ý nghĩa cho môn học/Việt Nam

- Nền tảng lý thuyết trung tâm của [[institutions]] và cả LN2 — 5 paper còn lại của lecture đều
  build trên premise "institutions matter" mà bài này thiết lập bằng identification chặt
  chẽ.<br><span class="en">The central theoretical foundation of [[institutions]] and of LN2 as
  a whole — the other 5 papers in the lecture all build on the premise that "institutions
  matter," which this paper establishes through rigorous identification.</span>
- Việt Nam xuất hiện trực tiếp trong Appendix Table A2 (dữ liệu gốc) — dữ liệu thô có thể dùng
  đối chiếu cho essay về vai trò institutions ở Việt Nam.<br><span class="en">Vietnam appears
  directly in Appendix Table A2 (original data) — this raw data can be used as a reference
  point for an essay on the role of institutions in Vietnam.</span>
- Câu hỏi ôn thi: giải thích identification strategy (3 tiền đề + exclusion restriction); vì
  sao 2SLS (0.94) > OLS (0.52) — attenuation bias vs reverse causality.<br><span class="en">Exam
  question: explain the identification strategy (3 premises + exclusion restriction); why 2SLS
  (0.94) > OLS (0.52) — attenuation bias vs. reverse causality.</span>

## Liên kết

- Bài giảng: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]]
  (nền tảng lý thuyết) · liên hệ [[deep-roots-of-development]] (reversal of fortune, Spolaore
  & Wacziarg 2013 dùng lại kết quả bài này)<br><span class="en">Lecture:
  [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]] (theoretical
  foundation) · related to [[deep-roots-of-development]] (reversal of fortune — Spolaore &
  Wacziarg 2013 reuse this paper's results)</span>
