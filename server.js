import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

import userRouter from "./src/routes/userRoute.js";

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());

server.use(userRouter);

server.get("/",(req, res) => {
  res.status(200).send("Api rodando com sucesso!");
});

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    chalk.yellow.bgBlack.bold(
      `Server is running on port: ${process.env.SERVER_PORT}`
    )
  );
});

