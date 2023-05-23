import {
  createUser,
  login,
  regenerateAccessToken,
  logout,
} from "./auth.controller.js";

const authController = { createUser, login, regenerateAccessToken, logout };

export { authController };
