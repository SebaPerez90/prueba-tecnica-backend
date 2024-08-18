"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Swift Cart API",
        version: "1.0.0",
        description: "A simple API for managing a shopping cart",
    },
    components: {
    // securitySchemes: {
    //   bearerAuth: {
    //     type: "http",
    //     scheme: "bearer",
    //     bearerFormat: "JWT",
    //   },
    // },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
};
exports.options = {
    swaggerDefinition,
    apis: ["./src/routes/*.ts"],
};
