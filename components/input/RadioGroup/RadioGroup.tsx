import { Colors } from "@/constants/Colors";
import { Regular } from "@/utilities/Fonts";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { SimpleRadioOption } from "./types";

interface RadioGroupProps {
  selected?: SimpleRadioOption | null;
  onSelect: (option: SimpleRadioOption) => void;
  options: SimpleRadioOption[];
  containerStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  disabled?: boolean;
}

const RadioGroup = ({
  selected,
  onSelect,
  options,
  containerStyle,
  optionStyle,
  disabled = false,
}: RadioGroupProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((option) => {
        const isSelected = selected?.value === option.value;
        return (
          <TouchableOpacity
            key={option.value}
            style={[styles.optionRow, optionStyle]}
            onPress={() => !disabled && onSelect(option)}
            activeOpacity={0.7}
            disabled={disabled}
          >
            <View style={[styles.radioCircle, isSelected && styles.selected]}>
              {isSelected && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.optionLabel}>{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RadioGroup;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingLeft: 10,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  radioCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#666",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  selected: {
    borderColor: Colors.PURPLE,
  },
  radioDot: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: Colors.PURPLE,
  },
  optionLabel: {
    ...Regular(24, Colors.BLACK_DARK),
  },
});
