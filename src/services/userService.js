const { newToken } = require('../middlewares/token');
const { Users } = require('../models');

const findByField = async (parameter) => {
  const result = await Users.findOne({ where: { email: parameter } });
  return result;
};

const createUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;
  const emailAlreadyExist = await findByField(email);

  if (emailAlreadyExist) {
    return { 
      code: 409,
      message: 'User already registered', 
    }; 
  }
  const { password: _, ...userWithoutPassword } = await Users.create({ 
    displayName, email, password, image, 
  });

  const token = newToken(userWithoutPassword);
  return token;
};

module.exports = {
  createUser,
};