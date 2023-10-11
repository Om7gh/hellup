const express = require("express");
const cors = require("cors");
const app = express();
const BlogsRoute = require("./routes/blogRoute");
const ErrorHandler = require("./utils/handleErrors");
const globalErrorHandler = require("./controller/errorController");
const UsersRoute = require("./routes/userRoute");
// Middelware Start
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// MiddelWare Finish

// Routes Start
app.use("/api/v1/blogs", BlogsRoute);
app.use("/api/v1/users", UsersRoute);
// Routes end

// route  middelware
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Can"t find ${req.originalUrl} from this server`, 404));
});
app.use(globalErrorHandler);
module.exports = app;
