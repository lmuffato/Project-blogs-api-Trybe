const postCategory = require('../services/postCategoryService');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  const newPostCategory = await postCategory.create({
    title,
    content,
    categoryIds,
    token,
  });
  
  if (newPostCategory.message) {
    const { message, code } = newPostCategory;
    return res.status(code).json({ message });
  }

  const { post, code } = newPostCategory;
  return res.status(code).json(post);
};

const getPosts = async (req, res) => {
  const posts = await postCategory.getPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postCategory.getPostById(id);
  if (post.message) {
    const { message, code } = post;
    return res.status(code).json({ message });
  }
  return res.status(200).json(post);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const deletedPost = await postCategory.deleteById(id, token);
  if (deletedPost.message) {
    const { message, code } = deletedPost;
    return res.status(code).json({ message });
  }
  return res.status(204).end();
};

module.exports = {
  create,
  getPosts,
  getPostById,
  deleteById,
};
