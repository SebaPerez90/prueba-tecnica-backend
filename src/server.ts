import app from "./app";
import { config } from "dotenv";

config();

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
