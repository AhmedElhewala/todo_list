import  axios from "axios"
import { SERVER_URL } from "../utilities/constants";

export async function getAllTodos() {
  try {
    const req = await axios.get(`${SERVER_URL}/todos`);

    return req.data;
  } catch (err) {
    throw new Error(`Failed to todos list: ${err.message}`)
  }
}

export async function addTodo(todo) {
  try {
    const req = await axios.post(`${SERVER_URL}/todos`, todo);

    return req.data;
  } catch (err) {
    throw new Error(`Failed to add this task: ${err.message}`)
  }
}

export async function updateTodo(id, requestBody) {
  try {
    const req = await axios.patch(`${SERVER_URL}/todos/${id}`, requestBody);

    return req.data;
  } catch (err) {
    throw new Error(`Failed to update this task: ${err.message}`);
  }
}

export async function toggleTodoDone(id, requestBody) {
  try {
    const req = await axios.patch(`${SERVER_URL}/todos/${id}`, requestBody);

    return req.data;
  } catch (err) {
    throw new Error(`Failed to update this task status: ${err.message}`);
  }
}

export async function deleteTodo(id) {
  try {
    const req = await axios.delete(`${SERVER_URL}/todos/${id}`);

    return req.data;
  } catch (err) {
    throw new Error(`Failed to delete this task: ${err.message}`);
  }
}

export async function clearList() {
  try {
    const todos = await getAllTodos();

    if (!todos || !todos.length) return;

    const deletePromises = todos.map(todo => deleteTodo(todo.id));
    await Promise.all(deletePromises);

    return true;
  } catch (err) {
    throw new Error(`Failed to todos list: ${err.message}`);
  }
}