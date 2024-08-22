import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email().min(5).max(255),
    password: z.string().min(5).max(255),
    confirmPassword: z.string().min(5).max(255),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password did not match",
    path: ["confirmPassword"],
  });
