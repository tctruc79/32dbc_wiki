---
type: source
title: "L92 — Rakholia, Le, Vu, Ho & Carbajo (2022) — AI-Based Air Quality PM2.5 Forecasting Models for Developing Countries: A Case Study of Ho Chi Minh City, Vietnam"
tags: [artificial-intelligence, machine-learning, air-quality, pm2-5, forecasting, vietnam, hcmc]
created: 2026-08-07
updated: 2026-08-07
status: complete
source_file: "raw/3. LECTURE NOTES/LN9 AI digitalization economic development and growth/L92 UC-2022 Rakholia et al. AI-based air quality PM2.5 forecasting modela for HCMC.pdf"
---

# L92 — Rakholia, R., Le, Q., Vu, K., Ho, B.Q. & Carbajo, R.S. (2022), Urban Climate, 46, 101315

**Tác giả**: Rajnish Rakholia, Quan Le, Ricardo Simon Carbajo (CeADAR — Ireland's National Centre
for Applied Artificial Intelligence, University College Dublin); Khue Vu, Bang Quoc Ho (Institute
for Environment and Resources & Vietnam National University, TP.HCM). Dự án hợp tác Ireland–Việt
Nam "HealthyAir", tài trợ bởi Irish Research Council + Bộ Ngoại giao Ireland qua chương trình
COALESCE (COALESCE/2020/31).<br><span class="en">**Authors**: Rajnish Rakholia, Quan Le, Ricardo
Simon Carbajo (CeADAR — Ireland's National Centre for Applied Artificial Intelligence, University
College Dublin); Khue Vu, Bang Quoc Ho (Institute for Environment and Resources & Vietnam National
University, HCMC). An Ireland–Vietnam collaboration, the "HealthyAir" project, funded by the Irish
Research Council + Ireland's Department of Foreign Affairs via the COALESCE programme
(COALESCE/2020/31).</span>

## Abstract

> Ô nhiễm không khí ngoài trời gây hại cho khí hậu và gây ra nhiều bệnh tật, bao gồm bệnh tim
> mạch, nhiễm trùng hô hấp, và tổn thương phổi. Đặc biệt, Bụi mịn (PM2.5) được coi là chất gây ô
> nhiễm không khí nguy hiểm cho sức khỏe con người. Dự báo chính xác nồng độ PM2.5 theo giờ do đó
> có ý nghĩa quan trọng đối với sức khỏe cộng đồng, giúp người dân lên kế hoạch các biện pháp giảm
> thiểu tác động có hại của ô nhiễm không khí lên sức khỏe. Nghiên cứu này phân tích và thảo luận
> các đặc điểm thời gian của PM2.5 tại các địa điểm khác nhau ở Thành phố Hồ Chí Minh (TP.HCM),
> Việt Nam — một trung tâm kinh tế và siêu đô thị của một nước đang phát triển với dân số 8,99
> triệu người. Nhóm tác giả phát triển một số mô hình dự báo PM2.5 đa bước một lần dựa trên AI,
> với cả độ chi tiết dự báo theo giờ (1 giờ đến 24 giờ) và trung bình trượt 24 giờ. Các thuật toán
> Học máy này bao gồm Stochastic Gradient Descent Regressor, mạng lai 1D CNN-LSTM, eXtreme
> Gradient Boosting Regressor, và Prophet. Nhóm nghiên cứu thu thập dữ liệu từ sáu trạm quan trắc
> do đối tác dự án HealthyAir lắp đặt tại các địa điểm khác nhau ở TP.HCM, bao gồm khu vực giao
> thông, dân cư, và công nghiệp. Ngoài ra, nhóm phát triển một quy trình huấn luyện mô hình phù
> hợp dùng dữ liệu từ một khoảng thời gian ngắn để giải quyết tính không dừng của chuỗi thời gian
> PM2.5. Các mô hình dự báo PM2.5 đề xuất đạt độ chính xác tiên tiến nhất và sẽ được triển khai
> trong ứng dụng di động HealthyAir để cảnh báo người dân TP.HCM về vấn đề ô nhiễm không khí trong
> thành phố.

