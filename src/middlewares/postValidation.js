const { newPostSchema, updatePostSchema } = require('./schemas/postSchema');

module.exports = async (req, res, next) => {
  const post = req.body;
  const { id } = req.params;

  const schema = id ? updatePostSchema : newPostSchema;

  console.log(post);

  const { error } = schema.validate(post);

  if (error) {
    return next({ code: 400, message: error.details[0].message });
  }

  next();
};