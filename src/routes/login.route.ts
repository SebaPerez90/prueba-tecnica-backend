import { Router, Request, Response } from "express";

const registerRouter = Router();
registerRouter.get("/register", (req: Request, res: Response) => {
  res.send("register route");
});

export default registerRouter;
