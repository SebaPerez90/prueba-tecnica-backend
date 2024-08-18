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
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUser = void 0;
const user_service_1 = require("../services/user.service");
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit } = req.query;
        const users = yield (0, user_service_1.findAll)(Number(page), Number(limit));
        if (users.length === 0) {
            res.status(404).json({ message: "No users found" });
        }
        else {
            const filteredUsers = users.map((user) => ({
                id: user.id,
                name: user.name,
                phone: user.phone,
            }));
            res.status(200).json(filteredUsers);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllUser = getAllUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userFound = yield (0, user_service_1.findOne)(id);
        const user = {
            name: userFound.name,
            phone: userFound.phone,
        };
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userFound = yield (0, user_service_1.updateOnebyID)(id, req.body);
        const user = {
            id: userFound.id,
            name: userFound.name,
            phone: userFound.phone,
        };
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { user } = yield (0, user_service_1.deleteOne)(id);
        res
            .status(200)
            .json({ message: "User deleted successfully", userDeleted: user });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.deleteUser = deleteUser;
