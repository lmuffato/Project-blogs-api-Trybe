const { BlogPost } = require('../models');
const { getPostById, checkIfUserIsValid } = require('./checkUserPostId');

module.exports = async (id, userId, title, content) => {
  await checkIfUserIsValid(id, userId);

  await BlogPost.update({ title, content }, { where: { id } });
  
  const updatedPost = await getPostById(id);

  return updatedPost;
};