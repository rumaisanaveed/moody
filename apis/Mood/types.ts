export interface MoodEntry {
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
  // add other fields as needed
}
