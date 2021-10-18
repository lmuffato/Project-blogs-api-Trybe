const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NO_BODY_STATUS = 422;
const HTTP_400 = 400;
const HTTP_401 = 401;
const HTTP_409 = 409;
const HTTP_NOT_FOUND_STATUS = 404;

const invDisplayName = {
  message: '"displayName" length must be at least 8 characters long',
};

const invPassword = {
  message: '"password" length must be 6 characters long',
};

const ifPasswordExists = {
  message: '"password" is required',
};

const invEmail = {
  message: '"email" must be a valid email',
};

const ifEmailExists = {
  message: '"email" is required',
};

const userEmailExists = {
  message: 'User already registered',
};

const ifEmailIsEmpty = {
  message: '"email" is not allowed to be empty',
};

const ifPasswordIsEmpty = {
  message: '"password" is not allowed to be empty',
};

const invFields = {
  message: 'Invalid fields',
};

const tokenNotFound = {
  message: 'Token not found',
};

const invToken = {
  message: 'Expired or invalid token',
};

const userNotExists = {
  message: 'User does not exist',
};

const nameRequired = {
  message: '"name" is required',
};

module.exports = {
  HTTP_OK_STATUS,
  HTTP_CREATED_STATUS,
  HTTP_NO_BODY_STATUS,
  HTTP_400,
  HTTP_401,
  HTTP_409,
  HTTP_NOT_FOUND_STATUS,
  invDisplayName,
  invPassword,
  ifPasswordExists,
  invEmail,
  ifEmailExists,
  userEmailExists,
  ifEmailIsEmpty,
  ifPasswordIsEmpty,
  invFields,
  tokenNotFound,
  invToken,
  userNotExists,
  nameRequired,
};