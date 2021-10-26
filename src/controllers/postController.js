const postService = require('../services/postService');

module.exports = {
  async create(req, res) {
    const { title, content, categoryIds } = req.body;
    const token = req.headers.authorization;

    try {
      const response = await postService.createPost(
        token,
        title,
        content,
        categoryIds,
      );
      const responseMessage = response.post ? response.post : { message: response.message };

      return res.status(response.status).json(responseMessage);
    } catch (err) {
      return {
        status: 401,
        message: err.message,
      };
    }
  },

  async index(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;

    if (id) {
      const response = await postService.getPost(token, id);

      return res
        .status(response.status)
        .json(response.post ? response.post : { message: response.message });
    }

    const response = await postService.getPost(token);

    return res
      .status(response.status)
      .json(response.allPosts ? response.allPosts : { message: response.message });
  },
};
