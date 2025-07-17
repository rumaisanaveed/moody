import { create } from "zustand";

interface IMoodEntryState {
  mood: string;
  moodText: string;
  moodScore: number;
  emotions: string[];
  reasons: string[];
  sleepHours: string;
  sleepScore: number;
  note: string;
  timestamp: string;
  dayOfWeek: string;
}

export const useMoodEntryStore = create((set) => ({
  moodEntry: {},
  updateMoodEntry: (data: IMoodEntryState) =>
    set((state: any) => ({
      moodEntry: { ...state.moodEntry, ...data },
    })),
  resetMoodEntry: () => set({ moodEntry: {} }),
}));
