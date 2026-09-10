# OUTLINE - Essay DI (GS Heshmati) - ban de duyet

**Deadline:** 13/9/2026. **Co-authored:** Tran Chanh Truc + Nguyen Ngoc Xuan Thao -> 5,000-6,000 tu (ke ca bang va references).
**Cau truc:** bam dung muc 8 cua Essays_Instructions.md (9 phan). **Format:** trang bia, style bang, caption theo template Eco3_Report_Truc.docx.
**Title (de xuat, cho duyet):** "Artificial Intelligence, Green Technology, and Structural Outcomes: Carbon Intensity, Labor Productivity, and the Labor Income Share in OECD and Emerging Economies, with a Focus on Vietnam and Southeast Asia"

**Word budget tong: ~5,700 tu**

---

## 0. Front matter (khong tinh word count noi dung)
- Trang bia theo Eco3 template: Title, 2 ten + ID + affiliation (UEH-VNP), email, course, GS Almas Heshmati
- List of Tables / List of Figures: field dong (SEQ), khong go tay
- Abbreviations: dat truoc noi dung (AIPI, AIIE, GTI, FE-IV, GMM, SHAP, EM, SEA...)

## 1. Abstract (~230 tu)
- Cap nhat ban da gui 28/6, giu khung 5-move (Intro/Purpose/Method/Product/Conclusion), 200-250 tu theo Heshmati
- Product move dung so that Table S2: A-OECD -0.0965 (sig 10%), B-OECD +0.0187 (sig 10%), C-OECD null do hai kenh triet tieu; C-EM +0.0622 (FE preferred, sig 10%)
- 3-5 keywords: AI exposure; green technology; labor income share; carbon intensity; Vietnam

## 2. Background (~650 tu)
- 2.1 Dong luc: AI va green tech la hai cong nghe muc dich chung (GPT) dinh hinh phat trien; cau hoi ai huong loi (productivity), ai tra gia (CO2, labor share)
- 2.2 Boi canh phat trien: OECD da truong thanh cong nghe vs EM dang bat kip; lien ket truc tiep voi chu de mon hoc (technology upgrading, middle-income trap) va Topic Area 1 cua Heshmati
- 2.3 Vi tri Vietnam/SEA: VN trong chuoi gia tri, tham vong AI + net-zero 2050; ly do can bang chung dinh luong nganh-nuoc
- 2.4 Dong gop: (i) mot khung FE-IV thong nhat cho 3 outcome, (ii) shift-share Bartik instrument, (iii) mo rong EM + tang SEA/VN, (iv) channel decomposition giai thich null effect
- 2.5 Research questions: RQ1 AI -> carbon intensity? RQ2 GTI -> labor productivity (moderated by AI)? RQ3 AI -> labor income share va qua kenh nao?

## 3. Theoretical framework (~700 tu)
- 3.1 Task-based framework Acemoglu & Restrepo (2020 JPE, 2022 Econometrica): displacement vs productivity vs reinstatement -> du doan dau (+/-) cho ca 3 outcome
- 3.2 AI measurement: Felten et al. (2021) AIOE; Baruffaldi et al. (2020) OECD AI patents -> AIPI; Webb (2020) robustness
- 3.3 Green tech va productivity: Popp (2019), Albrizio et al. (2017), porter-hypothesis logic cho Part B
- 3.4 Labor share: Autor et al. superstar effects, Gollin (2002) adjustment cho Part C
- 3.5 Khung hop nhat: mot so do (khong bat buoc hinh) noi technology intensity -> 3 outcome, moderators (HighAI, HighCapital, HighSkill, HighRenewable), va vi tri catch-up cua EM
- Trich dan MUST-HAVE list: Acemoglu 2025, Eloundou et al. 2024, Brynjolfsson et al. 2021, Graetz & Michaels 2018

