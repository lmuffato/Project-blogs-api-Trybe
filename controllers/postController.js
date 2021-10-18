const rescue = require('express-rescue');
const validaToken = require('../middleware/token');
const validations = require('../middleware/validations');
const postService = require('../services/postService');
const httpCodes = require('../middleware/httpCodes');

const createPost = [
  validations.validatePost,
  validations.isCategoryEmpty,
  validaToken,
  rescue(async (req, res) => {
    const { title, content } = req.body;
    const { id: userId } = req.user.dataValues;
    const post = await postService.createPost(title, content, userId);
    return res.status(httpCodes.CREATED).json(post);
  }),
];

module.exports = {
  createPost,
};