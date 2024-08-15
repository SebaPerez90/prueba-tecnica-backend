"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controlers/product.controller");
const productRouter = (0, express_1.Router)();
productRouter.get("/products", product_controller_1.getAllProduct);
productRouter.get("/categories", product_controller_1.getAllCategories);
productRouter.get("/products/:id", product_controller_1.getProductByID);
exports.default = productRouter;
