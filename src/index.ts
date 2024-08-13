import app from "./app";
import conectionDB from "./database/config/conectionDB";
import { ENV } from "./environments";

conectionDB()
  .then(() =>
    app.listen(ENV.SERVER_PORT, () => {
      console.log(`Server running on port ${ENV.SERVER_PORT}.`);
    })
  )
  .catch((error) => console.error(error));
