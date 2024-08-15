import app from "./app";
import conectionDB from "./database/config/conectionDB";

const PORT = process.env.PORT || 3000;
conectionDB()
  .then(() => app.listen(PORT, () => {}))
  // eslint-disable-next-line no-console
  .catch((error) => console.error(error));
