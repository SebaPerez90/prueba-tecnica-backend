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
usersRouter.get("/users/:page?/:limit?", user_controller_1.getAllUser);
exports.default = usersRouter;
