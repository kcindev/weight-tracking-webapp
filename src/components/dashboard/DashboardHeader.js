import Link from "next/link";

export function DashboardHeader({ selectedExerciseName }) {
  return (
    <header className="flex items-center justify-between border-b border-white/6 px-8 py-6">
      <div>
        <p className="text-sm text-slate-500">Thursday, April 9</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white">
          Strength dashboard
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Focus view: <span className="text-slate-200">{selectedExerciseName}</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
          Current streak: 11 days
        </div>
        <Link
          href="/"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-white/18 hover:text-white"
        >
          Back to home
        </Link>
      </div>
    </header>
  );
}
