---
type: source
title: "L41 — Ho (2021) — Land Tenure and Economic Development: Evidence from Vietnam"
tags: [land-tenure, property-rights, institutions, vietnam, nighttime-lights]
created: 2026-07-29
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L41 WD-2021 Ho Land tenure and eco dev evidence from vietnam.pdf"
---

# L41 — Ho, H.A. (2021), World Development 140: 105275

**Tác giả**: Hoang-Anh Ho (University of Economics Ho Chi Minh City). JEL: O11, P48, Q15.
Keywords: Land tenure, Privatization, Economic development, Southeast Asia, Vietnam.

## Abstract

> The relationship between private property rights and economic development has been
> investigated by numerous cross-country studies. Nevertheless, aggregate measures of private
> property rights have prevented cross-country studies in general from identifying the specific
> institutions governing private property rights that policy reforms should consider. The
> present paper investigates the impact of private property rights to land on economic
> development in a within-country setting, exploiting the 1993 nationwide land privatization in
> Vietnam. Using a random sample of more than 2000 rural communes across Vietnam, our study
> finds that the prevalence of private land tenure has a positive and significant impact on the
> level of economic development, as proxied by nighttime light intensity. The magnitude of the
> impact, however, is sensitive to both observed and unobserved confounding factors, and
> overall modest. The most plausible explanations for this modest impact are the lingering
> insecurity that land-use certificates can be revoked by the state and the relatively high
> taxes and time cost of land transactions in Vietnam. These lessons are of interest not only to
> Vietnam with its future land reform, but also to other developing countries contemplating the
> privatization of agricultural land.

**Tóm tắt (diễn giải)**: Một chuỗi nghiên cứu xuyên quốc gia có ảnh hưởng lớn — dẫn đầu là
[[l21-acemoglu-2001-colonial-origins]] — đã tìm thấy tác động dương của **private property
rights** lên phát triển kinh tế, nhưng không xác định được CHÍNH XÁC thể chế nào quan trọng cho
cải cách chính sách. Bài này khai thác bối cảnh **within-country**: cải cách ruộng đất toàn
quốc năm 1993 của Việt Nam — cấp **land-use certificates** cho đất nông nghiệp.

## Research Questions

Private property rights đối với đất tác động thế nào lên phát triển kinh tế cấp xã (commune) ở
Việt Nam, sau cải cách ruộng đất 1993?

## Research Framework

Theo Besley (1995) và Besley & Ghatak (2010) — cùng lý thuyết mà
[[l23-besley-ghatak-2010-property-rights]] khai triển sâu trong LN2 — private land tenure tác
động qua 2 kênh: (i) **residual claimant incentive** — nông dân là người hưởng lợi cuối cùng từ
sản lượng nên có động lực đầu tư (lao động, phân bón, giống mới) và dùng đất làm tài sản thế
chấp vay vốn; (ii) **transaction security** — hồ sơ pháp lý rõ ràng giảm chi phí giao dịch đất,
tăng tính thanh khoản thị trường đất. Tác giả xây dựng mô hình **endogenous land tenure** đơn
giản — hộ gia đình quyết định có xin land-use certificate hay không dựa trên so sánh chi phí
biên (thời gian, tiền) và lợi ích biên (bảo vệ lợi nhuận mảnh đất). Mô hình chỉ ra 3 nhóm
confounder tiềm ẩn: **hạ tầng công (public infrastructure)**, **chất lượng đất (land quality)**,
**địa lý (geography)** — cả 3 vừa ảnh hưởng quyết định xin certificate vừa ảnh hưởng trực tiếp
phát triển kinh tế, nên nếu bỏ sót sẽ overestimate tác động của land tenure.

## Data

Commune Module của **VHLSS 2004** (Vietnam Household Living Standards Survey), mẫu ngẫu nhiên
~2.205/8.000 xã nông thôn. Biến private land tenure = % diện tích đất nông nghiệp có land-use
certificates (trung bình mẫu: 74,41%). Biến phụ thuộc: **nighttime light intensity** (log, cộng
0,01) từ vệ tinh NOAA năm 2005 — dùng vì Việt Nam không có số liệu GDP cấp xã; đối chiếu chéo
với tiêu thụ bình quân đầu người VHLSS 2002 cho hệ số tương quan Pearson 0,73 (p=0,000), xác
nhận độ tin cậy của proxy này.

## Methodology

**2 mô hình thực nghiệm**: (1) **Panel data** (1992 trước cải cách vs 2005 sau cải cách) —
fixed-effects vs random-effects, kiểm định Hausman (bác bỏ H0 random-effects với p=0,000) — xử
lý confounder **bất biến theo thời gian**. (2) **Cross-section 2004** kết hợp phương pháp
**Oster (2019)** — ước lượng độ nhạy của hệ số ước lượng với confounder KHÔNG QUAN SÁT ĐƯỢC,
dựa trên mức độ hệ số dịch chuyển khi thêm dần confounder quan sát được, có điều chỉnh theo R²
của "true data generating process". Đây là kỹ thuật thay thế cho instrumental variable (tác giả
thừa nhận không tìm được IV đáng tin cậy) — ước lượng khoảng giá trị hệ số dưới các kịch bản
khác nhau của **coefficient of proportionality (δ)** giữa 0 và 1, và R từ 0,65 đến 0,80.

