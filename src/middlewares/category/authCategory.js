const Auth = require('../Auth');

const categorySchema = require('../../schemas/CategorySchema');

const validations = ['name'];

const auth = new Auth(validations, categorySchema);

const authCategory = auth.getAuth();

module.exports = authCategory;
