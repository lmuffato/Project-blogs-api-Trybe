const { User } = require('../models');

const requiredField = (param) => {
  if (param === undefined) return true;
};

const blankField = (param) => {
  if (param === '') return true;
};

const lengthCaracteres = (param, length) => {
  if (param.length < length) return true;
};

const emailInvalid = (email) => (!email.match(/\S+@\S+\.\S+/));

const checkEmail = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  if (userEmail) return true;
};

const status = {
  code400: 400,
  code409: 409,
};

const message = {
  messageEmailRequired: '"email" is required',
  messagePassword: '"password" is required',
  messageEmailInvalid: '"email" must be a valid email',
  messageLengthName: '"displayName" length must be at least 8 characters long',
  messageLengthPassword: '"password" length must be 6 characters long',
  messageEmailExisting: 'User already registered',
  messageEmailBlank: '"email" is not allowed to be empty',
  messagePasswordBlank: '"password" is not allowed to be empty',
};

const validateCreateUser = (displayName, password) => {
  const { messagePassword, messageLengthName, messageLengthPassword } = message;
  const { code400 } = status;
  switch (true) {
    case requiredField(password): return { code: code400, message: messagePassword };
    case lengthCaracteres(password, 6): return { code: code400, message: messageLengthPassword };
    case lengthCaracteres(displayName, 8): return { code: code400, message: messageLengthName };
  default: return {};
  }
};

const validateEmail = async (email) => {
  const { 
    messageEmailRequired, 
    messageEmailInvalid, 
    messageEmailExisting, 
  } = message;
  const { code400, code409 } = status;

  switch (true) {
    case requiredField(email): return { code: code400, message: messageEmailRequired };
    case emailInvalid(email): return { code: code400, message: messageEmailInvalid };
    case (await checkEmail(email)): return { code: code409, message: messageEmailExisting };
  default: return {};
  }
};

const validateLogin = async (email, password) => {
  const { 
    messageEmailRequired, 
    messagePassword, 
    messageEmailBlank, 
    messagePasswordBlank,
  } = message;
  const { code400 } = status;

  switch (true) {
    case requiredField(email): return { code: code400, message: messageEmailRequired };
    case requiredField(password): return { code: code400, message: messagePassword };
    case blankField(email): return { code: code400, message: messageEmailBlank };
    case blankField(password): return { code: code400, message: messagePasswordBlank };
    default: return {};
  }
};

module.exports = {
  validateEmail,
  validateCreateUser,
  validateLogin,
};