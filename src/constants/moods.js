// 기분 5종 — 저장 코드는 docs/api.md "기분 코드" 기준
export const MOODS = [
  { code: "HAPPY", label: "기뻐", color: "#f5c518" },
  { code: "CALM", label: "평온해", color: "#7cc6a4" },
  { code: "SAD", label: "슬퍼", color: "#7aa7e0" },
  { code: "ANGRY", label: "화나", color: "#ef6b5b" },
  { code: "SLEEPY", label: "피곤해", color: "#a99bd6" },
];

export const getMood = (code) => MOODS.find((m) => m.code === code);

// 메모 최대 글자 수
export const MEMO_MAX_LENGTH = 100;
