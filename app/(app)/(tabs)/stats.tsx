import { barData } from "@/constants/Data";
import { globalStyles } from "@/styles/globalStyles";
import { StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function Stats() {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, globalStyles.fontPoppinsBold]}>
        Your Stats of 7 days!
      </Text>
      {/* <CustomBarChart data={barData} heading="Mood Chart" />

      <CustomBarChart
        data={barData}
        style={styles.mt20}
        heading="Sleep Chart"
      /> */}
      <View style={[styles.chartContainer]}>
        <Text style={styles.chartHeading}>{"Heading"}</Text>
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
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    paddingVertical: 10,
  },
  mt20: {
    marginTop: 20,
  },

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
