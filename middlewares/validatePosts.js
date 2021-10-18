const { postsJoi } = require('./schema/postsJoi');

const validatePosts = (req, res, next) => {
  const { error } = postsJoi.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  
  next();
};

module.exports = validatePosts;