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

export const phoneNoCheck = (phoneNumber) => {
  // Check if the phone number includes "07"
  if (phoneNumber.includes("07")) {
    // Use a regular expression to check if it's a mobile number
    // You may need to adjust the regular expression based on the phone number patterns in your region
    var mobilePattern = /^(07[0-9]{8})$/;

    if (mobilePattern.test(phoneNumber)) {
      console.log("Mobile Number: " + phoneNumber);
      return "Mobile Number";
    } else {
      console.log("Invalid Mobile Number: " + phoneNumber);
      return false;
    }
  } else {
    console.log("Landline Number: " + phoneNumber);
    return "Landline Number";
  }
};

export const phoneNumberRender = (phoneNumber) => {
  // Check if the number starts with '0'
  if (phoneNumber.startsWith("0")) {
    // Replace '0' with '+94'
    var formattedNumber = phoneNumber.replace(0, "+94 ");

    // Display the formatted number
    return formattedNumber;
  } else {
    // Display an error message if the number doesn't start with '0'
    return "Invalid phone number";
  }
};

export const nameModify = (name) => {
  if (name.includes(" ")) {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    console.log(initials);
    const formattedName = `${initials.slice(0, -1).join(".")}.${
      words[words.length - 1]
    }`;
    return formattedName;
  } else {
    // If the name is a single word, capitalize the first letter
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
};
