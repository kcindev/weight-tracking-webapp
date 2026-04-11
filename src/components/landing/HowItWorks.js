import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    title: "Log every lift",
    description: "Track sets, reps, last recorded weight, and personal bests for machines and free weights."
  },
  {
    title: "Review training trends",
    description: "See progression curves for priority exercises and compare short-term versus long-term momentum."
  },
  {
    title: "Adjust your next session",
    description: "Use recent activity, streaks, and highlights to decide where to push, maintain, or recover."
  }
];

export function HowItWorks() {
  return (
    <section className="border-y border-white/6 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple workflow that turns logged sessions into clear strength progress."
          description="Everything stays frontend-only for now, but the structure is set up for real persistence and workout flows later."
        />
        <div className="mt-12 grid grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-white/8 bg-slate-950/50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-cyan-200">
                0{index + 1}
              </div>
              <h3 className="mt-6 font-display text-2xl text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
