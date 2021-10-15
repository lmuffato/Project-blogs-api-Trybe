const categorySchema = require('../schemas/categories');
const { clientErrors } = require('../utils/httpStatusCodes');

const validateCategoryPayload = (req, res, next) => {
    const { name } = req.body;

    const { error } = categorySchema.validate({ name });
    console.log(error);
    if (error) {
        const { message } = error.details[0];
        const updatedError = { message, statusCode: clientErrors.badRequest };
        return next(updatedError);
    }
    return next();
};

module.exports = validateCategoryPayload;