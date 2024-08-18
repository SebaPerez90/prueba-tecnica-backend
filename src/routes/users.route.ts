import { Router } from "express";
import { getAllUser } from "../controlers/user.controller";

const usersRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

usersRouter.get("/users", getAllUser);

export default usersRouter;
