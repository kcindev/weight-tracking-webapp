import { Card } from "@/components/shared/Card";

export function StatCard({ label, value, delta }) {
  return (
    <Card className="p-5">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm text-cyan-200">{delta}</p>
    </Card>
  );
}
