import { Colors } from "@/constants/Colors";
import { Bold, Regular, SemiBold } from "@/utilities/Fonts";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import CustomLinearGradient from "../CustomLinearGradient";

interface IAuthWrapperProps {
  title: string;
  subtitle: string;
  bottomText: string;
  mode: "signup" | "login";
  children: React.ReactNode;
}

const AuthWrapper = ({
  title,
  subtitle,
  children,
  mode,
  bottomText,
}: IAuthWrapperProps) => {
  const router = useRouter();
  const handleTouchableTextClick = () => {
    if (mode === "signup") {
      router.push("/(auth)/Login");
    } else {
      router.push("/(auth)/Signup");
    }
  };

  return (
    <CustomLinearGradient gradientColor={Colors.VIOLET}>
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        ScrollViewComponent={ScrollView}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bottomOffset={40}
      >
        {/* TODO: Fix the stylings when the content is overflowing */}
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Moody</Text>
            <Image
              source={require("../../assets/icons/logo.png")}
              style={styles.logo}
            />
          </View>
          {/* form */}
          <View style={styles.card}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <ScrollView
              style={styles.form}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.row}>
        <Text style={styles.bottomText}>{bottomText}</Text>
        <TouchableOpacity onPress={handleTouchableTextClick}>
          <Text style={styles.touchableText}>
            {mode === "signup" ? "Login" : "Signup"}
          </Text>
        </TouchableOpacity>
      </View>
    </CustomLinearGradient>
  );
};

export default AuthWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    paddingBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoText: {
    ...Bold(40, Colors.BLACK_DARK),
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 20,
    paddingBottom: 0,
    elevation: 20,
  },
  title: {
    ...SemiBold(20, Colors.BLACK_DARK),
  },
  subtitle: {
    ...Regular(14, Colors.BLACK),
  },
  form: {
    marginTop: 10,
    gap: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingBottom: 20,
  },
  bottomText: {
    ...Regular(14, Colors.BLACK_DARK),
  },
  touchableText: {
    ...SemiBold(14, Colors.PURPLE),
  },
});
