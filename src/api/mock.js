// mock 응답 헬퍼 — 실제 API처럼 비동기로 복사본을 돌려준다
const DELAY_MS = Number(import.meta.env.VITE_MOCK_DELAY_MS) || 0;

export function mockResponse(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(structuredClone(data)), DELAY_MS);
  });
}
