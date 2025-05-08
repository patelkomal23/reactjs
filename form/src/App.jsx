import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newUser = { ...user, [name]: value }
    setUser(newUser);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...user, id: Date.now() };
    setList([...list, newUser]);
    setUser({});
    console.log(newUser);
  };
  const handleDelete = (id) => {
    const filteredList = list.filter((user) => user.id !== id);
    setList(filteredList);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form method='post' onSubmit={handleSubmit}>
              <h2>Sign-up</h2>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">Username</label>
                <input type="text"
                  onChange={handleChange}
                  className="form-control"
                  id="username"
                  name='username'
                  value={user.username || ""} />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email"
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                  name='email'
                  value={user.email || ""} />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text"
                  onChange={handleChange}
                  className="form-control"
                  id="password"
                  name='password'
                  value={user.password || ""} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((user, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>
                      <button className='btn btn-danger me-2' onClick={() => handleDelete(user.id)}>Delete</button>
                      <button className='btn btn-warning'>Edit</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App