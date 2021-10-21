const { BlogPost, Category, PostsCategory, User } = require('../models');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { userId } = req.user;
    const published = new Date();
    const updated = new Date();

    // criar um post na tabela BlogPost
    const post = await BlogPost.create({ title, content, userId, published, updated });

    const found = categoryIds.every(async (categoryId) => {
        const result = await Category.findOne({ where: { id: categoryId } });
        return result === categoryId;
    });

    const prom = Promise.all(found);

    return res.status(200).send(prom);
};

const getPost = async (req, res) => {
    const post = await BlogPost.findAll({
        include: [{
            model: User, 
            as: 'user',
            attributes: { exclude: ['password', 'image'] },
        }],
    });

    return res.status(200).json(post);
};

module.exports = { createPost, getPost };