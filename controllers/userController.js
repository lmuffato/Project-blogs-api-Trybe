const rescue = require('express-rescue');
const { StatusCodes: { CREATED, OK } } = require('http-status-codes');
const service = require('../services/userService');

const createUser = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;
    const result = await service.createUser({
      displayName,
      email,
      password,
      image,
    });
    res.status(CREATED).json(result);
});

const findAll = rescue(async (req, res) => {
    const result = await service.findAll();
    res.status(OK).json(result);
});

const findById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await service.findById(id);
  if (result.error) return req.status(result.error.status).json({ message: result.error.message });
  res.status(OK).json(result);
});

module.exports = {
  createUser,
  findAll,
  findById,
};