const { BlogPost, User, Category } = require('../models');
const blogPostSchema = require('../utils/schemas/blogPostSchema');

const create = async (title, content, categoryIds, id) => {
  const validateBlogPost = await blogPostSchema.blogPostValidations(title, content, categoryIds);
  if (validateBlogPost.message) return validateBlogPost;

  const blogPost = await BlogPost.create({
    userId: id, title, content, published: new Date(), updated: new Date(),
  });
  return { status: 201, blogPost };
};

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  if (!blogPosts) return { status: 404, message: 'Posts not found' };
  return { status: 200, blogPosts };
};

module.exports = {
  create,
  getAll,
};