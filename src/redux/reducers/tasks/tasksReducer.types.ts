import { z } from "zod";
import { taskSchema } from "./tasksReducer.schemas";

export type TaskType = z.infer<typeof taskSchema>;

export type StateTasksReducer = {
  tasks: TaskType[];
  showTasks: TaskType[];
};
