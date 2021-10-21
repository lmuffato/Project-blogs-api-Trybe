const { BlogPost, User, Category } = require('../models');

const createPost = async (_req, _res) => {
/*     const { title, content, categoryIds } = req.body;
    const { userId } = req.user;
    const published = new Date();
    const updated = new Date(); */

};

const getPost = async (req, res) => {
    const post = await BlogPost.findAll(
        {
            include: [
                { model: User, as: 'user', attributes: { exclude: ['password'] } },
                { model: Category, as: 'category' },
            ],   
        },
    );
    
    return res.status(200).json(post);
};

// 9 -> Falta excluir alguns atributos
const getPostById = async (req, res) => {
    const { id } = req.params;

    const post = await BlogPost.findOne(
        { 
            where: { id }, 
            include: [
                { model: User, as: 'user', attributes: { exclude: ['password'] } },
                { model: Category, as: 'category', attributes: ['id', 'name'] },
            ],
    },
    );

    if (post === null) return res.status(400).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
};

const editPostById = async (req, res) => {
    const { id } = req.params;
    const { title, content, categoryId } = req.body;
    const { userId } = req.user;

    if (!title) return res.status(400).json({ message: '"title" is required' });
    if (!content) return res.status(400).json({ message: '"content" is required' });
    if (categoryId) return res.status(400).json({ message: '"Categories" cannot be edited' });
    
    const findUser = await BlogPost.findOne(
        { include: [{
            model: Category, as: 'category', attributes: { exclude: ['PostsCategory'] },
        }] },
        { attributes: { exclude: ['id', 'published', 'updated'] } }, 
        { where: { id } },
        );

    if (findUser.dataValues.userId !== userId) {
        return res.status(401).json({ message: '"Unauthorized user' });
    }

    await BlogPost.update({ title, content }, { where: { id } });

    res.status(200).json(findUser);
};

module.exports = { createPost, getPost, getPostById, editPostById };