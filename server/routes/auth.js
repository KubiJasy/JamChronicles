import express from "express";
import { authController } from "../controllers";

const router = express.Router();

export default function () {
  router.route("/register").post(authController.createUser);
  router.route("/login").post(authController.login);
  router.route("/regenerate-token").get(authController.regenerateAccessToken);
  router.route("/logout").get(authController.logout);

  return router;
}
