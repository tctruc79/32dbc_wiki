---
type: source
title: "L22 — Mauro (1995) — Corruption and Growth"
tags: [corruption, institutions, investment, instrumental-variables]
created: 2026-07-23
updated: 2026-07-23
status: complete
source_file: "raw/3. LECTURE NOTES/LN2 Governance institutions and policy making/L22 QJE-1995 Mauro Corruption and growth.pdf"
---

# L22 — Mauro (1995), The Quarterly Journal of Economics 110(3): 681–712

**Tác giả**: Paolo Mauro (viết lại từ chương 1 luận án tiến sĩ; công tác tại IMF khi xuất bản
— bài ghi rõ quan điểm không đại diện IMF). Xuất bản bởi Oxford University Press, JSTOR
2946696.

## Tóm tắt

Phân tích bộ dữ liệu mới (Business International) gồm chỉ số chủ quan về corruption, red
tape, hiệu quả tư pháp, và các mức độ bất ổn chính trị cho một cross-section quốc gia.
**Corruption làm giảm đầu tư, qua đó giảm tăng trưởng kinh tế.** Kết quả robust khi kiểm soát
endogeneity bằng cách dùng chỉ số ethnolinguistic fractionalization (ELF) làm instrument.

## Câu hỏi nghiên cứu & phương pháp

- **Bối cảnh literature**: tranh luận về tác động corruption chưa ngã ngũ — Leff (1964),
  Huntington (1968) từng lập luận corruption có thể **tăng** growth (giúp né bureaucratic
  delay — "speed money"; hoặc tạo động lực làm việc cho công chức nếu bribe như piece-rate).
  Ngược lại Shleifer & Vishny (1993), Rose-Ackerman (1978) cho rằng corruption làm giảm
  growth. Mauro là **phân tích thực nghiệm cross-country có hệ thống đầu tiên** liên hệ chỉ số
  bureaucratic honesty/efficiency với economic growth.
- **Vấn đề endogeneity**: institutions và biến kinh tế đồng tiến hóa (institutions ảnh hưởng
  performance NHƯNG performance cũng ảnh hưởng ngược institutions) → dùng **ELF** (xác suất 2
  người ngẫu nhiên trong 1 nước không cùng nhóm ethnolinguistic) làm instrument — ELF tương
  quan cao với corruption/institutions nhưng có thể coi là ngoại sinh với biến kinh tế.
- **Dữ liệu**: chỉ số Business International (BI, nay thuộc Economist Intelligence Unit) — 56
  "country risk factors", 68 nước, 1980–1983 (và 30 factors, 57 nước, 1971–1979). Bài dùng 9
  chỉ tiêu institutional efficiency: institutional change, social change, opposition takeover,
  labor stability, quan hệ nước láng giềng, terrorism, judiciary, red tape, corruption. Tổng
  hợp thành **corruption index**, **bureaucratic efficiency index** (trung bình judiciary + red
  tape + corruption), **political stability index**.

## Kết quả chính

- **III.1 Corruption và Investment**: tương quan âm, significant, cả OLS lẫn 2SLS (ELF làm
  instrument). 1 độ lệch chuẩn cải thiện corruption index → investment rate **+2.9% GDP**. Hệ
  số này KHÔNG khác biệt có ý nghĩa giữa nhóm nước red-tape thấp và cao (Table IV) — bác bỏ
  giả thuyết Leff/Huntington rằng corruption chỉ có lợi khi bureaucracy cồng kềnh.
- 1 độ lệch chuẩn cải thiện **bureaucratic efficiency index** → investment rate **+4.75% GDP**
  (OLS); hệ số còn **lớn hơn** khi dùng 2SLS với ELF — cho thấy attenuation bias trong OLS
  quan trọng hơn reverse-causality bias (song song với phát hiện của Acemoglu et al. 2001 khi
  2SLS > OLS).
- **III.2 Institutional efficiency và Growth**: bureaucratic efficiency index tương quan âm
  robust với growth, ngay cả khi kiểm soát các determinant chuẩn khác của growth. Kênh chính:
  bad institutions → giảm investment rate → giảm growth.
- **Ước lượng minh họa (headline)**: nếu Bangladesh nâng liêm chính/hiệu quả bộ máy hành chính
  lên mức Uruguay (= 1 độ lệch chuẩn bureaucratic efficiency index) → investment rate tăng
  **~5 điểm % GDP**, GDP growth/năm tăng **>0.5 điểm %**.
- Phát hiện phụ: bureaucratic efficiency có thể **quan trọng ngang chính trị ổn định** như một
  determinant của investment/growth.

## Concluding remarks — 3 hướng nghiên cứu mở

1. Tương quan dương corruption efficiency ↔ political stability cần giải thích — Mauro (1993)
   đề xuất mô hình strategic complementarity: chính trị gia đặt bribe rate cao → rút ngắn
   horizon của cả chính phủ → các chính trị gia khác cũng tranh phần "miếng bánh" hôm nay thay
   vì lo miếng bánh mai sau → multiple equilibria trong corruption/instability/growth.
2. Chính phủ corrupt/bất ổn chi tiêu **ít hơn cho giáo dục** (kiểm soát GDP/capita) — phù hợp
   với gợi ý Shleifer & Vishny rằng cơ hội trục lợi tham nhũng ít hơn trong ngành giáo dục so
   với các khoản chi khác.
3. Institutional inefficiency persistent theo thời gian → institutions xấu trong quá khứ có
   thể góp phần gây growth thấp → nghèo đói hôm nay — nhưng bài **chưa phân tích chiều ngược
   lại** (nghèo đói → institutions xấu), để ngỏ cho nghiên cứu sau.

## Ý nghĩa cho môn học/Việt Nam

- Cùng với Acemoglu et al. (2001), đây là 2 bài dùng chiến lược IV để tách bạch causal effect
  của institutions — mẫu phương pháp tốt cho essay về institutions/corruption ở Việt Nam.
  Điểm chung đáng chú ý: cả 2 bài đều thấy 2SLS estimate **lớn hơn** OLS, gợi ý measurement
  error/attenuation bias là vấn đề chung khi đo institutions bằng chỉ số chủ quan.
- Câu hỏi ôn thi: vì sao ELF là instrument hợp lệ cho corruption? Cơ chế corruption→investment
  →growth; so sánh với cơ chế institutions→income của Acemoglu et al.

## Liên kết

- Bài giảng: [[ln2-governance-institutions-policy-making]] · Concept: [[institutions]] ·
  liên hệ [[l21-acemoglu-2001-colonial-origins]] (cùng pattern 2SLS > OLS)
