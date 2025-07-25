 import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import jobRouter from "./routes/jobRouter.js";
import userRouter from './routes/userRouter.js';
import applicationRouter from "./routes/applicationRouter.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import { User } from "./models/userSchema.js";

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

// ✅ Add this route to handle GET /
app.get("/", (req, res) => {
  res.send("✅ MERN Job-Seeking Backend is Running!");
});

// Connect DB
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
