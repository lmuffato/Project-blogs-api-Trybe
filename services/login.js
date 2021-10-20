const { User } = require('../models');
const schema = require('../middleware/schema');

const { newToken } = require('../middleware/token');

const userLogin = async (data) => {
const { error } = schema.Login.validate(data);
if (error) return { status: 400, message: error.details[0].message };

const user = await User.findOne({ where: { email: data.email } });
if (!user) return { status: 400, message: 'Invalid fields' };
const token = newToken(user);
return { status: 200, data: token };
};

module.exports = {
userLogin,
};