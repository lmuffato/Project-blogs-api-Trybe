const {
  error1,
  error2,
  error3,
  error4,
  error5,
  error7,
  error8,
  error14,
  error15,
  error16,
  error17,
} = require('./errors');
const { findCategory } = require('../controllers/categoriesController');

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

const loginValidator = (req, res, next) => {
  const { email, password } = req.body;

 if (email === '') {
  return res.status(error7.error.status).json({ message: error7.error.message });
} if (password === '') {
  return res.status(error8.error.status).json({ message: error8.error.message });
} if (!email) {
  return res.status(error3.error.status).json({ message: error3.error.message });
} if (!password) {
  return res.status(error5.error.status).json({ message: error5.error.message });
}

  next();
};

const postValidator = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

 if (!title) {
  return res.status(error14.error.status).json({ message: error14.error.message });
} if (!content) {
  return res.status(error15.error.status).json({ message: error15.error.message });
} if (!categoryIds) {
  return res.status(error16.error.status).json({ message: error16.error.message });
}

  next();
};

const categoryValidator = (req, res, next) => {
  const { categoryIds } = req.body;

  categoryIds.every(async (id) => {
    if (await findCategory(id) === null) {
      return res.status(error17.error.status).json({ message: error17.error.message });
    } return next();
  });
};

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
  loginValidator,
  postValidator,
  categoryValidator,
};