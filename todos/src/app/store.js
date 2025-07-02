const { configureStore } = require("@reduxjs/toolkit");
import todosReaducer from '../features/todos/TodoSlice'

 export const store = configureStore({
    reducer:{
        todos  : todosReaducer,
    }
})