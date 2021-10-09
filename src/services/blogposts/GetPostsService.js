const { BlogPost, User, Category } = require('../../models');

class GetPostsService {
  static async handle() {
    try {
      const blogPosts = await BlogPost.findAll({
        include: [
          { model: User, as: 'user' },
          { model: Category, as: 'categories' },
        ],
      });

      if (!blogPosts) return null;

      return blogPosts;
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = GetPostsService;
