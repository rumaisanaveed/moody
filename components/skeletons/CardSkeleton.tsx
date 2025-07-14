import { ScrollView, StyleSheet, View } from "react-native";
import Skeleton from "./Skeleton";

const CardSkeleton = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.cardSkeleton}>
          {/* Mood & Name Row */}
          <View style={styles.moodRowSkeleton}>
            <Skeleton viewHeight={40} viewWidth={40} variant="circle" />
            <View style={{ marginLeft: 12 }}>
              <Skeleton viewHeight={20} viewWidth={60} variant="rounded" />
            </View>
          </View>
          {/* Mood Text */}
          <Skeleton
            viewHeight={20}
            viewWidth={250}
            variant="rounded"
            style={{ marginBottom: 6 }}
          />
          {/* Tip Text */}
          <Skeleton
            viewHeight={18}
            viewWidth={200}
            variant="rounded"
            style={{ marginBottom: 10 }}
          />
          {/* Note Row */}
          <View style={styles.noteSkeleton}>
            <Skeleton viewHeight={20} viewWidth={150} variant="rounded" />
            <Skeleton
              viewHeight={20}
              viewWidth={60}
              variant="rounded"
              style={{ marginLeft: 10 }}
            />
          </View>
          {/* Tip of the Day Section */}
          <View style={styles.tipSkeleton}>
            <Skeleton viewHeight={14} viewWidth={330} variant="rounded" />
          </View>
          <Skeleton viewHeight={12} viewWidth={330} variant="rounded" />
        </View>
      ))}
    </ScrollView>
  );
};

export default CardSkeleton;

const styles = StyleSheet.create({
  cardSkeleton: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  moodRowSkeleton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  noteSkeleton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  tipSkeleton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
});
