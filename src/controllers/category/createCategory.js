const CategoryService = require('../../services/category');
const CategorySchema = require('../../schemas/categories');

module.exports = async (req, res) => {
  const { name } = req.body;

  const categoryExists = await CategorySchema.categoryExists(name);

  if (categoryExists.message) {
    return res
      .status(categoryExists.status).json({ message: categoryExists.message }); 
  }

  const createdCategory = await CategoryService.createCategory({ name });

  if (createdCategory.message) {
    return res
      .status(createdCategory.status).json({ message: createdCategory.message }); 
  }

  res.status(201).json(createdCategory);
};