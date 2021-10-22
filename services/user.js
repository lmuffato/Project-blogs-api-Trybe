const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { userValidation } = require('../utils/schema');

require('dotenv').config();

const { SEGREDO } = process.env;

const OK_STATUS = 200;
const CREATED_STATUS = 201;
const BAD_REQUEST_STATUS = 400;
const NOT_FOUND_STATUS = 404;
const CONFLICT_STATUS = 409;

// ------------------------------------ CREATE --------------------------------------------- //

const createUserService = async (displayName, email, password, image) => {
    const { error } = userValidation.validate({ displayName, email, password, image });

    if (error) return { status: BAD_REQUEST_STATUS, message: error.details[0].message };

    const checkEmail = await User.findOne({ where: { email } });

    if (checkEmail) return { status: CONFLICT_STATUS, message: 'User already registered' };

    const newUser = await User.create({ displayName, email, password, image });
    const { dataValues: { id, displayName: name, email: userEmail } } = newUser;
    const payload = { id, name, userEmail };

    const token = jwt.sign(payload, SEGREDO);

    return { status: CREATED_STATUS, data: { token } };
};

// ------------------------------------ GETALL --------------------------------------------- //

const getAllUsersService = async () => {
  const users = await User.findAll();
  return { status: OK_STATUS, data: users };
};

// ------------------------------------ GETBYID --------------------------------------------- //
const getUserByIdService = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    return {
      status: NOT_FOUND_STATUS,
      message: 'User does not exist',
    };
  }

  return { status: OK_STATUS, data: user };
};

module.exports = {
  createUserService,
  getAllUsersService,
  getUserByIdService,
};
