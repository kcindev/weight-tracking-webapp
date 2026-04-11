import { Navbar } from "@/components/shared/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DashboardPreview } from "@/components/landing/DashboardPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(68,211,255,0.16),transparent_42%),radial-gradient(circle_at_18%_24%,rgba(80,93,255,0.14),transparent_28%)]" />
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <HowItWorks />
      <DashboardPreview />
      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
          <div>
            <p className="font-display text-lg text-white">IronPulse</p>
            <p className="mt-1 text-sm text-slate-400">
              Built to make strength progress obvious.
            </p>
          </div>
          <div className="text-right text-sm text-slate-500">
            <p>Desktop-first frontend foundation</p>
            <p>Ready for auth, APIs, and workout entry modals later</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
