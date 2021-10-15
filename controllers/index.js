const getCategories = require('./getCategories');
const getOneUser = require('./getOneUser');
const getPost = require('./getPost');
const getUser = require('./getUser');
const postCategory = require('./postCategory');
const postLogin = require('./postLogin');
const postPost = require('./postPosts');
const postUser = require('./postUser');

module.exports = {
    postUser,
    postLogin,
    getUser,
    getOneUser,
    postCategory,
    getCategories,
    postPost,
    getPost,
};