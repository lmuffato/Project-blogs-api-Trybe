const { success } = require('../utils/httpStatusCodes');
const postsService = require('../services/posts');

const createPost = async (req, res, next) => {
    const { title, categoryIds, content } = req.body;
    const { userId } = req;
    const post = await postsService.createPost(title, categoryIds, content, userId);
    if (post.message) return next(post);
    return res.status(success.created).json(post);
};

const getPosts = async (req, res, _next) => {
    const posts = await postsService.getPosts();
    return res.status(success.ok).json(posts);
};

module.exports = { createPost, getPosts };