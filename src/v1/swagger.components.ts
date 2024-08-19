export const swaggerComponents = {
  schemas: {
    ExampleProductDto: {
      type: "object",
      required: ["name", "description", "price", "stock", "imgUrl"],
      properties: {
        name: {
          type: "string",
          example: "Laptop",
        },
        description: {
          type: "string",
          example: "A high-end gaming laptop.",
        },
        price: {
          type: "number",
          format: "float",
          example: 999.99,
        },
        stock: {
          type: "integer",
          example: 100,
        },
        imgUrl: {
          type: "string",
          example: "http://example.com/image.png",
        },
      },
    },
  },
};

// to add schema in route add --> $ref: '#/components/schemas/Product'
