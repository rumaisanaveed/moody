import { ReactNode } from "react";

export interface BarItemProps {
  value: number;
  label: string;
  frontColor: string;
  topLabelComponent?: () => ReactNode;
}
