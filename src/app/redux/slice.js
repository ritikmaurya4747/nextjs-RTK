import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("Action", action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      console.log(data);
    },
  },
});

export const { addUser } = Slice.actions;

export default Slice.reducer;
