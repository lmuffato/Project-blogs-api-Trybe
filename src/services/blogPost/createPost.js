const { BlogPost } = require('../../models');
const blogPostSchema = require('../../schemas/blogPost');
const BlogPostAllCategoryIdExists = require('../../utils/BlogPostAllCategoryIdExists');

const postCategoryService = require('../postCategory');

module.exports = async (newPostData) => {
  const { error } = blogPostSchema.blogPostValidations(newPostData);

  if (error) return { status: 400, message: error.details[0].message };

  const post = await BlogPostAllCategoryIdExists(newPostData.categoryIds);

  if (!post) return { status: 400, message: '"categoryIds" not found' };

  const createdPost = await BlogPost.create(newPostData);

  newPostData.categoryIds.forEach(async (categoryId) => {
    await postCategoryService.fillPostCategory({ postId: createdPost.id, categoryId });
  });
  
  return createdPost;
};