import { weekDays } from "@/constants/Data";

export const getCurrentDay = () => {
  const now = new Date();
  const currentDayOfWeek = now.getDay();
  const currentDayName = weekDays[currentDayOfWeek];
  return currentDayName;
};
