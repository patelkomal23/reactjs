import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";


const userSlice =createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase()
    }
})