import { FontVariations } from "@/utilities/Fonts";
import { useFonts } from "expo-font";

export default function useStartupWrapper() {
  const [loaded] = useFonts(FontVariations);

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (user?.uid) {
  //         useAuthStore.setState({ isAuthorized: true });
  //         setItem("user", user);
  //       } else {
  //         useAuthStore.setState({ isAuthorized: false });
  //         setItem("user", null);
  //       }
  //     });
  //     return () => {
  //       unsubscribe();
  //     };
  //   }, []);

  return {
    loaded,
  };
}
