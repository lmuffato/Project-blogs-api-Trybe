const { userService } = require('../services');
const { CREATED, OK } = require('../utils/statusCodeMap');

const create = async (req, res) => {
  const { displayName, email, password, image = '' } = req.body;

  const result = await userService.create({ displayName, email, password, image });

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await userService.login({ email, password });

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(OK).json(result);
};

const getAll = async (req, res) => {
  const result = await userService.gettAll();

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(OK).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await userService.getById(id);

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(OK).json(result);
};

module.exports = { create, login, getAll, getById };