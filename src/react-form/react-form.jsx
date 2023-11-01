import React, { useState } from "react";
import "./react-form.scss";

const ReactForm = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    setFormData(initialValues);
  };

  return (
    <>
      {/* Section: Split screen */}
      <h1 className="text-center mt-4 mb-4">React Form</h1>
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
            <div className="col-lg-8 vh-100 bg-primary"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReactForm;
