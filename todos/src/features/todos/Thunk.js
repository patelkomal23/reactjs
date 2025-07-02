import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

export const createTodo = createAsyncThunk('todo/createTodo',async(user,{rejectWithValue})=>{
    try {
        let res = await apiInstance.post('/.json',user);
        return {...user,id:res.data.name};
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
