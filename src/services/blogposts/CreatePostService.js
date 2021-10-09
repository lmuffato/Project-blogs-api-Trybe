const { BlogPost } = require('../../models');
const { GetCategoriesService } = require('../categories');

class CreatePostService {
  constructor({ title, content, categoryIds, userId }) {
    this.blogpost = { title, content, categoryIds, userId };
  }

  checkCategoriesIds(categoriesIds) {
    const isValid = this.blogpost.categoryIds.every((categoryId) =>
      categoriesIds.includes(categoryId));

    return isValid;
  }

  async createBlogPost() {
    const { title, content, userId } = this.blogpost;

    const post = BlogPost.create({ title, content, userId });

    return post;
  }

  async handle() {
    try {
      const categories = await GetCategoriesService.handle();

      const categoriesIds = categories.map(({ dataValues }) => dataValues.id);

      const isValidsIds = this.checkCategoriesIds(categoriesIds);

      if (!isValidsIds) return { notFound: true };

      const post = this.createBlogPost();

      return post;
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = CreatePostService;
