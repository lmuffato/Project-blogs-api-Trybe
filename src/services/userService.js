require('dotenv/config');

const { User } = require('../../models');

const generateToken = require('../utils/generateToken');
const httpStatusCode = require('../utils/httpStatusCode');
const errors = require('../utils/errors');
const validateToken = require('../validations/token/validateToken');
const validadeFields = require('../validations/user/validateFields');
const verifyUserEmail = require('../validations/user/verifyEmail');

module.exports = {
  async createUser(displayName, email, password, image) {
    const errorMessage = await validadeFields(email, password, displayName) 
    || await verifyUserEmail(email);

    const status = errorMessage 
    && errorMessage.status ? errorMessage.status : httpStatusCode.badRequest;

    if (errorMessage) {
      return { status, message: errorMessage.message };
    } 
    
    const user = await User.create({
      displayName,
      email,
      password,
      image,
    });

    const token = generateToken(user.id);

    return {
      token,
      status: httpStatusCode.created,
    };
  },
 
  async getAllUsers(token) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    const users = await User.findAll();

    return {
      status: httpStatusCode.ok,
      users,
    };
  },

  async getUser(token, id) {
    const decodedToken = validateToken(token);

    if (!decodedToken.id) return decodedToken;

    const user = await User.findByPk(id);

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
