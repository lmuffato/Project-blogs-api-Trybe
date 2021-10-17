const postsServices = require('../services/postsServices');

const criarPosts = async (request, response) => {
  const post = await postsServices.criarPosts(request.body);
  if (post === 'não existe') {
    return response.status(400).json({ message: '"categoryIds" not found' });
  }

  return response.status(201).json(post);
};

/* const buscarPosts = async (_request, response, next) => {
  try {
    const buscar = await postsServices.buscarPosts();
    return response.status(200).json(buscar);
  } catch (e) {
    next({ statusCode: 400, message: e.message });
  }
}; */

const buscarPosts = async (_request, response) => {
  const posts = await postsServices.buscarPosts();

  return response.status(200).json(posts);
};

module.exports = {
  criarPosts,
  buscarPosts,
};