---
type: source
title: "L15 — Yin, Bai & Sun (2025) — Measurement and Spatiotemporal Dynamic Evolution of China's High-Quality Economic Development"
tags: [china, high-quality-development, entropy-method, regional, cluster-analysis]
created: 2026-07-20
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN1 Economic development/L15 SF-2025 Yin et al Measurement and spatiotemporal dynamic evolution of Chinas high-quality economic development.pdf"
---

# L15 — Yin, Bai & Sun (2025), Sustainable Futures 10: 101420

**Tác giả**: Liang Yin, Xiaodong Bai, Xuelian Sun — School of Mathematical Sciences, Dalian
Minzu University, Liaoning, Trung Quốc. Nhận 1/5/2025, chấp nhận 4/10/2025, online 11/10/2025.
Open access CC BY-NC. Tài trợ bởi Social Science Foundation of Liaoning Province (Grant
L21BJY009). Keywords: high-quality development, five principles of development, entropy
method, cluster analysis, kernel density estimation.

## Abstract

> China's economic development has shifted from high speed to high quality. This study
> constructs an evaluation index for China's high-quality development utilizing a new
> development concept. The entropy method and cluster analysis were used to assess the level of
> high-quality development in China between 2011 and 2021. Kernel density estimation method was
> employed to explore spatiotemporal dynamics. The results reveal significant differences in
> the level of economic development among provinces in China, the eastern region is
> significantly better than the central, northeastern, and western regions. From the
> perspective of the sub-item evaluation, challenges with uneven, uncoordinated, and
> insufficient economic development exist in various Chinese provinces.

**Tóm tắt (diễn giải)**: Xây dựng chỉ số đánh giá [[high-quality-development]] (HQED) của
Trung Quốc dựa trên "new development concept" (5 nguyên tắc: **innovation, coordination,
greenness, openness, sharing**). Dùng **entropy method** + **cluster analysis** đánh giá mức
HQED 30 tỉnh Trung Quốc (2011–2021); **kernel density estimation** để khám phá spatiotemporal
dynamics. Kết quả: chênh lệch lớn giữa các tỉnh, miền Đông vượt trội miền Trung/Đông Bắc/Tây;
phát triển "uneven, uncoordinated, insufficient" ở nhiều tỉnh.

## Research Questions

Đại hội 19 ĐCSTQ tuyên bố kinh tế Trung Quốc chuyển từ "high-speed growth" sang "high-quality
development" (HQED). Đo lường HQED là bài toán khó về mặt thống kê dù khái niệm nghe đơn giản —
bài hỏi: đo HQED cấp tỉnh thế nào, và HQED tiến triển theo không gian-thời gian ra sao giai
đoạn 2011–2021?

## Research Framework

Chỉ số tổng hợp theo "new development concept" — **5 nguyên tắc**: innovation, coordination,
greenness, openness, sharing (Hội nghị toàn thể lần 5 Ban Chấp hành TW khóa 18 ĐCSTQ) → 5
primary indicators → 11 secondary → **21 tertiary indicators** (vd: số người R&D, chi R&D,
chênh lệch thu nhập thành thị-nông thôn, tỷ lệ chi an sinh xã hội, tiêu thụ năng lượng/GDP, tỷ
lệ phủ xanh, tổng kim ngạch XNK/GDP, chi tiêu giáo dục bình quân, số kỹ thuật viên y tế/vạn
dân...).

## Data

China Statistical Yearbook, China Urban Statistical Yearbook, China Energy Statistical
Yearbook (2011–2021, 30 tỉnh/thành, loại Tây Tạng, Hong Kong, Macao, Đài Loan).

## Methodology

- **Entropy method** (công thức 1–4): chuẩn hóa dữ liệu (range method) → tính information
  entropy mỗi chỉ tiêu → suy ra trọng số khách quan (objective weighting, tránh thiên lệch chủ
  quan) → tổng hợp điểm.
