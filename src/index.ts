import app from "./app";
import conectionDB from "./database/config/conectionDB";
import swaggerDocs from "./v1/swagger";

const PORT = process.env.PORT || 3000;

conectionDB()
  .then(() =>
    app.listen(PORT, () => {
      swaggerDocs(app, PORT);
    })
  )
  .catch((error) => console.error(error));
