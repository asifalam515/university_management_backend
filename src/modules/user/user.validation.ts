import { z } from "zod";

export const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: "password must be string",
    })
    .nonempty("Password is required")
    .optional(),
  //   role: z.enum(["admin", "student", "faculty"]),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  //   needsPasswordChange: z.boolean().optional().default(true),
  isDeleted: z.boolean().optional().default(false),
});

export const UserValidation = { userValidationSchema };
