import { useEffect, useState } from "react";
import { getStats } from "@/api/stats";
import MoodBadge from "@/components/MoodBadge";
import { getMood } from "@/constants/moods";

function StatsPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  if (!stats) return <p className="muted">불러오는 중...</p>;

  const max = Math.max(1, ...stats.items.map((i) => i.cnt));

  return (
    <section className="card">
      <p className="label">전체 메모 {stats.total}개</p>
      <ul className="bars">
        {stats.items.map((i) => (
          <li key={i.moodCode} className="bar-row">
            <MoodBadge code={i.moodCode} />
            <span className="bar-track">
              <span
                className="bar-fill"
                style={{
                  width: `${(i.cnt / max) * 100}%`,
                  backgroundColor: getMood(i.moodCode)?.color,
                }}
              />
            </span>
            <span className="bar-count">{i.cnt}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatsPage;
