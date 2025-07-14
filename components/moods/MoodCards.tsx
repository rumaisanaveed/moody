import { Colors } from "@/constants/Colors";
import { cardData } from "@/constants/Data";
import { SemiBold } from "@/utilities/Fonts";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import FlatListHandler from "../flatListHandler/FlatListHandler";
import CardSkeleton from "../skeletons/CardSkeleton";
import SkeletonLoader from "../skeletons/SkeletonLoader";
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
  return (
    <View style={[styles.cardsContainer, style]}>
      {!hideHeading && <Text style={styles.cardHeader}>{heading}</Text>}
      <SkeletonLoader isLoading skeleton={<CardSkeleton />}>
        <FlatListHandler
          data={cardData ?? []}
          renderItem={({ item, index }) => (
            <MoodCardItem item={item} index={index} />
          )}
        />
      </SkeletonLoader>
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
