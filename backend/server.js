import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRotes from "./routes/userRoutes.js";
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send(`server is ready`));
app.use("/api/users", userRotes);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () =>
  console.log(`app is running in mode ${process.env.NODE_ENV} at PORT ${PORT}`)
);
