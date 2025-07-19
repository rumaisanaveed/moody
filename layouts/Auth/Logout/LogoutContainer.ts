import { Logout } from "@/apis/Auth";
import { toast } from "sonner-native";

export default function useLogout() {
  const { isPending, mutate: logout } = Logout({
    onError(error) {
      console.log("Error in logout", error);
      toast.error("Logout Failed. Please try again.");
    },
  });

  const handleLogout = () => {
    logout();
  };

  return {
    isPending,
    handleLogout,
  };
}
