const {
  HTTP_BAD_REQUEST,
} = require('../../status');

const validateDisplay = (req, res, next) => {
  const { displayName } = req.body;
  const message = '"displayName" length must be at least 8 characters long';

  if (displayName.length < 8) return res.status(HTTP_BAD_REQUEST).json({ message });

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const messageOne = '"email" is required';
  const messageTwo = '"email" must be a valid email';
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email || email === '') return res.status(HTTP_BAD_REQUEST).json({ message: messageOne }); 

  if (emailRegex.test(email) === false) {
    return res.status(HTTP_BAD_REQUEST).json({ message: messageTwo });
  } 

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const messageOne = '"password" is required';
  const messageTwo = '"password" length must be 6 characters long';

  if (!password || password === '') {
    return res.status(HTTP_BAD_REQUEST).json({ message: messageOne });
  }

  if (password.length < 6 || password.length > 6) {
    return res.status(HTTP_BAD_REQUEST).json({ message: messageTwo });
  }

  next();
};

const validateImage = (req, res, next) => {
  const { image } = req.body;
  const message = '"image" is required';

  if (!image || image === '') return res.status(HTTP_BAD_REQUEST).json({ message });

  next();
};

module.exports = {
  validateDisplay,
  validateEmail,
  validatePassword,
  validateImage,
};