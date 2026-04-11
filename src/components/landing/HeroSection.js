import { Button } from "@/components/shared/Button";

const metrics = [
  { label: "Workouts logged", value: "148" },
  { label: "Exercises tracked", value: "27" },
  { label: "Weekly progression", value: "+12.4%" }
];

export function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl grid-cols-[1.1fr_0.9fr] gap-10 px-8 pb-24 pt-16">
      <div className="flex flex-col justify-center">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
          Tracking Workout Weights
        </div>
        <h1 className="mt-8 max-w-3xl font-display text-6xl font-semibold leading-[1.02] tracking-tight text-white">
          Track weights, machines, and lifts in one place.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Monitor strength progression over time, compare sessions, and keep every machine
          and free-weight movement inside one polished training dashboard.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <Button href="/dashboard">View Product Dashboard</Button>
          <Button href="/login" variant="secondary">
            Sign In Preview
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[24px] border border-white/8 bg-white/4 p-5">
              <p className="text-3xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-8 top-8 h-44 w-44 rounded-full bg-cyan-400/16 blur-3xl" />
        <div className="absolute right-8 top-20 h-36 w-36 rounded-full bg-indigo-400/18 blur-3xl" />
        <div className="glass-panel relative overflow-hidden rounded-[32px] border border-white/10 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Weekly performance</p>
              <p className="mt-2 text-2xl font-semibold text-white">Upper / Lower Split</p>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              +18 lbs this month
            </div>
          </div>
          <div className="space-y-4">
            {[
              ["Leg Press", "290 lbs", "+20 lbs"],
              ["Barbell Squat", "255 lbs", "+10 lbs"],
              ["Lat Pulldown", "170 lbs", "Matched PB"]
            ].map(([exercise, weight, note]) => (
              <div
                key={exercise}
                className="flex items-center justify-between rounded-[24px] border border-white/8 bg-[rgba(255,255,255,0.03)] px-5 py-4"
              >
                <div>
                  <p className="font-medium text-white">{exercise}</p>
                  <p className="mt-1 text-sm text-slate-500">Latest tracked session</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-cyan-200">{weight}</p>
                  <p className="mt-1 text-xs text-slate-500">{note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {["Session quality", "Streak", "Volume"].map((label, index) => (
              <div key={label} className="rounded-[22px] border border-white/8 bg-white/4 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {index === 0 ? "92%" : index === 1 ? "11 days" : "18.4k"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
