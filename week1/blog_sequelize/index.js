const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
require("./utils/jwt-token")(passport);
const token = require("./utils/token-generate");
const jwt = require("jsonwebtoken");
const { upload } = require("./multer/multer_config");

const app = express();
const { sequelize } = require("./lib/database-connection");
const { initRoutes } = require("./routes");
const HttpException = require("../exceptions/http-exception");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload.array());
// app.use(express.static("public"));
sequelize
  .authenticate()
  .then(() => {
    // sequelize.sync({ force: true });
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
initRoutes(app);

// app.get("/upload", upload.single("image"), (req, res) => {
//   console.log(req.file);
// });

// app.use((req, res, next) => {
//   const err = new HttpException(404, "Page not Found");
//   next(err);
// });

app.use((err, req, res, next) => {
  console.log(err);
  err.statusCode = err.statusCode || 500;
  err.success = err.success || false;
  err.message = err.errors || err.error || "Something went wrong";
  err.status = err.status || "error";
  err.detail = err.details;
  res.json({
    error: err.message,
    statusCode: err.statusCode,
    success: err.success,
    source: err.detail,
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
