import { useState } from "react";

export default function useAppInput() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return {
    showPassword,
    togglePasswordVisibility,
  };
}
