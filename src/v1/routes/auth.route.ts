import { Router } from "express";
import { login, createUser } from "../../controlers/auth.controller";

const authRouter = Router();

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
 *                 description: Must be your registered email
 *                 example: "useremail@example.com"
 *               password:
 *                 type: string
 *                 description: Must be your registered password
 *                 example: "password_example"
 *     responses:
 *       200:
 *         description: User authenticated successfully.
 *       400:
 *         description: Incorrect credentials! Please try again
 */

authRouter.post("/api/v1/login", login);

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
 *                 description: Must contain at least one special character !@#$%^&_*
 *                 example: "passwordexample"
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Invalid email format. Enter a valid email plis.
 *       409:
 *         description: Email already exists.
 */

authRouter.post("/api/v1/signup", createUser);

export default authRouter;
