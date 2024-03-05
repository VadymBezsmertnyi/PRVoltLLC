import { z } from "zod";

export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  isCompleted: z.boolean(),
  createAT: z.number(),
  updateAT: z.number(),
});

export const typesShowSchema = z.enum(["all", "work", "completed"]);

export const tasksSchema = z.array(taskSchema);
