
import React, { useEffect, useRef, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [editUser, setEditUser] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem("userData")) || [];
    setList(oldList);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (editId != null) {
      let newUser = { ...editUser, [name]: value };
      setEditUser(newUser);
    } else {
      let newUser = { ...user, [name]: value };
      setUser(newUser);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...list, { ...user, id: Date.now() }];
    setUser({});
    localStorage.setItem("userData", JSON.stringify(newList));
    setList(newList);
  };

  const handleDelete = (id) => {
    let newList = list.filter((item) => item.id !== id);
    localStorage.setItem("userData", JSON.stringify(newList));
    setList(newList);
  };

  const handleEdit = (id) => {
    let editUser = list.filter((val) => val.id === id)[0];
    setEditUser(editUser);
    setEditId(id);
  };

  const handleSave = (id) => {
    let newList = list.map((val) => {
      if (editId === val.id) {
        val = editUser;
      }
      return val;
    });
    setList(newList);
    localStorage.setItem("userData", JSON.stringify(newList));
    setEditId(null);
  };

  console.log(list);

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
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email || ""}
                  onChange={handleChange}
                />
                
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password || ""}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <table className="table caption-top mt-3">
              <caption>
                <h2>Data</h2>
              </caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((val, idx) => {
                  const { id, email, password } = val;
                  return (
                    <tr key={idx}>
                      <th scope="row">{idx + 1}</th>
                      <td>
                        {editId !== val.id ? (
                          email
                        ) : (
                          <input
                            type="text"
                            name="email"
                            value={editUser.email || ""}
                            onChange={handleChange}
                            id=""
                            className="form-control"
                          />
                        )}
                      </td>
                      <td>
                        {editId !== val.id ? (
                          password
                        ) : (
                          <input
                            type="text"
                            name="password"
                            value={editUser.password || ""}
                            onChange={handleChange}
                            id=""
                            className="form-control"
                          />
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </button>{" "}
                        {editId === id ? (
                          <button
                            onClick={() => handleSave(id)}
                            className="btn btn-success"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            className="btn btn-warning"
                            onClick={() => handleEdit(id)}
                          >
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
