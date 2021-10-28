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

module.exports = {
  create,
};
