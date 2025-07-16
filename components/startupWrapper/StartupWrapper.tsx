import React from "react";
import SplashScreen from "../splashScreen/SplashScreen";
import useStartupWrapper from "./StartupWrapperContainer";

export default function StartupWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loaded } = useStartupWrapper();

  if (!loaded) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}
