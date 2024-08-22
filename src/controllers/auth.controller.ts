import catchErrors from "../utils/catchErrors";
import { registerSchema } from "../schemas/authSchema";

export const registerHandler = catchErrors(async (req, res) => {
  const request = registerSchema.parse({
    ...req.body,
  });
  res.json({
    message: "machine checkpoint",
  });
});

export const hello = catchErrors(async (req, res) => {
  res.json({
    message: "hello",
  });
});
