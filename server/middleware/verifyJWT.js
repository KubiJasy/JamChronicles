import jwt from "jsonwebtoken";
import { CustomAPIError } from "../errors/customAPIError";
import errorHandlerWrapper from "../utils/errorHandlerWrapper.js";

const verfiyJWT = errorHandlerWrapper((req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    throw new CustomAPIError(401, "Unauthorised");
  }
  const token = authHeader.split(" ")[1];

  const decodedAT = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);

  req.user = decodedAT.userID;
  next();
});

export default verfiyJWT;
