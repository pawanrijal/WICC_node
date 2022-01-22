/**
 Author: Santosh Kumar Subedi
 CreatedOn: 2022-01-22
 FileName:user.controller.js
 Project: node-training
 **/
const UserService = require("../service/user.service")
class UserController{

    async create(req,res,next){
        try {
            const data = req.body;
            const createdUser = await UserService.create(data);
            res.json(createdUser);
        }catch(ex){
            next(ex)
        }
    }

   async findAll(req,res,next){
        try{
            const userData = await UserService.findAll();
            res.json(userData);
        }catch (e) {
            next()
        }
    }

    async findById(req,res,next){
        try{
            const {id} = req.params;
            const userData = await UserService.findById(id);
            res.json(userData);
        }catch (e) {
            next()
        }
    }
}

module.exports = new UserController();