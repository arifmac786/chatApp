import app from "./app.js";
import { PORT } from "./config.js";
import connectDb from "./config/db.js";

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`App listen on PORT : ${PORT}`);
  });
});
