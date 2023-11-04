import React from "react";
import propTypes from "prop-types";
import Message from "./Message";
import { emptyMessage } from "../constants/constants";

const Table = ({ dataSubmit, deleteItem }) => {
  return (
    <>
      <div className="table-wrapper">
        {dataSubmit.length > 0 && (
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
                <tr key={data.id}>
                  <th scope="row" className="align-middle">
                    {index + 1}
                  </th>
                  <td className="align-middle">{data.formData.username}</td>
                  <td className="align-middle">{data.formData.email}</td>
                  <td className="align-middle">{data.formData.password}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteItem(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {dataSubmit.length < 1 && <Message message={emptyMessage} />}
      </div>
    </>
  );
};

Table.propTypes = {
  dataSubmit: propTypes.array.isRequired,
  deleteItem: propTypes.string,
};

Table.defaultProps = {
  dataSubmit: ["1", "name"],
  deleteItem: "1",
};

export default Table;
