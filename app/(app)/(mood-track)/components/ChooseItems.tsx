import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import { ItemsList } from "@/components/list/ItemsList";
import { SelectedItemsList } from "@/components/list/SelectedItemsList";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import { ISelectedItem } from "@/types/List";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

interface IChooseItemsProps {
  selectedItems: ISelectedItem[];
  handleClearItems: () => void;
  handleClearItem: (id: number) => void;
  handleAddItem: (id: number, name: string) => void;
  handleBtnClick?: () => void;
  sectionHeading: string;
  sectionText: string;
  buttonTitle: string;
  disabled: boolean;
  navigationPath: Parameters<ReturnType<typeof useRouter>["push"]>[0];
  listTitle: string;
  items: string[];
}

const ChooseItems = ({
  selectedItems,
  handleAddItem,
  handleClearItem,
  handleClearItems,
  sectionHeading,
  sectionText,
  buttonTitle,
  disabled,
  items,
  navigationPath,
  listTitle,
  handleBtnClick,
}: IChooseItemsProps) => {
  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView style={styles.container}>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <SectionHeader heading={sectionHeading} text={sectionText} />
            <View style={styles.contentContainer}>
              <SelectedItemsList
                selectedItems={selectedItems}
                handleClearItem={handleClearItem}
                handleClearItems={handleClearItems}
              />
              <ItemsList
                items={items}
                handleAddItem={handleAddItem}
                title={listTitle}
              />
            </View>
          </ScrollView>
          <AppButton
            title={buttonTitle}
            disabled={disabled}
            onPress={handleBtnClick}
          />
        </View>
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

export default ChooseItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
});
