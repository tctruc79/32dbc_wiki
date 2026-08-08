---
type: source
title: "L91 — Pham, Luu, Phong et al. (2020) — Flood Risk Assessment Using Hybrid Artificial Intelligence Models Integrated with Multi-Criteria Decision Analysis in Quang Nam Province, Vietnam"
tags: [artificial-intelligence, machine-learning, flood-risk, disaster-management, vietnam, mcda]
created: 2026-08-07
updated: 2026-08-07
status: complete
source_file: "raw/3. LECTURE NOTES/LN9 AI digitalization economic development and growth/L91 JH-2020 Pham Flood risk assessment using hybrid AI models Vietnam.pdf"
---

# L91 — Pham, B.T., Luu, C., Phong, T.V., Nguyen, H.D., Le, H.V., Tran, T.Q., Ta, H.T. & Prakash, I. (2020), Journal of Hydrology, 592, 125815

⚠️ **Nguồn giới hạn**: file PDF trong `raw/` là bản in trang ScienceDirect (Highlights + Abstract +
Introduction đầy đủ + trích đoạn ngắn "Section snippets" của Study area/Conceptual framework/
Important factors/Discussion/Concluding remarks, mỗi đoạn bị cắt bởi "…") — KHÔNG phải toàn văn có
khóa (bảng số liệu chi tiết Table 2 "important factors", kết quả AUC đầy đủ theo bảng, thảo luận
sâu). Trang này chỉ dùng đúng phần đọc được, không suy diễn số liệu bị cắt.<br><span class="en">
⚠️ **Limited source**: the PDF in `raw/` is a printed ScienceDirect landing page (full Highlights +
Abstract + Introduction, plus short "Section snippets" excerpts of Study area/Conceptual framework/
Important factors/Discussion/Concluding remarks, each cut off by "…") — NOT the full paywalled
text (the detailed Table 2 "important factors," the full AUC results table, in-depth discussion).
This page uses only what is readable, without inferring the cut-off figures.</span>

**Tác giả**: Binh Thai Pham, Chinh Luu, Tran Van Phong, Huu Duy Nguyen, Hiep Van Le, Thai Quoc
Tran, Huong Thu Ta, Indra Prakash. Tài trợ: Vietnam National Foundation for Science and Technology
Development (NAFOSTED), grant 105.08-2019.03.<br><span class="en">**Authors**: Binh Thai Pham,
Chinh Luu, Tran Van Phong, Huu Duy Nguyen, Hiep Van Le, Thai Quoc Tran, Huong Thu Ta, Indra
Prakash. Funding: the Vietnam National Foundation for Science and Technology Development
(NAFOSTED), grant 105.08-2019.03.</span>

## Abstract

> Đánh giá rủi ro lũ lụt là một nhiệm vụ quan trọng cho các hoạt động quản lý thiên tai ở khu vực
> dễ xảy ra lũ. Do đó, việc phát triển bản đồ đánh giá rủi ro lũ chính xác là điều cần thiết.
> Trong nghiên cứu này, nhóm tác giả đề xuất một khung đánh giá rủi ro lũ kết hợp đánh giá khả
> năng xảy ra lũ (flood susceptibility) và hậu quả của lũ (tác động sức khỏe con người và tài
> chính) để xây dựng bản đồ đánh giá rủi ro lũ cuối cùng bằng phương pháp Phân tích Quyết định Đa
> tiêu chí (MCDA). Hai mô hình Trí tuệ Nhân tạo (AI) lai ghép, cụ thể là ABMDT (AdaBoost-DT) và
> BDT (Bagging-DT), được phát triển với Bảng Quyết định (DT) làm bộ phân loại nền tảng để tạo bản
> đồ khả năng xảy ra lũ. Nhóm nghiên cứu sử dụng 847 địa điểm lũ từ các sự kiện lũ lớn trong các
> năm 2007, 2009 và 2013 tại tỉnh Quảng Nam, Việt Nam; và 14 yếu tố ảnh hưởng đến lũ về địa hình,
> địa chất, thủy văn và môi trường để xây dựng và kiểm định các mô hình AI lai ghép. Nhiều thước đo
> thống kê được dùng để kiểm định mô hình, bao gồm Diện tích Dưới Đường cong ROC (Receiver
> Operating Characteristic) gọi là AUC. Kết quả cho thấy tất cả các mô hình đề xuất đều hoạt động
> tốt, nhưng hiệu suất của mô hình BDT (AUC = 0,96) là tốt nhất so với các mô hình khác ABMDT
> (AUC = 0,953) và DT đơn (AUC = 0,929). Do đó, bản đồ khả năng xảy ra lũ do mô hình BDT tạo ra
> được dùng kết hợp với bản đồ hậu quả lũ để phát triển bản đồ đánh giá rủi ro lũ đáng tin cậy cho
> khu vực nghiên cứu. Bản đồ rủi ro lũ cuối cùng có thể là nguồn tham khảo hữu ích cho quản lý rủi
> ro lũ tốt hơn ở khu vực nghiên cứu, và khung/mô hình đề xuất có thể áp dụng cho các khu vực dễ
> xảy ra lũ khác.

