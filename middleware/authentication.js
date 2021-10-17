const HTTP_BAD_REQUEST = 400;

const NAME_LENGTH = '"displayName" length must be at least 8 characters long';
const EMAIL_REQUIRED = '"email" is required';
const EMAIL_VALID = '"email" must be a valid email';
const PASSWORD_REQUIRED = '"password" is required';
const PASSWORD_LENGTH = '"password" length must be 6 characters long';

const nameLenth = 8;
const passwordLenth = 6;

const validName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < nameLenth || !displayName) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: NAME_LENGTH });
  }
  next();
};

const validEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: EMAIL_REQUIRED });
  }
  next();
};

const validEmailFormat = (req, res, next) => {
  const { email } = req.body;
  const emailFormat = (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email));
  if (!emailFormat) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: EMAIL_VALID });
  }
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(HTTP_BAD_REQUEST).json({ message: PASSWORD_REQUIRED });
  }
  if (password.length < passwordLenth) {
    return res.status(HTTP_BAD_REQUEST).json({ message: PASSWORD_LENGTH });
  }
  next();
};

module.exports = {
  validName,
  validEmail,
  validEmailFormat,
  validPassword,
};