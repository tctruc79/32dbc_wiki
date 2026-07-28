---
type: source
title: "L26 — Huynh & Tran (2025) — FDI, Economic Growth, Governance Quality and the Informal Economy"
tags: [fdi, governance, informal-economy, vietnam, panel-data, gmm]
created: 2026-07-23
updated: 2026-07-26
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L26 IE-2025 Huynh-Tran FDI economic growth governance quality and the informal economy.pdf"
---

# L26 — Huynh, C.M. & Tran, N.H. (2025), International Economics 183: 100619

**Tác giả**: Cong Minh Huynh (Becamex Business School, Eastern International University, Bình
Dương), Nam Hoai Tran (School of Finance, Đại học Kinh tế TP.HCM — UEH). JEL: F21, E26, H11,
H26, O17. Nhận 09/10/2024, chỉnh sửa 09/05/2025, chấp nhận 24/06/2025, online 26/06/2025. Tài
trợ một phần bởi UEH.

> **Cập nhật 2026-07-26**: đã có bản full-text (17 trang, GS Heshmati gửi lại) — trước đó chỉ
> có trang abstract ScienceDirect. Toàn bộ nội dung dưới đây rút từ full-text.

## Tóm tắt

**Highlights**: (1) FDI inflows giảm informal economy qua kênh economic growth và governance
quality; (2) formal và informal economy là substitutes ở Việt Nam; (3) nghèo đói + thất nghiệp
là động lực chính của hoạt động kinh tế phi chính thức; (4) fiscal policy chiến lược +
urbanization thu hẹp khu vực phi chính thức hiệu quả; (5) thu hút FDI + cải thiện governance có
thể giúp chính thức hóa nền kinh tế.

Nghiên cứu thực nghiệm bằng panel data **63 tỉnh Việt Nam, 2006–2021**, xem xét FDI ảnh hưởng
informal economy thế nào. Kết quả: (i) FDI giảm informal economy qua 2 kênh — thúc đẩy growth
+ cải thiện local governance quality; (ii) formal và informal economy là substitutes; (iii)
local governance quality tự thân giảm hoạt động phi chính thức.

## Câu hỏi nghiên cứu & phương pháp

- **Định nghĩa phân biệt** (mục 2.1): shadow economy (Schneider & Enste 2000) = mọi hoạt động
  kinh tế cố tình giấu khỏi cơ quan chức năng để tránh thuế/bảo hiểm xã hội/quy định; informal
  economy (ILO 2002, 2003) = hoạt động chưa đăng ký (hợp pháp hoặc bất hợp pháp) nằm ngoài
  khung pháp lý chính thức; informal sector (La Porta & Shleifer 2014) = riêng doanh nghiệp
  không đăng ký/không tuân thủ luật lao động-thuế-kinh doanh. Bài dùng **informal employment
  rate** (tỷ lệ lao động phi chính thức/tổng lao động, nguồn VGSO) làm proxy cho informal
  economy, theo khung ILO.
- **5 khung lý thuyết đối chiếu**: modernization theory (FDI→công nghệ/quản trị/việc làm chính
  thức→giảm informal, Dunning 1981); dependency theory (Frank 1966 — MNC khai thác lao động rẻ
  → mở rộng informal); dualism theory (Fields 2004 — FDI vừa tạo việc làm chính thức vừa tạo
  thị trường lao động phân mảnh); institutional theory (North 1990 — FDI cải thiện governance/
  khung pháp lý → thu hẹp informal); FDI spillover theory (Javorcik 2004); fiscal contract
  theory (Timmons 2005 — FDI→growth→cung cấp hàng hóa công tốt hơn→tăng tax morale).
- **3 giả thuyết**: H1 — FDI giảm informal economy qua kênh growth VÀ governance; H2 — economic
  growth giảm informal economy; H3 — local governance quality giảm shadow economy.
- **Mô hình thực nghiệm**: INFOᵢₜ = α₀ + α₁FDIᵢₜ + α₂GROWᵢₜ + α₃GOVᵢₜ + α₄FDIᵢₜ·GROWᵢₜ +
  α₅FDIᵢₜ·GOVᵢₜ + Xᵢₜ'δ + μᵢ + λₜ + vᵢₜ — hệ số tương tác FDI×GROW và FDI×GOV cho biết KÊNH
  truyền dẫn (kỳ vọng α₁, α₄, α₅ âm).
