const { Category } = require('../models');
const httpStatus = require('../utils/httpStatus');

// const errorCodes = require('../utils/errorCodes');

const create = async (req, res) => {
  const { name } = req.body;

  await Category.create({ name })
    .then((newCategory) => res.status(httpStatus.HTTP_CREATE_STATUS).json(newCategory))
    .catch((err) => console.log(err));
};

module.exports = {
  create,
};
