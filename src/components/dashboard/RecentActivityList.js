import { Card } from "@/components/shared/Card";

const statusStyles = {
  progress: "bg-emerald-400/12 text-emerald-300",
  volume: "bg-cyan-400/12 text-cyan-200",
  steady: "bg-slate-400/12 text-slate-300",
  milestone: "bg-amber-400/12 text-amber-300"
};

export function RecentActivityList({ activity }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl text-white">Recent activity</h3>
          <p className="mt-1 text-sm text-slate-400">Realistic training notes with progression context.</p>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {activity.map((item) => (
          <div key={item.id} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium text-white">{item.title}</p>
              <span className={`rounded-full px-3 py-1 text-xs capitalize ${statusStyles[item.status]}`}>
                {item.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">{item.time}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