- **Biến số** (nguồn VGSO/PAPI): INFO = tỷ lệ lao động phi chính thức (%); FDI = tổng vốn đầu
  tư nước ngoài (tỷ VND); GROW = GDP/capita cấp tỉnh; GOV = chỉ số PAPI (Provincial Governance
  and Public Administration Performance Index), 6 chiều: vertical accountability, participation
  ở cấp cơ sở, transparency, control of corruption, thủ tục hành chính công, dịch vụ công. Biến
  kiểm soát: FISCAL (phân cấp chi tiêu), URB (đô thị hóa), POV (tỷ lệ nghèo), UNEM (thất
  nghiệp), HUMAN (% tốt nghiệp THPT), POP (tăng dân số).
- **Dữ liệu**: 63 tỉnh VN 2006–2021. INFO trung bình **75.622%** (min 31.42%, max 91.12%, n=452
  — biến động vùng miền rất lớn). FDI trung bình 3722.383 tỷ VND (min 0, max 68587.5, n=553) —
  dùng phép biến đổi **arcsine log** (Bellemare & Wichman 2020) để giữ được quan sát FDI=0 mà
  vẫn xấp xỉ log-transform.
- **Econometric methodology**: kiểm tra cross-sectional dependency (Pesaran's CD test 2004) →
  kiểm định tính dừng CADF (Pesaran 2007) — GROW chỉ dừng sau sai phân bậc 1. Ước lượng cơ sở:
  pooled OLS, random effects (RE), fixed effects (FE) — chọn qua Lagrangian multiplier test và
  Hausman test (kết quả chọn FE). Xử lý nội sinh chính: **System GMM (SGMM, Blundell & Bond
  1998)** 2 bước, dùng **forward-orthogonal deviations (FOD)** thay vì sai phân bậc 1 để xử lý
  unbalanced panel (Roodman 2009) — giảm mất dữ liệu do thiếu quan sát. Instrument: độ trễ t-1
  của biến nội sinh; tổng 25 instrument (đặc tả cơ bản) hoặc 37 instrument (đặc tả đầy đủ, ≤63
  = số tỉnh, tránh instrument proliferation). Kiểm định Sargan + Hansen J xác nhận instrument
  hợp lệ, không overidentified.
- **Đóng góp nổi bật tác giả tự nhận**: bộ dữ liệu **cấp tỉnh** (thay vì cấp quốc gia như đa số
  literature hiện có) — nắm bắt được chênh lệch vùng miền trong informal employment, FDI
  inflows, growth, governance quality trong nội bộ một nước.

## Kết quả chính

- **FDI giảm informal economy qua 2 kênh đồng thời** (Bảng 4, FE & SGMM, cả 2 specification):
  hệ số FDI âm, có ý nghĩa 1–5% (SGMM: −28.3 đến −31.7); hệ số tương tác **FDI×GROW** âm có ý
  nghĩa (SGMM: −4.86 đến −6.28) và **FDI×GOV** âm có ý nghĩa (SGMM: −7.45 đến −8.34) — xác nhận
  CẢ 2 kênh boosting growth VÀ improving governance đều hoạt động đồng thời, khớp cả
  modernization theory lẫn institutional theory.
- **GROW và GOV độc lập cũng làm giảm INFO** đáng kể: hệ số GROW âm (SGMM: −16.6 đến −18.6),
  hệ số GOV âm và LỚN NHẤT trong mô hình (SGMM: −36.6 đến −40.7) — governance quality là yếu
  tố mạnh nhất trong các biến chính.
- **Formal/informal economy là substitutes**: khu vực chính thức mở rộng → hút nguồn lực/lao
  động khỏi khu vực phi chính thức — rõ nhất ở tỉnh có FDI cao + thể chế mạnh.
- **Biến kiểm soát** (Bảng 4): FISCAL âm có ý nghĩa (phân cấp tài khóa tốt → giảm informal);
  URB âm có ý nghĩa (đô thị hóa → giảm informal); HUMAN âm có ý nghĩa (vốn con người cao → giảm
  informal); ngược lại **POV dương có ý nghĩa** (nghèo đói → tăng informal), **UNEM dương có ý
  nghĩa** (thất nghiệp → tăng informal), **POP dương có ý nghĩa** (dân số tăng nhanh → tăng
  informal, cung lao động vượt tốc độ tạo việc làm chính thức).
- **Robustness check kép**: (1) dùng arcsinh(FDI) thay log — hệ số giữ nguyên độ lớn/chiều
  hướng (Bảng B); (2) dùng **TAX** (tỷ lệ thu thuế/GDP tỉnh, đảo dấu) làm proxy thay thế cho
  informal economy — FDI vẫn liên hệ với tax revenue cao hơn, xác nhận lại kết luận chính dưới
  góc độ tài khóa vĩ mô thay vì chỉ dựa vào số liệu việc làm (Bảng C).
- **Bản đồ phân bố cấp tỉnh** (Phụ lục Fig. 2A–D): tỉnh FDI cao (TP.HCM, Hà Nội, Bình Dương,
  Đồng Nai, Bà Rịa-Vũng Tàu, Hải Phòng, Bắc Ninh) có growth cao hơn, governance tốt hơn,
  informal employment thấp hơn — tập trung ở Đồng bằng sông Hồng và Đông Nam Bộ. Informal
  employment cao nhất ở miền núi phía Bắc, Tây Nguyên, một số tỉnh Bắc Trung Bộ. Governance tốt
  nhất: Đà Nẵng, Quảng Ninh, Bình Dương.

## 5 khuyến nghị chính sách (mục 6)

1. Ưu tiên thu hút FDI — ổn định vĩ mô, đơn giản hóa thủ tục cho nhà đầu tư nước ngoài, minh
   bạch quy trình phê duyệt đầu tư, hướng FDI vào hoạt động kinh tế chính thức.
2. Củng cố khung thể chế địa phương — tăng cường participation cấp cơ sở, vertical
   accountability, minh bạch, thủ tục hành chính công; giảm tham nhũng, cải thiện dịch vụ công
   để xây niềm tin công chúng.
3. Thúc đẩy tăng trưởng kinh tế, đặc biệt vùng informal cao — mở rộng giáo dục, hạ tầng, cơ hội
   việc làm chính thức; đầu tư vốn con người (đào tạo nghề, kỹ năng).
4. Dùng fiscal policy + urbanization — giảm gánh nặng thuế cho doanh nghiệp nhỏ, đơn giản hóa
   tuân thủ thuế; đầu tư hạ tầng đô thị/y tế/giáo dục.
5. Chương trình an sinh xã hội có mục tiêu (do nghèo đói + thất nghiệp là động lực chính) — tạo
   việc làm chính thức vùng nông thôn/vùng khó khăn, mở rộng mạng lưới an sinh.

## Ý nghĩa cho môn học/Việt Nam

- **Paper có dữ liệu Việt Nam trực tiếp, cấp tỉnh** trong toàn bộ LN2 — ứng dụng thực nghiệm rõ
  ràng nhất của [[institutions]] (qua proxy "local governance quality" — chỉ số PAPI) tại VN,
  đáng chú ý hàng đầu cho essay. Phương pháp SGMM + FOD cho unbalanced panel là mẫu kỹ thuật
  đáng học cho dữ liệu cấp tỉnh VN (thường thiếu quan sát một số năm/tỉnh).
- Đối chiếu 2 lý thuyết (modernization vs institutional) là mẫu framing tốt cho phần literature
  review của essay — không chọn 1 lý thuyết mà kiểm định đồng thời cả 2 kênh qua hệ số tương
  tác.
- Liên hệ trực tiếp Nunn (2019) về FDI/globalization tác động VN (dù Nunn bàn trade policy/
  antidumping — tác hại, còn bài này bàn FDI — lợi ích) — có thể đối chiếu trong synthesis về
  vai trò globalization với informal/formal economy VN.
- Bản đồ phân bố cấp tỉnh (Fig. 2) là dữ liệu trực quan tốt để minh họa bất bình đẳng vùng miền
  VN trong essay — liên hệ [[unconditional-convergence]] về hội tụ nội bộ 1 nước.

## Liên kết

- Bài giảng: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]]
  (ứng dụng local governance quality cấp tỉnh VN)
