const { categoryService } = require('../services');
const { CREATED, OK } = require('../utils/statusCodeMap');

const create = async (req, res) => {
  const { name } = req.body;

  const result = await categoryService.create(name);

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

const getAll = async (req, res) => {
  const result = await categoryService.gettAll();

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(OK).json(result);
};

module.exports = { create, getAll };