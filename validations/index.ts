import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EMAIL, PASSWORD, USERNAME } from "./CommonValidators";

const SignupFormSchema = yupResolver(
  yup.object({
    username: USERNAME,
    email: EMAIL,
    password: PASSWORD,
  })
);

const LoginFormSchema = yupResolver(
  yup.object({
    email: EMAIL,
    password: PASSWORD,
  })
);

export { LoginFormSchema, SignupFormSchema };
