import jwt from "jsonwebtoken";
import config from "../config/app.config";

export function jwtTokenGenerate(data: Object): string {
  const token = jwt.sign(
    {
      data: data,
    },
    config.internal.JWT_SECRET_KEY
    /** , { expiresIn: '1h' }*/
  );

  return token;
}

export function jwtVerifyToken(token: string): any {
  try {
    const decoded = jwt.verify(token, config.internal.JWT_SECRET_KEY);
    return decoded;
  } catch (e) {
    return false;
  }
  return false;
}
