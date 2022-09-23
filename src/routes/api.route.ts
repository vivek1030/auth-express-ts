import { Router } from "express";
import { login, signup, tokenVerify } from "../controllers/auth.controller";
import isAuth from "../middleware/auth.middleware";
const route: Router = Router();

route.post("/login", login);

route.post("/signup", signup);

route.get("/token-verify", isAuth, tokenVerify);

export default route;
