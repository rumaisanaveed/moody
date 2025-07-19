export interface IQuote {
  id: string;
  quote: string;
  heading: string;
  reasons: string[];
}

export interface IMoodEntry {
  id: string;
  mood: string;
  moodText: string;
  moodScore: number;
  emotions: string[];
  reasons: string[];
  sleepHours: string;
  sleepScore: number;
  note: string;
  timestamp: any;
  dayOfWeek: string;
  quote: IQuote;
}

export interface IBarChartData {
  mood: string;
  moodScore: number;
  sleepScore: number;
  day: string;
}

export interface IMoodData {
  moodEntries: IMoodEntry[];
  barChartsData: IBarChartData[];
}
