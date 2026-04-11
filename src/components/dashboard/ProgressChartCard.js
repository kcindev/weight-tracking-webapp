"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Card } from "@/components/shared/Card";

export function ProgressChartCard({ ranges, activeRange, onChangeRange, data, exerciseName }) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-2xl text-white">Progress trends</h3>
          <p className="mt-1 text-sm text-slate-400">
            Weight progression for <span className="text-slate-200">{exerciseName}</span>
          </p>
        </div>
        <div className="inline-flex rounded-full border border-white/10 bg-white/4 p-1.5">
          {ranges.map((range) => (
            <button
              key={range.id}
              onClick={() => onChangeRange(range.id)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeRange === range.id
                  ? "bg-cyan-400/12 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
      {data.length ? (
        <div className="mt-8 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 12, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#67e8f9" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#90a0be", fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: "#90a0be", fontSize: 12 }} />
              <Tooltip
                cursor={{ stroke: "rgba(255,255,255,0.14)" }}
                contentStyle={{
                  background: "rgba(8,17,31,0.94)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "18px",
                  color: "#fff"
                }}
              />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="url(#lineStroke)"
                strokeWidth={3}
                dot={{ fill: "#67e8f9", r: 4, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: "#ffffff", stroke: "#67e8f9", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="mt-8 flex h-72 items-center justify-center rounded-[24px] border border-dashed border-white/12 bg-white/[0.02]">
          <div className="max-w-sm text-center">
            <p className="text-lg font-medium text-white">No trend series yet</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              This selected exercise does not have mock progression data yet. Keep the panel here for future backend-driven chart history.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
