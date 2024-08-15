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
exports.login = exports.createUser = void 0;
const auth_service_1 = require("../services/auth.service");
const user_service_1 = require("../services/user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegExp.test(email)) {
            return res
                .status(400)
                .json({ error: "Invalid email format. Enter a valid email plis." });
        }
        else {
            yield (0, auth_service_1.signup)(req.body);
            yield (0, user_service_1.postUser)(req.body);
            res.status(201).json({ message: "User registered successfully." });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userCredentials = yield (0, auth_service_1.checkCredentials)(req.body);
        const user = {
            name: userCredentials.name,
            phone: userCredentials.phone,
        };
        res.json({ message: "User authenticated successfully.", user });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.login = login;
