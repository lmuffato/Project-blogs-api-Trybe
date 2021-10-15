const joi = require('../middlewares/joiSchema');
const { User } = require('../models');

function createUser(data) {
  const { error } = joi.User.validate(data);
  if (error) {
    return { status: 400, error: error.details[0].message };
  }
  return false;
}
