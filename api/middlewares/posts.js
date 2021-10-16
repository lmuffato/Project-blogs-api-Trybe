const postSchema = require('../schemas/posts');
const { clientErrors } = require('../utils/httpStatusCodes');

const validatePayloadPost = (req, res, next) => {
    const { title, categoryIds, content } = req.body;

    const { error } = postSchema.validate({ title, categoryIds, content });

    if (error) {
        const { message } = error;
        const updatedError = { message, statusCode: clientErrors.badRequest };
        return next(updatedError);
    }
    return next();
};

module.exports = validatePayloadPost;