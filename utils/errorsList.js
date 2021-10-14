const invalidEmail = {
  status: 400,
  message: { message: '"email" must be a valid email' },
};

const emailRequired = {
  status: 400,
  message: { message: '"email" is required' },
};

const nameRequired = {
  status: 400,
  message: { message: '"displayName" is required' },
};

const nameLength = {
  status: 400,
  message: { message: '"displayName" length must be at least 8 characters long' },
};

const passwordLength = {
  status: 400,
  message: { message: '"password" length must be 6 characters long' },
};

const passwordRequired = {
  status: 400,
  message: { message: '"password" is required' },
};

const emptyEmail = {
  status: 400,
  message: { message: '"email" is not allowed to be empty' },
};

const emptyPassword = {
  status: 400,
  message: { message: '"password" is not allowed to be empty' },
};

const categoryIdNotFound = {
  status: 400,
  message: { message: '"categoryIds" not found' },
};

const requiredTitle = {
  status: 400,
  message: { message: '"title" is required' },
};

const requiredContent = {
  status: 400,
  message: { message: '"content" is required' },
};

const requiredCategoryId = {
  status: 400,
  message: { message: '"categoryIds" is required' },
};

module.exports = {
  invalidEmail,
  emailRequired,
  nameRequired,
  nameLength,
  passwordLength,
  passwordRequired,
  emptyEmail,
  emptyPassword,
  categoryIdNotFound,
  requiredTitle,
  requiredContent,
  requiredCategoryId,
};
