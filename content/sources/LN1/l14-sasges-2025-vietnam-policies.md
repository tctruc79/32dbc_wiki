---
type: source
title: "L14 — Sasges & Takahashi (2025) — Assessing the Influence of Three Policies on Vietnam's Economic Development"
tags: [vietnam, var, policy, electricity, globalization, privatization]
created: 2026-07-20
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN1 Economic development/L14 IE-2025 Sasges-Takahashi Assessing the influence of three policies on Vietnams economic development.pdf"
---

# L14 — Sasges & Takahashi (2025), International Economics 184: 100632

**Tác giả**: Gerard Sasges (Dept. Southeast Asian Studies, National University of Singapore),
Harutaka Takahashi (Graduate School of Economics, Kobe University; Meiji Gakuin University).
JEL: O15, O53, O55. Nhận 16/02/2025, chỉnh sửa 14/08/2025, chấp nhận 18/08/2025, online
25/08/2025 — thuộc số đặc biệt "Asian and international economics in an era of globalization".
Hợp tác thực hiện tại IMERA (Institute of Advanced Studies, University of Aix-Marseille); trình
bày tại ICES 2024 (Kindai University, Nhật) và hội nghị Pháp-Nhật tại Sciences Po Aix.

## Abstract

> This study evaluates the contributions of three key policies—electricity infrastructure,
> globalization, and privatization—to Vietnam's economic development from 1980 to 2018. This
> period can be divided into two distinct phases: Period I (1980–1997) was characterized by
> high but unstable growth, while Period II (1998–2018) witnessed sustained high growth and
> improved stability. To assess the impact of these policies on GDP growth during both phases,
> impulse response and vector autoregression (VAR) analyses were conducted. Our results show
> that during Period I, globalization and energy infrastructure had immediate and substantial
> positive impacts on GDP growth but also contributed to growth rate instability. In Period II,
> power infrastructure and globalization continued to support GDP growth, though the effects
> were relatively minor. In contrast, privatization policies had a significant impact. They
> contributed to stable household consumption growth and enhanced the resilience of GDP growth
> to policy shocks, thus playing a key role in achieving the stable and high growth trajectory
> observed since 1998. While Vietnam's development path may appear unique from the standpoint
> of existing development theories, optimal growth theory offers a more suitable explanatory
> framework.

**Tóm tắt (diễn giải)**: Đánh giá đóng góp của 3 chính sách phát triển — **electricity
infrastructure, globalization, privatization** — vào tăng trưởng kinh tế Việt Nam 1980–2018/
2019, chia 2 giai đoạn: **Period I (1980–1997)** "unstable high growth" và **Period II
(1998–2019)** "stable high growth". Kết luận: con đường phát triển của Việt Nam độc đáo so với
lý thuyết phát triển hiện có; **optimal growth theory** phù hợp làm khung giải thích hơn.

## Research Questions

Literature hiện có nghiên cứu riêng lẻ từng yếu tố (Tang et al. 2016 — energy→growth bằng
Granger causality; Binh 2011, Canh 2011, Loi 2021 — chiều ngược GDP→energy; Anwar & Nguyen 2010
— globalization qua FDI). Bài này không nhằm xác lập causality mà đánh giá **tầm quan trọng
tương đối** của 3 chính sách cùng lúc trong việc tạo ra kỷ nguyên "stable high growth" hậu 1998.

## Research Framework

3 quan sát nền tảng khởi động phân tích: (1) chuyển từ suy thoái cuối 1970s sang tăng trưởng
nhanh vào 1982; (2) tăng trưởng bình quân >6.4% suốt giai đoạn; (3) breakpoint rõ ràng năm 1997
— chia thành **Period I (1980–1997, high but unstable growth)** và **Period II (1998–2019,
stable high growth)**. Khung phân tích theo phía cầu (demand side) ở mục thảo luận: so sánh
đóng góp gross capital formation (Trung Quốc) vs household consumption (Việt Nam).

## Data

4 chuỗi hàng năm 1980–2019: GDPG (real GDP growth rate, IMF); PERELECONS (log per-capita
electricity consumption kWh, World Bank + Our World in Data); TROPEN (log (Export+Import)/GDP,
Penn World Table 10.0); PRIVZ (log domestic credit to private sector %GDP, World Bank).

## Methodology

Kiểm định nghiệm đơn vị ADF (Augmented Dickey-Fuller) → mô hình **VAR (vector autoregression)**
ước lượng OLS từng phương trình → **Impulse Response Function (IRF)** + **Variance
Decomposition (VD)** dùng thứ tự phân rã Cholesky. Phần mềm EViews 13.

- Period I: VAR(2) (lag exclusion test). Thứ tự Cholesky (CDO): **TR ⇒ PR ⇒ ELE ⇒ GDPG**.
- Period II: VAR(1) (AIC gợi ý lag 3 nhưng không ổn định). Thứ tự CDO: **ELE ⇒ PR ⇒ TR ⇒ GDPG**.

## Regression/Estimation Results

### Period I (1980–1997)

- Kiểm định VAR(2): ổn định (6/6 nghiệm nghịch đảo trong vòng tròn đơn vị), normal, không tự
  tương quan chuỗi.
- IRF: shock 1 s.d. ở TR (globalization) → GDPG tăng **2 s.d.** ngay kỳ đầu; shock 1 s.d. ở ELE
  → GDPG tăng **1.44 s.d.**. Suy yếu dần ở kỳ 2–3.
