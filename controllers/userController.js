const userService = require('../services/userService');
const { User } = require('../models');

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const check = userService.check(data);

  if (check) return res.status(check.error).json({ message: check.err.message });
  const { displayName, email, password, image } = data;

  const allUsers = await User.findAll();

  const haveUser = allUsers.find((user) => email === user.email);

  if (haveUser) return res.status(409).json({ message: 'User already registered' });

  await User.create({ displayName, email, password, image });
  return res.status(201).json({ message: 'User Created' });
  } catch (err) {
    next({ status: 500, error: err });
  }
};

module.exports = {
  create,
};
