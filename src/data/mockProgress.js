export const progressRanges = [
  { id: "week", label: "Week" },
  { id: "month", label: "Month" },
  { id: "all", label: "All" }
];

export const progressByExercise = {
  "barbell-squat": {
    week: [
      { label: "Mon", weight: 235 },
      { label: "Tue", weight: 240 },
      { label: "Wed", weight: 245 },
      { label: "Thu", weight: 245 },
      { label: "Fri", weight: 250 },
      { label: "Sat", weight: 252 },
      { label: "Sun", weight: 255 }
    ],
    month: [
      { label: "W1", weight: 225 },
      { label: "W2", weight: 235 },
      { label: "W3", weight: 245 },
      { label: "W4", weight: 255 }
    ],
    all: [
      { label: "Jan", weight: 205 },
      { label: "Feb", weight: 220 },
      { label: "Mar", weight: 240 },
      { label: "Apr", weight: 255 }
    ]
  },
  "leg-press": {
    week: [
      { label: "Mon", weight: 250 },
      { label: "Tue", weight: 255 },
      { label: "Wed", weight: 265 },
      { label: "Thu", weight: 270 },
      { label: "Fri", weight: 275 },
      { label: "Sat", weight: 285 },
      { label: "Sun", weight: 290 }
    ],
    month: [
      { label: "W1", weight: 240 },
      { label: "W2", weight: 255 },
      { label: "W3", weight: 270 },
      { label: "W4", weight: 290 }
    ],
    all: [
      { label: "Jan", weight: 210 },
      { label: "Feb", weight: 240 },
      { label: "Mar", weight: 270 },
      { label: "Apr", weight: 290 }
    ]
  },
  "dumbbell-bench-press": {
    week: [
      { label: "Mon", weight: 70 },
      { label: "Tue", weight: 72.5 },
      { label: "Wed", weight: 75 },
      { label: "Thu", weight: 77.5 },
      { label: "Fri", weight: 80 },
      { label: "Sat", weight: 80 },
      { label: "Sun", weight: 80 }
    ],
    month: [
      { label: "W1", weight: 65 },
      { label: "W2", weight: 70 },
      { label: "W3", weight: 75 },
      { label: "W4", weight: 80 }
    ],
    all: [
      { label: "Jan", weight: 55 },
      { label: "Feb", weight: 65 },
      { label: "Mar", weight: 72.5 },
      { label: "Apr", weight: 80 }
    ]
  }
};
