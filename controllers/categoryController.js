const { Category } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;
   const createdCategory = await Category.create({ name });
   return res.status(201).json(createdCategory); 
};

const getAllCategories = async (_req, res) => Category.findAll(
  { attributes: ['id', 'name'] },
).then((Categories) => res.status(200).json(Categories))
.catch((error) => {
  console.log(error);
  res.status(404).json(error);
});

module.exports = {
  create,
  getAllCategories,
};
