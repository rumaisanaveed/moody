// // select emojis
// // select emotions
// // select reasons
// // select hours of sleep
// // add note
// // modal

// import { Colors } from "@/constants/Colors";
// import { screenHeight } from "@/utilities/Metrics";
// import {
//   BottomSheetBackdrop,
//   BottomSheetBackdropProps,
//   BottomSheetModal,
//   BottomSheetModalProps,
//   BottomSheetView,
// } from "@gorhom/bottom-sheet";
// import React, { forwardRef, useCallback } from "react";
// import { StyleSheet, View, type ViewStyle } from "react-native";

// type BottomSheetProps = {
//   children: React.ReactNode;
//   wrapperStyle?: ViewStyle;
// } & BottomSheetModalProps;

// // close the sheet on back drop close

// export const BottomSheetContainer = forwardRef(
//   ({ children, wrapperStyle, ...rest }: BottomSheetProps, ref: any) => {
//     // backdrop
//     const renderBackdrop = useCallback(
//       (props: BottomSheetBackdropProps) => (
//         <BottomSheetBackdrop
//           {...props}
//           disappearsOnIndex={-1}
//           appearsOnIndex={0}
//           // adjust later
//           opacity={0.5}
//           pressBehavior="close"
//           onPress={handleBackdropPress}
//         />
//       ),
//       []
//     );

//     const BottomSheetBackground = () => {
//       return <View>Sheet background</View>;
//     };

//     return (
//       <BottomSheetModal
//         ref={ref}
//         enablePanDownToClose
//         backgroundComponent={BottomSheetBackground}
//         enableDynamicSizing
//         stackBehavior="replace"
//         backdropComponent={renderBackdrop}
//         maxDynamicContentSize={screenHeight * 0.6}
//         handleIndicatorStyle={styles.indicator}
//         {...rest}
//       >
//         <BottomSheetView style={wrapperStyle}>{children}</BottomSheetView>
//       </BottomSheetModal>
//     );
//   }
// );

// const styles = StyleSheet.create({
//   indicator: {
//     backgroundColor: Colors.GRAY,
//   },
// });
