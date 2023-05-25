import dotenv from "dotenv";

dotenv.config();

const errorHandler = (err, req, res, next) => {
  let errStatus = err.statusCode || 500;
  if (err.message === "jwt expired") errStatus = 401;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

export default errorHandler;
