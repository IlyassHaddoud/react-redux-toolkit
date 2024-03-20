import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  try {
    const res = await axios("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.data;
    return data;
  } catch (error) {
    throw error;
  }
});

export default fetchTodos;
