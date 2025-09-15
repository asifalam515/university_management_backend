import { z } from "zod";

export const userValidationSchema = z.object({
  id: z.string().nonempty("ID is required"),
  password: z.string().nonempty("Password is required"),
  role: z.enum(["admin", "student", "faculty"]),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  needsPasswordChange: z.boolean().optional().default(true),
  isDeleted: z.boolean().optional().default(false),
});

export const UserValidation = { userValidationSchema };
