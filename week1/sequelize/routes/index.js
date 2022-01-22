/**
 Author: Santosh Kumar Subedi
 CreatedOn: 2022-01-22
 FileName:index.js
 Project: node-training
 **/
const UserRoute = require("./user.routes");
exports.initRoutes = (app) =>{
    UserRoute(app)
}