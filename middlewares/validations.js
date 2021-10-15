const validateName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8 || !displayName) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validateEmailRequired = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400)
      .json({ message: '"email" is required' });
  }

  next();
};

const validateEmailFormat = (req, res, next) => {
  const { email } = req.body;
  const validEmail = (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email));
  if (!validEmail) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  console.log(password);

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = {
  validateName,
  validateEmailRequired,
  validateEmailFormat,
  validatePassword,
};
