module.exports = {
  alreadyRegistered: { code: 409, message: 'User already registered' },
  invalidFields: { code: 400, message: 'Invalid fields' },
  notFound: { code: 401, message: 'Token not found' },
  expiredOrInvalid: { code: 401, message: 'Expired or invalid token' },
};
