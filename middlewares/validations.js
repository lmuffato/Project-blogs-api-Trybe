const httpStatus = require('../utils/httpStatus');
const errorCodes = require('../utils/errorCodes');

const categoryController = require('../controllers/category');

const validateEmailRequired = (req, res, next) => {
  const { email } = req.body;
   
  if (!email || email === '' || email === null) {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorEmailRequired);
  }

  next();
};

const validateEmailLogin = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorEmailRequired);
  }

  next();
};

const validateEmailIsNotEmpty = (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorEmailNotEmpty);
  }

  next();
};

const validateEmailFormat = (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  const validEmail = emailRegex.test(email);

  if (!validEmail) {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorEmailValid);
  }

  next();
};

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorDisplayName);
  }

  next();
};

const validatePasswordRequired = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorPasswordRequired);
  }
  next();
};

const validatePasswordNotEmpty = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorPasswordNotEmpty);
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length !== 6) {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorPassword);
  }

  next();
};

const validateCategoryName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorCategoryName);
  }

  next();
};

const validatePostTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title || title === '') {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorBlogPostTitle);
  }

  next();
};

const validatePostContent = (req, res, next) => {
  const { content } = req.body;

  if (!content || content === '') {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorBlogPostContent);
  }

  next();
};

const validatePostCategoryIds = (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorPostCategory);
  }

  next();
};

const validateCategoryIdExists = (req, res, next) => {
  const { categoryIds } = req.body;

  categoryIds.every(async (id) => {
    const verifyCategory = await categoryController.findOne(id);

    if (!verifyCategory || verifyCategory === null) {
      return res.status(httpStatus.BAD_REQUEST).json(errorCodes.errorCategoryIdNotFound);
    }

    return next();
  });
};

module.exports = {
  validateEmailRequired,
  validateEmailFormat,
  validateDisplayName,
  validatePasswordRequired,
  validatePassword,
  validateEmailLogin,
  validateEmailIsNotEmpty,
  validatePasswordNotEmpty,
  validateCategoryName,
  validatePostTitle,
  validatePostContent,
  validatePostCategoryIds,
  validateCategoryIdExists,
};
