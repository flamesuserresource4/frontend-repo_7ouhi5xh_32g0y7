const EMOTION_COLORS = {
  Happy: "#fbbf24", // amber-400
  Sad: "#60a5fa", // blue-400
  Calm: "#34d399", // emerald-400
  Angry: "#f87171", // red-400
  Neutral: "#9ca3af", // gray-400
  Excited: "#fb7185", // rose-400
};

export default function MoodChart({ data }) {
  const entries = Object.entries(data || {});
  const total = entries.reduce((sum, [, v]) => sum + v, 0);
  const maxVal = Math.max(1, ...entries.map(([, v]) => v));

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Mood overview</h2>
          <span className="text-sm text-slate-500">{total} total logs</span>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6 items-end">
          {entries.map(([label, value]) => {
            const height = (value / maxVal) * 180; // px
            const color = EMOTION_COLORS[label] || "#94a3b8";
            return (
              <div key={label} className="col-span-2 flex flex-col items-center gap-2">
                <div className="w-full rounded-md bg-slate-100 p-2 flex items-end justify-center" style={{ height: 200 }}>
                  <div
                    className="w-full rounded-md transition-all"
                    style={{ backgroundColor: color, height }}
                    aria-label={`${label}: ${value}`}
                    role="img"
                  />
                </div>
                <div className="text-center">
                  <div className="text-xs font-medium text-slate-700">{label}</div>
                  <div className="text-[11px] text-slate-500">{value}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {entries.map(([label]) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: EMOTION_COLORS[label] }} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
