import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log("Action", action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      // console.log(data);
    },
    removeUser:(state, action) => {
     const data  = state.users.filter((item)=>{
      return item.id!==action.payload
     })
     state.users = data
    }
  },
});

export const { addUser , removeUser } = Slice.actions;

export default Slice.reducer;
