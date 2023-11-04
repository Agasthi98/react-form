import bcrypt from "bcryptjs";
import { localStorageName } from "../constants/constants";
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

/**
 * Delete method
 * @param {*} id
 * @param {*} submittedData
 * @param {*} setSubmittedData
 */
export const deleteFromTable = (id, submittedData, setSubmittedData) => {
  console.log(id, submittedData);
  const deleteData = submittedData.filter((item) => {
    return item.id !== id;
  });
  setSubmittedData(deleteData);
};

/**
 * set submitted data to localstorage
 * @param {*} submittedData
 */
export const setDataToLocalStorage = (submittedData) => {
  console.log("success");
  localStorage.setItem(localStorageName, JSON.stringify(submittedData));
};

/**
 * get submitted data from localstorage
 * @returns g
 */
export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem(localStorageName);
  console.log(data);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
