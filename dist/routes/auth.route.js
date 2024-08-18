"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controlers/auth.controller");
const authRouter = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   - name: Authentication
 */
/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Must be a valid email address
 *                 example: "useremail@example.com"
 *               password:
 *                 type: string
 *                 description: Must contain at least special characters !@#$%^&_*
 *                 example: "password_example"
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Bad request
 */
authRouter.post("/login", auth_controller_1.login);
/**
 * @swagger
 * /signup:
 *   post:
 *     tags:
 *       - Authentication
 *
 *     summary: Register new user
 *     description: Creates a new user with name, phone, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Only chart are available, can be full name
 *                 example: "Sebastian Perez"
 *               phone:
 *                 type: number
 *                 description: Must be a your phone number
 *                 example: 1132830608
 *               email:
 *                 type: string
 *                 description: Must be a valid email address
 *                 example: "useremail@example.com"
 *               password:
 *                 type: string
 *                 description: Must contain special characters !@#$%^&_*
 *                 example: "passwordexample"
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Invalid email format. Enter a valid email plis.
 *       409:
 *         description: Email already exists.
 */
authRouter.post("/signup", auth_controller_1.createUser);
exports.default = authRouter;
