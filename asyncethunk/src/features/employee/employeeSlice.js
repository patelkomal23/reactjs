import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit" ;

 export const fetchData =createAsyncThunk('employee/fetchData', async()=>{
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();
    return data;
})

const initialState={
    isLoading:false,
    employee:[],
    isError:false,
}
const employeeSlice = createSlice({
    name:'employees',
    initialState,
    reducers:{
        extraReducers:(builder)=>{
            builder.addCase(fetchData.pending,(state)=>{
                state.isLoading= true;
            })
            builder.addCase(fetchData.fulfilled,(state,action)=>{
                state.isLoading= false;
                state.employees = action.payload;

            })
             builder.addCase(fetchData.fulfilled,(state,action)=>{
                state.isError= true;
                console.error(action.payload);

            })             

        }
    }
});
export default employeeSlice.reducer;