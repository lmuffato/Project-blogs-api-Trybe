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
  // await User.create({ data }); Outra forma de criar o objeto
  return { status: 201, message: 'User created' };
}

async function findUsers() {
  const users = await User.findAll();
  return { status: 200, data: users };
}

async function findById(id) {
  const users = await User.findByPk(id);
  if (!users) return { status: 404, message: 'User does not exist' };
  return { status: 200, data: users };
}

module.exports = { createUser, findUsers, findById };