> Flood risk assessment is an important task for disaster management activities in flood-prone
> areas. Therefore, it is crucial to develop accurate flood risk assessment maps. In this study, we
> proposed a flood risk assessment framework which combines flood susceptibility assessment and
> flood consequences (human health and financial impact) for developing a final flood risk
> assessment map using Multi-Criteria Decision Analysis (MCDA) method. Two hybrid Artificial
> Intelligence (AI) models, namely ABMDT (AdaBoost-DT) and BDT (Bagging-DT) were developed with
> Decision Table (DT) as a base classifier for creating a flood susceptibility map. We used 847
> flood locations of major flooding events in the years 2007, 2009 and 2013 in Quang Nam province
> of Vietnam; and 14 flood influencing factors of topography, geology, hydrology and environment to
> construct and validate the hybrid AI models. Various statistical measures were used to validate
> the models, including the Area Under Receiver Operating Characteristic (ROC) Curve called AUC.
> Results show that all the proposed models performed well, but the performance of the BDT model
> (AUC = 0.96) is the best in comparison to other models ABMDT (AUC = 0.953) and single DT
> (AUC = 0.929). Therefore, the flood susceptibility map produced by the BDT model was used to
> combine with a flood consequences map to develop a reliable flood risk assessment map for the
> study area. The final flood risk map can provide a useful source for better flood hazard
> management of the study area, and the proposed framework and models can be applied to other
> flood-prone areas.

**Tóm tắt (diễn giải)**: Bài kỹ thuật ứng dụng — kết hợp 2 mô hình AI lai ghép với phương pháp AHP
(một nhánh MCDA) để tạo bản đồ rủi ro lũ 2 lớp (khả năng xảy ra × hậu quả) cho một tỉnh cụ thể của
Việt Nam, điểm mới là LẦN ĐẦU kết hợp AI/ML với MCDA cho bài toán này.<br><span class="en">
**Summary (paraphrase)**: An applied technical paper — combining 2 hybrid AI models with the AHP
method (an MCDA branch) to create a 2-layer flood risk map (likelihood × consequence) for a
specific Vietnamese province, with the novelty being the FIRST integration of AI/ML with MCDA for
this problem.</span>

## Research Questions

Có thể xây dựng bản đồ đánh giá rủi ro lũ chính xác hơn bằng cách kết hợp mô hình AI lai ghép (ước
lượng khả năng xảy ra lũ) với phương pháp MCDA truyền thống (ước lượng hậu quả lũ) hay không, và mô
hình AI lai ghép nào (ABMDT hay BDT) cho kết quả tốt nhất?<br><span class="en">Can a more accurate
flood risk assessment map be built by combining a hybrid AI model (estimating flood likelihood)
with a traditional MCDA method (estimating flood consequences), and which hybrid AI model (ABMDT
or BDT) performs best?</span>

## Research Framework

Rủi ro lũ = xác suất xảy ra × hậu quả tiêu cực (Schanze 2006); có thể quản lý rủi ro lũ bằng cách
giảm hậu quả (de Moel 2015). Literature trước dùng MCDA thuần túy (vd AHP — Ozturk & Batuk 2011;
Kappes et al. 2012) nhưng gặp giới hạn khi số lượng tiêu chí/dữ liệu lớn, khó xác định trọng số
khách quan (dễ thiên lệch chủ quan của chuyên gia). Bài đề xuất tích hợp AI/ML để tự động ước lượng
trọng số, giảm thiên lệch con người — đây là ĐIỂM MỚI chính so với các nghiên cứu MCDA thuần túy
trước đó.<br><span class="en">Flood risk = probability of occurrence × negative consequences
(Schanze 2006); flood risk can be managed by reducing consequences (de Moel 2015). Prior
literature used pure MCDA (e.g., AHP — Ozturk & Batuk 2011; Kappes et al. 2012) but faced
limitations when the number of criteria/data grows large, making objective weight estimation
difficult (prone to expert subjective bias). The paper proposes integrating AI/ML to automatically
estimate weights, reducing human bias — this is the main NOVELTY relative to prior pure-MCDA
studies.</span>

