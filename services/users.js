const { User } = require('../models');
const createToken = require('../auth/jwtFunctions');
const validations = require('../validations/usersValidations');
const { httpStatusCode } = require('../utils/errors');

const create = async ({ displayName, email, password, image }) => {
  const validateDisplayName = validations.validateDisplayName(displayName);
  if (validateDisplayName) return validateDisplayName;

  try {
    await User.create(displayName, email, password, image);
    // console.log('returno do model User:', teste);
    const token = createToken.create(email);
    // console.log('retorno da funcao create token:', token);
    return { status: httpStatusCode.ok, token };
  } catch (e) {
    return { status: httpStatusCode.badRequest, message: e.message };
  }
};

module.exports = {
  create,
};