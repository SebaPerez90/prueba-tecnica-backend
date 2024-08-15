import { Router } from "express";
import { login, createUser } from "../controlers/auth.controller";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/signup", createUser);

export default authRouter;
