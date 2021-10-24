const jwt = require('jsonwebtoken');

const { Category } = require('../models');

const secret = 'Nanii!!!';

const addCategoryValidations = async (token, name) => {
  switch (true) {
    case !token: return { code: 'UNAUTHORIZED',
    err: { message: 'Token not found' } };

    case !name: return { code: 'BAD_REQUEST',
    err: { message: '"name" is required' } };

    default: return true;
  }
};

const addCategory = async (token, name) => {
  const isValid = await addCategoryValidations(token, name);
  if (isValid.err) return isValid;
  try {
    await jwt.verify(token, secret);
    const { dataValues } = await Category.create({ name });
    
    return dataValues;
  } catch (err) {
    console.log(err.message);
    return { code: 'UNAUTHORIZED', err: { message: 'Expired or invalid token' } };
  }
};

const getAllCategory = async (token) => {
  if (!token) return { code: 'UNAUTHORIZED', err: { message: 'Token not found' } };
  try {
    await jwt.verify(token, secret);
    return Category.findAll();
  } catch (err) {
    console.log(err.message);
    return { code: 'UNAUTHORIZED', err: { message: 'Expired or invalid token' } };
  }
};

module.exports = {
  addCategory,
  getAllCategory,
};
