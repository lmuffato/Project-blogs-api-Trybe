const {
  ERROR_DISPLAY_NAME_LENGTH,
  ERROR_EMAIL_REQUIRED,
  ERROR_PASSWORD_LENGTH,
  ERROR_PASSWORD_REQUIRED,
  ERROR_VALID_EMAIL,
  ERROR_EMPTY_EMAIL,
  ERROR_EMPTY_PASSWORD,
} = require('../utils/errors');

const emailFormatValidation = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  const emailTested = emailRegex.test(email);
  if (!emailTested) {
    return res.status(ERROR_VALID_EMAIL.error.status)
      .json({ message: ERROR_VALID_EMAIL.error.message });
  }
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  if (!email || email === null) {
    return res.status(ERROR_EMAIL_REQUIRED.error.status)
      .json({ message: ERROR_EMAIL_REQUIRED.error.message });
  }
  next();
};

const displayNameValidation = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(ERROR_DISPLAY_NAME_LENGTH.error.status)
      .json({ message: ERROR_DISPLAY_NAME_LENGTH.error.message });
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(ERROR_PASSWORD_REQUIRED.error.status)
    .json({ message: ERROR_PASSWORD_REQUIRED.error.message });
  }
  if (password.length !== 6) {
    return res.status(ERROR_PASSWORD_LENGTH.error.status)
      .json({ message: ERROR_PASSWORD_LENGTH.error.message });
  }
  next();
};

const emailLoginValidation = (req, res, next) => {
  const { email } = req.body;
  if (email === '') {
    return res.status(ERROR_EMPTY_EMAIL.error.status)
      .json({ message: ERROR_EMPTY_EMAIL.error.message });
  }
  if (!email) {
    return res.status(ERROR_EMAIL_REQUIRED.error.status)
      .json({ message: ERROR_EMAIL_REQUIRED.error.message });
  }
  next();
};

const passwordLoginValidation = (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(ERROR_EMPTY_PASSWORD.error.status)
      .json({ message: ERROR_EMPTY_PASSWORD.error.message });
  }
  next();
};

module.exports = {
  emailFormatValidation,
  emailValidation,
  displayNameValidation,
  passwordValidation,
  emailLoginValidation,
  passwordLoginValidation,
};
