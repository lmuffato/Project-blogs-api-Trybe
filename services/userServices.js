const { Users } = require('../models');

const findEmail = async (email) => {
  const checkEmail = await Users.findOne({ where: { email } });
  return checkEmail;
};

const create = async (body) => {
  const email = await findEmail(body.email);

  if (email) return { status: 409, message: 'User already registered' };

  const user = await Users.create(body);

  return { status: 201, data: { user } };
};

module.exports = {
  create,
};
