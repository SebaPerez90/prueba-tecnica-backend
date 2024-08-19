"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SwiftCart REST API",
            version: "1.0.0",
            description: "A simple API for managing e-commerce logic.",
        },
        // securitySchemes: {
        //   bearerAuth: {
        //     type: "http",
        //     scheme: "bearer",
        //     bearerFormat: "JWT",
        //   },
        // },
        // servers: [
        //   {
        //     url: "http://localhost:3000/api/v1",
        //     description: "Development server",
        //   }
        //   ,
        //   {
        //     url: "https://prueba-tecnica-backend.onrender/api/v1",
        //     description: "Production server",
        //   },
        // ],
        // security: [
        //   {
        //     bearerAuth: [],
        //   },
        // ],
    },
    apis: ["./src/v1/routes/*.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    app.get("/api/v1/docs.json", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(`Version 1 Docs are available on http://localhost:${port}/api/v1/docs`);
};
exports.default = swaggerDocs;
