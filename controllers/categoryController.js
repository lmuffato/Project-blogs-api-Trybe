const { categoryService } = require('../services');
const { CREATED } = require('../utils/statusCodeMap');

const create = async (req, res) => {
  const { name } = req.body;
  const { authorization: token } = req.headers;

  const result = await categoryService.create(name, token);

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

module.exports = { create };