const { postService } = require('../services');
const { CREATED, OK } = require('../utils/statusCodeMap');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { token } = req;

  const result = await postService.create({ title, content, categoryIds }, token);

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

const getAll = async (_req, res) => {
  const result = await postService.getAll();

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(OK).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await postService.getById(id);

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(OK).json(result);
};

module.exports = { create, getAll, getById };