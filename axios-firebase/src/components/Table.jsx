import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser } from "../features/users/thunk";
import { FaEdit, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Table({ updateUser }) {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const [visibleIndex, setVisibleIndex] = useState(null);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8 mx-auto">
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
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center text-info">
                    Loading Data...
                  </td>
                </tr>
              ) : (
                user.map((item, idx) => {
                  const { email, password, id } = item;
                  return (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{email}</td>
                      <td className="d-flex align-items-center">
                        <input
                          disabled
                          type={visibleIndex === idx ? "text" : "password"}
                          name="password"
                          value={password}
                          className="form-control me-2"
                        />
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setVisibleIndex(visibleIndex === idx ? null : idx)
                          }
                        >
                          {visibleIndex === idx ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => updateUser(item)}
                          className="btn btn-warning me-2"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => dispatch(deleteUser(id))}
                          className="btn btn-danger"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;