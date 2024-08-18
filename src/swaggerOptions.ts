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
  servers: [
    {
      url: "http://localhost:3000/api/v1",
      description: "Development server",
    },
    {
      url: "https://prueba-tecnica-backend.onrender/api/v1",
      description: "Production server",
    },
  ],
  security: [
    {
      bearerAuth: [],
    },
  ],
};

export const options = {
  swaggerDefinition,
  apis: ["./src/v1/routes/*.ts"],
};
