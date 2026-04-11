export function Card({ children, className = "" }) {
  return (
    <div
      className={`glass-panel rounded-[28px] border border-[var(--border)] shadow-[0_20px_60px_rgba(0,0,0,0.28)] ${className}`}
    >
      {children}
    </div>
  );
}
