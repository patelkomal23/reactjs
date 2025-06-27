import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/userslice'

export const store=configureStore({
      reducer : {
        user : userReducer,
    }
})