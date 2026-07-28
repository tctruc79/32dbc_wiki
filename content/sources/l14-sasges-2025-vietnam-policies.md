---
type: source
title: "L14 — Sasges & Takahashi (2025) — Assessing the Influence of Three Policies on Vietnam's Economic Development"
tags: [vietnam, var, policy, electricity, globalization, privatization]
created: 2026-07-20
updated: 2026-07-26
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

> **Cập nhật 2026-07-26**: đã có bản full-text (12 trang, GS Heshmati gửi lại) — trước đó chỉ
> có trang abstract ScienceDirect. Toàn bộ nội dung dưới đây rút từ full-text.

## Tóm tắt

Đánh giá đóng góp của 3 chính sách phát triển — **electricity infrastructure, globalization,
privatization** — vào tăng trưởng kinh tế Việt Nam 1980–2018/2019, chia 2 giai đoạn: **Period I
(1980–1997)** "unstable high growth" và **Period II (1998–2019)** "stable high growth". Dùng
VAR kết hợp impulse response function (IRF) và variance decomposition (VD). Kết luận: Period I
— globalization + hạ tầng điện có tác động dương tức thời và lớn lên GDP growth nhưng cũng góp
phần gây bất ổn; Period II — điện + globalization vẫn hỗ trợ tăng trưởng nhưng tác động tương
đối nhỏ, trong khi **privatization có tác động đáng kể**, góp phần ổn định tăng trưởng tiêu
dùng hộ gia đình và tăng khả năng chống chịu (resilience) của GDP trước policy shock — đóng vai
trò then chốt trong quỹ đạo tăng trưởng ổn định-cao từ 1998. Kết luận: con đường phát triển của
Việt Nam độc đáo so với lý thuyết phát triển hiện có; **optimal growth theory** phù hợp làm
khung giải thích hơn.

## Câu hỏi nghiên cứu & phương pháp

- **Câu hỏi**: literature hiện có nghiên cứu riêng lẻ từng yếu tố (Tang et al. 2016 — energy→
  growth bằng Granger causality; Binh 2011, Canh 2011, Loi 2021 — chiều ngược GDP→energy; Anwar
  & Nguyen 2010 — globalization qua FDI). Bài này không nhằm xác lập causality mà đánh giá
  **tầm quan trọng tương đối** của 3 chính sách cùng lúc trong việc tạo ra kỷ nguyên "stable
  high growth" hậu 1998.
- **Dữ liệu 4 chuỗi hàng năm 1980–2019**: GDPG (real GDP growth rate, IMF); PERELECONS (log
  per-capita electricity consumption kWh, World Bank + Our World in Data — ngoại suy đến 2018
  từ dữ liệu gốc 1971–2014); TROPEN (log (Export+Import)/GDP, Penn World Table 10.0); PRIVZ (log
  domestic credit to private sector %GDP, World Bank).
- **Phương pháp**: kiểm định nghiệm đơn vị ADF (Augmented Dickey-Fuller) → mô hình **VAR
  (vector autoregression)** ước lượng OLS từng phương trình → **Impulse Response Function
  (IRF)** + **Variance Decomposition (VD)** dùng thứ tự phân rã Cholesky. Phần mềm EViews 13.
  Nhóm tác giả nhấn mạnh IRF là công cụ macro phổ biến nhưng "chưa từng được dùng" (theo hiểu
  biết của họ) để đánh giá các chính sách lịch sử kiểu này ở Việt Nam.
  - Thứ tự Cholesky decomposition (CDO): **TR ⇒ PR ⇒ ELE ⇒ GDPG** — TR (globalization) không
    chịu ảnh hưởng biến khác trong cùng kỳ, PR (privatization) chỉ chịu ảnh hưởng TR, ELE
    (electricity) chịu ảnh hưởng cả TR và PR, GDPG chịu ảnh hưởng tất cả — khớp một phần với
    kết quả causality của Tang et al. (2016). Đổi thứ tự sẽ cho diễn giải khác hẳn.
  - ELE luôn được đặt biến đầu tiên trong CDO ở Period II vì chính phủ VN cam kết ưu tiên phát
    triển hạ tầng điện xuyên suốt kể từ 1960 bất kể biến động thương mại/tư nhân hóa.

