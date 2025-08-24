const errorHandler = (err, req, res, next) => {
  console.log(
    `error message: ${err.message} | status code: ${err.statusCode} | errors: ${err.errors}`
  );
  res.status(err.statusCode || 500).json({
    message: err.message,
    errors: err.errors,
  });
};

export default errorHandler;
