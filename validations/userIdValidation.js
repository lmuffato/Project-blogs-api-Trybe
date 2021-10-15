const rescue = require('express-rescue');
const { User } = require('../models');

const userIdValidation = rescue(async (req, _res, next) => {
  const { id } = req.params;
  const result = await User.findByPk(id);
  // console.log(result, 'User Id - Validation');
  if (result === null) {
    next({ status: 404, message: 'User does not exist' });
  }
  next();
});

module.exports = {
  userIdValidation,
};
