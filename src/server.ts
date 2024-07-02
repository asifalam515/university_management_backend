import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    // console.log(process.env.DB_URL);
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example  listening on port ${config.port}`);
    });

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (err) {
    console.log(err);
  }
}
main();
