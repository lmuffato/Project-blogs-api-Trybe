const categoryService = require('../services/categoryService');
const { HTTP_CREATED_STATUS } = require('../helpers');

const createdCategory = async (req, res) => {
  try {
  const { name } = req.body;

  const create = await categoryService.createCategory(name);
  // console.log('🚀 ~ file: categoryController.js ~ line 9 ~ createdCategory ~ create', create);
  return res.status(HTTP_CREATED_STATUS).json(create);
  } catch (e) {
    console.log(e); 
  }
};

module.exports = {
  createdCategory,
};