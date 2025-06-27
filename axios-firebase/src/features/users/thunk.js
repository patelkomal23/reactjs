

import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axiosApi";

export const createUser = createAsyncThunk('user/createUser',async (user,{rejectWithValue})=>{
    try {
        let res = await axiosInstance.post('/.json',user); 
        return {...user, id : res.data.name} 
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
