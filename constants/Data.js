import { Colors } from "./Colors";

export const weekData = [
  { id: 1, name: "Monday" },
  { id: 2, name: "Tuesday" },
  { id: 3, name: "Wednesday" },
  { id: 4, name: "Thursday" },
  { id: 5, name: "Friday" },
  { id: 6, name: "Saturday" },
  { id: 7, name: "Sunday" },
];

export const weekDays = weekData.map((item) => item.name);

export const emojis = {
  happy: "😄", //
  veryHappy: "😁",
  neutral: "🙂",
  sad: "😔",
  verySad: "😟",
};

export const barData = [
  {
    value: 600,
    label: "Mon",
    frontColor: Colors.GREEN_LIGHT,
    topLabelComponent: () => <Text style={{ fontSize: 18 }}>😊</Text>,
  },
  {
    value: 250,
    label: "Tue",
    frontColor: Colors.PINK_DARK,
    topLabelComponent: () => <Text style={{ fontSize: 18 }}>😊</Text>,
  },
  {
    value: 745,
    label: "Wed",
    frontColor: Colors.BLUE_LIGHT,
    topLabelComponent: () => <Text style={{ fontSize: 18 }}>😊</Text>,
  },
  {
    value: 320,
    label: "Thur",
    frontColor: Colors.ORANGE_LIGHT,
    topLabelComponent: () => <Text style={{ fontSize: 18 }}>😊</Text>,
  },
  {
    value: 250,
    label: "Fri",
    frontColor: Colors.RED_LIGHT,
    topLabelComponent: () => <Text style={{ fontSize: 18 }}>😊</Text>,
  },
  {
    value: 256,
    label: "Sat",
    frontColor: Colors.BLUE_LIGHT,
    topLabelComponent: () => <Text style={{ fontSize: 18 }}>😊</Text>,
  },
  {
    value: 600,
    label: "Sun",
    frontColor: Colors.GREEN_LIGHT,
    topLabelComponent: () => <Text style={{ fontSize: 18 }}>😊</Text>,
  },
];
