const { newPostSchema } = require('./schemas/postSchema');

module.exports = async (req, res, next) => {
  const post = req.body;
  console.log(post);
  const { error } = newPostSchema.validate(post);

  if (error) {
    return next({ code: 400, message: error.details[0].message });
  }

  next();
};