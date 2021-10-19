const AppError = require('../utils/AppError');

module.exports = (err, _req, res, _next) => {
  console.log('ERROR NAME: ', err.name);
  console.log(Object.keys(err));

  if (err instanceof AppError) {
    return res.status(err.code).json({ message: err.message });
  }

  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(409).json({ message: 'User already registered' });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  res.status(500).json({ message: 'Something went wront' });
};
