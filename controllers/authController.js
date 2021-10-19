// const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
// const AppError = require('../utils/AppError');

// const { JWT_SECRET } = process.env;

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await userService.login({ email, password });

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
