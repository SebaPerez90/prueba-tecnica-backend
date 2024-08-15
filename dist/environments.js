"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".development.env" });
exports.ENV = {
    SERVER_PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    API_URL_BASE: process.env.API_URL_BASE,
};
