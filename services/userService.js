const { Users } = require('../models');

function verificaEmail(email) {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}

const validDisplayName = (displayName) => {
  if (!displayName) {
    return {
      code: 400,
      message: '"displayName" is required',
    };
  }
  if (displayName.length < 8) {
    return {
      code: 400,
      message: '"displayName" length must be at least 8 characters long',
    };
  }
  return {};
};

const validEmail = (email) => {
  if (!email) {
    return {
      code: 400,
      message: '"email" is required',
    };
  }
  if (!verificaEmail(email)) {
    return {
      code: 400,
      message: '"email" must be a valid email',
    };
  }
  return {};
};

const validPassword = (password) => {
  if (!password) {
    return {
      code: 400,
      message: '"password" is required',
    };
  }
  if (password.length < 6) {
    return {
      code: 400,
      message: '"password" length must be 6 characters long',
    };
  }
  return {};
};

const createUser = async ({ displayName, email, password, image }) => {
  const validDName = validDisplayName(displayName);
  if (validDName.message) return validDName;
  
  const validaEmail = validEmail(email);
  if (validaEmail.message) return validaEmail;
  
  const validaSenha = validPassword(password);
  if (validaSenha.message) return validaSenha;

  if (await Users.findOne({ where: { email } })) {
    return {
      code: 409,
      message: 'User already registered',
    };
  }
  
  const newUser = await Users.create({ displayName, email, password, image });
  return newUser;
};

const getUser = async () => {
  const getAll = await Users.findAll();
  return getAll;
};

const getById = async (id) => {
  const user = await Users.findByPk(id);
  if (!user) {
    return {
      code: 404,
      message: 'User does not exist',
    };
  }
  return user;
};

module.exports = { createUser, getUser, getById };
