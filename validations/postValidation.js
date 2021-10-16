const rescue = require('express-rescue');

const { Category } = require('../models');
const { postSchema } = require('../schema/postSchema');

const postValidation = rescue(async (req, _res, next) => {
  const { error } = postSchema.validate(req.body);

  // console.log(req.body, 'validation');
  // console.log(error, 'error');

  if (error) next({ status: 400, message: error.message });

  next();
});

const categoryIdValidation = rescue(async (req, _res, next) => {
  const { categoryIds } = req.body;
  // não sei como verificar todas ids do array :(
  const categoryExists = await Category.findByPk(categoryIds[0]);
  if (!categoryExists) next({ status: 400, message: '"categoryIds" not found' });
  
  next();
});

module.exports = {
  postValidation,
  categoryIdValidation,
};