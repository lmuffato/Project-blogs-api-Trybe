const rescue = require('express-rescue');
const blogPostService = require('../services/blogPostsService');

const create = rescue(async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.payload;

    const blogPost = await blogPostService.createBlogPost(title, content, categoryIds, id);
 
    //   console.log(blogPost);
   
    if (blogPost.message) return res.status(blogPost.code).json({ message: blogPost.message });

    return res.status(201).json(blogPost);
}); 

const getAllBlogPosts = rescue(async (_req, res) => {
    const blogPost = await blogPostService.getAllBlogPosts();

    return res.status(200).json(blogPost);
});

module.exports = {
    create,
    getAllBlogPosts,
};