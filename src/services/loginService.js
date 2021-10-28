const { User } = require('../../models');
const errors = require('../utils/errors');
const httpStatusCode = require('../utils/httpStatusCode');
const generateToken = require('../utils/generateToken');
const validadeLoginFields = require('../validations/login/validateLoginFields');

module.exports = {
  async login(email, password) {
    const errorMessage = await validadeLoginFields(email, password);

    if (errorMessage) {
      return { status: httpStatusCode.badRequest, message: errorMessage.message };
    }

    const user = await User.findOne({ where: { email } });

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