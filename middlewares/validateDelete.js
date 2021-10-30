const { getPostS } = require('../services/postService');
const { findByEmailS } = require('../services/userService');

const authDelete = async (req, res, next) => {
  const { email } = req.user;
  const { id } = req.params;
  const foundUser = await findByEmailS(email);
  const { id: userId } = foundUser; // userId vindo do token
  try {
    const post = await getPostS(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    if (post.userId !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    next();
  } catch (_error) {
    return res.status.json({ message: 'Erro interno' });
  }
};

module.exports = {
  authDelete,
};