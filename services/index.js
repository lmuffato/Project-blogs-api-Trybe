const getAllPosts = require('./getAllPosts');
const getPostsLike = require('./getPostsLike');
const getToken = require('./getToken');
const getUser = require('./getUser');
const postCategory = require('./postCategory');
const takeToken = require('./taketoken');

module.exports = {
    getUser,
    getToken,
    takeToken,
    postCategory,
    getPostsLike,
    getAllPosts,
};