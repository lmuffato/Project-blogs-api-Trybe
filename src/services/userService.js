const { newToken } = require('../middlewares/token');
const { Users } = require('../models');

const findByField = async (parameter) => {
  const result = await Users.findOne({ where: { email: parameter } });
  // console.log('ola');
  return result;
};

const createUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;
  const emailAlreadyExist = await findByField(email);
  // console.log(emailAlreadyExist);

  if (emailAlreadyExist) {
    return { 
      code: 409,
      message: 'User already registered', 
    }; 
  }
  const { password: _, ...newUserData } = await Users.create({ 
    displayName, email, password, image, 
  });

  const token = newToken(newUserData);
  return token;
};

module.exports = {
  createUser,
};