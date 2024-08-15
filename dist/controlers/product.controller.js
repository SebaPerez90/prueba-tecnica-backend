"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByID = exports.getAllCategories = exports.getAllProduct = void 0;
const product_service_1 = require("../services/product.service");
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, product_service_1.findAll)();
        if ((products === null || products === void 0 ? void 0 : products.length) === 0) {
            res.status(404).json({ message: "No products found" });
        }
        else {
            res.status(200).json(products);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllProduct = getAllProduct;
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, product_service_1.allCategories)();
        if ((categories === null || categories === void 0 ? void 0 : categories.length) === 0) {
            res.status(404).json({ message: "No categories found" });
        }
        else {
            res.status(200).json(categories);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllCategories = getAllCategories;
const getProductByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parseID = parseInt(req.params.id);
        if (isNaN(parseID)) {
            res.status(400).json({
                id: req.params.id,
                message: "ID Must be a number. Please try again",
            });
        }
        else {
            const product = yield (0, product_service_1.getByID)(req.params.id);
            res.status(200).json(product);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getProductByID = getProductByID;
