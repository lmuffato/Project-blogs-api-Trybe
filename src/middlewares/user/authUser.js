const Auth = require('../Auth');

const userSchema = require('../../schemas/UserSchema');

const validations = ['displayName', 'image', 'email', 'password'];

const auth = new Auth(validations, userSchema);

const authUser = auth.getAuth();

module.exports = authUser;
