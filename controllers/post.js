const { BlogPost, User, PostsCategory } = require('../models');

const createPost = async (_req, _res) => {
/*     const { title, content, categoryIds } = req.body;
    const { userId } = req.user;
    const published = new Date();
    const updated = new Date(); */

};

const getPost = async (req, res) => {
    const post = await BlogPost.findAll({
        include: [{
            model: User, 
            as: 'user',
            attributes: { exclude: ['password'] },
        }],
    });

    const postsCategory = await PostsCategory.findAll();

    return res.status(200).json({ ...post, postsCategory });
};

module.exports = { createPost, getPost };