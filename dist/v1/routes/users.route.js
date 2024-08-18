"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../controlers/user.controller");
const usersRouter = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   - name: Users
 */
/**
 * @swagger
 * /api/v1/users/:id:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user by ID.
 *     parameters:
 *       - in: path
 *         name: uuid
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
usersRouter.get("/api/v1/users/:uuid", user_controller_1.getUserById);
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
usersRouter.get("/api/v1/users/:page?/:limit?", user_controller_1.getAllUser);
/**
 * @swagger
 * /api/v1/users/:id:
 *   get:
 *     tags:
 *       - Users
 *     summary: Update user by ID.
 *     parameters:
 *       - in: path
 *         name: uuid
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
usersRouter.patch("/api/v1/users/:uuid", user_controller_1.updateUser);
/**
 * @swagger
 * /api/v1/users/:id:
 *   get:
 *     tags:
 *       - Users
 *     summary: Delete user by ID.
 *     parameters:
 *       - in: path
 *         name: uuid
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
usersRouter.delete("/api/v1/users/:uuid", user_controller_1.deleteUser);
exports.default = usersRouter;
