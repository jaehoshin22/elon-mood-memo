import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMemo } from "@/api/memos";
import { MEMO_MAX_LENGTH, MOODS } from "@/constants/moods";

const today = () => new Date().toLocaleDateString("sv-SE"); // YYYY-MM-DD

function WritePage() {
  const navigate = useNavigate();
  const [mood, setMood] = useState(null);
  const [memo, setMemo] = useState("");
  const [saving, setSaving] = useState(false);

  const canSave = mood && memo.trim() && !saving;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSave) return;
    setSaving(true);
    await createMemo({ date: today(), mood, memo: memo.trim() });
    navigate("/");
  };

  return (
    <form className="card write" onSubmit={handleSubmit}>
      <p className="label">오늘 기분은 어때요?</p>
      <div className="mood-options">
        {MOODS.map((m) => (
          <button
            key={m.code}
            type="button"
            className={mood === m.code ? "mood selected" : "mood"}
            style={{ borderColor: m.color }}
            onClick={() => setMood(m.code)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <p className="label">한 줄 메모</p>
      <textarea
        value={memo}
        maxLength={MEMO_MAX_LENGTH}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="오늘 있었던 일을 짧게 적어 보세요"
        rows={3}
      />
      <p className="muted counter">
        {memo.length}/{MEMO_MAX_LENGTH}
      </p>

      <button type="submit" className="primary" disabled={!canSave}>
        {saving ? "저장 중..." : "저장하기"}
      </button>
    </form>
  );
}

export default WritePage;
