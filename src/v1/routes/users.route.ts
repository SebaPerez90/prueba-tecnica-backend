import { Router } from "express";
import { getAllUser } from "../../controlers/user.controller";

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
 *       404:
 *         description: No users found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

usersRouter.get("/api/v1/users/:page?/:limit?", getAllUser);

export default usersRouter;
