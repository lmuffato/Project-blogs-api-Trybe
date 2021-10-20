const rescue = require('express-rescue');
const blogPostService = require('../services/blogPostsService');

const create = rescue(async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.payload;

    const blogPost = await blogPostService.createBlogPost(title, content, categoryIds, id);
   
    if (blogPost.message) return res.status(blogPost.code).json({ message: blogPost.message });

    return res.status(201).json(blogPost);
}); 

const getAllBlogPosts = rescue(async (_req, res) => {
    const blogPost = await blogPostService.getAllBlogPosts();

    return res.status(200).json(blogPost);
});

const getBlogPostById = rescue(async (req, res) => {
    const { id } = req.params;
    
    const blogPost = await blogPostService.getBlogPostById(id);

    if (!blogPost) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(blogPost);
});

/*
const updateBlogPost = rescue(async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.payload;

    const blogPost = await blogPostService.updateBlogPost(userId, title, content, categoryIds);
    
    if (blogPost.message) return res.status(blogPost.code).json({ message: blogPost.message });

    return res.status(200).json(blogPost);
});
*/

module.exports = {
    create,
    getAllBlogPosts,
    getBlogPostById,
 //   updateBlogPost,
};