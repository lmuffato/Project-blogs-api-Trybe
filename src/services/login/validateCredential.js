const { User } = require('../../models');
const UserSchema = require('../../schemas/user');

module.exports = async ({ email, password }) => {
  const { error } = UserSchema.UserValidations({ email, password });
  if (error) return { status: 400, message: error.details[0].message };

  const result = await User.findOne({ where: { email, password } }); 

  if (!result) return { status: 400, message: 'Invalid fields' };
  
  return result.dataValues;
};