const { BlogPosts } = require('../models');

module.exports = async (req, res, next) => { 
try {
  const { user } = req;
  const { id } = req.params;
  
  const post = await BlogPosts.findByPk(id);
  if (user.id !== post.dataValues.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  
  next();
} catch (error) {
  console.log(error);
  return res.status(401).json({ message: 'Sorry the API isnt working properly' });
  }
};