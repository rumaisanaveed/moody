import ShowErrorMessage from "@/components/messages/Messages";
import { Colors } from "@/constants/Colors";
import useLogout from "@/layouts/Logout/LogoutContainer";
import { Regular } from "@/utilities/Fonts";
import { getUserDetails } from "@/utilities/Utils";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const user = getUserDetails();
  const { handleLogout, isPending, error } = useLogout();

  const InfoSection = ({ label, text }: { label: string; text: string }) => {
    return (
      <View style={styles.infoSection}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <InfoSection label="Username" text={user?.username ?? "N/A"} />
      <InfoSection label="Email" text={user?.email ?? "N/A"} />
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.logoutBtn}
        onPress={handleLogout}
        disabled={isPending}
      >
        <SimpleLineIcons name="logout" size={18} color={Colors.BLACK_DARK} />
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
      {error && <ShowErrorMessage message={error} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    paddingTop: 10,
  },
  infoSection: {
    width: "100%",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY,
    paddingBottom: 12,
  },
  label: {
    color: Colors.BLACK,
    fontSize: 14,
    marginBottom: 4,
  },
  value: {
    color: Colors.BLACK,
    fontSize: 18,
    fontWeight: "500",
  },
  logoutBtn: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.BLACK_LIGHT,
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 6,
    marginTop: 10,
    width: "40%",
    alignSelf: "flex-start",
  },
  btnText: {
    ...Regular(16, Colors.BLACK),
  },
});
