// 메모 mock 데이터 — 백엔드 GET /api/memos 응답 형식 (docs/api.md)
// 새로고침하면 처음 상태로 돌아간다
export const mockMemos = [
  { id: 1, date: "2026-11-01", mood: "HAPPY", memo: "친구랑 떡볶이 먹었다" },
  { id: 2, date: "2026-11-02", mood: "CALM", memo: "도서관에서 조용히 책 읽음" },
  { id: 3, date: "2026-11-03", mood: "TIRED", memo: "과제 마감 때문에 밤샘" },
  { id: 4, date: "2026-11-04", mood: "SAD", memo: "발표를 망쳤다" },
  { id: 5, date: "2026-11-05", mood: "HAPPY", memo: "발표 다시 해서 칭찬받음" },
  { id: 6, date: "2026-11-06", mood: "ANGRY", memo: "버스를 눈앞에서 놓침" },
];

let nextId = mockMemos.length + 1;

export function addMockMemo({ date, mood, memo }) {
  const saved = { id: nextId++, date, mood, memo };
  mockMemos.push(saved);
  return saved;
}
