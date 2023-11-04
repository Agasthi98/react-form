import bcrypt from "bcryptjs";

/**
 * add form data
 * @param {*} formData
 * @param {*} submittedData
 * @param {*} setSubmittedData
 * @param {*} setFormData
 * @param {*} initialValues
 * @returns
 */
export const addFormData = (
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

export const deleteFromTable = (id, submittedData, setSubmittedData) => {
  console.log(id, submittedData);
  const deleteData = submittedData.filter((item) => {
    return item.id !== id;
  });
  setSubmittedData(deleteData);
};
