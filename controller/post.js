const postService = require('../services/post');

const createPost = async (req, res) => {
    const { status, data, message } = await postService.createPost(req.body, req.user);
    if (message) return res.status(status).json({ message });
    res.status(status).json(data);
};

module.exports = { createPost };
