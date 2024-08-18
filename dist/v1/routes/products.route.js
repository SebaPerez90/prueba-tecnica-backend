"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../../controlers/product.controller");
const productRouter = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   - name: Products
 */
/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get all products
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
productRouter.get("/api/v1/products", product_controller_1.getAllProduct);
productRouter.get("/api/v1/categories", product_controller_1.getAllCategories);
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to get. Must be a number
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: The specified pruduct ID is invalid (not a number).
 *       404:
 *         description: Product not found
 */
productRouter.get("/api/v1/products/:id", product_controller_1.getProductByID);
exports.default = productRouter;
