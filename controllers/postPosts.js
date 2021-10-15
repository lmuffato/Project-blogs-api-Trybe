const { BlogPost, User } = require('../models');
const { takeToken, postCategory } = require('../services');

const postPost = async (req, res) => {
    const { authorization } = req.headers;
    const { title, content, categoryIds } = req.body;    
    const token = takeToken(authorization);   
    const user = await User.findByPk(token.payload);
    const newPost = await BlogPost.create({ userId: (user.id), title, content });
    await postCategory(categoryIds, newPost.id);
    delete newPost.published;
    delete newPost.updated;
    return res.status(201).json(newPost);
};

module.exports = postPost;