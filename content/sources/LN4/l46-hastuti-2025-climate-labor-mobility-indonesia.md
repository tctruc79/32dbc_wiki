---
type: source
title: "L46 — Hastuti et al. (2025) — Climate Change and Labor Mobility: Agricultural Households in Indonesia"
tags: [labor-mobility, climate-change, indonesia, instrumental-variable, mediation-analysis, structural-transformation]
created: 2026-07-29
updated: 2026-07-29
status: complete
source_file: "raw/3. LECTURE NOTES/LN4 Agriculture climate changes and natural disasters/L46 WDP-2025 Hastuti et al Climate change and labor mobility.pdf"
---

# L46 — Hastuti, Dartanto, Halimatussadiah & Rifin (2025), World Development Perspectives 40: 100750

**Tác giả**: Hastuti, Teguh Dartanto, Alin Halimatussadiah (Universitas Indonesia), Amzul Rifin
(Bogor Agricultural University). Keywords: Agricultural Households, Climate Change, Labor
Mobility, Indonesia, Instrumental variable, Mediation analysis.

## Tóm tắt

**Duy nhất trong LN4 nghiên cứu ngoài Việt Nam** — bối cảnh Indonesia. Biến đổi khí hậu làm gián
đoạn canh tác và giảm năng suất, tạo bất định cho hộ nông nghiệp, thúc đẩy họ tìm sinh kế thay
thế. Bài xem xét tác động biến thiên lượng mưa và nhiệt độ (đo bằng coefficient of variation) lên
**labor mobility** — ở đây định nghĩa là **dịch chuyển KHU VỰC nghề nghiệp (sectoral shift)** của
chủ hộ, KHÔNG nhất thiết phải di cư địa lý — dùng dữ liệu dài hạn **Indonesia Family Life Survey
(IFLS)** 2000/2007/2014. Dùng instrumental variable (độ cao và vĩ độ) để xử lý nội sinh biến khí
hậu. Kết quả: biến thiên mưa và nhiệt độ đều làm tăng xác suất labor mobility, tác động chủ yếu
qua kênh **chi phí sản xuất nông nghiệp**.

## Câu hỏi nghiên cứu & phương pháp

- **2 mục tiêu**: (1) tác động nhân quả của biến đổi khí hậu lên labor mobility hộ nông nghiệp
  Indonesia; (2) vai trò trung gian (mediating) của **farm production costs** trong quan hệ này.
- **Định nghĩa labor mobility — khác biệt quan trọng với các paper Việt Nam trong LN4**: đây là
  chuyển đổi KHU VỰC KINH TẾ (nông nghiệp → phi nông nghiệp) của chủ hộ, loại trừ di cư xuyên biên
  giới; đo theo cặp đợt khảo sát IFLS (2000→2007, 2007→2014), biến nhị phân (1=rời nông nghiệp).
  Đây là paper DUY NHẤT trong LN4 nghiên cứu **exit/mobility ra khỏi nông nghiệp** thay vì
  coping/adaptation TẠI CHỖ của hộ tiếp tục làm nông — khác hẳn cách tiếp cận "ở lại và thích ứng"
  của L43/L44/L45.
- **Dữ liệu**: IFLS 2000/2007/2014, đại diện ~83% dân số Indonesia, 13 tỉnh. Mẫu giới hạn hộ có
  chủ hộ làm nông nghiệp: **4.909 hộ**. Biến khí hậu (rainfall, temperature) từ **WorldClim**,
  đo bằng **coefficient of variation (CV)** trong 14 năm cấp cận-huyện (sub-district) — CV trung
  bình rainfall 2,4%, temperature 0,4%.
- **Instrumental variable**: **vĩ độ (latitude)** làm IV cho biến thiên mưa (vĩ độ thấp mưa nhiều
  hơn), **độ cao (altitude)** làm IV cho biến thiên nhiệt độ (vùng cao nóng lên nhanh gấp ~3 lần
  trung bình toàn cầu). Kiểm định mạnh: Kleibergen-Paap rk Wald F = 57,6 (rainfall)/60,8
  (temperature) — vượt xa ngưỡng Stock-Yogo; Sargan-Hansen xác nhận có nội sinh trong biến khí
  hậu gốc (biện minh cho việc dùng IV).
- **Mediation analysis — điểm phương pháp luận nổi bật, đóng góp mới của paper**: dùng khung
  **IV-mediate của Dippel et al. (2020)** — phân tách tác động của khí hậu lên labor mobility
  thành **Direct Effect** (μ2) và **Indirect Effect** qua kênh **farm production cost** (κ1×μ1).
  Đây là paper DUY NHẤT trong LN4 không chỉ đo tác động mà còn mở "hộp đen" CƠ CHẾ truyền dẫn.
- **Kiểm định vững**: IV-Probit (mô hình phi tuyến), Kinky Least-Squares (KLS, Kripfganz & Kiviet
  2021) để kiểm tra độ nhạy với các mức tương quan giả định giữa biến khí hậu và nhiễu không quan
  sát được.

## Kết quả chính

- **Tác động chính (Table 2, IV)**: 1% tăng CV lượng mưa → xác suất labor mobility tăng
  <span class="stat">0,47 điểm %</span>*** ; 1% tăng CV nhiệt độ → tăng
  <span class="stat">1,38 điểm %</span>*** — cả hai có ý nghĩa ở mức 1%. OLS cho hệ số dương
  nhưng KHÔNG có ý nghĩa thống kê — cho thấy nội sinh làm attenuation bias nếu không dùng IV.
