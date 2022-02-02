const BlogRoute = require("./blogRoutes");
const PostRoutes = require("./postRoutes");
exports.initRoutes = (app) => {
  BlogRoute(app);
  PostRoutes(app);
};
