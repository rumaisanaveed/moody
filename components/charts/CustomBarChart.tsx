import { globalStyles } from "@/styles/globalStyles";
import { BarItemProps } from "@/types/tabs/Stats";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const CustomBarChart = ({
  style,
  heading,
  data,
}: {
  style?: StyleProp<ViewStyle>;
  heading: string;
  data: BarItemProps[];
}) => {
  return (
    <View style={[styles.chartContainer, style]}>
      <Text style={styles.chartHeading}>{heading}</Text>
      <BarChart
        barWidth={22}
        hideYAxisText
        barBorderRadius={50}
        cappedBars
        capColor={"white"}
        capRadius={50}
        capThickness={50}
        // barInnerComponent={() => (
        //   <Text style={{ textAlign: "center" }}>😊</Text>
        // )}
        xAxisLabelTextStyle={globalStyles.fontPoppinsRegular}
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </View>
  );
};

export default CustomBarChart;

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: "#E4DDF9",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  chartHeading: {
    ...globalStyles.fontPoppinsSemibold,
    textAlign: "left",
    fontSize: 17,
    paddingBottom: 20,
    paddingLeft: 25,
  },
});
