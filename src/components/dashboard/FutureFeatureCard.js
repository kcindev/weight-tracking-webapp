import { Card } from "@/components/shared/Card";

export function FutureFeatureCard() {
  return (
    <Card className="p-6">
      <h3 className="font-display text-2xl text-white">Future-ready entry flow</h3>
      <p className="mt-1 text-sm text-slate-400">
        This panel is structured so future add/edit workout flows can live beside the dashboard.
      </p>
      <div className="mt-6 rounded-[24px] border border-dashed border-white/12 bg-white/[0.02] p-6">
        <p className="text-sm font-medium text-white">Modal-ready area</p>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Add-entry, edit-log, and workout detail modals can mount from this section later without changing the overall page layout.
        </p>
      </div>
    </Card>
  );
}
