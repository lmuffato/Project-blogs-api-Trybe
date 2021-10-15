const rescue = require('express-rescue');
const { StatusCodes: { OK } } = require('http-status-codes');
const { BlogPost, User, Category } = require('../../models');

module.exports = rescue(async (req, res) => {
    const posts = await BlogPost.findAll({ include: [{ model: User, as: 'user' },
    { model: Category, as: 'categories', attributes: ['id', 'name'] }] });

    res.status(OK).json(posts);
  });
