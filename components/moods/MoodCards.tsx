import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/globalStyles";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MoodCards = ({ heading }: { heading: string }) => {
  return (
    <View style={styles.cardsContainer}>
      <Text style={[styles.cardHeader, globalStyles.fontPoppinsSemibold]}>
        {heading}
      </Text>
      {/* TODO : use flat list here */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.from({ length: 7 }).map((_, index) => (
          <View style={styles.card} key={index}>
            {/* mood & notes */}
            <View style={[styles.gap10, styles.borderBottom]}>
              <View style={styles.row}>
                <View style={styles.rowGap1}>
                  <Text style={styles.mood}>😔</Text>
                  <Text style={[styles.moodName, globalStyles.fontPoppinsBold]}>
                    Bad
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.editButtonText,
                      globalStyles.fontPoppinsRegular,
                    ]}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.gap10}>
                <View>
                  <Text
                    style={[styles.moodText, globalStyles.fontPoppinsRegular]}
                  >
                    You felt&nbsp;
                    <Text
                      style={[
                        styles.moodTextDark,
                        globalStyles.fontPoppinsBold,
                      ]}
                    >
                      Guilty, Sad
                    </Text>
                  </Text>
                  <Text
                    style={[styles.moodText, globalStyles.fontPoppinsRegular]}
                  >
                    Because you couldn't enjoy the party
                  </Text>
                </View>
                <View>
                  <Text
                    style={[styles.noteText, globalStyles.fontPoppinsRegular]}
                  >
                    <Text style={[globalStyles.fontPoppinsSemibold]}>
                      Note:
                    </Text>
                    &nbsp; I felt so sad because I was not able to enjoy the
                    party as I was too much tired.
                  </Text>
                  <TouchableOpacity>
                    <View style={styles.readMoreButton}>
                      <FontAwesome6
                        name="add"
                        size={16}
                        color={Colors.PURPLE}
                      />
                      <Text
                        style={[
                          styles.readMoreText,
                          globalStyles.fontPoppinsRegular,
                        ]}
                      >
                        Read More
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* tip of the day */}
            <View style={[styles.gap10, styles.p10]}>
              <View style={styles.row}>
                <Text style={[styles.tipHeading, globalStyles.fontPoppinsBold]}>
                  Find Peace
                </Text>
                <View style={styles.rowGap1}>
                  <Entypo name="light-bulb" size={18} color={Colors.GOLDEN} />
                  <Text
                    style={[
                      styles.tipButtonText,
                      globalStyles.fontPoppinsRegular,
                    ]}
                  >
                    Tip
                  </Text>
                </View>
              </View>
              <Text style={[styles.tipText, globalStyles.fontPoppinsRegular]}>
                Spend time outdoors, surrounded by greenery and fresh air.
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MoodCards;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardsContainer: {
    gap: 10,
    paddingVertical: 15,
  },
  cardHeader: {
    color: Colors.BLACK_DARK,
    fontSize: 25,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  gap10: {
    gap: 10,
  },
  rowGap1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  borderBottom: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  mood: {
    fontSize: 20,
  },
  moodName: {
    color: Colors.BLACK_DARK,
    fontSize: 20,
    paddingLeft: 5,
  },
  moodText: {
    color: Colors.BLACK_DARK,
    fontSize: 16,
  },
  moodTextDark: {
    color: Colors.BLACK_DARK,
    fontSize: 16,
  },
  editButtonText: {
    color: Colors.PURPLE,
  },
  noteText: {
    color: Colors.BLACK_DARK,
    fontSize: 15,
  },
  readMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 8,
    marginBottom: 5,
  },
  p10: {
    paddingTop: 10,
  },
  readMoreText: {
    color: Colors.PURPLE,
    fontSize: 16,
    fontWeight: "400",
  },
  tipHeading: {
    color: Colors.BLACK_DARK,
    fontSize: 20,
  },
  tipButtonText: {
    color: Colors.GOLDEN,
  },
  tipText: {
    color: Colors.BLACK_DARK,
    fontSize: 16,
  },
});
