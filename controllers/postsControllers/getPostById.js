const rescue = require('express-rescue');
const { StatusCodes: { OK, NOT_FOUND } } = require('http-status-codes');
const { BlogPost, User, Category } = require('../../models');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', attributes: ['id', 'name'] }],
  });

  if (!post) {
    res.status(NOT_FOUND).json({ message: 'Post does not exist' });
  }

  res.status(OK).json(post);
});
