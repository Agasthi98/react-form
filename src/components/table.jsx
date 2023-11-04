import React from "react";

const Table = ({ dataSubmit }) => {
  return (
    <>
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
          {dataSubmit.map((data, index) => (
            <tr key={index}>
              <th scope="row" className="align-middle">
                {index + 1}
              </th>
              <td className="align-middle">{data.formData.username}</td>
              <td className="align-middle">{data.formData.email}</td>
              <td className="align-middle">{data.formData.password}</td>
              <td>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
