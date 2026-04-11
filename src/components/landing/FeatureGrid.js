import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";

const features = [
  {
    title: "Machine + free-weight tracking",
    description: "Keep chest press, lat pulldown, dumbbell bench, squats, and more in one training system."
  },
  {
    title: "Progress visibility",
    description: "Compare last session against previous numbers, spot plateaus, and surface your strongest lifts."
  },
  {
    title: "Clean analytics dashboard",
    description: "View volume, streaks, milestones, and lift progression in a layout built for daily use."
  }
];

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <SectionHeading
        eyebrow="Feature set"
        title="A gym tracking UI designed to feel focused, premium, and easy to extend."
        description="The product foundation covers landing, auth entry, and a dashboard that already feels ready for real training data."
      />
      <div className="mt-10 grid grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="p-7">
            <div className="mb-6 h-12 w-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10" />
            <h3 className="font-display text-2xl text-white">{feature.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
