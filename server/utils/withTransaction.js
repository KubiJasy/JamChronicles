import mongoose from "mongoose";

const withTransaction = (fn) => {
  return async function (req, res, next) {
    let result;
    await mongoose.connection.transaction(async (session) => {
      result = await fn(req, res, next, session);
      return result;
    });
    return result;
  };
};

export default withTransaction;
