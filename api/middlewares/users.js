const userSchema = require('../schemas/users');
const { clientErrors } = require('../utils/httpStatusCodes');

const validateUserPayload = (req, _res, next) => {
    const { displayName, email, password, image } = req.body;
    const { error } = userSchema.validate({ displayName, email, password, image });
    if (error) {
        const message = { message: error.details[0].message };
        const updatedError = { message, statusCode: clientErrors.badRequest };
      return next(updatedError);
    }
    return next();
};

module.exports = { validateUserPayload };