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

exports.getAll = async (_req, res, next) => {
  try {
    const users = await userService.getAll();

    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.getOne(id);

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

exports.deleteMe = async (req, res, next) => {
  try {
    const { user: { id } } = req;

    await userService.deleteMe(id);

    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};
