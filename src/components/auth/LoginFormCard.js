"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/shared/Card";

export function LoginFormCard() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }

  return (
    <Card className="relative w-full max-w-md p-8">
      <div className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(82,216,255,0.8),transparent)]" />
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
          Frontend-only sign in
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-white">Welcome back</h1>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          Authentication is coming later. This screen is a polished placeholder for future auth integration.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Email</span>
          <input
            type="email"
            placeholder="name@ironpulse.app"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-cyan-400/[0.04] focus:ring-4 focus:ring-cyan-400/10"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Password</span>
          <input
            type="password"
            placeholder="********"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-cyan-400/[0.04] focus:ring-4 focus:ring-cyan-400/10"
          />
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#5fe0ff_0%,#2b8fff_100%)] px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(58,179,255,0.28)] transition hover:shadow-[0_18px_38px_rgba(58,179,255,0.34)] disabled:cursor-not-allowed disabled:opacity-80"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-400">
        <span>No backend calls yet</span>
        <Link href="/dashboard" className="text-cyan-200 transition hover:text-cyan-100">
          Open dashboard preview
        </Link>
      </div>
    </Card>
  );
}
