const { Category } = require('../models');
// const { ValidateError, CreateToken } = require('../utils');
// const { CONFLICT/* , BAD_REQUEST, NOT_FOUND */ } = require('../utils/statusCode');

// const getByEmail = (email) => User
//   .findOne({ where: { email } })
//   .then((result) => result);

const create = async (name) => {
  // const { displayName, email, password, image } = userData;
  // const emailIsSingle = await getByEmail(email);
  // if (emailIsSingle) throw ValidateError(CONFLICT, 'User already registered');
  
  const newCategory = await Category.create({ name });
  // const { password: _, ...userPayload } = newUser;

  // const token = CreateToken(userPayload);
  return newCategory;
};

// const validateUserAccess = (user, email, password) => {
//   if (user === null) throw ValidateError(BAD_REQUEST, 'Invalid fields');

//   if (user.email !== email || user.password !== password) {
//     throw ValidateError(BAD_REQUEST, 'Invalid fields');
//   }
// };

// const login = async (email, password) => {
//   const user = await getByEmail(email);
  
//   validateUserAccess(user, email, password);
//   const { password: _, ...userPlayload } = user;
//   const token = CreateToken(userPlayload);
//   return token;
// };

const getAll = () => Category.findAll().then((res) => res);

// const getById = (id) => User
//   .findOne({ where: { id } })
//   .then((res) => {
//     if (!res) throw ValidateError(NOT_FOUND, 'User does not exist');
//     return res;
//    });

module.exports = {
  create,
  // login,
  getAll,
  // getById,
};