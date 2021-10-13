const { CREATED } = require('http-status-codes');
const { create } = require('../services/userService');

const createNewUser = async (req, res, next) => {
  try {
    const newUser = await create(req.body);
    if (newUser) return res.status(CREATED).json({ token: newUser.token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createNewUser,
};