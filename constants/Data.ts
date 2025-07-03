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

export const moodsYLabels: string[] = [
  "Happy",
  "Very Happy",
  "Neutral",
  "Sad",
  "Very Sad",
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
