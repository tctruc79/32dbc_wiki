---
type: source
title: "L46 — Hastuti et al. (2025) — Climate Change and Labor Mobility: Agricultural Households in Indonesia"
tags: [labor-mobility, climate-change, indonesia, instrumental-variable, mediation-analysis, structural-transformation]
created: 2026-07-29
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L46 WDP-2025 Hastuti et al Climate change and labor mobility.pdf"
---

# L46 — Hastuti, Dartanto, Halimatussadiah & Rifin (2025), World Development Perspectives 40: 100750

**Tác giả**: Hastuti, Teguh Dartanto, Alin Halimatussadiah (Universitas Indonesia), Amzul Rifin
(Bogor Agricultural University). Keywords: Agricultural Households, Climate Change, Labor
Mobility, Indonesia, Instrumental variable, Mediation analysis.

## Abstract

> Climate change presents a significant challenge to the agricultural sector. It disrupts
> farming processes and reduces productivity, increasing uncertainty for farming households
> and driving them to seek alternative livelihoods. This research undertakes an examination of
> the impact of climate change, proxied by variation of rainfall and temperature, on labor
> mobility in Indonesia using longitudinal data from three successive rounds of the Indonesia
> Family Life Survey (IFLS). Labor mobility refers to sectoral shifts, where a household head
> changes employment sectors, regardless of relocation. We employ an instrumental variable
> approach to ensure robust estimation by accounting for potential endogeneity of climate
> variables, using altitude and latitude as instruments. Our findings indicate that variation
> of rainfall and temperature affects labor mobility in Indonesia's agricultural households.
> Specifically, a one percent increase in the coefficient of variation for rainfall and
> temperature significantly increases the probability of labor mobility by approximately 0.47
> and 1.38 percentage point, respectively. We further demonstrate that the effect operates
> primarily through changes in farm production costs that influence labor mobility, especially
> under varying rainfall. The heterogeneity analysis indicates that impact of rainfall and
> temperature variability are more pronounced among farmers in Java, particularly those with
> higher education and smaller landholdings.

**Tóm tắt (diễn giải)**: **Duy nhất trong LN4 nghiên cứu ngoài Việt Nam** — bối cảnh Indonesia.
Bài xem xét tác động biến thiên lượng mưa và nhiệt độ lên **labor mobility** — dịch chuyển KHU
VỰC nghề nghiệp (sectoral shift) của chủ hộ, KHÔNG nhất thiết phải di cư địa lý — dùng dữ liệu
dài hạn **Indonesia Family Life Survey (IFLS)** 2000/2007/2014.

## Research Questions

(1) Tác động nhân quả của biến đổi khí hậu lên labor mobility hộ nông nghiệp Indonesia là gì?
(2) Farm production costs có đóng vai trò trung gian (mediating) trong quan hệ này không?

## Research Framework

**Định nghĩa labor mobility — khác biệt quan trọng với các paper Việt Nam trong LN4**: đây là
chuyển đổi KHU VỰC KINH TẾ (nông nghiệp → phi nông nghiệp) của chủ hộ, loại trừ di cư xuyên
biên giới. Đây là paper DUY NHẤT trong LN4 nghiên cứu **exit/mobility ra khỏi nông nghiệp**
thay vì coping/adaptation TẠI CHỖ — khác hẳn cách tiếp cận "ở lại và thích ứng" của L43/L44/L45.
Khung mediation dùng **IV-mediate của Dippel et al. (2020)** — phân tách tác động của khí hậu
lên labor mobility thành **Direct Effect** (μ2) và **Indirect Effect** qua kênh **farm
production cost** (κ1×μ1).

## Data

**IFLS 2000/2007/2014**, đại diện ~83% dân số Indonesia, 13 tỉnh. Mẫu giới hạn hộ có chủ hộ làm
nông nghiệp: **4.909 hộ**. Biến khí hậu (rainfall, temperature) từ **WorldClim**, đo bằng
**coefficient of variation (CV)** trong 14 năm cấp cận-huyện (sub-district) — CV trung bình
rainfall 2,4%, temperature 0,4%.

## Methodology

**Instrumental variable**: **vĩ độ (latitude)** làm IV cho biến thiên mưa (vĩ độ thấp mưa nhiều
hơn), **độ cao (altitude)** làm IV cho biến thiên nhiệt độ (vùng cao nóng lên nhanh gấp ~3 lần
trung bình toàn cầu). Kiểm định mạnh: Kleibergen-Paap rk Wald F = 57,6 (rainfall)/60,8
(temperature) — vượt xa ngưỡng Stock-Yogo; Sargan-Hansen xác nhận có nội sinh trong biến khí
hậu gốc. **Mediation analysis — điểm phương pháp luận nổi bật**: dùng khung **IV-mediate của
Dippel et al. (2020)** — paper DUY NHẤT trong LN4 không chỉ đo tác động mà còn mở "hộp đen" CƠ
CHẾ truyền dẫn.

## Regression/Estimation Results

