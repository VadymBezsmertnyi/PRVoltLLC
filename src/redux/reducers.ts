import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./reducers/tasks/tasksReducer";

export const store = configureStore({
  reducer: combineReducers({ tasks: tasksReducer }),
});
