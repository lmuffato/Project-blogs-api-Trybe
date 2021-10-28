const validateOwner = require('./validateOwner');

async function validatePostDeleteFields(postId, userId) {
  const response = await validateOwner(postId, userId);

  return response;
}

module.exports = { validatePostDeleteFields };