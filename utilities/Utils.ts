import { months, weekDays } from "@/constants/Data";
import { getItem } from "@/services/Storage";

const sliceString = (value: string): string => {
  return value.slice(0, 3);
};

export const getCurrentDay = (): string => {
  const now = new Date();
  const currentDayOfWeek = now.getDay();
  const currentDayName = weekDays[currentDayOfWeek];
  return currentDayName;
};

export const getCurrentDateAndDay = (): string => {
  const now = new Date();
  const currentMonth = sliceString(months[now.getMonth()]);
  const currentDate = now.getDate();
  const currentDay = sliceString(getCurrentDay());
  return `${currentDay}, ${currentMonth} ${currentDate}`;
};

export const formatMoodLabel = (key: string) => {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const capitalizeTitle = (title: string) => {
  return title.charAt(0).toUpperCase() + title.slice(1);
};

export const capitalizeFirstCharAndJoin = (text: string) => {
  return text.split("");
};

export const getUserDetails = () => {
  const userData = getItem("user");
  console.log("user data", userData);
  if (!userData) return null;
  return {
    // id: userData.uid,
    email: userData.email,
    username: userData.displayName,
  };
};
