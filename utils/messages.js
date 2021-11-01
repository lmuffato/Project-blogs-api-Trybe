const shortName = {
    message: '"displayName" length must be at least 8 characters long',
};

const emailInvalid = {
  message: '"email" must be a valid email',
};

const emailIsRequired = {
  message: '"email" is required',
};

const shortPassword = {
  message: '"password" length must be 6 characters long',
};

const passwordIsRequired = {
  message: '"password" is required',
};

const emailRegistered = {
  message: 'User already registered',
};

const invalidFields = {
  message: 'Invalid fields',
};

const noEmail = {
  message: '"email" is not allowed to be empty',
};

const noPassword = {
  message: '"password" is not allowed to be empty',
};

const noToken = {
  message: 'Token not found',
};

const invalidToken = {
  message: 'Expired or invalid token',
};

const userNotExists = {
  message: 'User does not exist',
};

const noName = {
  message: '"name" is required',
};
  
const noTitle = {
    message: '"title" is required',
};
  
const noContent = {
    message: '"content" is required',
};
  
const categoryIdNotFound = {
    message: '"categoryIds" not found',
};

const noCategoryId = {
    message: '"categoryIds" is required',
};

const postNotExist = {
  message: 'Post does not exist',
};

const categoriesNotEdited = {
  message: 'Categories cannot be edited',
};

module.exports = {
    shortName,
    emailInvalid,
    emailIsRequired,
    shortPassword,
    passwordIsRequired,
    emailRegistered,
    invalidFields,
    noEmail,
    noPassword,
    noToken,
    invalidToken,
    userNotExists,
    noName,
    noTitle,
    noContent,
    noCategoryId,
    categoryIdNotFound,
    postNotExist,
    categoriesNotEdited,
};
