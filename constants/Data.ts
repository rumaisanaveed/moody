interface WeekDay {
  id: number;
  name: string;
}

export const weekData: WeekDay[] = [
  { id: 1, name: "Monday" },
  { id: 2, name: "Tuesday" },
  { id: 3, name: "Wednesday" },
  { id: 4, name: "Thursday" },
  { id: 5, name: "Friday" },
  { id: 6, name: "Saturday" },
  { id: 7, name: "Sunday" },
];

export const weekDays: string[] = weekData.map((item) => item.name);

export const emojis: Record<string, string> = {
  happy: "😄", //
  veryHappy: "😁",
  neutral: "🙂",
  sad: "😔",
  verySad: "😟",
};

interface IMoodWithScores {
  text: string;
  emoji: string;
  score: number;
}

export const moodWithScores: IMoodWithScores[] = [
  {
    text: "Very Sad",
    emoji: "😟",
    score: 10,
  },
  {
    text: "Sad",
    emoji: "😔",
    score: 20,
  },
  {
    text: "Neutral",
    emoji: "😟",
    score: 30,
  },
  {
    text: "Happy",
    emoji: "😄",
    score: 40,
  },
  {
    text: "Very Happy",
    emoji: "😁",
    score: 50,
  },
];

/**
 * Formats a camelCase emoji key (e.g., 'veryHappy') to a human-readable string (e.g., 'Very Happy').
 * @param key The emoji key in camelCase.
 * @returns The formatted string.
 */
export function formatEmojiKey(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1") // insert space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
}

export const emojisList = Object.values(emojis);

export const moodsYLabels: string[] = [
  "Very Sad",
  "Sad",
  "Neutral",
  "Happy",
  "Very Happy",
];

export const sleepYLabels: string[] = [
  "0-2 hrs",
  "3-4 hrs",
  "5-6 hrs",
  "7-8 hrs",
  "9+ hrs",
];

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const emotions: string[] = [
  "Joyful",
  "Down",
  "Anxious",
  "Calm",
  "Excited",
  "Frustrated",
  "Lonely",
  "Grateful",
  "Overwhelmed",
  "Motivated",
  "Irritable",
  "Peaceful",
  "Tired",
  "Hopeful",
  "Confident",
  "Stressed",
  "Content",
  "Disappointed",
  "Optimistic",
  "Restless",
];

export const moodReasons: string[] = [
  "Family",
  "Work",
  "Sleep",
  "Health",
  "School",
  "Social",
  "Self-esteem",
  "Hobbies",
  "Weather",
  "Food",
  "Money",
  "Exams",
  "Failure",
  "Support",
  "Rejection",
  "Wife",
  "Routine",
  "Distant",
  "Success",
  "Confidence",
  "Rest",
  "Stress",
  "Fatigue",
  "Overload",
  "Peace",
  "Anxiety",
  "Motivation",
  "Discipline",
  "Distraction",
  "Focus",
  "Goals",
  "Growth",
  "Pressure",
  "Loneliness",
  "Environment",
  "Energy",
  "Productivity",
  "Insecurity",
  "Achievement",
  "Responsibility",
  "Expectation",
];

export interface SimpleRadioOption {
  label: string;
  value: string;
  score: number;
}

export const sleepHoursOptions: SimpleRadioOption[] = [
  {
    label: "0-2 hours",
    value: "0-2",
    score: 10,
  },
  {
    label: "3-4 hours",
    value: "3-4",
    score: 20,
  },
  {
    label: "5-6 hours",
    value: "5-6",
    score: 30,
  },
  {
    label: "7-8 hours",
    value: "7-8",
    score: 40,
  },
  {
    label: "9+ hours",
    value: "9+",
    score: 50,
  },
];

export const cardData = [
  {
    mood: "😔",
    moodName: "Bad",
    tipHeading: "Find Peace",
    tipText: "Spend time outdoors, surrounded by greenery and fresh air.",
    moodText: "Guilty, Sad",
    reason: "Because you couldn't enjoy the party",
    noteText:
      "I felt so sad because I was not able to enjoy the party as I was too much tired.",
  },
  {
    mood: "😔",
    moodName: "Bad",
    tipHeading: "Find Peace",
    tipText: "Spend time outdoors, surrounded by greenery and fresh air.",
    moodText: "Guilty, Sad",
    reason: "Because you couldn't enjoy the party",
    noteText:
      "I felt so sad because I was not able to enjoy the party as I was too much tired.",
  },
  {
    mood: "😔",
    moodName: "Bad",
    tipHeading: "Find Peace",
    tipText: "Spend time outdoors, surrounded by greenery and fresh air.",
    moodText: "Guilty, Sad",
    reason: "Because you couldn't enjoy the party",
    noteText:
      "I felt so sad because I was not able to enjoy the party as I was too much tired.",
  },
  {
    mood: "😔",
    moodName: "Bad",
    tipHeading: "Find Peace",
    tipText: "Spend time outdoors, surrounded by greenery and fresh air.",
    moodText: "Guilty, Sad",
    reason: "Because you couldn't enjoy the party",
    noteText:
      "I felt so sad because I was not able to enjoy the party as I was too much tired.",
  },
];
