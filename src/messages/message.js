const message = {
  categoryidEmpty: '"categoryIds" is required',
  categoryIdNotFound: '"categoryIds" not found',
  contentEmpty: '"content" is required',
  displayNameShort: '"displayName" length must be at least 8 characters long',
  emailNotValid: '"email" must be a valid email',
  emailEmpty: '"email" is not allowed to be empty',
  emailRequired: '"email" is required',
  emailRegistered: 'User already registered',
  fieldsEmpty: 'Invalid fields',
  nameEmpty: '"name" is required',
  passwordEmpty: '"password" is not allowed to be empty',
  passwordShort: '"password" length must be 6 characters long',
  passwordRequired: '"password" is required',
  postEmpty: 'Post does not exist',
  titleEmpty: '"title" is required',
  tokenEmpty: 'Token not found',
  tokenInvalid: 'Expired or invalid token',
  userEmpty: 'User does not exist',
  userExist: 'User already registered',
};

module.exports = {
  message,
};
