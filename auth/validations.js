const { findCategory } = require('../controller/categoriesController');

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

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  
  if (emailPattern.test(email) === false) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const passwordValidator = (req, res, next) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  } 

  next();
};

const loginValidator = (req, res, next) => {
  const { email, password } = req.body;

 if (email === '') {
  return res.status(400).json({ message: '"email" is not allowed to be empty' });
} if (password === '') {
  return res.status(400).json({ message: '"password" is not allowed to be empty' });
} if (!email) {
  return res.status(400).json({ message: '"email" is required' });
} if (!password) {
  return res.status(400).json({ message: '"password" is required' });
}

  next();
};

const postValidator = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

 if (!title) {
  return res.status(400).json({ message: '"title" is required' });
} if (!content) {
  return res.status(400).json({ message: '"content" is required' });
} if (!categoryIds) {
  return res.status(400).json({ message: '"categoryIds" is required' });
}

  next();
};

const categoryValidator = (req, res, next) => {
  const { categoryIds } = req.body;

  // Onde por o findCategory? Aqui ou no Controler?

  categoryIds.every(async (id) => {
    if (await findCategory(id) === null) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    } return next();
  });
};

const updateValidator = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

 if (!title) {
  return res.status(400).json({ message: '"title" is required' });
} if (!content) {
  return res.status(400).json({ message: '"content" is required' });
} if (categoryIds) {
  return res.status(400).json({ message: 'Categories cannot be edited' });
}
  next();
};

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
  loginValidator,
  postValidator,
  categoryValidator,
  updateValidator,
}; 