const errorMessages = {
  categoryCantEdit: 'Categories cannot be edited',
  categoryIdRequired: '"categoryIds" is required',
  categoryNotFound: '"categoryIds" not found',
  contentRequired: '"content" is required',
  emptyEmail: '"email" is not allowed to be empty',
  emptyPassword: '"password" is not allowed to be empty', 
  invalidEmail: '"email" must be a valid email',
  invalidFields: 'Invalid fields',
  invalidToken: 'Expired or invalid token',
  noEmail: '"email" is required',
  nameLength: '"displayName" length must be at least 8 characters long',
  nameRequired: '"name" is required',
  noPassword: '"password" is required',
  passwordLength: '"password" length must be 6 characters long',
  postNotExists: 'Post does not exist',
  titleRequired: '"title" is required',
  tokenNotFound: 'Token not found',
  unauthorizedUser: 'Unauthorized user',
  userExists: 'User already registered',
  userNotExists: 'User does not exist', 
};

module.exports = errorMessages;
