// startupWrapper/StartupWrapperContainer.ts
import { auth } from "@/services/firebaseConfig";
import { saveUser } from "@/services/Storage";
import { useAuthStore } from "@/stores/Auth";
import { FontVariations } from "@/utilities/Fonts";
import { useFonts } from "expo-font";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useStartupWrapper() {
  const [fontsLoaded] = useFonts(FontVariations);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        saveUser(user);
        useAuthStore.setState({ isAuthorized: true });
      } else {
        useAuthStore.setState({ isAuthorized: false });
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  return {
    loaded: fontsLoaded && authChecked,
  };
}
