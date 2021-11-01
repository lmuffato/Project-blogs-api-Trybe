const jwt = require('jsonwebtoken');

const {
    // ok,
    // created,
    // noContent,
    badRequest,
    unauthorized,
    // notFound,
    conflict,
} = require('./anwers');

const {
    shortName,
    emailInvalid,
    emailIsRequired,
    shortPassword,
    passwordIsRequired,
    emailRegistered,
    // invalidFields,
    noEmail,
    noPassword,
    noToken,
    invalidToken,
    // userNotExists,
    noName,
    noTitle,
    noContent,
    noCategoryId,
    categoryIdNotFound,
} = require('./messages');

const { getByEmail } = require('../controllers/users');
const { getCategoriesIds } = require('../controllers/categories');

const secretCode = process.env.JWT_SECRET;

const nameValidation = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(badRequest).json(shortName);
  }
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (email === '') return res.status(badRequest).json(noEmail);
  if (!email) return res.status(badRequest).json(emailIsRequired);
  const validEmail = regex.test(email);
  if (!validEmail) return res.status(badRequest).json(emailInvalid);
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (password === '') return res.status(badRequest).json(noPassword);
  if (!password) return res.status(badRequest).json(passwordIsRequired);
  if (password.length < 6) {
    return res.status(badRequest).json(shortPassword);
  }
  next();
};

const findEmail = async (req, res, next) => {
  const { email } = req.body;
  const [answer] = await getByEmail({ email });
  if (answer) return res.status(conflict).json(emailRegistered);
  next();
};

const tokenAuthentication = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(unauthorized).json(noToken);
  try {
    const { dataEmail: email } = jwt.verify(token, secretCode);
    const [answer] = await getByEmail({ email });
    const { id } = answer.dataValues;
    req.user = id;
    next();
  } catch (e) {
    return res.status(unauthorized).json(invalidToken);
  }
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(badRequest).json(noName);
  next();
};

const titleValidation = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(badRequest).json(noTitle);
  next();
};

const contentValidation = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(badRequest).json(noContent);
  next();
};

const categoryIdValidation = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(badRequest).json(noCategoryId);

  let check = true;
  await Promise.all(categoryIds.forEach(async (id) => {
    const answer = await getCategoriesIds(id);
    if (!answer) check = false;
  }));
  if (check === false) {
    return res.status(badRequest).json(categoryIdNotFound);
  }

  // const idValidation = await Promise.all(categoryIds.map(async (e) => (
  //   getCategoriesIds(e)
  // )));
  // const isValid = idValidation.every((e) => e.length !== 0);

  // if (!isValid) return res.status(badRequest).json(noCategoryId);
  next();
};

module.exports = {
  nameValidation,
  emailValidation,
  passwordValidation,
  findEmail,
  tokenAuthentication,
  validateName,
  titleValidation,
  contentValidation,
  categoryIdValidation,
};