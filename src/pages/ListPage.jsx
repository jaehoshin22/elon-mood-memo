import { useEffect, useState } from "react";
import { getMemos } from "@/api/memos";
import MoodBadge from "@/components/MoodBadge";

function ListPage() {
  const [memos, setMemos] = useState(null);

  useEffect(() => {
    getMemos().then(setMemos);
  }, []);

  if (!memos) return <p className="muted">불러오는 중...</p>;
  if (!memos.length) return <p className="muted">아직 메모가 없어요.</p>;

  return (
    <ul className="memo-list">
      {memos.map((m) => (
        <li key={m.id} className="card">
          <div className="memo-head">
            <MoodBadge code={m.mood} />
            <span className="muted">{m.date}</span>
          </div>
          <p>{m.memo}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListPage;
