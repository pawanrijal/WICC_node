const BlogService = require("../service/blogService");
const generateToken = require("../utils/token-generate");
const SuccessResponse = require("../utils/helper");
const { upload } = require("../multer/multer_config");

class BlogController {
  async create(req, res, next) {
    try {
      const data = req.body;
      await BlogService.create(data);
      SuccessResponse(res, 200, true, data, "Blog", "Blog created");
    } catch (err) {
      next(err);
    }
  }

  async findAll(req, res, next) {
    try {
      const BlogData = await BlogService.findAll();
      res.json(BlogData);
    } catch (e) {
      next(e);
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const blogData = await BlogService.findById(id);
      res.json(blogData);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, body, category, author } = req.body;
      await BlogService.update(id, title);
      SuccessResponse(
        res,
        200,
        true,
        title,
        "Blog successfully updated",
        "Blog Updated"
      );
    } catch (e) {
      next(e);
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.params;
      const blogData = await BlogService.delete(id);
      SuccessResponse(
        res,
        200,
        true,
        id,
        "Blog successfully deleted",
        "Blog Deleted"
      );
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const data = await BlogService.login(req.body);
      res.json(data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async register(req, res, next) {
    try {
      const path = req.file.path;
      req.body.profile_pic = path;
      console.log(req.body);
      const BlogData = await BlogService.register(req.body);
      return SuccessResponse(res, 200, true, BlogData, "register", "register");
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  }
  async findUser(req, res, next) {
    try {
      const BlogData = await BlogService.findUser();
      res.json(BlogData);
    } catch (e) {
      next(e);
    }
  }

  async findUserById(req, res, next) {
    try {
      const { id } = req.params;
      const blogData = await BlogService.findUserById(id);
      res.json(blogData);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}
module.exports = new BlogController();
