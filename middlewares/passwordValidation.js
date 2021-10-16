const BAD_REQUEST = 400;

function validatePassword(req, res, next) {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(BAD_REQUEST).json({ message: '"password" is required' });
  }

  if (!password.length) {
    return res.status(BAD_REQUEST).json({ message: '"password" is not allowed to be empty' });
  }

  const passwordIsValid = password.length === 6;

  if (!passwordIsValid) {
    return res.status(BAD_REQUEST).json({ message: '"password" length must be 6 characters long' });
  }
  
  next();
}

module.exports = {
  validatePassword,
};