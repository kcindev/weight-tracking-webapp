import { Card } from "@/components/shared/Card";

export function EmptyState({ title, description }) {
  return (
    <Card className="p-6">
      <h3 className="font-display text-xl text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </Card>
  );
}
