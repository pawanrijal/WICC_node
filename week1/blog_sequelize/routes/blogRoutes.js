const BlogController = require("../controllers/blogController");
const create = require("../middleware/validation_middleware");
const passport = require("passport");
const SuccessResponse = require("../utils/helper");
const jwt = require("jsonwebtoken");
const { upload } = require("../multer/multer_config");

module.exports = (app) => {
  app.route("/blog").post(create, BlogController.create);
  app.route("/blog").get(BlogController.findAll);
  app.route("/blog/:id").get(BlogController.findById);
  app.route("/blog/update/:id").put(BlogController.update);
  app.route("/blog/delete/:id").get(BlogController.deleteById);
  app.route("/login").post(BlogController.login);

  app
    .route("/profile")
    .post(
      passport.authenticate("jwt", { session: false }),
      (req, res, next) => {
        try {
          const token = req.headers.authorization.split(" ")[1];
          console.log(token);
          jwt.verify(token, "secret");
          res.json("Verified");
        } catch (err) {
          next(err);
        }
      }
    );
  app.route("/register").post(upload.single("image"), BlogController.register);
  app.route("/user").get(BlogController.findUser);
  app.route("/user/:id").get(BlogController.findUserById);
};
