const errorHandlerWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      const [data = {}, statusCode = 200] = await fn(req, res, next);
      return res.status(statusCode).json({ success: true, ...data });
    } catch (error) {
      next(error);
    }
  };
};

export default errorHandlerWrapper;