- **Mediation (Table 4)**: với biến thiên MƯA, cả direct effect và indirect effect (qua farm
  production cost) đều dương và có ý nghĩa — chi phí sản xuất là kênh truyền dẫn thực sự. Với biến
  thiên NHIỆT ĐỘ, indirect effect qua production cost KHÔNG có ý nghĩa thống kê — tác động nhiệt
  độ có thể đến từ kênh khác (năng suất, điều kiện lao động trực tiếp) chứ không chỉ qua chi phí.
- **Heterogeneity (Table 3)**:
  - **Vùng**: tác động mạnh hơn ở **đảo Java** (rainfall +0,41 điểm%, temperature +6,23 điểm%),
    KHÔNG có ý nghĩa ở ngoài Java — do Java có nhiều cơ hội việc làm phi nông nghiệp hơn.
  - **Diện tích đất**: hộ có đất **NHỎ** (<0,5ha) dễ tổn thương hơn — hệ số rainfall/temperature
    lớn hơn và có ý nghĩa so với hộ đất lớn (≥1ha, hệ số không có ý nghĩa) — hộ đất lớn có nguồn
    lực/công nghệ/vốn tốt hơn để thích ứng tại chỗ, giảm nhu cầu rời nông nghiệp.
  - **Học vấn — kết quả có sắc thái, cần đọc kỹ**: nông dân học vấn THẤP (≤tiểu học) có hệ số CV
    mưa/nhiệt độ LỚN hơn và có ý nghĩa mạnh hơn — tức là NHẠY CẢM hơn với biến thiên khí hậu khi
    đo bằng marginal effect trong hồi quy tương tác — tác giả diễn giải là do áp lực kinh tế trực
    tiếp hơn. Đồng thời, tác giả cũng ghi nhận (như một phát biểu tổng quát riêng, không phải hệ
    số hồi quy) rằng nông dân học vấn CAO hơn nhìn chung dễ chuyển sang việc phi nông hơn vì có cơ
    hội tốt hơn. Hai phát biểu này không mâu thuẫn nhưng đo hai thứ khác nhau (độ nhạy cảm biên
    với cú sốc khí hậu vs. xác suất nền chuyển việc) — cần trích dẫn cẩn thận, không đơn giản hóa
    thành "học vấn cao → labor mobility cao hơn do khí hậu".
- **Robustness**: IV-Probit cho kết quả nhất quán (rainfall +0,48 điểm%, temperature +1,37 điểm%);
  KLS trong khoảng tương quan giả định [−0,50, −0,10] vẫn cho hệ số dương có ý nghĩa.

## Ý nghĩa cho môn học/Việt Nam

- **Vị trí đặc biệt trong LN4**: đây là paper DUY NHẤT không phải Việt Nam (Indonesia) — mở rộng
  câu chuyện "nông nghiệp & biến đổi khí hậu" ra ngoài phạm vi VN, cho thấy tính phổ quát của vấn
  đề trong khu vực Đông Nam Á. Cũng là paper DUY NHẤT đóng khung climate impact như một cú hích
  **structural transformation** (theo mô hình Lewis 1954 dual-sector — nông nghiệp dư thừa lao
  động chuyển sang công nghiệp/dịch vụ) thay vì như một cú sốc phúc lợi cần "coping" tại chỗ.
- **Đối lập rõ với L43/L44/L45**: các paper Việt Nam trong LN4 đều nghiên cứu hộ **Ở LẠI** nông
  nghiệp và tìm cách đo/giảm vulnerability (LVI, coping strategies, remittances...). L46 nghiên
  cứu hộ **RỜI ĐI** — coi labor mobility chính LÀ chiến lược thích ứng (adaptation strategy), không
  phải hậu quả cần khắc phục. Đây là góc nhìn bổ khuyết quan trọng cho câu hỏi ôn thi so sánh
  "vulnerability/adaptation-in-place" (L43–L45) vs "exit/mobility" (L46) như 2 phản ứng khác nhau
  trước cùng một loại cú sốc khí hậu.
- **Phương pháp luận IV đáng đối chiếu với L41/L42**: L46 tìm được IV ngoại sinh hợp lệ
  (latitude/altitude) trong khi L41 (Ho 2021) phải dùng Oster (2019) bias-adjustment vì "daunting
  task" tìm IV cho land tenure, và L42 dùng Lewbel (2012) heteroscedasticity-based IV nội tại — 3
  paper, 3 chiến lược xử lý endogeneity khác nhau khi đối tượng nghiên cứu (land tenure, land
  consolidation, climate) đều khó tìm biến công cụ ngoại sinh sạch.
- **Việt Nam**: dù không phải bối cảnh VN, phát hiện "hộ đất nhỏ dễ tổn thương và dễ rời nông
  nghiệp hơn" và "chi phí sản xuất là kênh truyền dẫn chính" có tính tham chiếu cho Việt Nam —
  liên hệ trực tiếp tới câu chuyện land fragmentation của
  [[l42-do-2023-land-consolidation-vietnam]] (đất nhỏ/phân mảnh → chi phí sản xuất cao hơn) và gợi
  ý một cơ chế TIỀM NĂNG (dù chưa được paper nào trong LN4 kiểm định trực tiếp ở VN): liệu land
  consolidation ở Việt Nam có làm giảm labor mobility ra khỏi nông nghiệp do climate shock hay
  không?

## Liên kết

- Bài giảng: [[ln4-agriculture-climate-change-natural-disasters]]
- Cùng lecture: [[l43-le-2020-floods-household-welfare]], [[l44-vo-tran-2022-rural-vulnerability-vietnam]],
  [[l45-tran-2022-rice-farmers-vulnerability-nghean]] (đối lập "ở lại thích ứng" vs "rời đi"),
  [[l42-do-2023-land-consolidation-vietnam]] (liên hệ land fragmentation → chi phí sản xuất).
