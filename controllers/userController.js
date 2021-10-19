const userService = require('../services/userService');

exports.create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await userService.create({ displayName, email, password, image });

    return res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const users = await userService.getAll();

    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
