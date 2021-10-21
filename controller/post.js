const postService = require('../services/post');

const createPost = async (req, res) => {
    const { status, data, message } = await postService.createPost(req.body, req.user);
    if (message) return res.status(status).json({ message });
    res.status(status).json(data);
};

const getAllPost = async (req, res) => {
    const { status, data } = await postService.getAllPost();
    res.status(status).json(data);
};

const getByIdPost = async (req, res) => {
    const { status, data, message } = await postService.getByIdPost(req.params.id);
    if (message) return res.status(status).json({ message });
    res.status(status).json(data);
};

module.exports = { createPost, getAllPost, getByIdPost };
