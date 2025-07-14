import MoodCards from "@/components/moods/MoodCards";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import SkeletonLoader from "@/components/skeletons/SkeletonLoader";
import React from "react";
import { StyleSheet, View } from "react-native";

const History = () => {
  return (
    <View style={styles.container}>
      <SkeletonLoader isLoading skeleton={<CardSkeleton />}>
        <MoodCards hideHeading={true} />
      </SkeletonLoader>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
