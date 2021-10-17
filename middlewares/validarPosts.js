const { postsSchemas } = require('./schemas/postsSchemas');

const validarPosts = (request, response, next) => {
  const { error } = postsSchemas.validate(request.body);
  if (error) return response.status(400).json({ message: error.details[0].message });
  
  next();
};

module.exports = validarPosts;