const rescue = require('express-rescue');

const services = require('../services/createUser');

const createUser = rescue(async (req, res) => {
  // const { displayName, email, password, image } = req.body;
  // console.log(displayName, email, password, image, 'uuuuuuuuuser');

  const result = await services.createUser(req.body);
  
  res.status(201).json(result);
});

const findAllUsers = rescue(async (req, res) => {
  const result = await services.findAllUsers();
  res.status(200).json(result);
});

const findUserById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await services.findUserById(id);
  console.log(result, 'controller');
  
  res.status(200).json(result);
});

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
};
