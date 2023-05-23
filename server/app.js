import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();

// currently, all route controller responses (return) values should be an array, the data as the first element and the statusCode as the second. Any errors thrown should be thrown using the custom API error class.

const app = express();

// General Middleware
app.use(express.json());
app.use(cookieParser());

// Routing Middleware
app.use("/", routes());

// Error Handling Middleware (Always Last)
app.use(errorHandler);

// connect to database and spin up server
const PORT = 3001;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connection to DB successful...");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
