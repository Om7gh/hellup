const ErrorHandler = require("../utils/handleErrors");
// const handleCastError = (err) => {
//   const message = `Invalid ${err.path} : ${err.value}`;
//   return new ErrorHandler(message, 400);
// };

// const handleDuplicatedFields = (err) => {
//   const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
//   const message = `Duplicate field Value : ${value}. Please use another value`;
//   return new ErrorHandler(message, 400);
// };
// const handleValidationError = (err) => {
//   const errors = Object.values(err.errors).map((val) => val.message);
//   const message = `Invalid input data. ${errors.join(". ")}`;
//   return new ErrorHandler(message, 400);
// };

// const sendErrorDev = (err, res) => {
//   res.status(err.statusCode).json({
//     status: err.status,
//     error: err,
//     message: err.message,
//     stack: err.stack,
//   });
// };
// const sendErrorProd = (err, res) => {
//   //   let isOperational = true;
//   //   if (isOperational) {
//   res.status(err.statusCode).json({
//     status: err.status,
//     message: err.message,
//   });
//   //   } else {
//   //     res.status(500).json({
//   //       status: "error",
//   //       message: "Something went wrong !",
//   //     });
//   //   }
// };

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  if (err.name === "CastError") {
    const message = `Resource Not Found, Invalid ${err.path} `;
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((val) => val.message);
    const message = `Invalid input data. ${errors.join(". ")}`;
    err = new ErrorHandler(message, 400);
  }

  if (err.code === 11000) {
    const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
    const message = `Duplicate field Value : ${value}. Please use another value`;
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "JsonWebTokenError") {
    const message = `json web token is Invalid try again`;
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "TokenExpiredError") {
    const message = `json web token is Expired try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    status: "fail",
    message: err.message,
  });
};
