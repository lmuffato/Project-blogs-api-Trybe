const BAD_REQUEST = 400;

function validateEmail(req, res, next) {
  const { email } = req.body;
  
  if (email === undefined) {
    return res.status(BAD_REQUEST).json({ message: '"email" is required' });
  }

  if (!email.length) {
    return res.status(BAD_REQUEST).json({ message: '"email" is not allowed to be empty' });
  }

  const emailRegex = /[a-z0-9]+@[a-z0-9]+(\.com)$/gi;
  const emailIsValid = emailRegex.test(email);

  if (!emailIsValid) {
    return res.status(BAD_REQUEST).json({ message: '"email" must be a valid email' });
  }
  
  next();
}

module.exports = {
  validateEmail,
};