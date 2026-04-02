# User Study — Setup Guide

## 파일 구조

```
user_study/
├── index.html       ← 메인 설문 페이지
├── config.js        ← 프롬프트 설정 (수정 필요)
├── analyze.py       ← 결과 분석 스크립트
├── results/         ← 참여자 JSON 파일 저장 폴더 (직접 생성)
└── images/
    ├── sdxl/
    │   ├── prompt_01/
    │   │   ├── method1.jpg   ← CFG
    │   │   ├── method2.jpg   ← PLADIS
    │   │   └── method3.jpg   ← Ours (GAG)
    │   ├── prompt_02/ ...
    │   └── prompt_12/
    └── flux/
        ├── prompt_01/
        │   ├── method1.jpg   ← Base (Flux-Schnell)
        │   ├── method2.jpg   ← PLADIS
        │   └── method3.jpg   ← Ours (GAG)
        └── prompt_08/
```

---

## Step 1 — 이미지 준비

각 프롬프트 폴더에 3장씩 넣으세요:
- `method1.jpg` → CFG (SDXL) / Base Flux-Schnell (Flux)
- `method2.jpg` → PLADIS
- `method3.jpg` → Ours (GAG)

> 참여자에게는 A/B/C로 **랜덤하게** 보여지므로 순서 노출 걱정 없음.

---

## Step 2 — 프롬프트 수정

`config.js`에서 `prompt` 필드를 실제 사용한 프롬프트로 수정하세요.

---

## Step 3 — GitHub Pages 배포

```bash
git init
git add .
git commit -m "user study"
git remote add origin https://github.com/<your-anon-account>/<repo>.git
git push -u origin main
```

GitHub 레포 → Settings → Pages → Source: main branch → Save  
→ `https://<your-anon-account>.github.io/<repo>/` 로 접근 가능

---

## Step 4 — 결과 수집

참여자가 설문 완료 후 **Download JSON** 버튼으로 파일 다운로드.  
해당 파일을 `results/` 폴더에 모으세요.

---

## Step 5 — 분석

```bash
pip install -r requirements.txt   # 표준 라이브러리만 사용, 별도 설치 불필요

python analyze.py results/
```

출력 예시:
```
  TEXT ALIGNMENT  —  Win Rate
  ════════════════════════════════════════════════════════════
  Method                       Win Rate   Wins   95% CI
  ────────────────────────────────────────────────────────
  Baseline (CFG / Base)          18.5%     37   [13.2% – 24.1%]
  PLADIS                         31.0%     62   [25.0% – 37.5%]
  Ours (GAG)                     50.5%    101   [43.8% – 57.2%]
```

---

## 참고

- 참여자 1인당 소요시간: 약 10분
- 블라인드 보장: A/B/C 순서는 매 참여자마다 프롬프트별로 랜덤 배정
- method 이름은 결과 JSON에만 기록되며 설문 중 노출되지 않음
