const Joi = require('joi');
const rescue = require('express-rescue');
const validate = require('../middlewares/validate');
const UserService = require('../services/UserServices');

const createUser = [
  validate(Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string(),
  })),
  rescue(async (req, res, next) => {
    const { displayName, email, password, image } = req.body;

    const token = await UserService.createUser({ displayName, email, password, image });

    if (token.error) return next(token.error);

    return res.status(201).json({ token });
  }),
];

module.exports = {
  createUser,
};