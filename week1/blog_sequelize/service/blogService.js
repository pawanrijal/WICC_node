const { blog } = require("../lib/database-connection");

class BlogService {
  async create(blogData) {
    const returnData = await blog.create(blogData);
    return returnData;
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
     console.log(title)
        const blogData = await blog.update({
            title: title
        },{
            where: { id },
            
       attributes: { exclude: ["createdAt", "updatedAt"] },
     });
        return blogData
}

    async delete(id) {
        const blogData = await blog.destroy({
          where: { id },
          
        });
        return blogData;
    }
}

module.exports = new BlogService();