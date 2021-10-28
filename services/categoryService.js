const ERROR = require('../helpers/errors');
const { Category } = require('../models');

const create = async ({ name }) => {
  if (!!name === false) return ERROR.NAME_IS_REQUIRED;
  const { dataValues } = await Category.create({ name });
  return dataValues;
};

module.exports = {
  create,
};
