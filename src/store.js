import { configureStore } from '@reduxjs/toolkit';
import todosReducer from "./service/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

export default store;