const postServices = require('../services/postServices');

const createPost = async (request, response) => {
  const post = await postServices.createPost(request.body);
  if (post === 'category not found') {
    return response.status(400).json({ message: '"categoryIds" not found' });
  }
  return response.status(201).json(post);
};

const getPosts = async (_request, response, next) => {
  try {
    const getPost = await postServices.getPosts();
    return response.status(200).json(getPost);
  } catch (error) {
    return next({ statusCode: 400, message: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
};
