# Men's Table (멘즈 테이블)

배우고, 나누고, 다시 연결되는 곳 — 은퇴 후 새로운 역할을 찾아가는 60대 남성을 위한 커뮤니티.
A Korean adaptation of the Men's Shed model, developed under the Asan Frontier Academy (Team 3).

랜딩 + 클래스 신청 페이지. 밝은 크림 배경 · 네이비 포인트 · 골드 서브 · Libre Caslon Text · MT 크레스트 엠블럼.

---

## 파일 구조

```
menstable/
├── index.html        # English landing + application
├── ko.html           # 한국어 랜딩 + 신청 (기본 진입 권장)
├── README.md
└── assets/
    └── logos/
        ├── favicon.svg           # 파비콘 (MT 모노그램 코인)
        ├── crest-navy.svg        # 메인 크레스트 (밝은 배경용)
        ├── crest-cream.svg       # 반전 크레스트 (어두운 배경용)
        └── lockup-horizontal.svg # 가로형 락업
```

파트너 5개 기관 로고와 아산나눔재단 로고는 기존 Good Hands Club 사이트
(`https://goeseng.github.io/goodhandsclub/assets/logos/…`)에서 직접 링크되어 있습니다.
자체 호스팅을 원하면 해당 PNG들을 `assets/logos/`로 내려받아 경로를 상대경로로 바꾸세요.

---

## GitHub Pages 배포

1. 새 저장소 생성 (예: `menstable`) 후 이 폴더의 파일을 그대로 push.
2. **Settings → Pages → Source: Deploy from a branch → `main` / `root`** 선택.
3. 몇 분 뒤 `https://<사용자명>.github.io/menstable/` 에서 공개됩니다.
4. `ko.html`을 기본 진입점으로 쓰고 싶다면, 방문자를 바로 한국어로 보내기 위해
   `index.html` 상단 `<head>`에 리다이렉트를 넣거나, 내비게이션 EN/KO 스위처를 그대로 사용하세요.

### 커스텀 도메인 (예: menstable.kr)

- 레지스트라: **가비아** 또는 **Cloudflare Registrar** 권장.
- 저장소 루트에 `CNAME` 파일 생성 후 도메인 한 줄 기입 (예: `menstable.kr`).
- DNS에서 `A` 레코드를 GitHub Pages IP(185.199.108–111.153)로, 또는 `CNAME`을 `<사용자명>.github.io`로 설정.

---

## 신청 폼 연결 (중요)

현재 신청 폼은 **프런트엔드 데모** 상태입니다 — 제출 시 성공 메시지만 표시되고
데이터는 아무 데도 전송되지 않습니다. 실제 신청을 받으려면 아래 중 하나로 연결하세요.

### 방법 A — Formspree (가장 간단, 코드 최소)

1. [formspree.io](https://formspree.io) 가입 후 폼 생성 → 엔드포인트 URL 확보
   (예: `https://formspree.io/f/abcdwxyz`).
2. `index.html`·`ko.html`의 `<form id="applyForm">`을 다음처럼 수정:
   ```html
   <form id="applyForm" action="https://formspree.io/f/abcdwxyz" method="POST">
   ```
3. 하단 `<script>`의 폼 제출 핸들러에서 `ev.preventDefault()` 이후 `fetch`로 전송하도록 교체:
   ```js
   document.getElementById('applyForm').addEventListener('submit', async function(ev){
     ev.preventDefault();
     const data = new FormData(this);
     try {
       await fetch(this.action, { method:'POST', body:data, headers:{'Accept':'application/json'} });
       this.style.display='none';
       document.getElementById('formSuccess').classList.add('show');
     } catch(e){ alert('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.'); }
   });
   ```

### 방법 B — Google Forms (스프레드시트로 자동 수집)

1. Google Forms로 동일 항목(이름·연령대·연락처·지역·관심활동·메모)을 만든 뒤
   각 필드의 `entry.XXXX` ID를 확인 (미리보기 → 개발자도구 또는 pre-filled link 사용).
2. 폼 `action`을 `https://docs.google.com/forms/d/e/<FORM_ID>/formResponse`로,
   각 `<input>`/`<select>`의 `name`을 해당 `entry.XXXX`로 매핑.
3. `no-cors` 방식으로 전송 후 성공 화면 표시.

두 방법 모두 개인정보를 수집하므로, 실제 운영 시 **개인정보 수집·이용 동의 문구와
처리방침**을 검토하시길 권합니다.

---

## 디자인 토큰

| 역할 | 값 |
|------|-----|
| 배경 (메인) | `#F5F0E6` 크림 |
| 포인트 | `#1B2A4A` 네이비 |
| 서브 | `#B8975A` 골드 |
| 디스플레이 서체 | Libre Caslon Text |
| 한글 세리프 | Gowun Batang |
| 본문 | Noto Sans KR / Inter |
| 심볼 | MT 크레스트 (테이블 픽토그램 + 상하 아치 레터링) |

---

## 히어로 영상

Pexels의 CC0 영상 3편을 7초 간격 크로스페이드로 사용합니다 (목공 · 채소 손질/요리 배우기 · 수선 결).
교체하려면 `index.html`/`ko.html`의 `.hero-media` 안 `<video src>`를 원하는 URL로 바꾸세요.
히어로 콘텐츠(로고·문구)는 좌측에 배치되어 영상의 우측 화면을 가리지 않습니다.

---

Asan Frontier Academy · Team 3 · Seoul
