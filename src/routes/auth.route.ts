import { Router } from "express";
import { login, createUser } from "../controlers/auth.controller";

const registerRouter = Router();

registerRouter.post("/login", login);
registerRouter.post("/signup", createUser);

export default registerRouter;
