const { createBlogPost, getPostsByCategoryId, getAllPosts } = require('../services/postServices');
const { postSchema } = require('../schemas/validatePostDatas');
const { HTTP_BAD_REQUEST, HTTP_CREATED_STATUS, HTTP_OK_STATUS } = require('../utils/statusHTTP');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;
  console.log(userId);

  try {
    await postSchema.validate({ title, content, categoryIds });
  } catch (e) {
    return res.status(HTTP_BAD_REQUEST).json({ message: e.errors[0] });
  }
   
//   const postsByIds = await getPostsByCategoryId(categoryIds);
//   if (!postsByIds) return res.status(400).json({ message: '"categoryIds" not found' });

  const post = await createBlogPost({ title, content, userId });
  return res.status(HTTP_CREATED_STATUS).json(post);
};

const getAllBlogPosts = async (_req, res) => {
  const posts = await getAllPosts();
  return res.status(HTTP_OK_STATUS).json(posts);
};

module.exports = { createPost, getAllBlogPosts };
