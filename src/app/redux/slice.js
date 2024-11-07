import { createSlice, nanoid , current, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || []
};

export const fetchApiUsers = createAsyncThunk("fetchApiUsers",async () =>{
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  return await result.json();
})

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      let userData = JSON.stringify(current(state.users));
      localStorage.setItem('users', userData);
    },
    removeUser:(state, action) => {
     const data  = state.users.filter((item)=>{
      return item.id!==action.payload
     })
     state.users = data
     localStorage.setItem("users", JSON.stringify(data)); 
    }
  },
});

export const { addUser , removeUser } = Slice.actions;

export default Slice.reducer;
