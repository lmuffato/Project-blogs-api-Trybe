const { validateInfo } = require('../middlewares/checkPostInfo');
const { User, BlogPost, Category } = require('../models');
const { getUserId } = require('../utils/getUserId');

const createPost = async ({ body: { title, content }, headers: { authorization } }) => {
  const userId = await getUserId(authorization);

  const newPost = await BlogPost
    .create({ title, content, userId, published: new Date(), updated: new Date() });

  return newPost;
};

const getAllPosts = async () => BlogPost.findAll({
  include: [
    {
      model: User, as: 'user',
    },
    {
      model: Category, as: 'categories',
    },
],
});

const getPostById = async (id) => BlogPost.findOne({
  where: { id },
  include: [
    {
      model: User, as: 'user',
    },
    {
      model: Category, as: 'categories',
    },
],
});

const updatePost = async (id, title, content, authorization) => {
  const userId = await getUserId(authorization);
  const { user } = await getPostById(id);

  if (userId !== user.id) {
    return ({ status: 401, message: 'Unauthorized user' });
  }

  const validatedTitle = validateInfo(title, 'title');

  if (validatedTitle) return validatedTitle;

  const validatedContent = validateInfo(content, 'content');

  if (validatedContent) return validatedContent; 
  
  await BlogPost.update({ title, content }, {
    where: { id },
  });

  const updatedPost = await getPostById(id);
  console.log(updatedPost);

  return updatedPost;
};

const deletePost = async (id, authorization) => {
  const post = await getPostById(id);
  const userId = await getUserId(authorization);

  if (!post) return ({ status: 404, message: 'Post does not exist' });

  if (post.userId !== userId) return ({ status: 401, message: 'Unauthorized user' });

  const deletedPost = await BlogPost.destroy({ where: { id } });

  return deletedPost;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
