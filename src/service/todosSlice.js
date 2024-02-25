import { createSlice } from '@reduxjs/toolkit';

function updateLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos))
}

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
      updateLocalStorage(state.todos);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      updateLocalStorage(state.todos);
    },
    updateTodo(state, action) {
      const targetItem = state.todos.findIndex(todo => todo.id === action.payload.id);

      state.todos[targetItem] = action.payload;
      updateLocalStorage(state.todos);
    },
    toggleTodoStatus(state, action) {
      const targetItem = state.todos.findIndex(todo => todo.id === action.payload.id);
        
      state.todos[targetItem].done = action.payload.done;
      updateLocalStorage(state.todos);
    },
    clearList(state) {
      state.todos = [];
      updateLocalStorage(state.todos);
    },
    updateFullList(state, action) {
      state.todos = action.payload;
      updateLocalStorage(state.todos);
    }
  }
})

export default todosSlice.reducer;

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodoStatus,
  clearList,
  updateFullList
} = todosSlice.actions;

export const getTodos = (state) => state.todos.todos;

export const getTotalListQuantity = (state) => {
  return state.todos?.todos?.length;
}

export const getProgressValue = (state) => {
  const doneTasks = state.todos?.todos?.reduce((count, todo) => {
    return todo.done ? count + 1 : count
  }, 0);

  return Number((doneTasks / state.todos?.todos?.length) * 100).toFixed();
}

export const getSpecificTodo = (id) => {
  return (state) => {
    return state.todos?.todos?.find(todo => todo.id === id);
  }
}