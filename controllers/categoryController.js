const { Category } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;
   const createdCategory = await Category.create({ name });
   return res.status(201).json(createdCategory); 
};

module.exports = {
  create,
};
