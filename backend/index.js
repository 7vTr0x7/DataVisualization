import express from "express";
import cors from "cors";
import { initializeDatabase } from "./db/db.connection.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json());

const corsOption = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOption));

app.use("/api/user", userRouter);

initializeDatabase();

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
