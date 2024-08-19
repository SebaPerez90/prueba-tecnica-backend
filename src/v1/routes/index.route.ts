import { Router, Request, Response } from "express";
import authRouter from "./auth.route";
import usersRouter from "./users.route";
import productRouter from "./products.route";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to SwiftCart REST API. Visit the documentation URL for more details: https://prueba-tecnica-backend.onrender.com/api/v1/docs/",
    info: "Visit the documentation url for more details",
    URL: "https://prueba-tecnica-backend.onrender.com/api/v1/docs/",
  });
});
router.use(authRouter);
router.use(usersRouter);
router.use(productRouter);

export default router;
