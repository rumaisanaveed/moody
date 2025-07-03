import { Colors } from "@/constants/Colors";
import { Bold, Regular, SemiBold } from "@/utilities/Fonts";
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
      <Text style={styles.cardHeader}>{heading}</Text>
      {/* TODO : use flat list here */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.from({ length: 7 }).map((_, index) => (
          <View style={styles.card} key={index}>
            {/* mood & notes */}
            <View style={[styles.gap10, styles.borderBottom]}>
              <View style={styles.row}>
                <View style={styles.rowGap1}>
                  <Text style={styles.mood}>😔</Text>
                  <Text style={styles.moodName}>Bad</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.gap10}>
                <View>
                  <Text style={styles.moodText}>
                    You felt&nbsp;
                    <Text style={styles.moodTextDark}>Guilty, Sad</Text>
                  </Text>
                  <Text style={styles.moodText}>
                    Because you couldn't enjoy the party
                  </Text>
                </View>
                <View>
                  <Text style={styles.noteText}>
                    <Text style={styles.note}>Note:</Text>
                    &nbsp; I felt so sad because I was not able to enjoy the
                    party as I was too much tired.
                  </Text>
                  <TouchableOpacity>
                    <View style={styles.readMoreButton}>
                      <FontAwesome6
                        name="add"
                        size={16}
                        color={Colors.PURPLE}
                        style={{
                          lineHeight: 24,
                          paddingTop: 1,
                        }}
                      />
                      <Text style={styles.readMoreText}>Read More</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* tip of the day */}
            <View style={[styles.gap10, styles.p10]}>
              <View style={styles.row}>
                <Text style={styles.tipHeading}>Find Peace</Text>
                <View style={styles.rowGap1}>
                  <Entypo
                    name="light-bulb"
                    size={18}
                    color={Colors.GOLDEN}
                    style={{ lineHeight: 24 }}
                  />
                  <Text style={styles.tipButtonText}>Tip</Text>
                </View>
              </View>
              <Text style={styles.tipText}>
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
    ...SemiBold(25, Colors.BLACK_DARK),
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
    gap: 3,
  },
  borderBottom: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  mood: {
    fontSize: 20,
    lineHeight: 24,
  },
  moodName: {
    lineHeight: 24,
    ...Bold(20, Colors.BLACK_DARK),
  },
  moodText: {
    ...Regular(16, Colors.BLACK_DARK),
  },
  moodTextDark: {
    ...Bold(16, Colors.BLACK_DARK),
  },
  editButtonText: {
    ...Regular(16, Colors.PURPLE),
  },
  noteText: {
    ...Regular(15, Colors.BLACK_DARK),
  },
  note: {
    ...SemiBold(15, Colors.BLACK_DARK),
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
    lineHeight: 24,
    ...Regular(16, Colors.PURPLE),
  },
  tipHeading: {
    ...Bold(20, Colors.BLACK_DARK),
  },
  tipButtonText: {
    lineHeight: 24,
    ...Regular(16, Colors.GOLDEN),
  },
  tipText: {
    ...Regular(16, Colors.BLACK_DARK),
  },
});
