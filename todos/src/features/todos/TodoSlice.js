import { createSlice } from "@reduxjs/toolkit";
import { createTodo, getTodos } from "./Thunk";

const initialState = {
    todos:[],
    loading:false,
    error:false,
    errorMsg:null,
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers
})