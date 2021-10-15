const { BlogPosts, Categories } = require('../models');
// const userSchema = require('../schema/userSchema');

const HTTP_BAD_STATUS = 400;
// const HTTP_CONFLICT_STATUS = 409;
// const HTTP_NOT_FOUND_STATUS = 404;

const insert = async (category) => {
  const { title, userId, content, categoryIds } = category;

  if (!title) return ({ code: HTTP_BAD_STATUS, message: '"title" is required' });
  if (!content) return ({ code: HTTP_BAD_STATUS, message: '"content" is required' });
  if (!categoryIds) return ({ code: HTTP_BAD_STATUS, message: '"categoryIds" is required' });

  const categories = await Categories.findAll();
  let categoryExist = null;
  
  categoryIds.forEach((receivedCategory) => {
    const exists = categories.find((existCategory) => existCategory.id === receivedCategory);
      categoryExist = exists;
  });

  if (!categoryExist) return ({ code: HTTP_BAD_STATUS, message: '"categoryIds" not found' });

  const newPost = await BlogPosts.create({ title, userId, content });
  const { dataValues } = newPost;
  console.log(dataValues);

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
