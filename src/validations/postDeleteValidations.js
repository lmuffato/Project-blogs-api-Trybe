const validateOwner = require('./validatePostOwner');

async function validatePostDeleteFields(postId, userId) {
  const response = await validateOwner(postId, userId);

  console.log(response);

  return response;
}

module.exports = { validatePostDeleteFields };