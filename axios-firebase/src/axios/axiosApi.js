import axios from "axios"


// These will connect to firebase and we can use axioInstance in thunk.js
export const axiosInstance = axios.create({
    baseURL : "https://form-firebase-f1bee-default-rtdb.firebaseio.com/", 
})