const nameValidator = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8 || typeof displayName !== 'string') {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const emailValidator = (req, res, next) => {
  const { email } = req.body;

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

if (emailPattern.test(email) === false) {
  return res.status(400).json({ message: '"email" must be a valid email' });
} if (!email) {
  return res.status(400).json({ message: '"email" is required' });
}

  next();
};

const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  } if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
};

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
}; 