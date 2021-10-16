const deleteBlogPost = require('./deletePost');
const deleteUser = require('./deleteUserModule');
const getCategories = require('./getCategories');
const getOnePost = require('./getOnePost');
const getOneUser = require('./getOneUser');
const getPost = require('./getPost');
const getUser = require('./getUser');
const postCategory = require('./postCategory');
const postLogin = require('./postLogin');
const postPost = require('./postPosts');
const postUser = require('./postUser');
const putPost = require('./putPost');

module.exports = {
    postUser,
    postLogin,
    getUser,
    getOneUser,
    postCategory,
    getCategories,
    postPost,
    getPost,
    getOnePost,
    putPost,
    deleteBlogPost,
    deleteUser,
};