- VD: kỳ đầu ~60% biến động GDPG do shock TR, ~37% do shock ELE — cộng lại **97%** biến động
  GDPG trong Period I.

### Period II (1998–2019)

- Kiểm định VAR(1): ổn định (8/8 nghiệm nghịch đảo trong vòng tròn).
- IRF: PR và ELE chỉ tạo shock dương nhỏ **+0.2 s.d.** kỳ đầu, suy yếu nhanh; kỳ 2 ELE và TR
  chuyển ÂM (**−0.2** và **−0.3 s.d.**), duy trì âm. PR ban đầu âm nhẹ (−0.2 s.d.) rồi chuyển
  dương (+0.4 s.d.), duy trì dương — giống hiệu ứng J-curve.
- VD: kỳ đầu chỉ **25%** biến động GDPG do 3 yếu tố; tăng lên **40%** các kỳ sau (60% còn lại do
  chính GDPG tự giải thích).

## Robustness Checks

Thay đổi thứ tự Cholesky decomposition ở Period II (ELE⇒TR⇒PR⇒GDPG thay vì ELE⇒PR⇒TR⇒GDPG) cho
kết quả không đổi đáng kể — xác nhận kết luận không nhạy cảm với giả định thứ tự nhân quả tức
thời giữa 3 chính sách.

## Key Findings

1. Period I: hạ tầng năng lượng + globalization ban đầu thúc đẩy GDP growth nhưng hiệu quả suy
   giảm dần, cuối cùng thành bất lợi; globalization tác động lớn hơn hạ tầng điện đáng kể.
2. Period II: tác động ban đầu của cả hạ tầng điện lẫn globalization vẫn dương nhưng nhỏ, sớm
   chuyển âm và duy trì âm (do 90% dân số đã có điện từ 2004; tự do hóa thương mại Period II
   thúc đẩy cả xuất VÀ nhập khẩu nên net export không còn tác động rõ).
3. Privatization (chính sách mới ở Period II) là yếu tố MỚI nổi bật, đóng góp ổn định tiêu dùng
   hộ gia đình và khả năng chống chịu GDP trước policy shock.
4. So sánh VN–Trung Quốc theo phía cầu: Trung Quốc dựa gross capital formation (có tính chu kỳ);
   Việt Nam dựa household consumption ổn định — khác biệt cốt lõi giải thích vì sao VN đạt
   "stable" high growth còn TQ vẫn biến động mạnh cùng giai đoạn. WTO 2007: cú sốc âm từ net
   export gần như được bù đắp hoàn toàn bởi gross investment dương.

## Conclusion

Lý thuyết phát triển kinh điển (chuyển dịch nông nghiệp→công nghiệp qua tích lũy vốn) không phù
hợp trường hợp Việt Nam: theo **định lý Rybczynski**, tăng vốn → tăng sản xuất hàng hóa vốn
NHƯNG giảm sản xuất hàng tiêu dùng → mức sống GIẢM trong ngắn hạn nếu tiết kiệm hạn hẹp bị dồn
vào tích lũy vốn. Việt Nam thay vào đó hấp thụ lao động dư thừa vào khu vực hàng tiêu dùng
(điện khí hóa 100%, cải cách ruộng đất, phổ cập giáo dục, thu hút FDI qua Đổi Mới) → đạt mức
tiêu dùng ổn định. **Optimal growth theory** (Euler equation, saddle-point stable steady state)
là khung lý thuyết phù hợp hơn — hiếm khi được dùng trong lý thuyết phát triển kinh tế truyền
thống. So sánh Nhật Bản hậu Thế chiến II (Takahashi 2023): tái thiết không phụ thuộc quá mức
tích lũy vốn mà dùng vốn hiện có + cải cách dân chủ hóa + hấp thụ lao động dư thừa vào khu vực
hàng tiêu dùng — GDP/capita phục hồi về mức tiền chiến vào 1956 dù bối cảnh Chiến tranh Triều
Tiên.

## Ý nghĩa cho môn học/Việt Nam

- Paper minh họa trực tiếp "Vietnam as development success story" bằng dữ liệu định lượng dài
  hạn (1980–2019) — mẫu tốt cho essay dùng data Việt Nam, đối chiếu với [[essays-instructions]].
- Liên hệ [[unconditional-convergence]] (Patel et al.): Việt Nam là ví dụ cụ thể của middle-
  income country tăng trưởng nhanh và ổn định hơn theo thời gian, khớp "persistence tăng" mà
  Patel ghi nhận ở nhóm middle-income.
- Gợi ý phương pháp cho đề tài so sánh tỉnh/vùng VN (slide LN1 37): VAR + IRF + VD là công cụ
  khả thi để đánh giá tác động chính sách cấp địa phương, tương tự cách bài này làm ở cấp quốc
  gia.
- Khung "optimal growth theory" (tối đa hóa phúc lợi bình quân đầu người thay vì tích lũy vốn
  tối đa) là góc nhìn khác biệt đáng chú ý cho essay về mô hình phát triển VN — đối lập trực
  tiếp với mô hình economic-takeoff kinh điển (Todaro & Smith).

## Liên kết

- Bài giảng: [[ln1-economic-development]] · [[overview]] · Concept: [[unconditional-convergence]]
