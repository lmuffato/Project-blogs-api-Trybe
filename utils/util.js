const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const CheckUser = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().required().length(6),
  image: Joi.string(),
});

const checkLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validationToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const { data } = jwt.verify(authorization, JWT_SECRET);
    req.user = data;

    return next();
  } catch (_e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const checkCategories = Joi.object({
  name: Joi.string().required(),
});

const checkPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

module.exports = {
  CheckUser,
  checkLogin,
  validationToken,
  checkCategories,
  checkPost,
};