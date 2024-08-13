import mongoose from "mongoose";
import { set } from "mongoose";
import { ENV } from "../../environments";

const conectionDB = async () => {
  set("strictQuery", true);
  await mongoose
    .connect(String(ENV.MONGODB_URI))
    .then(() => console.log("Database connection was successful."))
    .catch((error) => {
      console.log(error);
    });
};

export default conectionDB;
