"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Swift Cart API",
            version: "1.0.0",
            description: "A simple API for managing a shopping cart",
        },
    },
    apis: ["./src/routes/*.ts"],
};
