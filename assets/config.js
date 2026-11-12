// 한국셰드네트워크 · External service configuration
// Change values here when needed. See README.md for format details.

// -------- Google Sheets 자료실 (library.html) --------
// GViz CSV endpoint — works with regular "Anyone with the link: Viewer" sharing.
// Sheet columns required: title | type | author | year | url
// Change the sheet ID below to point to a different Sheet.
window.LIBRARY_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1D9nokQk990x3Axsm8eioA3X5dIUKqNQZMtHZ7ji5PR4/gviz/tq?tqx=out:csv';

// Sample fallback data (used when Sheets can't be fetched — e.g. offline).
// Can be left in place as a safety net.
window.LIBRARY_SAMPLE_DATA = [
  {title: "Australian Men's Shed Association — Annual Report 2026", type:"해외사례", author:"AMSA", year:"2026", url:"https://mensshed.org"},
  {title: "Men's Sheds and the Experience of Loneliness (Wilson et al.)", type:"국내연구", author:"J Milligan et al.", year:"2024", url:"#"},
  {title: "Irish Men's Sheds — Operating Manual", type:"매뉴얼", author:"IMSA", year:"2023", url:"https://menssheds.ie"},
  {title: "WHO Social Prescribing & Men's Sheds", type:"통계", author:"WHO", year:"2025", url:"#"},
  {title: "UK Men's Sheds Impact Report 2025", type:"해외사례", author:"UKMSA", year:"2025", url:"https://menssheds.org.uk"},
  {title: "한국 고령 남성의 사회적 고립과 셰드 적용 가능성", type:"국내연구", author:"아산 프론티어 아카데미 15기 3팀", year:"2026", url:"#"},
];

// -------- Naver Blog 공식 소식 (news.html) --------
// Naver blocks direct iframe embedding, so we fetch the blog's RSS feed via
// rss2json.com (free public CORS proxy for RSS) and render posts in our design.
window.NAVER_BLOG_ID = 'goeseng';
