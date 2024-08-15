import { Router } from "express";
import authRouter from "./auth.route";
import usersRouter from "./users.route";
import productRouter from "./products.route";

const router = Router();

router.use(authRouter);
router.use(usersRouter);
router.use(productRouter);

export default router;
