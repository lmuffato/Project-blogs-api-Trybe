const { BlogPost } = require('../models');
const httpStatus = require('../utils/httpStatus');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const newBlogPost = await BlogPost.create({ title, content, categoryIds })
  .then((newPost) => res.status(httpStatus.HTTP_CREATE_STATUS).json(newPost))
  .catch((e) => console.log(e));
  
  return newBlogPost;
};

module.exports = {
  create,
};
