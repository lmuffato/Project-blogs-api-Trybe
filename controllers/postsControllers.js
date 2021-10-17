const postsServices = require('../services/postsServices');

const criarPosts = async (request, response) => {
  const post = await postsServices.criarPosts(request.body);
  if (post === 'não existe') {
    return response.status(400).json({ message: '"categoryIds" not found' });
  }

  return response.status(201).json(post);
};

module.exports = {
  criarPosts,
};