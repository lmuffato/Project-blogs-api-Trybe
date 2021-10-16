const rescue = require('express-rescue');
const { StatusCodes: { CREATED, OK } } = require('http-status-codes');
const service = require('../services/postService');

const createPost = rescue(async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user.dataValues;

    const result = await service.createPost({
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

const findAllPosts = rescue(async (req, res) => {
  const result = await service.findAll();
  res.status(OK).json(result);
});

module.exports = { 
  createPost,
  findAllPosts,
};