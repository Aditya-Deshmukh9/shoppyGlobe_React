import "dotenv/config";
import { app } from "./src/app.js";
import { connectDB } from "./src/db/connectDB.js";

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`server running on Port: ${port}`));
  })
  .catch((err) => {
    console.log(`Mongodb connection failed `, err);
  });
