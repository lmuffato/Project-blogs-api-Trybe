const findAllPosts = require('./findAllPosts');

module.exports = async () => {
  const posts = await findAllPosts();
  return posts;
};