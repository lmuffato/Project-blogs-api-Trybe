const routes = require('express').Router();

const User = require('./user');
const login = require('./login');
const categories = require('./categorie');
const post = require('./post');

routes.use('/user', User);
routes.use('/login', login);
routes.use('/categories', categories);
routes.use('/post', post);

module.exports = routes;