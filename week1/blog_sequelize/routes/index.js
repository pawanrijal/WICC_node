const BlogRoute = require("./blogRoutes");
exports.initRoutes = (app) => {
  BlogRoute(app);
};
