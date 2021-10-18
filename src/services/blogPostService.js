const { BlogPost } = require('../models');
const blogPostSchema = require('../utils/schemas/blogPostSchema');

const create = async (title, content, categoryIds, id) => {
  const validateBlogPost = await blogPostSchema.blogPostValidations(title, content, categoryIds);
  if (validateBlogPost.message) return validateBlogPost;

  const blogPost = await BlogPost.create({
    userId: id, title, content, published: new Date(), updated: new Date(),
  });
  return { status: 201, blogPost };
};

module.exports = {
  create,
};