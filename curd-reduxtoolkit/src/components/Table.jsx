import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser } from "../features/user/userSlice";

const Table = () => {
  const { users } = useSelector((state) => state.user);
  const disptach = useDispatch();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((val, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                    <td>
                      <button
                        className="btn btn-warning me-1"
                        onClick={()=> disptach(editUser(val.id))}
                       >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => disptach(deleteUser(val.id))}
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
    </>
  );
};

export default Table;