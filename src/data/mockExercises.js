export const exerciseFilters = [
  { id: "all", label: "All" },
  { id: "machine", label: "Machines" },
  { id: "free-weight", label: "Free Weights" }
];

export const exercises = [
  {
    id: "chest-press",
    name: "Chest Press",
    category: "machine",
    lastWeight: 185,
    previousWeight: 175,
    reps: "10",
    sets: 4,
    trend: "up",
    lastWorkoutDate: "Apr 7",
    personalBest: "190 lbs"
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    category: "machine",
    lastWeight: 170,
    previousWeight: 170,
    reps: "8",
    sets: 4,
    trend: "steady",
    lastWorkoutDate: "Apr 6",
    personalBest: "170 lbs"
  },
  {
    id: "leg-press",
    name: "Leg Press",
    category: "machine",
    lastWeight: 290,
    previousWeight: 270,
    reps: "12",
    sets: 4,
    trend: "up",
    lastWorkoutDate: "Apr 8",
    personalBest: "310 lbs"
  },
  {
    id: "shoulder-press-machine",
    name: "Shoulder Press",
    category: "machine",
    lastWeight: 120,
    previousWeight: 115,
    reps: "10",
    sets: 3,
    trend: "up",
    lastWorkoutDate: "Apr 5",
    personalBest: "125 lbs"
  },
  {
    id: "seated-row",
    name: "Seated Row",
    category: "machine",
    lastWeight: 160,
    previousWeight: 155,
    reps: "10",
    sets: 4,
    trend: "up",
    lastWorkoutDate: "Apr 7",
    personalBest: "165 lbs"
  },
  {
    id: "leg-curl",
    name: "Leg Curl",
    category: "machine",
    lastWeight: 115,
    previousWeight: 110,
    reps: "12",
    sets: 3,
    trend: "up",
    lastWorkoutDate: "Apr 8",
    personalBest: "120 lbs"
  },
  {
    id: "dumbbell-bench-press",
    name: "Dumbbell Bench Press",
    category: "free-weight",
    lastWeight: 80,
    previousWeight: 75,
    reps: "8",
    sets: 4,
    trend: "up",
    lastWorkoutDate: "Apr 7",
    personalBest: "85 lbs"
  },
  {
    id: "barbell-squat",
    name: "Barbell Squat",
    category: "free-weight",
    lastWeight: 255,
    previousWeight: 245,
    reps: "6",
    sets: 5,
    trend: "up",
    lastWorkoutDate: "Apr 8",
    personalBest: "265 lbs"
  },
  {
    id: "deadlift",
    name: "Deadlift",
    category: "free-weight",
    lastWeight: 315,
    previousWeight: 315,
    reps: "5",
    sets: 4,
    trend: "steady",
    lastWorkoutDate: "Apr 4",
    personalBest: "335 lbs"
  },
  {
    id: "dumbbell-shoulder-press",
    name: "Dumbbell Shoulder Press",
    category: "free-weight",
    lastWeight: 55,
    previousWeight: 50,
    reps: "10",
    sets: 4,
    trend: "up",
    lastWorkoutDate: "Apr 5",
    personalBest: "60 lbs"
  },
  {
    id: "barbell-row",
    name: "Barbell Row",
    category: "free-weight",
    lastWeight: 175,
    previousWeight: 165,
    reps: "8",
    sets: 4,
    trend: "up",
    lastWorkoutDate: "Apr 6",
    personalBest: "180 lbs"
  },
  {
    id: "bicep-curl",
    name: "Bicep Curl",
    category: "free-weight",
    lastWeight: 35,
    previousWeight: 35,
    reps: "12",
    sets: 3,
    trend: "steady",
    lastWorkoutDate: "Apr 7",
    personalBest: "40 lbs"
  }
];

export const summaryStats = [
  { label: "Total workouts", value: "48", delta: "+6 this month" },
  { label: "Exercises tracked", value: "12", delta: "6 machines / 6 free weights" },
  { label: "Total sets logged", value: "186", delta: "+22 this week" },
  { label: "Weekly volume", value: "18,420 lbs", delta: "+9.8%" },
  { label: "Progress streak", value: "11 days", delta: "Current best this quarter" }
];

export const personalRecords = [
  { label: "Best lift this week", value: "Deadlift 315 x 5", note: "Matched top set with cleaner form" },
  { label: "Most improved", value: "Leg Press +20 lbs", note: "Strongest session in 5 weeks" },
  { label: "Current streak", value: "11 training days", note: "3 full sessions completed this week" },
  { label: "Recent milestone", value: "Barbell Squat 255", note: "First time clearing 5 clean reps" }
];
