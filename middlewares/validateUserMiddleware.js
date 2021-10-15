const { BlogPosts } = require('../models');

const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_UNAUTHORIZED_STATUS = 401;

module.exports = async (req, res, next) => { 
try {
  const { user } = req;
  const { id } = req.params;
  
  const post = await BlogPosts.findByPk(id);
  console.log(post);
  if (!post) return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Post does not exist' });
  if (user.id !== post.dataValues.userId) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Unauthorized user' });
  }
  
  next();
} catch (error) {
  console.log(error);
  return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Sorry the API isnt working properly' });
  }
};