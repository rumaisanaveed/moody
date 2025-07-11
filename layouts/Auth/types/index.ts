export type SignupFormValues = {
  username: string;
  email: string;
  password: string;
};

export type LoginFormValues = Omit<SignupFormValues, "username">;
