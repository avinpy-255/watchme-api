import catchErrors from "../utils/catchErrors";
import { z } from "zod";

const registerSchema = z
  .object({
    email: z.string().email().min(5).max(255),
    password: z.string().min(5).max(255),
    confirmPassword: z.string().min(5).max(255),
    userAgent: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password did not match",
    path: ["confirmPassword"],
  });

export const registerHandler = catchErrors(async (req, res) => {
  const userAgent = req.headers.get("user-agent"); // Use the get method instead of index access
  const request = registerSchema.parse({
    ...req.body,
    userAgent,
  });
});
