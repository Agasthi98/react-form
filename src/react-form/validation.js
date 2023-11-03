const Validation = (values) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(values.email);
  const isPasswordValid = values.password.length >= 8;
  return isEmailValid && isPasswordValid;
};
export default Validation;
