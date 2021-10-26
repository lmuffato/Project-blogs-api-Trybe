const jwt = require('jsonwebtoken');

const { errors, httpStatusCode } = require('../utils/errors');
const userModel = require('../models/userModel');
const { validadeFields, verifyUserEmail } = require('../validations/userValidations');
const validateToken = require('../validations/tokenValidations');

const { SECRET } = process.env;

function generateToken(id) {
  return jwt.sign({ id }, SECRET, {
    expiresIn: 86400,
  });
}

module.exports = {
  async createUser(displayName, email, password, image) {
    const errorMessage = validadeFields(email, password, displayName) 
    || await verifyUserEmail(email);

    if (errorMessage) {
      return { status: errorMessage.status ? errorMessage.status : httpStatusCode.badRequest,
        message: errorMessage.message,
      };
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

  async login(email, password) {
    const errorMessage = validadeFields(email, password);

    if (errorMessage) {
      return { status: httpStatusCode.badRequest, message: errorMessage.message };
    }

    const user = await userModel.findUserByEmail(email);

    if (user && user.password === password) {
      const token = generateToken(user.id);

      return {
        status: httpStatusCode.ok,
        token,
      };
    }

    return {
      status: httpStatusCode.badRequest,
      message: errors.loginError,
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
};
