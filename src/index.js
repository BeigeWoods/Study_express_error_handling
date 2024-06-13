import "express-async-errors";
import express from "express";
import Errorhandling from "./error.js";
const errorHandling = new Errorhandling();

const app = express();

app.get("/throw", async (req, res, next) => {
  await errorHandling.throw().catch((error) => {
    throw error;
  });
});

app.get("/throw_new", async (req, res, next) => {
  await errorHandling.throw().catch((error) => {
    throw new Error(`/throw_New : ${error}`);
  });
});

app.get("/new", async (req, res, next) => {
  await errorHandling.new().catch((error) => {
    throw error;
  });
});

app.use((err, req, res, next) => {
  res.status(400).json(err);
  console.error("# Something Wrong # \n", err);
});

app.listen(8080, () => console.log(`Server listening on port 8080`));
