const validateName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
  };

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === '') res.status(400).json({ message: '"email" is not allowed to be empty' });
  if (!email) res.status(400).json({ message: '"email" is required' });
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) res.status(400).json({ message: '"email" must be a valid email' });
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password === '') res.status(400).json({ message: '"password" is not allowed to be empty' });
  if (!password) res.status(400).json({ message: '"password" is required' });
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
