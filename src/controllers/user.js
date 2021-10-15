const { StatusCodes } = require('http-status-codes');
const services = require('../services');

async function register(req, res, next) {
  const userFields = req.body;
  const validateUser = services.validations.user(userFields);
  if (validateUser.error) next({ code: validateUser.code, message: validateUser.error });

  const token = '123';
  return res.status(StatusCodes.CREATED).json({ token });
}

module.exports = {
  register,
};
