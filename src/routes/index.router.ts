import { Router, Request, Response } from "express";
import registerRouter from "./login.route";
import usersRouter from "./users.route";
import productRouter from "./products.route";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World! 🤙");
});

router.use(registerRouter);
router.use(usersRouter);
router.use(productRouter);

export default router;
