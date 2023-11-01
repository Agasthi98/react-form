import React, { useState } from "react";
import "./react-form.scss";
import ReactImg from "../react.png";

const ReactForm = () => {
  const [submittedData, setSubmittedData] = useState([]);

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

    console.log(formData);

    setSubmittedData((data) => [...data, formData]);
    console.log(submittedData);

    setFormData(initialValues);
  };

  {
    /** Delete handler */
  }
  const deleteHandler = (index) => {
    console.log(index);
    const newData = submittedData.filter((data, i) => i !== index);
    setSubmittedData(newData);
    console.log(newData);
  };

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
                    required
                  />
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
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Success
                </button>
              </form>
            </div>
            {/* Section: Split screen */}
            <div className="col-lg-8 vh-100 ">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.username}</td>
                      <td>{data.email}</td>
                      <td>{data.password}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteHandler(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReactForm;
