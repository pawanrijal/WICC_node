const UserRoute = require("./user.routes");
exports.initRoutes = (app) => {
  UserRoute(app);
};
