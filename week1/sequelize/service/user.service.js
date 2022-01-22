/**
 Author: Santosh Kumar Subedi
 CreatedOn: 2022-01-22
 FileName:user.service.js
 Project: node-training
 **/
const {user} = require("../lib/DatabaseConnection")
class UserService{

    async create(userData){
        const returnData = await user.create(userData);
        return returnData;
    }

    async findById(id){
        const userData = await user.findOne({
            where: {id},
            attributes:
                {exclude:['createdAt','updatedAt']
                }
        });
        return userData;
    }

    async findAll(){
        const userData = await user.findAll();
        return userData;
    }
}

module.exports = new UserService();