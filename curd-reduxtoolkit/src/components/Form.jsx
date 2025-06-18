import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../features/user/userSlice";

const Form = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const { editData } = useSelector((state) => state.user); // Make sure it's state.user, not state.users

  useEffect(() => {
    if (Object.keys(editData).length !== 0) {
      setUser({ ...editData });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ ...user, id: user.id || Date.now() }));
    setUser({});
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1 className="my-5">Sign-Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={user.email || ""}
                onChange={handleChange}
                className="form-control"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password || ""}
                onChange={handleChange}
                className="form-control"
                id="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {user.id ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;