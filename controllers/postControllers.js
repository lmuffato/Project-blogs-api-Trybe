const { BlogPosts, Users, Categories } = require('../models');

const createPost = async (req, res) => { 
    const { title, content } = req.body;
    const { dataValues } = await BlogPosts.create({ title, content });
    return res.status(201).json({ ...dataValues, userId: req.userId });
};

const getAll = async (req, res) => {
    const posts = await BlogPosts.findAll(
        { include: [
            { model: Users, as: 'user', attributes: { exclude: 'password' } },
            { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
        },
);
   res.status(200).json(posts);
};

module.exports = {
    createPost,
    getAll,
};