> Outdoor air pollution damages the climate and causes many diseases, including cardiovascular
> diseases, respiratory infections, and lung damage. In particular, Particulate Matter (PM2.5) is
> considered a hazardous air pollutant to human health. Accurate hourly forecasting of PM2.5
> concentrations is thus of significant importance for public health, helping the citizens to plan
> the measures to alleviate the harmful effects of air pollution on health. This study analyses and
> discusses the temporal characteristics of PM2.5 at different locations in Ho Chi Minh City
> (HCMC), Vietnam - an economic center and a megacity in a developing country with a population of
> 8.99 million people. We developed several AI-based one-shot multi-step PM2.5 forecasting models,
> with both an hourly forecast granularity (1 h to 24 h) and a 24-h rolling mean. These Machine
> Learning algorithms include Stochastic Gradient Descent Regressor, hybrid 1D CNN-LSTM, eXtreme
> Gradient Boosting Regressor, and Prophet. We collected the data from six monitoring stations
> installed by the HealthyAir project partners at different locations in HCMC, including traffic,
> residential and industrial areas in the city. In addition, we developed a suitable model training
> protocol using data from a short period to address the non-stationarity of PM2.5 time series. Our
> proposed PM2.5 forecasting models achieve state-of-the-art accuracy and will be deployed in our
> HealthyAir mobile app to warn HCMC citizens of air pollution issues in the city.

**Tóm tắt (diễn giải)**: Bài kỹ thuật ứng dụng, so sánh 4 thuật toán ML dự báo PM2.5 theo giờ tại
6 trạm quan trắc TP.HCM, thiết kế 1 quy trình huấn luyện riêng (cửa sổ 3 tháng trượt) để xử lý tính
không dừng của ô nhiễm không khí — kết quả dùng trực tiếp cho app cảnh báo cộng đồng thực
tế.<br><span class="en">**Summary (paraphrase)**: An applied technical paper, comparing 4 ML
algorithms for hourly PM2.5 forecasting across 6 HCMC monitoring stations, designing a dedicated
training protocol (a rolling 3-month window) to handle air pollution's non-stationarity — results
feed directly into a real community early-warning app.</span>

## Research Questions

Mô hình học máy nào dự báo chính xác nhất nồng độ PM2.5 theo giờ (1–24h) và trung bình trượt 24
giờ tại TP.HCM, và cách nào để xử lý tính không dừng vốn có của chuỗi thời gian PM2.5 để cải thiện
độ chính xác dự báo?<br><span class="en">Which machine-learning model most accurately forecasts
hourly (1–24h) and 24-h rolling-mean PM2.5 concentrations in HCMC, and how can the inherent
non-stationarity of PM2.5 time series be handled to improve forecast accuracy?</span>

## Research Framework

Dự báo PM2.5 khó vì biến động không gian-thời gian mạnh và phụ thuộc nhiều yếu tố môi trường; mô
hình thống kê truyền thống kém hơn mô hình AI khi xử lý tính phi tuyến/biến đổi theo thời gian.
Literature trước (Bảng 1 trong bài, tổng hợp 9 nghiên cứu Bắc Kinh/Thượng Hải/Tehran/TQ) chủ yếu
dự báo TRUNG BÌNH NGÀY, đơn bước, đơn địa điểm — hạn chế thực tiễn với người dân cần biết dự báo
GIỜ tiếp theo và cho NHIỀU khu vực khác nhau trong cùng thành phố. Đây là khoảng trống bài lấp
đầy.<br><span class="en">PM2.5 forecasting is hard due to strong spatiotemporal variation and
dependence on many environmental factors; traditional statistical models underperform AI models
when handling nonlinearity/time-varying data. Prior literature (Table 1 in the paper, surveying 9
studies from Beijing/Shanghai/Tehran/China) mostly forecasts DAILY averages, single-step,
single-location — a practical limitation for citizens who need to know the forecast for the NEXT
HOUR and for MULTIPLE areas within the same city. This is the gap the paper fills.</span>

## Data

