import { Card } from "@/components/shared/Card";

function trendStyles(trend) {
  if (trend === "up") {
    return "bg-emerald-400/12 text-emerald-300";
  }

  if (trend === "down") {
    return "bg-amber-400/12 text-amber-300";
  }

  return "bg-slate-400/12 text-slate-300";
}

export function ExerciseTable({ exercises, selectedExerciseId, onSelectExercise }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/8 px-6 py-5">
        <div>
          <h3 className="font-display text-2xl text-white">Exercise tracking</h3>
          <p className="mt-1 text-sm text-slate-400">
            Compare current loads, previous sessions, and the next lift to watch.
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-400">
          Desktop view
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="grid grid-cols-[1.2fr_0.7fr_0.5fr_0.5fr_0.5fr_0.5fr_0.8fr_0.7fr] gap-3 px-3 pb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
          <span>Exercise</span>
          <span>Category</span>
          <span>Last</span>
          <span>Prev</span>
          <span>Reps</span>
          <span>Sets</span>
          <span>Trend</span>
          <span>Last date</span>
        </div>
        <div className="space-y-2">
          {exercises.map((exercise) => (
            <button
              key={exercise.id}
              onClick={() => onSelectExercise(exercise.id)}
              className={`grid w-full grid-cols-[1.2fr_0.7fr_0.5fr_0.5fr_0.5fr_0.5fr_0.8fr_0.7fr] gap-3 rounded-[22px] border px-3 py-4 text-left transition ${
                selectedExerciseId === exercise.id
                  ? "border-cyan-400/24 bg-cyan-400/10"
                  : "border-white/8 bg-white/[0.03] hover:border-white/14 hover:bg-white/[0.05]"
              }`}
            >
              <div>
                <p className="font-medium text-white">{exercise.name}</p>
                <p className="mt-1 text-xs text-slate-500">PB: {exercise.personalBest}</p>
              </div>
              <span className="text-sm capitalize text-slate-300">{exercise.category.replace("-", " ")}</span>
              <span className="text-sm text-white">{exercise.lastWeight} lbs</span>
              <span className="text-sm text-slate-300">{exercise.previousWeight} lbs</span>
              <span className="text-sm text-slate-300">{exercise.reps}</span>
              <span className="text-sm text-slate-300">{exercise.sets}</span>
              <span>
                <span className={`rounded-full px-3 py-1 text-xs capitalize ${trendStyles(exercise.trend)}`}>
                  {exercise.trend}
                </span>
              </span>
              <span className="text-sm text-slate-300">{exercise.lastWorkoutDate}</span>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
