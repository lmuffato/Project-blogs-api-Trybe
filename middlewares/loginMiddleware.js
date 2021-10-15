const { User } = require('../models');
const { loginValidate } = require('../validateJOI/validateUserJoi');

const login = async (req, _res, next) => {
const { error } = loginValidate.validate(req.body);
if (error) return next({ statusCode: 400, message: error.message });
const checkIfUserExists = await User.findOne({ where: { email: req.body.email } });
if (!checkIfUserExists) return next({ statusCode: 400, message: 'Invalid fields' });
next();
};
module.exports = login;