## 4. Data (~650 tu)
- 4.1 Kien truc mau: Table 1 = Sample architecture (tu TableS2): 6 panel (A/B/C x OECD/EM), so nuoc, nganh, nam, N
- 4.2 OECD side: STAN A10 (10 nganh, 25 nuoc, 2010-2022), OECD AI Patents (AIPI), EPO ENVTECH Y02 (GTI), EDGAR CO2, WDI controls
- 4.3 EM side: UNIDO INDSTAT4 (VA/EMP/Wages), WIPO AI patents + WIPO Green (den 2024/2022), WGI controls
- 4.4 Vietnam/SEA data: VNM 22 obs panel ALT (WIPO AI) Part A/C; VNM in-sample truc tiep Part B; THA panel EPO; China 0 obs labshare (UNIDO thieu VA) -> limitation
- 4.5 Table 2 = Summary statistics gop (chon bien chinh 3 part, OECD vs EM canh nhau); correlation matrix: 1 bang gon hoac chuyen Appendix; Figure 1 = trend 3 outcome theo thoi gian (ghep tu Fig1 moi part hoac chon 1 hinh dai dien)

## 5. Model (~550 tu)
- 5.1 Ba phuong trinh FE hai chieu (nuoc x nganh, nam): EQ-A carbon intensity, EQ-B labor productivity (+ GTI x HighAI), EQ-C labor share (+ moderators); ky hieu thong nhat, danh so phuong trinh
- 5.2 Identification: shift-share Bartik instrument (AIPI_bartik / GTI instrument), 2 gia dinh Relevance + Exogeneity; Goldsmith-Pinkham Rotemberg weights
- 5.3 Estimator ladder: Pooled OLS -> Two-way FE -> RE + Hausman -> FE-IV -> System GMM (trinh bay ngan, bang ket qua chi giu FE va FE-IV chinh; GMM vao robustness)
- 5.4 Channel decomposition Part C: labshare = wage vs employment vs VA, accounting identity check

## 6. Estimation and testing (~500 tu)
- 6.1 Quy trinh test: 7 diagnostic tests + Hansen J (TEST 8) - ngon ngu "may not be exogenous"; AR(1)/AR(2) cho GMM
- 6.2 Table 3 = Diagnostics gop 3 part (OECD): F first-stage, Wu-Hausman, Hansen J, serial correlation, cross-sectional dependence; alpha = 0.10
- 6.3 Wild cluster bootstrap cho EM (it cluster); ghi ro fallback limitation ke thua
- 6.4 TreeSHAP: chi la descriptive complement, khong causal

## 7. Result and analysis (~1,700 tu) - phan nang nhat
- 7.1 Part A - AI and carbon intensity (~350 tu): Table 4 = Main results A (OECD FE/FE-IV + EM); headline -0.0965 sig 10% OECD, EM +0.80 ns; kinh te: AI di kem giam cuong do phat thai o OECD
- 7.2 Part B - Green tech and productivity (~350 tu): Table 5 = Main results B; +0.0187 sig 10% OECD, EM +0.2132 ns; HighAI moderation
- 7.3 Part C - AI and labor share (~450 tu): Table 6 = Main results C + Table 7 = Channel decomposition; OECD null +0.0114 ns VI hai kenh triet tieu (wage -0.071 sig 1% vs employment +0.090 sig 1%, gap = 0); Figure 2 = Channel bar (Fig9 partC); day la ket qua "story" chinh cua bai
- 7.4 Cross-part synthesis (~250 tu): Table 8 = Cross-part FE-IV summary (TableS1/S2); Figure 3 = FigS1 coefficient comparison; narrative: OECD tech co loi ro (sach hon, nang suat hon, khong xoi mon labor share); EM cung chieu nhung kem chinh xac
- 7.5 Vietnam and Southeast Asia in Focus (~300 tu, tieu muc cuoi): ASEAN interaction (Table 9 = ASEAN spotlight chon 1 bang dai dien hoac gop 3 part thanh 1 bang); C-EM preferred FE +0.0622 t=1.8 sig 10% qua kenh luong (wage +0.0466, emp +0.0011, VA -0.0145); Figure 4 = SEA vs other-EM trend (chon 1); SHAP waterfall VNM (Fig22 partB) neu con cho
- Robustness (long ghep, khong section rieng): LOO-country/SEA, WIPO alt (dua VNM vao), placebo, Gollin adjustment, LSDVC, GMM - moi thu 1-2 cau + tham chieu Appendix

