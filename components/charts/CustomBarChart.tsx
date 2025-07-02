import { Colors } from "@/constants/Colors";
import { BarItemProps } from "@/types/tabs/Stats";
import { SemiBold } from "@/utilities/Fonts";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const CustomBarChart = ({
  style,
  heading,
  yAxisLabels,
  data,
}: {
  style?: StyleProp<ViewStyle>;
  heading: string;
  yAxisLabels: string[];
  data?: BarItemProps[];
}) => {
  return (
    <View style={[styles.chartContainer, style]}>
      <Text style={styles.chartTitle}>{heading}</Text>
      <BarChart
        barWidth={25}
        noOfSections={4}
        maxValue={100}
        barBorderRadius={20}
        frontColor="#A3A3A3"
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
        yAxisLabelTexts={yAxisLabels}
        hideRules
        isAnimated
        formatYLabel={(label) => {
          return label;
        }}
      />
    </View>
  );
};

export default CustomBarChart;

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: "#E4DDF9",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  chartTitle: {
    paddingBottom: 10,
    ...SemiBold(18, Colors.BLACK_LIGHT),
  },
  emoji: {
    position: "absolute",
    top: 20,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 0,
  },
});
