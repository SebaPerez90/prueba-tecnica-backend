"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth.route"));
const users_route_1 = __importDefault(require("./users.route"));
const products_route_1 = __importDefault(require("./products.route"));
const router = (0, express_1.Router)();
router.get("/", (_req, res) => {
    res.status(200).json({
        message: "Welcome to SwiftCart REST API. Visit the documentation URL for more details: https://prueba-tecnica-backend.onrender.com/api/v1/docs/",
        info: "Visit the documentation url for more details",
        URL: "https://prueba-tecnica-backend.onrender.com/api/v1/docs/",
    });
});
router.use(auth_route_1.default);
router.use(users_route_1.default);
router.use(products_route_1.default);
exports.default = router;
