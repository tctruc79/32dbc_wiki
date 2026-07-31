---
type: source
title: "L11 — Patel, Sandefur & Subramanian (2021) — The New Era of Unconditional Convergence"
tags: [convergence, growth, middle-income, solow, volatility]
created: 2026-07-20
updated: 2026-07-31
status: complete
source_file: "raw/3. LECTURE NOTES/LN1 Economic development/L11 JDE-2021 Patel The new era of unconditional convergence.pdf"
---

# L11 — Patel, Sandefur & Subramanian (2021), Journal of Development Economics 152: 102687

**Tác giả**: Dev Patel (Harvard University), Justin Sandefur & Arvind Subramanian (Center for
Global Development). Nhận 19/02/2021, chấp nhận 05/05/2021, online 02/06/2021. Mở rộng từ một
bài trước có tựa khiêu khích "Everything you know about cross-country convergence is (now)
wrong".

## Abstract

> The central fact that has motivated the empirics of economic growth—namely unconditional
> divergence—is no longer true and has not been so for decades. Across a range of data sources,
> poorer countries have in fact been catching up with richer ones, albeit slowly, since the
> mid-1990s. This new era of convergence does not stem primarily from growth moderation in the
> rich world but rather from accelerating growth in the developing world, which has
> simultaneously become remarkably less volatile and more persistent. Debates about a
> "middle-income trap" also appear anachronistic: middle-income countries have exhibited higher
> growth rates than all others since the mid-1980s.

**Tóm tắt (diễn giải)**: Fact trung tâm từng định hình toàn bộ literature tăng trưởng thực
nghiệm — **unconditional divergence** (nước nghèo không đuổi kịp nước giàu) — không còn đúng và
đã sai từ nhiều thập kỷ nay. Convergence mới này không đến từ việc nước giàu tăng trưởng chậm
lại mà từ việc nước đang phát triển tăng tốc — đồng thời trở nên ít biến động hơn và persistent
hơn. Debate về [[middle-income-trap]] cũng đã lỗi thời: middle-income countries tăng trưởng
nhanh hơn mọi nhóm khác kể từ giữa thập niên 1980.

## Research Questions

Literature tăng trưởng cross-country (từ Barro 1991) từng kết luận không có unconditional
convergence — chỉ có conditional convergence (sau khi kiểm soát human capital, đầu tư, tài
chính...). Bài này hỏi: fact này còn đúng với dữ liệu mới nhất (đến 2019) không? Và nếu
convergence đã quay lại, nó đến từ đâu — nước giàu chậm lại hay nước nghèo tăng tốc?

## Research Framework

Khung Solow (1956): nước thu nhập thấp với cùng công nghệ nhưng vốn thấp/MPK cao hơn sẽ tăng
trưởng nhanh hơn (unconditional convergence). Johnson & Papageorgiou (2020, review) không tìm
thấy bằng chứng convergence trong hồi quy GDP/capita=f(GDP/capita ban đầu) — bài này quay lại
kiểm định chính fact đó với dữ liệu mới nhất, đồng thời đo thêm 2 đại lượng bổ sung: volatility
(độ lệch chuẩn tăng trưởng nội bộ quốc gia) và persistence (tự tương quan tăng trưởng giữa các
giai đoạn liền kề) để xác nhận đây là σ-convergence thực sự chứ không chỉ β-convergence nhất
thời.

## Data

**3 bộ dữ liệu độc lập** đối chiếu chéo: Maddison Project, Penn World Tables (PWT) 10.0, World
Development Indicators (WDI). Mẫu loại oil exporters và nước dân số <1 triệu.

## Methodology

- **Phương trình ước lượng** (Barro & Sala-i-Martin 1992):

  (1/s)·ln(y_{i,t+s}/y_{i,t}) = α − ((1−e^{−βs})/s)·ln(y_{i,t}) + ε_{i,t+s}

  ước lượng bằng **non-linear least squares**, sai số chuẩn robust-heteroskedasticity, cho mỗi
  điểm bắt đầu t từ 1960 đến 2010, kết thúc tại năm mới nhất có dữ liệu (~2019).
