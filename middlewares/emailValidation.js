function validateEmail(req, res, next) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  const emailRegex = /[a-z0-9]+@[a-z0-9]+(\.com)$/gi;
  const emailIsValid = emailRegex.test(email);

  if (!emailIsValid) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  
  next();
}

module.exports = {
  validateEmail,
};