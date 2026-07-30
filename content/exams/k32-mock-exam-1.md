---
type: exam
title: "K32 Mock Exam — Set 1 (LN1 & LN2)"
tags: [exam, mock-exam, k32, convergence, deep-roots, institutions, corruption, fdi-informal-economy]
created: 2026-07-30
updated: 2026-07-30
status: complete
also_covers: []
---

# K32 Mock Exam — Set 1 (LN1 & LN2)

⚠️ **Đây KHÔNG phải đề thi thật** — giáo sư chưa công bố shortlist 20 bài (dự kiến 30/8) hay đề
thi K32. Đây là đề thi **mô phỏng do Claude tự soạn**, bám sát nguyên format/luật thi thật của
[[k31-final-exam]] (khóa trước, cùng môn/GS) nhưng thay bằng các paper trong reading list K32
đã deep-ingest (LN1–LN2, 11 papers). Mục đích: luyện đúng **dạng câu hỏi** ("trình bày findings +
drivers/mechanism/impacts của 1 paper cụ thể") và luyện viết đáp án trong khuôn khổ luật thi thật,
KHÔNG phải để đoán trúng đề. Đáp án dưới bám sát nội dung đã deep-ingest trong wiki (không phải
web search như [[k31-final-exam]] phải làm với paper ngoài reading list).

Xem thêm: [[k32-mock-exam-2]] (Set 2, LN3–LN5) · [[exam-prep]] (ôn thi tổng hợp).

## 0. Luật thi & cơ cấu điểm (mô phỏng theo K31)

- **Hình thức**: Written exam (50 điểm) + Essay (50 điểm) — 50/50, PASS ≥50% mỗi phần theo
  [[syllabus-2026]] (K31 áp dụng ngưỡng 55%/27.5 điểm — chưa rõ K32 theo ngưỡng nào, xem
  [[k31-final-exam]] mục 0).
- **Thời gian**: 120 phút, closed-book, có giám thị.
- **Cơ cấu câu hỏi**: A. Compulsory — Câu 1, 2 (mỗi câu 12.5đ, PHẢI làm cả hai). B. Elective —
  Câu 3–6 (mỗi câu 12.5đ, chọn tối thiểu 2 câu; làm nhiều hơn thì chỉ 2 câu điểm cao nhất tính
  vào tổng). Tổng: 2 compulsory + 2 elective tốt nhất × 12.5 = 50 điểm.

## 1. Đề bài

### A. Compulsory questions (each 12.5 points)

**Question 1**: Acemoglu, Johnson and Robinson (AER, 2001) examined the colonial origins of
comparative development. Discuss their identification strategy, findings concerning the causal
role of institutions, and the main threats to the validity of their approach.

**Question 2**: Patel, Sandefur and Subramanian (JDE, 2021) examined unconditional convergence
in the post-1990 growth literature. Discuss their findings, the evidence they present, and its
implications for the "middle-income trap" framework.

### B. Elective questions (choose a minimum of 2 questions, each 12.5 points)

**Question 3**: Spolaore and Wacziarg (JEL, 2013) survey the "deep roots" literature on economic
development. Discuss their findings concerning the fundamental factors that explain the
persistence of development outcomes, and how their argument relates to the institutions-based
explanation of comparative development.

**Question 4**: Nunn (CJE, 2019) offers a critical reflection on Western intervention in
developing countries. Discuss his findings and arguments concerning the effects of aid, trade
policy, and randomized controlled trials (RCTs) on development outcomes.

**Question 5**: Mauro (QJE, 1995) examined corruption and growth. Discuss his findings concerning
the identification strategy, the channels through which corruption affects investment and growth,
and the economic magnitude of the effect.

**Question 6**: Huynh and Tran (2025) examined FDI, economic growth, governance quality and the
informal economy in Vietnam. Discuss their findings concerning the channels through which FDI
affects the informal economy, and the implications for Vietnam's development policy.

## 2. Đáp án chi tiết

### Question 1 — Colonial origins of comparative development (Acemoglu, Johnson & Robinson, AER 2001)

Xem đầy đủ: [[l21-acemoglu-2001-colonial-origins]].

**Identification strategy**: chuỗi nhân quả settler mortality (ngoại sinh, do bệnh dịch thời
thuộc địa) → khả năng định cư của người châu Âu → chiến lược thuộc địa (extractive vs
settlement) → early institutions → institutions hiện tại → thu nhập/capita hiện tại. Dùng
settler mortality làm biến công cụ (2SLS) cho chất lượng institutions hiện tại (đo bằng "risk of
expropriation" index).

**Findings**: 2SLS α=0.94 (so với OLS α=0.52) — institutions có tác động nhân quả LỚN HƠN ước
lượng OLS thông thường (OLS bị attenuation bias do đo lường sai số + endogeneity ngược chiều).
First stage: settler mortality giải thích 27% biến thiên institutions. Kết luận trung tâm:
institutions là **fundamental cause** (nguyên nhân gốc) của phát triển kinh tế hiện đại, vượt
trội các giải thích cạnh tranh dựa trên geography hay khí hậu thuần túy.

**Threats to validity**: (1) Exclusion restriction có thể vi phạm nếu settler mortality lịch sử
ảnh hưởng thu nhập hiện tại qua kênh KHÁC ngoài institutions (vd qua human capital, dịch bệnh vẫn
tồn tại) — bài kiểm định bằng cách thêm kiểm soát khí hậu/địa lý/tài nguyên, kết quả robust; (2)
[[l13-spolaore-2013-deep-roots]] (L13) sau đó chỉ ra "reversal of fortune" — bằng chứng nền tảng
của khung AJR — biến mất khi thêm nước châu Âu vào mẫu và điều chỉnh theo ancestry (Putterman &
Weil 2010), đặt nghi vấn cho độ vững của identification; (3) overidentification test trong bài
gốc không bác bỏ giả thuyết, nhưng đây vẫn là điểm tranh luận xuyên suốt literature sau này (xem
[[exam-prep]] mục 3.1, 3.2).

**Liên hệ**: [[institutions]] · [[deep-roots-of-development]].

### Question 2 — Unconditional convergence & the middle-income trap (Patel, Sandefur & Subramanian, JDE 2021)

Xem đầy đủ: [[l11-patel-2021-unconditional-convergence]].

**Findings**: dùng non-linear least squares trên 3 bộ dữ liệu (Maddison, PWT, WDI) 1960–2019,
bài chỉ ra unconditional convergence (β-convergence không kiểm soát) — vốn "biến mất" trong dữ
liệu thập niên 1990 làm literature chuyển sang khung conditional convergence — đã **quay trở
lại** kể từ khoảng 1995. Growth theo cross-section hiện có dạng inverted-U (hình chữ U ngược):
middle-income countries tăng trưởng NHANH NHẤT kể từ 1980s, cao hơn 0.50–0.75 điểm % so với
trước 1985.

**Bằng chứng**: đo cả volatility (giảm) và persistence (tăng) của tăng trưởng để củng cố đây là
σ-convergence thực sự chứ không chỉ β-convergence nhất thời.

**Implications cho middle-income trap**: kết quả trực tiếp phản bác khung "middle-income trap"
(Gill & Kharas 2015) — vốn cho rằng nước middle-income "mắc kẹt", tăng trưởng chậm lại sau khi
hết lợi thế lao động rẻ. Patel et al. gọi hiện tượng ngược lại là "more trampoline than trap".
Đây là điểm căng thẳng đáng chú ý với chính course design K32 — [[essays-instructions]] gợi ý
middle-income trap làm khung essay (qua [[technology-upgrading]], [[creative-accumulation]]), nên
cần đối thoại với bằng chứng phản bác này thay vì bỏ qua (xem [[exam-prep]] mục 3.3).

**Liên hệ**: [[unconditional-convergence]] · [[middle-income-trap]].

### Question 3 — Deep roots of development (Spolaore & Wacziarg, JEL 2013)

Xem đầy đủ: [[l13-spolaore-2013-deep-roots]].

**Findings**: bài survey lý thuyết (không phải 1 nghiên cứu thực nghiệm đơn lẻ) + hồi quy minh
họa (genetic distance/FST, ancestry composition, population density 1500) lập luận rằng
literature tăng trưởng đã dịch trọng tâm từ **proximate determinants** (tích lũy vốn, công nghệ)
sang **fundamental factors** bắt rễ lịch sử dài hạn để trả lời "tại sao" thay vì chỉ "như thế
nào". 4 kênh truyền persistence qua thế hệ: genetic, epigenetic, behavioural, symbolic (văn
hóa/ngôn ngữ).

**Quan hệ với khung institutions**: L13 lập luận geography/ancestry là kênh truyền persistence
**trực tiếp** — khác với AJR (L21, Question 1) vốn cho rằng kênh truyền là institutions. L13 dẫn
lại "reversal of fortune" của AJR 2002 làm ví dụ minh họa, rồi chỉ ra bằng chứng này **biến mất**
khi thêm Europe vào mẫu và điều chỉnh ancestry (Putterman & Weil 2010) — tức L13 đặt câu hỏi
ngược lại độ vững của khung institutions-thuần-túy, dù không phủ nhận hoàn toàn vai trò
institutions (có thể cả 2 kênh cùng hoạt động).

**Liên hệ**: [[deep-roots-of-development]] · [[institutions]] — xem thêm [[exam-prep]] mục 3.1.

### Question 4 — Rethinking economic development (Nunn, CJE 2019)

Xem đầy đủ: [[l12-nunn-2019-rethinking-econ-dev]].

**Findings**: bài phản tư chính sách (không có mô hình thực nghiệm riêng) lập luận viện trợ và
chính sách chủ động của phương Tây thường gây hại nhiều hơn giúp đỡ. Bằng chứng: aid thường
"thất thoát" 49–87% ở giáo dục châu Phi; antidumping duties cao gấp 10–20 lần MFN tariffs, tương
quan dương với GDP/capita nước khởi xướng (r=0.55) — nước giàu chủ động nhắm nước nghèo; case cá
tra Việt Nam 2003: thu nhập nông dân chuyên canh giảm 40% sau khi Mỹ áp thuế antidumping — lớn
hơn bất kỳ can thiệp phát triển/aid nào từng ghi nhận.

**Phê phán RCT**: fixed cost cao, giả định causal phổ quát, ít hợp tác học giả địa phương (J-PAL:
chỉ 2/170 affiliate ngoài Âu-Mỹ) — bỏ qua bối cảnh local.

**Kết luận**: phương Tây giúp nhiều nhất bằng cách **NGỪNG** chủ động gây hại (tariffs,
antidumping, hạn chế di dân) hơn là chỉ tập trung "sửa" nước nghèo bằng thêm aid.

**Liên hệ**: đối lập với Question 5 (Mauro) và [[l23-besley-ghatak-2010-property-rights]] vốn lạc
quan hơn về khả năng cải thiện chính sách — xem [[exam-prep]] mục 3.4.

### Question 5 — Corruption and growth (Mauro, QJE 1995)

Xem đầy đủ: [[l22-mauro-1995-corruption-growth]].

**Identification**: dùng ethnolinguistic fractionalization (ELF) làm instrument cho corruption —
xã hội phân mảnh sắc tộc thường có patronage/bureaucracy kém (tương quan cao với corruption)
nhưng có thể coi ngoại sinh với biến kinh tế hiện tại.

**Cơ chế**: corruption cao → nhà đầu tư e ngại rủi ro/chi phí giao dịch (hối lộ, thủ tục) →
investment giảm → growth giảm.

**Độ lớn**: 1 độ lệch chuẩn cải thiện corruption index → investment tăng ~2.9% GDP. Minh họa cụ
thể trong bài: nếu Bangladesh nâng bureaucratic integrity lên mức Uruguay, investment +5%, GDP
growth +0.5 điểm phần trăm.

**Liên hệ**: cùng cụm Institutions với [[l21-acemoglu-2001-colonial-origins]] (Question 1) —
Mauro khuyến nghị chính sách cụ thể, lạc quan hơn Nunn (Question 4) về khả năng cải thiện chính
sách từ bên trong quốc gia. Xem [[institutions]] · [[exam-prep]] mục 3.4.

### Question 6 — FDI, growth, governance and the informal economy in Vietnam (Huynh & Tran, 2025)

Xem đầy đủ: [[l26-huynh-tran-2025-fdi-informal-economy]].

**Phương pháp**: panel 63 tỉnh Việt Nam 2006–2021, System GMM (xử lý nội sinh động).

**2 kênh tác động của FDI lên informal economy**:
- **Kênh growth**: FDI thúc đẩy tăng trưởng → tạo việc làm chính thức → giảm động lực tham gia
  khu vực phi chính thức (modernization theory/Lewis dual economy).
- **Kênh governance**: FDI tạo áp lực cải thiện chất lượng quản trị địa phương (đo bằng chỉ số
  PAPI 6 chiều — áp lực cải cách để giữ chân đầu tư) → giảm không gian cho hoạt động informal
  (institutional theory).

**Findings**: cả 2 kênh hoạt động ĐỒNG THỜI — hệ số tương tác FDI×GROW và FDI×GOV đều âm có ý
nghĩa thống kê; GOV là biến có hệ số âm lớn nhất trong mô hình, tức kênh governance mạnh hơn kênh
growth thuần túy; formal và informal economy là substitutes. Robust qua 2 kiểm định thay thế
(arcsinh(FDI), proxy TAX/GDP).

**Hàm ý chính sách cho Việt Nam**: thu hút FDI không chỉ có lợi qua tạo việc làm trực tiếp mà còn
gián tiếp cải thiện chất lượng quản trị địa phương — chính sách nên gắn thu hút FDI với cải cách
governance cấp tỉnh để tối đa hóa tác động giảm informal economy.

**Liên hệ**: [[institutions]] mục ứng dụng thực nghiệm Việt Nam.

## Liên kết

- [[k32-mock-exam-2]] · [[k31-final-exam]] · [[exam-prep]] · [[overview]]
- Papers trong đề: [[l21-acemoglu-2001-colonial-origins]],
  [[l11-patel-2021-unconditional-convergence]], [[l13-spolaore-2013-deep-roots]],
  [[l12-nunn-2019-rethinking-econ-dev]], [[l22-mauro-1995-corruption-growth]],
  [[l26-huynh-tran-2025-fdi-informal-economy]]
