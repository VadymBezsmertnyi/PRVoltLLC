import { StateTasksReducer } from "./tasksReducer.types";

export const KEY_TASKS_LOCAL = "KEY_TASKS_LOCAL";
export const KEY_TYPE_SHOW_LOCAL = "KEY_TYPE_SHOW_LOCAL";

export const initialStateTaskReducer: StateTasksReducer = {
  tasks: [],
  showTasks: [],
  count: 0,
  countCompleted: 0,
  typeShow: "all",
};
