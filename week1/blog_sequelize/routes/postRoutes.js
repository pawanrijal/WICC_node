const PostController = require("../controllers/postController");

const { upload } = require("../multer/multer_config");
module.exports = (app) => {
  app.route("/create_post").post(upload.single("image"), PostController.create),
    app.route("/posts").get(PostController.findAll);
};
