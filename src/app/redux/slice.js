import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState ={
    users:[]
}

const Slice = createSlice({
    initialState,
    reducers:{
        addUser: (state,action) => {
            const data = {
                id: nanoid(),
                name: action.payload.name,
            }
            state.users.push(data);

        }
    }
})

export const {addUser} = Slice.actions;

export default Slice.reducer;