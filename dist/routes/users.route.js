"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controlers/user.controller");
const usersRouter = (0, express_1.Router)();
usersRouter.get("/users", user_controller_1.getAllUser);
exports.default = usersRouter;
