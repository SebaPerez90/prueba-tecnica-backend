import { Router } from "express";
import {
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../../controlers/user.controller";

const usersRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 */

/**
 * @swagger
 * /api/v1/users/{uuid}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user by ID.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: User UUID. Must be a string.
 *         example: "66be1800e940ee5c779af54e"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: User with id xxxxxx not found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

usersRouter.get("/api/v1/users/:uuid", getUserById);

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

/**
 * @swagger
 * /api/v1/users/{uuid}:
 *   patch:
 *     tags:
 *       - Users
 *     summary: Update user by ID.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: User UUID. Must be a string.
 *         example: "66be1800e940ee5c779af54e"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success.
 *       404:
 *         description: User with id not found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

usersRouter.patch("/api/v1/users/:uuid", updateUser);

/**
 * @swagger
 * /api/v1/users/{uuid}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete user by ID.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: User UUID. Must be a string.
 *         example: "66be1800e940ee5c779af54e"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: User with id not found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

usersRouter.delete("/api/v1/users/:uuid", deleteUser);

export default usersRouter;
