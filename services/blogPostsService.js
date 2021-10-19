const blogPostSchema = require('../schemas/blogPostsSchema');
const { BlogPost } = require('../models');

const createBlogPost = async (title, content, categoryIds, userId) => {
    const existTitle = blogPostSchema.validateTitle(title);
    const existContent = blogPostSchema.validateContent(content);
    const existCategoryId = await blogPostSchema.validateCategoryId(categoryIds);

    if (existCategoryId) return existCategoryId;
    if (existTitle) return existTitle;
    if (existContent) return existContent;

    const getBlogPost = await BlogPost.create({ title, content, userId });

    return getBlogPost;
};

module.exports = {
    createBlogPost,
};