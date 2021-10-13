const rescue = require('express-rescue');
const { StatusCodes: { CREATED, OK } } = require('http-status-codes');
const service = require('../services/userService');

const createUser = rescue(async (req, res) => {
  // try {
    const { displayName, email, password, image } = req.body;
      const result = await service.createUser({
        displayName,
        email,
        password,
        image,
      });
      res.status(CREATED).json(result);
  // } catch (error) {
  //   console.log(error.message);
  //   res.status(500).json({ message: 'Algo deu errado' });
  // }
});

const findAll = rescue(async (req, res) => {
    const result = await service.findAll();
    res.status(OK).json(result);
});

module.exports = { 
  createUser,
  findAll,
};