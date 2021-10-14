const Joi = require('joi');
const { Category } = require('../models');

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const create = async (name) => {
  const { error } = categorySchema.validate({ name });

  if (error) return { status: 400, message: error.message };

  const result = await Category.create({ name });

  return { status: 201, result };
};

module.exports = {
  create,
};
