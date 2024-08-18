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
 * /api/v1/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users or specify the amount you want to receive.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Page number to retrieve. Must be a number.
 *         schema:
 *           type: number
 *           default: 1
 *       - in: query
 *         name: limit
 *         description: Limit of the user results list. Must be a number. Must be a number.
 *         schema:
 *           type: number
 *           default: 100
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
