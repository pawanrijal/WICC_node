/**
 Author: Santosh Kumar Subedi
 CreatedOn: 2022-01-21
 FileName:DatabaseConnection.js
 Project: node-training
 **/
const Sequelize = require("sequelize");
let sequelize = null;
const InitializeDataBaseConnection = async  ()=>{
    sequelize = new Sequelize('test',
        'postgres',
        'postgres',{
        dialect:"postgres"
    })
}