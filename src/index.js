import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/connnection.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("DB connection Failed", err);
  });