## Kết quả chính

### 3 quan sát nền tảng về tăng trưởng VN

(1) chuyển từ suy thoái cuối 1970s sang tăng trưởng nhanh vào 1982; (2) tăng trưởng bình quân
**>6.4%** suốt giai đoạn; (3) breakpoint rõ ràng năm **1997**. Bảng 1 (trung bình & độ lệch
chuẩn): VN Period I (1980–97) 6.3% (sd 3.18) vs Trung Quốc 9.6% (sd 3.05); VN Period II
(1998–2019) 6.6% (sd 0.79) vs Trung Quốc 8.5% (sd 1.87) — độ lệch chuẩn tăng trưởng TQ Period
II **hơn gấp đôi** VN. "Vietnamese miracle" không chỉ là tăng trưởng cao mà là đạt **stable
high growth** hậu 1998.

### Period I (1980–1997) — VAR(2)

Lag tối ưu = 2 (lag exclusion test, giới hạn dữ liệu tối đa lag 3). Kiểm định VAR(2): ổn định
(6/6 nghiệm nghịch đảo trong vòng tròn đơn vị), normal, không tự tương quan chuỗi.

- **IRF**: shock 1 độ lệch chuẩn (s.d.) ở TR (globalization) → GDPG tăng **2 s.d.** ngay kỳ
  đầu; shock 1 s.d. ở ELE (electricity) → GDPG tăng **1.44 s.d.**. Cả hai hiệu ứng suy yếu dần
  ở kỳ 2–3.
- **Variance Decomposition**: kỳ đầu, ~**60%** biến động GDPG do shock TR, ~**37%** do shock
  ELE — cộng lại **97%** biến động GDPG trong Period I đến từ 2 chính sách này. Globalization
  có tác động lớn hơn hạ tầng điện.

### Period II (1998–2019) — VAR(1)

AIC gợi ý lag 3 nhưng mô hình 3-lag và 2-lag không ổn định (eigenvalue >1) → chọn VAR(1) (8/8
nghiệm nghịch đảo trong vòng tròn, ổn định). Thứ tự CDO: **ELE ⇒ PR ⇒ TR ⇒ GDPG** (thứ tự thay
thế ELE⇒TR⇒PR⇒GDPG cho kết quả không đổi đáng kể).

- **IRF**: PR và ELE chỉ tạo shock dương nhỏ **+0.2 s.d.** lên GDPG kỳ đầu, suy yếu nhanh; kỳ 2
  ELE và TR chuyển sang shock ÂM (**−0.2 s.d.** và **−0.3 s.d.**), duy trì âm các kỳ còn lại
  (do 90% dân số đã có điện từ 2004 → hiệu quả đầu tư hạ tầng điện giảm mạnh; tự do hóa thương
  mại Period II thúc đẩy cả xuất VÀ nhập khẩu nên net export không còn tác động rõ lên GDP). PR
  (privatization) ban đầu shock âm nhẹ (−0.2 s.d.) rồi chuyển dương (+0.4 s.d.), duy trì dương
  suốt phần còn lại của kỳ — vai trò của globalization và privatization đều quan trọng xuyên cả
  2 Period, nhưng privatization là yếu tố MỚI nổi bật ở Period II.
  - Đọc so sánh: kỳ đầu, ELE tạo shock dương giống TR ở Period I, nhưng sau đó liên tục tạo
    shock âm — hạ tầng điện đã "hết dư địa" tác động tích cực.
- **Variance Decomposition**: kỳ đầu chỉ **25%** biến động GDPG do 3 yếu tố cộng lại; các kỳ
  sau tăng lên **40%** (60% còn lại do chính GDPG tự giải thích — quán tính nội tại). Trái
  ngược hoàn toàn Period I (97% biến động do 2 chính sách).

### 6 kết luận phân tích tổng hợp (mục 3.4)

1. Period I: hạ tầng năng lượng + globalization ban đầu thúc đẩy GDP growth nhưng hiệu quả suy
   giảm dần, cuối cùng thành bất lợi.
