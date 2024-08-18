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
    res.json("Welcome to SwiftCart REST API 🚀");
});
router.use(auth_route_1.default);
router.use(users_route_1.default);
router.use(products_route_1.default);
exports.default = router;
