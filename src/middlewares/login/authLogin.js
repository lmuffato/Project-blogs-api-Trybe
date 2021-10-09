const Auth = require('../Auth');

const loginSchema = require('../../schemas/LoginSchema');

const validations = ['email', 'password'];

const auth = new Auth(validations, loginSchema);

const authLogin = auth.getAuth();

module.exports = authLogin;
