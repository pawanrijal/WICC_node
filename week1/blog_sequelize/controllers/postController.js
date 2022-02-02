const PostService = require("../service/postService");

const SuccessResponse = require("../utils/helper");

class PostController {
  async create(req, res, next) {
    try {
      let data = Json.stringify(req.body);
      await PostService.create(data);
      SuccessResponse(res, 200, true, data, "Post", "Post created");
    } catch (err) {
      next(err);
    }
  }

  async findAll(req, res, next) {
    try {
      const data = await PostService.findAll();
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new PostController();
