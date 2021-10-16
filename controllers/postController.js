const rescue = require('express-rescue');
const { StatusCodes: { CREATED } } = require('http-status-codes');
// const service = require('../services/postService');
const { BlogPost } = require('../models');

const createPost = rescue(async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user.dataValues;

    const result = await BlogPost.create({
      title,
      content,
      userId,
      categoryIds,
    });
    console.log(title, content, userId, categoryIds);
    const { categoryIds: _, ...post } = result.dataValues;
    // console.log(post);
    // const post = { id, title, content, userId };
    res.status(CREATED).json(post);
});

module.exports = { 
  createPost,
};