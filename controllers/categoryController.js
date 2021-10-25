const categoryService = require('../services/categoryService');

const status = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  SERVER_ERROR: 500,
};

const addCategory = async (req, res) => {
  const { headers: { authorization: token }, body: { name: categoryName } } = req;
  
  const category = await categoryService.addCategory(token, categoryName);
  
  if (category.err) {
    return res.status(status[category.code]).json(category.err);
  }
  
  const { id, name } = category;
  
  return res.status(status.CREATED).json({ id, name });
};

const getAllCategory = async (req, res) => {
  const { headers: { authorization: token } } = req;
  
  const categories = await categoryService.getAllCategory(token);
  
  if (categories.err) {
    return res.status(status[categories.code]).json(categories.err);
  }
  
  res.status(status.OK).json(categories);
};

module.exports = {
  addCategory,
  getAllCategory,
};