## Regression/Estimation Results

- **Panel data (Table 2)**: random-effects cho hệ số 0,012*** (1% land-use certificates tăng →
  1,2% nighttime light tăng); fixed-effects giảm còn 0,009*** — cho thấy có confounder bất biến
  theo thời gian.
- **Cross-section (Table 3)**: hồi quy đơn biến (cột 1) cho hệ số <span class="stat">0,017</span>
  (1% tăng land-use certificates → 1,7% tăng nighttime light). Khi thêm đầy đủ kiểm soát
  (agricultural suitability, điện lưới, chợ, độ cao, độ gồ ghề địa hình) + province fixed effects
  (**cột 7**), hệ số giảm mạnh còn <span class="stat">0,006</span>*** — 1% tăng land-use
  certificates → chỉ còn 0,6% tăng nighttime light. R² đầy đủ = 0,617.
- **Oster (2019) bias-adjustment (Table 4)**: ở kịch bản lạc quan nhất (δ=0,1, R=0,65), hệ số
  vẫn 0,006***. Ở kịch bản **bảo thủ nhất** (δ=0,9, R=0,80), hệ số **không khác 0** — nghĩa là
  confounder không quan sát được CÓ THỂ giải thích hết tác động quan sát được của private land
  tenure.

## Robustness Checks

Kết quả ổn định qua nhiều kiểm định — intensive margin (chỉ xã có ánh sáng dương: hệ số còn
0,003), nighttime light per capita, nighttime light growth, standard errors cụm cấp huyện. Có
khác biệt Bắc–Nam rõ rệt: hệ số ở miền Nam lớn hơn nhiều so với miền Bắc (0,012*** vs 0,003**
ở mô hình đầy đủ cross-section) — phản ánh truyền thống private land tenure lâu đời hơn ở miền
Nam (đặc biệt Đồng bằng sông Cửu Long) thuận lợi hơn cho thành công kinh tế của cải cách 1993.

## Key Findings

Tác động của private land tenure lên phát triển kinh tế nông thôn Việt Nam là **khiêm tốn
(modest)**. Nguyên nhân chính: (i) **lingering insecurity** — nhà nước vẫn có thể thu hồi
land-use certificates (thường bồi thường không theo giá thị trường) khi hết hạn; ước tính ~4%
hộ bị thu hồi đất giai đoạn 2006–2012 (Markussen & Tarp 2014); (ii) **thuế và chi phí thời gian
giao dịch đất cao** so với các nước Đông Á khác (Childress 2004).

## Conclusion

Bài học không chỉ có giá trị cho Việt Nam với cải cách ruộng đất tương lai, mà cả cho các nước
đang phát triển khác đang cân nhắc tư nhân hóa đất nông nghiệp: mức độ hoàn chỉnh của property
rights (không chỉ sự tồn tại hình thức) mới quyết định độ lớn tác động kinh tế thực tế.

## Ý nghĩa cho môn học/Việt Nam

- **Liên kết cross-lecture quan trọng với LN2**: paper này xây dựng trực tiếp trên lập luận
  private-property-rights của [[l21-acemoglu-2001-colonial-origins]] và trên lý thuyết
  [[l23-besley-ghatak-2010-property-rights]] về 2 kênh tác động của property rights — một ví dụ
  hiếm hoi trong syllabus môn học nơi lý thuyết institutions/property-rights trừu tượng của LN2
  được **kiểm định thực nghiệm bằng dữ liệu vi mô Việt Nam** ở LN4. Xem thêm [[institutions]].
- **Tương phản quan trọng với AJR (2001)**: trong khi nghiên cứu xuyên quốc gia của AJR tìm thấy
  tác động LỚN của private property rights lên phát triển, Ho (2021) trong bối cảnh
  within-country Việt Nam tìm thấy tác động **khiêm tốn** và có thể về 0 dưới kịch bản bảo thủ —
  gợi ý rằng kết quả xuyên quốc gia có thể phóng đại tác động khi không kiểm soát được confounder
  cấp địa phương.
- **Phương pháp luận đáng chú ý cho ôn thi**: kỹ thuật Oster (2019) là một cách tiếp cận thay
  thế cho IV khi không tìm được biến công cụ hợp lệ — đáng so sánh với
  [[l46-hastuti-2025-climate-labor-mobility-indonesia]] (IV thật) và
  [[l42-do-2023-land-consolidation-vietnam]] (PSM-DD).
- **Hàm ý chính sách Việt Nam**: cải cách ruộng đất tương lai nên hướng tới quyền sở hữu đất
  vĩnh viễn thay vì land-use certificate có thời hạn, và giảm thuế/chi phí giao dịch đất.

## Liên kết

- Bài giảng: [[ln4-agriculture-climate-change-natural-disasters]]
- Concepts: [[institutions]]
- Cross-lecture (LN2): [[l21-acemoglu-2001-colonial-origins]], [[l23-besley-ghatak-2010-property-rights]]
- Cùng lecture (LN4): [[l42-do-2023-land-consolidation-vietnam]] — cả hai đều về thể chế đất đai
  Việt Nam, nhưng L41 bàn property rights/tenure security, L42 bàn land fragmentation/consolidation
  — hai kênh khác nhau.
