const { BlogPosts, User, Categories, PostsCategories } = require('../models');

async function getUserIdFromEmail(email) {
  const { id } = await User.findOne({ where: { email } });

  return id;
}

async function categoriesExists(categoryIds) {
  const categories = categoryIds.map(async (catId) => {
     const category = await Categories.findOne({ where: { id: catId } });
     return category;
  });

  const categoriesResolved = await Promise.all(categories);
  
  if (categoriesResolved.every((c) => c !== null)) return true;
  return false;
}

async function updatePostsCategories(postId, categoryIds) {
  const postsCategoriesPromises = categoryIds.map(async (catId) => {
    const postCatUpdate = await PostsCategories.create({ postId, categoryId: catId });
    return postCatUpdate;
  });

  await Promise.all(postsCategoriesPromises);
}

async function create({ title, categoryIds, content, email }) {
  const categoriesAreValid = await categoriesExists(categoryIds);
  
  if (!categoriesAreValid) {
    return { code: 400, message: '"categoryIds" not found' };
  }

  const userId = await getUserIdFromEmail(email);

  const createdBlogPost = await BlogPosts.create({
    title, content, userId,
  });

  await updatePostsCategories(createdBlogPost.id, categoryIds);

  return {
    code: 201,
    created: {
      id: createdBlogPost.id,
      userId,
      title,
      content,
    },
  };
}

async function getAll() {
  const posts = await BlogPosts.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ] },
  );

  return posts;
}

async function getById(id) {
  const post = await BlogPosts.findByPk(id,
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ] });

  if (!post) {
    return { code: 404, message: 'Post does not exist' };
  }

  return { code: 200, post };
}

async function editPost(id, title, content, email) {
  const userIdRequesting = await getUserIdFromEmail(email);

  const post = await BlogPosts.findByPk(id,
    { include: [
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ] });

  if (userIdRequesting !== post.userId) {
    return { code: 401, message: 'Unauthorized user' };
  }

  return {
    code: 200,
    editedPost: {
      title,
      content,
      userId: post.userId,
      categories: post.categories,
    },
  };
}

module.exports = {
  create,
  getAll,
  getById,
  editPost,
};