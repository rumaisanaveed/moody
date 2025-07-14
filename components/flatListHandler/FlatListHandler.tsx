import { Colors } from "@/constants/Colors";
import { Regular, SemiBold } from "@/utilities/Fonts";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FlatlistHandlerProps } from "./types";

export default function FlatListHandler<T>(props: FlatlistHandlerProps<T>) {
  const { EmptyComponent, ...rest } = props;

  const EmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.emoji}>🙂</Text>
        <Text style={styles.title}>No moods yet</Text>
        <Text style={styles.subtitle}>
          Start tracking your moods to see your journey here!
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <EmptyList />}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    ...SemiBold(22, Colors.BLACK_DARK),
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    ...Regular(16, Colors.BLACK_LIGHT),
    textAlign: "center",
    maxWidth: 260,
  },
});
