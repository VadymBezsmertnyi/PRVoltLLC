import { createSlice } from "@reduxjs/toolkit";

// constants
import { initialStateTaskReducer } from "./tasksReducer.constants";

export const tasksReducer = createSlice({
  name: "tasksReducer",
  initialState: initialStateTaskReducer,
  reducers: {},
});

export const {} = tasksReducer.actions;

export default tasksReducer.reducer;
