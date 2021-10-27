const { UNAUTHORIZED } = require('../utils/statusCode');
const { ValidateError } = require('../utils');
const { Post } = require('../services');

module.exports = async (req, _res, next) => {
  const { userId } = req;
  const { id } = req.params;
  
  Post.getById(id)
      .then((result) => {
        if (result.userId !== userId) return next(ValidateError(UNAUTHORIZED, 'Unauthorized user'));
      })
      .catch((err) => next(err));

  next();
};