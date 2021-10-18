const { body } = require('express-validator');
const errors = require('../utils/errors');

module.exports = {
  createUser: () => [
    body('displayName')
      .isLength({ min: 8 })
      .withMessage(errors.invalidNameLength),
    body('email')
      .exists()
      .withMessage(errors.emptyField('email'))
      .isEmail()
      .withMessage(errors.emailInvalidFormat),
    body('password')
    .exists()
    .withMessage(errors.emptyField('password'))
    .isLength({ min: 6 })
    .withMessage(errors.invalidPasswordLength),
  ],
};
