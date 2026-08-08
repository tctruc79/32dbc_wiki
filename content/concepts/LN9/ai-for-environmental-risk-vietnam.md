---
type: concept
title: "AI for Environmental Risk Management (AI cho quản lý rủi ro môi trường)"
tags: [artificial-intelligence, machine-learning, disaster-risk, air-quality, vietnam]
created: 2026-08-07
updated: 2026-08-07
status: complete
---

# AI for Environmental Risk Management

## Định nghĩa - <span class="en">Definition</span>

Ứng dụng các mô hình **học máy/AI hybrid** (kết hợp nhiều thuật toán hoặc kết hợp AI với phương
pháp ra quyết định đa tiêu chí) để dự báo/lập bản đồ rủi ro môi trường ở quy mô địa phương/đô
thị — thay thế cho các mô hình vật lý/thống kê truyền thống vốn đòi hỏi giả định dạng hàm và kém
linh hoạt với dữ liệu phi tuyến, nhiều chiều. Trong LN9, khái niệm này được minh họa qua 2 bài toán
khác nhau nhưng cùng logic phương pháp: **dự báo không gian** (lũ lụt, khả năng xảy ra tại một vị
trí — [[l91-pham-2020-flood-risk-ai-vietnam]]) và **dự báo thời gian** (nồng độ ô nhiễm không khí
theo giờ tại một trạm — [[l92-rakholia-2022-air-quality-ai-hcmc]]).<br><span class="en">The
application of **hybrid ML/AI models** (combining multiple algorithms, or combining AI with
multi-criteria decision methods) to forecast/map environmental risk at the local/urban scale —
replacing traditional physical/statistical models that require functional-form assumptions and
handle nonlinear, high-dimensional data poorly. In LN9, this concept is illustrated through 2
different problems sharing the same methodological logic: **spatial forecasting** (flooding,
likelihood at a location — [[l91-pham-2020-flood-risk-ai-vietnam]]) and **temporal forecasting**
(hourly air-pollution concentration at a station —
[[l92-rakholia-2022-air-quality-ai-hcmc]]).</span>

## Nguồn gốc lý thuyết - <span class="en">Theoretical origins</span>

- **Ensemble/hybrid learning** — kết hợp nhiều weak learner (Decision Table làm base classifier
  trong AdaBoost/Bagging ở L91) để giảm variance/bias so với một mô hình đơn lẻ.<br><span
  class="en">**Ensemble/hybrid learning** — combining multiple weak learners (Decision Table as the
  base classifier within AdaBoost/Bagging in L91) to reduce variance/bias relative to a single
  model.</span>
- **Multi-Criteria Decision Analysis (MCDA)** — L91 kết hợp bản đồ khả năng xảy ra (do AI tạo) với
  bản đồ hậu quả (do AHP — Analytic Hierarchy Process — tạo) để ra bản đồ RỦI RO hoàn chỉnh, phân
  biệt rõ "khả năng" và "hậu quả" là 2 cấu phần độc lập của rủi ro.<br><span class="en">
  **Multi-Criteria Decision Analysis (MCDA)** — L91 combines an AI-generated susceptibility map
  with an AHP (Analytic Hierarchy Process)-generated consequences map to produce a complete RISK
  map, clearly separating "likelihood" and "consequence" as 2 independent risk components.</span>
- **Time-series non-stationarity** — L92 nhấn mạnh PM2.5 là chuỗi thời gian không dừng (đặc tính
  thống kê thay đổi theo thời gian), đòi hỏi quy trình huấn luyện riêng thay vì áp dụng trực tiếp
  các mô hình chuỗi thời gian chuẩn.<br><span class="en">**Time-series non-stationarity** — L92
  emphasizes PM2.5 is a non-stationary time series (statistical properties change over time),
  requiring a dedicated training protocol rather than directly applying standard time-series
  models.</span>

## Nguồn nào trong môn bàn về nó - <span class="en">Which course sources discuss it</span>

- [[l91-pham-2020-flood-risk-ai-vietnam]] — 2 mô hình AI hybrid (ABMDT, BDT) dự báo khả năng xảy
  ra lũ tại Quảng Nam; BDT tốt nhất (AUC=0.960).<br><span class="en">
  [[l91-pham-2020-flood-risk-ai-vietnam]] — 2 hybrid AI models (ABMDT, BDT) forecasting flood
  susceptibility in Quang Nam; BDT performs best (AUC=0.960).</span>
