const { postSchema } = require('./schemas/postSchema');

const postValidation = (request, response, next) => {
  const post = request.body;
  const { error } = postSchema.validate(post);
  if (error) return response.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = postValidation;