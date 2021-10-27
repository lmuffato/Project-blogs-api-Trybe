const { BlogPost, User, Category } = require('../../models');

module.exports = {
  async createPost(userId, title, content) {
    const newPost = await BlogPost.create({
      userId,
      title,
      content,
    });

    return newPost;
  },

  async findPost(id) {
    if (id) {
      const post = await BlogPost.findOne({
        where: { id },
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      });

      return post;
    }

    const allPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return allPosts;
  },

  async updatePost(id, post) {
    try {
      await BlogPost.update(
        post,
        { where: { id } },
      );
  
      const updatedPost = this.findPost(id);

      return updatedPost;
    } catch (err) {
      console.log(err.message);
    }
  },

  async deletePost(id) {
    await BlogPost.destroy({ where: { id } });
  },
};
