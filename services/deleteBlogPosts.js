const { BlogPost } = require('../models');
const { checkIfPostExist, checkIfUserIsValid } = require('./checkUserPostId');

module.exports = async (id, userId) => {
  await checkIfPostExist(id);

  await checkIfUserIsValid(id, userId);

  await BlogPost.destroy({ where: { id } });
};