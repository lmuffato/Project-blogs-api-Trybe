const errors = {
  alreadyExists: { code: 409, message: 'User already registered' },
  serverError: { code: 500, message: 'Internal Server Error' },
  invalidFields: { code: 400, message: 'Invalid fields' },
  tokenNotFound: { code: 401, message: 'Token not found' },
  tokenInvalid: { code: 401, message: 'Expired or invalid token' },
  userNotExists: { code: 404, message: 'User does not exist' },
  categoryIdsNotFound: { code: 400, message: '"categoryIds" not found' },
  postNotExist: { code: 404, message: 'Post does not exist' },
  categoriesCannot: { code: 400, message: 'Categories cannot be edited' },
  unautUser: { code: 401, message: 'Unauthorized user' },
  noPost: { code: 404, message: 'Post does not exist' },
};

module.exports = { errors };
