const blogPostServices = require('../services/blogPostServices');
const { ERROR_CATEGORY_NOT_FOUND } = require('../utils/errors');

const create = async (req, res) => {
  const createdPost = await blogPostServices.create(req.body);
  if (createdPost === ERROR_CATEGORY_NOT_FOUND.error.message) { // Lógica abstraída do código do projeto da Nath Zebral
    return res.status(ERROR_CATEGORY_NOT_FOUND.error.status)
      .json({ message: ERROR_CATEGORY_NOT_FOUND.error.message });
  }
  return res.status(201).json(createdPost);
};

module.exports = {
  create,
};
