/**
 Author: Santosh Kumar Subedi
 CreatedOn: 2022-01-22
 FileName:user.routes.js
 Project: node-training
 **/
const UserController = require("../controllers/user.controller")
module.exports = (app)=>{
    app.route("/user")
        .post(UserController.create);
    app.route("/user")
        .get(UserController.findAll);
    app.route("/user/:id")
        .get(UserController.findById);
}