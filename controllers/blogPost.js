const { BlogPost } = require('../models');
const httpStatus = require('../utils/httpStatus');

const create = async (req, res) => {

  const { title, content, categoryIds } = req.body;

  await BlogPost.create({ title, content, categoryIds })
  .then((newPost) => res.status(httpStatus.HTTP_CREATE_STATUS).json(newPost))
  .catch((e) => console.log(e));
};

module.exports = {
  create,
};
