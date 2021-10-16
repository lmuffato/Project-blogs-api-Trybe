const rescue = require('express-rescue');
const { categorySchema } = require('../schema/categorySchema');

const categoryValidation = rescue(async (req, res, next) => {
  const { name } = req.body;
  // console.log(req.body, 'BODYYYY');
  // console.log(name, 'nameee');
  const { error } = categorySchema.validate({ name });
  if (error) next({ message: error.details[0].message, status: 400 });
  
  next();
});

module.exports = { 
  categoryValidation,
};