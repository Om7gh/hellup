//###########################################

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGH EXCEPTION Sutting down the server");
  process.exit(1);
});

//###########################################

require("dotenv").config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");

const DB_URL = process.env.DATABASE;
mongoose.connect(DB_URL).then(() => console.log("Database is conntected"));

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log("Server running in port :", port);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLE REJECTION Sutting down the server");
  server.close(() => {
    process.exit(1);
  });
});
