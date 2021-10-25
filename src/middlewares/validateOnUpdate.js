const { notEditable, unauthorized } = require('../utils/errors');

const validateOnUpdate = async (req, res, next) => {
  const { user, post } = req;

  if (req.body.categoryIds) {
    return res.status(notEditable.code).json({ message: notEditable.message });
  }

  if (post.userId !== user.id) {
    return res
      .status(unauthorized.code)
      .json({ message: unauthorized.message });
  }

  next();
};

module.exports = validateOnUpdate;
