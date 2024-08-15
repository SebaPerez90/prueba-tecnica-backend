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
exports.getByID = exports.allCategories = exports.findAll = void 0;
const environments_1 = require("../environments");
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${environments_1.ENV.API_URL_BASE}`);
    const products = (yield response.json());
    return products;
});
exports.findAll = findAll;
const allCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${environments_1.ENV.API_URL_BASE}/categories`);
    const categories = (yield response.json());
    return categories;
});
exports.allCategories = allCategories;
const getByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${environments_1.ENV.API_URL_BASE}/${id}`);
    const product = (yield response.json());
    return product;
});
exports.getByID = getByID;
