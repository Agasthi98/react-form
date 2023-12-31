import React from "react";
import propTypes from "prop-types";
import Message from "./Message";
import { emptyMessage } from "../constants/constants";
import { phoneNoCheck, phoneNumberRender, nameModify } from "./controllers";
import { Button } from "antd";

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
                <th scope="col">Phone</th>
                <th scope="col">Mobile/Land</th>
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
                  <td className="align-middle">
                    {nameModify(data.formData.username)}
                  </td>
                  <td className="align-middle">{data.formData.email}</td>
                  <td className="align-middle">
                    {phoneNumberRender(data.formData.phone)}
                  </td>
                  <td className="align-middle">
                    {phoneNoCheck(data.formData.phone)}
                  </td>
                  <td
                    className="align-middle"
                    data-toggle="tooltip"
                    title={data.formData.password}
                  >
                    {data.formData.password}
                  </td>
                  <td>
                    <Button
                      type="primary"
                      danger
                      onClick={() => deleteItem(data.id)}
                    >
                      Delete
                    </Button>
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
