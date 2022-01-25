const { Sequelize } = require("sequelize");
const Blog = require("../model/Blogs");

const DB_Name = "pawan_test";
const DB_username = "postgres";
const DB_password = "pawan123";
const DB_port = "5432";
const db = {};

const sequelize = new Sequelize(DB_Name, DB_username, DB_password, {
  host: "localhost",
  dialect: "postgres",
  port: DB_port,
  pool: {
    max: 20,
    idle: 30000,
    min: 5,
  },
  define: {
    underscored: true,
  },
});

const blogModel = Blog(sequelize, Sequelize.DataTypes);
db.blog = blogModel;
db.sequelize = sequelize;
module.exports = db;
