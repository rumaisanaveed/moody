import { Logout } from "@/apis/Auth";
import { useState } from "react";

export default function useLogout() {
  const [error, setError] = useState<string | null>(null);
  const { isPending, mutate: logout } = Logout({
    onError(error) {
      console.log("Error in logout", error);
      setError("Logout failed. Please try again.");
    },
  });

  const handleLogout = () => {
    logout();
  };

  return {
    error,
    isPending,
    handleLogout,
  };
}
