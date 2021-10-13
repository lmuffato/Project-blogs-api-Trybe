const { Router } = require('express');

const { 
  createUser,
  findAll,
} = require('../controllers/userController');
const validateUser = require('../validations/validations');
// const validateJWT = require('../auth/validateJWT');

const routes = Router();

routes.post('/user', validateUser, createUser); // requisito 1
// routes.post('/login', createUser); // requisito 2
routes.get('/user', findAll); // requisito 3
// routes.get('/user/:id', createUser); // requisito 4
// routes.post('/categories', createUser); // requisito 5
// routes.get('/categories', createUser); // requisito 6
// routes.post('/post', createUser); // requisito 7
// routes.get('/post', createUser); // requisito 8
// routes.get('/post/:id', createUser); // requisito 9
// routes.put('/post/:id', createUser); // requisito 10
// // Bônus
// routes.delete('/post/:id', createUser); // requisito 11
// routes.delete('/user/me', createUser); // requisito 12
// routes.get('/post/search?q=:searchTerm', createUser); // requisito 13

module.exports = routes;