- Đo thêm **volatility** (công thức 4, độ lệch chuẩn tăng trưởng nội bộ quốc gia) và
  **persistence** (công thức 5, hệ số tương quan ρ giữa tăng trưởng giai đoạn liền kề).

## Regression Results

- Hệ số β đổi dấu và **significant từ giữa/cuối thập niên 1990**, mạnh nhất thập niên 2000
  (Fig. 1, cả 3 bộ dữ liệu đồng thuận). Tốc độ khiêm tốn: trung bình nước đang phát triển đóng
  nửa khoảng cách với steady state trong **~170 năm** (so với ~2%/năm, half-life ~35 năm của
  Barro & Sala-i-Martin 1992 cho US states).
- γ (test cho middle-income trap): sau 1985, middle-income countries tăng trưởng cao hơn
  **0.50–0.75 điểm %**.
- Figure 4: volatility (std dev) giảm dần theo thời gian cho low/middle-income; persistence (ρ)
  tăng, đặc biệt rõ ở middle-income countries sau 1970.

## Key Findings — 3 central facts

1. **Đảo chiều convergence**: convergence đến từ nước nghèo tăng tốc, KHÔNG phải nước giàu chậm
   lại — toàn bộ phân phối tăng trưởng nước nghèo dịch chuyển lên; tỷ lệ nước thu nhập thấp tăng
   trưởng âm giảm từ 42% (1980s) xuống 16% (2000s–2010s).
2. **Bác bỏ middle-income trap**: growth theo cross-section có dạng **inverted-U** — middle-
   income countries tăng trưởng nhanh nhất kể từ 1980s, nhanh hơn cả low-income countries kể từ
   đầu kỷ nguyên convergence. "More trampoline than trap." (→ trực tiếp phản bác
   [[middle-income-trap]] của Gill & Kharas 2015.)
3. **Volatility giảm, persistence tăng**: kỷ nguyên convergence đi cùng volatility nội bộ quốc
   gia thấp hơn và tăng trưởng persistent hơn ở các nước đang phát triển — đặc biệt rõ ở middle-
   income countries, nay có persistence cao nhất (trái ngược hoàn toàn với narrative "middle-
   income trap").

## Conclusion

- Phân tích ở cấp **quốc gia**, không map trực tiếp sang bất bình đẳng cá nhân — kỷ nguyên
  convergence trùng với global earnings inequality giảm, nhưng "chiếc vòi voi" (top incomes)
  vẫn là yếu tố chính cản giảm bất bình đẳng toàn cầu (Lakner & Milanovic elephant graph).
- Krugman (2018, ghi chú 10) giải thích "middle-income trampoline" bằng lý thuyết "It" — nước đã
  có "It" (đủ điều kiện hấp thụ công nghệ tiên tiến) tăng trưởng nhanh vì catch-up với frontier
  đang dịch xa dần; nước quá nghèo chưa có It, nước đã giàu đã ở frontier — chỉ nước middle-
  income mới vừa có It vừa còn nhiều khoảng cách để đuổi.
- **Cảnh báo quan trọng của tác giả**: 25 năm convergence không đảm bảo tiếp tục — chưa rõ
  nguyên nhân (cheap finance toàn cầu, tăng trưởng Trung Quốc, hay đặc thù quốc gia) và các biến
  số tương lai (deglobalization, climate change, labour-saving technology) có thể đảo ngược xu
  hướng.

## Ý nghĩa cho môn học/Việt Nam

Trung tâm của [[unconditional-convergence]]. Giáo sư gợi ý (slide LN1 37): mô hình convergence
này áp dụng được cho tăng trưởng không đồng nhất giữa **tỉnh/vùng Việt Nam** — ứng viên đề tài
essay/thesis (so sánh β/σ-convergence liên tỉnh, kiểm định middle-income trap ở cấp địa
phương).

## Liên kết

- Bài giảng: [[ln1-economic-development]] · Concepts: [[unconditional-convergence]],
  [[middle-income-trap]]
