const userSchema = require('../schemas/users');
const loginSchema = require('../schemas/login');
const { clientErrors } = require('../utils/httpStatusCodes');
const newError = require('../utils/createErrorMessage');

const validateUserPayload = (req, _res, next) => {
    const { displayName, email, password, image } = req.body;
    const { error } = userSchema.validate({ displayName, email, password, image });
    if (error) {
        const { message } = error.details[0];
        const updatedError = { message, statusCode: clientErrors.badRequest };
        return next(updatedError);
    }
    return next();
};

const validateLoginPayload = (req, res, next) => {
    const { email, password } = req.body;
    const { error } = loginSchema.validate({ email, password });
    if (error) {
        const { message } = error.details[0];
        const updatedError = { message, statusCode: clientErrors.badRequest };
        return next(updatedError);
    }
    return next();
};

module.exports = { validateUserPayload, validateLoginPayload };