## Data

847 địa điểm lũ từ các sự kiện lũ lớn 2007/2009/2013 tại tỉnh Quảng Nam (Trung Bộ Việt Nam, giáp
Đà Nẵng phía Bắc, Khu kinh tế Dung Quất phía Nam, diện tích ~1.057.474 ha, địa hình phức tạp từ núi
cao phía Tây đến đồng bằng/ven biển phía Đông); 14 yếu tố ảnh hưởng lũ thuộc 4 nhóm: địa hình, địa
chất, thủy văn, môi trường (chi tiết Table 2 bị cắt trong bản PDF có sẵn — chỉ đọc được yếu tố đầu
tiên: elevation trọng số W=0,7235, tiếp theo là rainfall bị cắt). Chọn biến bằng kỹ thuật Relief-F
(Yang et al. 2011).<br><span class="en">847 flood locations from major flood events in
2007/2009/2013 in Quang Nam province (Central Vietnam, bordering Danang to the North, the Dung
Quat Economic Zone to the South, area ~1,057,474 ha, complex terrain from high mountains in the
West to deltas/coastal areas in the East); 14 flood-influencing factors across 4 groups:
topography, geology, hydrology, environment (Table 2 detail is cut off in the available PDF — only
the first factor is readable: elevation weight W=0.7235, followed by rainfall, cut off). Feature
selection via the Relief-F technique (Yang et al. 2011).</span>

## Methodology

Kết hợp 2 mô hình AI lai ghép làm mô hình khả năng xảy ra lũ: **ABMDT** (AdaBoost kết hợp Decision
Table làm base classifier) và **BDT** (Bagging kết hợp Decision Table); so sánh với DT đơn (không
ensemble) làm baseline. Bản đồ khả năng xảy ra lũ (từ mô hình AI tốt nhất) được kết hợp với bản đồ
hậu quả lũ (tạo bằng **AHP** — Analytic Hierarchy Process, một phương pháp MCDA phổ biến) để ra bản
đồ RỦI RO lũ hoàn chỉnh. Công cụ: Weka (mô hình AI/ML) và ArcGIS (phân tích không gian/trực quan
hóa). Kiểm định mô hình bằng AUC (Area Under ROC Curve).<br><span class="en">Combines 2 hybrid AI
models as the flood-susceptibility model: **ABMDT** (AdaBoost combined with Decision Table as the
base classifier) and **BDT** (Bagging combined with Decision Table); compared against a single DT
(no ensembling) as the baseline. The flood-susceptibility map (from the best AI model) is combined
with a flood-consequences map (built using **AHP** — Analytic Hierarchy Process, a common MCDA
method) to produce the complete flood RISK map. Tools: Weka (AI/ML modeling) and ArcGIS (spatial
analysis/visualization). Model validation via AUC (Area Under the ROC Curve).</span>

## Regression/Estimation Results

**BDT (Bagging-DT) là mô hình tốt nhất: AUC=0,960**, vượt ABMDT (AdaBoost-DT, AUC=0,953) và DT đơn
(AUC=0,929) — cả 3 mô hình đều đạt hiệu suất TỐT (AUC>0,9), nhưng ensemble Bagging cho kết quả
nhỉnh hơn AdaBoost và rõ ràng hơn DT đơn không ensemble.<br><span class="en">**BDT (Bagging-DT) is
the best model: AUC=0.960**, beating ABMDT (AdaBoost-DT, AUC=0.953) and a single DT (AUC=0.929) —
all 3 models achieve GOOD performance (AUC>0.9), but the Bagging ensemble edges out AdaBoost and
clearly outperforms the non-ensembled single DT.</span>

## Key Findings

Mô hình AI lai ghép (đặc biệt BDT) hoạt động tốt trong việc dự báo khả năng xảy ra lũ tại Quảng
Nam; việc TÍCH HỢP AI với MCDA (thay vì dùng MCDA thuần túy như literature trước) cho phép ước
lượng trọng số các yếu tố ảnh hưởng KHÁCH QUAN hơn (giảm thiên lệch chuyên gia) trong khi vẫn giữ
được khung ra quyết định đa tiêu chí quen thuộc cho hậu quả.<br><span class="en">Hybrid AI models
(especially BDT) perform well at forecasting flood susceptibility in Quang Nam; INTEGRATING AI
with MCDA (rather than using pure MCDA as in prior literature) allows for more OBJECTIVE weighting
of influencing factors (reducing expert bias) while retaining the familiar multi-criteria
decision-making framework for consequences.</span>

