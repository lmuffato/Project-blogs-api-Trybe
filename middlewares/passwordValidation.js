function validatePassword(req, res, next) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  const passwordIsValid = password.length === 6;

  if (!passwordIsValid) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  
  next();
}

module.exports = {
  validatePassword,
};