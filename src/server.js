import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

import userRouter from "./routes/userRoute.js";

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());

server.use(userRouter);

server.get("/",(req, res) => {
  res.status(200).json({ message: "It's done, you got it" });
});

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    chalk.yellow.bgBlack.bold(
      `Server is running on port: ${process.env.SERVER_PORT}`
    )
  );
});


export default server;