import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoodChart from "./components/MoodChart";
import JournalSection from "./components/JournalSection";

const SAMPLE_ENTRIES = [
  {
    id: "1",
    title: "Morning sunlight and a calm stroll",
    content:
      "Started the day with a slow walk. The air felt crisp, and my breath finally matched a softer rhythm. I noted how much better I feel when I step outside early.",
    emotion: "Calm",
    date: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Small wins at work",
    content:
      "Wrapped up a tricky task and got kind feedback from the team. Felt genuinely proud and energized to take on the next challenge.",
    emotion: "Excited",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: "3",
    title: "A quiet afternoon",
    content:
      "Felt a bit flat after lunch. Gave myself permission to pause, journal, and drink water. Neutral but steady.",
    emotion: "Neutral",
    date: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
  {
    id: "4",
    title: "Missing home",
    content:
      "Had a wave of sadness thinking of family. Called mom. It helped to hear her voice and share how I was feeling.",
    emotion: "Sad",
    date: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
  },
];

const MOOD_DATA = {
  Happy: 6,
  Sad: 3,
  Calm: 8,
  Angry: 1,
  Neutral: 4,
  Excited: 5,
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />

      <div className="space-y-10 md:space-y-14 pb-16">
        <MoodChart data={MOOD_DATA} />
        <JournalSection entries={SAMPLE_ENTRIES} />
      </div>

      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-sm text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} MindMate. Be kind to your mind.</p>
          <p>
            Built for demo purposes. Authentication and data syncing will appear here in the full
            app.
          </p>
        </div>
      </footer>
    </div>
  );
}
