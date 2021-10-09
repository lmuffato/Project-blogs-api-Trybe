const { BlogPost } = require('../../models');

class DeletePostService {
  constructor(id, requestId) {
    this.id = id;
    this.requestId = requestId;
  }

  async getPost() {
    try {
      const post = await BlogPost.findByPk(this.id);

      console.log(post);

      return post;
    } catch (e) {
      console.error(e);
      return { isError: true };
    }
  }

  async handle() {
    try {
      const post = await this.getPost();

      if (!post) return { noPost: true };

      if (post.isError) throw Error;

      if (post.userId !== this.requestId) return { invalidUser: true };

      await post.destroy();

      return { isDeleted: true };
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = DeletePostService;
