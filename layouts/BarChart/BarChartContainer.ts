import { GetSevenDaysMoodEntries } from "@/apis/Mood/Mood";

export default function useBarChart() {
  const { data, isPending, isError } = GetSevenDaysMoodEntries();
  let barChartsData = null;

  if (data) {
    barChartsData = data[0].barChartsData;
  }

  return {
    barChartsData,
    isPending,
    isError,
  };
}
