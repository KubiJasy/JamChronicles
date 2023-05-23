import authRouter from "./auth.js";
import express from "express";

const router = express.Router();

export default function () {
  router.use("/auth", authRouter());

  return router;
}
