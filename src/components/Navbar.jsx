import { Home, BarChart3, BookOpen, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-indigo-400 text-white font-bold">MM</span>
          <span className="font-semibold text-slate-800">MindMate</span>
        </div>
        <ul className="hidden sm:flex items-center gap-6 text-slate-600">
          <li className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors cursor-pointer"><Home className="h-4 w-4" /> Home</li>
          <li className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors cursor-pointer"><BookOpen className="h-4 w-4" /> Journal</li>
          <li className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors cursor-pointer"><BarChart3 className="h-4 w-4" /> Mood Stats</li>
          <li className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors cursor-pointer"><User className="h-4 w-4" /> Profile</li>
        </ul>
        <button className="ml-4 inline-flex items-center rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900/30">
          Sign in
        </button>
      </nav>
    </header>
  );
}
