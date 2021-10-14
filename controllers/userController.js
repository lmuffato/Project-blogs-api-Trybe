const rescue = require('express-rescue');

const services = require('../services/createUser');

const createUser = rescue(async (req, res) => {
  // const { displayName, email, password, image } = req.body;
  // console.log(displayName, email, password, image, 'uuuuuuuuuser');

  const result = await services.createUser(req.body);
  
  res.status(201).json(result);
});

module.exports = {
  createUser,
};
