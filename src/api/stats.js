import { mockResponse } from "@/api/mock";
import { MOODS } from "@/constants/moods";
import { mockMemos } from "@/mocks/memos";

// TODO: 백엔드 연결 시 fetch 호출로 교체 (docs/api.md)

/**
 * 기분 통계 — GET /api/stats 응답 형식
 * { total, items: [{ moodCode, cnt }] }
 */
export async function getStats() {
  const total = mockMemos.length;
  const items = MOODS.map(({ code }) => ({
    moodCode: code,
    cnt: mockMemos.filter((m) => m.mood === code).length,
  }));
  return mockResponse({ total, items });
}
