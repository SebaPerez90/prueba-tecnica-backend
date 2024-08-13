import dotenv from "dotenv";
dotenv.config({ path: ".development.env" });

export const ENV = {
  SERVER_PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  API_URL_BASE: process.env.API_URL_BASE,
};
