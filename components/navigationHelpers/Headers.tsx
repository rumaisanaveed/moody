import { Colors } from "@/constants/Colors";
import { SemiBold } from "@/utilities/Fonts";
import { capitalizeTitle } from "@/utilities/Utils";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { HeaderLeftIcon } from "./HeaderComponents";

interface IDefaultProps {
  title?: string;
  headerTitle?: string;
  showHeaderTitle?: boolean;
  route: any;
  showBackIcon?: boolean;
  style?: StyleProp<ViewStyle>;
}

// TODO: Fix the bg color of the header across different screens
export function defaultHeader<T>(props: IDefaultProps): T {
  const {
    title = "",
    headerTitle,
    showBackIcon = false,
    route,
    showHeaderTitle = true,
    style = {},
  } = props;

  const { RightComponent, LeftComponent } = route?.params || {};

  const Title = capitalizeTitle(title);

  return {
    title: Title,
    headerShown: true,
    header: ({ navigation }: any) => {
      const handleBackIconPress = () => {
        navigation.goBack();
      };
      return (
        <View style={[styles.container,!showBackIcon && {
          justifyContent : "space-between"
        }, style]}>
          {showHeaderTitle && (
            <Text style={styles.headerTitle}>
              {headerTitle ? headerTitle : Title}
            </Text>
          )}
          {showBackIcon && <HeaderLeftIcon onBackPress={handleBackIconPress} />}
          {!showBackIcon && LeftComponent && <LeftComponent />}
          {RightComponent && <RightComponent />}
        </View>
      );
    },
  } as T;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    ...SemiBold(20, Colors.BLACK),
  },
});
