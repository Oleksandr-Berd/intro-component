import * as Yup from "yup";

export const validSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("First Name is cannot be empty"),
  lastName: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Last Name is cannot be empty"),
  email: Yup.string()
    .email("Looks like this is not an email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Password cannot be empty"),
});
