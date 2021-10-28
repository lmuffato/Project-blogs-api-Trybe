const postCategory = require('../services/postCategoryService');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const newPostCategory = await postCategory.create({
    title,
    content,
    categoryIds,
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

module.exports = {
  create,
  getPosts,
};
