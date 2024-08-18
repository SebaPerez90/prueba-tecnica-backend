import { Router, Request, Response } from "express";
import authRouter from "./auth.route";
import usersRouter from "./users.route";
import productRouter from "./products.route";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json("Welcome to SwiftCart REST API 🚀");
});
router.use(authRouter);
router.use(usersRouter);
router.use(productRouter);

export default router;
