const { errors, httpStatusCode } = require('../utils/errors');
const { User } = require('../models');

const validateDisplayName = (displayName) => {
  if (displayName.length < 8) {
 return { 
    status: httpStatusCode.badRequest,
    message: errors.lengthError('displayName', 8),
  }; 
}
};

const emailFormat = async (email) => {
  const regexEmail = /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm; // => https://regexr.com;
  if (!regexEmail.test(email)) {
    return { status: httpStatusCode.badRequest, message: errors.validEmail() };
  }
};

const emailRequired = (email) => {
  if (email === null || email === undefined) {
    return { status: httpStatusCode.badRequest, message: errors.requiredError('email') };
  }
};

const verifyEmail = async (email) => {
  const searchEmail = await User.findOne({ where: { email } });
  console.log('resultado da busca por e-mail', searchEmail);
  if (searchEmail) {
    return { status: httpStatusCode.conflit, message: errors.userAlreadyExistError };
  }
};

// solução encontrado com ajuda de Daniel Ribeiro - Turma - 10A
const validateEmail = async (email) => {
  const message = emailRequired(email);
  // console.log('returno do emailRequired', message);
  if (message) return message;
  
  const verifyEmailMessage = await verifyEmail(email);
  if (verifyEmailMessage) return verifyEmailMessage;
  
  const messageFormatEmail = emailFormat(email);
  if (messageFormatEmail) return messageFormatEmail;
};

const validatePassword = (password) => {
  if (!password || password === '') {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('password'),
    };
  }
  if (password.length < 6) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.passwordLengthError('password', 6),
    };
  }
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  verifyEmail,
};