## 8. Conclusion and policy recommendations (~550 tu)
- 8.1 Tom tat 3 phat hien theo RQ
- 8.2 Policy cho Vietnam: (i) AI adoption khong nhat thiet danh doi khi hau - co the ho tro giam carbon intensity khi bat kip OECD; (ii) green tech + AI complementarity -> chinh sach doi moi kep; (iii) labor share: kenh luong duong o EM/SEA -> dau tu ky nang de giu reinstatement effect; noi voi technology upgrading/middle-income trap cua mon hoc
- 8.3 Limitations: mau EM nho, China VA thieu, wild bootstrap fallback, patent-based measures la proxy
- 8.4 Future research: firm-level VN data (GSO), micro evidence

## 9. References (~25-30 muc, tinh vao word count)
- MUST-HAVE 6 bai + SHOULD-HAVE + nguon du lieu (STAN, UNIDO, WIPO, EDGAR, EPO, WDI, WGI) + Gollin 2002, Popp 2019, Baruffaldi 2020, Webb 2020
- Style: author-date, xep ABC, giu nguyen cach trinh bay cua Eco3 template

## Appendix (khong tinh word count - nen hoi xac nhan GS trong email tien do)
- A1: Full robustness tables (R-series moi part), first-stage chi tiet, GP Rotemberg weights
- A2: SHAP figures bo sung, LOO betas, threshold sensitivity
- Nguyen tac: main text chi 9 bang + 4 hinh; moi thu khac vao Appendix hoac luoc bo

---

## Bang/hinh main text (chot so luong de giu word count)

| # | Noi dung | Nguon file |
|---|---|---|
| Table 1 | Sample architecture 6 panel | TableS2 (cho ban Part A/B/C sau khi re-run PART D) |
| Table 2 | Summary statistics gop | Table1/3/4 SummaryStats cac part (gop tay) |
| Table 3 | Diagnostics gop 3 part | Table3/7/8 Diagnostics (gop tay) |
| Table 4 | Main results Part A | partA Table4 + Table8 |
| Table 5 | Main results Part B | partB Table8 + Table17 |
| Table 6 | Main results Part C | partC Table9 + Table22 |
| Table 7 | Channel decomposition C | partC Table17 (+ Table26 cot EM) |
| Table 8 | Cross-part synthesis | TableS1/S2 |
| Table 9 | ASEAN/SEA spotlight | Table9/18/23 (gop hoac chon) |
| Figure 1 | Trend 3 outcome | Fig1 moi part (chon/ghep) |
| Figure 2 | Channel bar Part C | partC Fig9 |
| Figure 3 | Cross-part coefficients | FigS1 |
| Figure 4 | SEA vs other-EM trend | Fig15/21/22 (chon 1) |

## Rules ap dung khi viet
- Khong en/em dash (chi hyphen). "Labor" kieu My. Alpha = 0.10. fmt = 4 (4 chu so thap phan)
- Table title TREN bang; coefficients va diagnostics TACH bang; Table/Figure danh so nguyen lien tiep
- Khong dung chu "Essay 1/2/3" trong bai - chi Part A/B/C
- Hansen J: "may not be exogenous"; khong overclaim causal cho SHAP
- File docx build bang docx skill, ten file gan run_ts; field TOC/SEQ tach run rieng (tranh bug field-run merge)

## Viec truoc khi viet (nhac lai)
1. Honey G chay lai PART D (Run selection tu `# PART D:` den het `[S5]`) -> TableS1/S2 + FigS1 ten Part A/B/C; xoa 2 file CrossEssay_* cu
2. Duyet outline nay (title, so bang/hinh, word budget, vi tri SEA/VN)
3. Sau khi duyet: viet tung phan theo thu tu 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> Abstract cuoi cung
