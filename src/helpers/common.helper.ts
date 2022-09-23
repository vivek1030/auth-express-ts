import { HmacSHA512 } from "crypto-js";
import config from "../config/app.config";

/** 
 * Hash Password Function 
 * */
export function hashPassword(str: string): string {
  const saltKey: string = config.internal.PASSWORD_SALTKEY;

  return HmacSHA512(str, saltKey).toString();
}
