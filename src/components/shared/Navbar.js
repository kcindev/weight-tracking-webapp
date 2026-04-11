import Link from "next/link";
import { Button } from "@/components/shared/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Login", href: "/login" },
  { label: "Dashboard", href: "/dashboard" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(5,11,20,0.82)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3 rounded-full border border-white/8 bg-white/4 px-2 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button href="/dashboard" className="min-w-[144px]">
          Open Dashboard
        </Button>
      </nav>
    </header>
  );
}