- Phân tích không gian: **Global/Local Moran's Index** (spatial autocorrelation), **K-means
  clustering** (phân nhóm 4 mức HQED), **Gaussian kernel density estimation** (tiến hóa phân
  phối theo thời gian).

## Regression/Estimation Results

- **Top-6 ổn định 2011–2021**: Quảng Đông, Giang Tô, Bắc Kinh, Chiết Giang, Thượng Hải, Sơn
  Đông — đều miền Đông. Năm 2021: Quảng Đông cao nhất (0.7202), Cam Túc thấp nhất (0.2029).
- **Moran's I toàn cục** luôn p<0.05 giai đoạn 2011–2021 → spatial clustering có ý nghĩa thống
  kê; rõ nhất 2016 và 2020. Vùng High-High tập trung miền Đông (Thượng Hải, Giang Tô); vùng
  Low-Low ở miền Tây (Tân Cương, Cam Túc).
- **K-means 4 nhóm** (2021): nhóm cao nhất chỉ Quảng Đông + Giang Tô; nhóm thấp tập trung miền
  Tây.
- **Kernel density**: đỉnh phân phối dịch phải liên tục (2011→2021) → HQED toàn quốc cải thiện;
  nhưng đuôi phải mở rộng, **polarization 3 đỉnh** ở hầu hết các năm — khoảng cách giữa tỉnh
  dẫn đầu và tỉnh sau ngày càng doãng ra dù nhìn chung cải thiện. Breakpoint 2014 (cải cách
  toàn diện + Belt and Road).

## Key Findings

Chênh lệch lớn giữa các tỉnh: miền Đông vượt trội miền Trung/Đông Bắc/Tây, động lực nhóm dẫn
đầu là lợi thế chính sách/thể chế (Vùng vịnh Quảng Đông-Hong Kong-Macao, tích hợp đồng bằng
Trường Giang), cơ cấu kinh tế công nghệ cao, vị trí địa lý mở (FDI >60%), nguồn nhân lực chất
lượng cao. Phát triển "uneven, uncoordinated, insufficient" (không đều, thiếu phối hợp, chưa
đủ) ở nhiều tỉnh — cải thiện chung không đồng nghĩa hội tụ liên tỉnh.

## Conclusion

Khuyến nghị chính sách: (1) nâng cao innovation không đều — đầu tư R&D chiến lược (AI, IoT,
cloud), ưu đãi thuế startup vùng khó khăn, vi tín dụng cho DN nhỏ; (2) tăng cường coordination
đô thị-nông thôn — đầu tư hạ tầng internet/giao thông nông thôn, mở rộng an sinh xã hội; (3)
tăng bền vững qua green total factor productivity — đào tạo nông dân/DN áp dụng năng lượng tái
tạo; (4) đẩy mạnh cải cách-mở cửa toàn diện, hợp tác Belt and Road. Hạn chế tác giả tự nhận:
chưa nghiên cứu coupling với digital economy/AI; thiếu dữ liệu một số tỉnh phải nội suy; cần
giải pháp "tailored" hơn theo vùng.

## Ý nghĩa cho môn học/Việt Nam

- Khung đo lường composite index cấp tỉnh (entropy method + 5 nguyên tắc + cluster + kernel
  density) là **mẫu phương pháp trực tiếp replicate được cho Việt Nam** (tỉnh/thành) — khớp
  với gợi ý của giáo sư về heterogeneous growth giữa các tỉnh VN
  ([[l11-patel-2021-unconditional-convergence]], slide LN1 37).
- Polarization 3 đỉnh dù trend chung đi lên là minh họa thực nghiệm tốt cho thấy
  [[unconditional-convergence]] cấp quốc gia không tự động đồng nghĩa **σ-convergence cấp
  tỉnh** trong nội bộ một nước — dữ liệu tốt để đối chiếu luận điểm hội tụ liên vùng ở VN.

## Liên kết

- Bài giảng: [[ln1-economic-development]] · Concept: [[high-quality-development]],
  [[unconditional-convergence]]
