const Validation = (values) => {
  const usernameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(values.email);
  const isUserNameValid = usernameRegex.test(values.username);
  const isPasswordValid = values.password.length >= 8;
  return isUserNameValid && isEmailValid && isPasswordValid;
};
export default Validation;
