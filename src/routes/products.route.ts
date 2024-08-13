import { Router } from "express";
import {
  getAllProduct,
  getProductByID,
} from "../controlers/product.controllers";

const productRouter = Router();
productRouter.get("/products", getAllProduct);
productRouter.get("/products/:id", getProductByID);

export default productRouter;
