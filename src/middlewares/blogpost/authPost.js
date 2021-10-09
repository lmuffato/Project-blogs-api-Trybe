const Auth = require('../Auth');

const blogPostSchema = require('../../schemas/BlogPostSchema');

const validations = ['title', 'content', 'categoryIds'];

const auth = new Auth(validations, blogPostSchema);

const authPost = auth.getAuth();

module.exports = authPost;
