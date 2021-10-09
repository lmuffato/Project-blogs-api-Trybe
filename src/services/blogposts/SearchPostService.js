const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../../models');

class SearchPostService {
  constructor(searchValue) {
    this.searchValue = searchValue;
  }

  async getPosts() {
    const includeOptions = [
      { model: Category, as: 'categories' },
      { model: User, as: 'user' },
    ];

    const findOptions = this.searchValue
      ? {
          where: {
            [Op.or]: [
              { title: { [Op.like]: `%${this.searchValue}%` } },
              { content: { [Op.like]: `%${this.searchValue}%` } },
            ],
          },
          include: includeOptions,
        }
      : { include: includeOptions };

    const posts = await BlogPost.findAll(findOptions);

    return posts;
  }

  async handle() {
    try {
      const posts = await this.getPosts();

      if (posts.isError) throw Error;

      return posts;
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = SearchPostService;
