export const Validations = (values) => {
  console.log(values);
  // const usernameRegex = /^[a-zA-Z]+$/;
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const isEmailValid = emailRegex.test(values.email);
  // const isUserNameValid = usernameRegex.test(values.username);
  // const isPasswordValid = values.password.length >= 8;
  // return isUserNameValid && isEmailValid && isPasswordValid;

  let errors = {};

  if (!values.username) {
    errors.username = "Name is required";
  }
  if (!values.password) {
    errors.password = "Password required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  return errors;
};
