export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Your daily space to reflect, unwind, and grow
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            MindMate helps you capture emotions, write reflections, and see your mood trends over
            time. A minimal, calming journal designed for clarity and self‑care.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center rounded-md bg-teal-500 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500/50">
              Start journaling
            </button>
            <button className="inline-flex items-center rounded-md border border-slate-300 bg-white text-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300/60">
              Learn more
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200/40 via-indigo-200/30 to-pink-200/40 rounded-3xl blur-2xl -z-0" aria-hidden />
          <div className="relative z-10 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Happy", color: "bg-amber-300" },
                { label: "Calm", color: "bg-teal-300" },
                { label: "Neutral", color: "bg-slate-300" },
                { label: "Excited", color: "bg-pink-300" },
                { label: "Sad", color: "bg-blue-300" },
                { label: "Angry", color: "bg-red-300" },
              ].map((chip) => (
                <div key={chip.label} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${chip.color}`} />
                  <span className="text-sm text-slate-700">{chip.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">Track emotions effortlessly with gentle, colorful cues.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
