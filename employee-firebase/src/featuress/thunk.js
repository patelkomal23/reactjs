
import { createAsyncThunk } from "@reduxjs/toolkit";
import {getDatabase,push,ref,set} from  "firebase/database";

const db = getDatabase(app)

export const createUser = createAsyncThunk('users/create',async(user,{rejectWithValue})=>{
    try{
        const userRef = ref(db,'users/');
        const data = push(userRef);
        await set(data,user);
        return {...user,id:data.key}
    }catch(error){
        return rejectWithValue(error);
    }
})