- [[l92-rakholia-2022-air-quality-ai-hcmc]] — 4 mô hình ML (SGD Regressor, CNN-LSTM, Gradient
  Boosting, Prophet) dự báo PM2.5 theo giờ tại 6 trạm TP.HCM; SGD Regressor tốt nhất.<br><span
  class="en">[[l92-rakholia-2022-air-quality-ai-hcmc]] — 4 ML models (SGD Regressor, CNN-LSTM,
  Gradient Boosting, Prophet) forecasting hourly PM2.5 at 6 HCMC stations; the SGD Regressor
  performs best.</span>

## Tranh luận/căng thẳng đáng nhớ cho exam - <span class="en">Debates/tensions worth remembering for the exam</span>

- **Mô hình "tốt nhất" không cố định — phụ thuộc bài toán**: cả 2 bài đều so sánh nhiều thuật toán
  và tìm ra người chiến thắng khác nhau (ensemble tree-based ở L91, mô hình tuyến tính đơn giản SGD
  Regressor ở L92 lại vượt qua cả deep learning CNN-LSTM) — bài học phương pháp: KHÔNG có một
  thuật toán AI "vạn năng" tốt nhất cho mọi bài toán dự báo môi trường, việc benchmark nhiều mô
  hình trên chính dữ liệu bài toán là bắt buộc.<br><span class="en">**The "best" model is not
  fixed — it depends on the problem**: both papers compare multiple algorithms and find different
  winners (a tree-based ensemble in L91; the simple linear SGD Regressor in L92 actually
  outperforms deep-learning CNN-LSTM) — the methodological lesson: there is NO universally "best"
  AI algorithm for every environmental-forecasting problem; benchmarking multiple models on the
  problem's own data is essential.</span>
- **Từ mô hình học thuật đến ứng dụng thực tế**: cả 2 bài đều gắn kết quả với một ứng dụng cụ thể
  (bản đồ rủi ro lũ dùng cho quản lý thiên tai địa phương ở L91; app di động "Healthy Air" cảnh báo
  cộng đồng ở L92) — khác với nhiều bài đọc lý thuyết/hồi quy thuần túy trong các lecture khác, đây
  là 2 case công nghệ được thiết kế NGAY TỪ ĐẦU để triển khai thực tế.<br><span class="en">
  **From academic model to real-world deployment**: both papers tie results to a concrete
  application (a flood-risk map for local disaster management in L91; the "Healthy Air" mobile
  early-warning app in L92) — unlike many purely theoretical/regression-based readings in other
  lectures, these are 2 technology cases designed FROM THE START for real-world deployment.</span>

## Liên hệ Việt Nam - <span class="en">Relevance to Vietnam</span>

Cả 2 bài đều lấy Việt Nam làm bối cảnh trực tiếp (Quảng Nam — vùng kinh tế trọng điểm miền Trung
dễ lũ; TP.HCM — đô thị 8.99 triệu dân) — minh họa việc AI có thể ứng dụng NGAY tại Việt Nam cho các
bài toán quản lý rủi ro cụ thể, dù [[l93-pham-2024-ai-development-vietnam-review]] cho thấy Việt
Nam nhìn chung còn tụt hậu về đầu tư/chính sách AI so với khu vực — 2 bài này chứng minh vẫn có
những "điểm sáng" ứng dụng kỹ thuật thành công ở cấp dự án/địa phương dù chính sách AI quốc gia
còn hạn chế.<br><span class="en">Both papers use Vietnam as their direct context (Quang Nam — a
flood-prone key economic region of Central Vietnam; HCMC — an 8.99-million-population metropolis)
— illustrating that AI can be applied RIGHT NOW in Vietnam for concrete risk-management problems,
even though [[l93-pham-2024-ai-development-vietnam-review]] shows Vietnam generally still lags the
region on AI investment/policy — these 2 papers demonstrate there are still successful technical
"bright spots" at the project/local level despite limited national AI policy.</span>

## Liên kết

- Bài giảng: [[ln9-ai-digitalization-economic-development-growth]] · [[overview]]<br><span
  class="en">Lecture: [[ln9-ai-digitalization-economic-development-growth]] · [[overview]]</span>
- Concept liên quan: [[digital-transformation-and-productivity]] (LN9, cụm còn lại của lecture,
  chủ đề digitalization kinh tế thay vì ứng dụng kỹ thuật)<br><span class="en">Related concept:
  [[digital-transformation-and-productivity]] (LN9, the lecture's other cluster, the economic
  digitalization theme rather than technical application)</span>
- Sources: [[l91-pham-2020-flood-risk-ai-vietnam]], [[l92-rakholia-2022-air-quality-ai-hcmc]]
