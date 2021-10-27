require('dotenv/config');

const { errors, httpStatusCode } = require('../utils/errors');

const userModel = require('../models/userModel');
const { User } = require('../../models');
const { validadeFields } = require('../validations/userValidations');

const { verifyUserEmail } = require('../validations/validations');
const validateToken = require('../validations/tokenValidations');

const generateToken = require('../utils/generateToken');

module.exports = {
  async createUser(displayName, email, password, image) {
    const errorMessage = await validadeFields(email, password, displayName) 
    || await verifyUserEmail(email);

    const status = errorMessage 
    && errorMessage.status ? errorMessage.status : httpStatusCode.badRequest;

    if (errorMessage) {
      return { status, message: errorMessage.message };
    } 
    
    const user = await userModel.createUser(
      displayName,
      email,
      password,
      image,
    );

    const token = generateToken(user.id);

    return {
      token,
      status: httpStatusCode.created,
    };
  },
 
  async getAllUsers(token) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    const users = await userModel.getAllUsers();

    return {
      status: httpStatusCode.ok,
      users,
    };
  },

  async getUser(token, id) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    const user = await userModel.getUserById(id);

    if (!user) {
      return {
        status: httpStatusCode.notFound,
        message: errors.userNotExistError,
      };
    }

    return {
      status: httpStatusCode.ok,
      user,
    };
  },

  async deleteUser(token) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    try {
      await User.destroy({ where: { id: decodedToken.id } });

      return {
        status: httpStatusCode.notContent,
      };
    } catch (err) {
      return {
        status: httpStatusCode.notFound,
        message: errors.userNotExistError,
      };
    }
  },
};