## Conclusion

Nhóm tác giả phát triển một khung đánh giá rủi ro lũ dựa trên soft computing, trong đó bản đồ rủi
ro lũ được tạo ra bằng cách kết hợp bản đồ khả năng xảy ra lũ (mô hình AI lai ghép BDT) và bản đồ
hậu quả lũ (kỹ thuật AHP), áp dụng cho tỉnh Quảng Nam, Việt Nam. Kết quả kiểm định xác nhận tất cả
mô hình đề xuất hoạt động tốt cho việc xây dựng bản đồ khả năng xảy ra lũ; khung/mô hình này có thể
áp dụng cho các khu vực dễ lũ khác ngoài Quảng Nam.<br><span class="en">The authors developed a
soft-computing-based flood risk framework, in which the flood risk map is generated by combining a
flood-susceptibility map (the BDT hybrid AI model) and a flood-consequences map (the AHP
technique), applied to Quang Nam province, Vietnam. Validation results confirm all proposed models
perform well for building the flood-susceptibility map; the framework/models can be applied to
other flood-prone areas beyond Quang Nam.</span>

## Ý nghĩa cho môn học/Việt Nam

- **Ví dụ trực tiếp AI ứng dụng tại Việt Nam** — trái ngược với bức tranh chung ở
  [[l93-pham-2024-ai-development-vietnam-review]] (Việt Nam tụt hậu về đầu tư/chính sách AI cấp
  quốc gia), bài này cho thấy vẫn có nghiên cứu ứng dụng AI kỹ thuật thành công ở cấp dự án/địa
  phương, được tài trợ bởi quỹ khoa học trong nước (NAFOSTED).<br><span class="en">**A direct
  example of applied AI in Vietnam** — in contrast to the general picture in
  [[l93-pham-2024-ai-development-vietnam-review]] (Vietnam lags on national-level AI investment/
  policy), this paper shows successful technical AI application research still occurs at the
  project/local level, funded by a domestic science fund (NAFOSTED).</span>
- Cùng cụm phương pháp/mục tiêu với [[l92-rakholia-2022-air-quality-ai-hcmc]] — cả 2 dùng AI/ML để
  dự báo/lập bản đồ rủi ro môi trường cụ thể tại Việt Nam, phục vụ quản lý thiên tai/y tế công
  cộng thực tế — xem [[ai-for-environmental-risk-vietnam]].<br><span class="en">Shares a
  methodology/goal cluster with [[l92-rakholia-2022-air-quality-ai-hcmc]] — both use AI/ML to
  forecast/map concrete environmental risk in Vietnam, serving real disaster-management/public-
  health purposes — see [[ai-for-environmental-risk-vietnam]].</span>
- Liên hệ [[l43-le-2020-floods-household-welfare]] (LN4) — cùng chủ đề lũ lụt Việt Nam nhưng góc
  nhìn khác hoàn toàn: L91 là công cụ DỰ BÁO/lập bản đồ rủi ro trước khi lũ xảy ra (prevention),
  L43 đo TÁC ĐỘNG kinh tế-xã hội sau khi lũ đã xảy ra (impact) — 2 bài bổ sung nhau trong chu trình
  quản lý rủi ro thiên tai đầy đủ.<br><span class="en">Connects to
  [[l43-le-2020-floods-household-welfare]] (LN4) — the same Vietnamese flooding topic but an
  entirely different angle: L91 is a FORECASTING/risk-mapping tool used before a flood occurs
  (prevention), L43 measures socioeconomic IMPACT after a flood has occurred (impact) — the two
  papers complement each other across the full disaster-risk-management cycle.</span>

## Liên kết

- Bài giảng: [[ln9-ai-digitalization-economic-development-growth]] · Concept:
  [[ai-for-environmental-risk-vietnam]]<br><span class="en">Lecture:
  [[ln9-ai-digitalization-economic-development-growth]] · Concept:
  [[ai-for-environmental-risk-vietnam]]</span>
- Liên quan: [[l92-rakholia-2022-air-quality-ai-hcmc]], [[l43-le-2020-floods-household-welfare]]
  (LN4), [[l93-pham-2024-ai-development-vietnam-review]]
