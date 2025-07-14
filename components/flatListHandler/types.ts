import React from "react";
import { FlatListProps } from "react-native";

export type FlatlistHandlerProps<T> = {
  isLoading?: boolean;
  EmptyComponent?: React.ReactElement;
} & FlatListProps<T>;
