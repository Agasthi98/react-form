const Validation = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 5) {
    errors.username = "Username must be more than 5 characters";
  }

  if (!values.email) {
    errors.email = "email is required";
  } else if (values.email.length < 5) {
    errors.email = "email must be more than 5 characters";
  }
  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 5) {
    errors.password = "password must be more than 5 characters";
  }

  return errors;
};

export default Validation;
