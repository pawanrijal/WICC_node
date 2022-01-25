
const BlogService = require("../service/blogService");
class BlogController {
  async create(req, res, next) {
    try {
      const data = req.body;
      const createdBlog = await BlogService.create(data);
      res.json(createdBlog);
    } catch (ex) {
      next(ex);
    }
  }

  async findAll(req, res, next) {
    try {
      const BlogData = await BlogService.findAll();
      res.json(BlogData);
    } catch (e) {
      next();
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const blogData = await BlogService.findById(id);
      res.json(blogData);
    } catch (e) {
      next();
    }
  }

  async update(req, res, next) {
    try {
        const { id } = req.params;
        const { title,body,category,author } = req.body
      const blogData = await BlogService.update(id,title);
      res.json(blogData);
    } catch (e) {
      next();
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.params;
      const blogData = await BlogService.delete(id);
      res.json(blogData);
    } catch (e) {
      next();
    }
  }
}



module.exports = new BlogController();