- **Tác động chính (Table 2, IV)**: 1% tăng CV lượng mưa → xác suất labor mobility tăng <span
  class="stat">0,47 điểm %</span>*** ; 1% tăng CV nhiệt độ → tăng <span class="stat">1,38 điểm
  %</span>*** — cả hai có ý nghĩa ở mức 1%. OLS cho hệ số dương nhưng KHÔNG có ý nghĩa thống kê
  — cho thấy nội sinh làm attenuation bias nếu không dùng IV.
- **Mediation (Table 4)**: với biến thiên MƯA, cả direct effect và indirect effect (qua farm
  production cost) đều dương và có ý nghĩa — chi phí sản xuất là kênh truyền dẫn thực sự. Với
  biến thiên NHIỆT ĐỘ, indirect effect qua production cost KHÔNG có ý nghĩa thống kê — tác động
  nhiệt độ có thể đến từ kênh khác (năng suất, điều kiện lao động trực tiếp).
- **Heterogeneity (Table 3)**: tác động mạnh hơn ở **đảo Java** (rainfall +0,41 điểm%,
  temperature +6,23 điểm%), KHÔNG có ý nghĩa ở ngoài Java. Hộ có đất **NHỎ** (<0,5ha) dễ tổn
  thương hơn — hệ số lớn hơn và có ý nghĩa so với hộ đất lớn (≥1ha, không có ý nghĩa).

## Robustness Checks

IV-Probit (mô hình phi tuyến) cho kết quả nhất quán (rainfall +0,48 điểm%, temperature +1,37
điểm%); Kinky Least-Squares (KLS, Kripfganz & Kiviet 2021) trong khoảng tương quan giả định
[−0,50, −0,10] vẫn cho hệ số dương có ý nghĩa.

## Key Findings

Hộ đất lớn có nguồn lực/công nghệ/vốn tốt hơn để thích ứng tại chỗ, giảm nhu cầu rời nông
nghiệp. Nông dân học vấn THẤP (≤tiểu học) có hệ số CV mưa/nhiệt độ LỚN hơn và có ý nghĩa mạnh
hơn — nhạy cảm hơn với biến thiên khí hậu (marginal effect); đồng thời tác giả cũng ghi nhận
(phát biểu tổng quát riêng) rằng nông dân học vấn CAO hơn nhìn chung dễ chuyển sang việc phi
nông hơn vì có cơ hội tốt hơn — hai phát biểu đo hai thứ khác nhau (độ nhạy cảm biên vs xác
suất nền), cần trích dẫn cẩn thận.

## Conclusion

Biến đổi khí hậu có quan hệ nhân quả với labor mobility hộ nông nghiệp Indonesia — cải thiện
hiệu quả nông nghiệp là chìa khóa giảm nhẹ tác động bất lợi. Xây dựng hệ thống nông nghiệp
tiết kiệm chi phí và chống chịu khí hậu đòi hỏi kết hợp precision agriculture, phát triển vốn
con người, và điều phối thể chế để tăng resilience và giảm labor mobility ngoài ý muốn khỏi
nông nghiệp.

## Ý nghĩa cho môn học/Việt Nam

- **Vị trí đặc biệt trong LN4**: paper DUY NHẤT không phải Việt Nam (Indonesia) — mở rộng câu
  chuyện "nông nghiệp & biến đổi khí hậu" ra ngoài phạm vi VN. Cũng là paper DUY NHẤT đóng khung
  climate impact như một cú hích **structural transformation** (mô hình Lewis 1954 dual-sector)
  thay vì như một cú sốc phúc lợi cần "coping" tại chỗ.
- **Đối lập rõ với L43/L44/L45**: các paper Việt Nam trong LN4 đều nghiên cứu hộ **Ở LẠI** nông
  nghiệp. L46 nghiên cứu hộ **RỜI ĐI** — coi labor mobility chính LÀ chiến lược thích ứng, không
  phải hậu quả cần khắc phục.
- **Phương pháp luận IV đáng đối chiếu với L41/L42**: L46 tìm được IV ngoại sinh hợp lệ
  (latitude/altitude) trong khi L41 (Ho 2021) phải dùng Oster (2019) bias-adjustment, và L42
  dùng Lewbel (2012) heteroscedasticity-based IV nội tại — 3 paper, 3 chiến lược xử lý
  endogeneity khác nhau.
- **Việt Nam**: phát hiện "hộ đất nhỏ dễ tổn thương và dễ rời nông nghiệp hơn" liên hệ trực tiếp
  tới câu chuyện land fragmentation của [[l42-do-2023-land-consolidation-vietnam]].

## Liên kết

- Bài giảng: [[ln4-agriculture-climate-change-natural-disasters]]
- Cùng lecture: [[l43-le-2020-floods-household-welfare]], [[l44-vo-tran-2022-rural-vulnerability-vietnam]],
  [[l45-tran-2022-rice-farmers-vulnerability-nghean]] (đối lập "ở lại thích ứng" vs "rời đi"),
  [[l42-do-2023-land-consolidation-vietnam]] (liên hệ land fragmentation → chi phí sản xuất).
