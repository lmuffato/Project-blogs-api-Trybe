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

const getById = async (req, res) => {
        const { id } = req.params;

    const post = await BlogPosts.findByPk(id,
        {
        include: [
            { model: Users, as: 'user', attributes: { exclude: 'password' } },
            { model: Categories, as: 'categories', through: { attributes: [] } },
        ],
    });
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    res.status(200).json(post);
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
     await BlogPosts.update({
        title,
        content,
    },
     { where: { id } });
     const post = await BlogPosts.findByPk(id, {
         include: { model: Categories, as: 'categories', through: { attributes: [] } },
     });
      res.status(200).json(post);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    await BlogPosts.destroy({
        where: { id },
    });
    res.status(204).end();
};

module.exports = {
    createPost,
    getAll,
    getById,
    updatePost,
    deletePost,
};
