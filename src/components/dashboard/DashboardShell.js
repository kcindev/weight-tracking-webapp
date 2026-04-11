"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { ExerciseFilterTabs } from "@/components/dashboard/ExerciseFilterTabs";
import { ExerciseTable } from "@/components/dashboard/ExerciseTable";
import { RecentActivityList } from "@/components/dashboard/RecentActivityList";
import { ProgressChartCard } from "@/components/dashboard/ProgressChartCard";
import { PersonalRecordsCard } from "@/components/dashboard/PersonalRecordsCard";
import { FutureFeatureCard } from "@/components/dashboard/FutureFeatureCard";
import { WorkoutOverviewCard } from "@/components/dashboard/WorkoutOverviewCard";
import { RecentLogsCard } from "@/components/dashboard/RecentLogsCard";
import { exerciseFilters, exercises, personalRecords, summaryStats } from "@/data/mockExercises";
import { recentActivity, recentLogs } from "@/data/mockActivity";
import { progressByExercise, progressRanges } from "@/data/mockProgress";

export function DashboardShell() {
  const [activeNav, setActiveNav] = useState("overview");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedExerciseId, setSelectedExerciseId] = useState("barbell-squat");
  const [activeRange, setActiveRange] = useState("month");

  const filteredExercises =
    activeFilter === "all"
      ? exercises
      : exercises.filter((exercise) => exercise.category === activeFilter);

  const selectedExercise =
    exercises.find((exercise) => exercise.id === selectedExerciseId) || exercises[0];

  const chartData = progressByExercise[selectedExercise.id]?.[activeRange] || [];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-white">
      <div className="dashboard-grid min-h-screen">
        <Sidebar activeItem={activeNav} onSelect={setActiveNav} />
        <div className="min-w-0">
          <DashboardHeader selectedExerciseName={selectedExercise.name} />
          <div className="space-y-6 px-8 py-8">
            <section className="grid grid-cols-5 gap-4">
              {summaryStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </section>

            <section className="grid grid-cols-[1.15fr_0.85fr] gap-6">
              <WorkoutOverviewCard />
              <PersonalRecordsCard records={personalRecords} />
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-3xl text-white">Exercise library</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Filter between all tracked movements, machines, or free weights.
                  </p>
                </div>
                <ExerciseFilterTabs
                  filters={exerciseFilters}
                  activeFilter={activeFilter}
                  onChange={setActiveFilter}
                />
              </div>
              <ExerciseTable
                exercises={filteredExercises}
                selectedExerciseId={selectedExerciseId}
                onSelectExercise={setSelectedExerciseId}
              />
            </section>

            <section className="grid grid-cols-[1.1fr_0.9fr] gap-6">
              <ProgressChartCard
                ranges={progressRanges}
                activeRange={activeRange}
                onChangeRange={setActiveRange}
                data={chartData}
                exerciseName={selectedExercise.name}
              />
              <RecentActivityList activity={recentActivity} />
            </section>

            <section className="grid grid-cols-[0.9fr_1.1fr] gap-6">
              <FutureFeatureCard />
              <RecentLogsCard logs={recentLogs} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
