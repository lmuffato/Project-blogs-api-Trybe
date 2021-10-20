const blogPostSchema = require('../schemas/blogPostsSchema');
const { BlogPost, User, Category } = require('../models');

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

const getAllBlogPosts = async () => {
    const blogPosts = await BlogPost.findAll({
        include: [
          { model: User,
            as: 'user', 
            attributes: { exclude: ['password'] },
          },
          {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
          },
        ],

    });

    console.log(blogPosts);
    return blogPosts;
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
};