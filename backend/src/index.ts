import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./Routes/Auth";
import Todos from "./Routes/Todos";

dotenv.config();
const app = express();

const PORT: string | number = process.env.PORT || 5000;
const mongoUri: any = process.env.MONGOURI!;

app.use(cors());
app.use(express.json());
app.use("/auth", auth);
app.use("/todo", Todos);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Working fine!" });
});

mongoose
  .connect(mongoUri, {
    dbName: process.env.DB_NAME,
  })
  .then((): void => {
    console.log(`Mongodb connected`);
  })
  .catch((err): void => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
