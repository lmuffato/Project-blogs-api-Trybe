const { BlogPost, User, Category } = require('../../models');

class GetPostByIdService {
  constructor(id) {
    this.id = id;
  }

  async handle() {
    try {
      const post = await BlogPost.findByPk(this.id, {
        include: [
          { model: User, as: 'user' },
          { model: Category, as: 'categories' },
        ],
      });

      return post;
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = GetPostByIdService;
