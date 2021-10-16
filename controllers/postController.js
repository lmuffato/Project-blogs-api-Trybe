const rescue = require('express-rescue');

const services = require('../services/postService');

const createPost = rescue(async (req, res) => {
    const { title, content } = req.body;
    // console.log(req.body, 'reqboooooodyyyyy');
    // console.log(req.user);
    const { id } = req.user;
    // console.log(req.user.dataValues.id, 'array do id');

    const userId = id; 
    const result = await services.createPost({ title, content, userId });

    console.log(result, 'controller result');
    const { updated, published, ...post } = result.dataValues;
    return res.status(201).json(post);
});

module.exports = {
  createPost,
};