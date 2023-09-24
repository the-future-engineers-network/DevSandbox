import express from "express";
import pino from "pino-http";

const app = express();
const logger = pino();
const port = process.env.API_PORT as string;

app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to the DevSandbox API!");
});

app.listen(+port, () => {
  console.log(`API server listening on port ${port}`);
});
