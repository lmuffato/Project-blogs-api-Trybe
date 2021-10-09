const { BlogPost, Category } = require('../../models');

class EditPostService {
  constructor(id, requestId, { title, content }) {
    this.id = id;
    this.post = { title, content };
    this.requestId = requestId;
  }

  parsedPost(post) {
    return {
      title: this.post.title,
      content: this.post.content,
      userId: post.userId,
      categories: post.categories.map((p) => ({ id: p.id, name: p.name })),
    };
  }

  async getPost() {
    try {
      const post = await BlogPost.findByPk(this.id, {
        include: [{ model: Category, as: 'categories' }],
        attributes: { exclude: ['published', 'updated'] },
      });

      return post;
    } catch (e) {
      console.error(e);
      return { isError: true };
    }
  }

  async handle() {
    try {
      const post = await this.getPost();

      if (post.isError) throw Error;

      if (post.userId !== this.requestId) return { invalidUser: true };

      post.title = this.post.title;
      post.content = this.post.content;
      await post.save();

      return this.parsedPost(post);
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = EditPostService;
