const rescue = require('express-rescue');
const validations = require('../middleware/validations');
const usersService = require('../services/usersService.js');

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

module.exports = {
  createUser,
};
