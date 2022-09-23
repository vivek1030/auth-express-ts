import { Request as RequestExpress, Response, NextFunction } from "express";
import { jwtVerifyToken } from "../services/auth.service";
import { CommonException } from "../exceptions/baseException";

// Modify Request Interface
interface Request extends RequestExpress {
  user?: Object;
}

async function isAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.header("authorization");
  var flag: Boolean = false;
  if (authHeader) {
    const bearerToken = authHeader.split(" ");
    if (bearerToken.length == 2) {
      const token = jwtVerifyToken(bearerToken[1]);
      if (token) {
        req.user = token.data;
        flag = true;
      }
    }
  }
  if (flag) {
    next();
  } else {
    next(new CommonException("Unauthorized.", null, 401));
  }
}

export default isAuth;
