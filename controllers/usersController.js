const rescue = require('express-rescue');
const validations = require('../middleware/validations');
const usersService = require('../services/usersService.js');
const httpStatus = require('../middleware/httpCodes');

const createUser = [ 
  validations.nameValidate,
  validations.emailValidate,
  validations.passwordValidate,
  validations.emailAlreadyExists,
  rescue(async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await usersService.createUser({ displayName, email, password, image });

    return res.status(201).json(user);
}),
];

// requisito02
const login = [
  validations.empty,
  validations.emailValidate,
  validations.passwordValidate,
  validations.userNotRegistered,
  rescue(async (req, res) => {
    const { email, password } = req.body;
    const userLogin = await usersService.login({ email, password });
    return res.status(httpStatus.OK).json(userLogin);
  }),
];

module.exports = {
  createUser,
  login,
};
