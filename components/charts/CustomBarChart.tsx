import { Colors } from "@/constants/Colors";
import { BarItemProps } from "@/types/tabs/Stats";
import { Regular, SemiBold } from "@/utilities/Fonts";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const CustomBarChart = ({
  style,
  heading,
  yAxisLabels,
  data,
  rotateYLabels,
}: {
  style?: StyleProp<ViewStyle>;
  heading: string;
  yAxisLabels: string[];
  data?: BarItemProps[];
  rotateYLabels?: boolean;
}) => {
  return (
    <View style={[styles.chartContainer, style]}>
      <Text style={styles.chartTitle}>{heading}</Text>
      <BarChart
        barWidth={25}
        noOfSections={4}
        maxValue={50}
        barBorderRadius={20}
        data={data}
        yAxisLabelWidth={rotateYLabels ? 90 : 50}
        yAxisThickness={0}
        xAxisThickness={0}
        yAxisLabelTexts={yAxisLabels}
        yAxisLabelContainerStyle={{
          alignItems: "flex-start",
          justifyContent: "start",
        }}
        yAxisTextStyle={{
          paddingTop: 10,
          ...Regular(14, Colors.BLACK_DARK),
        }}
        xAxisLabelTextStyle={{
          ...Regular(14, Colors.BLACK_DARK),
        }}
        hideRules
        // isAnimated
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
    paddingBottom: 20,
    ...SemiBold(18, Colors.BLACK_LIGHT),
  },
  emoji: {
    position: "absolute",
    top: 40,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 0,
  },
});
