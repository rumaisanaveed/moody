import { Colors } from "@/constants/Colors";
import { SemiBold } from "@/utilities/Fonts";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import FlatListHandler from "../flatListHandler/FlatListHandler";
import CardSkeleton from "../skeletons/CardSkeleton";
import SkeletonLoader from "../skeletons/SkeletonLoader";
import useHome from "./HomeContainer";
import MoodCardItem from "./MoodCardComponents";

interface IMoodCardsProps {
  hideHeading?: boolean;
  heading?: string;
  style?: StyleProp<ViewStyle>;
}

const MoodCards = ({
  heading = "",
  hideHeading = false,
  style = {},
}: IMoodCardsProps) => {
  const {
    isPending,
    isError,
    toggleNoteVisibility,
    isCompleteNoteVisible,
    moodEntriesData,
  } = useHome();

  return (
    <View style={[styles.cardsContainer, style]}>
      {!hideHeading && <Text style={styles.cardHeader}>{heading}</Text>}
      <SkeletonLoader isLoading={isPending} skeleton={<CardSkeleton />}>
        <FlatListHandler
          data={moodEntriesData ?? []}
          renderItem={({ item, index }) => (
            <MoodCardItem
              item={item}
              index={index}
              toggleNoteVisibility={toggleNoteVisibility}
              isCompleteNoteVisible={isCompleteNoteVisible}
            />
          )}
        />
      </SkeletonLoader>
      {isError && <Text>Oops! There was an error in loading moods :(</Text>}
    </View>
  );
};

export default MoodCards;

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    gap: 10,
  },
  cardHeader: {
    ...SemiBold(25, Colors.BLACK_DARK),
  },
});
