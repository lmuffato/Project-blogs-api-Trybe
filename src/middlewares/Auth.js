const { getContentBody } = require('../utils/auth');

class Auth {
  constructor(validations, validator) {
    this.validations = validations;
    this.validator = validator;
  }

  getAuth() {
    const auth = (req, _res, next) => {
      const validations = getContentBody(req.body, this.validations);

      const { error } = this.validator.validate(validations, {
        abortEarly: false,
      });

      if (error) {
        const err = { ...error, code: 400, isJoi: true };

        next(err);
      }

      next();
    };

    return auth;
  }
}

module.exports = Auth;
