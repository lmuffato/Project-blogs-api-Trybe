const { BlogPost } = require('../../models');

module.exports = async (id, userId) => {
  const post = await BlogPost.findByPk(id);

  if (!post) return { status: 404, message: 'Post does not exist' };
  
  if (+userId !== post.userId) return { status: 401, message: 'Unauthorized user' };

  await BlogPost.destroy({ where: { id } });

  return {};
};