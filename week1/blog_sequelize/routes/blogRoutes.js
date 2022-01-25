const BlogController = require("../controllers/blogController");
module.exports = (app) => {
    app.route("/blog").post(BlogController.create);
    app.route("/blog").get(BlogController.findAll);
    app.route("/blog/:id").get(BlogController.findById);
    app.route('/blog/update/:id').put(BlogController.update);
    app.route("/blog/delete/:id").get(BlogController.deleteById);

};
