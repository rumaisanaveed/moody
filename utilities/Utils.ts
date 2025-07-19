import { Colors } from "@/constants/Colors";
import { months, weekDays } from "@/constants/Data";
import { getItem } from "@/services/Storage";
import { STORAGE_CONST } from "./Constants";

const sliceString = (value: string, sliceUntil: number): string => {
  return value.slice(0, sliceUntil);
};

export const getCurrentDay = (): string => {
  const now = new Date();
  const currentDayOfWeek = now.getDay();
  const currentDayName = weekDays[currentDayOfWeek - 1];
  return currentDayName;
};

export const getCurrentDateAndDay = (): string => {
  const now = new Date();
  const currentMonth = sliceString(months[now.getMonth()], 3);
  const currentDate = now.getDate();
  const currentDay = sliceString(getCurrentDay(), 3);
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

export const getSevenDaysAgoDate = () => {
  const now = new Date();
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 6);
  return sevenDaysAgo;
};

export const getBarChartColor = (score: number): string => {
  switch (score) {
    case 10:
      return Colors.CHART_ORANGE;
    case 20:
      return Colors.CHART_GREY;
    case 30:
      return Colors.CHART_RED;
    case 40:
      return Colors.CHART_LIGHT_BLUE;
    case 50:
      return Colors.CHART_GREEN;
    default:
      return "";
  }
};

export const formatDayLabel = (value: string): string => {
  const slicedString = value.slice(0, 3);
  return slicedString[0].toUpperCase() + slicedString.slice(1);
};

const MIN_SCORE = 10;
const MAX_SCORE = 50;
const CHART_MAX = 50;

export function normalizeValue(value: number): number {
  return ((value - MIN_SCORE) / (MAX_SCORE - MIN_SCORE)) * CHART_MAX;
}
