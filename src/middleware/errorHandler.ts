import { ErrorRequestHandler, Response } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constansts/http";
import { z } from "zod";

const handlezodError = (res: Response, error: z.ZodError) => {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));
  return res.status(BAD_REQUEST).json({
    message: error.message,
    errors,
  });
};

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.error(`Error occurred on path: ${req.path}`, error.message);

  if (error instanceof z.ZodError) {
    return handlezodError(res, error);
  }

  res.status(INTERNAL_SERVER_ERROR).send({
    error: "Internal Server Error",
    message: error.message || "Something went wrong",
  });
};

export default errorHandler;
