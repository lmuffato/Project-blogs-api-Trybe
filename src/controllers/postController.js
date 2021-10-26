const postService = require('../services/postService');

module.exports = {
  async create(req, res) {
    const { title, content, categoriesIds } = req.body;
    const token = req.headers.authorization;

    const response = await postService.createPost(
      token,
      title,
      content,
      categoriesIds,
    );

    return res
      .status(response.status)
      .json(response.post ? response.post : { message: response.message });
  },

  async index(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;

    if (id) {
      const response = await postService.getPosts(token, id);

      return res
        .status(response.status)
        .json(response.post ? response.post : { message: response.message });
    }

    const response = await postService.getPosts(token);

    return res
      .status(response.status)
      .json(response.posts ? response.posts : { message: response.message });
  },
};
