import Link from "next/link";

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#5fe0ff_0%,#2b8fff_100%)] text-slate-950 shadow-[0_10px_30px_rgba(58,179,255,0.28)] hover:shadow-[0_14px_34px_rgba(58,179,255,0.36)]",
  secondary:
    "border border-white/12 bg-white/5 text-white hover:border-white/20 hover:bg-white/8",
  ghost:
    "border border-cyan-400/20 bg-cyan-400/8 text-cyan-100 hover:bg-cyan-400/14"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
