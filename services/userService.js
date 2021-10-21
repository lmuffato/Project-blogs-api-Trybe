const jwt = require('jsonwebtoken');

const { User } = require('../models');

const secret = 'Nanii!!!';

const errCases = ({ validName, emailValidFormat, newEmail, validPassword }) => {
  switch (false) {
    case validName: return { code: 'BAD_REQUEST',
    err: { message: '"displayName" length must be at least 8 characters long' } };
    case emailValidFormat: return { code: 'BAD_REQUEST',
    err: { message: '"email" must be a valid email' } };
    case newEmail: return { code: 'CONFLICT',
    err: { message: 'User already registered' } };
    case validPassword: return { code: 'BAD_REQUEST',
    err: { message: '"password" length must be 6 characters long' } };
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
  const emailValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const newEmail = await User.findAll()
  .then((users) => users.every(({ email: userEmail }) => userEmail !== email))
    .catch((_err) => ({ code: 'SERVER_ERROR', err: { message: 'Algo deu errado' } })); 
  const validPassword = password.length >= 6;
  
  const isValid = errCases({ validName, emailValidFormat, newEmail, validPassword }); 

  return isValid;
};

const addNewUser = async (displayName, email, password, image) => {
  const isValid = await newUserValidations(displayName, email, password);
  if (isValid.err) return isValid;
  try {
    const { dataValues: {
        id, displayName: userName, email: userEmail,
      } } = await User.create({ displayName, email, password, image });

    const token = jwt.sign({ payload: { id, userName, userEmail } }, secret);
    
    return token;
  } catch (err) {
    console.log(err.message);
    return { code: 'SERVER_ERROR', err: { message: 'Algo deu errado' } };
  }
};

module.exports = {
  addNewUser,
};