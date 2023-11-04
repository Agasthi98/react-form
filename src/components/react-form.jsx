import React, { useEffect, useState } from "react";
import "../styles/react-form.scss";
import ReactImg from "../react.png";
import { Validations } from "./validation";
import {
  addFormData,
  deleteFromTable,
  setDataToLocalStorage,
  getDataFromLocalStorage,
} from "./controllers";
import Table from "./table";

const ReactForm = () => {
  const [submittedData, setSubmittedData] = useState(getDataFromLocalStorage);
  const [errors, setError] = useState({});

  const initialValues = { username: "", email: "", password: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  {
    /** submit handler */
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(!formData.password);
    if (!formData.username || !formData.email || !formData.password) {
      setError(Validations(formData));
    } else {
      addFormData(
        formData,
        submittedData,
        setSubmittedData,
        setFormData,
        initialValues
      );
    }
  };

  {
    /** Delete handler */
  }
  const deleteHandler = (id) => {
    console.log(id);
    deleteFromTable(id, submittedData, setSubmittedData);
  };

  useEffect(() => {
    setDataToLocalStorage(submittedData);
  }, [submittedData]);

  // const isFormValid = Validation(formData);
  return (
    <>
      {/* Section: Split screen */}
      <div className="text-center">
        <img className="img" src={ReactImg} alt="Image" />
        <h1 className=" mt-4 mb-4">React Form</h1>
      </div>
      <section className="">
        <div className="container-fluid px-4 py-2">
          <div className="row">
            <div className="right col-lg-4 vh-100">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="John DSoe"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <div style={{ color: "red" }}>{errors.username}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control "
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-success">
                  Success
                </button>
              </form>
            </div>
            {/* Section: Split screen */}
            <div className="col-lg-8 vh-100 ">
              <Table dataSubmit={submittedData} deleteItem={deleteHandler} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReactForm;
