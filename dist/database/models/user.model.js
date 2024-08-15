"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: String,
    phone: Number,
    password: String,
    email: String,
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
