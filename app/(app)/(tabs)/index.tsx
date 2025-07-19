import CustomLinearGradient from "@/components/CustomLinearGradient";
import useHome from "@/components/moods/HomeContainer";
import MoodCards from "@/components/moods/MoodCards";
import { Colors } from "@/constants/Colors";
import DaysFlatlist from "@/layouts/Home/components/DaysFlatlist/DaysFlatlist";
import { HeaderLeft, ProfileIcon } from "@/layouts/Home/components/Header";
import { useFocusEffect, useNavigation } from "expo-router";
import React, { useCallback } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Home() {
  const navigation = useNavigation<any>();
  const { sevenDaysMoods, currentDayIndex } = useHome();

  useFocusEffect(
    useCallback(() => {
      navigation.setParams({
        RightComponent: ProfileIcon,
        LeftComponent: HeaderLeft,
      });
    }, [navigation])
  );

  return (
    <CustomLinearGradient gradientColor={Colors.VIOLET}>
      <SafeAreaView style={styles.flexOne}>
        <View style={[styles.container, styles.flexOne]}>
          <DaysFlatlist
            currentDayIndex={currentDayIndex}
            moods={sevenDaysMoods}
          />
          <MoodCards heading="This Week's Mood Journal" />
        </View>
      </SafeAreaView>
    </CustomLinearGradient>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
  },
  content: {
    padding: 16,
  },
});
