# 한국셰드네트워크 (kshed.net)

Men's Table에서 확장된 한국셰드네트워크의 공식 웹사이트.

## 구조

- `index.html` — 메인 홈 (Men's Table 콘텐츠 유지, nav만 네트워크 메뉴로 교체)
- `en.html` — 영문 메인
- `about.html` — 1. 멘즈셰드란?
- `make-shed.html` — 2-1. 멘즈셰드 만들기
- `find-shed.html` — 2-2. 우리동네 찾기 (Leaflet + OpenStreetMap, 설정 불필요)
- `library.html` — 3. 자료 (**Google Sheets 연동 가능**)
- `news.html` — 4. 게시판과 뉴스 (**네이버 블로그 ID 필요**)
- `network.html` — 5. 한국셰드네트워크 (소개 · 협력기관 · 연락처)
- `assets/sheds.json` — 지도용 셰드 데이터 (셰드 추가/수정 시 이 파일 편집)
- `assets/config.js` — API 키 · 외부 서비스 설정

## 외부 서비스 세팅

두 가지 외부 서비스를 설정하지 않아도 사이트는 작동하지만, 실제 데이터 대신 안내 문구나 샘플 데이터가 표시됩니다. 준비되는 대로 `assets/config.js`를 수정하세요.

### 1. 지도 (find-shed.html) — 설정 불필요

Leaflet + OpenStreetMap을 사용합니다. 완전 무료이며 API 키가 필요하지 않습니다. `assets/sheds.json`에 셰드 정보만 추가하시면 자동으로 지도에 표시됩니다.

### 2. Google Sheets 자료실 (library.html) — GViz 방식

별도 "웹에 게시" 작업 없이, **공유 링크 권한만 설정**하면 자동 연동됩니다.

1. Google Drive에서 새 스프레드시트 생성
2. 첫 행에 컬럼명 입력 — **한글 또는 영문 모두 가능**:
   - 한글: `제목 | 유형 | 저자 | 연도 | 링크`
   - 영문: `title | type | author | year | url`
   - 혼용도 OK (예: `title | 유형 | author | 연도 | url`)
3. 유형(type) 값은 반드시 "해외사례", "국내연구", "매뉴얼", "통계" 중 하나
4. 공유 → "링크가 있는 모든 사용자: 뷰어" 로 설정
5. `assets/config.js`의 `LIBRARY_SHEET_CSV_URL` 값에서 **시트 ID만 교체**하면 됩니다
   - 현재 연결된 시트 ID: `1D9nokQk990x3Axsm8eioA3X5dIUKqNQZMtHZ7ji5PR4`

자료는 Sheets에 행 추가/수정 → 사이트 새로고침하면 바로 반영됩니다.

### 3. 네이버 블로그 (news.html) — RSS 방식

네이버 블로그는 보안 정책상 iframe 임베드가 차단되어 있어, **RSS 피드를 통해 글 목록을 가져와 사이트 디자인으로 표시**합니다.

- 현재 연결된 블로그 ID: `goeseng` (blog.naver.com/goeseng)
- 변경하려면 `assets/config.js`의 `NAVER_BLOG_ID` 값만 수정
- 블로그에 글을 쓰면 최대 10분 안에 사이트에 반영됩니다 (네이버 RSS 업데이트 주기)

**중개 서비스**: [rss2json.com](https://rss2json.com)의 무료 공개 API를 사용합니다 (일 10,000회 무료, 키 불필요). 서비스가 다운되면 "블로그 직접 방문" 링크로 자동 전환됩니다.

## 셰드 추가하기

`assets/sheds.json`에 객체 추가 → GitHub push → 자동 반영.

## 배포

GitHub Pages에 그대로 배포됩니다. `main` 브랜치에 push 후 1~3분 안에 반영됩니다.
