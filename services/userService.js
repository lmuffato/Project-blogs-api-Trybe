const jwt = require('jsonwebtoken');

const { Users } = require('../models');

const secret = 'Nanii!!!';

const errCases = ({ validName, emailValidFormat, newEmail, validPassword }) => {
  switch (false) {
    case validName: return { code: 'BAD_REQUEST',
    err: { message: '"displayName" length must be at least 8 characters long' } };
    case emailValidFormat: return { code: 'BAD_REQUEST',
    err: { message: '"email" must be a valid email' } };
    case newEmail: return { code: 'BAD_REQUEST',
    err: { message: 'User already registered' } };
    case validPassword: return { code: 'BAD_REQUEST',
    err: { message: '"password" length must be at least 6 chracters long' } };
    default: return true;
  }
};

const newUserValidations = async (displayName, email, password) => {
  if (!email) { 
    return { code: 'BAD_REQUEST',
  err: { message: '"email" is required' } };
  }
  if (!password) { 
    return { code: 'BAD_REQUEST',
    err: { message: '"password" is required' } };
    }
  const validName = displayName.length >= 8;
  const emailValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const newEmail = await Users.findAll()
  .then((users) => users.every(({ email: userEmail }) => userEmail !== email)); 
  const validPassword = password.length >= 6;
  
  const isValid = errCases({ validName, emailValidFormat, newEmail, validPassword }); 

  return isValid;
};

const addNewUser = async (displayName, email, password, image) => {
  const isValid = await newUserValidations(displayName, email, password);
  if (isValid.err) return isValid;
  try {
    const createNewUser = await Users.create({ displayName, email, password, image });

    return createNewUser;
  } catch (e) {
    console.log(e.message);
    return { code: 'SERVER_ERROR', err: { message: 'Algo deu errado' } };
  }
};

module.exports = {
  addNewUser,
};