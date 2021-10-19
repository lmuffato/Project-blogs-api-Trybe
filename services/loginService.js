const joi = require('../middlewares/joiSchema');
const { User } = require('../models');
const token = require('../middlewares/token');

const userLogin = async (data) => {
  const { error } = joi.Login.validate(data);
  if (error) return { status: 400, message: error.details[0].message };

  const searchUser = await User.findOne({ 
    where: { email: data.email } });
    if (!searchUser) return { status: 400, message: 'Invalid fields' };

    return { status: 200, data: { token } };
};

module.exports = { userLogin };