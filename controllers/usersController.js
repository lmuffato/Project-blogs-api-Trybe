const rescue = require('express-rescue');
const validations = require('../middleware/validations');
const validaToken = require('../middleware/token');
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

// requisito 03
const getAllUsers = [
  validaToken,
   async (_req, res) => {
    const users = await usersService.getAllUsers();
    return res.status(httpStatus.OK).json(users);
  }];

// requisito 04
const getUserById = [
  validaToken,
   rescue(async (req, res) => {
     const { id } = req.params;
     const user = await usersService.getUserById(id);
     if (!user) {
       return res.status(httpStatus.MOT_FOUND).json({ message: 'User does not exist' });
     }
     return res.status(httpStatus.OK).json(user);
   }),
 ];

module.exports = {
  createUser,
  login,
  getAllUsers,
  getUserById,
};
