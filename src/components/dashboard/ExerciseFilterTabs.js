export function ExerciseFilterTabs({ filters, activeFilter, onChange }) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/4 p-1.5">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onChange(filter.id)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            activeFilter === filter.id
              ? "bg-cyan-400/12 text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
