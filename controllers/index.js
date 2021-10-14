const getOneUser = require('./getOneUser');
const getUser = require('./getUser');
const postCategory = require('./postCategory');
const postLogin = require('./postLogin');
const postUser = require('./postUser');

module.exports = {
    postUser,
    postLogin,
    getUser,
    getOneUser,
    postCategory,
};