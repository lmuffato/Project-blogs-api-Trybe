const joi = require('../middlewares/joiSchema');
const { User } = require('../models');

function checkUser(data) {
  const { error } = joi.User.validate(data);
  if (error) {
    return { status: 400, error: error.details[0].message };
  }
  return false;
}

async function createUser(data) {
  const checked = checkUser(data);
  if (checked) {
    return checked;
  }
  const { displayName, email, password, image } = data;
  const searchUser = await User.findOne({
    where: { email },
  });
  if (searchUser) {
    return { status: 409, error: 'User already registered' };
  } 
  await User.create({ displayName, email, password, image });
}

module.export = { checkUser, createUser };