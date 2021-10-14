const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const userSchema = require('../schema/userSchema');

const SECRET = 'Trybe';

const insertUser = async (user) => {
  const { displayName, email, password, image } = user;
  const isNameValid = userSchema.validateName(displayName);
  const isEmailValid = userSchema.validateEmail(email);
  const isPasswordValid = userSchema.validatePassword(password);

  if (isNameValid) return ({ code: isNameValid.code, message: isNameValid.message });
  if (isEmailValid) return ({ code: isEmailValid.code, message: isEmailValid.message });
  if (isPasswordValid) return ({ code: isPasswordValid.code, message: isPasswordValid.message });

  const alreadyExists = await Users.findOne({ where: { email } });
  if (alreadyExists) return ({ code: 409, message: 'User already registered' });
  const newUser = await Users.create({ displayName, email, password, image });
  const { password: _, ...userPayload } = newUser;
  const token = jwt.sign(userPayload, SECRET);

  return { token };
};

// const findByCredentials = async (email, password) => {
//   if (password === undefined || email === undefined) { 
//     return ({ code: 401, message: 'All fields must be filled' }); 
//   }

//   const user = await userModel.getByEmail(email);
//   if (!user || user.password !== password) {
//     return ({ code: 401, message: 'Incorrect username or password' });
//   }

//   const { password: _, ...userPayload } = user;

//   const token = jwt.sign(userPayload, SECRET);

//   return { token };
// };

module.exports = {
  insertUser,
  // findByCredentials,
};
