const joi = require('joi');

const newCategoryValidate = joi.object({
  name: joi.string().required(),
});

module.exports = {
  newCategoryValidate,
};