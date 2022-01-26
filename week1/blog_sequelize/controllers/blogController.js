
const BlogService = require("../service/blogService");
const Joi = require('joi')
const SuccessResponse=require('../utils/helper')
class BlogController {
  async create(req, res, next) {
    try {
      const schema = Joi.object({
        id: Joi.number(),
        title: Joi.string().required().max(100),
        body: Joi.string().required().max(200),
        category: Joi.string().required(),
        author: Joi.string().required(),
      });

      const { error, value } = schema.validate(req.body);
      if (error) {
        next(error);
      } else {
        const data = value;
        const createdBlog = await BlogService.create(data);
        SuccessResponse(res,200,true,data,"Blog successfully created","Blog created")
      }
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
        const { title,body,category,author } = req.body
      const blogData = await BlogService.update(id,title);
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
}



module.exports = new BlogController();
