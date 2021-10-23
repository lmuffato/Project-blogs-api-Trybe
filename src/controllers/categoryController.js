const categoryService = require('../services/categoryService');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const { authorization: token } = req.headers;
  const { status, response } = await categoryService.addCategory(name, token);
  return res.status(status).json(response);
};

module.exports = {
  addCategory,
};
