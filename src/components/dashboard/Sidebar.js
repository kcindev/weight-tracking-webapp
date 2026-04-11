const navItems = [
  { id: "overview", label: "Overview" },
  { id: "tracking", label: "Exercise Tracking" },
  { id: "progress", label: "Progress" },
  { id: "activity", label: "Recent Activity" }
];

export function Sidebar({ activeItem, onSelect }) {
  return (
    <aside className="border-r border-white/6 bg-[rgba(5,11,20,0.88)] px-6 py-7">
      <div className="rounded-[28px] border border-cyan-400/16 bg-cyan-400/8 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">IronPulse</p>
        <h2 className="mt-3 font-display text-2xl text-white">Training OS</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Desktop dashboard for viewing machines, free weights, logs, and lift progression.
        </p>
      </div>
      <div className="mt-8 space-y-2">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
              activeItem === item.id
                ? "border border-cyan-400/24 bg-cyan-400/10 text-white"
                : "border border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span>{item.label}</span>
            <span className="text-xs text-slate-500">0{index + 1}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 rounded-[24px] border border-white/8 bg-white/4 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Future feature</p>
        <p className="mt-3 text-base font-medium text-white">Workout entry modal</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          This sidebar block is a natural launch point for a future quick-add or edit-entry modal flow.
        </p>
      </div>
    </aside>
  );
}
