---
type: concept
title: "High-Quality Economic Development (phát triển kinh tế chất lượng cao)"
tags: [china, development-measurement, composite-index, entropy-method]
created: 2026-07-20
updated: 2026-07-23
status: complete
---

# High-Quality Economic Development (HQED)

**Định nghĩa**: khái niệm chính sách của Trung Quốc (Đại hội 19 ĐCSTQ) về chuyển đổi mô hình
từ tăng trưởng **high-speed** (tốc độ) sang **high-quality** (chất lượng) — đo bằng composite
index đa chiều theo "new development concept" (Hội nghị toàn thể lần 5, khóa 18) thay vì chỉ
GDP.

## 5 nguyên tắc & đo lường (theo [[l15-yin-2025-china-hqed]])

5 primary indicators — **innovation, coordination, greenness, openness, sharing** — chia
thành 11 secondary + **21 tertiary indicators** cụ thể (R&D input/output, chênh lệch thu nhập
thành thị-nông thôn, tiêu thụ năng lượng/GDP, tỷ lệ phủ xanh, kim ngạch XNK/GDP, chi giáo dục
bình quân...). Trọng số tính bằng **entropy method** (objective weighting dựa trên information
entropy mỗi chỉ tiêu, tránh thiên lệch chủ quan như AHP) → tổng hợp thành composite score
0–1. Phân tích không gian-thời gian bằng Moran's Index (spatial autocorrelation), K-means
clustering, và Gaussian kernel density estimation.

## Kết quả thực nghiệm (Trung Quốc, 30 tỉnh, 2011–2021)

- Miền Đông (Quảng Đông, Giang Tô, Bắc Kinh, Chiết Giang, Thượng Hải, Sơn Đông) vượt trội rõ
  rệt Trung/Đông Bắc/Tây — phát triển "uneven, uncoordinated, insufficient" (không đều, thiếu
  phối hợp, chưa đủ).
- Trend chung đi lên (kernel density đỉnh dịch phải liên tục) nhưng đồng thời **polarization
  3 đỉnh** — khoảng cách tỉnh dẫn đầu và tỉnh sau vẫn doãng ra dù mặt bằng chung cải thiện.
  Spatial clustering có ý nghĩa thống kê suốt 2011–2021 (Moran's I, p<0.05).

## Liên hệ Việt Nam

Khung đo composite cấp tỉnh (entropy + 5 nguyên tắc + cluster + kernel density) replicate
được trực tiếp cho Việt Nam — nối với gợi ý convergence liên tỉnh của giáo sư
([[unconditional-convergence]], slide LN1 37). Hiện tượng polarization 3 đỉnh dù trend chung
cải thiện là lưu ý quan trọng: convergence cấp quốc gia (Patel et al.) không tự động đảm bảo
σ-convergence liên tỉnh trong nội bộ một nước.

## Liên kết

- [[l15-yin-2025-china-hqed]] · [[ln1-economic-development]] · [[unconditional-convergence]]
