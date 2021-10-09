const Auth = require('../Auth');

const updateBlogPostSchema = require('../../schemas/UpdateBlogPostSchema');

const validations = ['title', 'content'];

const auth = new Auth(validations, updateBlogPostSchema);

const authUpdatePost = auth.getAuth();

module.exports = authUpdatePost;
