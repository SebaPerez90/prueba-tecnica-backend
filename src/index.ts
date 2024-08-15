import app from "./app";
import conectionDB from "./database/config/conectionDB";
import { ENV } from "./environments";

const PORT = process.env.PORT || 3000;

conectionDB()
  .then(() =>
    app.listen(ENV.SERVER_PORT, () => {
      console.log(`Server running on port ${PORT}.`);
    })
  )
  .catch((error) => console.error(error));
