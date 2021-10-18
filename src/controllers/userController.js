const rescue = require('express-rescue');
const userService = require('../services/userService');

const createUser = rescue(async (req, res, next) => {
  const newUser = await userService.createUser(req.body);
  // console.log(newUser);

  if (newUser.code) return next(newUser);

  res.status(201).json({ token: newUser });
});

module.exports = {
  createUser,
};