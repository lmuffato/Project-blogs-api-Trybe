const { postSchema } = require('../schemas/postSchema');
const { STATUS_BAD_REQUEST } = require('../utils/msg');

const postValidation = (req, res, next) => {
  const blogPost = req.body;
  const { error } = postSchema.validate(blogPost);
  if (error) {
    return res.status(STATUS_BAD_REQUEST).json({
      message: error.details[0].message,
    });
  }
  return next();
};

module.exports = postValidation;