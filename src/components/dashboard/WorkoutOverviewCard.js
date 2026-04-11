import { Card } from "@/components/shared/Card";

export function WorkoutOverviewCard() {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-2xl text-white">Workout overview</h3>
          <p className="mt-1 text-sm text-slate-400">Current split, recovery rhythm, and training balance.</p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-500">
          This week
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Split</p>
          <p className="mt-3 text-lg font-semibold text-white">Upper / Lower / Pull</p>
          <p className="mt-2 text-sm text-slate-400">4 completed sessions</p>
        </div>
        <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
          <p className="mt-3 text-lg font-semibold text-white">Lower body strength</p>
          <p className="mt-2 text-sm text-slate-400">Squat and leg press are trending up</p>
        </div>
        <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Recovery</p>
          <p className="mt-3 text-lg font-semibold text-white">On track</p>
          <p className="mt-2 text-sm text-slate-400">Sleep and fatigue notes can plug in later</p>
        </div>
      </div>
    </Card>
  );
}
