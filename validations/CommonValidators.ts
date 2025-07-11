import * as yup from "yup";

const EMAIL_REGEX =
  /^(?=.{6,320}$)([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const USERNAME = yup
  .string()
  .trim()
  .required("Username is required")
  .min(3)
  .max(30);

export const EMAIL = yup
  .string()
  .required("Email is required")
  .matches(EMAIL_REGEX, "Invalid email format");

// should contain at least one upper case, one lower case, 
// atleast 4 numbers and one special character as well.
export const PASSWORD = yup
  .string()
  .required("Password is required")
  .test(
    "is-long-enough",
    "Password must be at least 8 characters long",
    (value) => !!value && value.length >= 8
  )
  .test(
    "has-uppercase",
    "Password must contain at least one uppercase character",
    (value) => !!value && /[A-Z]/.test(value)
  )
  .test(
    "has-lowercase",
    "Password must contain at least one lowercase character",
    (value) => !!value && /[a-z]/.test(value)
  )
  .test("has-numbers", "Password must contain at least 4 numbers", (value) => {
    if (!value) return false;
    const numbers = value.match(/\d/g);
    return numbers ? numbers.length >= 4 : false;
  })
  .test(
    "has-special-char",
    "Password must contain at least one special character",
    (value) => !!value && /[^A-Za-z0-9]/.test(value)
  );
