const jwt = require('jsonwebtoken');

const { errors, httpStatusCode } = require('../utils/errors');
const userModel = require('../models/userModel');
const validadeFields = require('../validations/userValidations');

const { SECRET } = process.env;

function generateToken(id) {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 86400,
  });
}

module.exports = {
  async createUser(displayName, email, password, image) {
    const errorMessage = await validadeFields(email, password, displayName);

    if (errorMessage) {
      return {
        status: errorMessage.status ? errorMessage.status : httpStatusCode.badRequest,
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
      return {
        status: httpStatusCode.badRequest,
        message: errorMessage,
      };
    }

    return {
      status: httpStatusCode.badRequest,
      message: errors.loginError,
    };
  },

  async getAllUsers(token) {
    try {
      const decoded = jwt.decode(token, SECRET);

      if (decoded.id) {
        const users = await userModel.getAllUsers();

        return {
          status: httpStatusCode.ok,
          users,
        };
      }
    } catch (err) {
      return {
        status: httpStatusCode.unauthorized,
        message: 'Expired or invalid token',
      };
    }
  },

  async getUser(token, id) {
      const decoded = jwt.decode(token, SECRET);

      if (decoded.id) {
        const user = await userModel.getUserById(id);

        if (user) {
          return {
            status: httpStatusCode.ok,
            user,
          };
        }
      }
      return {
        status: httpStatusCode.unauthorized,
        message: 'Expired or invalid token',
      };
  },
};
