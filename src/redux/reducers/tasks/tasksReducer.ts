import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types
import { TaskType, TypesShowType } from "./tasksReducer.types";

// constants
import {
  KEY_TASKS_LOCAL,
  KEY_TYPE_SHOW_LOCAL,
  initialStateTaskReducer,
} from "./tasksReducer.constants";
import { tasksSchema, typesShowSchema } from "./tasksReducer.schemas";

export const tasksReducer = createSlice({
  name: "tasksReducer",
  initialState: initialStateTaskReducer,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const { title } = action.payload;
      const lastTask = state.tasks.at(-1);
      const id = lastTask ? lastTask.id + 1 : 1;
      const newTask: TaskType = {
        id,
        title,
        isCompleted: false,
        createAT: Date.now(),
        updateAT: Date.now(),
      };
      const newList = [...state.tasks, newTask];
      if (state.typeShow === "all" || state.typeShow === "work") {
        state.showTasks = [...state.showTasks, newTask];
      }
      state.tasks = newList;
      state.count += 1;
      localStorage.setItem(KEY_TASKS_LOCAL, JSON.stringify(newList));
    },
    changeTask: (state, action: PayloadAction<TaskType>) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) return action.payload;
        return task;
      });
      state.tasks = newTasks;
      state.count = newTasks.length;
      state.countCompleted = newTasks.filter((task) => task.isCompleted).length;
      state.showTasks = newTasks.filter((task) => {
        if (state.typeShow === "work") return !task.isCompleted;
        if (state.typeShow === "completed") return task.isCompleted;
        return true;
      });
      localStorage.setItem(KEY_TASKS_LOCAL, JSON.stringify(newTasks));
    },
    deleteTask: (state, action: PayloadAction<TaskType>) => {
      const newTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      const newTasksShow = state.showTasks.filter(
        (task) => task.id !== action.payload.id
      );
      state.tasks = newTasks;
      state.count = newTasks.length;
      state.countCompleted = newTasks.filter((task) => task.isCompleted).length;
      state.showTasks = newTasksShow;
      localStorage.setItem(KEY_TASKS_LOCAL, JSON.stringify(newTasks));
    },
    changeTypeShow: (state, action: PayloadAction<TypesShowType>) => {
      state.showTasks = state.tasks.filter((task) => {
        if (action.payload === "work") return !task.isCompleted;
        if (action.payload === "completed") return task.isCompleted;
        return true;
      });
      state.typeShow = action.payload;
      localStorage.setItem(KEY_TYPE_SHOW_LOCAL, action.payload);
    },
    getLocalStorageDate: (state) => {
      const tasksJSON = localStorage.getItem(KEY_TASKS_LOCAL);
      const tasks = tasksSchema.safeParse(
        tasksJSON ? JSON.parse(tasksJSON) : []
      );
      const typeShow = typesShowSchema.safeParse(
        localStorage.getItem(KEY_TYPE_SHOW_LOCAL)
      );
      const currentTypeShow = typeShow.success ? typeShow.data : state.typeShow;
      if (tasks.success) {
        state.tasks = tasks.data;
        state.count = tasks.data.length;
        state.showTasks = tasks.data.filter((task) => {
          if (currentTypeShow === "work") {
            return !task.isCompleted;
          }
          if (currentTypeShow === "completed") {
            return task.isCompleted;
          }
          return true;
        });
        state.countCompleted = tasks.data.filter(
          (task) => task.isCompleted
        ).length;
      }
      if (typeShow.success) state.typeShow = currentTypeShow;
    },
  },
});

export const {
  addTask,
  changeTask,
  deleteTask,
  changeTypeShow,
  getLocalStorageDate,
} = tasksReducer.actions;

export default tasksReducer.reducer;
