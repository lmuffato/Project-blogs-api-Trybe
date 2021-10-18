const { Category } = require('../models'); 

const getAll = async () => {
  const bPost = await Category.findAll({});
  console.log('🚀 ~ file: blogPostsService.js ~ line 5 ~ getAll ~ bPost', bPost);
  return bPost;
};

module.exports = {
  getAll,
};
