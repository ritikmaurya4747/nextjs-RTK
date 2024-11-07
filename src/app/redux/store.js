import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";
import  addTodos  from "./todoslice";

export const store = configureStore({
     reducer: {
          userData: userReducer,
          todosData: addTodos,
     }
})