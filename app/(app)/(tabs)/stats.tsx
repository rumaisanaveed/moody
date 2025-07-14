import CustomBarChart from "@/components/charts/CustomBarChart";
import { Colors } from "@/constants/Colors";
import { moodsYLabels, sleepYLabels } from "@/constants/Data";
import { Bold, SemiBold } from "@/utilities/Fonts";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// very sad - 10
// sad - 20
// neutral - 30
// happy - 40
// very happy - 50
const moodData = [
  {
    value: 50,
    frontColor: "#7CF29C",
    label: "Mon",
    topLabelComponent: () => <Text style={styles.emoji}>😍</Text>,
  },
  {
    value: 30,
    frontColor: "#F15B5D",
    label: "Tues",
    topLabelComponent: () => <Text style={styles.emoji}>😡</Text>,
  },
  {
    value: 40,
    frontColor: "#86C9F5",
    label: "Wed",
    topLabelComponent: () => <Text style={styles.emoji}>😌</Text>,
  },
  {
    value: 10,
    frontColor: "#F9B26B",
    label: "Thurs",
    topLabelComponent: () => <Text style={styles.emoji}>😞</Text>,
  },
  {
    value: 30,
    frontColor: "#F15B5D",
    label: "Fri",
    topLabelComponent: () => <Text style={styles.emoji}>😡</Text>,
  },
  {
    value: 30,
    frontColor: "#F15B5D",
    label: "Sat",
    topLabelComponent: () => <Text style={styles.emoji}>😡</Text>,
  },
  {
    value: 30,
    frontColor: "#F15B5D",
    label: "Sun",
    topLabelComponent: () => <Text style={styles.emoji}>😡</Text>,
  },
];

// 0-2 hrs - 10
// 3-4 hrs - 20
// 5-6 hrs - 30
// 7-8 hrs - 40
// 9+hrs - 50
const sleepData = [
  {
    value: 50,
    frontColor: "#7CF29C",
    label: "Mon",
    topLabelComponent: () => <Text style={styles.emoji}>😍</Text>,
  },
  {
    value: 30,
    frontColor: "#F15B5D",
    label: "Tues",
    topLabelComponent: () => <Text style={styles.emoji}>😡</Text>,
  },
  {
    value: 40,
    frontColor: "#86C9F5",
    label: "Wed",
    topLabelComponent: () => <Text style={styles.emoji}>😌</Text>,
  },
  {
    value: 10,
    frontColor: "#F9B26B",
    label: "Thurs",
    topLabelComponent: () => <Text style={styles.emoji}>😞</Text>,
  },
  {
    value: 30,
    frontColor: "#F15B5D",
    label: "Fri",
    topLabelComponent: () => <Text style={styles.emoji}>😡</Text>,
  },
  {
    value: 30,
    frontColor: "#F15B5D",
    label: "Sat",
    topLabelComponent: () => <Text style={styles.emoji}>😡</Text>,
  },
  {
    value: 30,
    frontColor: "#F15B5D",
    label: "Sun",
    topLabelComponent: () => <Text style={styles.emoji}>😡</Text>,
  },
];

export default function MoodChart() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.pb10}>
        <CustomBarChart
          heading="Mood Chart"
          data={moodData}
          yAxisLabels={moodsYLabels}
          rotateYLabels={true}
        />
        <CustomBarChart
          heading="Sleep Chart"
          data={sleepData}
          style={styles.mt20}
          yAxisLabels={sleepYLabels}
        />
      </ScrollView>
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
});
