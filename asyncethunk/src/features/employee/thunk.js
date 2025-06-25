import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchEmployee = createAsyncThunk(
  "employee/fetchEmployee",
  async () => {
    const response = await axios.get("http://localhost:3000/employees");
    return response.data;
  }
);


export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee) => {
    const response = await axios.post("http://localhost:3000/employees", employee);
    return response.data;
  }
);


export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (employee) => {
    const response = await axios.put(`http://localhost:3000/employees/${employee.id}`, employee);
    return response.data;
  }
);


export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id) => {
    await axios.delete(`http://localhost:3000/employees/${id}`);
    return id;
  }
);