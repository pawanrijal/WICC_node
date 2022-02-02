const { blog } = require("../lib/database-connection");
const { user } = require("../lib/database-connection");
const bcrypt = require("bcrypt");

const SuccessResponse = require("../utils/helper");
const generateToken = require("../utils/token-generate");
const saltRounds = 10;

class BlogService {
  async create(blogData) {
    try {
      const returnData = await blog.create(blogData);
      SuccessResponse(res, 200, true, returnData, "Blog", "Blog created");
    } catch (err) {
      res.json(err);
    }
  }

  async findById(id) {
    const blogData = await blog.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return blogData;
  }

  async findAll() {
    const blogData = await blog.findAll();
    return blogData;
  }

  async update(id, title) {
    console.log(title);
    const blogData = await blog.update(
      {
        title: title,
      },
      {
        where: { id },

        attributes: { exclude: ["createdAt", "updatedAt"] },
      }
    );
    return blogData;
  }

  async delete(id) {
    const blogData = await blog.destroy({
      where: { id },
    });
    return blogData;
  }
  async register(data) {
    console.log(data);
    let { id, username, password, path } = data;

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
          return err;
        }
        // const data = {
        //   id: id,
        //   username: username,
        //   password: hash,
        // };
        data.password = hash;
        data.path = path;
        return user.create(data);
      });
      if (err) {
        return err;
      }
    });
  }

  async findUser() {
    const blogData = await user.findAll();
    return blogData;
  }
  async findUserById(id) {
    const data = await user.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return data;
  }

  async login(payload) {
    let _user = await user.findOne({ where: { id: payload.id } });
    if (_user.id == payload.id) {
      const token = generateToken(_user);
      console.log(token);
      return token;
    } else {
      res.json({
        message: "User not matched",
      });
    }
  }
}

module.exports = new BlogService();
