import { Router } from "express";
import {
  getAllProduct,
  getProductByID,
  getAllCategories,
} from "../controlers/product.controller";

const productRouter = Router();

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

productRouter.get("/products", getAllProduct);
productRouter.get("/categories", getAllCategories);

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
productRouter.get("/products/:id", getProductByID);

export default productRouter;
