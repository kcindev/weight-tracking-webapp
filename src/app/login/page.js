import Link from "next/link";
import { LoginFormCard } from "@/components/auth/LoginFormCard";

export const metadata = {
  title: "Login | kcin"
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)] px-8 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(68,211,255,0.12),transparent_32%),radial-gradient(circle_at_80%_18%,rgba(99,102,241,0.18),transparent_28%)]" />
      <Link
        href="/"
        className="absolute left-8 top-8 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
      >
        Back to home
      </Link>
      <LoginFormCard />
    </main>
  );
}
