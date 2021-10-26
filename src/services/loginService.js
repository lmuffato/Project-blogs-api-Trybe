const userModel = require('../models/userModel');
const { httpStatusCode, errors } = require('../utils/errors');
const generateToken = require('../utils/generateToken');
const validadeLoginFields = require('../validations/loginValidations');

module.exports = {
  async login(email, password) {
    const errorMessage = await validadeLoginFields(email, password);

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

};