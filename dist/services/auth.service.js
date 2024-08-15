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
exports.checkCredentials = exports.signup = void 0;
const user_model_1 = require("../database/models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const signup = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email }) {
    const usersEmail = yield user_model_1.User.find({}).select("email");
    for (let i = 0; i < usersEmail.length; i++) {
        if (usersEmail[i].email === email) {
            throw new Error(`User with email ${email} is already exist.`);
        }
    }
    return usersEmail;
});
exports.signup = signup;
const checkCredentials = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password, }) {
    const userFound = (yield user_model_1.User.findOne({ email }));
    if (!userFound) {
        throw new Error(`Incorrect credentials! Please try again`);
    }
    if (password && userFound.password) {
        const isPasswordCorrect = bcrypt_1.default.compare(password, userFound.password);
        if (!isPasswordCorrect) {
            throw new Error(`Incorrect credentials! Please try again`);
        }
    }
    return userFound;
});
exports.checkCredentials = checkCredentials;
