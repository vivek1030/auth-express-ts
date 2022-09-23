import { NextFunction, Request, Response } from "express";
import BaseException from "../exceptions/baseException";

// Error Interface
export interface ErrorInterface {
  message: string;
  status?: number;
}

// Error handler middleware
async function errorMiddleware(
  error: BaseException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  const data: any = error.data || null;

  return response.status(status).json({
    status,
    message,
    data,
  });
}

export default errorMiddleware;
