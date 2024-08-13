import { Router, Request, Response } from "express";

const usersRouter = Router();

usersRouter.get("/users", (req: Request, res: Response) => {
  res.send("users route");
});

export default usersRouter;
