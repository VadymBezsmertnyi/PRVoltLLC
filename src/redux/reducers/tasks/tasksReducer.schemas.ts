import { z } from "zod";

export const taskSchema = z.object({
  id: z.number(),
  deviceId: z.string(),
  title: z.string(),
  description: z.string(),
  isCompleted: z.boolean(),
});

export const tasksSchema = z.array(taskSchema);
