const { post } = require("../model/Post");

class PostService {
  async create(payload) {
    try {
      data = await post.create(payload);

      return data;
    } catch (err) {
      return err;
    }
  }

  async findAll() {
    data = await post.findAll();
    return data;
  }
}

module.exports = new PostService();
