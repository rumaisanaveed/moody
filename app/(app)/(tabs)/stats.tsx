import { IBarChartData } from "@/apis/Mood/types";
import CustomBarChart from "@/components/charts/CustomBarChart";
import BarChartSkeleton from "@/components/skeletons/BarChartSkeleton";
import SkeletonLoader from "@/components/skeletons/SkeletonLoader";
import { Colors } from "@/constants/Colors";
import { moodsYLabels, sleepYLabels, weekDays } from "@/constants/Data";
import useBarChart from "@/layouts/BarChart/BarChartContainer";
import { Bold, Regular, SemiBold } from "@/utilities/Fonts";
import {
  formatDayLabel,
  getBarChartColor,
  normalizeValue,
} from "@/utilities/Utils";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function getChartData({
  barChartsData,
  scoreKey,
  withEmoji = false,
  styles,
}: {
  barChartsData: IBarChartData[] | null;
  scoreKey: "moodScore" | "sleepScore";
  withEmoji?: boolean;
  styles: any;
}) {
  return weekDays.map((day) => {
    const found = barChartsData?.find((item) => item.day === day);
    return found
      ? {
          label: formatDayLabel(day),
          frontColor: getBarChartColor(found[scoreKey]),
          // to make sure that the bar still has some height and doesn't overlap
          // with the x axis label
          value: found[scoreKey] === 10 ? 5 : normalizeValue(found[scoreKey]),
          ...(withEmoji && {
            topLabelComponent: () => (
              <Text style={styles.emoji}>{found.mood}</Text>
            ),
          }),
        }
      : {
          label: formatDayLabel(day),
          frontColor: Colors.DEFAULT_CHART_COLOR,
          value: 0,
        };
  });
}

export default function Charts() {
  const { barChartsData, isPending, isError } = useBarChart();

  const moodChartData = getChartData({
    barChartsData,
    scoreKey: "moodScore",
    withEmoji: true,
    styles,
  });

  const sleepChartData = getChartData({
    barChartsData,
    scoreKey: "sleepScore",
    withEmoji: true,
    styles,
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.pb10}>
        <SkeletonLoader isLoading={isPending} skeleton={<BarChartSkeleton />}>
          <CustomBarChart
            heading="Mood Chart"
            data={moodChartData}
            yAxisLabels={moodsYLabels}
            rotateYLabels={true}
          />
          <CustomBarChart
            heading="Sleep Chart"
            data={sleepChartData}
            style={styles.mt20}
            yAxisLabels={sleepYLabels}
          />
        </SkeletonLoader>
      </ScrollView>
      {isError && <Text style={styles.error}>Oops! Failed to load charts</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  pb10: {
    paddingBottom: 10,
  },
  mt20: {
    marginTop: 20,
  },
  title: {
    paddingBottom: 10,
    ...SemiBold(18, Colors.BLACK_LIGHT),
  },
  chartContainer: {
    backgroundColor: "#E4DDF9",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  chartHeading: {
    textAlign: "left",
    paddingBottom: 20,
    paddingLeft: 25,
    ...Bold(17, Colors.BLACK_DARK),
  },
  emoji: {
    position: "absolute",
    top: 20,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 0,
  },
  error: {
    ...Regular(30, Colors.RED),
  },
});
