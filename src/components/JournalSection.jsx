import { Search, Pencil, Trash2, CalendarDays } from "lucide-react";

const EMOTION_BADGE = {
  Happy: "bg-amber-100 text-amber-800 border-amber-200",
  Sad: "bg-blue-100 text-blue-800 border-blue-200",
  Calm: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Angry: "bg-red-100 text-red-800 border-red-200",
  Neutral: "bg-slate-100 text-slate-800 border-slate-200",
  Excited: "bg-rose-100 text-rose-800 border-rose-200",
};

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function JournalCard({ entry }) {
  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-slate-900 font-semibold line-clamp-1">{entry.title}</h3>
          <p className="mt-1 text-sm text-slate-600 line-clamp-2">{entry.content}</p>
          <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
            <span className={`inline-flex items-center gap-2 rounded-full border px-2 py-1 ${EMOTION_BADGE[entry.emotion] || ""}`}>
              <span className="h-2 w-2 rounded-full bg-current opacity-60" />
              {entry.emotion}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" /> {formatDate(entry.date)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
          <button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50"><Pencil className="h-3.5 w-3.5" /> Edit</button>
          <button className="inline-flex items-center gap-1 rounded-md border border-red-200 bg-white px-2.5 py-1.5 text-xs text-red-600 hover:bg-red-50"><Trash2 className="h-3.5 w-3.5" /> Delete</button>
        </div>
      </div>
    </article>
  );
}

export default function JournalSection({ entries }) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Your journal</h2>
        <button className="rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800">Add entry</button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-12">
        <div className="sm:col-span-8">
          <label className="relative block">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400"><Search className="h-4 w-4" /></span>
            <input
              className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              placeholder="Search by title or text..."
              type="text"
            />
          </label>
        </div>
        <div className="sm:col-span-4 grid grid-cols-2 gap-3">
          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40">
            <option value="">All emotions</option>
            {Object.keys(EMOTION_BADGE).map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {entries.map((e) => (
          <JournalCard key={e.id} entry={e} />
        ))}
      </div>
    </section>
  );
}