6 trạm quan trắc do dự án HealthyAir lắp đặt (từ 2/2021), phủ đủ 3 loại khu vực: giao thông (trạm
2, 5), dân cư (trạm 4), công nghiệp (trạm 3), và hỗn hợp (trạm 1: công nghiệp+giao thông+dân cư;
trạm 6: giao thông+dân cư). Dữ liệu PM2.5 + TSP + khí SO2/O3/NO2/CO + nhiệt độ/độ ẩm, lấy mẫu mỗi
phút rồi gộp trung bình theo giờ, giai đoạn 2/2021–12/2021 (~11 tháng, trùng giai đoạn phong tỏa
COVID-19 tại TP.HCM). Loại bỏ giá trị bất thường (>20.000 hoặc <-10 μg/m³) và outlier (>200 μg/m³
VÀ gấp 3 lần giờ trước); chia tập train/validation/test theo tỷ lệ 80:10:10.<br><span class="en">
6 monitoring stations installed by the HealthyAir project (from 2/2021), covering all 3 area
types: traffic (stations 2, 5), residential (station 4), industrial (station 3), and mixed
(station 1: industry+traffic+residential; station 6: traffic+residential). Data on PM2.5 + TSP +
SO2/O3/NO2/CO gases + temperature/humidity, sampled every minute then aggregated to hourly means,
period 2/2021–12/2021 (~11 months, overlapping HCMC's COVID-19 lockdown period). Anomalous values
(>20,000 or <-10 μg/m³) and outliers (>200 μg/m³ AND 3x the prior hour) removed; data split into
train/validation/test at an 80:10:10 ratio.</span>

## Methodology

**4 thuật toán so sánh**: (1) **XGBoost Regressor** (gradient boosting cây quyết định, wrapper
multi-output); (2) **SGD Regressor** (Stochastic Gradient Descent, hồi quy tuyến tính với
regularization L2, wrapper multi-output); (3) **1D CNN-LSTM lai ghép** (CNN 1 chiều trích xuất đặc
trưng, LSTM xử lý phụ thuộc dài hạn của chuỗi thời gian); (4) **Prophet** (mô hình phân rã cộng
tính growth+seasonality, Taylor & Letham 2018). Do PM2.5 không dừng mạnh và chỉ có ~1 năm dữ liệu,
nhóm tác giả KHÔNG dùng toàn bộ 1 năm để huấn luyện mà lấy mẫu đồng đều nhiều tập con ~3 tháng, giữ
dữ liệu train GẦN dữ liệu test về mặt thời gian — đây là điểm mới về quy trình (protocol), không
phải thuật toán mới. Đánh giá bằng RMSE và MAE.<br><span class="en">**4 algorithms compared**: (1)
**XGBoost Regressor** (gradient-boosted decision trees, multi-output wrapper); (2) **SGD Regressor**
(Stochastic Gradient Descent, linear regression with L2 regularization, multi-output wrapper); (3)
**hybrid 1D CNN-LSTM** (1D CNN extracting features, LSTM handling the time series' long-term
dependencies); (4) **Prophet** (an additive growth+seasonality decomposition model, Taylor &
Letham 2018). Because PM2.5 is strongly non-stationary and only ~1 year of data was available, the
authors did NOT train on the full year but sampled multiple ~3-month subsets uniformly, keeping
training data CLOSE to test data in time — this is a protocol innovation, not a new algorithm.
Evaluated via RMSE and MAE.</span>

## Regression/Estimation Results

- **Dự báo PM2.5 thô theo giờ (Bảng 5, trung bình toàn 6 trạm)**: **SGD Regressor tốt nhất**
  (RMSE=7,74 μg/m³, MAE=5,75 μg/m³), vượt Prophet (RMSE=8,47/MAE=5,89), XGBoost
  (RMSE=8,73/MAE=6,28), và 1D CNN-LSTM (RMSE=8,86/MAE=6,65 — YẾU NHẤT dù là mô hình deep learning
  phức tạp nhất).<br><span class="en">**Raw hourly PM2.5 forecasting (Table 5, averaged across all
  6 stations)**: **SGD Regressor performs best** (RMSE=7.74 μg/m³, MAE=5.75 μg/m³), beating
  Prophet (RMSE=8.47/MAE=5.89), XGBoost (RMSE=8.73/MAE=6.28), and 1D CNN-LSTM
  (RMSE=8.86/MAE=6.65 — the WEAKEST despite being the most complex deep-learning model).</span>
- **Dự báo trung bình trượt 24 giờ (Bảng 6)**: **SGD Regressor lại tốt nhất** (RMSE=3,38 μg/m³,
  MAE=2,64 μg/m³), vượt 1D CNN-LSTM (RMSE=4,12/MAE=3,25), XGBoost (RMSE=4,31/MAE=3,36), và Prophet
  (RMSE=5,55/MAE=4,21 — YẾU NHẤT ở tác vụ này). Sai số trung bình trượt THẤP HƠN RÕ RỆT so với dự
  báo thô (vì phép trung bình trượt làm giảm biến động dữ liệu).<br><span class="en">**24-h
  rolling-mean forecasting (Table 6)**: **SGD Regressor again performs best** (RMSE=3.38 μg/m³,
  MAE=2.64 μg/m³), beating 1D CNN-LSTM (RMSE=4.12/MAE=3.25), XGBoost (RMSE=4.31/MAE=3.36), and
  Prophet (RMSE=5.55/MAE=4.21 — the WEAKEST at this task). Rolling-mean errors are MARKEDLY LOWER
  than raw forecasting (since the rolling mean reduces data variation).</span>
- **Đặc điểm không gian-thời gian (Bảng/Hình 3)**: nồng độ PM2.5 trung bình năm CAO NHẤT ở trạm 4
  (23,1 μg/m³, khu dân cư nghèo dùng củi/than/khí đốt nấu ăn, gấp 4,6 lần chuẩn WHO), tiếp theo
  trạm 3 (khu công nghiệp Tân Bình), rồi trạm 1 (gần Xa lộ Hà Nội). Ô nhiễm cao hơn từ tháng 9 đến
  tháng 4 (mùa khô), thấp hơn tháng 5–8 (gió mùa); cao nhất vào giờ 6-8h sáng và 17-18h chiều
  (giờ nấu ăn/đi làm).<br><span class="en">**Spatiotemporal characteristics (Table/Fig. 3)**: the
  HIGHEST annual mean PM2.5 is at station 4 (23.1 μg/m³, a poor residential area using wood/
  charcoal/gas for cooking, 4.6x the WHO guideline), followed by station 3 (the Tan Binh industrial
  zone), then station 1 (near Xa Lo Ha Noi highway). Pollution is higher September–April (dry
  season), lower May–August (monsoon); peaking at 6–8 AM and 5–6 PM (cooking/commute hours).</span>

## Key Findings

**SGD Regressor — mô hình tuyến tính đơn giản nhất trong 4 mô hình — nhất quán vượt trội cả mô
hình deep learning phức tạp (1D CNN-LSTM) lẫn Prophet, ở CẢ hai tác vụ dự báo (giờ và trung bình
trượt)**. Nguyên nhân khả dĩ: tập huấn luyện nhỏ (chỉ ~3 tháng/tập, do quy trình xử lý tính không
dừng) khiến mô hình phức tạp (CNN-LSTM) dễ overfitting hơn mô hình tuyến tính đơn giản; Prophet
vốn tối ưu cho chuỗi có tính mùa vụ RÕ RỆT nên hoạt động kém trên PM2.5 (biến động mạnh, tính mùa
vụ yếu).<br><span class="en">**The SGD Regressor — the simplest linear model among the 4 —
consistently outperforms both the complex deep-learning model (1D CNN-LSTM) and Prophet, at BOTH
forecasting tasks (hourly and rolling-mean)**. A plausible reason: the small training sets
(~3 months each, due to the non-stationarity protocol) make the complex model (CNN-LSTM) more
prone to overfitting than a simple linear model; Prophet is optimized for series with STRONG
seasonality, so it underperforms on PM2.5 (highly volatile, weak seasonality).</span>

## Conclusion

Ô nhiễm không khí là vấn đề nghiêm trọng, cấp bách hơn ở các đô thị lớn của nước đang phát triển
như TP.HCM (8,99 triệu dân, chỉ có 1 trạm quan trắc trước 2021). Dự án HealthyAir lắp đặt 6 trạm,
phân tích đặc điểm không gian-thời gian PM2.5 và phát triển chuỗi mô hình dự báo giờ + trung bình
trượt 24 giờ. Để xử lý tính không dừng, nhóm tác giả thiết kế quy trình huấn luyện mới (dữ liệu
ngắn hạn ~3 tháng, gần thời điểm test). SGD Regressor vượt trội nhất quán mọi mô hình khác kể cả
Prophet phổ biến — đạt độ chính xác tiên tiến, sẽ triển khai trong app di động HealthyAir cảnh báo
sớm cho người dân TP.HCM. Hướng tương lai: bổ sung dữ liệu khí tượng/ô nhiễm khác, khai thác tính
mùa vụ dài hạn khi có dữ liệu nhiều năm hơn (không còn giai đoạn phong tỏa).<br><span class="en">
Air pollution is a serious problem, more urgent in large developing-country cities like HCMC (8.99
million people, only 1 monitoring station before 2021). The HealthyAir project installed 6
stations, analyzed PM2.5's spatiotemporal characteristics, and developed a series of hourly + 24-h
rolling-mean forecasting models. To address non-stationarity, the authors designed a new training
protocol (short ~3-month data windows close to the test period in time). The SGD Regressor
consistently outperforms every other model including the popular Prophet — achieving
state-of-the-art accuracy, to be deployed in the HealthyAir mobile app for early warnings to HCMC
citizens. Future directions: adding meteorological/other pollutant data, exploiting long-term
seasonality once more years of data are available (without lockdown periods).</span>

## Ý nghĩa cho môn học/Việt Nam

- Cùng cụm phương pháp/mục tiêu với [[l91-pham-2020-flood-risk-ai-vietnam]] — cả 2 dùng AI/ML để
  dự báo/lập bản đồ rủi ro môi trường cụ thể tại Việt Nam, phục vụ quản lý thiên tai/y tế công
  cộng thực tế — xem [[ai-for-environmental-risk-vietnam]]. Điểm khác: L91 dự báo KHÔNG GIAN (bản
  đồ rủi ro tĩnh), L92 dự báo THỜI GIAN (chuỗi PM2.5 động theo giờ).<br><span class="en">Shares a
  methodology/goal cluster with [[l91-pham-2020-flood-risk-ai-vietnam]] — both use AI/ML to
  forecast/map concrete environmental risk in Vietnam, serving real disaster-management/public-
  health purposes — see [[ai-for-environmental-risk-vietnam]]. Difference: L91 forecasts SPACE (a
  static risk map), L92 forecasts TIME (a dynamic hourly PM2.5 series).</span>
- **Bài học phương pháp đáng nhớ cho ôn thi**: mô hình ĐƠN GIẢN (SGD Regressor, tuyến tính) vượt
  trội mô hình PHỨC TẠP (1D CNN-LSTM deep learning) khi tập huấn luyện nhỏ — phản trực giác so với
  kỳ vọng thông thường "deep learning luôn tốt hơn", một điểm tranh luận hay cho câu hỏi so sánh
  phương pháp AI/ML trong môn.<br><span class="en">**A memorable methodological lesson for the
  exam**: a SIMPLE model (the linear SGD Regressor) outperforms a COMPLEX one (deep-learning 1D
  CNN-LSTM) when the training set is small — counterintuitive relative to the common expectation
  that "deep learning is always better," a good debate point for AI/ML methodology-comparison
  questions in the course.</span>
- Việt Nam là bối cảnh trực tiếp — hợp tác quốc tế Ireland-Việt Nam (CeADAR-UCD × VNU-HCM), tài
  trợ nước ngoài (Irish Research Council) chứ không phải quỹ trong nước như
  [[l91-pham-2020-flood-risk-ai-vietnam]] (NAFOSTED) — 2 mô hình tài trợ khác nhau cho nghiên cứu
  AI ứng dụng tại Việt Nam.<br><span class="en">Vietnam is the direct context — an
  Ireland-Vietnam international collaboration (CeADAR-UCD × VNU-HCM), foreign funding (the Irish
  Research Council) rather than a domestic fund like
  [[l91-pham-2020-flood-risk-ai-vietnam]] (NAFOSTED) — 2 different funding models for applied AI
  research in Vietnam.</span>

## Liên kết

- Bài giảng: [[ln9-ai-digitalization-economic-development-growth]] · Concept:
  [[ai-for-environmental-risk-vietnam]]<br><span class="en">Lecture:
  [[ln9-ai-digitalization-economic-development-growth]] · Concept:
  [[ai-for-environmental-risk-vietnam]]</span>
- Liên quan: [[l91-pham-2020-flood-risk-ai-vietnam]], [[l93-pham-2024-ai-development-vietnam-review]]
