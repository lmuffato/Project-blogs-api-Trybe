const {
  error1,
  error2,
  error3,
  error4,
  error5,
} = require('./errors');

const nameValidator = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8 || typeof displayName !== 'string') {
    return res.status(error1.error.status).json({ message: error1.error.message });
  }

  next();
};

const emailValidator = (req, res, next) => {
  const { email } = req.body;

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
 
if (!email) {
  return res.status(error3.error.status).json({ message: error3.error.message });
} if (emailPattern.test(email) === false) {
  return res.status(error2.error.status).json({ message: error2.error.message });
} 

  next();
};

const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(error5.error.status).json({ message: error5.error.message });
  } if (password.length !== 6) {
    return res.status(error4.error.status).json({ message: error4.error.message });
  } 

  next();
};

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
};