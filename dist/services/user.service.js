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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.findAll = void 0;
const user_model_1 = require("../database/models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = (yield user_model_1.User.find({}));
    return users;
});
exports.findAll = findAll;
const postUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield user_model_1.User.create(userData);
    newUser.password = yield bcrypt_1.default.hash(userData.password, 10);
    yield newUser.save();
    return newUser;
});
exports.postUser = postUser;
