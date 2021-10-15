const { BlogPosts } = require('../models');

const createPost = async (req, res) => { 
    const { title, content } = req.body;
    const { dataValues } = await BlogPosts.create({ title, content });
    return res.status(201).json({ ...dataValues, userId: req.userId });
};

module.exports = {
    createPost,
};
