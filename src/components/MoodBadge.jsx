import { getMood } from "@/constants/moods";

// 기분 표시 배지 — 공통 컴포넌트, 수정 전 팀에 먼저 공유 (CLAUDE.md)
function MoodBadge({ code }) {
  const mood = getMood(code);
  return (
    <span className="badge">
      <span
        className="badge-dot"
        style={{ backgroundColor: mood?.color ?? "#cccccc" }}
      />
      {mood?.label ?? "알 수 없음"}
    </span>
  );
}

export default MoodBadge;
