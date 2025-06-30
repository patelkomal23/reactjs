import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, fetchUser } from "../features/users/thunk";

const Form = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    setUser({})
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 mx-auto">
            <form method="post" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handlechange}
                  value={user.email || ""}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handlechange}
                  value={user.password || ""}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;