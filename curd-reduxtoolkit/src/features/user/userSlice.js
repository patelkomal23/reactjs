import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  editIndex: null,
  editData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      if (state.editIndex !== null) {
        state.users = state.users.map((user) =>
          user.id === state.editIndex ? action.payload : user
        );
        state.editIndex = null;
        state.editData = {};
      } else {
        state.users.push(action.payload);
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    editUser: (state, action) => {
      state.editIndex = action.payload;
      const selectedUser = state.users.find((user) => user.id === action.payload);
      state.editData = selectedUser || {};
      localStorage.setItem("Edit", JSON.stringify(selectedUser));
    },
  },
});

export const { createUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;