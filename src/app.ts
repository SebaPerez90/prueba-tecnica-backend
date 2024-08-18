import express from "express";
import router from "./routes/index.route";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(router);

export default app;