2. VD xác nhận 2 chính sách này chiếm 97% biến động GDP growth kỳ-kỳ trong Period I.
3. Globalization có tác động lớn hơn hạ tầng điện đáng kể trong Period I.
4. Period II: tác động ban đầu của cả hạ tầng điện lẫn globalization vẫn dương nhưng nhỏ, sớm
   chuyển âm và duy trì âm.
5. Privatization (chính sách mới ở Period II) ban đầu tác động âm nhỏ, sau chuyển dương và duy
   trì dương — giống hiệu ứng đường cong chữ J (J-curve) quan sát thấy ở cán cân thương mại.
6. VD xác nhận 3 chính sách chỉ còn tác động không đáng kể ở Period II (chỉ 40% biến động, so
   với 97% ở Period I) — nền kinh tế VN đã có khả năng chống chịu (resilience) trước policy
   shock, góp phần vào ổn định tăng trưởng nổi bật của Period II.

### Thảo luận (mục 4) — so sánh VN vs Trung Quốc theo phía cầu (demand side)

- **Trung Quốc**: gross capital formation (đầu tư gộp) đóng góp lớn nhất và có tính chu kỳ rõ
  rệt cho tăng trưởng GDP.
- **Việt Nam**: household consumption (tiêu dùng hộ gia đình) đóng góp ỔN ĐỊNH và liên tục cho
  tăng trưởng GDP — khác biệt cốt lõi giải thích vì sao VN đạt "stable" high growth còn TQ vẫn
  biến động mạnh cùng giai đoạn.
- WTO 2007: cú sốc âm lớn từ net export (do tự do hóa thương mại) gần như được bù đắp hoàn toàn
  bởi gross investment dương.
- Cơ chế ổn định Period II: hạ tầng điện nâng cao mức sống → tiêu dùng hộ gia đình ổn định; Đổi
  Mới → GDP/capita đạt 1.000 USD vào 2008, tỷ lệ nghèo giảm còn 10% vào 2004 — cải thiện phúc
  lợi đồng thời với FDI bù đắp thiếu hụt tiết kiệm nội địa mà KHÔNG phải hy sinh tiêu dùng hộ
  gia đình.

### Kết luận (mục 5) — Optimal growth theory, không phải mô hình tích lũy vốn kinh điển

- Lý thuyết phát triển kinh điển: chuyển dịch nông nghiệp→công nghiệp (economic takeoff) qua
  tích lũy vốn. Nhưng theo **định lý Rybczynski**, tăng vốn → tăng sản xuất hàng hóa vốn (dùng
  nhiều vốn) NHƯNG giảm sản xuất hàng tiêu dùng → mức sống GIẢM trong ngắn hạn nếu tiết kiệm
  hạn hẹp bị dồn vào tích lũy vốn — đây KHÔNG phải con đường tối ưu.
  - Trực tiếp phản bác/không áp dụng mô hình classic economic-takeoff (tích lũy vốn kinh điển)
    cho trường hợp Việt Nam.
- Việt Nam thay vào đó hấp thụ lao động dư thừa vào khu vực hàng tiêu dùng — chính phủ đặt mục
  tiêu điện khí hóa 100%, cải cách ruộng đất, phổ cập giáo dục, thu hút FDI (gói chính sách Đổi
  Mới) → phát triển khu vực hàng tiêu dùng → đạt mức tiêu dùng ổn định. Per-capita electricity
  consumption gần tương đương per-capita GDP — ngụ ý chính phủ VN "ngầm giải" bài toán con
  đường tiêu dùng tối ưu tối đa hóa GDP/capita.
- **Optimal growth theory** (Euler equation, saddle-point stable steady state) là khung lý
  thuyết phù hợp hơn — hiếm khi được dùng trong lý thuyết phát triển kinh tế truyền thống.
- **So sánh Nhật Bản hậu Thế chiến II** (Takahashi 2023): tái thiết không phụ thuộc quá mức
  tích lũy vốn mà dùng vốn hiện có + cải cách dân chủ hóa (land reform, giải thể zaibatsu) +
  hấp thụ lao động dư thừa vào khu vực hàng tiêu dùng — GDP/capita phục hồi về mức tiền chiến
  vào 1956 dù bối cảnh Chiến tranh Triều Tiên.

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
