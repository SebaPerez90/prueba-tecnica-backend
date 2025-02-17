import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Request, Response, Application } from "express";
import { swaggerComponents } from "./swagger.components";

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
    components: swaggerComponents,
  },
  apis: ["./src/v1/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: Application, port: number | string) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (_req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

export default swaggerDocs;
