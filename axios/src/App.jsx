
import React, { use, useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import axios from "axios";
import Table from "./components/Table";
import { Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const URL = "http://localhost:3000/product";
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    let res = await axios.get(URL);
    let data = res.data;
    setUsers(data);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId === "") {
      let res = await axios.post(URL, { ...user, id: String(Date.now()) });
      let data = res.data;
      toast.success("User Added Successfully..!");
      handleFetch();
    }
    else {
      let res = await axios.put(`${URL}/${editId}`, { ...user });
      let data = res.data;
      handleFetch();
      toast.info('Data Updated successfully', {});

    }
    setEditId("");
    setUser({});
  };


  const handleDelete = async (id) => {
      await axios.delete(`${URL}/${id}`);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    toast.warn("User Deleted Successfully..!");
    handleFetch();
  };
  const handleEdit = (id) => {
    let user = users.find((item) => item.id === id);
    setEditId(id);
    setUser(user);
  };

  console.log(user);

  return (
    <>
      <Header />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
      <Table
        users={users}
        setUser={setUser}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />

    </>
  );
}

export default App;
