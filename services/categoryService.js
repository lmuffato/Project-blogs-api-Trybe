const { Categories } = require('../models');
// const userSchema = require('../schema/userSchema');

const HTTP_BAD_STATUS = 400;
const HTTP_CONFLICT_STATUS = 409;
// const HTTP_NOT_FOUND_STATUS = 404;

const insert = async (name) => {
  if (!name) return ({ code: HTTP_BAD_STATUS, message: '"name" is required' });

  const alreadyExists = await Categories.findOne({ where: { name } });
  if (alreadyExists) return ({ code: HTTP_CONFLICT_STATUS, message: 'category already exists' });
  const newCategory = await Categories.create({ name });
  const { dataValues } = newCategory;

  return dataValues;
};

// const findAll = async () => {
//   const users = await Users.findAll();
//   const response = [];

//   users.forEach((user) => {
//     const { id, displayName, email, image } = user;
//     response.push({ id, displayName, email, image });
//   });

//   return response;
// };

// const findByID = async (receivedId) => {
//   const user = await Users.findByPk(receivedId);

//   if (!user) return ({ code: HTTP_NOT_FOUND_STATUS, message: 'User does not exist' });

//   const { id, displayName, email, image } = user;
//   const response = { id, displayName, email, image };

//   return response;
// };

module.exports = {
  insert,
  // findAll,
  // findByID,
};
