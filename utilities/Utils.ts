import { months, weekDays } from "@/constants/Data";
import { getItem } from "@/services/Storage";
import { ISelectedItem } from "@/types/List";
import { STORAGE_CONST } from "./Constants";

const sliceString = (value: string): string => {
  return value.slice(0, 3);
};

export const getCurrentDay = (): string => {
  const now = new Date();
  const currentDayOfWeek = now.getDay();
  const currentDayName = weekDays[currentDayOfWeek - 1];
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
  const userData = getItem(STORAGE_CONST.USER);
  if (!userData) return null;
  return {
    id: userData.uid,
    email: userData.email,
    username: userData.displayName,
  };
};

export const getNamesArray = (items: ISelectedItem[]) => {
  return items.map((item) => item.name);
};

export const getCurrentDateString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDay()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getArrayAsCommaSeparatedString = (array: string[]) => {
  return array.map((reason) => reason).join(", ");
};

export const truncateText = (text: string) => {
  if (!text) return "";
  if (text.length > 70) {
    return text.slice(0, 70) + "...";
  }
  if (text.length < 70) {
    return text;
  }
};
