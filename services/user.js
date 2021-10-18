const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { userValidation } = require('../utils/schema');

const { SEGREDO } = process.env;

const OK_STATUS = 200;
const CREATED_STATUS = 201;
const BAD_REQUEST_STATUS = 400;
const CONFLICT_STATUS = 409;

// ------------------------------------ CREATE --------------------------------------------- //

const createUserService = async (displayName, email, password, image) => {
    const { error } = userValidation.validate({ displayName, email, password, image });

    if (error) {
      return {
        status: BAD_REQUEST_STATUS,
        message: error.details[0].message,
      };
    }

    const checkEmail = await User.findOne({ where: { email } });

    if (checkEmail) {
      return {
        status: CONFLICT_STATUS,
        message: 'User already registered',
      };
    }

    const newUser = await User.create({ displayName, email, password, image });
    const token = jwt.sign({ data: newUser.dataValues }, SEGREDO);

    return { status: CREATED_STATUS, data: { token } };
};

// ------------------------------------ GETALL --------------------------------------------- //

const getAllUsersService = async () => {
  const users = await User.findAll();
  return { status: OK_STATUS, data: users };
};

module.exports = {
  createUserService,
  getAllUsersService,
};
