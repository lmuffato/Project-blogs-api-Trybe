const Joi = require('joi');
const { findCategory } = require('../controllers/categoryControllers');
const { 
  invalidEmail, 
  emailRequired, 
  nameRequired, 
  nameLength, 
  passwordLength, 
  passwordRequired,
  emptyEmail,
  emptyPassword,
  categoryIdNotFound,
  requiredTitle,
  requiredContent,
  requiredCategoryId,
} = require('./errorsList');

const joiEmail = Joi.string().email().required();

const validEmail = (req, res, next) => {
  const { email } = req.body;
  const emailIsValid = joiEmail.validate(email);

  if (!email) return res.status(emailRequired.status).json(emailRequired.message);
  if (emailIsValid.error) return res.status(invalidEmail.status).json(invalidEmail.message);

  next();
};

const joiName = Joi.string().min(8).required();

const validName = (req, res, next) => {
  const { displayName } = req.body;
  const nameIsValid = joiName.validate(displayName);

  if (!displayName) return res.status(nameRequired.status).json(nameRequired.message);
  if (nameIsValid.error) return res.status(nameLength.status).json(nameLength.message);

  next();
};

const joiPassword = Joi.string().min(6).max(6).required();

const validPassword = (req, res, next) => {
  const { password } = req.body;
  const passwordIsValid = joiPassword.validate(password);

  if (!password) return res.status(passwordRequired.status).json(passwordRequired.message);
  if (passwordIsValid.error) return res.status(passwordLength.status).json(passwordLength.message);

  next();
};

const validLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (email === '') return res.status(emptyEmail.status).json(emptyEmail.message);
  if (password === '') return res.status(emptyPassword.status).json(emptyPassword.message);

  if (!email) return res.status(emailRequired.status).json(emailRequired.message);
  if (!password) return res.status(passwordRequired.status).json(passwordRequired.message);

  next();
};

const validCategory = (req, res, next) => {
  const { categoryIds } = req.body;
  categoryIds.forEach(async (id) => {
    const category = await findCategory(id);
    if (!category) return res.status(categoryIdNotFound.status).json(categoryIdNotFound.message);
  });
  
  next();
};

const validCategoryIds = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(requiredCategoryId.status).json(requiredCategoryId.message);
  next();
};

const validTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(requiredTitle.status).json(requiredTitle.message);
  next();
};

const validContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(requiredContent.status).json(requiredContent.message);
  next();
};

module.exports = {
  validEmail,
  validName,
  validPassword,
  validLogin,
  validCategory,
  validCategoryIds,
  validTitle,
  validContent,
};
