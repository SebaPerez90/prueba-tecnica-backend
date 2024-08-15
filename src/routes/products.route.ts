import { Router } from "express";
import {
  getAllProduct,
  getProductByID,
  getAllCategories,
} from "../controlers/product.controller";

const productRouter = Router();
productRouter.get("/products", getAllProduct);
productRouter.get("/categories", getAllCategories);
productRouter.get("/products/:id", getProductByID);

export default productRouter;
