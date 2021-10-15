const { Categories } = require('../models');
// const userSchema = require('../schema/userSchema');

const HTTP_BAD_STATUS = 400;
const HTTP_CONFLICT_STATUS = 409;
// const HTTP_NOT_FOUND_STATUS = 404;

const insert = async (name) => {
  if (!name) return ({ code: HTTP_BAD_STATUS, message: '"name" is required' });

  const alreadyExists = await Categories.findOne({ where: { name } });
  if (alreadyExists) return ({ code: HTTP_CONFLICT_STATUS, message: 'category already exists' });
  const newCategory = await Categories.create({ name });
  const { dataValues } = newCategory;

  return dataValues;
};

const findAll = async () => {
  const categories = await Categories.findAll();

  return categories;
};

module.exports = {
  insert,
  findAll,
};
