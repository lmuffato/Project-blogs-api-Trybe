const { createBlogPost, getPostsByCategoryId } = require('../services/postServices');
const { postSchema } = require('../schemas/validatePostDatas');
const { HTTP_BAD_REQUEST, HTTP_CREATED_STATUS } = require('../utils/statusHTTP');
const { notFoundCategory } = require('../utils/errorMessages');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;
  const { message, code } = notFoundCategory;

  try {
    await postSchema.validate({ title, content, categoryIds });
  } catch (e) {
    return res.status(HTTP_BAD_REQUEST).json({ message: e.errors[0] });
  }
   
  const categories = await getPostsByCategoryId(categoryIds);
  if (!categories) return res.status(code).json({ message });

  const post = await createBlogPost({ title, content, userId });
  return res.status(HTTP_CREATED_STATUS).json(post);
};

module.exports = { createPost };
