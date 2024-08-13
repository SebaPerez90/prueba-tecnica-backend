import { Router } from "express";
import { getAllProductController } from "../controlers/product.controllers";

const productRouter = Router();

productRouter.get("/products", getAllProductController);

export default productRouter;
