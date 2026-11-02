import { mockResponse } from "@/api/mock";
import { addMockMemo, mockMemos } from "@/mocks/memos";

// TODO: 백엔드 연결 시 fetch 호출로 교체 (docs/api.md)

/** 메모 목록 — 최신 날짜가 위로 */
export async function getMemos() {
  const list = [...mockMemos].sort((a, b) => b.date.localeCompare(a.date));
  return mockResponse(list);
}

/** 메모 저장 */
export async function createMemo({ date, mood, memo }) {
  const saved = addMockMemo({ date, mood, memo });
  return mockResponse(saved);
}
