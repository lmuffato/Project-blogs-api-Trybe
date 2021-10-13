const { BAD_REQUEST } = require('http-status-codes');
const { User } = require('../models');
const { loginSchema } = require('../validations/schema');

const login = async (req, _res, next) => {
const { error } = loginSchema.validate(req.body);
if (error) return next({ statusCode: BAD_REQUEST, message: error.message });
const checkIfUserExists = await User.findOne({ where: { email: req.body.email } });
if (!checkIfUserExists) return next({ statusCode: BAD_REQUEST, message: 'Invalid fields' });
next();
};
module.exports = login;