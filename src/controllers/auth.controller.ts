import { Request as RequestExpress, Response, NextFunction } from "express";
import UserModel from "../models/user.model";
import validateHelper from "../helpers/validator.helper";
import ValidationException from "../exceptions/validationException";
import { CommonException } from "../exceptions/baseException";
import { Op } from "sequelize";
import {
  SignupValidator,
  LoginValidator,
} from "../validators/common.validator";
import { hashPassword as hashPasswordSync } from "../helpers/common.helper";
import { jwtTokenGenerate } from "../services/auth.service";

// Modify Request Interface
interface Request extends RequestExpress {
  user?: Object;
}

/**
 * Login Controller Function
 *
 * */
export async function login(req: Request, res: Response, next: NextFunction) {
  // Request Input
  const input: Object = req.body;

  // Login Validation Check
  const error = validateHelper(input, LoginValidator);
  if (error) {
    next(new ValidationException(error));
  } else {
    try {
      const { username, password } = req.body;
      // Check and validate email or user exist
      const hashPassword = hashPasswordSync(password);
      const user: any = await UserModel.findOne({
        where: {
          [Op.or]: [{ email_id: username }, { username: username }],
          password: hashPassword,
        },
      });

      // If Username or password is incorrect
      if (user == null) {
        next(new CommonException("Wrong username or password", null, 400));
      } else {
        // JWT token
        const token = jwtTokenGenerate({
          userId: user.id,
          emailId: user.email_id,
          username: user.username,
          role: user.role,
        });

        return res.status(200).json({
          success: true,
          message: "Login Successful.",
          token: token,
        });
      }
    } catch (e) {
      next(new CommonException());
    }
  }
}

/**
 * User Registration Controller Function
 *
 * */
export async function signup(req: Request, res: Response, next: NextFunction) {
  // Request Input
  const input: Object = req.body;

  // Register Validation Check
  const error = validateHelper(input, SignupValidator);
  if (error) {
    next(new ValidationException(error));
  } else {
    try {
      const { username, email, password } = req.body;
      // Check and validate email or user exist
      const user = await UserModel.findOne({
        where: {
          [Op.or]: [
            { email_id: email },
            { email_id: username },
            { username: email },
            { username: username },
          ],
        },
      });

      // If username and email not exist
      if (user == null) {
        const hashPassword = hashPasswordSync(password);
        const result = await UserModel.create({
          username: username,
          email_id: email,
          password: hashPassword,
        });

        if (result) {
          return res.status(200).json({
            success: true,
            message: "Register Successful.",
          });
        } else {
          next(new CommonException());
        }
      } else {
        next(
          new CommonException("Username or Email already exist.", null, 400)
        );
      }
    } catch (e) {
      next(new CommonException());
    }
  }
}

/**
 * Token Verify Controller Function
 *
 * */
export async function tokenVerify(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(200).json({
    success: true,
    message: "Authenticated",
  });
}
