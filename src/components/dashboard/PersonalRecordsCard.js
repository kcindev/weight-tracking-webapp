import { Card } from "@/components/shared/Card";

export function PersonalRecordsCard({ records }) {
  return (
    <Card className="p-6">
      <h3 className="font-display text-2xl text-white">Personal records</h3>
      <p className="mt-1 text-sm text-slate-400">Highlights worth keeping visible between sessions.</p>
      <div className="mt-6 space-y-4">
        {records.map((record) => (
          <div key={record.label} className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{record.label}</p>
            <p className="mt-3 text-lg font-semibold text-white">{record.value}</p>
            <p className="mt-2 text-sm text-slate-400">{record.note}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
