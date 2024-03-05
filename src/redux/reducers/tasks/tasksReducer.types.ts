import { z } from "zod";
import { taskSchema, typesShowSchema } from "./tasksReducer.schemas";

export type TaskType = z.infer<typeof taskSchema>;

export type TypesShowType = z.infer<typeof typesShowSchema>;

export type StateTasksReducer = {
  tasks: TaskType[];
  showTasks: TaskType[];
  count: number;
  countCompleted: number;
  typeShow: TypesShowType;
};
