// const { rescue } = require('express-rescue');
const { User } = require('../models');
const { createUser, getUserByEmail } = require('../services/userService');
const { userSchema } = require('../schemas/validateUserDatas');
const errorMessages = require('../utils/errorMessages');

const findAll = async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { message, code } = errorMessages.alreadyRegistered;

  try {
    await userSchema.validate({ displayName, email, password, image });
  } catch (e) {
    return res.status(400).json({ message: e.errors[0] });
  }

  const userByEmail = await getUserByEmail(email);
  if (userByEmail) return res.status(code).json({ message });

  const user = await createUser({ displayName, email, password, image });
  return res.status(201).json(user);
};

module.exports = { findAll, create };