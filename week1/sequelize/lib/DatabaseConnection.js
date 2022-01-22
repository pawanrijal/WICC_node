/**
 Author: Santosh Kumar Subedi
 CreatedOn: 2022-01-22
 FileName:DatabaseConnection.js
 Project: node-training
 **/

const Sequelize = require("sequelize");
const User = require("../model/Users");

//database configurations
const DB_USERNAME="postgres";
const DB_PASSWORD="postgres";
const DB_NAME="training_db";
const DB_HOST="localhost";
const DB_PORT="5432";
const DIALECT="postgres";
const db = {}
const sequelize = new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD,{
    dialect:DIALECT,
    host:DB_HOST,
    port:DB_PORT,
    pool: {
        max:20,
        idle:30000,
        min:5
    },
    define:{
        underscored:true
    }
});

// const sequelizeSecondDatabase = new Sequelize("second",DB_USERNAME,DB_PASSWORD,{
//     dialect:DIALECT,
//     host:DB_HOST,
//     port:DB_PORT,
//     pool: {
//         max:20,
//         idle:30000,
//         min:5
//     },
//     define:{
//         underscored:true
//     }
// });

const userModel = User(sequelize,Sequelize.DataTypes)
db.user = userModel;
db.sequelize = sequelize;
// db.secondDatabase = sequelizeSecondDatabase;
module.exports = db;