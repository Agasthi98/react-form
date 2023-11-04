import bcrypt from "bcryptjs";

export const addTask = (
  formData,
  submittedData,
  setSubmittedData,
  setFormData,
  initialValues
) => {
  if (submittedData.some((item) => item.formData.email === formData.email)) {
    console.log("emil check");
    alert("Email already exists");
    return;
  }

  // console.log(bcrypt.hashSync(formData.password, 1));

  const hashedPassword = bcrypt.hashSync(formData.password, 1);

  const newTask = {
    id: new Date().getTime().toString(),
    formData: { ...formData, password: hashedPassword },
  };
  console.log(newTask);
  setSubmittedData([...submittedData, newTask]);
  // console.log(submittedData);

  setFormData(initialValues);
};
