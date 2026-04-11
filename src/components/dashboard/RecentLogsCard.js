import { Card } from "@/components/shared/Card";

export function RecentLogsCard({ logs }) {
  return (
    <Card className="p-6">
      <h3 className="font-display text-2xl text-white">Recent logs / entries</h3>
      <p className="mt-1 text-sm text-slate-400">Latest sets recorded across machines and free weights.</p>
      <div className="mt-6 space-y-3">
        {logs.map((log) => (
          <div key={`${log.exercise}-${log.date}`} className="flex items-center justify-between rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
            <div>
              <p className="font-medium text-white">{log.exercise}</p>
              <p className="mt-1 text-sm text-slate-400">{log.notes}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-cyan-200">{log.weight}</p>
              <p className="mt-1 text-sm text-slate-500">{log.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
