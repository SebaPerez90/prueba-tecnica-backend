import { Router } from "express";
import { getAllUser } from "../controlers/user.controller";

const usersRouter = Router();

usersRouter.get("/users", getAllUser);

export default usersRouter;
