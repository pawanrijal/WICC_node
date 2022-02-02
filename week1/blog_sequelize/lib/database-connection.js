const { Sequelize } = require("sequelize");
const Blog = require("../model/Blogs");
const User = require("../model/new_Users.js");
const Post = require("../model/Post");

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
const userModel = User(sequelize, Sequelize.DataTypes);
const postModel = Post(sequelize, Sequelize.DataTypes);
// postModel.belongsTo(userModel);
// userModel.hasMany(postModel);
db.blog = blogModel;
db.user = userModel;
db.post = postModel;
db.sequelize = sequelize;
module.exports = db;
