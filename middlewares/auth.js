const { tokenValidation } = require('../security/auth');

async function isAuth(request, response, next) {
  const { authorization } = request.headers;

  if (!authorization) return response.status(401).json({ message: 'Token not found' });

  const tokenIsValid = await tokenValidation(authorization);
  if (!tokenIsValid) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }

  return next();
}

module.exports = { isAuth };
