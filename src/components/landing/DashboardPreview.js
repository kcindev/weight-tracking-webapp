import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";

export function DashboardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="grid grid-cols-[0.78fr_1.22fr] gap-10">
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Dashboard Preview"
            title="A clean desktop command center for performance, volume, and progression."
            description="The dashboard balances overview metrics with recent logs, trend visualizations, and exercise-level detail."
          />
          <div className="mt-8 flex gap-4">
            <Button href="/dashboard">Explore dashboard</Button>
            <Button href="/login" variant="secondary">
              Try login screen
            </Button>
          </div>
        </div>
        <Card className="overflow-hidden p-6">
          <div className="grid grid-cols-[220px_1fr] gap-6">
            <div className="rounded-[26px] border border-white/8 bg-white/4 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Sidebar</p>
              <div className="mt-5 space-y-3">
                {["Overview", "Exercise Log", "Progress", "Activity"].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl px-4 py-3 text-sm ${
                      index === 0
                        ? "border border-cyan-400/20 bg-cyan-400/10 text-white"
                        : "border border-transparent bg-white/0 text-slate-400"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-4">
                {["Volume", "Streak", "PBs"].map((item, index) => (
                  <div key={item} className="rounded-[22px] border border-white/8 bg-white/4 p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item}</p>
                    <p className="mt-4 text-2xl font-semibold text-white">
                      {index === 0 ? "18.4k" : index === 1 ? "11" : "4"}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-[1fr_0.82fr] gap-4">
                <div className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
                  <p className="text-sm text-slate-400">Barbell squat progression</p>
                  <div className="mt-6 flex h-52 items-end gap-3">
                    {[38, 52, 48, 60, 74, 82, 94].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-[16px] bg-[linear-gradient(180deg,#67e8f9,#2563eb)]" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  {["Leg Press +20 lbs", "Seated Row matched PB", "Deadlift volume up 7%"].map((entry) => (
                    <div key={entry} className="rounded-[22px] border border-white/8 bg-white/4 p-5 text-sm text-slate-300">
                      {entry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
